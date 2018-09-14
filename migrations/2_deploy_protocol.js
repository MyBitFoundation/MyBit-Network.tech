var Database = artifacts.require("./database/Database.sol");
var ContractManager = artifacts.require("./database/ContractManager.sol");
var CrowdsaleEther = artifacts.require("./crowdsale/CrowdsaleEther.sol");
var SafeMath = artifacts.require("./math/SafeMath.sol");

var safemath, db, cm, crowdsale;
module.exports = function(deployer, network, accounts) {
  deployer.then(function(){

    return deployer.deploy(SafeMath);

  }).then(function(){

    //Link safemath library
    deployer.link(SafeMath, CrowdsaleEther);

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

    return CrowdsaleEther.new(db.address);

  }).then(function(instance) {

    crowdsale = instance;
    console.log('CrowdsaleEther.sol: ' + crowdsale.address);
    cm.addContract('CrowdsaleEther', crowdsale.address);

  });

};
