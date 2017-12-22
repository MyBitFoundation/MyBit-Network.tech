pragma solidity ^0.4.18;
import './SafeMath.sol';
import './Owned.sol';
import './Pausable.sol'; 
import './Asset.sol';


// This contract is in charge of creating individual asset contracts. It acts as a reference for locations of Assets and other funding parameters
contract MyBitHub is Pausable {
using SafeMath for *;

//-----------Platform Addresses----------------
address public myBitFoundation;      // ropsten testnet address TODO: Get real foundation address
address public assetEscrow;     // The location where asset funding is sent to be converted to Fiat


//------------Beneficiary amounts---------------
  uint256 public myBitFoundationPercentage = 1;     // Percentage of funding given to MyBit foundation
  uint256 public lockedTokensPercentage = 2;        // Percentage of funding given to locked token holders
  uint256 public installerPercentage = 97;          // Percentage of funding given to asset installer 

// ------------------Asset Type Info-------------------
  // Note: The type of asset is the sha3() of it's string identifier. ie. Solar, ATM, Miner
  uint256 public fundingTime;            // The amount of time given for an assets funding period


  // -------------Asset Info------------------------------
  // NOTE: Could store asset information in log events to save gas 
  mapping (uint256 => address) public assets;  // Address location of assets. Initialized once funding is success
  uint256 public assetCounter;          // Counter that keeps track of number of assets
  mapping (address => bool) public beingFunded;     // Is this asset currently going through funding stage



  function MyBitHub(address _myBitFoundation, address _assetEscrow) public {
    fundingTime = 300;   // TODO: this is only for testing 
    myBitFoundation = _myBitFoundation;  
    assetEscrow = _assetEscrow; 
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
  function createAsset(bytes32 _storageHash, uint256 _amountToBeRaised, bytes32 _installerID, bytes32 _assetType) 
  whenNotPaused
  onlyApproved(0)
  external 
  returns (address) {
    require(_storageHash != bytes32(0)); 
    require(_amountToBeRaised >= 0); 
    Asset newAsset = new Asset(msg.sender, _storageHash, _installerID, _amountToBeRaised, fundingTime, _assetType);
    beingFunded[address(newAsset)] = true; 
    LogAssetFundingStarted(msg.sender, address(newAsset), _assetType);      // Use indexed event to keep track of pending assets
    return address(newAsset);
  }

  // Removes assets that are no longer functioning. 
  function removeAsset(uint256 _id) 
  onlyOwner
  returns(bool) {
    require(assets[_id] != address(0));
    require(assetCounter > 0); 
    LogAssetRemoved(assets[_id], _id, block.timestamp); 
    assets[_id] = assets[(assetCounter - 1)];    // Move latest asset to this position
    assetCounter--; 
    LogAssetMoved(assets[_id], assetCounter, block.timestamp); 
    return true; 
  }

  // Change the default funding time for the asset 
  function changeFundingTime(uint256 _newTimeGivenForFunding) 
  onlyOwner
  external
  returns (bool) { 
    require(_newTimeGivenForFunding > 0);
    fundingTime = _newTimeGivenForFunding;
    LogFundingTimeChanged(_newTimeGivenForFunding, block.timestamp); 
    return true; 
  }

  function changeAssetEscrow(address _newAddress)
  onlyOwner
  external
  returns (bool) { 
    require(_newAddress != address(0)); 
    assetEscrow = _newAddress; 
    LogAssetEscrowChanged(_newAddress, block.timestamp); 
    return true;
  }

// ----------------------------------------------------Modifiers----------------------------------------------------

  
// -------------------------------------------------------Getters-------------------------------------------------------


  function () public {
    revert();
  }


  event LogAssetFundingStarted(address indexed _creator, address indexed _assetLocation, bytes32 indexed _assetType);
  event LogAssetFundingFailed(address indexed _assetLocation, uint256 indexed _amountRaised, uint256 indexed _timestamp); 
  event LogAssetFundingSuccess(address indexed _assetLocation, uint256 indexed _id, uint256 indexed _timestamp); 
  event LogAssetRemoved(address indexed _removedAsset, uint256 indexed _id, uint256 indexed _timestamp); 
  event LogAssetMoved(address indexed _removedAsset, uint256 indexed _id, uint256 indexed _timestamp);
  event LogFundingTimeChanged(uint256 _newFundingTime, uint256 _timestamp);  
  event LogAssetEscrowChanged(address _newEscrowLocation, uint256 _timestamp); 
}
