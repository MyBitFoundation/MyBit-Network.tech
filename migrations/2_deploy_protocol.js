const fs = require('fs');
const bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

module.exports = function(deployer, network, accounts) {
  if(network != 'coverage' && network != 'development'){
    const MyBitToken = artifacts.require("./tokens/erc20/MyBitToken.sol");
    const Database = artifacts.require("./database/Database.sol");
    const Events = artifacts.require("./database/Events.sol");
    const ContractManager = artifacts.require("./database/ContractManager.sol");
    const API = artifacts.require("./database/API.sol");
    const SingleOwned = artifacts.require("./ownership/SingleOwned.sol");
    const Pausible = artifacts.require("./ownership/Pausible.sol");
    const Platform = artifacts.require("./ecosystem/Platform.sol");
    const Operators = artifacts.require("./roles/Operators.sol");
    const AssetManagerEscrow = artifacts.require("./roles/AssetManagerEscrow.sol");
    const AssetManagerFunds = artifacts.require("./roles/AssetManagerFunds.sol");
    const AssetGenerator = artifacts.require("./ecosystem/AssetGenerator.sol");
    const CrowdsaleGeneratorETH = artifacts.require("./crowdsale/CrowdsaleGeneratorETH.sol");
    const CrowdsaleETH = artifacts.require("./crowdsale/CrowdsaleETH.sol");
    const CrowdsaleGeneratorERC20 = artifacts.require("./crowdsale/CrowdsaleGeneratorERC20.sol");
    const CrowdsaleERC20 = artifacts.require("./crowdsale/CrowdsaleERC20.sol");
    const SafeMath = artifacts.require("./math/SafeMath.sol");

    const decimals = bn(1000000000000000000);
    const tokenSupply = bn(100000000).times(decimals);
    const tokenPerAccount = bn(10000).times(decimals);

    let safemath, MyB, db, events, cm, api, owned, pausible, burner, /*access,*/
        platform, operators, escrow, managerFunds, assetGenerator, crowdsaleETH,
        crowdsaleGeneratorETH, crowdsaleERC20, crowdsaleGeneratorERC20, dax;

    let kyber = {
      address: '0x0000000000000000000000000000000000000000'
    };
    if(network == 'mainnet'){
      kyber.address = '0x818E6FECD516Ecc3849DAf6845e3EC868087B755';
    } else if(network == 'ropsten'){
      kyber.address = '0x818E6FECD516Ecc3849DAf6845e3EC868087B755';
    }

    deployer.then(function(){

      return deployer.deploy(SafeMath);

    }).then(function(){

      //Link safemath library
      deployer.link(SafeMath,
                    API,
                    MyBitToken,
                    AssetManagerEscrow,
                    Operators,
                    CrowdsaleETH,
                    CrowdsaleGeneratorETH,
                    CrowdsaleERC20,
                    CrowdsaleGeneratorERC20);

      if(network != 'mainnet'){
        return MyBitToken.new('MyBit', 'MYB', tokenSupply.toString());
      } else {
        return MyBitToken.at('0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc');
      }

    }).then(function(instance) {

      MyB = instance;
      console.log('MyBitToken: ' + MyB.address);

      if(network == 'mybit'){
        //Give 1000 MyB tokens to all accounts
        for(let i=1; i<accounts.length; i++){
          MyB.transfer(accounts[i], tokenPerAccount);
        }
        return Database.new([accounts[0]], true);
      } else if(network == 'ropsten') {
        MyB.transfer('0xBB64ac045539bC0e9FFfd04399347a8459e8282A', tokenSupply.dividedBy(2));
        return Database.new([accounts[0],'0xBB64ac045539bC0e9FFfd04399347a8459e8282A'], true);
      } else {
        return Database.new([accounts[0]], true);
      }

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
      return db.enableContractManagement(cm.address, {from: accounts[0], gas:190000});

    }).then(function() {

      return API.new(db.address);

    }).then(function(instance) {

      api = instance;
      console.log('API.sol: ' + api.address);
      return cm.addContract('API', api.address, {from: accounts[0], gas:190000});

    }).then(function() {

      return SingleOwned.new(db.address, events.address);

    }).then(function(instance) {

      owned = instance;
      console.log('SingleOwned.sol: ' + owned.address);
      return cm.addContract('SingleOwned', owned.address, {from: accounts[0], gas:190000});

    }).then(function() {

      return Pausible.new(db.address, events.address);

    }).then(function(instance) {

      pausible = instance;
      console.log('Pausible.sol: ' + pausible.address);
      return cm.addContract('Pausible', pausible.address, {from: accounts[0], gas:190000});

    }).then(function() {

      return Platform.new(db.address, events.address);

    }).then(function(instance) {

      platform = instance;
      console.log('Platform.sol: ' + platform.address);

      return cm.addContract('Platform', platform.address, {from: accounts[0], gas:190000});

    }).then(function(){

      if(network == 'ropsten') {
        return platform.setPlatformWallet('0xBB64ac045539bC0e9FFfd04399347a8459e8282A', {from: accounts[0], gas:110000});
      } else {
        return platform.setPlatformWallet(accounts[0], {from: accounts[0], gas:110000});
      }

    }).then(function(){

      platform.setPlatformFee('3', {from: accounts[0], gas:110000});
      platform.setPlatformPercentage('1', {from: accounts[0], gas:110000});
      if(network == 'ropsten'){
        //Using Kyber MANA token as platform token to test Kyber functions
        return platform.setPlatformToken('0x72fd6c7c1397040a66f33c2ecc83a0f71ee46d5c', {from: accounts[0], gas:110000});
      } else {
        return platform.setPlatformToken(MyB.address, {from: accounts[0], gas:110000});
      }

    }).then(function() {

      return Operators.new(db.address, events.address);

    }).then(function(instance) {

      operators = instance;
      console.log('Operators.sol: ' + operators.address);
      return cm.addContract('Operators', operators.address, {from: accounts[0], gas:190000});

    }).then(function() {
      if(network == 'ropsten'){
        operators.registerOperator('0x872d95321a62B959dA79A65A934b6208b76fe28E', 'General Bytes', 'Bitcoin ATM', {from: accounts[0], gas:190000});
        operators.registerOperator('0x4DC8346e7c5EFc0db20f7DC8Bb1BacAF182b077d', 'The Collective', 'Co-Working Space', {from: accounts[0], gas:190000});
        operators.registerOperator('0x5a4613a2484122eCe8c8444b7509f053887084Dd', 'Bitmain', 'Ethereum Miner', {from: accounts[0], gas:190000});
        operators.registerOperator('0xaEf462b7D8F3466835d78791ed2cC42c745c3Ab6', 'Pickens', 'Storage Unit', {from: accounts[0], gas:190000});
        operators.registerOperator('0x64ea3C54401baa81736BBef3094Dd27D0D27ca50', 'Arabco', 'Smart Bench', {from: accounts[0], gas:190000});
        return;
      }else if(network == 'development' || network == 'mybit-chain'){
        return operators.registerOperator(accounts[1], 'Test Operator', 'Test Asset Type', {from: accounts[0], gas:190000});
      }else {
        return;
      }
    }).then(function() {

      return AssetManagerEscrow.new(db.address, events.address);

    }).then(function(instance) {

      escrow = instance;
      console.log('AssetManagerEscrow.sol: ' + escrow.address);
      return cm.addContract('AssetManagerEscrow', escrow.address, {from: accounts[0], gas:190000});

    }).then(function() {

      return AssetManagerFunds.new(db.address, events.address);

    }).then(function(instance) {
      managerFunds = instance;
      return cm.addContract('AssetManagerFunds', managerFunds.address, {from: accounts[0], gas:190000});

    }).then(function() {

      return CrowdsaleGeneratorETH.new(db.address, events.address, kyber.address);

    }).then(function(instance) {

      crowdsaleGeneratorETH = instance;
      console.log('CrowdsaleGeneratorETH.sol: ' + crowdsaleGeneratorETH.address);
      return cm.addContract('CrowdsaleGeneratorETH', crowdsaleGeneratorETH.address, {from: accounts[0], gas:190000});

    }).then(function() {

      return CrowdsaleETH.new(db.address, events.address);

    }).then(function(instance) {

      crowdsaleETH = instance;
      console.log('CrowdsaleETH.sol: ' + crowdsaleETH.address);
      return cm.addContract('CrowdsaleETH', crowdsaleETH.address, {from: accounts[0], gas:190000});

    }).then(function() {

      return CrowdsaleGeneratorERC20.new(db.address, events.address, kyber.address);

    }).then(function(instance) {

      crowdsaleGeneratorERC20 = instance;
      console.log('CrowdsaleGeneratorERC20.sol: ' + crowdsaleGeneratorERC20.address);
      return cm.addContract('CrowdsaleGeneratorERC20', crowdsaleGeneratorERC20.address, {from: accounts[0], gas:190000});

    }).then(function() {

      return CrowdsaleERC20.new(db.address, events.address, kyber.address);

    }).then(function(instance) {

      crowdsaleERC20 = instance;
      console.log('CrowdsaleERC20.sol: ' + crowdsaleERC20.address);
      return cm.addContract('CrowdsaleERC20', crowdsaleERC20.address, {from: accounts[0], gas:190000});

    }).then(function() {

      return AssetGenerator.new(db.address, events.address);

    }).then(function(instance) {

      assetGenerator = instance;
      console.log('AssetGenerator.sol: ' + assetGenerator.address);
      return cm.addContract('AssetGenerator', assetGenerator.address, {from: accounts[0], gas:190000});

    }).then(function() {
      //Set owner as contract in contract manager if not mainnet
      console.log(network);
      if(network != 'mainnet'){
        cm.addContract('Owner', accounts[0], {from: accounts[0], gas:190000}); //Give acounts[0] ability to write to database
        //Set burn approval for all accounts
        for (let i = 0; i < accounts.length; i++){
          cm.setContractStatePreferences(true, true, {from: accounts[i], gas:90000});
        }
      }
      return true;

    }).then(function() {
      let addresses = {
        "MyBitToken" : MyB.address,
        "Database" : db.address,
        "Events" : events.address,
        "ContractManager" : cm.address,
        "API" : api.address,
        "SingleOwned" : owned.address,
        "Pausible" : pausible.address,
        "Platform" : platform.address,
        "Operators" : operators.address,
        "AssetManagerEscrow" : escrow.address,
        "AssetManagerFunds" : managerFunds.address,
        "AssetGenerator" : assetGenerator.address,
        "CrowdsaleETH" : crowdsaleETH.address,
        "CrowdsaleGeneratorETH" : crowdsaleGeneratorETH.address,
        "CrowdsaleERC20" : crowdsaleERC20.address,
        "CrowdsaleGeneratorERC20" : crowdsaleGeneratorERC20.address
      }

      let contracts_json = JSON.stringify(addresses, null, 4);
      let accounts_json = JSON.stringify(accounts, null, 4);
      fs.writeFile('networks/' + network + '/contracts.json', contracts_json, (err) => {
        if (err) throw err;
        console.log('Contracts Saved');
      });
      fs.writeFile('networks/' + network + '/accounts.json', accounts_json, (err) => {
        if (err) throw err;
        console.log('Accounts Saved');
      });

      let contracts_js = 'module.exports = ' + contracts_json;
      fs.writeFile('networks/' + network + '/Contracts.js', contracts_js, (err) => {
        if (err) throw err;
        console.log('Contracts Script Saved');
      });

      instanceList = [MyB, db, events, cm, api, owned, pausible,
                      platform, operators, escrow, managerFunds,
                      assetGenerator, crowdsaleETH, crowdsaleGeneratorETH,
                      crowdsaleERC20, crowdsaleGeneratorERC20];

      for(let i=0; i<instanceList.length; i++){
        let instanceName = instanceList[i].constructor._json.contractName;
        let instance_json = JSON.stringify(instanceList[i].abi, null, 4);
        fs.writeFile('networks/' + network + '/' + instanceName + '.json', instance_json, (err) => {
          if (err) throw err;
        });
      }
    });
  }
};
