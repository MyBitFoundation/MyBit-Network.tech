import './Database.sol';
import './SafeMath.sol';


// This contract handles the logic of initiating the funding period for new assets + setting/modifying funding variables. 
contract AssetCreation { 
  using SafeMath for *;

  Database public database;
  bool private rentrancy_lock = false;    // Prevents re-entrancy attack
  uint public fundingTime = 3000;

  function AssetCreation(address _database)
  public  { 
      database = Database(_database);

  }

  // This begins the funding period for an asset. If asset is success it will be added to the assets variable here in AssetCreation
  // @Param: The storage hash created from IPFS. WIll act as the ID for this asset if funding is a success 
  // @Param: The amount of WEI required for asset to achieve successfull funding 
  // @Param: The ID of the installer of this asset 
  // @Param: The type of asset being created. (ie. Sha3("BitcoinATM"))
  function newAsset(bytes32 _storageHash, uint _amountToBeRaised, uint _managerPercentage, bytes32 _installerID, bytes32 _assetType) 
  external 
  whenNotPaused
  nonReentrant
  noEmptyBytes(_storageHash)
  noEmptyBytes(_installerID)
  noEmptyBytes(_assetType)
  notZero(_amountToBeRaised) 
  returns (bool){
    require(database.uintStorage(keccak256("userAccess", msg.sender)) >= 2);
    require(database.uintStorage(keccak256("fundingStage", _storageHash)) == 0);    // This ensures the asset isn't currently live or being funded
    database.setUint(keccak256("amountToBeRaised", _storageHash), _amountToBeRaised); 
    database.setUint(keccak256("managerPercentage", _storageHash), _managerPercentage); 
    database.setAddress(keccak256("assetManager", _storageHash), msg.sender);
    database.setUint(keccak256("fundingDeadline", _storageHash), block.timestamp.add(fundingTime));
    database.setUint(keccak256("fundingStage", _storageHash), 1); 
    LogAssetInfo(_storageHash, _installerID, _assetType); 
    LogAssetFundingStarted(msg.sender, _storageHash, _assetType);      // Use indexed event to keep track of pending assets
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
    require(database.uintStorage(keccak256("fundingStage", _assetID)) > 0);
    bytes32 functionHash = keccak256(this, _functionSigner, "removeAsset", _assetID);
    require(database.boolStorage(functionHash));
    database.setBool(functionHash, false);
    database.setUint(keccak256("fundingStage", _assetID), 5);   // Asset won't receive income & shares won't be able to be traded.
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
    return true;
  }

  modifier whenNotPaused { 
    require(!database.boolStorage(keccak256("pause", this)));
    _; 
  }

  modifier noEmptyAddress(address _addr) { 
    require(_addr != address(0)); 
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

  event LogAssetFundingStarted(address indexed _creator, bytes32 indexed _assetLocation, bytes32 indexed _assetType);
  event LogAssetInfo(bytes32 indexed _storageHash, bytes32 indexed _installerID, bytes32 indexed _assetType); 
  event LogAssetRemoved(address indexed _remover, bytes32 indexed _id, uint indexed _timestamp); 
  event LogFundingTimeChanged(address _sender, uint _newTimeForFunding, uint _blockTimestamp);
}
