
# MyBit-Network: Contract SDK
The contracts in the SDK are built to be used to create and distribution income from virtual assets represented by ERC tokens. Using contract inheritance the contracts can be combined in different ways to modify the crowdfunding and re-distribution details. 

## Contract Categories

### Authorization 
Authorization is where owner privileges and user access levels contracts are stored. Add these to your Dapp to restrict access based on roles. Users can choose to have multi-sig permissions for particular functions or contracts. 

### Crowdsale 
In the crowdsale folder you can find all the contracts involved with funding new assets and generating new ERC tokens to represent shares of the asset resulting from a crowdsale. 

### Distribution 
The distribution folder is where asset tokens can be traded and distributed. New assets not requiring a crowdsale can be created using these contracts. 

### Ecosystem 
Ecosystem contracts involve adding ID's, functions and other standards that help contracts communicate to other contracts in the ecosystem to allow particular functionality or avoid funds from being sent to the wrong addresses. 

### Math 
Math contracts are helper libraries for performing arithmetic without worrying about overflows and underflows. 

### Tokens 
Token contracts are used to represent assets. Tokens representing assets can be burnable, mintable, fixed-supply, and can distribute income to holders. 

### Upgradeable 
Upgradeable contracts allow users to have upgradeable contracts. The owners can decide to update contracts without losing the valuable data storage. 

### Example  
Example contracts put together the above componenets into working contract systems that can create and distribute income from virtual assets. 


# Live test-net contracts 
* [InitialVariables](https://ropsten.etherscan.io/address/0x9e6606dedcf9d4960f8652abe2d624a048231841#code)
* [UserAccess](https://ropsten.etherscan.io/address/0xb14c50bb7530c71e14f28498bad1f65d10b5b3a9#code)
* [API](https://ropsten.etherscan.io/address/0x139ebd700b089f51a9dd90c0403e5326b1426f3b#code)
* [AssetCreation](https://ropsten.etherscan.io/address/0x011d426358f1982e327648506d3fdae01d054297#code)
* [FundingHub](https://ropsten.etherscan.io/address/0xb94bd7c5ca000beeff27db7cebb9c03749901f19#code)
* [MyBitToken](https://ropsten.etherscan.io/address/0xbb07c8c6e7cd15e2e6f944a5c2cac056c5476151#code)
* [TokenFaucet](https://ropsten.etherscan.io/address/0x8742272c58f6fe0c2943eba9399c04cbd5342ab2#writeContract)

# AssetTypes 
Supported assets are currently represented by sha3 hashes, found in the event logs of AssetCreation.sol

* Bitcoin ATM's = `sha3('bitcoinatm')` = `0x89c2e778df1760738073f345cda4cc7882d91c5930ecfbb6c7169ebb424d798c`
* Crypto Mining = `sha3('cryptomining')` = `0xdb0e7348e98d09c7fee772dfbd40a3baf8c3c68e5b3137d912470a75e4409102`
* Real Estate (storage) = `sha3('realestatestorage')` = `0x3db94d6c20a671cba945a7cc9a028d6d0b922c7025155176bf68249f594760e4`
* Real Estate (co-working) = `sha3('realestatecoworking')` = `0x4dc6f247c02006ecc1c1303c3b4027a2726157fe0c74fa6be8abac47441b4400`
* Charging Station = `sha3('chargingstation')` = `x2eaf4e91d546a4160da92a8e56bae0a9bd9927ab4abc890f488cd6dd47eec457`
* Drone Delivery = `sha3('dronedelivery')` = `0xd22de9fd8ac68be8ad044b599b3fe8021403e76249978682ec3100b97c4c910e`
* Autonomous Vehicles = `sha3('autonomousvehicles')` = `0x1028440d22921555aeed9d53d5fc00d19e1c07505c5e3956f97d5f8737973ae7`
* Solar Energy = `sha3('solarenergy')` = `0xe18b450ce32d6b1b19ce094e853360cfcae676ecce9634dd56fd16f1a9d6b5c3`
* Wind Energy = `sha3('windenergy')` = `0x0c37b1a99407cbe04e8fb40b28135bd4edea794d690074d65925a414788b232d`
* Masternodes = `sha3('masternodes')` = `0xd188a5c31ca91a2f13f0a014bb75cf93fe02008ba9fcf4ed842a449680c57849`
* Vending Machines = `sha3('vendingmachines')` = `0x9edaf5f9488a0a63a528f4d7a0dfb8b73061089f7a0069b0fcb545ffcc666cfb`
* Other = `sha3('other')` = `0x26b60b6bee32c2d284da42d089b795640a977077a3c25b246fe0448f42ce4ec0`


:pencil2:  All contracts are written in Solidity.
