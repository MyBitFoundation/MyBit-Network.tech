---
id: tokens_ERC20_DividendToken
title: DividendToken
---

# api\_tokens\_ERC20\_DividendToken

## contract DividendToken

is [BurnableERC20](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_BurnableERC20.html)Source: [tokens/ERC20/DividendToken.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/tokens/ERC20/DividendToken.sol)

## Index

* [LogIncomeCollected](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#LogIncomeCollected)
* [LogIncomeReceived](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#LogIncomeReceived)
* [\_burn](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#_burn)
* [allowance](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#allowance)
* [approve](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#approve)
* [approveAndCall](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#approveAndCall)
* [balanceOf](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#balanceOf)
* [burnFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#burnFrom)
* [collectOwedDividends](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#collectOwedDividends)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html)
* [getOwedDividends](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#getOwedDividends)
* [requiresEther](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#requiresEther)
* [tokenURI](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#tokenURI)
* [totalSupply](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#totalSupply)
* [transfer](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#transfer)
* [transferFrom](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#transferFrom)
* [updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#updateIncomeClaimed)

## Reference

### Events

* **LogIncomeCollected**

  `event` **`LogIncomeCollected`**`(uint _block, address _address, uint _amount)`

  Parameters:`_block` - uint`_address` - address`_amount` - uint

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

* **\_burn**

  `function` **`_burn`**`(uint256 _value) public`

  Parameters:`_value` - uint256

* **allowance**

  `function` **`allowance`**`(address _tokenHolder, address _spender) public view returns (uint)`

  Parameters:`_tokenHolder` - address`_spender` - addressReturns:uint

* **approve**

  `function` **`approve`**`(address _spender, uint _amount) public returns (bool)`

  Parameters:`_spender` - address`_amount` - uintReturns:bool

* **approveAndCall**

  `function` **`approveAndCall`**`(address _spender, uint _amount, bytes _data) public returns (bool)`

  Modifiers:[updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#updateIncomeClaimed) [updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#updateIncomeClaimed)Parameters:`_spender` - address`_amount` - uint`_data` - bytesReturns:bool

* **balanceOf**

  `function` **`balanceOf`**`(address _tokenHolder) public view returns (uint)`

  Parameters:`_tokenHolder` - addressReturns:uint

* **burnFrom**

  `function` **`burnFrom`**`(address _from, uint256 _value) external returns (bool)`

  Parameters:`_from` - address`_value` - uint256Returns:bool

* **collectOwedDividends**

  `function` **`collectOwedDividends`**`() public returns (uint)`

  Modifiers:[updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#updateIncomeClaimed)Returns:uint

* **fallback**

  `function () public payable`

  Modifiers:[requiresEther](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#requiresEther)

* **fallback**

  `function (string _tokenURI, uint _totalSupply, address _creator, address _database) public`

  Parameters:`_tokenURI` - string`_totalSupply` - uint`_creator` - address`_database` - address

* **getOwedDividends**

  `function` **`getOwedDividends`**`(address _user) public view returns (uint)`

  Parameters:`_user` - addressReturns:uint

* **tokenURI**

  `function` **`tokenURI`**`() external view returns (string)`

  Returns:string

* **totalSupply**

  `function` **`totalSupply`**`() public view returns (uint)`

  Returns:uint

* **transfer**

  `function` **`transfer`**`(address _to, uint _amount) public returns (bool)`

  Modifiers:[updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#updateIncomeClaimed) [updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#updateIncomeClaimed)Parameters:`_to` - address`_amount` - uintReturns:bool

* **transferFrom**

  `function` **`transferFrom`**`(address _from, address _to, uint _amount) public returns (bool)`

  Modifiers:[updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#updateIncomeClaimed) [updateIncomeClaimed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/tokens_ERC20_DividendToken.html#updateIncomeClaimed)Parameters:`_from` - address`_to` - address`_amount` - uintReturns:bool

