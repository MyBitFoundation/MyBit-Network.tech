---
id: alphacontracts_interfaces_oraclizeAPI_05_OraclizeI
title: OraclizeI
---

# api\_alphacontracts\_interfaces\_oraclizeAPI\_05\_OraclizeI

## contract OraclizeI

Source: [alphacontracts/interfaces/oraclizeAPI\_05.sol](https://github.com/MyBitFoundation/MyBit-Network.tech//blob/v0.0.0/contracts/alphacontracts/interfaces/oraclizeAPI_05.sol)

## Index

* [getPrice](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_oraclizeAPI_05_OraclizeI.html#getPrice)
* [getPrice](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_oraclizeAPI_05_OraclizeI.html#getPrice)
* [query](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_oraclizeAPI_05_OraclizeI.html#query)
* [query2](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_oraclizeAPI_05_OraclizeI.html#query2)
* [query2\_withGasLimit](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_oraclizeAPI_05_OraclizeI.html#query2_withGasLimit)
* [queryN](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_oraclizeAPI_05_OraclizeI.html#queryN)
* [queryN\_withGasLimit](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_oraclizeAPI_05_OraclizeI.html#queryN_withGasLimit)
* [query\_withGasLimit](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_oraclizeAPI_05_OraclizeI.html#query_withGasLimit)
* [randomDS\_getSessionPubKeyHash](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_oraclizeAPI_05_OraclizeI.html#randomDS_getSessionPubKeyHash)
* [setCustomGasPrice](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_oraclizeAPI_05_OraclizeI.html#setCustomGasPrice)
* [setProofType](https://github.com/MyBitFoundation/MyBit-Network.tech/tree/9bb35f4e2608f44c29e1b398fa64e00a295d0ed2/docgen/docs/alphacontracts_interfaces_oraclizeAPI_05_OraclizeI.html#setProofType)

## Reference

### Functions

* **getPrice**

  `abstract function` **`getPrice`**`(string _datasource, uint gaslimit) public returns (uint)`

  Parameters:`_datasource` - string`gaslimit` - uintReturns:uint

* **getPrice**

  `abstract function` **`getPrice`**`(string _datasource) public returns (uint)`

  Parameters:`_datasource` - stringReturns:uint

* **query**

  `abstract function` **`query`**`(uint _timestamp, string _datasource, string _arg) external payable returns (bytes32)`

  Parameters:`_timestamp` - uint`_datasource` - string`_arg` - stringReturns:bytes32

* **query2**

  `abstract function` **`query2`**`(uint _timestamp, string _datasource, string _arg1, string _arg2) public payable returns (bytes32)`

  Parameters:`_timestamp` - uint`_datasource` - string`_arg1` - string`_arg2` - stringReturns:bytes32

* **query2\_withGasLimit**

  `abstract function` **`query2_withGasLimit`**`(uint _timestamp, string _datasource, string _arg1, string _arg2, uint _gaslimit) external payable returns (bytes32)`

  Parameters:`_timestamp` - uint`_datasource` - string`_arg1` - string`_arg2` - string`_gaslimit` - uintReturns:bytes32

* **queryN**

  `abstract function` **`queryN`**`(uint _timestamp, string _datasource, bytes _argN) public payable returns (bytes32)`

  Parameters:`_timestamp` - uint`_datasource` - string`_argN` - bytesReturns:bytes32

* **queryN\_withGasLimit**

  `abstract function` **`queryN_withGasLimit`**`(uint _timestamp, string _datasource, bytes _argN, uint _gaslimit) external payable returns (bytes32)`

  Parameters:`_timestamp` - uint`_datasource` - string`_argN` - bytes`_gaslimit` - uintReturns:bytes32

* **query\_withGasLimit**

  `abstract function` **`query_withGasLimit`**`(uint _timestamp, string _datasource, string _arg, uint _gaslimit) external payable returns (bytes32)`

  Parameters:`_timestamp` - uint`_datasource` - string`_arg` - string`_gaslimit` - uintReturns:bytes32

* **randomDS\_getSessionPubKeyHash**

  `abstract function` **`randomDS_getSessionPubKeyHash`**`() external view returns (bytes32)`

  Returns:bytes32

* **setCustomGasPrice**

  `abstract function` **`setCustomGasPrice`**`(uint _gasPrice) external`

  Parameters:`_gasPrice` - uint

* **setProofType**

  `abstract function` **`setProofType`**`(byte _proofType) external`

  Parameters:`_proofType` - byte

