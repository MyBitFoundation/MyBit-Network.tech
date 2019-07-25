# Introduction

:wrench: Block-end developer tools

## Contract Categories

### [Crowdsale](crowdsale)
In the crowdsale folder you can find all the contracts involved in funding new assets. Funds can be received in either Ether or any ERC20 token the operator agrees to accept. Each base unit of the received tokens or Wei represent 1 share of the asset. The total supply of each asset is determined by the amount raised plus the Asset Managers fee.

### [Database](database)
The database folder contains all contracts that abstract storage away from the logical 'front-end' contracts. When deploying the database, you can choose to have an upgradeable platform or a non-upgradeable. Write privileges to the database are determined by the contract manager, which is managed by the owner/owners of the platform.

### [Ecosystem](ecosystem)
The ecosystem folder contains all the non-core contracts that are used for the on-boarding of non-platform assets, asset-exchange, staking, and platform payment and token controls. Before funding assets the platform-token and the platform-wallet need to be set.  

### [Interfaces](interfaces)
All interfaces that our contracts use to interact with other deployed contracts.

### [Math](math)
Math contracts are helper libraries for performing arithmetic without worrying about overflows and underflows.

### [Ownership](ownership)
Contracts for controlling the platform (such as updating or pausing contracts) by a single account, multiple accounts or ERC20 token holders. Investors holding asset-tokens can vote to choose or fire their current Asset Manager here.

### [Roles](roles)
Asset Managers and Operators can control their funding preferences in the roles contracts. Asset Managers fees are held here to prevent them from transferring away the tokens.

### [Test](test)
Contracts that are only used for local testing to ensure full code coverage of the platform contracts.

### [Tokens](tokens)
Token contracts are used to represent fungible divisible assets. Tokens representing assets can be burnable, mintable, governed, and can receive ETH or ERC20 tokens as payment. The payment is distributed to asset-token holders according to their holdings.
