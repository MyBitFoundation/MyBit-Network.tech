# MyBit-SDK

:wrench: Block-end developer tools

MyBit SDK allows developers to create personalized platforms which create and distribute income using tokenized assets on the Ethereum virtual machine. Using these tools front-end developers can build decentralized asset management platforms of their own using MyBit deploy scripts and API's.


## Contract Categories

### Access
Access is where user access is managed. Access can be limited to users in a hierarchical manner that allows different users access to different functionality on the platform. Currently, access contracts are not implemented in the platform.

### Crowdsale
In the crowdsale folder you can find all the contracts involved in funding new assets, which subsequently create new ERC tokens which represent shares of the asset. The total supply of each asset is determined by the lowest denomination including 18 decimals.

### Database
The database folder contains all contracts that abstract storage away from the logical 'front-end' contracts. When deploying the database, you can choose to have an upgradeable platform or a non-upgradeable. Write privileges to the database are determined by the contract manager, which is managed by the owner/owners of the platform.

### Ecosystem
The ecosystem folder contains all the non-core contracts that are used for the onboarding of users, and the exchange, burning, and escrow of tokens.

### Interfaces
All interfaces that our contracts use to interact with other deployed contracts.

### Math
Math contracts are helper libraries for performing arithmetic without worrying about overflows and underflows.

### Ownership
Contracts for controlling the platform (such as updating or pausing contracts) by a single account or multiple accounts.

### Test
Contracts that are only used for local testing to ensure full code coverage of the platform contracts.

### Tokens
Token contracts are used to represent fungible divisible assets. Tokens representing assets can be burnable, mintable, and can receive ETH, which is then distributed to holders according to their holdings.
