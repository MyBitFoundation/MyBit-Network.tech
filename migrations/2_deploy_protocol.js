var fs = require('fs');

var BurnableToken = artifacts.require("./tokens/erc20/BurnableToken.sol");
var Database = artifacts.require("./database/Database.sol");
var ContractManager = artifacts.require("./database/ContractManager.sol");
var SingleOwned = artifacts.require("./ownership/SingleOwned.sol");
var Pausible = artifacts.require("./ownership/Pausible.sol");
var ERC20Burner = artifacts.require("./ecosystem/ERC20Burner.sol");
var AccessHierarchy = artifacts.require("./access/AccessHierarchy.sol");
var PlatformFunds = artifacts.require("./ecosystem/PlatformFunds.sol");
var Operators = artifacts.require("./ecosystem/Operators.sol");
var BrokerEscrow = artifacts.require("./ecosystem/BrokerEscrow.sol");
var CrowdsaleGeneratorETH = artifacts.require("./crowdsale/CrowdsaleGeneratorETH.sol");
var CrowdsaleETH = artifacts.require("./crowdsale/CrowdsaleETH.sol");
var CrowdsaleGeneratorERC20 = artifacts.require("./crowdsale/CrowdsaleGeneratorERC20.sol");
var CrowdsaleERC20 = artifacts.require("./crowdsale/CrowdsaleERC20.sol");
var AssetExchange = artifacts.require("./ecosystem/AssetExchange.sol");
var SafeMath = artifacts.require("./math/SafeMath.sol");

var decimals = 1000000000000000000;
var tokenSupply = 100000*decimals;
var tokenPerAccount = 100*decimals;

var safemath, MyB, db, cm, owned, pausible, burner, access,
    platform, operators, escrow, crowdsaleETH, crowdsaleGeneratorETH,
    crowdsaleERC20, crowdsaleGeneratorERC20, dax;

module.exports = function(deployer, network, accounts) {
  deployer.then(function(){

    return deployer.deploy(SafeMath);

  }).then(function(){

    //Link safemath library
    deployer.link(SafeMath,
                  BurnableToken,
                  BrokerEscrow,
                  Operators,
                  CrowdsaleETH,
                  CrowdsaleGeneratorETH,
                  CrowdsaleERC20,
                  CrowdsaleGeneratorERC20,
                  AssetExchange);

    return BurnableToken.new('MyBit', tokenSupply);

  }).then(function(instance) {

    MyB = instance;
    console.log('MyBitToken: ' + MyB.address);
    //Give 100 MyB tokens to all accounts
    for(var i=1; i<accounts.length; i++){
      MyB.transfer(accounts[i], tokenPerAccount);
    }

    return Database.new([accounts[0]], true);

  }).then(function(instance) {

    db = instance;
    console.log('Database.sol: ' + db.address);

    return ContractManager.new(db.address);

  }).then(function(instance) {

    cm = instance;
    console.log('ContractManager.sol: ' + cm.address);
    db.enableContractManagement(cm.address);
    cm.addContract('Owner', accounts[0]); //Give acounts[0] ability to write to database

    return SingleOwned.new(db.address);

  }).then(function(instance) {

    owned = instance;
    console.log('SingleOwned.sol: ' + owned.address);
    cm.addContract('SingleOwned', owned.address);

    return Pausible.new(db.address);

  }).then(function(instance) {

    pausible = instance;
    console.log('Pausible.sol: ' + pausible.address);
    cm.addContract('Pausible', pausible.address);

    return PlatformFunds.new(db.address);

  }).then(function(instance) {

    platform = instance;
    console.log('PlatformFunds.sol: ' + platform.address);
    cm.addContract('PlatformFunds', platform.address);
    platform.setPlatformWallet(accounts[0]);
    platform.setPlatformToken(MyB.address);

    return ERC20Burner.new(db.address);

  }).then(function(instance) {

    burner = instance;
    console.log('ERC20Burner.sol: ' + burner.address);
    cm.addContract('ERC20Burner', burner.address);
    //Add burn fees for each function
    burner.setFee("buyAssetOrder(bytes32, uint)", 250); //CrowdsaleERC20
    burner.setFee("buyAssetOrder(bytes32)", 250); //CrowdsaleETH
    burner.setFee("createAssetOrderERC20(string, bytes32, uint, uint, uint, address)", 250); //CrowdsaleGeneratorERC20
    burner.setFee("createAssetOrderETH(string, bytes32, uint, uint, uint)", 250); //CrowdsaleGeneratorETH
    burner.setFee("buyAsset(bytes32, address, uint, uint)", 250); //AssetExchange
    burner.setFee("createBuyOrder(bytes32, uint, uint)", 250); //AssetExchange

    return Operators.new(db.address);

  }).then(function(instance) {

    operators = instance;
    console.log('Operators.sol: ' + operators.address);
    cm.addContract('Operators', operators.address);

    return AccessHierarchy.new(db.address);

  }).then(function(instance) {

    access = instance;
    console.log('AccessHierarchy.sol: ' + access.address);
    cm.addContract('AccessHierarchy', access.address);

    return BrokerEscrow.new(db.address);

  }).then(function(instance) {

    escrow = instance;
    console.log('BrokerEscrow.sol: ' + escrow.address);
    cm.addContract('BrokerEscrow', escrow.address);

    return CrowdsaleGeneratorETH.new(db.address);

  }).then(function(instance) {

    crowdsaleGeneratorETH = instance;
    console.log('CrowdsaleGeneratorETH.sol: ' + crowdsaleGeneratorETH.address);
    cm.addContract('CrowdsaleGeneratorETH', crowdsaleGeneratorETH.address);
    burner.authorizeBurner(crowdsaleGeneratorETH.address);

    return CrowdsaleETH.new(db.address);

  }).then(function(instance) {

    crowdsaleETH = instance;
    console.log('CrowdsaleETH.sol: ' + crowdsaleETH.address);
    cm.addContract('CrowdsaleETH', crowdsaleETH.address);
    burner.authorizeBurner(crowdsaleETH.address);

    return CrowdsaleGeneratorERC20.new(db.address);

  }).then(function(instance) {

    crowdsaleGeneratorERC20 = instance;
    console.log('CrowdsaleGeneratorERC20.sol: ' + crowdsaleGeneratorERC20.address);
    cm.addContract('CrowdsaleGeneratorERC20', crowdsaleGeneratorERC20.address);
    burner.authorizeBurner(crowdsaleGeneratorERC20.address);

    return CrowdsaleERC20.new(db.address);

  }).then(function(instance) {

    crowdsaleERC20 = instance;
    console.log('CrowdsaleERC20.sol: ' + crowdsaleERC20.address);
    cm.addContract('CrowdsaleERC20', crowdsaleERC20.address);
    burner.authorizeBurner(crowdsaleERC20.address);

    return AssetExchange.new(db.address);

  }).then(function(instance) {

    dax = instance;
    console.log('AssetExchange.sol: ' + dax.address);
    cm.addContract('AssetExchange', dax.address);
    burner.authorizeBurner(dax.address);

  }).then(function() {
    var addresses = {
      "MyBit" : MyB.address,
      "ERC20Burner" : burner.address,
      "Database" : db.address,
      "ContractManager" : cm.address,
      "SingleOwned" : owned.address,
      "Pausible" : pausible.address,
      "AccessHierarchy" : access.address,
      "PlatformFunds" : platform.address,
      "Operators" : operators.address,
      "BrokerEscrow" : escrow.address,
      "CrowdsaleETH" : crowdsaleETH.address,
      "CrowdsaleGeneratorETH" : crowdsaleGeneratorETH.address,
      "CrowdsaleERC20" : crowdsaleERC20.address,
      "CrowdsaleGeneratorERC20" : crowdsaleGeneratorERC20.address,
      "AssetExchange" : dax.address
    }

    var addresses_json = JSON.stringify(addresses, null, 4);
    var accounts_json = JSON.stringify(accounts, null, 4);
    fs.writeFile('addresses.json', addresses_json, (err) => {
     if (err) throw err;
     console.log('Contracts Saved');
    });
    fs.writeFile('accounts.json', accounts_json, (err) => {
     if (err) throw err;
     console.log('Accounts Saved');
    });
  });

};
