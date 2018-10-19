---
id: alphacontracts_contracts_Test
title: Test
---

# api\_alphacontracts\_contracts\_Test

## contract Test

Source: [alphacontracts/contracts/Test.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/Test.sol)

## Index

* [burnAccessTokens](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Test.html#burnAccessTokens)
* [createAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Test.html#createAsset)
* [deposit](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Test.html#deposit)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Test.html)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Test.html)
* [fund](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Test.html#fund)
* [getAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Test.html#getAddress)
* [getBalance](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Test.html#getBalance)
* [logpayment](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Test.html#logpayment)

## Reference

### Events

* **logpayment**

  `event` **`logpayment`**`(address _sender, uint _amount, uint _timestamp)`

  Parameters:`_sender` - address`_amount` - uint`_timestamp` - uint

### Functions

* **burnAccessTokens**

  `function` **`burnAccessTokens`**`(uint _accessLevel) external`

  Parameters:`_accessLevel` - uint

* **createAsset**

  `function` **`createAsset`**`(bytes32 _assetID, uint _amountToBeRaised, uint _managerPercentage, uint _amountToEscrow, bytes32 _installerID, bytes32 _assetType, bytes32 _ipfsHash) external`

  Parameters:`_assetID` - bytes32`_amountToBeRaised` - uint`_managerPercentage` - uint`_amountToEscrow` - uint`_installerID` - bytes32`_assetType` - bytes32`_ipfsHash` - bytes32

* **deposit**

  `function` **`deposit`**`() public payable`

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **fallback**

  `function () public payable`

* **fund**

  `function` **`fund`**`(bytes32 _assetID, uint _amount) external`

  Parameters:`_assetID` - bytes32`_amount` - uint

* **getAddress**

  `function` **`getAddress`**`(string _name) public view returns (address)`

  Parameters:`_name` - stringReturns:address

* **getBalance**

  `function` **`getBalance`**`() public view returns (uint)`

  Returns:uint

