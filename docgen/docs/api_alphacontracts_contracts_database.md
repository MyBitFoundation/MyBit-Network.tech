---
id: alphacontracts_contracts_Database
title: Database
---

# api\_alphacontracts\_contracts\_Database

## contract Database

Source: [alphacontracts/contracts/Database.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/Database.sol)

## Index

* [LogContractManager](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#LogContractManager)
* [LogInitialized](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#LogInitialized)
* [deleteAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#deleteAddress)
* [deleteBool](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#deleteBool)
* [deleteBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#deleteBytes)
* [deleteBytes32](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#deleteBytes32)
* [deleteInt](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#deleteInt)
* [deleteString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#deleteString)
* [deleteUint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#deleteUint)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html)
* [onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)
* [setAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#setAddress)
* [setBool](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#setBool)
* [setBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#setBytes)
* [setBytes32](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#setBytes32)
* [setContractManager](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#setContractManager)
* [setInt](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#setInt)
* [setString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#setString)
* [setUint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#setUint)

## Reference

### Events

* **LogContractManager**

  `event` **`LogContractManager`**`(address _contractManager, address _initiator)`

  Parameters:`_contractManager` - address`_initiator` - address

* **LogInitialized**

  `event` **`LogInitialized`**`(address _ownerOne, address _ownerTwo, address _ownerThree)`

  Parameters:`_ownerOne` - address`_ownerTwo` - address`_ownerThree` - address

### Modifiers

* **onlyMyBitContract**

  `modifier` **`onlyMyBitContract`**`()`

### Functions

* **deleteAddress**

  `function` **`deleteAddress`**`(bytes32 _key) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32

* **deleteBool**

  `function` **`deleteBool`**`(bytes32 _key) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32

* **deleteBytes**

  `function` **`deleteBytes`**`(bytes32 _key) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32

* **deleteBytes32**

  `function` **`deleteBytes32`**`(bytes32 _key) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32

* **deleteInt**

  `function` **`deleteInt`**`(bytes32 _key) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32

* **deleteString**

  `function` **`deleteString`**`(bytes32 _key) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32

* **deleteUint**

  `function` **`deleteUint`**`(bytes32 _key) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32

* **fallback**

  `function (address _ownerOne, address _ownerTwo, address _ownerThree) public`

  Parameters:`_ownerOne` - address`_ownerTwo` - address`_ownerThree` - address

* **setAddress**

  `function` **`setAddress`**`(bytes32 _key, address _value) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32`_value` - address

* **setBool**

  `function` **`setBool`**`(bytes32 _key, bool _value) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32`_value` - bool

* **setBytes**

  `function` **`setBytes`**`(bytes32 _key, bytes _value) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32`_value` - bytes

* **setBytes32**

  `function` **`setBytes32`**`(bytes32 _key, bytes32 _value) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32`_value` - bytes32

* **setContractManager**

  `function` **`setContractManager`**`(address _contractManager) external`

  Parameters:`_contractManager` - address

* **setInt**

  `function` **`setInt`**`(bytes32 _key, int _value) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32`_value` - int

* **setString**

  `function` **`setString`**`(bytes32 _key, string _value) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32`_value` - string

* **setUint**

  `function` **`setUint`**`(bytes32 _key, uint _value) external`

  Modifiers:[onlyMyBitContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Database.html#onlyMyBitContract)Parameters:`_key` - bytes32`_value` - uint

