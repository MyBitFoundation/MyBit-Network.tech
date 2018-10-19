---
id: alphacontracts_contracts_HashFunctions
title: HashFunctions
---

# api\_alphacontracts\_contracts\_HashFunctions

## contract HashFunctions

Source: [alphacontracts/contracts/HashFunctions.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/contracts/HashFunctions.sol)

## Index

* [addressHash](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#addressHash)
* [addressUintUint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#addressUintUint)
* [contractHash](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#contractHash)
* [currentTime](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#currentTime)
* [fallback](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html)
* [getAuthorizeHash](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#getAuthorizeHash)
* [getOrderID](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#getOrderID)
* [getStakingID](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#getStakingID)
* [nullAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#nullAddress)
* [nullBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#nullBytes)
* [stringAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#stringAddress)
* [stringBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#stringBytes)
* [stringBytesAddress](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#stringBytesAddress)
* [stringHash](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#stringHash)
* [stringString](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#stringString)
* [stringUint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#stringUint)
* [toBytes](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#toBytes)
* [uintHash](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#uintHash)
* [uintUint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#uintUint)
* [uintUintUint](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_contracts_HashFunctions.html#uintUintUint)

## Reference

### Functions

* **addressHash**

  `function` **`addressHash`**`(address _param) external pure returns (bytes32)`

  Parameters:`_param` - addressReturns:bytes32

* **addressUintUint**

  `function` **`addressUintUint`**`(address _param, uint _paramTwo, uint _paramThree) external pure returns (bytes32)`

  Parameters:`_param` - address`_paramTwo` - uint`_paramThree` - uintReturns:bytes32

* **contractHash**

  `function` **`contractHash`**`(string _name) external pure returns (bytes32)`

  Parameters:`_name` - stringReturns:bytes32

* **currentTime**

  `function` **`currentTime`**`() external view returns (uint)`

  Returns:uint

* **fallback**

  `function () public`

* **getAuthorizeHash**

  `function` **`getAuthorizeHash`**`(address _contractAddress, address _owner, string _fnName, bytes32 _recipient) external pure returns (bytes32)`

  Parameters:`_contractAddress` - address`_owner` - address`_fnName` - string`_recipient` - bytes32Returns:bytes32

* **getOrderID**

  `function` **`getOrderID`**`(bytes _assetID, address _user, uint _amount, uint _price, bool _buyOrder) external pure returns (bytes32)`

  Parameters:`_assetID` - bytes`_user` - address`_amount` - uint`_price` - uint`_buyOrder` - boolReturns:bytes32

* **getStakingID**

  `function` **`getStakingID`**`(address _staker, uint256 _blockNumber, uint256 _amount) external pure returns (bytes32)`

  Parameters:`_staker` - address`_blockNumber` - uint256`_amount` - uint256Returns:bytes32

* **nullAddress**

  `function` **`nullAddress`**`() external pure returns (address)`

  Returns:address

* **nullBytes**

  `function` **`nullBytes`**`() external pure returns (bytes32)`

  Returns:bytes32

* **stringAddress**

  `function` **`stringAddress`**`(string _param, address _paramTwo) external pure returns (bytes32)`

  Parameters:`_param` - string`_paramTwo` - addressReturns:bytes32

* **stringBytes**

  `function` **`stringBytes`**`(string _param, bytes32 _paramTwo) external pure returns (bytes32)`

  Parameters:`_param` - string`_paramTwo` - bytes32Returns:bytes32

* **stringBytesAddress**

  `function` **`stringBytesAddress`**`(string _param, bytes32 _paramTwo, address _paramThree) external pure returns (bytes32)`

  Parameters:`_param` - string`_paramTwo` - bytes32`_paramThree` - addressReturns:bytes32

* **stringHash**

  `function` **`stringHash`**`(string _name) external pure returns (bytes32)`

  Parameters:`_name` - stringReturns:bytes32

* **stringString**

  `function` **`stringString`**`(string _param, string _paramTwo) external pure returns (bytes32)`

  Parameters:`_param` - string`_paramTwo` - stringReturns:bytes32

* **stringUint**

  `function` **`stringUint`**`(string _param, uint _paramTwo) external pure returns (bytes32)`

  Parameters:`_param` - string`_paramTwo` - uintReturns:bytes32

* **toBytes**

  `function` **`toBytes`**`(uint x) external pure returns (bytes)`

  Parameters:`x` - uintReturns:bytes

* **uintHash**

  `function` **`uintHash`**`(uint _param) external pure returns (bytes32)`

  Parameters:`_param` - uintReturns:bytes32

* **uintUint**

  `function` **`uintUint`**`(uint _paramOne, uint _paramTwo) external pure returns (bytes32)`

  Parameters:`_paramOne` - uint`_paramTwo` - uintReturns:bytes32

* **uintUintUint**

  `function` **`uintUintUint`**`(uint _paramOne, uint _paramTwo, uint _paramThree) external pure returns (bytes32)`

  Parameters:`_paramOne` - uint`_paramTwo` - uint`_paramThree` - uintReturns:bytes32

