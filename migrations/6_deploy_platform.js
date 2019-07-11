const fs = require('fs');

module.exports = function(deployer, network, accounts) {
  if(network != 'coverage' && network != 'development'){
    const Platform = artifacts.require("./ecosystem/Platform.sol");
    const MiniMeTokenFactory = artifacts.require("MiniMeTokenFactory.sol");
    const ContractManager = artifacts.require("./database/ContractManager.sol");

    let platform, tokenFactory, cm;
    let contracts = JSON.parse(fs.readFileSync(`networks/${network}/contracts.json`, 'utf8'));

    deployer.then(function(){

      return deployer.deploy(Platform, contracts['Database'], contracts['Events']);

    }).then(function(instance) {

      platform = instance;
      console.log('Platform.sol: ' + platform.address);
      return ContractManager.at(contracts['ContractManager']);

    }).then(function(instance) {

      cm = instance;
      console.log('Adding Platform to contract manager...');
      return cm.addContract('Platform', platform.address, {from: accounts[0], gas:300000});

    }).then(function(){

      return MiniMeTokenFactory.new();

    }).then(function(instance){

      tokenFactory = instance;
      console.log('MiniMeTokenFactory.sol: ' + tokenFactory.address);
      return platform.setTokenFactory(tokenFactory.address, {from: accounts[0], gas:110000});

    }).then(function(){

      if(network == 'ropsten') {
        return platform.setPlatformFundsWallet('0xBB64ac045539bC0e9FFfd04399347a8459e8282A', {from: accounts[0], gas:110000});
      } else {
        return platform.setPlatformFundsWallet(accounts[0], {from: accounts[0], gas:110000});
      }

    }).then(function(){

      if(network == 'ropsten') {
        return platform.setPlatformAssetsWallet('0xBB64ac045539bC0e9FFfd04399347a8459e8282A', {from: accounts[0], gas:110000});
      } else {
        return platform.setPlatformAssetsWallet(accounts[0], {from: accounts[0], gas:110000});
      }

    }).then(function(){

      platform.setPlatformFee('3', {from: accounts[0], gas:110000});
      platform.setPlatformPercentage('1', {from: accounts[0], gas:110000});
      return platform.setPlatformToken(contracts['MyBitToken'], {from: accounts[0], gas:110000});

    }).then(function() {
      contracts['Platform'] = platform.address;
      contracts['MiniMeTokenFactory'] = tokenFactory.address;
      let contracts_json = JSON.stringify(contracts, null, 4);

      fs.writeFile(`networks/${network}/contracts.json`, contracts_json, (err) => {
        if (err) throw err;
        console.log('Contracts Saved');
      });

      instanceList = [platform, tokenFactory];

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
