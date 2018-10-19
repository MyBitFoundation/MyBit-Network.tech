---
id: alphacontracts_contracts_MyBitToken
title: MyBitToken
---

# api\_alphacontracts\_contracts\_MyBitToken

## contract MyBitToken

is [ERC20Interface](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken_ERC20Interface.html)Source: [alphacontracts/contracts/MyBitToken.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/MyBitToken.sol)

## Index

* [LogBurn](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken.html#LogBurn)
* [allowance](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken.html#allowance)
* [approve](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken.html#approve)
* [approveAndCall](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken.html#approveAndCall)
* [balanceOf](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken.html#balanceOf)
* [burn](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken.html#burn)
* [burnFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken.html#burnFrom)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken.html)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken.html)
* [totalSupply](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken.html#totalSupply)
* [transfer](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken.html#transfer)
* [transferFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_MyBitToken.html#transferFrom)

## Reference

### Events

* **LogBurn**

  `event` **`LogBurn`**`(address _burner, uint _amountBurned)`

  Parameters:`_burner` - address`_amountBurned` - uint

### Functions

* **allowance**

  `function` **`allowance`**`(address _tokenHolder, address _spender) public view returns (uint)`

  Parameters:`_tokenHolder` - address`_spender` - addressReturns:uint

* **approve**

  `function` **`approve`**`(address _spender, uint _amount) public returns (bool)`

  Parameters:`_spender` - address`_amount` - uintReturns:bool

* **approveAndCall**

  `function` **`approveAndCall`**`(address _spender, uint _amount, bytes _data) public returns (bool)`

  Parameters:`_spender` - address`_amount` - uint`_data` - bytesReturns:bool

* **balanceOf**

  `function` **`balanceOf`**`(address _tokenHolder) public view returns (uint)`

  Parameters:`_tokenHolder` - addressReturns:uint

* **burn**

  `function` **`burn`**`(uint _amount) public returns (bool)`

  Parameters:`_amount` - uintReturns:bool

* **burnFrom**

  `function` **`burnFrom`**`(address _from, uint _amount) public returns (bool)`

  Parameters:`_from` - address`_amount` - uintReturns:bool

* **fallback**

  `function () public payable`

* **fallback**

  `function (uint _initialAmount, string _tokenName, uint8 _decimalUnits, string _tokenSymbol) public`

  Parameters:`_initialAmount` - uint`_tokenName` - string`_decimalUnits` - uint8`_tokenSymbol` - string

* **totalSupply**

  `function` **`totalSupply`**`() public view returns (uint)`

  Returns:uint

* **transfer**

  `function` **`transfer`**`(address _to, uint _amount) public returns (bool)`

  Parameters:`_to` - address`_amount` - uintReturns:bool

* **transferFrom**

  `function` **`transferFrom`**`(address _from, address _to, uint _amount) public returns (bool)`

  Parameters:`_from` - address`_to` - address`_amount` - uintReturns:bool

