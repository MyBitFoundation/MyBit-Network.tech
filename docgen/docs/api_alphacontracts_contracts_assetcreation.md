---
id: alphacontracts_contracts_AssetCreation
title: AssetCreation
---

# api\_alphacontracts\_contracts\_AssetCreation

## contract AssetCreation

Source: [alphacontracts/contracts/AssetCreation.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/AssetCreation.sol)

## Index

* [LogAssetFundingStarted](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#LogAssetFundingStarted)
* [LogAssetRemoved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#LogAssetRemoved)
* [LogDestruction](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#LogDestruction)
* [LogFundingPercentageChanged](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#LogFundingPercentageChanged)
* [LogFundingTimeChanged](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#LogFundingTimeChanged)
* [LogLockAssetEscrow](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#LogLockAssetEscrow)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#anyOwner)
* [changeFundingPercentages](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#changeFundingPercentages)
* [changeFundingTime](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#changeFundingTime)
* [destroy](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#destroy)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html)
* [lockAssetEscrow](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#lockAssetEscrow)
* [newAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#newAsset)
* [noEmptyBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#noEmptyBytes)
* [notZero](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#notZero)
* [removeAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#removeAsset)
* [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#whenNotPaused)

## Reference

### Events

* **LogAssetFundingStarted**

  `event` **`LogAssetFundingStarted`**`(bytes32 _assetID, bytes32 _installerID, bytes32 _assetType, bytes32 _ipfsHash)`

  Parameters:`_assetID` - bytes32`_installerID` - bytes32`_assetType` - bytes32`_ipfsHash` - bytes32

* **LogAssetRemoved**

  `event` **`LogAssetRemoved`**`(bytes32 _assetID, address _remover)`

  Parameters:`_assetID` - bytes32`_remover` - address

* **LogDestruction**

  `event` **`LogDestruction`**`(address _locationSent, uint _amountSent, address _caller)`

  Parameters:`_locationSent` - address`_amountSent` - uint`_caller` - address

* **LogFundingPercentageChanged**

  `event` **`LogFundingPercentageChanged`**`(uint _myBitFoundationPercentage, uint _installerPercentage)`

  Parameters:`_myBitFoundationPercentage` - uint`_installerPercentage` - uint

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

  `modifier` **`noEmptyBytes`**`(bytes32 _data)`

  Parameters:`_data` - bytes32

* **notZero**

  `modifier` **`notZero`**`(uint _uint)`

  Parameters:`_uint` - uint

* **whenNotPaused**

  `modifier` **`whenNotPaused`**`()`

### Functions

* **changeFundingPercentages**

  `function` **`changeFundingPercentages`**`(uint _myBitFoundationPercentage, uint _installerPercentage, address _functionSigner) external returns (bool)`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#anyOwner) [notZero](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#notZero) [notZero](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#notZero)Parameters:`_myBitFoundationPercentage` - uint`_installerPercentage` - uint`_functionSigner` - addressReturns:bool

* **changeFundingTime**

  `function` **`changeFundingTime`**`(uint _newTimeGivenForFunding) external returns (bool)`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#anyOwner) [notZero](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#notZero)Parameters:`_newTimeGivenForFunding` - uintReturns:bool

* **destroy**

  `function` **`destroy`**`(address _functionInitiator, address _holdingAddress) public`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#anyOwner)Parameters:`_functionInitiator` - address`_holdingAddress` - address

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **lockAssetEscrow**

  `function` **`lockAssetEscrow`**`(bytes32 _assetID, uint _amountToEscrow, address _escrowDepositer) internal returns (bool)`

  Parameters:`_assetID` - bytes32`_amountToEscrow` - uint`_escrowDepositer` - addressReturns:bool

* **newAsset**

  `function` **`newAsset`**`(uint _amountToBeRaised, uint _managerPercentage, uint _amountToEscrow, bytes32 _installerID, bytes32 _assetType, uint _blockAtCreation, bytes32 _ipfsHash) external returns (bool)`

  Modifiers:[whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#whenNotPaused) [noEmptyBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#noEmptyBytes) [noEmptyBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#noEmptyBytes) [noEmptyBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#noEmptyBytes)Parameters:`_amountToBeRaised` - uint`_managerPercentage` - uint`_amountToEscrow` - uint`_installerID` - bytes32`_assetType` - bytes32`_blockAtCreation` - uint`_ipfsHash` - bytes32Returns:bool

* **removeAsset**

  `function` **`removeAsset`**`(bytes32 _assetID, address _functionSigner) external returns (bool)`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#anyOwner) [noEmptyBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#noEmptyBytes) [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetCreation.html#whenNotPaused)Parameters:`_assetID` - bytes32`_functionSigner` - addressReturns:bool

