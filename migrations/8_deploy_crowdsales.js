const fs = require('fs');

module.exports = function(deployer, network, accounts) {
  if(network != 'coverage' && network != 'development'){
    const Minter = artifacts.require("./database/Minter.sol");
    const CrowdsaleGeneratorETH = artifacts.require("./crowdsale/CrowdsaleGeneratorETH.sol");
    const CrowdsaleETH = artifacts.require("./crowdsale/CrowdsaleETH.sol");
    const CrowdsaleGeneratorERC20 = artifacts.require("./crowdsale/CrowdsaleGeneratorERC20.sol");
    const CrowdsaleERC20 = artifacts.require("./crowdsale/CrowdsaleERC20.sol");
    const AssetGenerator = artifacts.require("./ecosystem/AssetGenerator.sol");
    const ContractManager = artifacts.require("./database/ContractManager.sol");
    const FakeKyber = artifacts.require("./test/FakeKyber.sol");
    const SafeMath = artifacts.require("./math/SafeMath.sol");

    let minter, crowdsaleETH, crowdsaleERC20, crowdsaleGeneratorETH,
        crowdsaleGeneratorERC20, assetGenerator, cm, kyber;

    let contracts = JSON.parse(fs.readFileSync(`networks/${network}/contracts.json`, 'utf8'));

    deployer.then(function(){

      return deployer.deploy(SafeMath);

    }).then(function() {

      deployer.link(SafeMath,
                    CrowdsaleETH,
                    CrowdsaleGeneratorETH,
                    CrowdsaleERC20,
                    CrowdsaleGeneratorERC20);

      return ContractManager.at(contracts['ContractManager']);

    }).then(function(instance) {

      cm = instance;
      if(network == 'mybit'){
        return FakeKyber.new();
      } else {
        return
      }
    }).then(function(instance) {

      if(network == 'mybit'){
        kyber = instance
      } else {
        kyber = {
          address: '0x0000000000000000000000000000000000000000'
        };
        if(network == 'mainnet' || network == 'mainnet-fork'){
          kyber.address = '0x818E6FECD516Ecc3849DAf6845e3EC868087B755';
        } else if(network == 'ropsten' || network == 'ropsten-fork'){
          kyber.address = '0x818E6FECD516Ecc3849DAf6845e3EC868087B755';
        }
      }
      return Minter.new(contracts['Database']);

    }).then(function(instance) {

      minter = instance;
      console.log('Minter.sol: ' + minter.address);
      console.log('Adding Minter to contract manager...');
      return cm.addContract('Minter', minter.address, {from: accounts[0], gas:300000});

    }).then(function() {

      return CrowdsaleGeneratorETH.new(contracts['Database'], contracts['Events'], kyber.address);

    }).then(function(instance) {

      crowdsaleGeneratorETH = instance;
      console.log('CrowdsaleGeneratorETH.sol: ' + crowdsaleGeneratorETH.address);
      return CrowdsaleETH.new(contracts['Database'], contracts['Events']);

    }).then(function(instance) {

      crowdsaleETH = instance;
      console.log('CrowdsaleETH.sol: ' + crowdsaleETH.address);
      return CrowdsaleGeneratorERC20.new(contracts['Database'], contracts['Events'], kyber.address);

    }).then(function(instance) {

      crowdsaleGeneratorERC20 = instance;
      console.log('CrowdsaleGeneratorERC20.sol: ' + crowdsaleGeneratorERC20.address);
      return CrowdsaleERC20.new(contracts['Database'], contracts['Events'], kyber.address);

    }).then(function(instance) {

      crowdsaleERC20 = instance;
      console.log('CrowdsaleERC20.sol: ' + crowdsaleERC20.address);
      return AssetGenerator.new(contracts['Database'], contracts['Events']);

    }).then(function(instance) {

      assetGenerator = instance;
      console.log('AssetGenerator.sol: ' + assetGenerator.address);
      console.log('Adding CrowdsaleGeneratorETH to contract manager...');
      return cm.addContract('CrowdsaleGeneratorETH', crowdsaleGeneratorETH.address, {from: accounts[0], gas:300000});

    }).then(function() {

      console.log('Adding CrowdsaleETH to contract manager...');
      return cm.addContract('CrowdsaleETH', crowdsaleETH.address, {from: accounts[0], gas:300000});

    }).then(function() {

      console.log('Adding CrowdsaleGeneratorERC20 to contract manager...');
      return cm.addContract('CrowdsaleGeneratorERC20', crowdsaleGeneratorERC20.address, {from: accounts[0], gas:300000});

    }).then(function() {

      console.log('Adding CrowdsaleERC20 to contract manager...');
      return cm.addContract('CrowdsaleERC20', crowdsaleERC20.address, {from: accounts[0], gas:300000});

    }).then(function() {

      console.log('Adding AssetGenerator to contract manager...');
      return cm.addContract('AssetGenerator', assetGenerator.address, {from: accounts[0], gas:300000});

    }).then(function() {
      contracts['Minter'] = minter.address;
      contracts['CrowdsaleGeneratorETH'] = crowdsaleGeneratorETH.address;
      contracts['CrowdsaleGeneratorERC20'] = crowdsaleGeneratorERC20.address;
      contracts['CrowdsaleETH'] = crowdsaleETH.address;
      contracts['CrowdsaleERC20'] = crowdsaleERC20.address;
      contracts['AssetGenerator'] = assetGenerator.address;

      let contracts_json = JSON.stringify(contracts, null, 4);
      let accounts_json = JSON.stringify(accounts, null, 4);

      fs.writeFile(`networks/${network}/contracts.json`, contracts_json, (err) => {
        if (err) throw err;
        console.log('Contracts Saved');
      });
      fs.writeFile(`networks/${network}/accounts.json`, accounts_json, (err) => {
        if (err) throw err;
        console.log('Accounts Saved');
      });

      let contracts_js = 'module.exports = ' + contracts_json;
      fs.writeFile('networks/' + network + '/Contracts.js', contracts_js, (err) => {
        if (err) throw err;
        console.log('Contracts Script Saved');
      });

      instanceList = [minter, assetGenerator, crowdsaleETH, crowdsaleGeneratorETH,
                      crowdsaleERC20, crowdsaleGeneratorERC20];

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
