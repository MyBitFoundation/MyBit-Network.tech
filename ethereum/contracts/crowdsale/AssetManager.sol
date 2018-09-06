pragma solidity 0.4.24;
import '../database/Database.sol';
import '../math/SafeMath.sol';

// @notice This contract is where users can initite funding periods for new assets.
contract AssetCreation {
  using SafeMath for *;

  Database public database;


  constructor(address _database)
  public  {
      database = Database(_database);
  }


  // TODO: destroy dividend token corresponding to this assetID 
  function removeAsset(bytes32 _assetID, address _functionSigner)
  external
  onlyOwner
  whenNotPaused
  returns(bool) {

    return true;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------


  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  // @notice function won't run if owners have paused this contract
  modifier whenNotPaused { 
    require(!database.boolStorage(keccak256(abi.encodePacked("paused", address(this))))); 
    _; 
  }
  //------------------------------------------------------------------------------------------------------------------
  //                                            Events
  //------------------------------------------------------------------------------------------------------------------

  event LogAssetFundingStarted(bytes32 indexed _assetID, bytes32 indexed _manufacturerID, bytes32 indexed _assetType, bytes32 _ipfsHash);
  event LogLockAssetEscrow(address _from, bytes32 _assetID, uint _amountOf);
  event LogAssetRemoved(bytes32 indexed _assetID, address _remover);
  event LogFundingTimeChanged(address _sender, uint _newTimeForFunding);
}
