# Overview
The contracts are created to be upgradeable as they save all long-term data in Database.sol. As development continues and contracts change, we will use the upgrading protocol written in ContractManager.sol. For this reason the current address + abi of the contracts will be changing throughout the Alpha.

# Getting Started
MyBit is currently testing it's contracts on the Ropsten testnet. You can find the currently deployed contracts in the "RopstenAddress" folder. 

# Live test-net contracts 
* [InitialVariables](https://ropsten.etherscan.io/address/0x53fa423780e55a2bf53d89132157ef4ff8e7ac56#code)
* [UserAccess](https://ropsten.etherscan.io/address/0xb14c50bb7530c71e14f28498bad1f65d10b5b3a9#code)
* [API](https://ropsten.etherscan.io/address/0x139ebd700b089f51a9dd90c0403e5326b1426f3b#code)

# Usage
* First go to the MYB Faucet and get at least 1,000 MYB tokens  (token has 18 decimal places so 1.0 MYB = 1000000000000000000)
* To fund/create assets, you must burn tokens in TokenBurn.sol by calling approveAndCall in MyBitToken.sol, with the TokenBurn contract as the spender


# Testing 
* In the terminal run `ganache-cli`  (use -a flag to specify number of accounts ie. -a 20) 
* Open another terminal window and navigate to Contracts/test 
* run `truffle test testFileName.js` 
* NOTE: Make sure bignumber.js is installed.  `npm install bignumber.js`

# Compiling 
* In the terminal run `ganache-cli`  
* In another terminal navigate to /Contracts 
* run `truffle compile` 

# Dependencies 
* bignumber.js   `npm install bignumber.js`
* solidity-docgen  `npm install solidity-docgen`

# AssetTypes 
Assets are currently represented by the sha3 hash of supported asset types. 
* BitcoinATM = sha3('BitcoinATM') = 0x5d8e833f4fba61d80762218946d01c0ccff5329a41b33ce0e6b839cd892f96ac

# Installer ID's
* BitcoinAtmInstaller = sha3("BitcoinAtmInstaller") = 0xd7efceade817d524ae896c95d6ec0ae99cf55d164e0e2fc2e89a588d70e2eee7

# Current MyBit Contracts:

## Owned
Owned.sol handles the logic behind critical authority measures on the platform. Each owner can use this contract to sign their permission for a particular critical function to be called, as long as the owners agree on the parameters of the functions. This creates a multi-signature requirement for calling these critical functions. In the case that a wallet gets compromised, the other owners will be able to remove that malicious owner from the platform and change it with a trusted address. Owners will also be able to pause/unpause the platform in case of unexpected behavior.

## ContractManager
ContractManager.sol is where all current contracts are registered in the MyBit platform. The Database contract will not allow anybody to change the data unless the caller is registered in the ContractManager contract. To add or remove contracts from the platform a multi-sig agreement from the owners is required. As long as ContractManager is able to add new contracts, it will be upgradeable itself.

## Database
Database.sol holds all long term data for the platform. It stores all data in mappings which can be referenced with a bytes32 key, which is produced from the sha3 hash of variable names with associated ID's and user addresses. This contract is inspired by RocketStorage's spoke and hub model, and it will be the only contract on the platform that is not upgradeable, since it holds all the data on the platform. For this reason it is written very simple and robust, only taking bytes32 keys to store values. The database contract will only accept transactions originating from one of the contracts registered in ContractManager.

## UserAccess
UserAccess.sol handles all the logic dealing with users access levels on the platform. This contract is authorized to grant access levels once it has been called by the TokenBurn contract. Users are able to set a backup address here, which can be used in the case that they have lost access to the original address they used to burn MyBit tokens. 1 = Funding/Creating assets, 2 = Ability to stake tokens, 3 = Ability to trade shares.

## TokenBurn
TokenBurn.sol is where users can burn MyBit tokens in order to access the platform. This will be the users first interaction with the MyBit platform since the functionality of all other contracts require that a certain number of tokens have first been burnt. The user will indicate which access level they desire, and the TokenBurn contract then transfers the required amount of MyBit tokens from the user, which if successful, will grant access to this user. The required amount of tokens are determined by the current price of MyBit in USD. This price is determined by OracleHub, which is valid for x seconds, until it must be called again. The tokens transferred into this contract are lost forever and will be considered out of supply. To burn tokens users must first get KYC approval.

## AssetCreation
AssetCreation.sol is where operators can start funding periods for new assets. Operators are required to lock MyBit tokens in escrow before starting a funding period for a new asset. This escrow can be retrieved by the operator once the funders decide that he has properly done his job. Owners can modify the default funding time given for asset funding periods here. Owners are also able to remove assets from the platform, which freezes ability to trade shares for that asset.

## FundingHub
FundingHub.sol handles all functionality involved with funding newly created assets. This contract accepts Ether payments from users within the funding period of a new asset. The contract will reward the user with shares equal to the amount that they contributed. (1 wei = 1 share). If the asset successfully meets it's funding target this contract distributes the Ether to the manufacturer, token stakers and the MyBit foundation. If the funding period is a failure, users can withdraw their funded Ether. Operators can retrieve their escrowed tokens if funding period fails.  

## Asset
Asset.sol deals with the functionality of successfully funded assets. This contract receives all income for each live asset on the platform. Assets are referenced by their ID, which is a 32 byte hash. When shares are traded on the marketplace, this contract will be called to transfer the shares to the new owner. Asset shareholders will be able to use this contract to withdraw the income generated by any asset on the platform.

## AssetExchange
AssetExchange.sol creates and settles all buy and sell orders for all live assets on the MyBit platform. Users can create 1 buy & 1 sell order per asset on the platform at their desired price. Once the order is picked up, the Marketplace contract calls the Asset contract and the shares are then transferred to the new owner. The Asset contract will only allow shares to be transferred when called by the Marketplace contract.  

