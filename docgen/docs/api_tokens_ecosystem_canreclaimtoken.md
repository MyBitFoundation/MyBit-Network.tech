---
id: tokens_ecosystem_CanReclaimToken
title: CanReclaimToken
---

# api\_tokens\_ecosystem\_CanReclaimToken

## contract CanReclaimToken

is [SingleOwned](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwned.html)

This allow a contract to recover any ERC20 token received in a contract by transferring the balance to the contract owner. This will prevent any accidental loss of tokens.Source: [tokens/ecosystem/CanReclaimToken.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/tokens/ecosystem/CanReclaimToken.sol)Author: SylTi

## Index

* [reclaimToken](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ecosystem_CanReclaimToken.html#reclaimToken)

## Reference

### Functions

* **reclaimToken**

  `function` **`reclaimToken`**`(StandardToken _token) external`

  Reclaim all ERC20Basic compatible tokens.Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_SingleOwned.html#onlyOwner)Parameters:`_token` - ERC20Basic The address of the token contract

