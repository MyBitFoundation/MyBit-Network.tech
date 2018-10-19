---
id: alphacontracts_contracts_API
title: API
---

# api\_alphacontracts\_contracts\_API

## contract API

Source: [alphacontracts/contracts/API.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/API.sol)

## Index

* [InstallerEscrow](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#InstallerEscrow)
* [MyBitFoundation](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#MyBitFoundation)
* [accessTokenFee](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#accessTokenFee)
* [amountRaised](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#amountRaised)
* [amountToBeRaised](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#amountToBeRaised)
* [assetIncome](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#assetIncome)
* [assetManager](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#assetManager)
* [assetStaker](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#assetStaker)
* [contractAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#contractAddress)
* [contractExists](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#contractExists)
* [depositedMYB](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#depositedMYB)
* [escrowExpiration](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#escrowExpiration)
* [escrowedForAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#escrowedForAsset)
* [escrowedMYB](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#escrowedMYB)
* [ethUSDPrice](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#ethUSDPrice)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html)
* [fundingDeadline](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#fundingDeadline)
* [fundingStage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#fundingStage)
* [getAmountOwed](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#getAmountOwed)
* [getFunctionAuthorizationHash](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#getFunctionAuthorizationHash)
* [installerPercentage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#installerPercentage)
* [isFunctionAuthorized](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#isFunctionAuthorized)
* [isOwner](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#isOwner)
* [isPaused](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#isPaused)
* [lockedForAsset](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#lockedForAsset)
* [managerIncome](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#managerIncome)
* [managerPercentage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#managerPercentage)
* [myBitFoundationPercentage](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#myBitFoundationPercentage)
* [mybUSDPrice](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#mybUSDPrice)
* [ownershipUnits](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#ownershipUnits)
* [priceExpiration](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#priceExpiration)
* [priceTimeToExpiration](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#priceTimeToExpiration)
* [priceUpdateTimeline](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#priceUpdateTimeline)
* [stakerIncomeShare](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#stakerIncomeShare)
* [stakingExpiration](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#stakingExpiration)
* [totalPaidToFunder](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#totalPaidToFunder)
* [totalPaidToFunders](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#totalPaidToFunders)
* [totalReceived](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#totalReceived)
* [userAccess](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_API.html#userAccess)

## Reference

### Functions

* **InstallerEscrow**

  `function` **`InstallerEscrow`**`() public view returns (address)`

  Returns:address

* **MyBitFoundation**

  `function` **`MyBitFoundation`**`() public view returns (address)`

  Returns:address

* **accessTokenFee**

  `function` **`accessTokenFee`**`(uint _accessLevelDesired) public view returns (uint)`

  Parameters:`_accessLevelDesired` - uintReturns:uint

* **amountRaised**

  `function` **`amountRaised`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **amountToBeRaised**

  `function` **`amountToBeRaised`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **assetIncome**

  `function` **`assetIncome`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **assetManager**

  `function` **`assetManager`**`(bytes32 _assetID) public view returns (address)`

  Parameters:`_assetID` - bytes32Returns:address

* **assetStaker**

  `function` **`assetStaker`**`(bytes32 _assetID) public view returns (address)`

  Parameters:`_assetID` - bytes32Returns:address

* **contractAddress**

  `function` **`contractAddress`**`(string _name) public view returns (address)`

  Parameters:`_name` - stringReturns:address

* **contractExists**

  `function` **`contractExists`**`(address _contractAddress) public view returns (bool)`

  Parameters:`_contractAddress` - addressReturns:bool

* **depositedMYB**

  `function` **`depositedMYB`**`(address _manager) public view returns (uint)`

  Parameters:`_manager` - addressReturns:uint

* **escrowExpiration**

  `function` **`escrowExpiration`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **escrowedForAsset**

  `function` **`escrowedForAsset`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **escrowedMYB**

  `function` **`escrowedMYB`**`(address _manager) public view returns (uint)`

  Parameters:`_manager` - addressReturns:uint

* **ethUSDPrice**

  `function` **`ethUSDPrice`**`() public view returns (uint)`

  Returns:uint

* **fallback**

  `function (address _database) public`

  Parameters:`_database` - address

* **fallback**

  `function () public`

* **fundingDeadline**

  `function` **`fundingDeadline`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **fundingStage**

  `function` **`fundingStage`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **getAmountOwed**

  `function` **`getAmountOwed`**`(bytes32 _assetID, address _user) public view returns (uint)`

  Parameters:`_assetID` - bytes32`_user` - addressReturns:uint

* **getFunctionAuthorizationHash**

  `function` **`getFunctionAuthorizationHash`**`(address _contractAddress, address _signer, string _functionName, bytes32 _agreedParameter) public pure returns (bytes32)`

  Parameters:`_contractAddress` - address`_signer` - address`_functionName` - string`_agreedParameter` - bytes32Returns:bytes32

* **installerPercentage**

  `function` **`installerPercentage`**`() public view returns (uint)`

  Returns:uint

* **isFunctionAuthorized**

  `function` **`isFunctionAuthorized`**`(bytes32 _functionAuthorizationHash) public view returns (bool)`

  Parameters:`_functionAuthorizationHash` - bytes32Returns:bool

* **isOwner**

  `function` **`isOwner`**`(address _user) public view returns (bool)`

  Parameters:`_user` - addressReturns:bool

* **isPaused**

  `function` **`isPaused`**`(address _contractAddress) public view returns (bool)`

  Parameters:`_contractAddress` - addressReturns:bool

* **lockedForAsset**

  `function` **`lockedForAsset`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **managerIncome**

  `function` **`managerIncome`**`(address _manager) public view returns (uint)`

  Parameters:`_manager` - addressReturns:uint

* **managerPercentage**

  `function` **`managerPercentage`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **myBitFoundationPercentage**

  `function` **`myBitFoundationPercentage`**`() public view returns (uint)`

  Returns:uint

* **mybUSDPrice**

  `function` **`mybUSDPrice`**`() public view returns (uint)`

  Returns:uint

* **ownershipUnits**

  `function` **`ownershipUnits`**`(bytes32 _assetID, address _user) public view returns (uint)`

  Parameters:`_assetID` - bytes32`_user` - addressReturns:uint

* **priceExpiration**

  `function` **`priceExpiration`**`() public view returns (uint)`

  Returns:uint

* **priceTimeToExpiration**

  `function` **`priceTimeToExpiration`**`() public view returns (uint)`

  Returns:uint

* **priceUpdateTimeline**

  `function` **`priceUpdateTimeline`**`() public view returns (uint)`

  Returns:uint

* **stakerIncomeShare**

  `function` **`stakerIncomeShare`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **stakingExpiration**

  `function` **`stakingExpiration`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **totalPaidToFunder**

  `function` **`totalPaidToFunder`**`(bytes32 _assetID, address _funder) public view returns (uint)`

  Parameters:`_assetID` - bytes32`_funder` - addressReturns:uint

* **totalPaidToFunders**

  `function` **`totalPaidToFunders`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **totalReceived**

  `function` **`totalReceived`**`(bytes32 _assetID) public view returns (uint)`

  Parameters:`_assetID` - bytes32Returns:uint

* **userAccess**

  `function` **`userAccess`**`(address _user) public view returns (uint)`

  Parameters:`_user` - addressReturns:uint

