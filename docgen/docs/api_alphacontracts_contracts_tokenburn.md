---
id: alphacontracts_contracts_TokenBurn
title: TokenBurn
---

# api\_alphacontracts\_contracts\_TokenBurn

## contract TokenBurn

Source: [alphacontracts/contracts/TokenBurn.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/TokenBurn.sol)

## Index

* [LogMyBitBurnt](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenBurn.html#LogMyBitBurnt)
* [basicVerification](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenBurn.html#basicVerification)
* [burnTokens](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenBurn.html#burnTokens)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenBurn.html)
* [priceUpdated](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenBurn.html#priceUpdated)
* [receiveApproval](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenBurn.html#receiveApproval)
* [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenBurn.html#whenNotPaused)

## Reference

### Events

* **LogMyBitBurnt**

  `event` **`LogMyBitBurnt`**`(address _burner, uint _amount)`

  Parameters:`_burner` - address`_amount` - uint

### Modifiers

* **basicVerification**

  `modifier` **`basicVerification`**`(uint _newAccessLevel)`

  Parameters:`_newAccessLevel` - uint

* **priceUpdated**

  `modifier` **`priceUpdated`**`()`

* **whenNotPaused**

  `modifier` **`whenNotPaused`**`()`

### Functions

* **burnTokens**

  `function` **`burnTokens`**`(uint _accessLevelDesired) external returns (bool)`

  Modifiers:[whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenBurn.html#whenNotPaused) [priceUpdated](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenBurn.html#priceUpdated) [basicVerification](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenBurn.html#basicVerification)Parameters:`_accessLevelDesired` - uintReturns:bool

* **fallback**

  `function (address _database, address _myBitToken) public`

  Parameters:`_database` - address`_myBitToken` - address

* **receiveApproval**

  `function` **`receiveApproval`**`(address _from, uint _amount, address _token, bytes _accessLevelDesired) external returns (bool)`

  Modifiers:[whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenBurn.html#whenNotPaused) [priceUpdated](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenBurn.html#priceUpdated)Parameters:`_from` - address`_amount` - uint`_token` - address`_accessLevelDesired` - bytesReturns:bool

