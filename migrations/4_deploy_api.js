const fs = require('fs');

module.exports = function(deployer, network, accounts) {
  if(network != 'coverage' && network != 'development'){
    const API = artifacts.require("./database/API.sol");
    const MultiOwned = artifacts.require("./ownership/MultiOwned.sol");
    const Pausible = artifacts.require("./ownership/Pausible.sol");
    const ContractManager = artifacts.require("./database/ContractManager.sol");

    let api, owned, pausible, cm;
    let contracts = JSON.parse(fs.readFileSync(`networks/${network}/contracts.json`, 'utf8'));

    deployer.then(function(){

      return deployer.deploy(API, contracts['Database']);

    }).then(function(instance) {

      api = instance;
      console.log('API.sol: ' + api.address);
      return MultiOwned.new(contracts['Database'], contracts['Events']);

    }).then(function(instance) {

      owned = instance;
      console.log('MultiOwned.sol: ' + owned.address);
      return Pausible.new(contracts['Database'], contracts['Events']);

    }).then(function(instance) {

      pausible = instance;
      console.log('Pausible.sol: ' + pausible.address);
      return ContractManager.at(contracts['ContractManager']);

    }).then(function(instance) {

      cm = instance;
      console.log('Adding MultiOwned to contract manager...');
      return cm.addContract('MultiOwned', owned.address, {from: accounts[0], gas:200000});

    }).then(function() {

      console.log('Adding Pausible to contract manager...');
      return cm.addContract('Pausible', pausible.address, {from: accounts[0], gas:200000});

    }).then(function() {
      contracts['API'] = api.address;
      contracts['MultiOwned'] = owned.address;
      contracts['Pausible'] = pausible.address;
      let contracts_json = JSON.stringify(contracts, null, 4);

      fs.writeFile(`networks/${network}/contracts.json`, contracts_json, (err) => {
        if (err) throw err;
        console.log('Contracts Saved');
      });

      instanceList = [api, owned, pausible];

      for(let i=0; i<instanceList.length; i++){
        let instanceName = instanceList[i].constructor._json.contractName;
        let instance_json = JSON.stringify(instanceList[i].abi, null, 4);
        fs.writeFile(`networks/${network}/${instanceName}.json`, instance_json, (err) => {
          if (err) throw err;
        });
      }
    });
  }
};
