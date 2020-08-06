---
id: database_ContractManager
title: ContractManager
---

# api\_database\_ContractManager

## contract ContractManager

Source: [database/ContractManager.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/database/ContractManager.sol)

## Index

* [LogContractAdded](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#LogContractAdded)
* [LogContractRemoved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#LogContractRemoved)
* [LogContractUpdated](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#LogContractUpdated)
* [LogNewContractLocation](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#LogNewContractLocation)
* [addContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#addContract)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#anyOwner)
* [contractExists](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#contractExists)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html)
* [noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#noEmptyAddress)
* [noEmptyString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#noEmptyString)
* [removeContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#removeContract)
* [updateContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#updateContract)

## Reference

### Events

* **LogContractAdded**

  `event` **`LogContractAdded`**`(address _contractAddress, string _name, uint _blockNumber)`

  Parameters:`_contractAddress` - address`_name` - string`_blockNumber` - uint

* **LogContractRemoved**

  `event` **`LogContractRemoved`**`(address contractToDelete, string _name, uint _blockNumber)`

  Parameters:`contractToDelete` - address`_name` - string`_blockNumber` - uint

* **LogContractUpdated**

  `event` **`LogContractUpdated`**`(address oldAddress, string _name, uint _blockNumber)`

  Parameters:`oldAddress` - address`_name` - string`_blockNumber` - uint

* **LogNewContractLocation**

  `event` **`LogNewContractLocation`**`(address _contractAddress, string _name, uint _blockNumber)`

  Parameters:`_contractAddress` - address`_name` - string`_blockNumber` - uint

### Modifiers

* **anyOwner**

  `modifier` **`anyOwner`**`()`

* **noEmptyAddress**

  `modifier` **`noEmptyAddress`**`(address _contract)`

  Parameters:`_contract` - address

* **noEmptyString**

  `modifier` **`noEmptyString`**`(string _name)`

  Parameters:`_name` - string

### Functions

* **addContract**

  `function` **`addContract`**`(string _name, address _contractAddress) external`

  Modifiers:[noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#noEmptyAddress) [noEmptyString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#noEmptyString) [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#anyOwner)Parameters:`_name` - string`_contractAddress` - address

* **contractExists**

  `function` **`contractExists`**`(address _contract) public view returns (bool)`

  Parameters:`_contract` - addressReturns:bool

* **fallback**

  `function (address _database) public`

  Modifiers:[noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#noEmptyAddress)Parameters:`_database` - address

* **removeContract**

  `function` **`removeContract`**`(string _name) external`

  Modifiers:[noEmptyString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#noEmptyString) [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#anyOwner)Parameters:`_name` - string

* **updateContract**

  `function` **`updateContract`**`(string _name, address _newContractAddress) external`

  Modifiers:[noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#noEmptyAddress) [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/database_ContractManager.html#anyOwner)Parameters:`_name` - string`_newContractAddress` - address

