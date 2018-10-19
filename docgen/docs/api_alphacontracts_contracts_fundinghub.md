---
id: alphacontracts_contracts_FundingHub
title: FundingHub
---

# api\_alphacontracts\_contracts\_FundingHub

## contract FundingHub

Source: [alphacontracts/contracts/FundingHub.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/FundingHub.sol)

## Index

* [LogAssetFunded](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#LogAssetFunded)
* [LogAssetFundingFailed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#LogAssetFundingFailed)
* [LogAssetFundingSuccess](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#LogAssetFundingSuccess)
* [LogAssetPayout](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#LogAssetPayout)
* [LogDestruction](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#LogDestruction)
* [LogNewFunder](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#LogNewFunder)
* [LogRefund](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#LogRefund)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#anyOwner)
* [atStage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#atStage)
* [destroy](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#destroy)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html)
* [fund](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#fund)
* [fundingLimit](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#fundingLimit)
* [fundingPeriodOver](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#fundingPeriodOver)
* [initiateRefund](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#initiateRefund)
* [nonReentrant](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#nonReentrant)
* [onlyApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#onlyApproved)
* [payout](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#payout)
* [priceUpdated](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#priceUpdated)
* [refund](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#refund)
* [requiresEther](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#requiresEther)
* [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#whenNotPaused)

## Reference

### Events

* **LogAssetFunded**

  `event` **`LogAssetFunded`**`(bytes32 _assetID, address _sender, uint _amount)`

  Parameters:`_assetID` - bytes32`_sender` - address`_amount` - uint

* **LogAssetFundingFailed**

  `event` **`LogAssetFundingFailed`**`(bytes32 _assetID, uint _amountRaised)`

  Parameters:`_assetID` - bytes32`_amountRaised` - uint

* **LogAssetFundingSuccess**

  `event` **`LogAssetFundingSuccess`**`(bytes32 _assetID, uint _currentEthPrice, uint _amountRaised)`

  Parameters:`_assetID` - bytes32`_currentEthPrice` - uint`_amountRaised` - uint

* **LogAssetPayout**

  `event` **`LogAssetPayout`**`(bytes32 _assetID, uint _amount)`

  Parameters:`_assetID` - bytes32`_amount` - uint

* **LogDestruction**

  `event` **`LogDestruction`**`(address _locationSent, uint _amountSent, address _caller)`

  Parameters:`_locationSent` - address`_amountSent` - uint`_caller` - address

* **LogNewFunder**

  `event` **`LogNewFunder`**`(bytes32 _assetID, address _funder)`

  Parameters:`_assetID` - bytes32`_funder` - address

* **LogRefund**

  `event` **`LogRefund`**`(bytes32 _assetID, address _funder, uint _amount)`

  Parameters:`_assetID` - bytes32`_funder` - address`_amount` - uint

### Modifiers

* **anyOwner**

  `modifier` **`anyOwner`**`()`

* **atStage**

  `modifier` **`atStage`**`(bytes32 _assetID, uint _stage)`

  Parameters:`_assetID` - bytes32`_stage` - uint

* **fundingLimit**

  `modifier` **`fundingLimit`**`(bytes32 _assetID)`

  Parameters:`_assetID` - bytes32

* **fundingPeriodOver**

  `modifier` **`fundingPeriodOver`**`(bytes32 _assetID)`

  Parameters:`_assetID` - bytes32

* **nonReentrant**

  `modifier` **`nonReentrant`**`()`

* **onlyApproved**

  `modifier` **`onlyApproved`**`()`

* **priceUpdated**

  `modifier` **`priceUpdated`**`()`

* **requiresEther**

  `modifier` **`requiresEther`**`()`

* **whenNotPaused**

  `modifier` **`whenNotPaused`**`()`

### Functions

* **destroy**

  `function` **`destroy`**`(address _functionInitiator, address _holdingAddress) public`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#anyOwner)Parameters:`_functionInitiator` - address`_holdingAddress` - address

* **fallback**

  `function () public`

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **fund**

  `function` **`fund`**`(bytes32 _assetID) external payable returns (bool)`

  Modifiers:[requiresEther](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#requiresEther) [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#whenNotPaused) [atStage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#atStage) [priceUpdated](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#priceUpdated) [fundingLimit](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#fundingLimit)Parameters:`_assetID` - bytes32Returns:bool

* **initiateRefund**

  `function` **`initiateRefund`**`(bytes32 _assetID) external returns (bool)`

  Modifiers:[fundingPeriodOver](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#fundingPeriodOver) [atStage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#atStage)Parameters:`_assetID` - bytes32Returns:bool

* **payout**

  `function` **`payout`**`(bytes32 _assetID) external returns (bool)`

  Modifiers:[nonReentrant](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#nonReentrant) [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#whenNotPaused) [atStage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#atStage)Parameters:`_assetID` - bytes32Returns:bool

* **refund**

  `function` **`refund`**`(bytes32 _assetID) external returns (bool)`

  Modifiers:[nonReentrant](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#nonReentrant) [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#whenNotPaused) [atStage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_FundingHub.html#atStage)Parameters:`_assetID` - bytes32Returns:bool

