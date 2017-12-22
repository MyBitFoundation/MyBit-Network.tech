# MyBitDapp platform

# Contracts

## Design Overview
Assets on MyBitPlatform will be represented by their own Asset contract. The accounting and funding of each individual asset will go through their respective contracts. These contracts are created by the contract called MyBitHub. Wherever possible, data is stored in event logs in order to minimize gas usage. 

## MyBitHub
MyBitHub is where Assets are created. It stores relevant information to the funding and operation of assets. 
Asset types are stored in bytes32 and Assethubs can only be created if the type is approved and there is no available assetHubs of that type deployed

## Asset
The asset contract is where the actual Ether will be stored while funding an asset. If the funding period is a success the asset contract will send the Ether to the manufacturer, MyBitFoundation and users staking tokens. After funding the asset contract will receive income produced by the assets, where funders can claim their share. 

## TokenHub
This contract controls all of the LockingToken contracts that are spawned from TokenHub.  The 2 % fee is sent from the asset and is split among the different token contracts.  

## TokenStaking
Locks the tokens in the contract, depending upon what day the user locks the token they get a particular multiplier.  Once the time limit has been reached, called when somebody tries to do UnlockTokens(), all the tokens are transferred back to the users.  

## Owned 
The owned contract is in charge of authorization information. It will be a reference for who is authorized to access certain functionality on the platform. 

## Pausible 
This contract inherits the Owned contract, and it enables owner to pause or unpause certain functionality on the platform. 

