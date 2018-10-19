---
id: ownership_SingleOwnedClaimable
title: SingleOwnedClaimable
---

# api\_ownership\_SingleOwnedClaimable

## contract SingleOwnedClaimable

Source: [ownership/SingleOwnedClaimable.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/ownership/SingleOwnedClaimable.sol)

## Index

* [OwnershipTransferred](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwnedClaimable.html#OwnershipTransferred)
* [claimOwnership](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwnedClaimable.html#claimOwnership)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwnedClaimable.html)
* [noZeroAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwnedClaimable.html#noZeroAddress)
* [onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwnedClaimable.html#onlyOwner)
* [onlyPendingOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwnedClaimable.html#onlyPendingOwner)
* [transferOwnership](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwnedClaimable.html#transferOwnership)

## Reference

### Events

* **OwnershipTransferred**

  `event` **`OwnershipTransferred`**`(address owner, address pendingOwner)`

  Parameters:`owner` - address`pendingOwner` - address

### Modifiers

* **noZeroAddress**

  `modifier` **`noZeroAddress`**`(address _address)`

  Parameters:`_address` - address

* **onlyOwner**

  `modifier` **`onlyOwner`**`()`

* **onlyPendingOwner**

  `modifier` **`onlyPendingOwner`**`()`

  Modifier throws if called by any account other than the pendingOwner.

### Functions

* **claimOwnership**

  `function` **`claimOwnership`**`() public`

  Modifiers:[onlyPendingOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwnedClaimable.html#onlyPendingOwner)

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **transferOwnership**

  `function` **`transferOwnership`**`(address _newOwner) public`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwnedClaimable.html#onlyOwner) [noZeroAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwnedClaimable.html#noZeroAddress)Parameters:`_newOwner` - address

