# MyBit Smart-Contracts

## Overview
The MyBit smart-contract system is built to allow the decentralized crowdfunding of assets and distribution of revenue to users of the platform. It allows for users to buy and sell shares of already funded assets or participate in the staking system which creates an incentive layer for participants to find bugs within the system. To interact with the smart-contracts users must burn a set amount of MyBit Tokens, which will grant them lifetime access to different levels of functionality within the platform. All contracts are built to be upgradeable by storing all long-term data in a simple storage contract, while short-term data and complex logic is handled in their own respective contracts. These complex contracts can be replaced at any time using a manager contract, which requires multi-signature permission from a set of owners. This model allows MyBit to make changes to contract logic in the future without having to replace expensive data structures. All critical functions that may result in the movement of Ether/MyBit or important data changes can be paused/unpaused by the owners of the platform. The platform is currently written to have 3 owners, and all critical functions require a 2/3 consensus agreement on which function parameters to use. The number of owners is still being considered, and may require a larger majority such as 3/5 or 4/6. This consensus secures against any attacks that try to gain control of an owner wallet, while still allowing contracts to have failsafe measures such as selfdestruct(). All contracts are written in Solidity, and scale with usage so that more users won't increase gas costs, and each user is required to pay their own gas costs according to usage. 

# Current MyBit Contracts:

## Owned (testing)
Owned.sol handles the logic behind critical authority measures on the platform. Each owner can use this contract to sign their permission for a particular critical function to be called, as long as the owners agree on the parameters of the functions. This creates a multi-signature requirement for calling these critical functions. In the case that a wallet gets compromised, the other owners will be able to remove that malicious owner from the platform and change it with a trusted address. Owners will also be able to pause/unpause the platform in case of unexpected behavior. 

## ContractManager (testing)
ContractManager.sol is where all current contracts are registered in the MyBit platform. The Database contract will not allow anybody to change the data unless the caller is registered in the ContractManager contract. To add or remove contracts from the platform a multi-sig agreement from the owners is required. As long as ContractManager is able to add new contracts, it will be upgradeable itself. 

## Database (testing)
Database.sol holds all long term data for the platform. It stores all data in mappings which can be referenced with a bytes32 key, which is produced from the sha3 hash of variable names with associated ID's and user addresses. This contract is inspired by RocketStorage's spoke and hub model, and it will be the only contract on the platform that is not upgradeable, since it holds all the data on the platform. For this reason it is written very simple and robust. The database contract will only accept transactions originating from one of the contracts registered in ContractManager.

## UserAccess (testing)
UserAccess.sol handles all the logic dealing with users access levels on the platform. This contract is authorized to grant access levels once it has been called by the TokenBurn contract. Users are able to set a backup address here, which can be used in the case that they have lost access to the original address they used to burn MyBit tokens. 1 = Basic KYC , 2 = Funding/Creating assets, 3 = Ability to stake tokens, 4 = Ability to trade shares.

## TokenBurn (testing)
TokenBurn.sol is where users can burn MyBit tokens in order to access the platform. This will be the users first interaction with the MyBit platform since the functionality of all other contracts require that a certain number of tokens have first been burnt. The user will indicate which access level they desire, and the TokenBurn contract then transfers the required amount of MyBit tokens from the user, which if successful, will call UserAccess.sol and tell it to grant access to this user. The tokens transferred into this contract are lost forever and will be considered out of supply. To burn tokens users must first get KYC approval. 

## AssetCreation (testing)
AssetCreation.sol is where users can start funding periods for new assets. Owners can modify the default funding time given for asset funding periods here. Owners are also able to remove assets from the platform, which freezes ability to trade shares for that asset.

## FundingHub (testing)
FundingHub.sol handles all functionality involved with funding newly created assets. This contract accepts Ether payments from users within the funding period of a new asset. The contract will reward the user with shares equal to the amount that they contributed. (1 wei = 1 share). If the asset successfully meets it's funding target this contract distributes the Ether to the manufacturer, token stakers and the MyBit foundation. If the funding period is a failure, users can get their refunded Ether.  

## Asset (testing)
Asset.sol deals with the functionality of successfully funded assets. This contract receives all income for each live asset on the platform. Assets are referenced by their ID, which is a 32 byte hash. When shares are traded on the marketplace, this contract will be called to transfer the shares to the new owner. Asset shareholders will be able to use this contract to withdraw the income generated by any asset on the platform. 

## Marketplace (testing)
Marketplace.sol creates and settles all buy and sell orders for all live assets on the MyBit platform. Users can create 1 buy & 1 sell order per asset on the platform at their desired price. Once the order is picked up, the Marketplace contract calls the Asset contract and the shares are then transferred to the new owner. The Asset contract will only allow shares to be transferred when called by the Marketplace contract.  

## TokenStake (active-development)
TokenStake.sol is where users can stake their tokens as collateral for the bug bounty process. Users will need to stake tokens for a minimum number of blocks and they will be stored in a linked list according to how long they have been staking for. When assets are funded a 2% fee will be taken off and sent here as a reward for users staking their tokens. The tokens will be used as an incentive for users to find bugs within the platform. The contract will require a delay period for withdrawing tokens as well as a minimum staking time to avoid users pulling their tokens out in the event of a bug. To incentivize long-term staking and a continuous depth of tokens held in for bug bounties, the stakers at the end of the linkedlist will be required to cover the cost of bug bounties first. 

## BugBounty (future-development)
BugBounty.sol will be the contract where verified solidity developers can participate in voting and submitting bugs on the platform. These users will be rewarded with a portion of the 2% fee received from successfully funded assets. If there is consensus that a particular bug is valid, then it will be sent to a higher level of experts, who will indicate the severity of the bug and whether or not it is valid. If a bug is found to be valid, the reward will be paid in MyBit to the person submitting the bug. The MyBit will be taken from the TokenStaking contract.
