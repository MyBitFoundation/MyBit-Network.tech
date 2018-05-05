# MyBit Platform

## Overview
The MyBit platform is built to allow the decentralized crowdfunding of assets and distribution of revenue to users of the platform. The contracts are built to automate the distribution of asset revenue to funders and operators of assets. 


# Smart-Contracts

## Upgradeability 
All contracts are built to be upgradeable by storing long-term data in a simple storage contract, while short-term data and complex logic is handled in their own respective contracts. The contracts can be upgraded at any time without losing access to the valuable long-term data. To upgrade a contract the owners will go through a multi-signature process that requires them to agree on the address of the replacing contract.

## Tiered Access
To interact with the smart-contracts users will have to own MyBit Tokens, which they will burn to gain lifetime access to different levels of functionality within the platform. In this way supply will decrease with usage of the platform. 

## Multi-Signature ownership 
All critical functions that may result in the movement of Ether/MyBit or important data changes can be paused/unpaused by the owners of the platform. The platform is currently written to have 3 owners who must have a consensus for any critical functions to be called. Using this consensus agreement removes the risk involved in having one Ethereum wallet gain control over the whole platform. All contracts are written in Solidity.
