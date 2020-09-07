---
id: interfaces_ERC20
title: ERC20
---

# api\_interfaces\_ERC20

## contract ERC20

See https://github.com/ethereum/EIPs/issues/20.Source: [interfaces/ERC20.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/interfaces/ERC20.sol)

## Index

* [Approval](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_ERC20.html#Approval)
* [Transfer](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_ERC20.html#Transfer)
* [allowance](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_ERC20.html#allowance)
* [approve](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_ERC20.html#approve)
* [balanceOf](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_ERC20.html#balanceOf)
* [totalSupply](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_ERC20.html#totalSupply)
* [transfer](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_ERC20.html#transfer)
* [transferFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_ERC20.html#transferFrom)

## Reference

### Events

* **Approval**

  `event` **`Approval`**`(address owner, address spender, uint256 value)`

  Parameters:`owner` - address`spender` - address`value` - uint256

* **Transfer**

  `event` **`Transfer`**`(address from, address to, uint256 value)`

  Parameters:`from` - address`to` - address`value` - uint256

### Functions

* **allowance**

  `abstract function` **`allowance`**`(address _owner, address _spender) public view returns (uint256)`

  Parameters:`_owner` - address`_spender` - addressReturns:uint256

* **approve**

  `abstract function` **`approve`**`(address _spender, uint256 _value) public returns (bool)`

  Parameters:`_spender` - address`_value` - uint256Returns:bool

* **balanceOf**

  `abstract function` **`balanceOf`**`(address _who) public view returns (uint256)`

  Parameters:`_who` - addressReturns:uint256

* **totalSupply**

  `abstract function` **`totalSupply`**`() public view returns (uint256)`

  Returns:uint256

* **transfer**

  `abstract function` **`transfer`**`(address _to, uint256 _value) public returns (bool)`

  Parameters:`_to` - address`_value` - uint256Returns:bool

* **transferFrom**

  `abstract function` **`transferFrom`**`(address _from, address _to, uint256 _value) public returns (bool)`

  Parameters:`_from` - address`_to` - address`_value` - uint256Returns:bool

