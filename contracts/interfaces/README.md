
# Interfaces
Contract interfaces set out the basic functionality that other contracts must adhere to.

## Contract Categories

### ApproveAndCallFallback
Lets contracts call the receiveApproval() function of other contracts. Used by ERC-20 tokens.

### BurnableERC20
Interface with a burnable ERC-20 token, such as MyB.

### BurnERC20.sol
Interface that only implements the burning functions of a burnable ERC-20 token.

### DBInterface
Functions used for getting and setting values in the database contract.

### DivToken
Interface with an ERC-20 token that gives out dividend to it's token holders.

### ERC20.sol
Standard ERC-20 interface that is implemented by all ERC-20 tokens.

### ERC20DividendInterface
This interface allows the CrowdsaleERC20 contract to interact with a dividend token that distributes another ERC-20 tokens as its dividend currency.

### EtherDividendInterface
This interface allows the CrowdsaleETH contract to interact with a dividend token that distributes Ether as its dividend currency.

### PullPayment
Allows contracts to call the withdraw function on another contract
