# MyBit-SDK 

:wrench: Block-end developer tools

MyBit SDK allows developers to create personalized platforms which create and distribute income using tokenized assets on the Ethereum virtual machine. Using these tools front-end developers can build decentralized asset management platforms of their own using MyBit deploy scripts and API's. 


## Contract Categories

### Access 
Access is where user access is managed. Access can be limited to users in a hierarchical manner that allows different users access to different functionality on the platform. 

### Crowdsale 
In the crowdsale folder you can find all the contracts involved in funding new assets, which subsequently create new ERC tokens which represent shares of the asset. The total supply of each asset is determined by the lowest denomination including 18 decimals.

### Database 
The database folder contains all contracts that abstract storage away from the logical 'front-end' contracts. When deploying the database, you can choose to have an upgradeable platform or a non-upgradeable. Write privileges to the database are determined by the contract manager, which is managed by the owner/owners of the platform. 

### Distribution 
The distribution folder is where payments can be sent to be distributed amongst users. The users can setup a distribution agreement between themselves, which allows platforms to send payments to a single address. 

### Escrow 
Escrow contracts are where users can deposit ETH or tokens until a specified contract sends permission to remove the escrow. The escrows can be used as insurance against negligence. 

### Math 
Math contracts are helper libraries for performing arithmetic without worrying about overflows and underflows. 

### Tokens 
Token contracts are used to represent fungible divisible assets. Tokens representing assets can be burnable, mintable, and can receive ETH, which is then distributed to holders according to their holdings. 
