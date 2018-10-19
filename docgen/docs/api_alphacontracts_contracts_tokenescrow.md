---
id: alphacontracts_contracts_TokenEscrow
title: TokenEscrow
---

# api\_alphacontracts\_contracts\_TokenEscrow

## contract TokenEscrow

Source: [alphacontracts/contracts/TokenEscrow.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/TokenEscrow.sol)

## Index

* [LogEscrowDeposited](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenEscrow.html#LogEscrowDeposited)
* [LogEscrowWithdrawn](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenEscrow.html#LogEscrowWithdrawn)
* [accessApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenEscrow.html#accessApproved)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenEscrow.html#anyOwner)
* [depositEscrow](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenEscrow.html#depositEscrow)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenEscrow.html)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenEscrow.html)
* [receiveApproval](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenEscrow.html#receiveApproval)
* [withdraw](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenEscrow.html#withdraw)

## Reference

### Events

* **LogEscrowDeposited**

  `event` **`LogEscrowDeposited`**`(address _from, uint _amount)`

  Parameters:`_from` - address`_amount` - uint

* **LogEscrowWithdrawn**

  `event` **`LogEscrowWithdrawn`**`(address _user, uint _amount)`

  Parameters:`_user` - address`_amount` - uint

### Modifiers

* **accessApproved**

  `modifier` **`accessApproved`**`(uint _accessLevel)`

  Parameters:`_accessLevel` - uint

* **anyOwner**

  `modifier` **`anyOwner`**`()`

### Functions

* **depositEscrow**

  `function` **`depositEscrow`**`(uint _amount) external returns (bool)`

  Modifiers:[accessApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenEscrow.html#accessApproved)Parameters:`_amount` - uintReturns:bool

* **fallback**

  `function (address _database, address _mybittoken) public`

  Parameters:`_database` - address`_mybittoken` - address

* **fallback**

  `function () external`

* **receiveApproval**

  `function` **`receiveApproval`**`(address _from, uint _amount, address _token, bytes _data) external returns (bool)`

  Parameters:`_from` - address`_amount` - uint`_token` - address`_data` - bytesReturns:bool

* **withdraw**

  `function` **`withdraw`**`(uint _amount) external returns (bool)`

  Modifiers:[accessApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenEscrow.html#accessApproved)Parameters:`_amount` - uintReturns:bool

