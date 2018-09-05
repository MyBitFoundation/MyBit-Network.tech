  pragma solidity 0.4.24;

  import "./SafeMath.sol";
  import "./AssetCreation.sol"; 

  import "../tokens/ERC20/DividendToken.sol";         // Change to Mintable or Burnable if needed
     

  // @title An asset crowdsale contract. 
  // @notice creates a dividend token to represent the newly created asset.
  contract Crowdsale {
    using SafeMath for uint256;

    Database public database; 


    // @notice Constructor: Initiates the database 
    // @param: The address for the database contract
    constructor(address _database)
    public {
        database = Database(_database); 
    }


    function startFundingPeriod(string _assetURI, bytes32 _operatorID, uint _fundingLength, uint _amountToRaise)
    external 
    returns (bool) { 
      bytes32 assetID = keccak256(abi.encodePacked(_creator, _amountToRaise, _assetURI)); 
      require(database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", assetID))) == 0); 
      DividendToken newAsset = new DividendToken(_assetURI, _amountToRaise);   // Gives this contract all new asset tokens 
      database.setUint(keccak256(abi.encodePacked("fundingDeadline", assetID)), now.add(_fundingLength));
      database.setAddress(keccak256(abi.encodePacked("tokenAddress", assetID)), address(newAsset));  
      database.setAddress(keccak256(abi.encodePacked("broker", assetID)), msg.sender); 
      return true; 
    }

    //------------------------------------------------------------------------------------------------------------------
    // Users can send Ether here to fund asset if funding goal hasn't been reached and the funding period isn't over.
    // Invariants: Requires Eth be sent with transaction |  Must be in funding stage. Must be under goal | Must have KYC approved. | contract is not paused
    //------------------------------------------------------------------------------------------------------------------
    function fundAsset(bytes32 _assetID)
    external
    payable
    requiresEther
    beforeDeadline(_assetID)
    returns (bool) {
      DividendToken thisToken = DividedToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", assetID))));
      uint tokensRemaining = thisToken.balanceOf(address(this));
      if (msg.value >= thisToken.balanceOf(address(this))) {
        require(thisToken.transfer(msg.sender, tokensRemaining));   // Send remaining asset tokens 
        require(payout(_assetID, thisToken.supply()));          // 1 token = 1 wei
        msg.sender.transfer(msg.value.sub(tokensRemaining));     // Return leftover WEI
      }
      else { 
        require(thisToken.transfer(msg.sender, msg.value));    // TODO: Add multiplier depending on desired price per token
      }
      emit LogAssetFunded(_assetID, msg.sender, msg.value);
      return true;
    }

    //------------------------------------------------------------------------------------------------------------------
    // This is called once funding has succeeded. Sends Ether to installer, foundation and Token Holders
    // Invariants: Must be in stage FundingSuccess | MyBitFoundation + AssetEscrow  + BugEscrow addresses are set | Contract is not paused
    // Note: Will fail if addresses + percentages are not set. AmountRaised = WeiRaised = ownershipUnits
    //------------------------------------------------------------------------------------------------------------------
    function payout(bytes32 _assetID, uint _amount)
    internal
    whenNotPaused
    atStage(_assetID, uint(3))       // Can only get to stage 3 by receiving enough funding within time limit
    returns (bool) {
      address distributionContract = database.addressStorage(keccak256(abi.encodePacked("contract", "PlatformDistribution")));
      assert (distributionContract != address(0));  
      distributionContract.transfer()
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
      emit LogRefund(_assetID, msg.sender, ownershipUnits);
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
    // Requires that Ether is sent with the transaction
    //------------------------------------------------------------------------------------------------------------------
    modifier requiresEther() {
      require(msg.value > 0);
      _;
    }


    //------------------------------------------------------------------------------------------------------------------
    // @notice reverts if the funding deadline has already past
    //------------------------------------------------------------------------------------------------------------------
    modifier beforeDeadline(bytes32 _assetID) {
      require(now <= database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID
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

    event LogNewFunder(bytes32 indexed _assetID, address indexed _funder);
    event LogAssetFunded(bytes32 indexed _assetID, address indexed _sender, uint _amount);
    event LogAssetFundingFailed(bytes32 indexed _assetID, uint _amountRaised);
    event LogAssetFundingSuccess(bytes32 indexed _assetID, uint _currentEthPrice, uint _amountRaised);
    event LogRefund(bytes32 indexed _assetID, address indexed _funder, uint _amount);
    event LogAssetPayout(bytes32 indexed _assetID, uint _amount);
    event LogDestruction(address indexed _locationSent, uint indexed _amountSent, address indexed _caller);
  }
