var fs = require('fs');

var Database = artifacts.require("./database/Database.sol");
var ContractManager = artifacts.require("./database/ContractManager.sol");
var CrowdsaleGeneratorETH = artifacts.require("./crowdsale/CrowdsaleGeneratorETH.sol");
var CrowdsaleETH = artifacts.require("./crowdsale/CrowdsaleETH.sol");
var SafeMath = artifacts.require("./math/SafeMath.sol");

var safemath, db, cm, crowdsaleETH, crowdsaleGeneratorETH;
module.exports = function(deployer, network, accounts) {
  deployer.then(function(){

    return deployer.deploy(SafeMath);

  }).then(function(){

    //Link safemath library
    deployer.link(SafeMath, CrowdsaleETH, CrowdsaleGeneratorETH);

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

    return CrowdsaleGeneratorETH.new(db.address);

  }).then(function(instance) {

    crowdsaleGeneratorETH = instance;
    console.log('CrowdsaleGeneratorETH.sol: ' + crowdsaleGeneratorETH.address);
    cm.addContract('CrowdsaleGeneratorETH', crowdsaleGeneratorETH.address);

    return CrowdsaleETH.new(db.address);

  }).then(function(instance) {

    crowdsaleETH = instance;
    console.log('CrowdsaleETH.sol: ' + crowdsaleETH.address);
    cm.addContract('CrowdsaleETH', crowdsaleETH.address);

  }).then(function() {
    var addresses = {
      "Database" : db.address,
      "ContractManager" : cm.address,
      "CrowdsaleETH" : crowdsaleETH.address,
      "CrowdsaleGeneratorETH" : crowdsaleGeneratorETH.address
    }
    var json = JSON.stringify(addresses);
    fs.writeFile('addresses.json', json, (err) => {
     if (err) throw err;
     console.log('Saved');
    });
  });

};
