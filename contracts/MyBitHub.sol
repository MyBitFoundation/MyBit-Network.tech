pragma solidity ^0.4.18;
import './SafeMath.sol';
import './Owned.sol';
import './Pausable.sol'; 
import './Asset.sol';


// TODO: Find carrying capacity of this contract
contract MyBitHub is Pausable {
using SafeMath for *;

// ------------Approval--------------
	mapping (address => bool) public userApproved;   // users who are approved to create assets

// -----------Init info--------------------
uint256 public assetDeposit; 


//------------Beneficiary amounts---------------
  uint256 public myBitFoundationPercentage = 1;
  uint256 public lockedTokensPercentage = 2;
  uint256 public installerPercentage = 97;

// ------------------Asset Type Info-------------------
	// Note: The type of asset is the sha3() of it's string identifier. ie. Solar, ATM, Miner
	mapping (bytes32 => bool) public acceptedAssetType;      // Is this title accepted on the platform
	mapping (bytes32 => uint256) public fundingTimeForType;  // time given for funding period for given title of asset


  // -------------Asset Info------------------------------
	mapping (address => bytes32) public assetType;		// ID lookup for the title of asset this hub creates....TODO: is this necessary? 
	mapping (bytes32 => address[]) public assets;  // Address location of assets

	bytes32[] public allAssetTypes;       // All known asset types on the platform

  enum Stages {
    CreatingAssets,
    CleaningAssets
  }

  Stages public stage; 

	function MyBitHub() public {

	}

	//  Function which removes old or failed assets. Freezes new assets from being created while the data structure is being updated
	// TODO: is this at risk of reentrancy
	function removeAsset(address _assetToBeRemoved, uint256 _assetID)
	external 
	whenNotPaused
	atStage(Stages.CreatingAssets)
	transitionNext
	returns (bool) {
		require(_assetToBeRemoved != address(0)); 
		require(assets[assetType[_assetToBeRemoved]][_assetID] == _assetToBeRemoved);   // Should catch cases where list is already empty
		Asset finishedAsset = Asset(_assetToBeRemoved);
		require(finishedAsset.fundingDeadline() < block.timestamp);    // Make sure Asset has passed funding deadline 
		require(uint(finishedAsset.stage()) == 1 || msg.sender == owner); 					// Make sure Asset is still in funding stage (Not a success & Not receiving income) unless owner is the sender 
		uint256 indexToMove = assets[assetType[_assetToBeRemoved]].length - 1; 
		assets[assetType[_assetToBeRemoved]][_assetID] = assets[assetType[_assetToBeRemoved]][indexToMove];   // Move last address in list to the position being deleted
		assets[assetType[_assetToBeRemoved]].length--; 		// Reduce list length, deleting the duplicate of indexToMove 
		delete assetType[_assetToBeRemoved]; 
		msg.sender.transfer(assetDeposit); 
		return true;
	}

	// TODO: Create deposit 
	function createAsset(bytes32 _storageHash, uint256 _amountToBeRaised, address _assetInstaller, bytes32 _assetType) 
	whenNotPaused
	atStage(Stages.CreatingAssets)
	onlyApproved
	payable
	external 
	returns (address) {
		require(acceptedAssetType[_assetType]); 
		require(_storageHash != bytes32(0)); 
		require(_amountToBeRaised >= 0); 
		require(_assetInstaller != address(0));
		require(msg.value >= assetDeposit);  
		Asset newAsset = new Asset(msg.sender, _storageHash, _assetInstaller, _amountToBeRaised, fundingTimeForType[_assetType], assets[_assetType].length);
		assets[_assetType].push(address(newAsset));
		assetType[address(newAsset)] = _assetType; 
		LogAssetCreated(msg.sender, _assetInstaller, _assetType, _amountToBeRaised, address(newAsset), assets[_assetType].length);
		return address(newAsset);
	}

		// Allow a new asset title to be funded on the platform
	function addAssetType(bytes32 _newType, uint256 _timeGivenForFunding) 
	onlyOwner 
	external 
	returns (bool) {
		require(!acceptedAssetType[_newType]);
		require(_timeGivenForFunding >= 0); 
		require(_newType != bytes32(0)); 
		acceptedAssetType[_newType] = true;
		allAssetTypes.push(_newType);
		fundingTimeForType[_newType] = _timeGivenForFunding;
		LogAssetTypeAdded(_newType, _timeGivenForFunding, block.timestamp); 
		return true;
	}


	function changeFundingTimeForAsset(bytes32 _assetType, uint256 _newTimeGivenForFunding) 
	onlyOwner
	external
	returns (bool) { 
		require(acceptedAssetType[_assetType]); 
		require(_newTimeGivenForFunding > 0);
		fundingTimeForType[_assetType] = _newTimeGivenForFunding; 
		return true; 
	}

  function nextStage() 
  internal {
    if (stage == Stages.CreatingAssets) { 
        stage = Stages.CleaningAssets;
      }
      else { 
        stage = Stages.CreatingAssets; 
      }
  }

  function approveUser(address _newUser)
  onlyOwner
  external
  returns (bool) { 
    userApproved[_newUser] = true; 
    return true;
  }

  function removeUser(address _user)
  onlyOwner
  external
  returns (bool) { 
  	userApproved[_user] = false; 
  	return true;
  }

  // --------------------------------------------Modifiers-----------------------------------------------------
  modifier atStage(Stages _stage) {
    require(stage == _stage);
    _;
  }

  modifier transitionNext()  {
  		nextStage(); 
      _;
      nextStage();
  }

  modifier onlyApproved { 
  	require(userApproved[msg.sender]); 
  	_; 
  }
  
// -------------------------------------------------------Getters-------------------------------------------------------

	function getAssetsOfType(bytes32 _assetType)
	 view 
	 external 
	 returns (address[]) { 
		return assets[_assetType]; 
	}

	function getNumAssetsOfType(bytes32 _assetType)
		view
		external
		returns (uint256){ 
			return assets[_assetType].length; 
		}

	function getAllAssetTypes()
	view
	external
	returns (bytes32[]) { 
		return allAssetTypes;
	}
	

	function () public {
		revert();
	}


	event LogAssetCreated(address _creator, address _installer, bytes32 _hubType, uint256 _amountToBeRaised, address projectAddress, uint256 _index);
	event LogAssetTypeAdded(bytes32 indexed _newType, uint256 indexed _timeGivenForFunding, uint256 indexed _timestamp);

}
