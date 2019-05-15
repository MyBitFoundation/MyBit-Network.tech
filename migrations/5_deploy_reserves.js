const fs = require('fs');

module.exports = function(deployer, network, accounts) {
  if(network != 'coverage' && network != 'development'){
    const CrowdsaleReserve = artifacts.require("./database/CrowdsaleReserve.sol");
    const EscrowReserve = artifacts.require("./database/EscrowReserve.sol");
    const AssetManagerEscrow = artifacts.require("./roles/AssetManagerEscrow.sol");
    const AssetManagerFunds = artifacts.require("./roles/AssetManagerFunds.sol");
    const ContractManager = artifacts.require("./database/ContractManager.sol");
    const SafeMath = artifacts.require("./math/SafeMath.sol");

    let crowdsaleReserve, escrowReserve, mangerEscrow, managerFunds, cm;
    let contracts = JSON.parse(fs.readFileSync(`networks/${network}/contracts.json`, 'utf8'));

    deployer.then(function(){

      return deployer.deploy(SafeMath);

    }).then(function() {

      deployer.link(SafeMath, AssetManagerEscrow);
      return CrowdsaleReserve.new(contracts['Database'], contracts['Events']);

    }).then(function(instance) {

      crowdsaleReserve = instance;
      console.log('CrowdsaleReserve.sol: ' + crowdsaleReserve.address);
      return EscrowReserve.new(contracts['Database'], contracts['Events']);

    }).then(function(instance) {

      escrowReserve = instance;
      console.log('EscrowReserve.sol: ' + escrowReserve.address);
      return AssetManagerEscrow.new(contracts['Database'], contracts['Events']);

    }).then(function(instance) {

      managerEscrow = instance;
      console.log('AssetManagerEscrow.sol: ' + managerEscrow.address);
      return AssetManagerFunds.new(contracts['Database'], contracts['Events']);

    }).then(function(instance) {

      managerFunds = instance;
      console.log('AssetManagerFunds.sol: ' + managerFunds.address);
      return ContractManager.at(contracts['ContractManager']);

    }).then(function(instance) {

      cm = instance;
      console.log('Adding CrowdsaleReserve to contract manager...');
      return cm.addContract('CrowdsaleReserve', crowdsaleReserve.address, {from: accounts[0], gas:200000});

    }).then(function() {

      console.log('Adding EscrowReserve to contract manager...');
      return cm.addContract('EscrowReserve', escrowReserve.address, {from: accounts[0], gas:200000});

    }).then(function(instance) {

      console.log('Adding AssetManagerEscrow to contract manager...');
      return cm.addContract('AssetManagerEscrow', managerEscrow.address, {from: accounts[0], gas:200000});

    }).then(function(instance) {

      console.log('Adding AssetManagerFunds to contract manager...');
      return cm.addContract('AssetManagerFunds', managerFunds.address, {from: accounts[0], gas:200000});

    }).then(function() {
      contracts['CrowdsaleReserve'] = crowdsaleReserve.address;
      contracts['EscrowReserve'] = escrowReserve.address;
      contracts['AssetManagerEscrow'] = managerEscrow.address;
      contracts['AssetManagerFunds'] = managerFunds.address;
      let contracts_json = JSON.stringify(contracts, null, 4);

      fs.writeFile(`networks/${network}/contracts.json`, contracts_json, (err) => {
        if (err) throw err;
        console.log('Contracts Saved');
      });

      instanceList = [crowdsaleReserve, escrowReserve, managerEscrow, managerFunds];

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
