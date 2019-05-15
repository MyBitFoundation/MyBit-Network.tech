const fs = require('fs');

module.exports = function(deployer, network, accounts) {
  if(network != 'coverage' && network != 'development'){
    const Operators = artifacts.require("./roles/Operators.sol");
    const ContractManager = artifacts.require("./database/ContractManager.sol");
    const SafeMath = artifacts.require("./math/SafeMath.sol");

    let operators, cm;
    let contracts = JSON.parse(fs.readFileSync(`networks/${network}/contracts.json`, 'utf8'));

    deployer.then(function(){

      return deployer.deploy(SafeMath);

    }).then(function() {

      deployer.link(SafeMath, Operators);
      return Operators.new(contracts['Database'], contracts['Events']);

    }).then(function(instance) {

      operators = instance;
      console.log('Operators.sol: ' + operators.address);
      return ContractManager.at(contracts['ContractManager']);

    }).then(function(instance) {

      cm = instance;
      console.log('Adding Operators to contract manager...');
      return cm.addContract('Operators', operators.address, {from: accounts[0], gas:200000});

    }).then(function() {
      if(network == 'ropsten'){
        operators.registerOperator('0x396576A24FDdD9e2AEa0CCfC1aa1F795E8acC98C', 'General Bytes', 'Bitcoin ATM', {from: accounts[0], gas:190000});
        operators.registerOperator('0x794C156557a3742B532427F735A27A874e67c9b9', 'The Collective', 'Co-Working Space', {from: accounts[0], gas:190000});
        operators.registerOperator('0x52C213f43E2227Ee109A2971a31FCdf77A5237ef', 'Bitmain', 'Ethereum Miner', {from: accounts[0], gas:190000});
        operators.registerOperator('0xE52c1E5082e835FaCcE21f5B9bf2E190Fab7617a', 'Pickens', 'Storage Unit', {from: accounts[0], gas:190000});
        operators.registerOperator('0x15c9C83075b7214308fd4526731db4172299E2a4', 'Arabco', 'Smart Bench', {from: accounts[0], gas:190000});
        return;
      }else if(network == 'development' || network == 'mybit-chain'){
        return operators.registerOperator(accounts[1], 'Test Operator', 'Test Asset Type', {from: accounts[0], gas:190000});
      }else {
        operators.registerOperator('0x396576A24FDdD9e2AEa0CCfC1aa1F795E8acC98C', 'General Bytes', 'Bitcoin ATM', {from: accounts[0], gas:190000});
        operators.registerOperator('0x794C156557a3742B532427F735A27A874e67c9b9', 'The Collective', 'Co-Working Space', {from: accounts[0], gas:190000});
        operators.registerOperator('0x52C213f43E2227Ee109A2971a31FCdf77A5237ef', 'Bitmain', 'Ethereum Miner', {from: accounts[0], gas:190000});
        operators.registerOperator('0xE52c1E5082e835FaCcE21f5B9bf2E190Fab7617a', 'Pickens', 'Storage Unit', {from: accounts[0], gas:190000});
        operators.registerOperator('0x15c9C83075b7214308fd4526731db4172299E2a4', 'Arabco', 'Smart Bench', {from: accounts[0], gas:190000});
        console.log('Registered operators')
        return;
      }
    }).then(function() {
      contracts['Operators'] = operators.address;
      let contracts_json = JSON.stringify(contracts, null, 4);

      fs.writeFile(`networks/${network}/contracts.json`, contracts_json, (err) => {
        if (err) throw err;
        console.log('Contracts Saved');
      });

      instanceList = [operators];

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
