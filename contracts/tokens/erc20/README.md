# ERC-20

## Contracts

### BurnableToken
The burnable token is a standard ERC-20 that allows the tokes to be burnt by a user or another contract as long as approval has been given. It inherits from StandardToken.

### DividendToken
This token is what we use to represent assets funded by Ether on the MyBit platform. Tokens are minted and distributed during crowdsales. Funds can be sent directly to the contract or via the issueDividends() function. Token holders can withdraw their funds with the withdraw() function. This token inherits from MintableToken.

### DividendTokenERC20
This token is the same as DividendToken, but it distributes ERC-20 tokens instead of Ether. Funds should only be given using the issueDividends() function. However, if tokens are sent directly to this contract, anyone can update the balance by running the checkForTransfers() function.

### MintableToken
A standard token where the total supply starts at 0 and all tokens are created by the mint() function. Inherits from StandardToken.

### StandardToken
The standard token is just a basic implementation of the ERC-20 standard.
