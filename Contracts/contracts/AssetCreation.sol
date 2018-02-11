import './Database.sol';
import './SafeMath.sol';

contract AssetCreation { 
  using SafeMath for *;

  Database public database;
  bool private rentrancy_lock = true;    // Prevents re-entrancy attack

  function AssetCreation(address _database)
  public  { 
      database = Database(_database);
  }

  // This sets critical information. Call when ready
  function init()
  external
  anyOwner { 
      rentrancy_lock = false;
      database.setUint(keccak256("myBitFoundationPercentage"), 1);
      database.setUint(keccak256("stakedTokenPercentage"), 2);
      database.setUint(keccak256("installerPercentage"), 97);
      database.setUint(keccak256("fundingTime"), 3000);
  }

  // This begins the funding period for an asset. If asset is success it will be added to the assets variable here in AssetCreation
  // @Param: The storage hash created from IPFS. WIll act as the ID for this asset if funding is a success 
  // @Param: The amount of WEI required for asset to achieve successfull funding 
  // @Param: The ID of the installer of this asset 
  // @Param: The type of asset being created. (ie. Sha3("ATM"))
  function newAsset(bytes32 _storageHash, uint _amountToBeRaised, bytes32 _installerID, bytes32 _assetType) 
  external 
  whenNotPaused
  nonReentrant
  noEmptyBytes(_storageHash)
  noEmptyBytes(_installerID)
  noEmptyBytes(_assetType)
  notZero(_amountToBeRaised) 
  returns (bool){
    require(database.uintStorage(keccak256("userAccess", msg.sender)) >= 2);
    require(database.uintStorage(keccak256("fundingStage", _storageHash)) == 0);   // This ensures the asset isn't currently live or being funded
    database.setUint(keccak256("amountToBeRaised", _storageHash), _amountToBeRaised); 
    database.setUint(keccak256("fundingDeadline", _storageHash), block.timestamp.add(database.uintStorage(keccak256("fundingTime"))));
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
    database.setUint(keccak256("fundingTime"), _newTimeGivenForFunding); 
    LogFundingTimeChanged(msg.sender, _newTimeGivenForFunding, block.timestamp); 
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
