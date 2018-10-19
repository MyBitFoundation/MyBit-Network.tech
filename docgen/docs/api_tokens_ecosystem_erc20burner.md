---
id: tokens_ecosystem_ERC20Burner
title: ERC20Burner
---

# api\_tokens\_ecosystem\_ERC20Burner

## contract ERC20Burner

This contract does not accept tokens. It only burns tokens from users wallets when approved to do so, Allows Dapps to call this contract to burn ERC20 tokens as a usage fee.Source: [tokens/ecosystem/ERC20Burner.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/tokens/ecosystem/ERC20Burner.sol)Author: Kyle Dewhurst, MyBit Foundation

## Index

* [LogBurnerAuthorized](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html#LogBurnerAuthorized)
* [LogBurnerRemoved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html#LogBurnerRemoved)
* [LogMYBBurned](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html#LogMYBBurned)
* [authorizeBurner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html#authorizeBurner)
* [burn](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html#burn)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html)
* [onlyAuthorizedBurner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html#onlyAuthorizedBurner)
* [onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html#onlyOwner)
* [removeBurner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html#removeBurner)

## Reference

### Events

* **LogBurnerAuthorized**

  `event` **`LogBurnerAuthorized`**`(address _owner, address _burningContract)`

  Parameters:`_owner` - address`_burningContract` - address

* **LogBurnerRemoved**

  `event` **`LogBurnerRemoved`**`(address _owner, address _burningContract)`

  Parameters:`_owner` - address`_burningContract` - address

* **LogMYBBurned**

  `event` **`LogMYBBurned`**`(address _tokenHolder, address _burningContract, uint _amount)`

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////.Parameters:`_tokenHolder` - address`_burningContract` - address`_amount` - uint

### Modifiers

* **onlyAuthorizedBurner**

  `modifier` **`onlyAuthorizedBurner`**`(address _burner)`

  Parameters:`_burner` - address

* **onlyOwner**

  `modifier` **`onlyOwner`**`()`

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////.

### Functions

* **authorizeBurner**

  `function` **`authorizeBurner`**`(address _burningContract) external returns (bool)`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html#onlyOwner)Parameters:`_burningContract` - addressReturns:bool

* **burn**

  `function` **`burn`**`(address _tokenHolder, uint _amount) external returns (bool)`

  Modifiers:[onlyAuthorizedBurner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html#onlyAuthorizedBurner)Parameters:`_tokenHolder` - address`_amount` - uintReturns:bool

* **fallback**

  `function (address _myBitTokenAddress) public`

  Parameters:`_myBitTokenAddress` - address

* **fallback**

  `function () external payable`

* **removeBurner**

  `function` **`removeBurner`**`(address _burningContract) external returns (bool)`

  Modifiers:[onlyAuthorizedBurner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html#onlyAuthorizedBurner) [onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_ERC20Burner.html#onlyOwner)Parameters:`_burningContract` - addressReturns:bool

