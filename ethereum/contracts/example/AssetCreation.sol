pragma solidity 0.4.24;
import './AssetFunding.sol';
import './SafeMath.sol';
import './AssetToken.sol'; 

//----------------------------------------------------------------------------------------------------------------------------------------
// This contract is where users can initite funding periods for new assets.
// Stores asset information in Database. Owners can modify funding variables here.
//----------------------------------------------------------------------------------------------------------------------------------------
contract AssetCreation {
  using SafeMath for *;

  AssetFunding public assetFunding; 
  AssetToken public assetToken; 

  uint public fundingTime = uint(6000);        // TODO: Testing number: 10 minutes
  uint public minimumAssetValueUSD; 



  constructor(address _assetFunding, uint _minimumAssetValueUSD)
  public  {
      assetFunding = AssetFunding(_assetFunding);
      minimumAssetValueUSD = _minimumAssetValueUSD; 
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  // This begins the funding period for an asset. If asset is success it will be added to the assets variable here in AssetCreation
  // @Param: The amount of USD required for asset to achieve successfull funding
  // @Param: The percentage of revenue the asset manager will require to run the asset
  // @Param: The amount the asset manager has decided to escrow
  //----------------------------------------------------------------------------------------------------------------------------------------
  function newAsset(uint _amountToRaise)
  external
  returns (bool){
    require(_amountToRaise > minimumAssetValueUSD);           // Minimum asset price
    bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _amountToRaise, block.number));  
    AssetToken newToken = AssetToken.new(address(assetFunding), assetID); 
    assetFunding.startFundingPeriod(assetID, address(newToken), msg.sender, _amountToRaise)
    return true;
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  // This removes asset functionality by setting it to an invalid stage. Must leave variables as users may need to withdrawl income.
  // Other owner must have approved the function to be called in Owned.sol (authorizeFunction())
  //----------------------------------------------------------------------------------------------------------------------------------------
  function removeAsset(bytes32 _assetID, address _functionSigner)
  external
  anyOwner
  noEmptyBytes(_assetID)
  whenNotPaused
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

  //----------------------------------------------------------------------------------------------------------------------------------------
  // Change the default funding time for new assets
  // Invariants: Only owner[0] can call  |  new funding time is not 0
  //----------------------------------------------------------------------------------------------------------------------------------------
  function changeFundingTime(uint _newTimeGivenForFunding)
  external
  anyOwner
  notZero(_newTimeGivenForFunding)
  returns (bool) {
    fundingTime = _newTimeGivenForFunding;
    emit LogFundingTimeChanged(msg.sender, _newTimeGivenForFunding);
    return true;
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  // Changes the platform fees received from funded assets
  // Requires multi-sig verification. With sha3() of the agreed percentages as the beneficiary parameter
  //----------------------------------------------------------------------------------------------------------------------------------------
  function changeFundingPercentages(uint _myBitFoundationPercentage, uint _installerPercentage, address _functionSigner)
  external
  anyOwner
  notZero(_myBitFoundationPercentage)
  notZero(_installerPercentage)
  returns (bool) {
    bytes32 functionHash = keccak256(abi.encodePacked(address(this), _functionSigner, "changeFundingPercentages", keccak256(abi.encodePacked(_myBitFoundationPercentage, _installerPercentage))));
    require(database.boolStorage(functionHash));
    require(_myBitFoundationPercentage.add(_installerPercentage) == uint(100));
    database.setBool(functionHash, false);
    database.setUint(keccak256(abi.encodePacked("myBitFoundationPercentage")), _myBitFoundationPercentage);
    database.setUint(keccak256(abi.encodePacked("installerPercentage")), _installerPercentage);
    emit LogFundingPercentageChanged(_myBitFoundationPercentage, _installerPercentage);
    return true;
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  // Must be authorized by 1 of the 3 owners and then can be called by any of the other 2
  // @Param: The address of the owner who authorized this function to be called in
  // Invariants: Must be 1 of 3 owners. Cannot be called by same owner who authorized the function to be called.
  //----------------------------------------------------------------------------------------------------------------------------------------
  function destroy(address _functionInitiator, address _holdingAddress)
  anyOwner
  public {
    require(_functionInitiator != msg.sender);
    bytes32 functionHash = keccak256(abi.encodePacked(address(this), _functionInitiator, "destroy", keccak256(abi.encodePacked(_holdingAddress))));
    require(database.boolStorage(functionHash));
    database.setBool(functionHash, false);
    emit LogDestruction(_holdingAddress, address(this).balance, msg.sender);
    selfdestruct(_holdingAddress);
  }



  //------------------------------------------------------------------------------------------------------------------
  //                                            Modifiers
  //------------------------------------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------------------------------------
  // Makes sure function won't run when contract has been paused
  //------------------------------------------------------------------------------------------------------------------
  modifier whenNotPaused {
    require(!database.boolStorage(keccak256(abi.encodePacked("pause", address(this)))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Don't accept null value for bytes32 parameter
  //------------------------------------------------------------------------------------------------------------------
  modifier noEmptyBytes(bytes32 _data) {
    require(_data != bytes32(0));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Don't accept null value for uint
  //------------------------------------------------------------------------------------------------------------------
  modifier notZero(uint _uint) {
    require(_uint != 0);
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Sender must be a registered owner
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                            Events
  //------------------------------------------------------------------------------------------------------------------

  event LogAssetFundingStarted(bytes32 indexed _assetID, bytes32 indexed _installerID, bytes32 indexed _assetType, bytes32 _ipfsHash);
  event LogLockAssetEscrow(address _from, bytes32 _assetID, uint _amountOf);
  event LogAssetRemoved(bytes32 indexed _assetID, address _remover);
  event LogFundingTimeChanged(address _sender, uint _newTimeForFunding);
  event LogFundingPercentageChanged(uint _myBitFoundationPercentage, uint _installerPercentage);
  event LogDestruction(address indexed _locationSent, uint indexed _amountSent, address indexed _caller);
}
