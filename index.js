var fs = require("fs");
var path = require('path');
var appRoot = path.resolve(__dirname);

module.exports = {
  MyBit: function(){
    return JSON.parse(fs.readFileSync(appRoot + '/build/contracts/BurnableToken.json'));
  },

  ERC20Burner: function(){
    return JSON.parse(fs.readFileSync(appRoot + '/build/contracts/ERC20Burner.json'));
  },

  Database: function(){
    var DatabaseJSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/Database.json'));
    return DatabaseJSON;
  },

  ContractManager: function(){
    var ContractManagerJSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/ContractManager.json'));
    return ContractManagerJSON;
  },

  SingleOwned: function(){
    var SingleOwnedJSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/SingleOwned.json'));
    return SingleOwnedJSON;
  },

  Pausible: function(){
    var PausibleJSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/Pausible.json'));
    return PausibleJSON;
  },

  AccessHierarchy: function(){
    var AccessHierarchyJSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/AccessHierarchy.json'));
    return AccessHierarchyJSON;
  },

  PlatformFunds: function(){
    var PlatformFundsJSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/PlatformFunds.json'));
    return PlatformFundsJSON;
  },

  Operators: function(){
    var OperatorsJSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/Operators.json'));
    return OperatorsJSON;
  },

  BrokerEscrow: function(){
    var BrokerEscrowJSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/BrokerEscrow.json'));
    return BrokerEscrowJSON;
  },

  CrowdsaleETH: function(){
    var CrowdsaleETHJSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/CrowdsaleETH.json'));
    return CrowdsaleETHJSON;
  },

  CrowdsaleGeneratorETH: function(){
    var CrowdsaleGeneratorETHJSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/CrowdsaleGeneratorETH.json'));
    return CrowdsaleGeneratorETHJSON;
  },

  CrowdsaleERC20: function(){
    var CrowdsaleERC20JSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/CrowdsaleERC20.json'));
    return CrowdsaleERC20JSON;
  },

  CrowdsaleGeneratorERC20: function(){
    var CrowdsaleGeneratorERC20JSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/CrowdsaleGeneratorERC20.json'));
    return CrowdsaleGeneratorERC20JSON;
  },

  AssetExchange: function(){
    var AssetExchangeJSON = JSON.parse(fs.readFileSync(appRoot + '/build/contracts/AssetExchange.json'));
    return AssetExchangeJSON;
  }
};
