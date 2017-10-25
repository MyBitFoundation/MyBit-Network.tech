pragma solidity ^0.4.15;
import './AssetHub.sol';
import './SafeMath.sol';

//  MyBitHub is where the Owner can create AssetHubs and add new asset types to the platform
contract MyBitHub is Owned {
using SafeMath for *; 

uint256 public assetSizeLimit;   // The number of assets each particular assetHub can hold


mapping (uint256 => address) public assetHubs;    
uint256[] public assetHubIDs;                      
uint256 public numAssetHubs;   					


// Store data so that we can know the type of asset...
// option 1 -> store the bytes32 of an agreed string value
mapping (uint256 => bytes32) public type;
mapping (bytes32 => bool) public acceptedAssetTypes;
mapping (bytes32 => address[]) public assetHubsOfType; 
bytes32[] public allAssetTypes; 

// option 2 -> store any ID and have a reference off-chain



event assetHubCreated(string _type, string _description, uint256 _assetSizeLimit, uint256 _index, address creator, address projectAddress); 


	function () {
		revert(); 
	}

	function MyBitHub() { 
		numAssetHubs = 0;
		assetSizeLimit = 1000; 
	}

	// TODO: Automate new hub creation when one reaches it's limit...this will need to be triggered by assethub itself
	function createAssetHub(bytes32 _type, string _description, uint256 _fundingTimeLimit) internal returns (address) {
		require(_fundingTimeLimit > 0);
		require(acceptedAssetTypes[_type]);
		require(bytes(_description).length > 0);
		AssetHub newHub = new AssetHub(_type, _description, assetSizeLimit, _fundingTimeLimit, numAssetHubs);
		assetHubs[numAssetHubs] = address(newHub);
		assetHubIDs[numAssetHubs].push(numAssetHubs); 
		numAssetHubs++;
		assetHubCreated(_title, _description, assetSizeLimit, (numAssetHubs - 1), msg.sender, address(newHub));
		return address(newHub);
	}

	// TODO: 
	function resolveFullAssetHub(uint256 _requestingHub, string _description, uint256 _fundingTimeLimit) external returns (address) { 
		require(assetHubs[_requestingHub] == msg.sender);
		

	}

	function changeAssetLimit(uint256 _newSize) onlyOwner external returns (bool) { 
		assetSizeLimit = _newSize; 
		return true; 
	}

	function addAssetType(bytes32 _newType) onlyOwner external returns (bool) { 
		bytes32 assetType = keccak256(_newType);
		require(!acceptedAssetTypes[assetType]); 
		acceptedAssetTypes[assetType] = true;
		return true;
	}
	

// -------------------------------------------------------Getters-------------------------------------------------------

	function getAssetIDs() constant external returns (uint256[]) { 
		return assetHubIDs; 
	}


}