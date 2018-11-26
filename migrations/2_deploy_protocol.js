var fs = require('fs');

var MyBitToken = artifacts.require("./tokens/erc20/MyBitToken.sol");
var Database = artifacts.require("./database/Database.sol");
var Events = artifacts.require("./database/Events.sol");
var ContractManager = artifacts.require("./database/ContractManager.sol");
var API = artifacts.require("./database/API.sol");
var SingleOwned = artifacts.require("./ownership/SingleOwned.sol");
var Pausible = artifacts.require("./ownership/Pausible.sol");
var ERC20Burner = artifacts.require("./access/ERC20Burner.sol");
var AccessHierarchy = artifacts.require("./access/AccessHierarchy.sol");
var PlatformFunds = artifacts.require("./ecosystem/PlatformFunds.sol");
var Operators = artifacts.require("./roles/Operators.sol");
var AssetGovernance = artifacts.require("./ownership/AssetGovernance.sol");
var AssetManagerEscrow = artifacts.require("./roles/AssetManagerEscrow.sol");
var AssetManagerFunds = artifacts.require("./roles/AssetManagerFunds.sol");
var AssetGenerator = artifacts.require("./ecosystem/AssetGenerator.sol");
var CrowdsaleGeneratorETH = artifacts.require("./crowdsale/CrowdsaleGeneratorETH.sol");
var CrowdsaleETH = artifacts.require("./crowdsale/CrowdsaleETH.sol");
var CrowdsaleGeneratorERC20 = artifacts.require("./crowdsale/CrowdsaleGeneratorERC20.sol");
var CrowdsaleERC20 = artifacts.require("./crowdsale/CrowdsaleERC20.sol");
var AssetExchange = artifacts.require("./ecosystem/AssetExchange.sol");
var SafeMath = artifacts.require("./math/SafeMath.sol");

var decimals = 1000000000000000000;
var tokenSupply = 100000*decimals;
var tokenPerAccount = 100*decimals;

var safemath, MyB, db, events, cm, api, owned, pausible, burner, access,
    platform, operators, escrow, managerFunds, assetGenerator, crowdsaleETH,
    crowdsaleGeneratorETH, crowdsaleERC20, crowdsaleGeneratorERC20, dax,
    governance;

module.exports = function(deployer, network, accounts) {
  deployer.then(function(){

    return deployer.deploy(SafeMath);

  }).then(function(){

    //Link safemath library
    deployer.link(SafeMath,
                  API,
                  MyBitToken,
                  AssetGovernance,
                  AssetManagerEscrow,
                  Operators,
                  CrowdsaleETH,
                  CrowdsaleGeneratorETH,
                  CrowdsaleERC20,
                  CrowdsaleGeneratorERC20,
                  AssetExchange);

    if(network != 'mainnet'){
      return MyBitToken.new('MyBit', tokenSupply);
    } else {
      return MyBitToken.at('0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc');
    }

  }).then(function(instance) {

    MyB = instance;
    console.log('MyBitToken: ' + MyB.address);

    if(network != 'mainnet'){
      //Give 100 MyB tokens to all accounts
      for(var i=1; i<accounts.length; i++){
        MyB.transfer(accounts[i], tokenPerAccount);
      }
    }

    return Database.new([accounts[0]], true);

  }).then(function(instance) {

    db = instance;
    console.log('Database.sol: ' + db.address);

    return Events.new(db.address);

  }).then(function(instance) {

    events = instance;
    console.log('Events.sol: ' + events.address);

    return ContractManager.new(db.address, events.address);

  }).then(function(instance) {

    cm = instance;
    console.log('ContractManager.sol: ' + cm.address);
    return db.enableContractManagement(cm.address);

  }).then(function() {

    return API.new(db.address);

  }).then(function(instance) {

    api = instance;
    console.log('API.sol: ' + api.address);
    return cm.addContract('API', api.address, {gas:190000});

    }).then(function() {

    return SingleOwned.new(db.address, events.address);

  }).then(function(instance) {

    owned = instance;
    console.log('SingleOwned.sol: ' + owned.address);
    return cm.addContract('SingleOwned', owned.address, {gas:190000});

  }).then(function() {

    return Pausible.new(db.address, events.address);

  }).then(function(instance) {

    pausible = instance;
    console.log('Pausible.sol: ' + pausible.address);
    return cm.addContract('Pausible', pausible.address, {gas:190000});

  }).then(function() {

    return PlatformFunds.new(db.address, events.address);

  }).then(function(instance) {

    platform = instance;
    console.log('PlatformFunds.sol: ' + platform.address);

    return cm.addContract('PlatformFunds', platform.address, {gas:190000});

  }).then(function(){

    return platform.setPlatformWallet(accounts[0], {gas:110000});

  }).then(function(){

    return platform.setPlatformToken(MyB.address, {gas:110000});

  }).then(function(){

    return ERC20Burner.new(db.address, events.address);

  }).then(function(instance) {

    burner = instance;
    console.log('ERC20Burner.sol: ' + burner.address);
    return cm.addContract('ERC20Burner', burner.address, {gas:190000});

  }).then(function() {

    return Operators.new(db.address, events.address);

  }).then(function(instance) {

    operators = instance;
    console.log('Operators.sol: ' + operators.address);
    return cm.addContract('Operators', operators.address, {gas:190000});

  }).then(function() {

    return AccessHierarchy.new(db.address, events.address);

  }).then(function(instance) {

    access = instance;
    console.log('AccessHierarchy.sol: ' + access.address);
    return cm.addContract('AccessHierarchy', access.address, {gas:190000});

  }).then(function() {

    return AssetGovernance.new(db.address, events.address);

  }).then(function(instance) {

    governance = instance;
    console.log('AssetGovernance.sol: ' + governance.address);
    return cm.addContract('AssetGovernance', governance.address, {gas:190000});

  }).then(function() {

    return AssetManagerEscrow.new(db.address, events.address, governance.address);

  }).then(function(instance) {

    escrow = instance;
    console.log('AssetManagerEscrow.sol: ' + escrow.address);
    return cm.addContract('AssetManagerEscrow', escrow.address, {gas:190000});

  }).then(function() {

    return AssetManagerFunds.new(db.address, events.address);

  }).then(function(instance) {
    managerFunds = instance;
    return cm.addContract('AssetManagerFunds', managerFunds.address, {gas:190000});

  }).then(function() {

    return CrowdsaleGeneratorETH.new(db.address, events.address);

  }).then(function(instance) {

    crowdsaleGeneratorETH = instance;
    console.log('CrowdsaleGeneratorETH.sol: ' + crowdsaleGeneratorETH.address);
    return cm.addContract('CrowdsaleGeneratorETH', crowdsaleGeneratorETH.address, {gas:190000});

  }).then(function() {

    return CrowdsaleETH.new(db.address, events.address);

  }).then(function(instance) {

    crowdsaleETH = instance;
    console.log('CrowdsaleETH.sol: ' + crowdsaleETH.address);
    return cm.addContract('CrowdsaleETH', crowdsaleETH.address, {gas:190000});

  }).then(function() {

    return CrowdsaleGeneratorERC20.new(db.address, events.address);

  }).then(function(instance) {

    crowdsaleGeneratorERC20 = instance;
    console.log('CrowdsaleGeneratorERC20.sol: ' + crowdsaleGeneratorERC20.address);
    return cm.addContract('CrowdsaleGeneratorERC20', crowdsaleGeneratorERC20.address, {gas:190000});

  }).then(function() {

    return CrowdsaleERC20.new(db.address, events.address);

  }).then(function(instance) {

    crowdsaleERC20 = instance;
    console.log('CrowdsaleERC20.sol: ' + crowdsaleERC20.address);
    return cm.addContract('CrowdsaleERC20', crowdsaleERC20.address, {gas:190000});

  }).then(function() {

    return AssetGenerator.new(db.address, events.address);

  }).then(function(instance) {

    assetGenerator = instance;
    console.log('AssetGenerator.sol: ' + assetGenerator.address);
    return cm.addContract('AssetGenerator', assetGenerator.address, {gas:190000});

  }).then(function() {

    return AssetExchange.new(db.address, events.address);

  }).then(function(instance) {

    dax = instance;
    console.log('AssetExchange.sol: ' + dax.address);
    return cm.addContract('AssetExchange', dax.address, {gas:190000});

  }).then(function() {
    //Set owner as contract in contract manager if not mainnet
    console.log(network);
    if(network != 'mainnet'){
      cm.addContract('Owner', accounts[0], {gas:190000}); //Give acounts[0] ability to write to database
      //Set burn approval for all accounts
      for (var i = 0; i < accounts.length; i++){
        cm.setContractStatePreferences(true, true, {from: accounts[i], gas:90000});
      }
    }

    return true;

  }).then(function() {

    return burner.setFee('0x667de2cd', crowdsaleGeneratorETH.address,  250*decimals, {gas:70000}); //CrowdsaleGeneratorETH

  }).then(function() {

    return burner.setFee('0xa71d4c6a', crowdsaleETH.address,  250*decimals, {gas:70000}); //CrowdsaleETH

  }).then(function() {

    return burner.setFee('0x40aedf24', crowdsaleGeneratorERC20.address,  250*decimals, {gas:70000});

  }).then(function() {

    return burner.setFee('0xc9cd97eb', crowdsaleERC20.address,  250*decimals, {gas:70000});

  }).then(function() {

    return burner.setFee('0xf08fa7b0', dax.address,  250*decimals, {gas:70000});

  }).then(function() {

    return burner.setFee('0xf5e20d6f', dax.address,  250*decimals, {gas:70000});

  }).then(function() {

    return burner.setFee('0xf76c5c55', assetGenerator.address,  250*decimals, {gas:70000});

  }).then(function() {

    return burner.setFee('0x4e38c7f4', assetGenerator.address,  250*decimals, {gas:70000});

  }).then(function() {
    var addresses = {
      "MyBitToken" : MyB.address,
      "ERC20Burner" : burner.address,
      "Database" : db.address,
      "Events" : events.address,
      "ContractManager" : cm.address,
      "API" : api.address,
      "SingleOwned" : owned.address,
      "Pausible" : pausible.address,
      "AccessHierarchy" : access.address,
      "PlatformFunds" : platform.address,
      "Operators" : operators.address,
      "AssetGovernance" : governance.address,
      "AssetManagerEscrow" : escrow.address,
      "AssetManagerFunds" : managerFunds.address,
      "AssetGenerator" : assetGenerator.address,
      "CrowdsaleETH" : crowdsaleETH.address,
      "CrowdsaleGeneratorETH" : crowdsaleGeneratorETH.address,
      "CrowdsaleERC20" : crowdsaleERC20.address,
      "CrowdsaleGeneratorERC20" : crowdsaleGeneratorERC20.address,
      "AssetExchange" : dax.address
    }

    var contracts_json = JSON.stringify(addresses, null, 4);
    var accounts_json = JSON.stringify(accounts, null, 4);
    fs.writeFile('networks/' + network + '/contracts.json', contracts_json, (err) => {
      if (err) throw err;
      console.log('Contracts Saved');
    });
    fs.writeFile('networks/' + network + '/accounts.json', accounts_json, (err) => {
      if (err) throw err;
      console.log('Accounts Saved');
    });

    instanceList = [MyB, burner, db, events, cm, api, owned, pausible, access,
                    platform, operators, governance, escrow, managerFunds,
                    assetGenerator, crowdsaleETH, crowdsaleGeneratorETH,
                    crowdsaleERC20, crowdsaleGeneratorERC20, dax];

    for(var i=0; i<instanceList.length; i++){
      var instanceName = instanceList[i].constructor._json.contractName;
      var instance_json = JSON.stringify(instanceList[i].abi, null, 4);
      fs.writeFile('networks/' + network + '/' + instanceName + '.json', instance_json, (err) => {
        if (err) throw err;
      });
    }
  });

};
