---
id: alphacontracts_contracts_Asset
title: Asset
---

# api\_alphacontracts\_contracts\_Asset

## contract Asset

Source: [alphacontracts/contracts/Asset.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/Asset.sol)

## Index

* [LogDestruction](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#LogDestruction)
* [LogIncomeReceived](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#LogIncomeReceived)
* [LogIncomeWithdrawl](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#LogIncomeWithdrawl)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#anyOwner)
* [atStage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#atStage)
* [batchWithdraw](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#batchWithdraw)
* [destroy](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#destroy)
* [distributeStakingShare](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#distributeStakingShare)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html)
* [onlyApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#onlyApproved)
* [receiveIncome](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#receiveIncome)
* [requiresEther](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#requiresEther)
* [setManagerIncome](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#setManagerIncome)
* [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#whenNotPaused)
* [withdraw](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#withdraw)
* [withdrawManagerIncome](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#withdrawManagerIncome)

## Reference

### Events

* **LogDestruction**

  `event` **`LogDestruction`**`(address _locationSent, uint _amountSent, address _caller)`

  Parameters:`_locationSent` - address`_amountSent` - uint`_caller` - address

* **LogIncomeReceived**

  `event` **`LogIncomeReceived`**`(bytes32 _assetID, address _sender, uint _amount, bytes32 _note)`

  Parameters:`_assetID` - bytes32`_sender` - address`_amount` - uint`_note` - bytes32

* **LogIncomeWithdrawl**

  `event` **`LogIncomeWithdrawl`**`(address _funder, uint _amount)`

  Parameters:`_funder` - address`_amount` - uint

### Modifiers

* **anyOwner**

  `modifier` **`anyOwner`**`()`

* **atStage**

  `modifier` **`atStage`**`(bytes32 _assetID, uint _stage)`

  Parameters:`_assetID` - bytes32`_stage` - uint

* **onlyApproved**

  `modifier` **`onlyApproved`**`(uint8 _accessLevel)`

  Parameters:`_accessLevel` - uint8

* **requiresEther**

  `modifier` **`requiresEther`**`()`

* **whenNotPaused**

  `modifier` **`whenNotPaused`**`()`

### Functions

* **batchWithdraw**

  `function` **`batchWithdraw`**`(bytes32[] _assetIDs) external returns (bool)`

  Modifiers:[whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#whenNotPaused)Parameters:`_assetIDs` - bytes32\[\]Returns:bool

* **destroy**

  `function` **`destroy`**`(address _functionInitiator, address _holdingAddress) public`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#anyOwner)Parameters:`_functionInitiator` - address`_holdingAddress` - address

* **distributeStakingShare**

  `function` **`distributeStakingShare`**`(bytes32 _assetID, uint _managerAmount) internal returns (bool)`

  Parameters:`_assetID` - bytes32`_managerAmount` - uintReturns:bool

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **fallback**

  `function () public`

* **receiveIncome**

  `function` **`receiveIncome`**`(bytes32 _assetID, bytes32 _note) external payable returns (bool)`

  Modifiers:[requiresEther](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#requiresEther) [atStage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#atStage)Parameters:`_assetID` - bytes32`_note` - bytes32Returns:bool

* **setManagerIncome**

  `function` **`setManagerIncome`**`(address _manager, uint _managerAmount) internal returns (bool)`

  Parameters:`_manager` - address`_managerAmount` - uintReturns:bool

* **withdraw**

  `function` **`withdraw`**`(bytes32 _assetID) external returns (bool)`

  Modifiers:[whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#whenNotPaused)Parameters:`_assetID` - bytes32Returns:bool

* **withdrawManagerIncome**

  `function` **`withdrawManagerIncome`**`(bytes32 _assetID) external returns (bool)`

  Modifiers:[atStage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Asset.html#atStage)Parameters:`_assetID` - bytes32Returns:bool

