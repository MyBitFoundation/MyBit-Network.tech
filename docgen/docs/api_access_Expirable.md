---
id: access_Expirable
title: Expirable
---

# api\_access\_Expirable

## contract Expirable

is [AccessHierarchy](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html)Source: [access/Expirable.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/access/Expirable.sol)

## Index

* [LogExpirationLengthChanged](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_Expirable.html#LogExpirationLengthChanged)
* [approveTemporaryUser](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_Expirable.html#approveTemporaryUser)
* [changeExpirationLength](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_Expirable.html#changeExpirationLength)
* [removeTemporaryUser](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_Expirable.html#removeTemporaryUser)

## Reference

### Events

* **LogExpirationLengthChanged**

  `event` **`LogExpirationLengthChanged`**`(uint _oldExpirationLength, uint _newExpirationLength)`

  Parameters:`_oldExpirationLength` - uint`_newExpirationLength` - uint

### Functions

* **approveTemporaryUser**

  `function` **`approveTemporaryUser`**`(address _newUser, uint _accessLevel) public returns (bool)`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#onlyOwner) [noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#noEmptyAddress)Parameters:`_newUser` - address`_accessLevel` - uintReturns:bool

* **changeExpirationLength**

  `function` **`changeExpirationLength`**`(uint _newExpirationLength) external`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#onlyOwner)Parameters:`_newExpirationLength` - uint

* **removeTemporaryUser**

  `function` **`removeTemporaryUser`**`(address _user) public returns (bool)`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#onlyOwner)Parameters:`_user` - addressReturns:bool

