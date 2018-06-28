pragma solidity 0.4.24;

import './Database.sol';
import './Asset.sol';
import './AssetCreation.sol';
import './ContractManager.sol';
import './FundingHub.sol';
import './InitialVariables.sol';
import './AssetExchange.sol';
import './MyBitToken.sol';
import './AssetManager.sol';
import './Owned.sol';
import './TokenBurn.sol';
import './TokenFaucet.sol';
import './UserAccess.sol';

contract  Test {

  Database public database;

  bytes32 public assetFunded;   // ID of asset funded by this contract

  constructor(address _database)
  public {
    database = Database(_database);
  }

  function withdrawAndApprove(uint _amount)
  external {
    TokenFaucet(getAddress("TokenFaucet")).withdraw(_amount);
    require(MyBitToken(getAddress("MyBitToken")).approve(getAddress("TokenBurn"), _amount));
  }

  function burnAccessTokens(uint _accessLevel)
  external {
    require(TokenBurn(getAddress("TokenBurn")).burnTokens(_accessLevel));
  }

  function createAsset(bytes32 _assetID, uint _amountToBeRaised, uint _managerPercentage, uint _amountToEscrow, bytes32 _installerID, bytes32 _assetType)
  external {
    AssetCreation(getAddress("AssetCreation")).newAsset(_amountToBeRaised, _managerPercentage, _amountToEscrow, _installerID, _assetType, block.number);
    assetFunded = _assetID;
  }


  function fund(bytes32 _assetID, uint _amount)
  external {
    FundingHub(getAddress("FundingHub")).fund.value(_amount)(_assetID);
  }


  function deposit()
  payable
  public {
    emit logpayment(msg.sender, msg.value, block.timestamp);
  }

  function getBalance()
  public
  view
  returns (uint) {
    return address(this).balance;
  }

  function getAddress(string _name)
  public
  view
  returns (address) {
    return database.addressStorage(keccak256(abi.encodePacked("contract", _name)));
  }

  // Test Re-entrancy here
  function()
  public
  payable {
    FundingHub(msg.sender).refund(assetFunded);
  }


  event logpayment(address _sender, uint _amount, uint _timestamp);
}
