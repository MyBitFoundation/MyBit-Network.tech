---
id: interfaces_BurnableERC20
title: BurnableERC20
---

# api\_interfaces\_BurnableERC20

## interface BurnableERC20

Source: [interfaces/BurnableERC20.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/interfaces/BurnableERC20.sol)

## Index

* [Approval](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_BurnableERC20.html#Approval)
* [LogBurn](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_BurnableERC20.html#LogBurn)
* [Transfer](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_BurnableERC20.html#Transfer)
* [allowance](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_BurnableERC20.html#allowance)
* [approve](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_BurnableERC20.html#approve)
* [balanceOf](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_BurnableERC20.html#balanceOf)
* [burnFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_BurnableERC20.html#burnFrom)
* [totalSupply](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_BurnableERC20.html#totalSupply)
* [transfer](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_BurnableERC20.html#transfer)
* [transferFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_BurnableERC20.html#transferFrom)

## Reference

### Events

* **Approval**

  `event` **`Approval`**`(address owner, address spender, uint256 value)`

  Parameters:`owner` - address`spender` - address`value` - uint256

* **LogBurn**

  `event` **`LogBurn`**`(address _spender, uint256 _value)`

  Parameters:`_spender` - address`_value` - uint256

* **Transfer**

  `event` **`Transfer`**`(address from, address to, uint256 value)`

  Parameters:`from` - address`to` - address`value` - uint256

### Functions

* **allowance**

  `abstract function` **`allowance`**`(address tokenOwner, address spender) external view returns (uint)`

  Parameters:`tokenOwner` - address`spender` - addressReturns:uint

* **approve**

  `abstract function` **`approve`**`(address _spender, uint256 _value) external returns (bool)`

  Parameters:`_spender` - address`_value` - uint256Returns:bool

* **balanceOf**

  `abstract function` **`balanceOf`**`(address _who) external view returns (uint256)`

  Parameters:`_who` - addressReturns:uint256

* **burnFrom**

  `abstract function` **`burnFrom`**`(address _tokenHolder, uint _amount) external returns (bool)`

  Parameters:`_tokenHolder` - address`_amount` - uintReturns:bool

* **totalSupply**

  `abstract function` **`totalSupply`**`() external view returns (uint256)`

  Returns:uint256

* **transfer**

  `abstract function` **`transfer`**`(address _to, uint256 _value) external returns (bool)`

  Parameters:`_to` - address`_value` - uint256Returns:bool

* **transferFrom**

  `abstract function` **`transferFrom`**`(address _from, address _to, uint256 _value) external returns (bool)`

  Parameters:`_from` - address`_to` - address`_value` - uint256Returns:bool

