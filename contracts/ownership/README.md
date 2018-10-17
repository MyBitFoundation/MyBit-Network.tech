
# Ownership
Contracts that control the ownership of all the contracts on the platform. This restricts access to the upgrading of contracts and which contracts have access to the database.

## Contract Categories

### CollectiveOwned
A multi-sig contract that gives access to core functions with a majority approval of owners.

### Pausible
Lets the owner pause any contract in the ecosystem.

### SingleOwned
Lets the owner transfer ownership to another address.

### TokenGovernance
Consensus based ownership. Token holders must agree on parameters, address, and methodID of a function at some contract.

## AssetGovernance
Investors can vote on whether or not to change/fire the current AssetManager here. Voting power is determined by how many tokens the investor wishes to lock into a particular vote. Each vote is made up of a function call at a particular address, inputting particular parameters. Investors must come to a consensus on 1.) who the new AssetManager is going to be, 2.) how much the new AssetManager needs to escrow and 3.) whether they should burn the previous AssetManagers tokens.
