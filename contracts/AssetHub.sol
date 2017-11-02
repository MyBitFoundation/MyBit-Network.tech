pragma solidity ^0.4.15;
import './Asset.sol';
import './SafeMath.sol';
import './MyBitHub.sol';

// The registry and access point for Assets of this type. 
// Created from myBitHub + extension of owner contract
contract AssetHub is Owned{
using SafeMath for *; 

modifier underAssetLimit() { 
	require(numAssets < assetSizeLimit); 
	_;
}

modifier limitReached() {
	_; 
	if (numAssets == assetSizeLimit){ 
		require(myBitHub.newHubNeeded(thisAssetHubID)); 
	}
	
}


// TODO: Should have mechanism to discard/archive failed assets to avoid list from growing too large. Can't discard before people have withdrawn fundss
mapping (uint256 => address) public assets;    // indexNumber -> Asset address
uint256[] public assetIDs;                       // Array of active assets
uint256 public numAssets;   					// Incrementing ID counter
uint256 public minimumFundingTime;

uint256 public assetSizeLimit;

uint256 public assetOwnershipLimit;    // maximum number of owners for each asset

myBitHub public myBitHub;           // The central hub that created this assetHub
bytes32 public thisAssetType;      // Type of asset...ie. Solar, Car, 
uint256 public thisAssetHubID;     // ID of assetHub...can lookup in MyBitHub


event assetCreated(bytes32 _type, string _description, uint256 _amountToBeRaised, address _creator, address _projectAddress, uint256 _index, uint256 _assetSizeLimit); 


	function () {
		revert(); 
	}
	// Created by MyBitHub. Has fixed asset size limit
	function AssetHub(bytes32 _type, uint256 _assetSizeLimit, uint256 _minimumFundingTime, uint256 _assetOwnershipLimit, uint256 _index) {
		myBitHub = MyBitHub(msg.sender); 
		thisAssetType = _type; 
		minimumFundingTime = _minimumFundingTime;
		assetSizeLimit = _assetSizeLimit; 
		assetOwnershipLimit = 5000; 
		thisAssetHubID = _index;
	}

	// Creates a new project contract. Requires Ether to cover the gas costs
	// TODO: Trigger creation of new asset hub (of same type) when this reaches limit
	function createAsset(uint256 _amountToBeRaised, string _title, string _description, address _assetInstaller) underAssetLimit limitReached external returns (address) {
		Asset newAsset = new Asset(msg.sender, _assetInstaller, _amountToBeRaised, minimumAssetFundingTime, _title, _description, assetOwnershipLimit, numAssets);
		assetIDs.push(numAssets);
		assets[numAssets] = address(newAsset);
		assetCreated(_title, _description, _amountToBeRaised, msg.sender, address(newAsset), numAssets, assetSizeLimit);
		numAssets++;
		return address(newAsset);
	}

	// TODO: Should this be called seperately from createAsset to save gas costs??  Alternatively can listen for assetCreated() event and trigger a call when numAssets == assetSizeLimit
	function openNewAssetHub() internal returns (bool){ 
		require(myBitHub.newHubNeeded(thisAssetHubID)); 
		return true;
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