---
id: tokens_ERC20_SafeERC20
title: SafeERC20
---

# api\_tokens\_ERC20\_SafeERC20

## library SafeERC20

Wrappers around ERC20 operations that throw on failure. To use this library you can add a \`using SafeERC20 for ERC20;\` statement to your contract, which allows you to call the safe operations as \`token.safeTransfer\(...\)\`, etc.Source: [tokens/ERC20/SafeERC20.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/tokens/ERC20/SafeERC20.sol)

## Index

* [safeApprove](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_SafeERC20.html#safeApprove)
* [safeTransfer](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_SafeERC20.html#safeTransfer)
* [safeTransferFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_SafeERC20.html#safeTransferFrom)

## Reference

### Functions

* **safeApprove**

  `function` **`safeApprove`**`(ERC20 _token, address _spender, uint256 _value) internal`

  Parameters:`_token` - ERC20`_spender` - address`_value` - uint256

* **safeTransfer**

  `function` **`safeTransfer`**`(ERC20 _token, address _to, uint256 _value) internal`

  Parameters:`_token` - ERC20`_to` - address`_value` - uint256

* **safeTransferFrom**

  `function` **`safeTransferFrom`**`(ERC20 _token, address _from, address _to, uint256 _value) internal`

  Parameters:`_token` - ERC20`_from` - address`_to` - address`_value` - uint256

