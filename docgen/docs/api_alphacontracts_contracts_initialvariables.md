---
id: alphacontracts_contracts_InitialVariables
title: InitialVariables
---

# api\_alphacontracts\_contracts\_InitialVariables

## contract InitialVariables

Source: [alphacontracts/contracts/InitialVariables.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/InitialVariables.sol)

## Index

* [LogInitialized](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#LogInitialized)
* [LogPriceUpdate](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#LogPriceUpdate)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#anyOwner)
* [changeAccessTokenFee](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#changeAccessTokenFee)
* [changeFoundationAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#changeFoundationAddress)
* [changeInstallerEscrowAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#changeInstallerEscrowAddress)
* [changePriceUpdateTimeline](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#changePriceUpdateTimeline)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html)
* [multiSigRequired](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#multiSigRequired)
* [noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#noEmptyAddress)
* [setDailyPrices](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#setDailyPrices)
* [startDapp](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#startDapp)

## Reference

### Events

* **LogInitialized**

  `event` **`LogInitialized`**`(address _sender, address _database)`

  Parameters:`_sender` - address`_database` - address

* **LogPriceUpdate**

  `event` **`LogPriceUpdate`**`(uint _oldETHPrice, uint _oldMYBPrice)`

  Parameters:`_oldETHPrice` - uint`_oldMYBPrice` - uint

### Modifiers

* **anyOwner**

  `modifier` **`anyOwner`**`()`

* **multiSigRequired**

  `modifier` **`multiSigRequired`**`(address _signer, string _functionName, bytes32 _keyParam)`

  Parameters:`_signer` - address`_functionName` - string`_keyParam` - bytes32

* **noEmptyAddress**

  `modifier` **`noEmptyAddress`**`(address _contract)`

  Parameters:`_contract` - address

### Functions

* **changeAccessTokenFee**

  `function` **`changeAccessTokenFee`**`(address _signer, string _functionName, uint _accessLevel, uint _newPrice) external returns (bool)`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#anyOwner) [multiSigRequired](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#multiSigRequired)Parameters:`_signer` - address`_functionName` - string`_accessLevel` - uint`_newPrice` - uintReturns:bool

* **changeFoundationAddress**

  `function` **`changeFoundationAddress`**`(address _signer, string _functionName, address _newAddress) external returns (bool)`

  Modifiers:[noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#noEmptyAddress) [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#anyOwner) [multiSigRequired](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#multiSigRequired)Parameters:`_signer` - address`_functionName` - string`_newAddress` - addressReturns:bool

* **changeInstallerEscrowAddress**

  `function` **`changeInstallerEscrowAddress`**`(address _signer, string _functionName, address _newAddress) external returns (bool)`

  Modifiers:[noEmptyAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#noEmptyAddress) [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#anyOwner) [multiSigRequired](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#multiSigRequired)Parameters:`_signer` - address`_functionName` - string`_newAddress` - addressReturns:bool

* **changePriceUpdateTimeline**

  `function` **`changePriceUpdateTimeline`**`(uint _newPriceExpiration) external returns (bool)`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#anyOwner)Parameters:`_newPriceExpiration` - uintReturns:bool

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **setDailyPrices**

  `function` **`setDailyPrices`**`(uint _ethPrice, uint _mybPrice) external returns (bool)`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_InitialVariables.html#anyOwner)Parameters:`_ethPrice` - uint`_mybPrice` - uintReturns:bool

* **startDapp**

  `function` **`startDapp`**`(address _myBitFoundation, address _installerEscrow) external`

  Parameters:`_myBitFoundation` - address`_installerEscrow` - address

