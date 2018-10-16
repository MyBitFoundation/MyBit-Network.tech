#Ecosystem

## Contracts

### AssetExchange
Buy and sell assets that have been funded using the crowdsale contracts.

### ERC20Burner
To use certain functions of the platform, one must burn the platform tokens (such as MYB in the case of MYBit Go). The user only needs to approve this contract to burn their tokens. Other contracts can then call this contract if they need to burn tokens to access functionality.

### PlatformFunds
PlatformFunds lets the platform owners set the platform token and platform wallet where the owner(s) receives their share of the crowdsale income.

### Staking
Staking allows an assetManager to borrow MYB to be put up as escrow. This functionality hasn't been implemented yet.
