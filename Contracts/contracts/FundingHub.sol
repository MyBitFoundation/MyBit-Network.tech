pragma solidity 0.4.24;

import "./SafeMath.sol";
import "./Database.sol";

//------------------------------------------------------------------------------------------------------------------
// This contract is where users can fund assets or receive refunds from failed funding periods. Funding stages are represented by uints.
// Funding stages: 0: funding hasn't started, 1: currently being funded, 2: funding failed,  3: funding success, 4: asset is live
//------------------------------------------------------------------------------------------------------------------
contract FundingHub {
  using SafeMath for *;

  Database public database;

  bool private rentrancy_lock;    // Prevents re-entrancy attack

  //------------------------------------------------------------------------------------------------------------------
  // Contructor:
  // @Param: The address for the MyBit database
  //------------------------------------------------------------------------------------------------------------------
  constructor(address _database)
  public {
      database = Database(_database);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Users can send Ether here to fund asset if funding goal hasn't been reached and the funding period isn't over.
  // Invariants: Requires Eth be sent with transaction |  Must be in funding stage. Must be under goal | Must have KYC approved. | contract is not paused
  //------------------------------------------------------------------------------------------------------------------
  function fund(bytes32 _assetID)
  external
  payable
  requiresEther
  whenNotPaused
  atStage(_assetID, uint(1))
  priceUpdated
  fundingLimit(_assetID)
  onlyApproved
  returns (bool) {
    uint ownershipUnits = database.uintStorage(keccak256(abi.encodePacked("ownershipUnits", _assetID, msg.sender)));
    if (ownershipUnits == 0) {
      emit LogNewFunder(msg.sender, _assetID);    // Create event to reference list of funders
    }
    uint amountRaised = database.uintStorage(keccak256(abi.encodePacked("amountRaised", _assetID)));
    database.setUint(keccak256(abi.encodePacked("amountRaised", _assetID)), amountRaised.add(msg.value));
    database.setUint(keccak256(abi.encodePacked("ownershipUnits", _assetID, msg.sender)), ownershipUnits.add(msg.value));
    emit LogAssetFunded(msg.sender, msg.value, _assetID);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // This is called once funding has succeeded. Sends Ether to installer, foundation and Token Holders
  // Invariants: Must be in stage FundingSuccess | MyBitFoundation + AssetEscrow  + BugEscrow addresses are set | Contract is not paused
  // Note: Will fail if addresses + percentages are not set. AmountRaised = WeiRaised = ownershipUnits
  // TODO: Installer gets extra 1-2 wei from solidity rounding down when faced with fraction
  // TODO: Create asset tokens here
  //------------------------------------------------------------------------------------------------------------------
  function payout(bytes32 _assetID)
  external
  nonReentrant
  whenNotPaused
  atStage(_assetID, uint(3))       // Can only get to stage 3 by receiving enough funding within time limit
  returns (bool) {
    uint amountRaised = database.uintStorage(keccak256(abi.encodePacked("amountRaised", _assetID)));
    uint myBitAmount = amountRaised.getFractionalAmount(database.uintStorage(keccak256(abi.encodePacked("myBitFoundationPercentage"))));
    uint installerAmount = amountRaised.sub(myBitAmount);
    database.addressStorage(keccak256(abi.encodePacked("MyBitFoundation"))).transfer(myBitAmount);             // Must be normal account
    database.addressStorage(keccak256(abi.encodePacked("InstallerEscrow"))).transfer(installerAmount);             // Must be normal account
    database.setUint(keccak256(abi.encodePacked("fundingStage", _assetID)), uint(4));
    emit LogAssetPayout(_assetID, amountRaised);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // This function needs to be called to allow refunds to be made. Signals to the myBitHub contract that funding has failed + moves stage to Funding failed
  // Invariants: Must be still be in funding stage | must be passed deadline
  //------------------------------------------------------------------------------------------------------------------
  function initiateRefund(bytes32 _assetID)
  external
  fundingPeriodOver(_assetID)
  atStage(_assetID, uint(1))
  returns (bool) {
    database.setUint(keccak256(abi.encodePacked("fundingStage", _assetID)), uint(2));
    emit LogAssetFundingFailed(_assetID, database.uintStorage(keccak256(abi.encodePacked("amountRaised", _assetID))));
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Contributors can retrieve their funds here if campaign is finished + failure and initateRefund() has been called.
  // Invariants: sender must have ownershipUnits | Must be in failed funding stage || No re-entry | Contract must not be paused
  //------------------------------------------------------------------------------------------------------------------
  function refund(bytes32 _assetID)
  external
  nonReentrant
  whenNotPaused
  atStage(_assetID, uint(2))
  returns (bool) {
    uint ownershipUnits = database.uintStorage(keccak256(abi.encodePacked("ownershipUnits", _assetID, msg.sender)));
    require (ownershipUnits > uint(0));
    database.deleteUint(keccak256(abi.encodePacked("ownershipUnits", _assetID, msg.sender)));
    uint amountRaised = database.uintStorage(keccak256(abi.encodePacked("amountRaised", _assetID)));
    database.setUint(keccak256(abi.encodePacked("amountRaised", _assetID)), amountRaised.sub(ownershipUnits));
    msg.sender.transfer(ownershipUnits);
    emit LogRefund(msg.sender, ownershipUnits);
    return true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Must be authorized by 1 of the 3 owners and then can be called by any of the other 2
  // Invariants: Must be 1 of 3 owners. Cannot be called by same owner who authorized the function to be called.
  //------------------------------------------------------------------------------------------------------------------
  function destroy(address _functionInitiator, address _holdingAddress)
  anyOwner
  public {
    require(_functionInitiator != msg.sender);
    require(database.boolStorage(keccak256(abi.encodePacked(address(this), _functionInitiator, "destroy", keccak256(abi.encodePacked(_holdingAddress))))));
    emit LogDestruction(_holdingAddress, address(this).balance, msg.sender);
    selfdestruct(_holdingAddress);
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------------------------------------
  // Requires caller is one of the three owners
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Requires that the contract is not paused
  //------------------------------------------------------------------------------------------------------------------
  modifier whenNotPaused {
    require(!database.boolStorage(keccak256(abi.encodePacked("pause", address(this)))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Don't let function caller re-enter function before initial transaction finishes
  //------------------------------------------------------------------------------------------------------------------
  modifier nonReentrant() {
    require(!rentrancy_lock);
    rentrancy_lock = true;
    _;
    rentrancy_lock = false;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Requires that Ether is sent with the transaction
  //------------------------------------------------------------------------------------------------------------------
  modifier requiresEther() {
    require(msg.value > 0);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Requires user has burnt tokens to access this function
  //------------------------------------------------------------------------------------------------------------------
  modifier onlyApproved{
    require(database.uintStorage(keccak256(abi.encodePacked("userAccess", msg.sender))) >= uint(1));
    require(database.uintStorage(keccak256(abi.encodePacked("userAccessExpiration", msg.sender))) > now);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Transitions funding period to success if enough Ether is raised
  // Must be in funding stage 3 (currently being funded).
  // Deletes funding raising variables if current transaction puts it over the goal.
  // TODO: Limit how far over the goal users are allowed to fund
  //------------------------------------------------------------------------------------------------------------------
  modifier fundingLimit(bytes32 _assetID) {
    require(now <= database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))));
    uint currentEthPrice = database.uintStorage(keccak256(abi.encodePacked("ethUSDPrice")));
    assert (currentEthPrice > uint(0));
    _;
    if (database.uintStorage(keccak256(abi.encodePacked("amountRaised", _assetID))).mul(currentEthPrice).div(1e18) >= database.uintStorage(keccak256(abi.encodePacked("amountToBeRaised", _assetID)))) {
       database.deleteUint(keccak256(abi.encodePacked("amountToBeRaised", _assetID)));      // No longer need this variable
       database.deleteUint(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
       database.setUint(keccak256(abi.encodePacked("fundingStage", _assetID)), uint(3));
       emit LogAssetFundingSuccess(_assetID, currentEthPrice);
      }
  }

  //------------------------------------------------------------------------------------------------------------------
  // Check that the Ether/USD prices have been updated
  //------------------------------------------------------------------------------------------------------------------
  modifier priceUpdated {
    require (now < database.uintStorage(keccak256(abi.encodePacked("priceExpiration"))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Requires the funding stage is at a particular stage
  //------------------------------------------------------------------------------------------------------------------
  modifier atStage(bytes32 _assetID, uint _stage) {
    require(database.uintStorage(keccak256(abi.encodePacked("fundingStage", _assetID))) == _stage);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Requires that the funding deadline has passed
  //------------------------------------------------------------------------------------------------------------------
  modifier fundingPeriodOver(bytes32 _assetID) {
    require(now >= database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Fallback: Reject Ether
  //------------------------------------------------------------------------------------------------------------------
  function ()
  public {
    revert();
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                            Events
  //------------------------------------------------------------------------------------------------------------------

  event LogNewFunder(address indexed _funder, bytes32 indexed _assetID);
  event LogAssetFunded(address indexed _sender, uint indexed _amount, bytes32 indexed _assetID);
  event LogAssetFundingFailed(bytes32 indexed _assetID, uint indexed _amountRaised);
  event LogAssetFundingSuccess(bytes32 indexed _assetID, uint indexed _currentEthPrice);
  event LogRefund(address _funder, uint _amount);
  event LogAssetPayout(bytes32 indexed _assetID, uint indexed _amount);
  event LogDestruction(address indexed _locationSent, uint indexed _amountSent, address indexed _caller);
}
