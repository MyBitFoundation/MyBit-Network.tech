---
id: ownership_SingleOwned
title: SingleOwned
---

# api\_ownership\_SingleOwned

## contract SingleOwned

Source: [ownership/SingleOwned.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/ownership/SingleOwned.sol)

## Index

* [OwnershipTransferred](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwned.html#OwnershipTransferred)
* [changeOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwned.html#changeOwner)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwned.html)
* [onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwned.html#onlyOwner)

## Reference

### Events

* **OwnershipTransferred**

  `event` **`OwnershipTransferred`**`(address owner, address pendingOwner)`

  Parameters:`owner` - address`pendingOwner` - address

### Modifiers

* **onlyOwner**

  `modifier` **`onlyOwner`**`()`

### Functions

* **changeOwner**

  `function` **`changeOwner`**`(address _newOwner) public`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwned.html#onlyOwner)Parameters:`_newOwner` - address

* **fallback**

  `function (address _database, address _owner) public`

  Parameters:`_database` - address`_owner` - address

