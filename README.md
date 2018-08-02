# MyBit Platform

## Overview
The MyBit platform is built to allow the decentralized crowd-funding of assets and distribution of revenue to users of the platform. The contracts are built to automate the distribution of asset revenue to funders and operators of assets.

## Upgradeability
Upgradeability is accomplished through the interaction of a database contract and a manager contract. The database contract holds all expensive long-term data, and the contract manager contract, controls who has write-access to the database. The database operates by storing the sha3 hashes of variable names with associated ID's and user addresses. Since the database contract is not upgradeable it is written to store any data type under a simple key 32 bytes in length.  Contracts: [Database.sol, ContractManager.sol]

## Access
The user access contracts handle all authority measures on the platform. Owners can approve users for KYC, remove users, pause the platform or sign important function calls. The platform is currently written to have 3 owners who must have a consensus for any critical functions to be called. Using this consensus agreement removes the risk involved in having one Ethereum wallet gain control over the whole platform.
By burning MyBit tokens, users can achieve the following access levels: 1 = Funding and Creating assets, 2 = Staking, 3 = Decentralized Exchange . Contracts: [UserAccess.sol, Owned.sol]

## Assets
The contracts involved in asset life-cycles are broken down into 3 main periods: creation period, funding period and distributing period. The creation period is where operators can escrow MyBit tokens before starting a funding period to increase incentive not to abandon the asset. The funding period is where users can send in ETH to a newly created asset, which buys them ownership units in that asset (1 wei contributed = 1 ownership unit). If the asset successfully meets it's funding target this contract distributes the Ether to the manufacturer and the MyBit foundation. If the funding period is a failure, users can withdraw their Ether and asset managers can retrieve their escrowed MYB. The distribution period deals with receiving and distributing income produced by assets, as well as managing users ownership units, which may be traded on the Asset Exchange. Contracts: [AssetCreation.sol, FundingHub.sol, Asset.sol, OperatorEscrow.sol]

## Decentralized Asset Exchange (DAX)
The DAX is where users can trade ownership units for all successfully funded assets on the MyBit platform. Once the order is filled, the DAX contract calls the Asset contract and the shares are then transferred to the new owner. Contracts: [AssetExchange.sol, Asset.sol]

# Live test-net contracts 
* [InitialVariables](https://ropsten.etherscan.io/address/0x9e6606dedcf9d4960f8652abe2d624a048231841#code)
* [UserAccess](https://ropsten.etherscan.io/address/0xb14c50bb7530c71e14f28498bad1f65d10b5b3a9#code)
* [API](https://ropsten.etherscan.io/address/0x139ebd700b089f51a9dd90c0403e5326b1426f3b#code)
* [AssetCreation](https://ropsten.etherscan.io/address/0xb00bb34e0b0e60e5a7b59908aa4a368f50686635#code)
* [FundingHub](https://ropsten.etherscan.io/address/0xfc2cb1a08ac82852a7fd20c763fa31dd819d7812)
* [MyBitToken](https://ropsten.etherscan.io/address/0xbb07c8c6e7cd15e2e6f944a5c2cac056c5476151#code)
* [TokenFaucet](https://ropsten.etherscan.io/address/0x66652784bd48b69d9f20c9046b67150351023707#code)

# AssetTypes 
Supported assets are currently represented by sha3 hashes, found in the event logs of AssetCreation.sol

* Bitcoin ATM's = sha3('bitcoinatm') = 0x89c2e778df1760738073f345cda4cc7882d91c5930ecfbb6c7169ebb424d798c
* Crypto Mining = sha3('cryptomining') = 0xdb0e7348e98d09c7fee772dfbd40a3baf8c3c68e5b3137d912470a75e4409102
* Real Estate (storage) = sha3('realestatestorage') = 0x3db94d6c20a671cba945a7cc9a028d6d0b922c7025155176bf68249f594760e4
* Real Estate (co-working) = sha3('realestatecoworking') = 0x4dc6f247c02006ecc1c1303c3b4027a2726157fe0c74fa6be8abac47441b4400
* Charging Station = sha3('chargingstation') = 0x2eaf4e91d546a4160da92a8e56bae0a9bd9927ab4abc890f488cd6dd47eec457
* Drone Delivery = sha3('dronedelivery') = 0xd22de9fd8ac68be8ad044b599b3fe8021403e76249978682ec3100b97c4c910e
* Autonomous Vehicles = sha3('autonomousvehicles') = 0x1028440d22921555aeed9d53d5fc00d19e1c07505c5e3956f97d5f8737973ae7
* Solar Energy = sha3('solarenergy') = 0xe18b450ce32d6b1b19ce094e853360cfcae676ecce9634dd56fd16f1a9d6b5c3
* Wind Energy = sha3('windenergy') = 0x0c37b1a99407cbe04e8fb40b28135bd4edea794d690074d65925a414788b232d
* Masternodes = sha3('masternodes') = 0xd188a5c31ca91a2f13f0a014bb75cf93fe02008ba9fcf4ed842a449680c57849
* Vending Machines = sha3('vendingmachines') = 0x9edaf5f9488a0a63a528f4d7a0dfb8b73061089f7a0069b0fcb545ffcc666cfb
* Other = sha3('other') = 0x26b60b6bee32c2d284da42d089b795640a977077a3c25b246fe0448f42ce4ec0

# Installer ID's
* Bitcoin Atm Installer = sha3("bitcoinatminstaller") = 0xa8df8257a08a2624d6f44a6dd6169f83c991ea22b10cfbc395502f53fa8222bf
* Crypto Mining Installer = sha3('cryptomininginstaller') = 0x15304e9e243a1990e938a8e4eb852bdaea3e7b930acb441e942af5c6a1482c3f
* Real Estate Installer (storage) = sha3('realestatestorage') = 0x3db94d6c20a671cba945a7cc9a028d6d0b922c7025155176bf68249f594760e4

:pencil2:  All contracts are written in Solidity.
