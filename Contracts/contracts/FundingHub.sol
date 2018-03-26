pragma solidity ^0.4.18;

import './SafeMath.sol';
import './Database.sol';
import './StakingBank.sol';
import './oraclizeAPI_05.sol';


// This contract is in charge of creating individual asset contracts. It acts as a reference for locations of Assets and other funding parameters
// Funding stages: { 0: funding hasn't started, 1: currently being funded, 2: funding failed,  3: funding success, 4: asset is live
contract FundingHub is usingOraclize{
  using SafeMath for *;

  //-----------Platform Addresses----------------
  Database public database;

  bool private rentrancy_lock;    // Prevents re-entrancy attack

  // Contructor:
  // @Param: The address for the MyBit database
  function FundingHub(address _database)
  public {
      database = Database(_database);

  }

  // Users can send Ether here to fund asset if funding goal hasn't been reached and the funding period isn't over.
  // Invariants: Requires Eth be sent with transaction |  Must be in funding stage. Must be under goal | Must have KYC approved. | contract is not paused
  function fund(bytes32 _assetID)
  external
  payable
  requiresEther
  whenNotPaused
  fundingLimit(_assetID)
  onlyApproved(2)
  atStage(_assetID, 1)
  returns (bool) {
    bytes32 queryID = oraclize_query('URL', 'json(https://api.coinmarketcap.com/v1/ticker/ethereum/).0.price_usd}');
    database.setAddress(queryID, msg.sender);
    database.setUint(queryID, msg.value);
    LogFundingOraclizeQuerySent(msg.sender, msg.value, queryID);
    return true;
  }

  function __callback(bytes32 myid, string result)
  external
  isOraclize
  whenNotPaused
  returns (bool)
  {
    uint msgValue = database.uintStorage(myid);
    address sender = database.addressStorage(myid);
    /*
    uint shares = database.uintStorage(keccak256("shares", _assetID, msg.sender));
    if (shares == 0) {
      LogNewFunder(msg.sender, block.timestamp);    // Create event to reference list of funders
    }

    uint amountRaised = database.uintStorage(keccak256("amountRaised", _assetID));
    database.setUint(keccak256("amountRaised", _assetID), amountRaised.add(msg.value));
    database.setUint(keccak256("shares", _assetID, msg.sender), shares.add(msg.value));
    LogAssetFunded(msg.sender, msg.value, block.timestamp);*/
    return true;
  }

  // This is called once funding has succeeded. Sends Ether to installer, foundation and Token Holders
  // Invariants: Must be in stage FundingSuccess | MyBitFoundation + AssetEscrow  + BugEscrow addresses are set | Contract is not paused
  // Note: Will fail if addresses + percentages are not set. AmountRaised = WeiRaised + assetManager shares
  function payout(bytes32 _assetID)
  external
  nonReentrant
  whenNotPaused
  atStage(_assetID, 3)       // Can only get to stage 3 by receiving enough funding within time limit
  returns (bool) {
    uint amountRaised = database.uintStorage(keccak256("amountRaised", _assetID));
    uint myBitAmount = amountRaised.getFractionalAmount(database.uintStorage(keccak256("myBitFoundationPercentage")));
    uint stakedTokenAmount = amountRaised.getFractionalAmount(database.uintStorage(keccak256("stakedTokenPercentage")));
    uint installerAmount = amountRaised.getFractionalAmount(database.uintStorage(keccak256("installerPercentage")));
    assert (myBitAmount.add(stakedTokenAmount).add(installerAmount) == amountRaised);       // TODO: for testing
    StakingBank stakingBank = StakingBank(database.addressStorage(keccak256("contract", "StakingBank")));
    stakingBank.receiveTransactionFee.value(stakedTokenAmount)(_assetID);
    database.addressStorage(keccak256("contract", "MyBitFoundation")).transfer(myBitAmount);             // Must be normal account
    database.addressStorage(keccak256("contract", "AssetEscrow")).transfer(installerAmount);             // Must be normal account
    transitionToStage(_assetID, 4);
    LogAssetPayout(_assetID, amountRaised, block.number);
    return true;
  }

  // This function needs to be called to allow refunds to be made. Signals to the myBitHub contract that funding has failed + moves stage to Funding failed
  // Invariants: Must be still be in funding stage | must be passed deadline
  function initiateRefund(bytes32 _assetID)
  external
  fundingPeriodOver(_assetID)
  atStage(_assetID, 1)
  returns (bool) {
    transitionToStage(_assetID, 2);
    LogAssetFundingFailed(_assetID, database.uintStorage(keccak256("amountRaised", _assetID)), block.timestamp);
    return true;
  }

  // Contributors can retrieve their funds here if campaign is finished + failure and initateRefund() has been called.
  // Invariants: sender must have shares | Must be in failed funding stage || No re-entry | Contract must not be paused
  function refund(bytes32 _assetID)
  external
  nonReentrant
  whenNotPaused
  atStage(_assetID, 2)
  returns (bool) {
    uint shares = database.uintStorage(keccak256("shares", _assetID, msg.sender));
    require (shares > 0);
    database.deleteUint(keccak256("shares", _assetID, msg.sender));
    uint amountRaised = database.uintStorage(keccak256("amountRaised", _assetID));
    database.setUint(keccak256("amountRaised", _assetID), amountRaised.sub(shares));
    msg.sender.transfer(shares);
    LogRefund(msg.sender, shares, block.timestamp);
    return true;
  }

  function transitionToStage(bytes32 _assetID, uint _stage)
  internal {
    database.setUint(keccak256("fundingStage", _assetID), _stage);
  }

  // Must be authorized by 1 of the 3 owners and then can be called by any of the other 2
  // Invariants: Must be 1 of 3 owners. Cannot be called by same owner who authorized the function to be called.
  function destroy(address _functionInitiator, address _holdingAddress)
  anyOwner
  public {
    require(_functionInitiator != msg.sender);
    require(database.boolStorage(keccak256(this, _functionInitiator, "destroy", keccak256(_holdingAddress))));
    LogDestruction(_holdingAddress, this.balance, msg.sender);
    selfdestruct(_holdingAddress);
  }



// -------------------------------------------------------Getters-------------------------------------------------------

  // Requires caller is one of the three owners
  modifier anyOwner {
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  // Requires that the contract is not paused
  modifier whenNotPaused {
    require(!database.boolStorage(keccak256("pause", this)));
    _;
  }

  modifier nonReentrant() {
    require(!rentrancy_lock);
    rentrancy_lock = true;
    _;
    rentrancy_lock = false;
  }

  // Requires that Ether is sent with the transaction
  modifier requiresEther() {
    require(msg.value > 0);
    _;
  }

  // Requires user has burnt tokens to access this function
  modifier onlyApproved(uint8 _accessLevel) {
    require(database.uintStorage(keccak256("userAccess", msg.sender)) >= _accessLevel);
    _;
  }

  // Must have not reached it's goal. Deletes funding raising variables if current transaction puts it over the goal.
  modifier fundingLimit(bytes32 _assetID) {
    require(database.uintStorage(keccak256("amountRaised", _assetID)) < database.uintStorage(keccak256("amountToBeRaised", _assetID)));
    require(now <= database.uintStorage(keccak256("fundingDeadline", _assetID)));
    _;
    if (database.uintStorage(keccak256("amountRaised", _assetID)) >= database.uintStorage(keccak256("amountToBeRaised", _assetID))) {
       database.deleteUint(keccak256("amountToBeRaised", _assetID));      // No longer need this variable
       LogAssetFundingSuccess(_assetID, block.timestamp);
       transitionToStage(_assetID, 3);
      }
  }

  // Requires the funding stage is at a particular stage
  modifier atStage(bytes32 _assetID, uint _stage) {
    require(database.uintStorage(keccak256("fundingStage", _assetID)) == _stage);
    _;
  }

  // Requires that the deadline has passed
  modifier fundingPeriodOver(bytes32 _assetID) {
    require(now >= database.uintStorage(keccak256("fundingDeadline", _assetID)));
    _;
  }

  // Reques that sender is oraclize service
  modifier isOraclize() {
    require(msg.sender == oraclize_cbAddress());
    _;
 }



  function ()
  public {
    revert();
  }

  event LogNewFunder(address indexed _funder, uint indexed _timestamp);
  event LogFundingOraclizeQuerySent(address indexed _funder, uint value, bytes32 indexed _queryID);
  event LogAssetFunded(address indexed _sender, uint indexed _amount, uint indexed _timestamp);
  event LogAssetFundingFailed(bytes32 indexed _assetID, uint indexed _amountRaised, uint indexed _timestamp);
  event LogAssetFundingSuccess(bytes32 indexed _assetID, uint indexed _timestamp);
  event LogRefund(address indexed _funder, uint indexed _amount, uint indexed _timestamp);
  event LogAssetPayout(bytes32 indexed _assetID, uint indexed _amount, uint indexed _blockNumber);
  event LogAssetEscrowChanged(address _newEscrowLocation, uint _timestamp);
  event LogDestruction(address indexed _locationSent, uint indexed _amountSent, address indexed _caller);
}
