---
id: crowdsale_CrowdsaleEther
title: CrowdsaleEther
---

# api\_crowdsale\_CrowdsaleEther

## contract CrowdsaleEther

is [Crowdsale](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_Crowdsale.html)Source: [crowdsale/CrowdsaleEther.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/crowdsale/CrowdsaleEther.sol)

## Index

* [LogAssetFundingStarted](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#LogAssetFundingStarted)
* [LogAssetPayout](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#LogAssetPayout)
* [LogAssetPurchased](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#LogAssetPurchased)
* [LogDestruction](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#LogDestruction)
* [LogRefund](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#LogRefund)
* [afterDeadline](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#afterDeadline)
* [beforeDeadline](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#beforeDeadline)
* [buyAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#buyAsset)
* [destroy](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#destroy)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html)
* [onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#onlyOwner)
* [payout](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#payout)
* [refund](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#refund)
* [requiresEther](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#requiresEther)
* [startFundingPeriod](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#startFundingPeriod)
* [whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#whenNotPaused)

## Reference

### Events

* **LogAssetFundingStarted**

  `event` **`LogAssetFundingStarted`**`(bytes32 _assetID, address _broker, string _tokenURI)`

  Parameters:`_assetID` - bytes32`_broker` - address`_tokenURI` - string

* **LogAssetPayout**

  `event` **`LogAssetPayout`**`(bytes32 _assetID, address _distributionContract, uint _amount)`

  Parameters:`_assetID` - bytes32`_distributionContract` - address`_amount` - uint

* **LogAssetPurchased**

  `event` **`LogAssetPurchased`**`(bytes32 _assetID, address _sender, uint _amount)`

  Parameters:`_assetID` - bytes32`_sender` - address`_amount` - uint

* **LogDestruction**

  `event` **`LogDestruction`**`(uint _amountSent, address _caller)`

  Parameters:`_amountSent` - uint`_caller` - address

* **LogRefund**

  `event` **`LogRefund`**`(bytes32 _assetID, address _funder, uint _amount)`

  Parameters:`_assetID` - bytes32`_funder` - address`_amount` - uint

### Modifiers

* **afterDeadline**

  `modifier` **`afterDeadline`**`(bytes32 _assetID)`

  Parameters:`_assetID` - bytes32

* **beforeDeadline**

  `modifier` **`beforeDeadline`**`(bytes32 _assetID)`

  Parameters:`_assetID` - bytes32

* **onlyOwner**

  `modifier` **`onlyOwner`**`()`

* **requiresEther**

  `modifier` **`requiresEther`**`()`

* **whenNotPaused**

  `modifier` **`whenNotPaused`**`()`

### Functions

* **buyAsset**

  `function` **`buyAsset`**`(bytes32 _assetID) external payable returns (bool)`

  Modifiers:[requiresEther](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#requiresEther) [beforeDeadline](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#beforeDeadline)Parameters:`_assetID` - bytes32Returns:bool

* **destroy**

  `function` **`destroy`**`() public`

  Modifiers:[onlyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#onlyOwner)

* **fallback**

  `function () public payable`

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **payout**

  `function` **`payout`**`(bytes32 _assetID, uint _amount) internal returns (bool)`

  Modifiers:[whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#whenNotPaused)Parameters:`_assetID` - bytes32`_amount` - uintReturns:bool

* **refund**

  `function` **`refund`**`(bytes32 _assetID) external returns (bool)`

  Modifiers:[whenNotPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#whenNotPaused) [afterDeadline](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/crowdsale_CrowdsaleEther.html#afterDeadline)Parameters:`_assetID` - bytes32Returns:bool

* **startFundingPeriod**

  `function` **`startFundingPeriod`**`(string _assetURI, bytes32 _operatorID, uint _fundingLength, uint _amountToRaise) external returns (bool)`

  Parameters:`_assetURI` - string`_operatorID` - bytes32`_fundingLength` - uint`_amountToRaise` - uintReturns:bool

