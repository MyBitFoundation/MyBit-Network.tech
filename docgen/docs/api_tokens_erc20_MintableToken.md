---
id: tokens_ERC20_MintableToken
title: MintableToken
---

# api\_tokens\_ERC20\_MintableToken

## contract MintableToken

is [StandardToken](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_StandardToken.html)

Simple ERC20 Token example, with mintable token creation Based on code by TokenMarketNet: https://github.com/TokenMarketNet/ico/blob/master/contracts/MintableToken.sol.Source: [tokens/ERC20/MintableToken.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/tokens/ERC20/MintableToken.sol)

## Index

* [Mint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_MintableToken.html#Mint)
* [MintFinished](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_MintableToken.html#MintFinished)
* [canMint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_MintableToken.html#canMint)
* [finishMinting](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_MintableToken.html#finishMinting)
* [mint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_MintableToken.html#mint)

## Reference

### Events

* **Mint**

  `event` **`Mint`**`(address to, uint256 amount)`

  Parameters:`to` - address`amount` - uint256

* **MintFinished**

  `event` **`MintFinished`**`()`

### Modifiers

* **canMint**

  `modifier` **`canMint`**`()`

### Functions

* **finishMinting**

  `function` **`finishMinting`**`() public returns (bool)`

  Modifiers:[canMint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_MintableToken.html#canMint)Returns:bool

* **mint**

  `function` **`mint`**`(address _to, uint256 _amount) public returns (bool)`

  Modifiers:[canMint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_MintableToken.html#canMint)Parameters:`_to` - address`_amount` - uint256Returns:bool

