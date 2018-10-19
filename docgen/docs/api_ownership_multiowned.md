---
id: ownership_MultiOwned
title: MultiOwned
---

# api\_ownership\_MultiOwned

## contract MultiOwned

Source: [ownership/MultiOwned.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/ownership/MultiOwned.sol)

## Index

* [LogFunctionAuthorized](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#LogFunctionAuthorized)
* [LogOwnerChanged](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#LogOwnerChanged)
* [addOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#addOwner)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#anyOwner)
* [callAuthorizedFunction](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#callAuthorizedFunction)
* [noZeroAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#noZeroAddress)
* [removeOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#removeOwner)
* [signForFunctionCall](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#signForFunctionCall)

## Reference

### Events

* **LogFunctionAuthorized**

  `event` **`LogFunctionAuthorized`**`(address _owner, string _functionName, bytes32 _beneficiary, bytes32 _authHash)`

  Parameters:`_owner` - address`_functionName` - string`_beneficiary` - bytes32`_authHash` - bytes32

* **LogOwnerChanged**

  `event` **`LogOwnerChanged`**`(address _previousOwner, address _newOwner)`

  Parameters:`_previousOwner` - address`_newOwner` - address

### Modifiers

* **anyOwner**

  `modifier` **`anyOwner`**`()`

* **noZeroAddress**

  `modifier` **`noZeroAddress`**`(address _param)`

  Parameters:`_param` - address

### Functions

* **addOwner**

  `function` **`addOwner`**`(address _newOwner) external`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#anyOwner)Parameters:`_newOwner` - address

* **callAuthorizedFunction**

  `function` **`callAuthorizedFunction`**`(bytes4 _methodID) external`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#anyOwner)Parameters:`_methodID` - bytes4

* **removeOwner**

  `function` **`removeOwner`**`() external`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#anyOwner)

* **signForFunctionCall**

  `function` **`signForFunctionCall`**`(bytes4 _methodID) external`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#anyOwner)Parameters:`_methodID` - bytes4

