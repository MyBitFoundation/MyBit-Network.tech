---
id: tokens_ERC20_StandardToken
title: StandardToken
---

# api\_tokens\_ERC20\_StandardToken

## contract StandardToken

is [ERC20](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_ERC20.html)Source: [tokens/ERC20/StandardToken.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/tokens/ERC20/StandardToken.sol)

## Index

* [allowance](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_StandardToken.html#allowance)
* [approve](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_StandardToken.html#approve)
* [balanceOf](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_StandardToken.html#balanceOf)
* [decreaseApproval](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_StandardToken.html#decreaseApproval)
* [increaseApproval](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_StandardToken.html#increaseApproval)
* [totalSupply](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_StandardToken.html#totalSupply)
* [transfer](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_StandardToken.html#transfer)
* [transferFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_StandardToken.html#transferFrom)

## Reference

### Functions

* **allowance**

  `function` **`allowance`**`(address _owner, address _spender) public view returns (uint256)`

  Function to check the amount of tokens that an owner allowed to a spender.Parameters:`_owner` - address The address which owns the funds.`_spender` - address The address which will spend the funds.Returns:A uint256 specifying the amount of tokens still available for the spender.

* **approve**

  `function` **`approve`**`(address _spender, uint256 _value) public returns (bool)`

  Approve the passed address to spend the specified amount of tokens on behalf of msg.sender. Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20\#issuecomment-263524729.Parameters:`_spender` - The address which will spend the funds.`_value` - The amount of tokens to be spent.Returns:bool

* **balanceOf**

  `function` **`balanceOf`**`(address _owner) public view returns (uint256)`

  Gets the balance of the specified address.Parameters:`_owner` - The address to query the the balance of.Returns:An uint256 representing the amount owned by the passed address.

* **decreaseApproval**

  `function` **`decreaseApproval`**`(address _spender, uint256 _subtractedValue) public returns (bool)`

  Decrease the amount of tokens that an owner allowed to a spender. approve should be called when allowed\[\_spender\] == 0. To decrement allowed value is better to use this function to avoid 2 calls \(and wait until the first transaction is mined\) From MonolithDAO Token.sol.Parameters:`_spender` - The address which will spend the funds.`_subtractedValue` - The amount of tokens to decrease the allowance by.Returns:bool

* **increaseApproval**

  `function` **`increaseApproval`**`(address _spender, uint256 _addedValue) public returns (bool)`

  Increase the amount of tokens that an owner allowed to a spender. approve should be called when allowed\[\_spender\] == 0. To increment allowed value is better to use this function to avoid 2 calls \(and wait until the first transaction is mined\) From MonolithDAO Token.sol.Parameters:`_spender` - The address which will spend the funds.`_addedValue` - The amount of tokens to increase the allowance by.Returns:bool

* **totalSupply**

  `function` **`totalSupply`**`() public view returns (uint256)`

  Total number of tokens in existence.Returns:uint256

* **transfer**

  `function` **`transfer`**`(address _to, uint256 _value) public returns (bool)`

  Transfer token for a specified address.Parameters:`_to` - The address to transfer to.`_value` - The amount to be transferred.Returns:bool

* **transferFrom**

  `function` **`transferFrom`**`(address _from, address _to, uint256 _value) public returns (bool)`

  Transfer tokens from one address to another.Parameters:`_from` - address The address which you want to send tokens from`_to` - address The address which you want to transfer to`_value` - uint256 the amount of tokens to be transferredReturns:bool

