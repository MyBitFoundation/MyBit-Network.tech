const fs = require('fs');
const bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

module.exports = function(deployer, network, accounts) {
  if(network != 'coverage' && network != 'development'){
    const MyBitToken = artifacts.require("./tokens/erc20/MyBitToken.sol");
    const Database = artifacts.require("./database/Database.sol");
    const Events = artifacts.require("./database/Events.sol");
    const SafeMath = artifacts.require("./math/SafeMath.sol");

    const decimals = bn(1000000000000000000);
    const tokenSupply = bn(100000000).times(decimals);
    const tokenPerAccount = bn(10000).times(decimals);

    let safemath, MyB, db, events;

    deployer.then(function(){

      return deployer.deploy(SafeMath);

    }).then(function(){

      //Link safemath library
      deployer.link(SafeMath,
                    MyBitToken);

      if(network == 'mainnet' || network == 'mainnet-fork'){
        return MyBitToken.at('0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc');
      } else if (network == 'ropsten' || network == 'ropsten-fork'){
        return MyBitToken.at('0xC68D7C356e1b725F75cBaf1306A2603abd7157CA');
      } else {
        return MyBitToken.new('MyBit', 'MYB', tokenSupply.toString());
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

      return

    }).then(function() {
      let contracts = {};
      try{
        contracts = JSON.parse(fs.readFileSync(`networks/${network}/contracts.json`, 'utf8'));
      } catch(e){
        console.log(e);
      }

      contracts['MyBitToken'] = MyB.address;
      contracts['Database'] = db.address;
      contracts['Events'] = events.address;

      let contracts_json = JSON.stringify(contracts, null, 4);
      fs.writeFile(`networks/${network}/contracts.json`, contracts_json, (err) => {
        if (err) throw err;
        console.log('Contracts Saved');
      });

      instanceList = [MyB, db, events];

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
