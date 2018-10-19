---
id: access_AccessHierarchy
title: AccessHierarchy
---

# api\_access\_AccessHierarchy

## contract AccessHierarchy

Source: [access/AccessHierarchy.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/access/AccessHierarchy.sol)

## Index

* [LogUserApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#LogUserApproved)
* [LogUserRemoved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#LogUserRemoved)
* [approveUser](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#approveUser)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html)
* [noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#noEmptyAddress)
* [onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#onlyOwner)
* [onlyPlatform](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#onlyPlatform)
* [removeUser](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#removeUser)
* [setUpperAccessLevel](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#setUpperAccessLevel)

## Reference

### Events

* **LogUserApproved**

  `event` **`LogUserApproved`**`(address _user, uint _approvalLevel)`

  Parameters:`_user` - address`_approvalLevel` - uint

* **LogUserRemoved**

  `event` **`LogUserRemoved`**`(address _user, uint _accessLevel)`

  Parameters:`_user` - address`_accessLevel` - uint

### Modifiers

* **noEmptyAddress**

  `modifier` **`noEmptyAddress`**`(address _param)`

  Parameters:`_param` - address

* **onlyOwner**

  `modifier` **`onlyOwner`**`()`

* **onlyPlatform**

  `modifier` **`onlyPlatform`**`()`

### Functions

* **approveUser**

  `function` **`approveUser`**`(address _newUser, uint _accessLevel) public returns (bool)`

  Modifiers:[onlyPlatform](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#onlyPlatform) [noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#noEmptyAddress)Parameters:`_newUser` - address`_accessLevel` - uintReturns:bool

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **removeUser**

  `function` **`removeUser`**`(address _user) public returns (bool)`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#onlyOwner)Parameters:`_user` - addressReturns:bool

* **setUpperAccessLevel**

  `function` **`setUpperAccessLevel`**`(uint8 _newUpperLimit) public`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#onlyOwner)Parameters:`_newUpperLimit` - uint8

