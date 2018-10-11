pragma solidity ^0.4.24;

import "../interfaces/DBInterface.sol";
import "../math/SafeMath.sol";

contract API{
  using SafeMath for uint256;

  DBInterface private database;

  constructor(address _database)
  public {
    database = DBInterface(_database);
  }

//Crowdsale + assets
  function getAssetID(address _broker, uint _amountToRaise, bytes32 _operatorID, string _assetURI)
  external
  pure
  returns(bytes32) {
    bytes32 assetID = keccak256(abi.encodePacked(_broker, _amountToRaise, _operatorID, _assetURI));
    return assetID;
  }

  function getAssetID(address _tokenAddress)
  external
  view
  returns(bytes32) {
    bytes32 assetID = database.bytes32Storage(keccak256(abi.encodePacked("assetTokenID", _tokenAddress)));
    return assetID;
  }

  function getAssetAddress(bytes32 _assetID)
  external
  view
  returns(address) {
    address assetAddress = database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)));
    return assetAddress;
  }

  function getAssetFundingToken(bytes32 _assetID)
  external
  view
  returns(address) {
    address fundingTokenAddress = database.addressStorage(keccak256(abi.encodePacked("fundingToken", _assetID)));
    return fundingTokenAddress;
  }

  function getAssetFundingGoal(bytes32 _assetID)
  external
  view
  returns(uint) {
    uint fundingGoal = database.uintStorage(keccak256(abi.encodePacked("amountToRaise", _assetID)));
    return fundingGoal;
  }

  function getAssetFundingDeadline(bytes32 _assetID)
  external
  view
  returns(uint) {
    uint fundingDeadline = database.uintStorage(keccak256(abi.encodePacked("fundingDeadline", _assetID)));
    return fundingDeadline;
  }

  function crowdsaleFinalized(bytes32 _assetID)
  external
  view
  returns(bool) {
    bool status = database.boolStorage(keccak256(abi.encodePacked("crowdsaleFinalized", _assetID)));
    return status;
  }

  function getAssetBroker(bytes32 _assetID)
  external
  view
  returns(address) {
    address brokerAddress = database.addressStorage(keccak256(abi.encodePacked("broker", _assetID)));
    return brokerAddress;
  }

  function getAssetBrokerFee(bytes32 _assetID)
  external
  view
  returns(uint) {
    uint brokerFee = database.uintStorage(keccak256(abi.encodePacked("brokerFee", _assetID)));
    return brokerFee;
  }

  function getBrokerEscrowID(bytes32 _assetID, address _broker)
  external
  pure
  returns(bytes32) {
    bytes32 brokerEscrowID = keccak256(abi.encodePacked(_assetID, _broker));
    return brokerEscrowID;
  }

  function getBrokerEscrowRemaining(bytes32 _brokerEscrowID)
  external
  view
  returns(uint) {
    uint redeemed = getBrokerEscrowRedeemed(_brokerEscrowID);
    uint brokerEscrow = database.uintStorage(keccak256(abi.encodePacked("brokerEscrow", _brokerEscrowID))).sub(redeemed);
    return brokerEscrow;
  }

  function getBrokerEscrowRedeemed(bytes32 _brokerEscrowID)
  public
  view
  returns(uint) {
    uint escrowRedeemed = database.uintStorage(keccak256(abi.encodePacked("escrowRedeemed", _brokerEscrowID)));
    return escrowRedeemed;
  }

  function getAssetOperator(bytes32 _assetID)
  external
  view
  returns(address) {
    address operatorAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _assetID)));
    return operatorAddress;
  }

  function getOperatorID(string _operatorURI)
  external
  pure
  returns(bytes32) {
    bytes32 operatorID = keccak256(abi.encodePacked(_operatorURI));
    return operatorID;
  }

  function getOperatorID(address _operatorAddress)
  external
  view
  returns(bytes32) {
    bytes32 operatorID = database.bytes32Storage(keccak256(abi.encodePacked("operator", _operatorAddress)));
    return operatorID;
  }

  function getOperatorAddress(bytes32 _operatorID)
  external
  view
  returns(address) {
    address operatorAddress = database.addressStorage(keccak256(abi.encodePacked("operator", _operatorID)));
    return operatorAddress;
  }

  function getOrderID(bytes32 _assetID, address _sender, uint _amount, uint _price, bool _buyOrder)
  external
  pure
  returns(bytes32) {
    bytes32 orderID = keccak256(abi.encodePacked(_assetID, _sender, _amount, _price, _buyOrder));
    return orderID;
  }

//Platform functions
  function getPlatformToken()
  external
  view
  returns(address) {
    address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("platformToken")));
    return tokenAddress;
  }

  function getPlatformWallet()
  external
  view
  returns(address) {
    address walletAddress = database.addressStorage(keccak256(abi.encodePacked("platformWallet")));
    return walletAddress;
  }

  function getContractAddress(string _contractName)
  external
  view
  returns(address) {
    address contractAddress = database.addressStorage(keccak256(abi.encodePacked("contract", _contractName)));
    return contractAddress;
  }

  function getCurrentState()
  public
  view
  returns(bytes32) {
    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));
    return currentState;
  }

  function getUserPermission(address _user)
  external
  view
  returns(bool) {
    bool status = database.boolStorage(keccak256(abi.encodePacked(getCurrentState(), _user)));
    return status;
  }

  function getFunctionCost(bytes4 _sig, address _contract)
  external
  view
  returns(uint) {
    uint cost = database.uintStorage(keccak256(abi.encodePacked(_sig, _contract)));
    return cost;
  }

  function contractPaused(address _contract)
  external
  view
  returns(bool) {
    bool status = database.boolStorage(keccak256(abi.encodePacked("paused", _contract)));
    return status;
  }

  function contractOwner(address _account)
  external
  view
  returns(bool) {
    bool status = database.boolStorage(keccak256(abi.encodePacked("owner", _account)));
    return status;
  }

}
