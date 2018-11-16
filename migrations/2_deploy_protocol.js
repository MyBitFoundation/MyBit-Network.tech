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

    return MyBitToken.new('MyBit', tokenSupply);

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

    return Events.new(db.address);

  }).then(function(instance) {

    events = instance;
    console.log('Events.sol: ' + events.address);

    return ContractManager.new(db.address, events.address);

  }).then(function(instance) {

    cm = instance;
    console.log('ContractManager.sol: ' + cm.address);
    db.enableContractManagement(cm.address);
    // !!Remove for mainnet release!!
    cm.addContract('Owner', accounts[0]); //Give acounts[0] ability to write to database

    return API.new(db.address);

  }).then(function(instance) {

    api = instance;
    console.log('API.sol: ' + api.address);
    cm.addContract('API', api.address);

    return SingleOwned.new(db.address, events.address);

  }).then(function(instance) {

    owned = instance;
    console.log('SingleOwned.sol: ' + owned.address);
    cm.addContract('SingleOwned', owned.address);

    return Pausible.new(db.address, events.address);

  }).then(function(instance) {

    pausible = instance;
    console.log('Pausible.sol: ' + pausible.address);
    cm.addContract('Pausible', pausible.address);

    return PlatformFunds.new(db.address, events.address);

  }).then(function(instance) {

    platform = instance;
    console.log('PlatformFunds.sol: ' + platform.address);
    cm.addContract('PlatformFunds', platform.address);
    platform.setPlatformWallet(accounts[0]);
    platform.setPlatformToken(MyB.address);

    return ERC20Burner.new(db.address, events.address);

  }).then(function(instance) {

    burner = instance;
    console.log('ERC20Burner.sol: ' + burner.address);
    cm.addContract('ERC20Burner', burner.address);
    //Add burn fees for each function
    //burner.setFee("buyAssetOrder(bytes32, uint)", 250); //CrowdsaleERC20
    //burner.setFee("buyAssetOrder(bytes32)", 250); //CrowdsaleETH
    //burner.setFee("createAssetOrderERC20(string, bytes32, uint, uint, uint, address)", 250); //CrowdsaleGeneratorERC20
    //burner.setFee("createAssetOrderETH(string, bytes32, uint, uint, uint)", 250); //CrowdsaleGeneratorETH
    //burner.setFee("buyAsset(bytes32, address, uint, uint)", 250); //AssetExchange
    //burner.setFee("createBuyOrder(bytes32, uint, uint)", 250); //AssetExchange

    return Operators.new(db.address, events.address);

  }).then(function(instance) {

    operators = instance;
    console.log('Operators.sol: ' + operators.address);
    cm.addContract('Operators', operators.address);

    return AccessHierarchy.new(db.address, events.address);

  }).then(function(instance) {

    access = instance;
    console.log('AccessHierarchy.sol: ' + access.address);
    cm.addContract('AccessHierarchy', access.address);

    return AssetGovernance.new(db.address, events.address);

  }).then(function(instance) {

    governance = instance;
    console.log('AssetGovernance.sol: ' + governance.address);
    cm.addContract('AssetGovernance', governance.address);

    return AssetManagerEscrow.new(db.address, events.address, governance.address);

  }).then(function(instance) {

    escrow = instance;
    console.log('AssetManagerEscrow.sol: ' + escrow.address);
    cm.addContract('AssetManagerEscrow', escrow.address);

    return AssetManagerFunds.new(db.address, events.address);

  }).then(function(instance) {
    managerFunds = instance;
    cm.addContract('AssetManagerFunds', managerFunds.address);

    return CrowdsaleGeneratorETH.new(db.address, events.address);

  }).then(function(instance) {

    crowdsaleGeneratorETH = instance;
    console.log('CrowdsaleGeneratorETH.sol: ' + crowdsaleGeneratorETH.address);
    cm.addContract('CrowdsaleGeneratorETH', crowdsaleGeneratorETH.address);

    return CrowdsaleETH.new(db.address, events.address);

  }).then(function(instance) {

    crowdsaleETH = instance;
    console.log('CrowdsaleETH.sol: ' + crowdsaleETH.address);
    cm.addContract('CrowdsaleETH', crowdsaleETH.address);

    return CrowdsaleGeneratorERC20.new(db.address, events.address);

  }).then(function(instance) {

    crowdsaleGeneratorERC20 = instance;
    console.log('CrowdsaleGeneratorERC20.sol: ' + crowdsaleGeneratorERC20.address);
    cm.addContract('CrowdsaleGeneratorERC20', crowdsaleGeneratorERC20.address);


    return CrowdsaleERC20.new(db.address, events.address);

  }).then(function(instance) {

    crowdsaleERC20 = instance;
    console.log('CrowdsaleERC20.sol: ' + crowdsaleERC20.address);
    cm.addContract('CrowdsaleERC20', crowdsaleERC20.address);

    return AssetGenerator.new(db.address, events.address);

  }).then(function(instance) {

    assetGenerator = instance;
    console.log('AssetGenerator.sol: ' + assetGenerator.address);
    cm.addContract('AssetGenerator', assetGenerator.address);

    return AssetExchange.new(db.address, events.address);

  }).then(function(instance) {

    dax = instance;
    console.log('AssetExchange.sol: ' + dax.address);
    cm.addContract('AssetExchange', dax.address);

  }).then(function() {
    //Set burning values

    for (var i = 0; i < accounts.length; i++){
      cm.setContractStatePreferences(true, true, {from: accounts[i]});
    }

    burner.setFee('0x667de2cd', crowdsaleGeneratorETH.address,  250); //CrowdsaleGeneratorETH
    burner.setFee('0xa71d4c6a', crowdsaleETH.address,  250); //CrowdsaleETH
    burner.setFee('0x40aedf24', crowdsaleGeneratorERC20.address,  250);
    burner.setFee('0xc9cd97eb', crowdsaleERC20.address,  250);
    burner.setFee('0xf08fa7b0', dax.address,  250);
    burner.setFee('0xf5e20d6f', dax.address,  250);
    burner.setFee('0xf76c5c55', assetGenerator.address,  250);
    burner.setFee('0x4e38c7f4', assetGenerator.address,  250);

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
