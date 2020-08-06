---
id: ownership_Pausible
title: Pausible
---

# api\_ownership\_Pausible

## contract Pausible

is [MultiOwned](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html)Source: [ownership/Pausible.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/ownership/Pausible.sol)

## Index

* [LogPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_Pausible.html#LogPaused)
* [LogUnpaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_Pausible.html#LogUnpaused)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_Pausible.html)
* [noZeroAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_Pausible.html#noZeroAddress)
* [pause](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_Pausible.html#pause)
* [unpause](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_Pausible.html#unpause)
* [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_Pausible.html#whenNotPaused)

## Reference

### Events

* **LogPaused**

  `event` **`LogPaused`**`(address _contract, address _owner)`

  Parameters:`_contract` - address`_owner` - address

* **LogUnpaused**

  `event` **`LogUnpaused`**`(address _contract, address _owner)`

  Parameters:`_contract` - address`_owner` - address

### Modifiers

* **noZeroAddress**

  `modifier` **`noZeroAddress`**`(address _address)`

  Parameters:`_address` - address

* **whenNotPaused**

  `modifier` **`whenNotPaused`**`(address _contract)`

  Parameters:`_contract` - address

### Functions

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **pause**

  `function` **`pause`**`(address _contract) public`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#anyOwner)Parameters:`_contract` - address

* **unpause**

  `function` **`unpause`**`(address _contract) public`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_MultiOwned.html#anyOwner)Parameters:`_contract` - address

