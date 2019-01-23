const fs = require('fs');

//This script is a template, please copy, rename, and edit//////////////////////

////////////////////////////////////////////////////////////////////////////////
//To upgrade a contract please adjust the following values:
const safeMathBool = true;
const contractName = "CrowdsaleETH";
const UpgradedContract = artifacts.require("./crowdsale/CrowdsaleETH.sol");
////////////////////////////////////////////////////////////////////////////////

//These truffle artifacts are needed
const ContractManager = artifacts.require("./database/ContractManager.sol");
const SafeMath = artifacts.require("./math/SafeMath.sol");

const decimals = 1000000000000000000;



var upgradedContract, cm;

module.exports = function(deployer, network, accounts) {
  //import json files?
  var contracts = JSON.parse(fs.readFileSync("networks/" + network + "/contracts.json"));

  deployer.then(function(){
    if(safeMathBool){
      //Link safemath library
      deployer.link(SafeMath,
                    UpgradedContract);
    }

    return ContractManager.at(contracts.ContractManager);

  }).then(function(instance) {
    //Instantiate ContractManager
    cm = instance;
    //Deploy new contract
    return UpgradedContract.new(contracts.Database, contracts.Events);

  }).then(function(instance) {
    //Instantiate new contract
    upgradedContract = instance;
    //Update contract manager
    cm.updateContract(contractName, upgradedContract.address);
    //Update contracts object
    contracts[contractName] = upgradedContract.address;

    //Rewrite json files
    var contracts_json = JSON.stringify(contracts, null, 4);
    fs.writeFile('networks/' + network + '/contracts.json', contracts_json, (err) => {
      if (err) throw err;
      console.log('Contracts Saved');
    });

    var instance_json = JSON.stringify(upgradedContract.abi, null, 4);
    fs.writeFile('networks/' + network + '/' + contractName + '.json', instance_json, (err) => {
      if (err) throw err;
    });

  });

};
