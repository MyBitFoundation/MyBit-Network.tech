---
id: alphacontracts_contracts_AssetToken
title: AssetToken
---

# api\_alphacontracts\_contracts\_AssetToken

## contract AssetToken

is [ERC20Interface](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken_ERC20Interface.html)Source: [alphacontracts/contracts/AssetToken.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/AssetToken.sol)

## Index

* [LogIncomeReceived](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#LogIncomeReceived)
* [allowance](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#allowance)
* [approve](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#approve)
* [approveAndCall](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#approveAndCall)
* [balanceOf](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#balanceOf)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html)
* [getOwedDividends](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#getOwedDividends)
* [requiresEther](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#requiresEther)
* [totalSupply](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#totalSupply)
* [transfer](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#transfer)
* [transferFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#transferFrom)
* [updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#updateIncomeClaimed)

## Reference

### Events

* **LogIncomeReceived**

  `event` **`LogIncomeReceived`**`(address _sender, uint _paymentAmount)`

  Parameters:`_sender` - address`_paymentAmount` - uint

### Modifiers

* **requiresEther**

  `modifier` **`requiresEther`**`()`

* **updateIncomeClaimed**

  `modifier` **`updateIncomeClaimed`**`(address _user)`

  Parameters:`_user` - address

### Functions

* **allowance**

  `function` **`allowance`**`(address _tokenHolder, address _spender) public view returns (uint)`

  Parameters:`_tokenHolder` - address`_spender` - addressReturns:uint

* **approve**

  `function` **`approve`**`(address _spender, uint _amount) public returns (bool)`

  Parameters:`_spender` - address`_amount` - uintReturns:bool

* **approveAndCall**

  `function` **`approveAndCall`**`(address _spender, uint _amount, bytes _data) public returns (bool)`

  Modifiers:[updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#updateIncomeClaimed) [updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#updateIncomeClaimed)Parameters:`_spender` - address`_amount` - uint`_data` - bytesReturns:bool

* **balanceOf**

  `function` **`balanceOf`**`(address _tokenHolder) public view returns (uint)`

  Parameters:`_tokenHolder` - addressReturns:uint

* **fallback**

  `function () public payable`

  Modifiers:[requiresEther](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#requiresEther)

* **fallback**

  `function (uint _initialAmount, string _id) public`

  Parameters:`_initialAmount` - uint`_id` - string

* **getOwedDividends**

  `function` **`getOwedDividends`**`(address _user) public view returns (uint)`

  Parameters:`_user` - addressReturns:uint

* **totalSupply**

  `function` **`totalSupply`**`() public view returns (uint)`

  Returns:uint

* **transfer**

  `function` **`transfer`**`(address _to, uint _amount) public returns (bool)`

  Modifiers:[updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#updateIncomeClaimed) [updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#updateIncomeClaimed)Parameters:`_to` - address`_amount` - uintReturns:bool

* **transferFrom**

  `function` **`transferFrom`**`(address _from, address _to, uint _amount) public returns (bool)`

  Modifiers:[updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#updateIncomeClaimed) [updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetToken.html#updateIncomeClaimed)Parameters:`_from` - address`_to` - address`_amount` - uintReturns:bool

