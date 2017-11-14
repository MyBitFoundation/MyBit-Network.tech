pragma solidity ^0.4.18;
import './Owned.sol';
import './SafeMath.sol';
import './Pausable.sol'; 
import './MyBitHub.sol';
import './Asset.sol';

// The registry and access point for Assets of this title.
// Created from myBitHub + extension of owner contract
contract AssetHub is Owned {
using SafeMath for *;

modifier underAssetLimit() {
	require(numAssets < maxNumberOfAssets);
	_;
}

modifier limitReached() {
	_;
	if (numAssets == maxNumberOfAssets){
		require(openNewAssetHub());
	}

}


// TODO: Should have mechanism to discard/archive failed assets to avoid list from growing too large. Can't discard before people have withdrawn fundss
// TODO: Asset funders may have several assets to withdrawl funds from....will need similar settlePayments() function each time someone wants to withdrawl
mapping (uint256 => address) public assets;    // indexNumber -> Asset address
uint256[] public assetIDs;                       // Array of active assets
uint256 public numAssets;   					// Incrementing ID counter
uint256 public minimumFundingTime;     // Minimum amount of time given for the funding of assets

uint256 public maxNumberOfAssets;				// Maximum number of assets that the AssetHub can hold
uint256 public maxNumberOfOwners;     // Maximum number of owners for each asset.....

MyBitHub public myBitHub;           // The central hub that created this assetHub
bytes32 public thisAssetType;      // Type of asset...ie. Solar, Car,
uint256 public thisAssetHubID;     // ID of assetHub...can lookup in MyBitHub


event assetCreated(address _creator, address _assetInstaller, uint256 _amountToBeRaised, uint256 _maxNumberOfOwners, address _projectAddress, uint256 _index);


	function () public {
		revert();
	}
	// Created by MyBitHub. Has fixed asset size limit
	function AssetHub(bytes32 _assetType, uint256 _maxNumberOfAssets, uint256 _minimumFundingTime, uint256 _index) 
	public {
		myBitHub = MyBitHub(msg.sender);
		thisAssetType = _assetType;
		minimumFundingTime = _minimumFundingTime;
		maxNumberOfAssets = _maxNumberOfAssets;
		maxNumberOfOwners = 10000;
		thisAssetHubID = _index;
	}

	// Creates a new project contract. Requires Ether to cover the gas costs
	// TODO: Trigger creation of new asset hub (of same title) when this reaches limit
	function createAsset(bytes32 _storageHash, uint256 _amountToBeRaised, address _assetInstaller) 
	underAssetLimit 
	limitReached 
	external 
	returns (address) {
		Asset newAsset = new Asset(msg.sender, _storageHash, _assetInstaller, _amountToBeRaised, minimumFundingTime, maxNumberOfOwners, numAssets);
		assetIDs.push(numAssets);
		assets[numAssets] = address(newAsset);
		assetCreated(msg.sender, _assetInstaller, _amountToBeRaised, maxNumberOfOwners, address(newAsset), numAssets);
		numAssets++;
		return address(newAsset);
	}

	// TODO: Should this be called seperately from createAsset to save gas costs??  Alternatively can listen for assetCreated() event and trigger a call when numAssets == assetSizeLimit
	function openNewAssetHub() 
	internal 
	returns (bool){
		require(myBitHub.newHubNeeded(thisAssetHubID));
		return true;
	}


	function changeMinimumFundingTime(uint256 _newTimeLimit) 
	onlyOwner 
	external 
	returns (bool) {
		minimumFundingTime = _newTimeLimit;
		return true;
	}


// -------------------------------------------------------Getters-------------------------------------------------------

	function getAssetIDs() external constant returns (uint256[]) {
		return assetIDs;
	}


}
