# Distribution

## Contracts

### EqualDistribution

This contract allows one to distribute funds evenly to multiple addresses. It's built to interact with the withdraw\(\) functions of other contracts.

### FixedDistribution

Set the tokens that that represent distribution shares and the creation of the contract. Funds send to this contract will be distributed according to that ratio.

### MintableDistribution

Let's the owner mint non-transferable tokens. Funds sent to the contract will be distributed via the minted tokens.

### StandardDistribution

Standard contract that distribute dividends to non-transferable tokens. MintableDistribution and FixedDistribution inherit from this contract.

