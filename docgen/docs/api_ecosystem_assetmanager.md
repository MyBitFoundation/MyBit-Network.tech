---
id: ecosystem_AssetManager
title: AssetManager
---

# api\_ecosystem\_AssetManager

## contract AssetManager

is [Pausible](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_Pausible.html)Source: [ecosystem/AssetManager.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/ecosystem/AssetManager.sol)

## Index

* [LogAssetFundingStarted](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ecosystem_AssetManager.html#LogAssetFundingStarted)
* [LogAssetRemoved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ecosystem_AssetManager.html#LogAssetRemoved)
* [LogFundingTimeChanged](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ecosystem_AssetManager.html#LogFundingTimeChanged)
* [LogLockAssetEscrow](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ecosystem_AssetManager.html#LogLockAssetEscrow)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ecosystem_AssetManager.html#anyOwner)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ecosystem_AssetManager.html)
* [noEmptyBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ecosystem_AssetManager.html#noEmptyBytes)
* [removeAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ecosystem_AssetManager.html#removeAsset)

## Reference

### Events

* **LogAssetFundingStarted**

  `event` **`LogAssetFundingStarted`**`(bytes32 _assetID, bytes32 _manufacturerID, bytes32 _assetType, bytes32 _ipfsHash)`

  Parameters:`_assetID` - bytes32`_manufacturerID` - bytes32`_assetType` - bytes32`_ipfsHash` - bytes32

* **LogAssetRemoved**

  `event` **`LogAssetRemoved`**`(bytes32 _assetID, address _remover)`

  Parameters:`_assetID` - bytes32`_remover` - address

* **LogFundingTimeChanged**

  `event` **`LogFundingTimeChanged`**`(address _sender, uint _newTimeForFunding)`

  Parameters:`_sender` - address`_newTimeForFunding` - uint

* **LogLockAssetEscrow**

  `event` **`LogLockAssetEscrow`**`(address _from, bytes32 _assetID, uint _amountOf)`

  Parameters:`_from` - address`_assetID` - bytes32`_amountOf` - uint

### Modifiers

* **anyOwner**

  `modifier` **`anyOwner`**`()`

* **noEmptyBytes**

  `modifier` **`noEmptyBytes`**`(bytes32 _bytes32)`

  Parameters:`_bytes32` - bytes32

### Functions

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **removeAsset**

  `function` **`removeAsset`**`(bytes32 _assetID, address _functionSigner) external returns (bool)`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ecosystem_AssetManager.html#anyOwner) [noEmptyBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ecosystem_AssetManager.html#noEmptyBytes) [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/ownership_Pausible.html#whenNotPaused)Parameters:`_assetID` - bytes32`_functionSigner` - addressReturns:bool

