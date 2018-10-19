---
id: alphacontracts_contracts_ContractManager
title: ContractManager
---

# api\_alphacontracts\_contracts\_ContractManager

## contract ContractManager

Source: [alphacontracts/contracts/ContractManager.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/ContractManager.sol)

## Index

* [LogContractAdded](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#LogContractAdded)
* [LogContractRemoved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#LogContractRemoved)
* [LogContractUpdated](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#LogContractUpdated)
* [addContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#addContract)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#anyOwner)
* [contractExists](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#contractExists)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html)
* [multiSigRequired](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#multiSigRequired)
* [noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#noEmptyAddress)
* [noEmptyString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#noEmptyString)
* [removeContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#removeContract)
* [updateContract](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#updateContract)

## Reference

### Events

* **LogContractAdded**

  `event` **`LogContractAdded`**`(address _contractAddress, string _name)`

  Parameters:`_contractAddress` - address`_name` - string

* **LogContractRemoved**

  `event` **`LogContractRemoved`**`(address _contractToDelete, string _name)`

  Parameters:`_contractToDelete` - address`_name` - string

* **LogContractUpdated**

  `event` **`LogContractUpdated`**`(address _oldAddress, address _newAddress, string _name)`

  Parameters:`_oldAddress` - address`_newAddress` - address`_name` - string

### Modifiers

* **anyOwner**

  `modifier` **`anyOwner`**`()`

* **multiSigRequired**

  `modifier` **`multiSigRequired`**`(address _signer, string _functionName, bytes32 _keyParam)`

  Parameters:`_signer` - address`_functionName` - string`_keyParam` - bytes32

* **noEmptyAddress**

  `modifier` **`noEmptyAddress`**`(address _contract)`

  Parameters:`_contract` - address

* **noEmptyString**

  `modifier` **`noEmptyString`**`(string _name)`

  Parameters:`_name` - string

### Functions

* **addContract**

  `function` **`addContract`**`(string _name, address _contractAddress, address _functionSigner) external`

  Modifiers:[noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#noEmptyAddress) [noEmptyString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#noEmptyString) [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#anyOwner)Parameters:`_name` - string`_contractAddress` - address`_functionSigner` - address

* **contractExists**

  `function` **`contractExists`**`(address _contract) public view returns (bool)`

  Parameters:`_contract` - addressReturns:bool

* **fallback**

  `function (address _database) public`

  Modifiers:[noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#noEmptyAddress)Parameters:`_database` - address

* **removeContract**

  `function` **`removeContract`**`(string _name, address _functionSigner) external`

  Modifiers:[noEmptyString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#noEmptyString) [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#anyOwner)Parameters:`_name` - string`_functionSigner` - address

* **updateContract**

  `function` **`updateContract`**`(string _name, address _newContractAddress, address _functionSigner) external`

  Modifiers:[noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#noEmptyAddress) [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_ContractManager.html#anyOwner)Parameters:`_name` - string`_newContractAddress` - address`_functionSigner` - address

