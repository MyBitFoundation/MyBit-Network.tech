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

:pencil2:  All contracts are written in Solidity.
