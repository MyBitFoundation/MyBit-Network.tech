pragma solidity ^0.4.15;
import './AssetHub.sol';
import './SafeMath.sol';

//  MyBitHub is where the Owner can create AssetHubs and add new asset types to the platform
// TODO: This design will reach an inevitable limit once it has made x amount of hubs through ethereums gas limit
contract MyBitHub is Owned {
using SafeMath for *; 


uint256 public assetSizeLimit;   // The number of assets each particular assetHub can hold...is set in constructor. 


mapping (uint256 => address) public assetHubs;      // ID lookup for AssetHubs created on the platform
mapping (uint256 => bytes32) public assetType;		// ID lookup for the type of asset this hub creates
uint256[] public assetHubIDs;                      // ID's of all AssetHubs created on MyBit platform
uint256 public numAssetHubs;   					 // Total number of AssetHubs on the platform
	

// Note: Strings cannot be used as keys in a mapping, so it is stored as bytes32 instead (also cheaper to store bytes32)
mapping (bytes32 => bool) public acceptedAssetType;      // Is this type accepted on the platform
mapping (bytes32 => bool) public needsNewHub; 
mapping (bytes32 => address[]) public assetHubsOfType;   // All hubs created of this type
mapping (bytes32 => uint256) public fundingTimeForType;  // time given for funding period for given type of asset
bytes32[] public allAssetTypes;       // All known asset types on the platform



event assetHubCreated(string _type, string _description, uint256 _assetSizeLimit, uint256 _index, address creator, address projectAddress); 


	function () {
		revert(); 
	}

	function MyBitHub() { 
		numAssetHubs = 0;
		assetSizeLimit = 10000; // TODO find safe number of assets each hub can hold
	}

	// TODO: Automate new hub creation when one reaches it's limit....
	// TODO: Must check that either no hubs of this type exist or the most recent one is full
	// Creates a new contract called AssetHub, which can create Asset contracts
	function createAssetHub(bytes32 _type) external returns (address) {
		require(acceptedAssetType[_type]);
		require(needsNewHub[_type]);
		AssetHub newHub = new AssetHub(_type, assetSizeLimit, fundingTimeForType[_type], numAssetHubs);
		assetHubs[numAssetHubs] = address(newHub);
		assetHubIDs[numAssetHubs].push(numAssetHubs); 
		numAssetHubs++;
		needsNewHub[_type] = false; 
		assetHubCreated(_title, _description, assetSizeLimit, (numAssetHubs - 1), msg.sender, address(newHub));
		return address(newHub);
	}

	// TODO: Need clean way to create new AssetHub when previous one is full
	// Have a daemon that listens for an event to call the contract?? (what if it goes down? )
	function newHubNeeded(uint256 _requestingHub) external returns (bool) { 
		require(assetHubs[_requestingHub] == msg.sender);
		needsNewHub[assetType[_requestingHub]] = true; 
		return true; 

	}

	// Owner can change number of assets future AssetHubs are able to create (may need to be modified as block gas limit is changed)
	function changeHubCarryingCapacity(uint256 _newSize) onlyOwner external returns (bool) { 
		assetSizeLimit = _newSize; 
		return true; 
	}

	// Allow a new asset type to be funded on the platform
	function addAssetType(bytes32 _newType, uint256 _timeGivenForFunding) onlyOwner external returns (bool) { 
		require(!acceptedAssetType[_newType]); 
		acceptedAssetType[_newType] = true;
		allAssetTypes.push(_newType);
		fundingTimeForType[_newType] = _timeGivenForFunding;
		needsNewHub[_newType] = true; 
		return true;
	}
	

// -------------------------------------------------------Getters-------------------------------------------------------

	function getAssetIDs() constant external returns (uint256[]) { 
		return assetHubIDs; 
	}


}