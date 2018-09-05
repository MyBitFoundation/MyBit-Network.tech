# MyBit-SDK 
The contracts in the MyBit-SDK are built to be used to create and distribution income from virtual assets represented by ERC tokens. Using contract inheritance the contracts can be combined in different ways to modify the crowdfunding and re-distribution details. 




## Contract Categories

### Access 
Access is where user access is managed. Access can be limited to users in a hierarchical manner that allows different users access to different functionality on the platform. 

### Crowdsale 
In the crowdsale folder you can find all the contracts involved in funding new assets, which subsequently create new ERC tokens which represent shares of the asset. The total supply of each asset is determined by the lowest denomination including 18 decimals.

### Database 
The database folder contains all contracts that abstract storage away from the logical 'front-end' contracts. When deploying the database, you can choose to have an upgradeable platform or a non-upgradeable. Write privileges to the database are determined by the contract manager, which is managed by the owner/owners of the platform. 

### Distribution 
The distribution folder is where payments can be sent to be distributed amongst users. The users can setup a distribution agreement between themselves, which allows platforms to send payments to a single address. 

### Ecosystem 
Ecosystem contracts involve adding ID's, functions and other standards that help contracts communicate to other contracts in the ecosystem to allow particular functionality or avoid funds from being sent to the wrong addresses. 

### Escrow 
Escrow contracts are where users can deposit ETH or tokens until a specified contract sends permission to remove the escrow. The escrows can be used as insurance against negligence. 

### Math 
Math contracts are helper libraries for performing arithmetic without worrying about overflows and underflows. 

### Tokens 
Token contracts are used to represent fungible divisible assets. Tokens representing assets can be burnable, mintable, and can receive ETH, which is then distributed to holders according to their holdings. 
