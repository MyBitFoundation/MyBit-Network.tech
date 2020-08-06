---
id: access_KYC
title: KYC
---

# api\_access\_KYC

## contract KYC

is [AccessHierarchy](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html)Source: [access/KYC.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/access/KYC.sol)

## Index

* [LogKYCApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_KYC.html#LogKYCApproved)
* [approveKYC](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_KYC.html#approveKYC)
* [revokeKYC](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_KYC.html#revokeKYC)

## Reference

### Events

* **LogKYCApproved**

  `event` **`LogKYCApproved`**`(address _owner, address _user)`

  Parameters:`_owner` - address`_user` - address

### Functions

* **approveKYC**

  `function` **`approveKYC`**`(address _user) external returns (bool)`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#onlyOwner)Parameters:`_user` - addressReturns:bool

* **revokeKYC**

  `function` **`revokeKYC`**`(address _user) external returns (bool)`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/access_AccessHierarchy.html#onlyOwner)Parameters:`_user` - addressReturns:bool

