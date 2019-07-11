const fs = require('fs');

module.exports = function(deployer, network, accounts) {
  if(network != 'coverage' && network != 'development'){
    const Database = artifacts.require("./database/Database.sol");
    const ContractManager = artifacts.require("./database/ContractManager.sol");

    let cm, db;
    let contracts = JSON.parse(fs.readFileSync(`networks/${network}/contracts.json`, 'utf8'));

    deployer.then(function(){

      return deployer.deploy(ContractManager, contracts['Database'], contracts['Events']);

    }).then(function(instance) {

      cm = instance;
      console.log('ContractManager.sol: ' + cm.address);
      return Database.at(contracts['Database']);

    }).then(function(instance) {

      db = instance
      console.log('Enabling ContractManager...')
      return db.enableContractManagement(cm.address, {from: accounts[0], gas:300000});

    }).then(function() {
      contracts['ContractManager'] = cm.address;
      let contracts_json = JSON.stringify(contracts, null, 4);

      fs.writeFile(`networks/${network}/contracts.json`, contracts_json, (err) => {
        if (err) throw err;
        console.log('Contracts Saved');
      });

      instanceList = [cm];

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
