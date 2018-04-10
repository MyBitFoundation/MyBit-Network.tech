pragma solidity ^0.4.19;
import './Database.sol';
import './SafeMath.sol';


// This contract handles the logic of initiating the funding period for new assets + setting/modifying funding variables.
contract AssetCreation {
  using SafeMath for *;

  Database public database;
  bool private rentrancy_lock = false;    // Prevents re-entrancy attack
  uint public fundingTime = 3000;        // TODO: Number for testing

  function AssetCreation(address _database)
  public  {
      database = Database(_database);
  }

  // This begins the funding period for an asset. If asset is success it will be added to the assets variable here in AssetCreation
  // @Param: The storage hash created from IPFS. WIll act as the ID for this asset if funding is a success
  // @Param: The amount of USD required for asset to achieve successfull funding
  // @Param: The ID of the installer of this asset
  // @Param: The type of asset being created. (ie. Sha3("BitcoinATM"))
  function newAsset(bytes32 _assetID, uint _amountToBeRaised, uint _operatorPercentage, bytes32 _installerID, bytes32 _assetType)
  external
  whenNotPaused
  nonReentrant
  noEmptyBytes(_assetID)
  noEmptyBytes(_installerID)
  noEmptyBytes(_assetType)
  returns (bool){
    require(database.uintStorage(keccak256("userAccess", msg.sender)) >= uint(1));
    require(_amountToBeRaised >= uint(100));
    require(database.uintStorage(keccak256("fundingStage", _assetID)) == uint(0));    // This ensures the asset isn't currently live or being funded
    require(_operatorPercentage < uint(100) && _operatorPercentage > uint(0));
    require(lockAssetEscrow(_assetID, _amountToBeRaised));
    require(database.addressStorage(keccak256("operatorEscrowed", _assetID)) ==  msg.sender);   // Check that this user has deposited the necessary escrow for the asset.
    database.setUint(keccak256("amountToBeRaised", _assetID), _amountToBeRaised);
    database.setUint(keccak256("operatorPercentage", _assetID), _operatorPercentage);
    database.setAddress(keccak256("assetOperator", _assetID), msg.sender);
    database.setUint(keccak256("fundingDeadline", _assetID), block.timestamp.add(fundingTime));
    database.setUint(keccak256("fundingStage", _assetID), 1);
    LogAssetInfo(_assetID, _installerID, _amountToBeRaised);
    LogAssetFundingStarted(msg.sender, _assetID, _assetType);
    return true;
  }

  // Note: That the AssetID is being registered before created above.
  function lockAssetEscrow(bytes32 _assetID, uint _amountToBeRaised)
  internal
  priceUpdated
  returns (bool) {
    require(database.addressStorage(keccak256("operatorEscrowed", _assetID)) == address(0));    // Check that another user didn't already submit escrow for this asset
    uint mybPrice = database.uintStorage(keccak256("mybUSDPrice"));
    // Note: amountToBeRaised is multiplied by 100, as MYBPrice is rounded up by 2 decimal places (3.34 -> 334)
    uint amountMyBRequired = _amountToBeRaised.mul(100).div(mybPrice);    // This is 10% of total asset cost
    LogLockAssetEscrow(msg.sender, _assetID, amountMyBRequired);
    assert (amountMyBRequired > uint(0));
    database.setUint(keccak256("assetEscrowRequirement", _assetID), amountMyBRequired);
    uint lockedAmount = database.uintStorage(keccak256("operatorAmountEscrowed", msg.sender));
    assert (amountMyBRequired < database.uintStorage(keccak256("operatorAmountDeposited", msg.sender)).sub(lockedAmount));
    database.setUint(keccak256("operatorAmountEscrowed", msg.sender), lockedAmount.add(amountMyBRequired));
    database.setAddress(keccak256("operatorEscrowed", _assetID), msg.sender);
    database.setBool(keccak256("operatorEscrowed", _assetID, msg.sender), true);
    LogLockAssetEscrow(msg.sender, _assetID, amountMyBRequired);
    return true;
  }


  // This removes asset functionality by setting it to an invalid stage. Must leave variables as users may need to withdrawl income.
  // Other owner must have approved the function to be called in Owned.sol (authorizeFunction())
  function removeAsset(bytes32 _assetID, address _functionSigner)
  external
  anyOwner
  noEmptyBytes(_assetID)
  whenNotPaused
  returns(bool) {
    require (_functionSigner != msg.sender);
    require(database.uintStorage(keccak256("fundingStage", _assetID)) > uint(0));
    bytes32 functionHash = keccak256(this, _functionSigner, "removeAsset", _assetID);
    require(database.boolStorage(functionHash));
    database.setBool(functionHash, false);
    database.setUint(keccak256("fundingStage", _assetID), uint(5));   // Asset won't receive income & ownership won't be able to be traded.
    LogAssetRemoved(msg.sender, _assetID, block.timestamp);
    return true;
  }

  // Change the default funding time for new assets
  // Invariants: Only owner[0] can call  |  new funding time is not 0
  function changeFundingTime(uint _newTimeGivenForFunding)
  external
  anyOwner
  notZero(_newTimeGivenForFunding)
  returns (bool) {
    fundingTime = _newTimeGivenForFunding;
    LogFundingTimeChanged(msg.sender, _newTimeGivenForFunding, block.timestamp);
    return true;
  }

  // Changes the platform fees received from funded assets
  // Requires multi-sig verification. With sha3() of the agreed percentages as the beneficiary parameter
  function changeFundingPercentages(uint _myBitFoundationPercentage, uint _stakedTokenPercentage, uint _installerPercentage, address _functionSigner)
  external
  anyOwner
  notZero(_myBitFoundationPercentage)
  notZero(_stakedTokenPercentage)
  notZero(_installerPercentage)
  returns (bool) {
    bytes32 functionHash = keccak256(this, _functionSigner, "changeFundingPercentages", keccak256(_myBitFoundationPercentage, _stakedTokenPercentage, _installerPercentage));
    require(database.boolStorage(functionHash));
    require(_myBitFoundationPercentage.add(_stakedTokenPercentage).add(_installerPercentage) == 100);
    database.setBool(functionHash, false);
    database.setUint(keccak256("myBitFoundationPercentage"), _myBitFoundationPercentage);
    database.setUint(keccak256("stakedTokenPercentage"), _stakedTokenPercentage);
    database.setUint(keccak256("installerPercentage"), _installerPercentage);
    LogFundingPercentageChanged(_myBitFoundationPercentage, _stakedTokenPercentage, _installerPercentage);
    return true;
  }

  // Must be authorized by 1 of the 3 owners and then can be called by any of the other 2
  // @Param: The address of the owner who authorized this function to be called in
  // Invariants: Must be 1 of 3 owners. Cannot be called by same owner who authorized the function to be called.
  function destroy(address _functionInitiator, address _holdingAddress)
  anyOwner
  public {
    require(_functionInitiator != msg.sender);
    bytes32 functionHash = keccak256(this, _functionInitiator, "destroy", keccak256(_holdingAddress));
    require(database.boolStorage(functionHash));
    database.setBool(functionHash, false);
    LogDestruction(_holdingAddress, this.balance, msg.sender);
    selfdestruct(_holdingAddress);
  }

  modifier whenNotPaused {
    require(!database.boolStorage(keccak256("pause", this)));
    _;
  }

  modifier noEmptyBytes(bytes32 _data) {
    require(_data != bytes32(0));
    _;
  }

  modifier notZero(uint _uint) {
    require(_uint != 0);
    _;
  }

  modifier anyOwner {
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  modifier nonReentrant() {
    require(!rentrancy_lock);
    rentrancy_lock = true;
    _;
    rentrancy_lock = false;
  }

  modifier priceUpdated {
    require (now < database.uintStorage(keccak256("mybUSDPriceExpiration")));
    _;
  }

  event LogAssetFundingStarted(address indexed _creator, bytes32 indexed _assetID, bytes32 indexed _assetType);
  event LogAssetInfo(bytes32 indexed _assetID, bytes32 indexed _installerID, uint indexed _amountToBeRaised);
  event LogTesting(uint _amountToBeRaised, uint testVal, uint test2Val, uint mybPrice);
  event LogLockAssetEscrow(address indexed _from, bytes32 indexed _assetID, uint indexed _amountOf);
  event LogAssetRemoved(address indexed _remover, bytes32 indexed _assetID, uint indexed _timestamp);
  event LogFundingTimeChanged(address _sender, uint _newTimeForFunding, uint _blockTimestamp);
  event LogFundingPercentageChanged(uint _myBitFoundationPercentage, uint _stakedTokenPercentage, uint _installerPercentage);
  event LogDestruction(address indexed _locationSent, uint indexed _amountSent, address indexed _caller);
}
