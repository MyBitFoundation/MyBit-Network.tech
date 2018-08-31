
# Interfaces
The contracts in the MyBit-SDK are built to be used to create and distribution income from virtual assets represented by ERC tokens. Using contract inheritance the contracts can be combined in different ways to modify the crowdfunding and re-distribution details.

## Contract Categories

### AssetFunding.sol
Provides the functions used to fund assets with Ether or ERC-20 Tokens

### Database.sol
Functions used for getting and setting values in the database contract.

### ERC20.sol
The set of functions used by all ERC-20 tokens.

### PullPayment.sol
Allows contracts to call the withdraw function on another contract
