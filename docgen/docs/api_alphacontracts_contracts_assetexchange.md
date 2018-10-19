---
id: alphacontracts_contracts_AssetExchange
title: AssetExchange
---

# api\_alphacontracts\_contracts\_AssetExchange

## contract AssetExchange

Source: [alphacontracts/contracts/AssetExchange.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/AssetExchange.sol)

## Index

* [LogBuyOrderCompleted](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#LogBuyOrderCompleted)
* [LogBuyOrderCreated](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#LogBuyOrderCreated)
* [LogBuyOrderDetails](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#LogBuyOrderDetails)
* [LogDestruction](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#LogDestruction)
* [LogSellOrderCompleted](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#LogSellOrderCompleted)
* [LogSellOrderCreated](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#LogSellOrderCreated)
* [LogSellOrderDetails](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#LogSellOrderDetails)
* [LogownershipUnitsTraded](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#LogownershipUnitsTraded)
* [aboveZero](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#aboveZero)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#anyOwner)
* [buyAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#buyAsset)
* [createBuyOrder](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#createBuyOrder)
* [createSellOrder](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#createSellOrder)
* [deleteOrder](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#deleteOrder)
* [destroy](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#destroy)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html)
* [getAmountOwed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#getAmountOwed)
* [hasEnoughOwnership](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#hasEnoughOwnership)
* [onlyApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#onlyApproved)
* [requiresEther](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#requiresEther)
* [sellAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#sellAsset)
* [tradeOwnershipUnits](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#tradeOwnershipUnits)
* [validAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#validAsset)
* [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#whenNotPaused)
* [withdraw](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#withdraw)

## Reference

### Events

* **LogBuyOrderCompleted**

  `event` **`LogBuyOrderCompleted`**`(bytes32 _orderID, bytes32 _assetAddress, address _purchaser)`

  Parameters:`_orderID` - bytes32`_assetAddress` - bytes32`_purchaser` - address

* **LogBuyOrderCreated**

  `event` **`LogBuyOrderCreated`**`(bytes32 _orderID, bytes32 _assetID, address _creator)`

  Parameters:`_orderID` - bytes32`_assetID` - bytes32`_creator` - address

* **LogBuyOrderDetails**

  `event` **`LogBuyOrderDetails`**`(bytes32 _orderID, uint _amount, uint _price)`

  Parameters:`_orderID` - bytes32`_amount` - uint`_price` - uint

* **LogDestruction**

  `event` **`LogDestruction`**`(address _locationSent, uint _amountSent, address _caller)`

  Parameters:`_locationSent` - address`_amountSent` - uint`_caller` - address

* **LogSellOrderCompleted**

  `event` **`LogSellOrderCompleted`**`(bytes32 _orderID, bytes32 _assetAddress, address _purchaser)`

  Parameters:`_orderID` - bytes32`_assetAddress` - bytes32`_purchaser` - address

* **LogSellOrderCreated**

  `event` **`LogSellOrderCreated`**`(bytes32 _orderID, bytes32 _assetAddress, address _creator)`

  Parameters:`_orderID` - bytes32`_assetAddress` - bytes32`_creator` - address

* **LogSellOrderDetails**

  `event` **`LogSellOrderDetails`**`(bytes32 orderID, uint _amount, uint _price)`

  Parameters:`orderID` - bytes32`_amount` - uint`_price` - uint

* **LogownershipUnitsTraded**

  `event` **`LogownershipUnitsTraded`**`(bytes32 _assetID, address _from, address _to, uint _amount)`

  Parameters:`_assetID` - bytes32`_from` - address`_to` - address`_amount` - uint

### Modifiers

* **aboveZero**

  `modifier` **`aboveZero`**`(uint _amount, uint _price)`

  Parameters:`_amount` - uint`_price` - uint

* **anyOwner**

  `modifier` **`anyOwner`**`()`

* **hasEnoughOwnership**

  `modifier` **`hasEnoughOwnership`**`(bytes32 _assetID, uint _requiredOwnership)`

  Parameters:`_assetID` - bytes32`_requiredOwnership` - uint

* **onlyApproved**

  `modifier` **`onlyApproved`**`()`

* **requiresEther**

  `modifier` **`requiresEther`**`()`

* **validAsset**

  `modifier` **`validAsset`**`(bytes32 _assetID)`

  Parameters:`_assetID` - bytes32

* **whenNotPaused**

  `modifier` **`whenNotPaused`**`()`

### Functions

* **buyAsset**

  `function` **`buyAsset`**`(bytes32 _assetID, address _seller, uint _amount, uint _price) external payable returns (bool)`

  Modifiers:[whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#whenNotPaused) [onlyApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#onlyApproved)Parameters:`_assetID` - bytes32`_seller` - address`_amount` - uint`_price` - uintReturns:bool

* **createBuyOrder**

  `function` **`createBuyOrder`**`(bytes32 _assetID, uint _amount, uint _price) external payable returns (bool)`

  Modifiers:[onlyApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#onlyApproved) [requiresEther](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#requiresEther) [aboveZero](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#aboveZero) [validAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#validAsset)Parameters:`_assetID` - bytes32`_amount` - uint`_price` - uintReturns:bool

* **createSellOrder**

  `function` **`createSellOrder`**`(bytes32 _assetID, uint _amount, uint _price) external returns (bool)`

  Modifiers:[onlyApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#onlyApproved) [aboveZero](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#aboveZero) [validAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#validAsset) [hasEnoughOwnership](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#hasEnoughOwnership)Parameters:`_assetID` - bytes32`_amount` - uint`_price` - uintReturns:bool

* **deleteOrder**

  `function` **`deleteOrder`**`(bytes32 _assetID, uint _amount, uint _price, bool _buyOrder) external returns (bool)`

  Modifiers:[onlyApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#onlyApproved)Parameters:`_assetID` - bytes32`_amount` - uint`_price` - uint`_buyOrder` - boolReturns:bool

* **destroy**

  `function` **`destroy`**`(address _functionInitiator, address _holdingAddress) public`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#anyOwner)Parameters:`_functionInitiator` - address`_holdingAddress` - address

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **fallback**

  `function () external`

* **getAmountOwed**

  `function` **`getAmountOwed`**`(bytes32 _assetID, address _user) public view returns (uint)`

  Parameters:`_assetID` - bytes32`_user` - addressReturns:uint

* **sellAsset**

  `function` **`sellAsset`**`(bytes32 _assetID, address _buyer, uint _amount, uint _price) public returns (bool)`

  Modifiers:[onlyApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#onlyApproved) [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#whenNotPaused)Parameters:`_assetID` - bytes32`_buyer` - address`_amount` - uint`_price` - uintReturns:bool

* **tradeOwnershipUnits**

  `function` **`tradeOwnershipUnits`**`(bytes32 _assetID, address _from, address _to, uint _amount) internal returns (bool)`

  Parameters:`_assetID` - bytes32`_from` - address`_to` - address`_amount` - uintReturns:bool

* **withdraw**

  `function` **`withdraw`**`() external returns (bool)`

  Modifiers:[onlyApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#onlyApproved) [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetExchange.html#whenNotPaused)Returns:bool

