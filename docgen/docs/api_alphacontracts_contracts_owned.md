---
id: alphacontracts_contracts_Owned
title: Owned
---

# api\_alphacontracts\_contracts\_Owned

## contract Owned

Source: [alphacontracts/contracts/Owned.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/Owned.sol)

## Index

* [LogFunctionAuthorized](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#LogFunctionAuthorized)
* [LogOwnerChanged](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#LogOwnerChanged)
* [LogPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#LogPaused)
* [LogUnpaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#LogUnpaused)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#anyOwner)
* [changeOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#changeOwner)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html)
* [noZeroAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#noZeroAddress)
* [pause](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#pause)
* [setFunctionAuthorized](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#setFunctionAuthorized)
* [unpause](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#unpause)

## Reference

### Events

* **LogFunctionAuthorized**

  `event` **`LogFunctionAuthorized`**`(address _owner, string _functionName, bytes32 _beneficiary, bytes32 _authHash)`

  Parameters:`_owner` - address`_functionName` - string`_beneficiary` - bytes32`_authHash` - bytes32

* **LogOwnerChanged**

  `event` **`LogOwnerChanged`**`(address _previousOwner, address _newOwner)`

  Parameters:`_previousOwner` - address`_newOwner` - address

* **LogPaused**

  `event` **`LogPaused`**`(address _contract)`

  Parameters:`_contract` - address

* **LogUnpaused**

  `event` **`LogUnpaused`**`(address _contract)`

  Parameters:`_contract` - address

### Modifiers

* **anyOwner**

  `modifier` **`anyOwner`**`()`

* **noZeroAddress**

  `modifier` **`noZeroAddress`**`(address _param)`

  Parameters:`_param` - address

### Functions

* **changeOwner**

  `function` **`changeOwner`**`(address _newOwner, address _oldOwner, address _functionSigner) external`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#anyOwner) [noZeroAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#noZeroAddress) [noZeroAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#noZeroAddress)Parameters:`_newOwner` - address`_oldOwner` - address`_functionSigner` - address

* **fallback**

  `function (address _database) public`

  Modifiers:[noZeroAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#noZeroAddress)Parameters:`_database` - address

* **pause**

  `function` **`pause`**`(address _contract) public`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#anyOwner) [noZeroAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#noZeroAddress)Parameters:`_contract` - address

* **setFunctionAuthorized**

  `function` **`setFunctionAuthorized`**`(address _contractAddress, string _functionName, bytes32 _beneficiary) external returns (bool)`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#anyOwner)Parameters:`_contractAddress` - address`_functionName` - string`_beneficiary` - bytes32Returns:bool

* **unpause**

  `function` **`unpause`**`(address _contract) public`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Owned.html#anyOwner)Parameters:`_contract` - address

