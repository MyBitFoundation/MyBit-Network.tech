---
id: interfaces_Crowdsale
title: Crowdsale
---

# api\_interfaces\_Crowdsale

## interface Crowdsale

Source: [interfaces/Crowdsale.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/interfaces/Crowdsale.sol)

## Index

* [buyAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_Crowdsale.html#buyAsset)
* [destroy](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_Crowdsale.html#destroy)
* [refund](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_Crowdsale.html#refund)
* [startFundingPeriod](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/interfaces_Crowdsale.html#startFundingPeriod)

## Reference

### Functions

* **buyAsset**

  `abstract function` **`buyAsset`**`(bytes32 _assetID, uint _amount) external returns (bool)`

  Parameters:`_assetID` - bytes32`_amount` - uintReturns:bool

* **destroy**

  `abstract function` **`destroy`**`(address _functionInitiator, address _holdingAddress) external`

  Parameters:`_functionInitiator` - address`_holdingAddress` - address

* **refund**

  `abstract function` **`refund`**`(bytes32 _assetID) external returns (bool)`

  Parameters:`_assetID` - bytes32Returns:bool

* **startFundingPeriod**

  `abstract function` **`startFundingPeriod`**`(bytes32 _assetID, address _assetToken, address _creator, uint _amountToRaise) external returns (bool)`

  Parameters:`_assetID` - bytes32`_assetToken` - address`_creator` - address`_amountToRaise` - uintReturns:bool

