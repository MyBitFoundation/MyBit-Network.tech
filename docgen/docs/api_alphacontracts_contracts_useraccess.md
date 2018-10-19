---
id: alphacontracts_contracts_UserAccess
title: UserAccess
---

# api\_alphacontracts\_contracts\_UserAccess

## contract UserAccess

Source: [alphacontracts/contracts/UserAccess.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/UserAccess.sol)

## Index

* [LogKYCApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_UserAccess.html#LogKYCApproved)
* [LogUserApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_UserAccess.html#LogUserApproved)
* [LogUserRemoved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_UserAccess.html#LogUserRemoved)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_UserAccess.html#anyOwner)
* [approveKYC](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_UserAccess.html#approveKYC)
* [approveUser](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_UserAccess.html#approveUser)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_UserAccess.html)
* [noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_UserAccess.html#noEmptyAddress)
* [removeUser](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_UserAccess.html#removeUser)

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

* **anyOwner**

  `modifier` **`anyOwner`**`()`

* **noEmptyAddress**

  `modifier` **`noEmptyAddress`**`(address _param)`

  Parameters:`_param` - address

### Functions

* **approveKYC**

  `function` **`approveKYC`**`(address _user) external returns (bool)`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_UserAccess.html#anyOwner)Parameters:`_user` - addressReturns:bool

* **approveUser**

  `function` **`approveUser`**`(address _newUser, uint _accessLevel) external returns (bool)`

  Modifiers:[noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_UserAccess.html#noEmptyAddress)Parameters:`_newUser` - address`_accessLevel` - uintReturns:bool

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **removeUser**

  `function` **`removeUser`**`(address _user) external returns (bool)`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_UserAccess.html#anyOwner)Parameters:`_user` - addressReturns:bool

