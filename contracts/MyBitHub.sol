pragma solidity ^0.4.18;
import './SafeMath.sol';
import './Approval.sol'; 
import './Asset.sol';


// This contract is in charge of creating individual asset contracts. It acts as a reference for locations of Assets and other funding parameters
contract MyBitHub {
  using SafeMath for *;

  //-----------Platform Addresses----------------
  address public myBitFoundation;      // The MyBit Foundation address 
  address public assetEscrow;     // The location where asset funding is sent to be converted to Fiat
  address public tokenHub;      // Location of tokenHub contract 
  address public marketPlace;     // Location of the Asset marketpalce 
  Approval public approval;     // Contract bytecode of Approval contract 

//------------Beneficiary amounts---------------
  uint256 public myBitFoundationPercentage = 1;     // Percentage of funding given to MyBit foundation
  uint256 public lockedTokensPercentage = 2;        // Percentage of funding given to locked token holders
  uint256 public installerPercentage = 97;          // Percentage of funding given to asset installer 


  // -------------Asset Info------------------------------
  mapping (bytes32 => address) public assets;  // Address location of assets. Initialized once funding is success
  mapping (address => bool) public beingFunded;     // Is this asset currently going through funding stage
  uint256 public fundingTime;            // The amount of time given for an assets funding period



  function MyBitHub(address _myBitFoundation, address _assetEscrow, address _approval, address _tokenHub, address _marketPlace) 
  public {
      fundingTime = 300;   // TODO: this is only for testing 
      myBitFoundation = _myBitFoundation;  
      assetEscrow = _assetEscrow;
      approval = Approval(_approval); 
      tokenHub = _tokenHub; 
      marketPlace = _marketPlace; 
  }

  // This is called by the asset contract if it achieves it's funding goal
  function assetSuccessfullyFunded(bytes32 _assetID)
  external
  returns (bool) { 
    require(beingFunded[msg.sender]);
    delete beingFunded[msg.sender]; 
    assets[_assetID] = msg.sender;
    LogAssetFundingSuccess(msg.sender, _assetID, block.timestamp); 
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
  // TODO: check if storageHash is already being used
  function createAsset(bytes32 _storageHash, uint256 _amountToBeRaised, bytes32 _installerID, bytes32 _assetType) 
  whenNotPaused
  noEmptyBytes(_storageHash)
  noEmptyBytes(_installerID)
  noEmptyBytes(_assetType)
  notZero(_amountToBeRaised)
  external 
  returns (address) {
    require(approval.userAccess(msg.sender) >= 1); 
    require(assets[_storageHash] == address(0)); 
    Asset newAsset = new Asset(msg.sender, _storageHash, _installerID, _amountToBeRaised, fundingTime, _assetType, address(approval));
    beingFunded[address(newAsset)] = true; 
    LogAssetFundingStarted(msg.sender, address(newAsset), _assetType);      // Use indexed event to keep track of pending assets
    return address(newAsset);
  }

  // Removes assets that are no longer functioning. 
  function removeAsset(bytes32 _id) 
  onlyOwner
  noEmptyAddress(assets[_id])
  returns(bool) {
    delete assets[_id]; 
    LogAssetRemoved(assets[_id], _id, block.timestamp); 
    return true; 
  }

  // Change the default funding time for the asset 
  function changeFundingTime(uint256 _newTimeGivenForFunding) 
  onlyOwner
  notZero(_newTimeGivenForFunding)
  external
  returns (bool) { 
    fundingTime = _newTimeGivenForFunding;
    LogFundingTimeChanged(_newTimeGivenForFunding, block.timestamp); 
    return true; 
  }

  function changeAssetEscrow(address _newAddress)
  onlyOwner
  noEmptyAddress(_newAddress)
  external
  returns (bool) { 
    assetEscrow = _newAddress; 
    LogAssetEscrowChanged(_newAddress, block.timestamp); 
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
    require(msg.sender == approval.owner()); 
    _;
  }

  modifier whenNotPaused { 
    require(approval.paused() == false); 
    _; 
  }
  
  

  function () public {
    revert();
  }


  event LogAssetFundingStarted(address indexed _creator, address indexed _assetLocation, bytes32 indexed _assetType);
  event LogAssetFundingFailed(address indexed _assetLocation, uint256 indexed _amountRaised, uint256 indexed _timestamp); 
  event LogAssetFundingSuccess(address indexed _assetLocation, bytes32 indexed _id, uint256 indexed _timestamp); 
  event LogAssetRemoved(address indexed _removedAsset, bytes32 indexed _id, uint256 indexed _timestamp); 
  event LogFundingTimeChanged(uint256 _newFundingTime, uint256 _timestamp);  
  event LogAssetEscrowChanged(address _newEscrowLocation, uint256 _timestamp); 
}
