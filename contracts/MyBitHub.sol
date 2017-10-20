pragma solidity ^0.4.11;
import './Asset.sol';
import './SafeMath.sol';

//  The registry and access point for all platform assets
contract MyBitHub {
using SafeMath for *; 
// TODO: Should have mechanism to discard/archive old projects to avoid list from growing too large
mapping (uint256 => Asset) public assets;    // indexNumber -> Asset address
uint256[] public assetIDs;                       // Array of active assets
uint256 public numAssets;   					// Incrementing ID counter

// DISCUSS: Should there be several hubs for each Asset class? 


event assetCreated(string _title, string _description, uint256 _amountToBeRaised, uint256 _deadline, address creator, address projectAddress); 


	function () {
		revert(); 
	}

	function MyBit() { 
		numAssets = 0; 
	}
	// Creates a new project contract. Requires Ether to cover the gas costs
	function createAsset(uint256 _amountToBeRaised, uint256 _deadline, string _title, string _description) external returns (address) {
		Asset newAsset = new Asset(msg.sender, _amountToBeRaised, _deadline, _title, _description, numAssets);
		assetIDs.push(numAssets);
		assets[numAssets] = newAsset;
		numAssets++;
		assetCreated(_title, _description, _amountToBeRaised, _deadline, msg.sender, address(newAsset));
		return address(newAsset);
	}
	

// -------------------------------------------------------Getters-------------------------------------------------------
	function getAssetAddress(uint256 _id) constant returns (address) { 
		return assetIDs[_id]; 
	}

	function getAssetIDs() constant returns (uint256[]) { 
		return assetIDs; 
	}


}