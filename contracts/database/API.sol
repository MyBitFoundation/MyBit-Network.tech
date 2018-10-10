pragma solidity ^0.4.24;

import "../interfaces/DBInterface.sol";

contract API{
  DBInterface private database;

  constructor(address _database)
  public {
    database = DBInterface(_database);
  }

  function getAssetID(address _broker, uint _amountToRaise, bytes32 _operatorID, string _assetURI)
  external
  returns(bytes32) {
    bytes32 assetID = keccak256(abi.encodePacked(_broker, _amountToRaise, _operatorID, _assetURI));
    return assetID;
  }

  function getAssetAddress(bytes32 _assetID)
  external
  returns(address) {
    address assetAddress = database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)));
    return assetAddress;
  }

  function getAssetBroker(bytes32 _assetID)
  external
  returns(address) {
    address brokerAddress = database.addressStorage(keccak256(abi.encodePacked("broker", _assetID)));
    return brokerAddress;
  }

  function getAssetOperator(bytes32 _assetID)
  external
  returns(address) {
    address operatorAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _assetID)));
    return operatorAddress;
  }

  function getAssetFundingDeadline(bytes32 _assetID)
  external
  returns(uint) {
    uint fundingDeadline = database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
    return fundingDeadline;
  }

  function getAssetBrokerFee(bytes32 _assetID)
  external
  returns(uint) {
    uint brokerFee = database.uintStorage(keccak256(abi.encodePacked("brokerFee", _assetID)));
    return brokerFee;
  }

  function getOperatorID(string _operatorURI)
  external
  returns(bytes32) {
    bytes32 operatorID = keccak256(abi.encodePacked(_operatorURI));
    return operatorID;
  }

  function getOperatorAddress(bytes32 _operatorID)
  external
  returns(address) {
    address operatorAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID)));
    return operatorAddress;
  }
}
