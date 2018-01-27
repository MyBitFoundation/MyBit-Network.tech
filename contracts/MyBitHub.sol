pragma solidity ^0.4.18;
import './SafeMath.sol';
import './Approval.sol'; 
import './Asset.sol';


// This contract is in charge of creating individual asset contracts. It acts as a reference for locations of Assets and other funding parameters
contract MyBitHub {
  using SafeMath for *;

  //-----------Platform Addresses----------------
  Approval public approval;     // Contract bytecode of Approval contract 

//------------Beneficiary amounts---------------
  uint256 public myBitFoundationPercentage = 1;     // Percentage of funding given to MyBit foundation
  uint256 public stakedTokenPercentage = 2;        // Percentage of funding given to locked token holders
  uint256 public installerPercentage = 97;          // Percentage of funding given to asset installer 


  // -------------Asset Info------------------------------  
  mapping (bytes32 => address) public assets;  // Address location of assets. Initialized once funding is success
  mapping (address => bool) public beingFunded;     // Is this asset currently going through funding stage
  uint256 public fundingTime = 3000;            // The amount of time given for an assets funding period



  function MyBitHub(address _approval) 
  public {
      approval = Approval(_approval); 
  }

  // This is called by the asset contract if it achieves it's funding goal
  function assetFinishedFunding(bytes32 _assetID, bool _success)
  external
  returns (bool) { 
    require(beingFunded[msg.sender]);
    delete beingFunded[msg.sender]; 
    if (_success) { 
      assets[_assetID] = msg.sender;
    }
    LogAssetFinishedFunding(msg.sender, _assetID, _success); 
    return true; 
  }

  // This money creates an Asset contract to commence funding stage of it's lifecycle. The location is logged in an event. 
  function createAsset(bytes32 _storageHash, uint256 _amountToBeRaised, bytes32 _installerID, bytes32 _assetType) 
  external 
  whenNotPaused()
  noEmptyBytes(_storageHash)
  noEmptyBytes(_installerID)
  noEmptyBytes(_assetType)
  notZero(_amountToBeRaised)
  returns (address) {
    require(approval.userAccess(msg.sender) >= 1); 
    require(assets[_storageHash] == address(0)); 
    Asset newAsset = new Asset(msg.sender, _storageHash, _amountToBeRaised, fundingTime, address(approval));
    beingFunded[address(newAsset)] = true;
    LogAssetInfo(_storageHash, _installerID, _assetType); 
    LogAssetFundingStarted(msg.sender, address(newAsset), _assetType);      // Use indexed event to keep track of pending assets
    return address(address(newAsset));
  }

  // Removes assets that are no longer functioning. 
  function removeAsset(bytes32 _id) 
  external
  onlyOwner
  noEmptyAddress(assets[_id])
  returns(bool) {
    delete assets[_id]; 
    LogAssetRemoved(assets[_id], _id, block.timestamp); 
    return true; 
  }

  // Change the default funding time for the asset 
  function changeFundingTime(uint256 _newTimeGivenForFunding) 
  external
  onlyOwner
  notZero(_newTimeGivenForFunding)
  returns (bool) { 
    fundingTime = _newTimeGivenForFunding;
    LogFundingTimeChanged(_newTimeGivenForFunding, block.timestamp); 
    return true; 
  }

  
// -------------------------------------------------------Getters-------------------------------------------------------
  
  modifier noEmptyBytes(bytes32 _data) {
    require(_data != bytes32(0)); 
    _;
  }

  modifier noEmptyAddress(address _addr) { 
    require(_addr != address(0)); 
    _; 
  }

  modifier notZero(uint256 _uint) { 
    require(_uint != 0); 
    _;
  }

  modifier onlyOwner { 
    require(msg.sender == approval.owner(0)); 
    _;
  }

  modifier whenNotPaused() { 
    require(!approval.paused(this)); 
    _; 
  }
  
  

  function () 
  public {
    revert();
  }

  event LogAssetInfo(bytes32 indexed _storageHash, bytes32 indexed _installerID, bytes32 indexed _assetType); 
  event LogAssetFundingStarted(address indexed _creator, address indexed _assetLocation, bytes32 indexed _assetType);
  event LogAssetFundingFailed(address indexed _assetLocation, uint256 indexed _amountRaised, uint256 indexed _timestamp); 
  event LogAssetFinishedFunding(address indexed _assetLocation, bytes32 indexed _id, bool indexed _success); 
  event LogAssetRemoved(address indexed _removedAsset, bytes32 indexed _id, uint256 indexed _timestamp); 
  event LogFundingTimeChanged(uint256 _newFundingTime, uint256 _timestamp);  
  event LogAssetEscrowChanged(address _newEscrowLocation, uint256 _timestamp); 
}
