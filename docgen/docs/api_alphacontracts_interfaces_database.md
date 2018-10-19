---
id: alphacontracts_interfaces_Database
title: Database
---

# api\_alphacontracts\_interfaces\_Database

## interface Database

Source: [alphacontracts/interfaces/Database.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/interfaces/Database.sol)

## Index

* [addressStorage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#addressStorage)
* [boolStorage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#boolStorage)
* [bytes32Storage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#bytes32Storage)
* [bytesStorage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#bytesStorage)
* [deleteAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#deleteAddress)
* [deleteBool](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#deleteBool)
* [deleteBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#deleteBytes)
* [deleteBytes32](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#deleteBytes32)
* [deleteInt](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#deleteInt)
* [deleteString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#deleteString)
* [deleteUint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#deleteUint)
* [intStorage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#intStorage)
* [setAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#setAddress)
* [setBool](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#setBool)
* [setBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#setBytes)
* [setBytes32](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#setBytes32)
* [setContractManager](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#setContractManager)
* [setInt](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#setInt)
* [setString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#setString)
* [setUint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#setUint)
* [stringStorage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#stringStorage)
* [uintStorage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_Database.html#uintStorage)

## Reference

### Functions

* **addressStorage**

  `abstract function` **`addressStorage`**`(bytes32 _key) external returns (address)`

  Parameters:`_key` - bytes32Returns:address

* **boolStorage**

  `abstract function` **`boolStorage`**`(bytes32 _key) external returns (bool)`

  Parameters:`_key` - bytes32Returns:bool

* **bytes32Storage**

  `abstract function` **`bytes32Storage`**`(bytes32 _key) external returns (bytes32)`

  Parameters:`_key` - bytes32Returns:bytes32

* **bytesStorage**

  `abstract function` **`bytesStorage`**`(bytes32 _key) external returns (bytes)`

  Parameters:`_key` - bytes32Returns:bytes

* **deleteAddress**

  `abstract function` **`deleteAddress`**`(bytes32 _key) external`

  Parameters:`_key` - bytes32

* **deleteBool**

  `abstract function` **`deleteBool`**`(bytes32 _key) external`

  Parameters:`_key` - bytes32

* **deleteBytes**

  `abstract function` **`deleteBytes`**`(bytes32 _key) external`

  Parameters:`_key` - bytes32

* **deleteBytes32**

  `abstract function` **`deleteBytes32`**`(bytes32 _key) external`

  Parameters:`_key` - bytes32

* **deleteInt**

  `abstract function` **`deleteInt`**`(bytes32 _key) external`

  Parameters:`_key` - bytes32

* **deleteString**

  `abstract function` **`deleteString`**`(bytes32 _key) external`

  Parameters:`_key` - bytes32

* **deleteUint**

  `abstract function` **`deleteUint`**`(bytes32 _key) external`

  Parameters:`_key` - bytes32

* **intStorage**

  `abstract function` **`intStorage`**`(bytes32 _key) external returns (bool)`

  Parameters:`_key` - bytes32Returns:bool

* **setAddress**

  `abstract function` **`setAddress`**`(bytes32 _key, address _value) external`

  Parameters:`_key` - bytes32`_value` - address

* **setBool**

  `abstract function` **`setBool`**`(bytes32 _key, bool _value) external`

  Parameters:`_key` - bytes32`_value` - bool

* **setBytes**

  `abstract function` **`setBytes`**`(bytes32 _key, bytes _value) external`

  Parameters:`_key` - bytes32`_value` - bytes

* **setBytes32**

  `abstract function` **`setBytes32`**`(bytes32 _key, bytes32 _value) external`

  Parameters:`_key` - bytes32`_value` - bytes32

* **setContractManager**

  `abstract function` **`setContractManager`**`(address _contractManager) external`

  Parameters:`_contractManager` - address

* **setInt**

  `abstract function` **`setInt`**`(bytes32 _key, int _value) external`

  Parameters:`_key` - bytes32`_value` - int

* **setString**

  `abstract function` **`setString`**`(bytes32 _key, string _value) external`

  Parameters:`_key` - bytes32`_value` - string

* **setUint**

  `abstract function` **`setUint`**`(bytes32 _key, uint _value) external`

  Parameters:`_key` - bytes32`_value` - uint

* **stringStorage**

  `abstract function` **`stringStorage`**`(bytes32 _key) external returns (string)`

  Parameters:`_key` - bytes32Returns:string

* **uintStorage**

  `abstract function` **`uintStorage`**`(bytes32 _key) external returns (uint)`

  Parameters:`_key` - bytes32Returns:uint

