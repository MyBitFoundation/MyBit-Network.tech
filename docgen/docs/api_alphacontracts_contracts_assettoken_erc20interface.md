---
id: alphacontracts_contracts_AssetToken_ERC20Interface
title: ERC20Interface
---

# api\_alphacontracts\_contracts\_AssetToken\_ERC20Interface

## contract ERC20Interface

Source: [alphacontracts/contracts/AssetToken.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/AssetToken.sol)

## Index

* [Approval](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken_ERC20Interface.html#Approval)
* [Transfer](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken_ERC20Interface.html#Transfer)
* [allowance](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken_ERC20Interface.html#allowance)
* [approve](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken_ERC20Interface.html#approve)
* [balanceOf](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken_ERC20Interface.html#balanceOf)
* [totalSupply](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken_ERC20Interface.html#totalSupply)
* [transfer](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken_ERC20Interface.html#transfer)
* [transferFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken_ERC20Interface.html#transferFrom)

## Reference

### Events

* **Approval**

  `event` **`Approval`**`(address tokenOwner, address spender, uint tokens)`

  Parameters:`tokenOwner` - address`spender` - address`tokens` - uint

* **Transfer**

  `event` **`Transfer`**`(address from, address to, uint tokens)`

  Parameters:`from` - address`to` - address`tokens` - uint

### Functions

* **allowance**

  `abstract function` **`allowance`**`(address tokenOwner, address spender) public view returns (uint)`

  Parameters:`tokenOwner` - address`spender` - addressReturns:uint

* **approve**

  `abstract function` **`approve`**`(address spender, uint tokens) public returns (bool)`

  Parameters:`spender` - address`tokens` - uintReturns:bool

* **balanceOf**

  `abstract function` **`balanceOf`**`(address tokenOwner) public view returns (uint)`

  Parameters:`tokenOwner` - addressReturns:uint

* **totalSupply**

  `abstract function` **`totalSupply`**`() public view returns (uint)`

  Returns:uint

* **transfer**

  `abstract function` **`transfer`**`(address to, uint tokens) public returns (bool)`

  Parameters:`to` - address`tokens` - uintReturns:bool

* **transferFrom**

  `abstract function` **`transferFrom`**`(address from, address to, uint tokens) public returns (bool)`

  Parameters:`from` - address`to` - address`tokens` - uintReturns:bool

