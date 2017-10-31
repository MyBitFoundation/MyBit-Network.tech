# MyBitDapp platform

# Contracts

## MyBitHub
This is where AssetHubs are created and owner can allow new types of Assets to be created on the platform. 
When a new AssetHub is created, this hub will create that contract and store it's location for later lookup
Asset types are stored in bytes32 and Assethubs can only be created if the type is approved and there is no available assetHubs of that type deployed

## AssetHub
Asset hubs are of a certain type (ie. Solar, ATM, RealEstate etc..)
The AssetHubs are where users will create new Assets to be funded. 
Each AssetHub has a limit on how many assets it can create, and once full, it must signal to MyBitHub to create a new AssetHub of this type

## Asset
The asset contract is where the actual Ether will be stored while funding an asset. If the funding period is a success the asset contract will send the Ether to the manufacturer, lockedTokenHolders, MyBitFoundation and Insurance escrow. 

## LockedTokens
This contract is where the network fees will be sent to and collected by users who have locked MyBit

# Creation Flow

![Internal Contracts](https://github.com/MyBitFoundation/MyBitDapp/tree/master/Images/MyBitDapp.png)

![General Funding Flow](https://github.com/MyBitFoundation/MyBitDapp/tree/master/Images/ContractCreation.png)
