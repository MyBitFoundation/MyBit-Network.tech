---
id: alphacontracts_contracts_Staking
title: Staking
---

# api\_alphacontracts\_contracts\_Staking

## contract Staking

Source: [alphacontracts/contracts/Staking.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/Staking.sol)

## Index

* [LogEscrowRequestedP1](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#LogEscrowRequestedP1)
* [LogEscrowRequestedP2](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#LogEscrowRequestedP2)
* [LogEscrowRequester](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#LogEscrowRequester)
* [LogEscrowStaked](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#LogEscrowStaked)
* [accessApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#accessApproved)
* [approveEscrowLending](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#approveEscrowLending)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html)
* [lockAssetEscrow](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#lockAssetEscrow)
* [noEmptyBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#noEmptyBytes)
* [requestEscrowLending](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#requestEscrowLending)

## Reference

### Events

* **LogEscrowRequestedP1**

  `event` **`LogEscrowRequestedP1`**`(uint _amount, uint _incomeShare, uint _managerPercentage)`

  Parameters:`_amount` - uint`_incomeShare` - uint`_managerPercentage` - uint

* **LogEscrowRequestedP2**

  `event` **`LogEscrowRequestedP2`**`(uint _amountToBeRaised, bytes32 _assetType, bytes32 _installerID)`

  Parameters:`_amountToBeRaised` - uint`_assetType` - bytes32`_installerID` - bytes32

* **LogEscrowRequester**

  `event` **`LogEscrowRequester`**`(address _assetManager, bytes32 _escrowID, uint _blockAtCreation)`

  Parameters:`_assetManager` - address`_escrowID` - bytes32`_blockAtCreation` - uint

* **LogEscrowStaked**

  `event` **`LogEscrowStaked`**`(bytes32 _assetID, address _staker, uint _amountMYB)`

  Parameters:`_assetID` - bytes32`_staker` - address`_amountMYB` - uint

### Modifiers

* **accessApproved**

  `modifier` **`accessApproved`**`(uint _accessLevel)`

  Parameters:`_accessLevel` - uint

* **noEmptyBytes**

  `modifier` **`noEmptyBytes`**`(bytes32 _data)`

  Parameters:`_data` - bytes32

### Functions

* **approveEscrowLending**

  `function` **`approveEscrowLending`**`(address _requester, uint _amount, uint _incomeShare, uint _managerPercentage, uint _amountToBeRaised, bytes32 _installerID, bytes32 _assetType, uint256 _blockAtCreation) external returns (bool)`

  Modifiers:[accessApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#accessApproved)Parameters:`_requester` - address`_amount` - uint`_incomeShare` - uint`_managerPercentage` - uint`_amountToBeRaised` - uint`_installerID` - bytes32`_assetType` - bytes32`_blockAtCreation` - uint256Returns:bool

* **fallback**

  `function (address _database, address _tokenAddress) public`

  Parameters:`_database` - address`_tokenAddress` - address

* **lockAssetEscrow**

  `function` **`lockAssetEscrow`**`(bytes32 _assetID, uint _amountToEscrow, address _escrowDepositer) internal returns (bool)`

  Parameters:`_assetID` - bytes32`_amountToEscrow` - uint`_escrowDepositer` - addressReturns:bool

* **requestEscrowLending**

  `function` **`requestEscrowLending`**`(uint _amount, uint _incomeShare, uint _managerPercentage, uint _amountToBeRaised, bytes32 _installerID, bytes32 _assetType) external returns (bool)`

  Modifiers:[accessApproved](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#accessApproved) [noEmptyBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#noEmptyBytes) [noEmptyBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_Staking.html#noEmptyBytes)Parameters:`_amount` - uint`_incomeShare` - uint`_managerPercentage` - uint`_amountToBeRaised` - uint`_installerID` - bytes32`_assetType` - bytes32Returns:bool

