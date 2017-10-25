pragma solidity ^0.4.15;
import './Asset.sol';
import './SafeMath.sol';
import './MyBitHub.sol';

// The registry and access point for Assets of this type. 
// Created from myBitHub + initated by owner
contract AssetHub {
using SafeMath for *; 

modifier underAssetLimit() { 
	require(!reachedAssetLimit); 
}

// TODO: Should have mechanism to discard/archive old projects to avoid list from growing too large
mapping (uint256 => address) public assets;    // indexNumber -> Asset address
uint256[] public assetIDs;                       // Array of active assets
uint256 public numAssets;   					// Incrementing ID counter
uint256 public minimumFundingTime;

bool public reachedAssetLimit; 
uint256 public assetSizeLimit;

uint256 public assetOwnershipLimit;    // maximum number of owners for each asset

myBitHub public myBitHub;           // The central hub that created this assetHub
bytes32 public thisAssetType;      // Type of asset...ie. Solar, Car, 
string public assetHubDescription; 
uint256 public thisAssetHubID; 

event assetCreated(bytes32 _type, string _description, uint256 _amountToBeRaised, address _creator, address _projectAddress, uint256 _index); 


	function () {
		revert(); 
	}

	function AssetHub(bytes32 _type, string _description, uint256 _assetSizeLimit, uint256 _minimumFundingTime, uint256 _assetOwnershipLimit, uint256 _index) {
		myBitHub = MyBitHub(msg.sender); 
		thisAssetType = _type; 
		assetHubDescription = _description;
		minimumFundingTime = _minimumFundingTime;
		assetSizeLimit = _assetSizeLimit; 
		assetOwnershipLimit = 5000;  // TODO find safe size to begin with 
		thisAssetHubID = _index;
	}

	// Creates a new project contract. Requires Ether to cover the gas costs
	// TODO: Trigger creation of new asset hub (of same type) when this reaches limit
	function createAsset(uint256 _amountToBeRaised, string _title, string _description) underAssetLimit external returns (address) {
		if ((numAssets + 1) == assetSizeLimit) {  reachedAssetLimit = true;	}
		Asset newAsset = new Asset(msg.sender, _amountToBeRaised, minimumAssetFundingTime, _title, _description, assetOwnershipLimit, numAssets);
		assetIDs.push(numAssets);
		assets[numAssets] = address(newAsset);
		numAssets++;
		assetCreated(_title, _description, _amountToBeRaised, msg.sender, address(newAsset), (numAssets - 1);
		return address(newAsset);
	}

	function changeMinimumFundingTime(uint256 _newTimeLimit) external onlyOwner returns (bool) { 
		minimumFundingTime = _newTimeLimit; 
		return true; 
	}
	

// -------------------------------------------------------Getters-------------------------------------------------------

	function getAssetIDs() constant returns (uint256[]) { 
		return assetIDs; 
	}


}