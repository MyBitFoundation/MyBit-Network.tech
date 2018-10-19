---
id: database_Database
title: Database
---

# api\_database\_Database

## contract Database

Source: [database/Database.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/database/Database.sol)

## Index

* [LogInitialized](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#LogInitialized)
* [deleteAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#deleteAddress)
* [deleteBool](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#deleteBool)
* [deleteBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#deleteBytes)
* [deleteBytes32](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#deleteBytes32)
* [deleteInt](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#deleteInt)
* [deleteString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#deleteString)
* [deleteUint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#deleteUint)
* [enableContractManagement](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#enableContractManagement)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html)
* [onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)
* [setAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#setAddress)
* [setBool](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#setBool)
* [setBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#setBytes)
* [setBytes32](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#setBytes32)
* [setInt](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#setInt)
* [setString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#setString)
* [setUint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#setUint)

## Reference

### Events

* **LogInitialized**

  `event` **`LogInitialized`**`(address _owner, bool _upgradeable)`

  Parameters:`_owner` - address`_upgradeable` - bool

### Modifiers

* **onlyApprovedContract**

  `modifier` **`onlyApprovedContract`**`()`

### Functions

* **deleteAddress**

  `function` **`deleteAddress`**`(bytes32 _key) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32

* **deleteBool**

  `function` **`deleteBool`**`(bytes32 _key) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32

* **deleteBytes**

  `function` **`deleteBytes`**`(bytes32 _key) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32

* **deleteBytes32**

  `function` **`deleteBytes32`**`(bytes32 _key) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32

* **deleteInt**

  `function` **`deleteInt`**`(bytes32 _key) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32

* **deleteString**

  `function` **`deleteString`**`(bytes32 _key) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32

* **deleteUint**

  `function` **`deleteUint`**`(bytes32 _key) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32

* **enableContractManagement**

  `function` **`enableContractManagement`**`(address _contractManager) external`

  Parameters:`_contractManager` - address

* **fallback**

  `function (address[] _owners, bool _upgradeable) public`

  Parameters:`_owners` - address\[\]`_upgradeable` - bool

* **setAddress**

  `function` **`setAddress`**`(bytes32 _key, address _value) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32`_value` - address

* **setBool**

  `function` **`setBool`**`(bytes32 _key, bool _value) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32`_value` - bool

* **setBytes**

  `function` **`setBytes`**`(bytes32 _key, bytes _value) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32`_value` - bytes

* **setBytes32**

  `function` **`setBytes32`**`(bytes32 _key, bytes32 _value) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32`_value` - bytes32

* **setInt**

  `function` **`setInt`**`(bytes32 _key, int _value) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32`_value` - int

* **setString**

  `function` **`setString`**`(bytes32 _key, string _value) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32`_value` - string

* **setUint**

  `function` **`setUint`**`(bytes32 _key, uint _value) external`

  Modifiers:[onlyApprovedContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_Database.html#onlyApprovedContract)Parameters:`_key` - bytes32`_value` - uint

