pragma solidity ^0.4.18;
import './SafeMath.sol';
import './Owned.sol';
import './Pausable.sol'; 
import './Asset.sol';


// TODO: Find carrying capacity of this contract
contract MyBitHub is Pausable {
using SafeMath for *;

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


	function MyBitHub() public {
	}

	// TODO: Stop people from spamming wrong assets?  (Ie. upfront cost + approval process)
	function createAsset(bytes32 _storageHash, uint256 _amountToBeRaised, address _assetInstaller, bytes32 _assetType) 
	whenNotPaused
	external 
	returns (address) {
		require(acceptedAssetType[_assetType]); 
		require(_storageHash != bytes32(0)); 
		require(_amountToBeRaised >= 0); 
		require(_assetInstaller != address(0)); 
		Asset newAsset = new Asset(msg.sender, _storageHash, _assetInstaller, _amountToBeRaised, fundingTimeForType[_assetType], assets[_assetType].length);
		assets[_assetType].push(address(newAsset));
		assetType[address(newAsset)] = _assetType; 
		assetCreated(msg.sender, _assetInstaller, _assetType, _amountToBeRaised, address(newAsset), assets[_assetType].length);
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
		assetTypeAdded(_newType, _timeGivenForFunding, block.timestamp); 
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


	event assetCreated(address _creator, address _installer, bytes32 _hubType, uint256 _amountToBeRaised, address projectAddress, uint256 _index);
	event assetTypeAdded(bytes32 indexed _newType, uint256 indexed _timeGivenForFunding, uint256 indexed _timestamp);

}
