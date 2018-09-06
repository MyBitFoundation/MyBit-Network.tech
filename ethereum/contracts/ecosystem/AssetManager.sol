pragma solidity 0.4.24;
import '../database/Database.sol';
import '../math/SafeMath.sol';
import '../ownership/Pausible.sol';

//----------------------------------------------------------------------------------------------------------------------------------------
// @notice This contract is where users can initite funding periods for new assets.
// Stores asset information in Database. Owners can modify funding variables here.
//----------------------------------------------------------------------------------------------------------------------------------------
contract AssetManager is Pausible{
  using SafeMath for *;

  Database public database;


  constructor(address _database)
  public  {
      database = Database(_database);
  }


  //----------------------------------------------------------------------------------------------------------------------------------------
  // This removes asset functionality by setting it to an invalid stage. Must leave variables as users may need to withdrawl income.
  // Other owner must have approved the function to be called in Owned.sol (authorizeFunction())
  //----------------------------------------------------------------------------------------------------------------------------------------
  function removeAsset(bytes32 _assetID, address _functionSigner)
  external
  anyOwner
  noEmptyBytes(_assetID)
  whenNotPaused(address(this))
  returns(bool) {
    require (_functionSigner != msg.sender);
    require(database.uintStorage(keccak256(abi.encodePacked("fundingStage", _assetID))) > uint(0));
    bytes32 functionHash = keccak256(abi.encodePacked(address(this), _functionSigner, "removeAsset", _assetID));
    require(database.boolStorage(functionHash));
    database.setBool(functionHash, false);
    database.setUint(keccak256(abi.encodePacked("fundingStage", _assetID)), uint(5));   // Asset won't receive income & ownership won't be able to be traded.
    emit LogAssetRemoved(_assetID, msg.sender);
    return true;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------------------
  // @notice Sender must be a registered owner
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  modifier noEmptyBytes(bytes32 _bytes32){
    require(_bytes32 != bytes32(0));
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
