# MyBitDapp platform

## Design Overview
This dapp is designed to follow a hub and spoke model, so that long-term data storage will be made in a central database. A contract manager determines which contracts have write access to the database.
This allows for contracts to be replaced and upgraded without having to replace the expensive data storage. 
Any owner can pause/unpause all critical functionality, and an owner can authorize one of the other two owners to selfdestruct a contract and return any funds to an agreed upon address in case of critical bugs. 
All data is stored in Database.sol, in the form of a sha3 hash of the name of the variable, the ID of the object and the address of the user if applicable. 
The database will only allow data to be written from contracts that are registered in contract manager, which requires a majority consensus by owners through the act of signing the function + agreeing on the address of the new/deleted contract.

# Contracts

## AssetCreation
This contract is where users can create a new asset, setting the funding period in motion. Owners can modify funding variables here & remove assets from the platform. 

## FundingHub
The FundingHub contract handles all funding functionality. Users can fund the asset during the funding period, and if success this contract triggers the funds to be sent to the appropriate receivers. If failure, users can retrieve their funds here. 

## Asset 
Asset is the contract that deals with the functionality of a live-asset. If users trade shares on the marketplace, this contract will handle the logic. All income generated from the assets will be sent here and can be withdrawn by shareholders here.

## Marketplace
Marketplace creates/settles all buy and sell orders for all assets on the MyBit platform. Users can create 1 buy & 1 sell order per asset on the platform at any price they desire. Once the order is picked up, marketplace calls Asset.sol and the shares & payment info is updated.  

## TokenStake
TokenStake locks MyBit tokens in the contract as a stake against the bug bounty process. 2% of asset funds will be sent and distributed here if no bugs are found in a set period.  

## TokenBurn
TokenBurn is where users can gain access to different areas of the MyBit platform. 2 = Funding/Creating assets, 3 = Ability to stake tokens, 4 = Ability to trade shares on the marketplace.

## UserAccess
UserAccess handles all the logic dealing with users access levels on the platform. TokenBurn is authorized to grant access levels once users have burned their tokens. Owners can remove/add users here. 

## Owned 
Owned handles critical authority measures on the platform. Each owner has the abilit to give permission to one of the other two owners to call a critical function such as selfdestruct or changing a contract in ContractManager, if they agree on the parameters of the functions. Ownership can also be transferred here and contracts can be paused/unpaused. 

## ContractManager 
This is where all current contracts are registered in the MyBit platform. For a contract to add data to the platform, they must be registered here by the owners. 

## Database 
This contract holds all long term data for the platform. It stores all data in a bytes32 key, resulting from the sha3 hash of variables, ID's and user addresses. It restricts access to contracts registered on the platform. 
