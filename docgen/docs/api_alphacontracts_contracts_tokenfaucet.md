---
id: alphacontracts_contracts_TokenFaucet
title: TokenFaucet
---

# api\_alphacontracts\_contracts\_TokenFaucet

## contract TokenFaucet

Source: [alphacontracts/contracts/TokenFaucet.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/TokenFaucet.sol)

## Index

* [LogEthDeposited](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html#LogEthDeposited)
* [LogEthWithdraw](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html#LogEthWithdraw)
* [LogMYBDeposited](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html#LogMYBDeposited)
* [LogNewUser](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html#LogNewUser)
* [LogWithdraw](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html#LogWithdraw)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html#anyOwner)
* [basicVerification](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html#basicVerification)
* [changePass](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html#changePass)
* [depositWEI](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html#depositWEI)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html)
* [receiveApproval](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html#receiveApproval)
* [withdraw](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html#withdraw)

## Reference

### Events

* **LogEthDeposited**

  `event` **`LogEthDeposited`**`(address _depositer, uint _amountWEI)`

  Parameters:`_depositer` - address`_amountWEI` - uint

* **LogEthWithdraw**

  `event` **`LogEthWithdraw`**`(address _withdrawer, uint _amountWEI)`

  Parameters:`_withdrawer` - address`_amountWEI` - uint

* **LogMYBDeposited**

  `event` **`LogMYBDeposited`**`(address _depositer, uint _amount, bytes _data)`

  Parameters:`_depositer` - address`_amount` - uint`_data` - bytes

* **LogNewUser**

  `event` **`LogNewUser`**`(address _user)`

  Parameters:`_user` - address

* **LogWithdraw**

  `event` **`LogWithdraw`**`(address _sender, uint _amountMYB, uint _amountWEI)`

  Parameters:`_sender` - address`_amountMYB` - uint`_amountWEI` - uint

### Modifiers

* **anyOwner**

  `modifier` **`anyOwner`**`()`

* **basicVerification**

  `modifier` **`basicVerification`**`(uint _newAccessLevel)`

  Parameters:`_newAccessLevel` - uint

### Functions

* **changePass**

  `function` **`changePass`**`(bytes32 _newPass) external returns (bool)`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_TokenFaucet.html#anyOwner)Parameters:`_newPass` - bytes32Returns:bool

* **depositWEI**

  `function` **`depositWEI`**`() external payable`

* **fallback**

  `function (address _database, address _mybTokenAddress, bytes32 _accessPass) public`

  Parameters:`_database` - address`_mybTokenAddress` - address`_accessPass` - bytes32

* **receiveApproval**

  `function` **`receiveApproval`**`(address _from, uint _amount, address _mybToken, bytes _data) external`

  Parameters:`_from` - address`_amount` - uint`_mybToken` - address`_data` - bytes

* **withdraw**

  `function` **`withdraw`**`(string _pass) external`

  Parameters:`_pass` - string

