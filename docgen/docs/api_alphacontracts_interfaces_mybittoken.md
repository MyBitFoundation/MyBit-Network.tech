---
id: alphacontracts_interfaces_MyBitToken
title: MyBitToken
---

# api\_alphacontracts\_interfaces\_MyBitToken

## interface MyBitToken

Source: [alphacontracts/interfaces/MyBitToken.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/interfaces/MyBitToken.sol)

## Index

* [allowance](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_MyBitToken.html#allowance)
* [approve](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_MyBitToken.html#approve)
* [balanceOf](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_MyBitToken.html#balanceOf)
* [burn](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_MyBitToken.html#burn)
* [burnFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_MyBitToken.html#burnFrom)
* [totalSupply](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_MyBitToken.html#totalSupply)
* [transfer](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_MyBitToken.html#transfer)
* [transferFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_MyBitToken.html#transferFrom)

## Reference

### Functions

* **allowance**

  `abstract function` **`allowance`**`(address _owner, address _spender) external returns (uint)`

  Parameters:`_owner` - address`_spender` - addressReturns:uint

* **approve**

  `abstract function` **`approve`**`(address _spender, uint _value) external returns (bool)`

  Parameters:`_spender` - address`_value` - uintReturns:bool

* **balanceOf**

  `abstract function` **`balanceOf`**`(address _owner) external returns (uint)`

  Parameters:`_owner` - addressReturns:uint

* **burn**

  `abstract function` **`burn`**`(uint _amount) external returns (bool)`

  Parameters:`_amount` - uintReturns:bool

* **burnFrom**

  `abstract function` **`burnFrom`**`(address _from, uint _amount) external returns (bool)`

  Parameters:`_from` - address`_amount` - uintReturns:bool

* **totalSupply**

  `abstract function` **`totalSupply`**`() external returns (uint)`

  Returns:uint

* **transfer**

  `abstract function` **`transfer`**`(address _to, uint _value) external returns (bool)`

  Parameters:`_to` - address`_value` - uintReturns:bool

* **transferFrom**

  `abstract function` **`transferFrom`**`(address _from, address _to, uint _value) external returns (bool)`

  Parameters:`_from` - address`_to` - address`_value` - uintReturns:bool

