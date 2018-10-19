---
id: access_UserAccess_AccessHierarchy
title: AccessHierarchy
---

# api\_access\_UserAccess\_AccessHierarchy

## contract AccessHierarchy

is [SingleOwned](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwned.html)Source: [access/UserAccess.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/access/UserAccess.sol)

## Index

* [LogKYCApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_UserAccess_AccessHierarchy.html#LogKYCApproved)
* [LogUserApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_UserAccess_AccessHierarchy.html#LogUserApproved)
* [LogUserRemoved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_UserAccess_AccessHierarchy.html#LogUserRemoved)
* [approveKYC](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_UserAccess_AccessHierarchy.html#approveKYC)
* [approveUser](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_UserAccess_AccessHierarchy.html#approveUser)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_UserAccess_AccessHierarchy.html)
* [noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_UserAccess_AccessHierarchy.html#noEmptyAddress)
* [removeUser](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_UserAccess_AccessHierarchy.html#removeUser)

## Reference

### Events

* **LogKYCApproved**

  `event` **`LogKYCApproved`**`(address _owner, address _user)`

  Parameters:`_owner` - address`_user` - address

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

### Functions

* **approveKYC**

  `function` **`approveKYC`**`(address _user) external returns (bool)`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwned.html#onlyOwner)Parameters:`_user` - addressReturns:bool

* **approveUser**

  `function` **`approveUser`**`(address _newUser, uint _accessLevel) external returns (bool)`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwned.html#onlyOwner) [noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_UserAccess_AccessHierarchy.html#noEmptyAddress)Parameters:`_newUser` - address`_accessLevel` - uintReturns:bool

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **removeUser**

  `function` **`removeUser`**`(address _user) external returns (bool)`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwned.html#onlyOwner)Parameters:`_user` - addressReturns:bool

