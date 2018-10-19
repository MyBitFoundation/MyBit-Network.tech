---
id: crowdsale_AssetManager_AssetCreation
title: AssetCreation
---

# api\_crowdsale\_AssetManager\_AssetCreation

## contract AssetCreation

Source: [crowdsale/AssetManager.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/crowdsale/AssetManager.sol)

## Index

* [LogAssetFundingStarted](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_AssetManager_AssetCreation.html#LogAssetFundingStarted)
* [LogAssetRemoved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_AssetManager_AssetCreation.html#LogAssetRemoved)
* [LogFundingTimeChanged](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_AssetManager_AssetCreation.html#LogFundingTimeChanged)
* [LogLockAssetEscrow](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_AssetManager_AssetCreation.html#LogLockAssetEscrow)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_AssetManager_AssetCreation.html)
* [onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_AssetManager_AssetCreation.html#onlyOwner)
* [removeAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_AssetManager_AssetCreation.html#removeAsset)
* [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_AssetManager_AssetCreation.html#whenNotPaused)

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

* **onlyOwner**

  `modifier` **`onlyOwner`**`()`

* **whenNotPaused**

  `modifier` **`whenNotPaused`**`()`

### Functions

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **removeAsset**

  `function` **`removeAsset`**`(bytes32 _assetID, address _functionSigner) external returns (bool)`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_AssetManager_AssetCreation.html#onlyOwner) [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_AssetManager_AssetCreation.html#whenNotPaused)Parameters:`_assetID` - bytes32`_functionSigner` - addressReturns:bool

