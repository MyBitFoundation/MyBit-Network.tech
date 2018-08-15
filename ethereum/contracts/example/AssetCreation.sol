pragma solidity 0.4.24;
import './AssetFunding.sol';
import './SafeMath.sol';

import '../tokens/ERC20/CappedToken.sol'; 

//----------------------------------------------------------------------------------------------------------------------------------------
// This contract is where users can initite funding periods for new assets.
// Stores asset information in Database. Owners can modify funding variables here.
//----------------------------------------------------------------------------------------------------------------------------------------
contract AssetCreation {
  using SafeMath for *;

  AssetFunding public assetFunding; 
  CappedToken public assetToken; 

  uint public minimumAssetValueUSD; 



  constructor(address _assetFunding, uint _minimumAssetValueUSD)
  public  {
      assetFunding = AssetFunding(_assetFunding);
      minimumAssetValueUSD = _minimumAssetValueUSD; 
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  // This begins the funding period for an asset. If asset is success it will be added to the assets variable here in AssetCreation
  // @param: The amount to be raised for asset to be live. (WEI)
  // @param: How long the crowdsale lasts for in seconds
  //----------------------------------------------------------------------------------------------------------------------------------------
  function newAsset(uint _amountToRaise, uint _crowdsaleLength)
  external
  notZero(_amountToRaise)
  notZero(_crowdsaleLength)
  returns (bool){
    require(_amountToRaise > minimumAssetValueUSD);           // Minimum asset price
    bytes32 assetID = keccak256(abi.encodePacked(msg.sender, _amountToRaise, block.number));  
    CappedToken newToken = assetToken.new(address(assetFunding), assetID); 
    assetFunding.startFundingPeriod(assetID, address(newToken), msg.sender, _amountToRaise, _crowdsaleLength)
    return true;
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  // This removes asset functionality by setting it to an invalid stage. Must leave variables as users may need to withdrawl income.
  // Other owner must have approved the function to be called in Owned.sol (authorizeFunction())
  // TODO: Make this a token extension
  //----------------------------------------------------------------------------------------------------------------------------------------
  function removeAsset(bytes32 _assetID, address _functionSigner)
  external
  onlyOwner
  noEmptyBytes(_assetID)
  returns(bool) {

    return true;
  }

  //----------------------------------------------------------------------------------------------------------------------------------------
  // Must be authorized by 1 of the 3 owners and then can be called by any of the other 2
  // @Param: The address of the owner who authorized this function to be called in
  // Invariants: Must be 1 of 3 owners. Cannot be called by same owner who authorized the function to be called.
  //----------------------------------------------------------------------------------------------------------------------------------------
  function destroy(address _functionInitiator, address _holdingAddress)
  onlyOwner
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
  modifier onlyOwner {
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
