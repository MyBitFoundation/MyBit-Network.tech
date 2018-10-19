---
id: alphacontracts_contracts_AssetManager
title: AssetManager
---

# api\_alphacontracts\_contracts\_AssetManager

## contract AssetManager

Source: [alphacontracts/contracts/AssetManager.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/AssetManager.sol)

## Index

* [LogAssetManagerReplaced](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetManager.html#LogAssetManagerReplaced)
* [LogEscrowUnlocked](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetManager.html#LogEscrowUnlocked)
* [accessApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetManager.html#accessApproved)
* [anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetManager.html#anyOwner)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetManager.html)
* [releaseEscrow](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetManager.html#releaseEscrow)
* [replaceAssetManager](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetManager.html#replaceAssetManager)
* [unlockEscrow](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetManager.html#unlockEscrow)

## Reference

### Events

* **LogAssetManagerReplaced**

  `event` **`LogAssetManagerReplaced`**`(bytes32 _assetID, address oldAssetManager, address _newManager)`

  Parameters:`_assetID` - bytes32`oldAssetManager` - address`_newManager` - address

* **LogEscrowUnlocked**

  `event` **`LogEscrowUnlocked`**`(bytes32 _assetID, address _user, uint _amount)`

  Parameters:`_assetID` - bytes32`_user` - address`_amount` - uint

### Modifiers

* **accessApproved**

  `modifier` **`accessApproved`**`(uint _accessLevel)`

  Parameters:`_accessLevel` - uint

* **anyOwner**

  `modifier` **`anyOwner`**`()`

### Functions

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **releaseEscrow**

  `function` **`releaseEscrow`**`(bytes32 _assetID, address _user, uint _amount) internal`

  Parameters:`_assetID` - bytes32`_user` - address`_amount` - uint

* **replaceAssetManager**

  `function` **`replaceAssetManager`**`(address _newManager, bytes32 _assetID) external returns (bool)`

  Modifiers:[anyOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetManager.html#anyOwner)Parameters:`_newManager` - address`_assetID` - bytes32Returns:bool

* **unlockEscrow**

  `function` **`unlockEscrow`**`(bytes32 _assetID) external`

  Modifiers:[accessApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_AssetManager.html#accessApproved)Parameters:`_assetID` - bytes32

