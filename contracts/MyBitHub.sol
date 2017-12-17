pragma solidity ^0.4.18;
import './SafeMath.sol';
import './Owned.sol';
import './Pausable.sol'; 
import './Asset.sol';


// This contract is in charge of creating individual asset contracts. It acts as a reference for locations of Assets and other funding parameters
// TODO: Remove broken assets from storage
contract MyBitHub is Pausable {
using SafeMath for *;

//------------Beneficiary amounts---------------
  uint256 public myBitFoundationPercentage = 1;     // Percentage of funding given to MyBit foundation
  uint256 public lockedTokensPercentage = 2;        // Percentage of funding given to locked token holders
  uint256 public installerPercentage = 97;          // Percentage of funding given to asset installer 

// ------------------Asset Type Info-------------------
  // Note: The type of asset is the sha3() of it's string identifier. ie. Solar, ATM, Miner
  mapping (bytes32 => bool) public acceptedAssetType;      // Tells whether this asset type is accepted on platform. See events for all asset types
  uint256 public fundingTime;            // The amount of time given for an assets funding period



  // -------------Asset Info------------------------------
  // NOTE: Could store asset information in log events to save gas 
  mapping (uint256 => address) public assets;  // Address location of assets. Initialized once funding is success
  uint256 public assetCounter;          // Counter that keeps track of number of assets

  mapping (address => bool) public beingFunded;     // Is this asset currently going through funding stage

  function MyBitHub() public {
    fundingTime = 300;   // TODO: testing number
  }

  // This is called by the asset contract if it achieves it's funding goal
  function assetSuccessfullyFunded()
  external
  returns (bool) { 
    require(beingFunded[msg.sender]);
    delete beingFunded[msg.sender]; 
    assets[assetCounter] = msg.sender;
    LogAssetFundingSuccess(msg.sender, assetCounter, block.timestamp); 
    assetCounter++;
    return true; 
  }

  // This is called by the asset contract if it does not achieve it's funding goal
  function assetFailedFunding(uint256 _amountRaised)
  external
  returns (bool) { 
    require(beingFunded[msg.sender]);
    delete beingFunded[msg.sender];
    LogAssetFundingFailed(msg.sender, _amountRaised, block.timestamp); 
    return true;
  }

  // This money creates an Asset contract to commence funding stage of it's lifecycle. The location is logged in an event. 
  function createAsset(bytes32 _storageHash, uint256 _amountToBeRaised, address _assetInstaller, bytes32 _assetType) 
  whenNotPaused
  onlyApproved
  external 
  returns (address) {
    require(acceptedAssetType[_assetType]); 
    require(_storageHash != bytes32(0)); 
    require(_amountToBeRaised >= 0); 
    require(_assetInstaller != address(0));
    Asset newAsset = new Asset(msg.sender, _storageHash, _assetInstaller, _amountToBeRaised, fundingTime, _assetType);
    beingFunded[address(newAsset)] = true; 
    LogAssetFundingStarted(msg.sender, address(newAsset), _assetType);      // Use indexed event to keep track of pending assets
    return address(newAsset);
  }

    // Allow a new asset title to be funded on the platform
  function addAssetType(bytes32 _newType) 
  onlyOwner 
  external 
  returns (bool) {
    require(!acceptedAssetType[_newType]);
    require(_newType != bytes32(0)); 
    acceptedAssetType[_newType] = true;
    LogAssetTypeAdded(_newType, block.timestamp); 
    return true;
  }

  // Do not let assets of this type be created
  function removeAssetType(bytes32 _assetType)
  onlyOwner
  external
  returns (bool) { 
    acceptedAssetType[_assetType] = false; 
    LogAssetTypeRemoved(_assetType, block.timestamp); 
  }

  // Change the default funding time for the asset 
  // TODO: Should this be dependent on the asset type?  
  function changeFundingTime(uint256 _newTimeGivenForFunding) 
  onlyOwner
  external
  returns (bool) { 
    require(_newTimeGivenForFunding > 0);
    fundingTime = _newTimeGivenForFunding; 
    return true; 
  }

  // --------------------------------------------Modifiers-----------------------------------------------------


  
// -------------------------------------------------------Getters-------------------------------------------------------


  function () public {
    revert();
  }


  event LogAssetFundingStarted(address indexed _creator, address indexed _assetLocation, bytes32 indexed _assetType);
  event LogAssetFundingFailed(address indexed _assetLocation, uint256 indexed _amountRaised, uint256 indexed _timestamp); 
  event LogAssetFundingSuccess(address indexed _assetLocation, uint256 indexed _id, uint256 indexed _timestamp); 
  event LogAssetTypeAdded(bytes32 indexed _newType, uint256 indexed _timestamp);
  event LogAssetTypeRemoved(bytes32 indexed _assetType, uint256 indexed _timestamp); 
}
