const fs = require('fs');

module.exports = function(deployer, network, accounts) {
  if(network != 'coverage' && network != 'development'){
    const Platform = artifacts.require("./ecosystem/Platform.sol");
    const MiniMeTokenFactory = artifacts.require("MiniMeTokenFactory.sol");
    const ContractManager = artifacts.require("./database/ContractManager.sol");
    let platform, tokenFactory, cm;
    let contracts = JSON.parse(fs.readFileSync(`networks/${network}/contracts.json`, 'utf8'));

    let FUNDS_WALLET, ASSETS_WALLET
    if(network == 'mainnet' || network == 'mainnet-fork'){
      FUNDS_WALLET = '0x94a9BE81250071A13E42639Cd0621211Ae3028aF' //The wallet that receives fees paid by the investors
      ASSETS_WALLET = '0x94a9BE81250071A13E42639Cd0621211Ae3028aF' //The wallet that receives a percentage of the asset tokens created during crowdsales
    } else if(network == 'ropsten' || network == 'ropsten-fork'){
      FUNDS_WALLET = '0xBB64ac045539bC0e9FFfd04399347a8459e8282A'
      ASSETS_WALLET = '0xBB64ac045539bC0e9FFfd04399347a8459e8282A'
    } else if(network == 'rinkeby' || network == 'rinkeby-fork'){
      FUNDS_WALLET = accounts[0]
      ASSETS_WALLET = accounts[0]
    } else {
      FUNDS_WALLET = accounts[0]
      ASSETS_WALLET = accounts[0]
    }

    let PLATFORM_LISTING_FEE_TOKEN = '0x6b175474e89094c44da98b954eedeac495271d0f';
    if (network == 'ropsten' || network == 'ropsten-fork') {
      PLATFORM_LISTING_FEE_TOKEN = '0xad6d458402f60fd3bd25163575031acdce07538d';
    }
    
    const PLATFORM_LISTING_FEE = web3.utils.toBN(5*1e18) //The fee charged to asset manager when he lists an asset in FEE_TOKEN (DAI) including decimal of 18
    const PLATFORM_FEE = '5' //The fees charged to investors when they contribute to a crowdsale (as a percentage of the total amount invested)
    const PLATFORM_PERCENTAGE = '5' //The percentage of an asset that the platform receives upon successful funding of a crowdsale
    const PLATFORM_TOKEN = contracts['MyBitToken'] //The token used to hold the collateral of the asset manager. It must be burnable and available on Kyber or you may encounter issues on some contracts
    //Collateral requirements:
    //You can set the required collateral for an asset manager. The collateral requirements can change based on the number of successful crowdsales funded.
    //The base collateral is the minimum collateral (as a percent of the total asset) that all asset managers must pay regardless of the number of successful crowdsales
    //The LOW, MID, and HIGH percentages are the percentages in addition to the base, depending on whether the manager has funded less than 5, 10, or 25 crowdsales
    const BASE_COLLATERAL = '10' //The percentage everyone is required to put up as collateral
    const LOW_COLLATERAL = '25' //The extra percent required to put up as collateral for asset manager who have done less than 5 crowdsales
    const MID_COLLATERAL = '15' //The extra percent required to put up as collateral for asset manager who have done 5 to 9 crowdsales
    const HIGH_COLLATERAL = '10' //The extra percent required to put up as collateral for asset manager who have done 10 to 24 crowdsales

    deployer.then(function(){

      return deployer.deploy(Platform, contracts['Database'], contracts['Events']);

    }).then(function(instance) {

      platform = instance;
      console.log('Platform.sol: ' + platform.address);
      return ContractManager.at(contracts['ContractManager']);

    }).then(function(instance) {

      cm = instance;
      console.log('Adding Platform to contract manager...');
      return cm.addContract('Platform', platform.address, {from: accounts[0], gas:400000});

    }).then(function(){

      return MiniMeTokenFactory.new();

    }).then(function(instance){

      tokenFactory = instance;
      console.log('MiniMeTokenFactory.sol: ' + tokenFactory.address);
      return platform.setTokenFactory(tokenFactory.address, {from: accounts[0], gas:300000});

    }).then(function(){
      return platform.setPlatformFundsWallet(FUNDS_WALLET, {from: accounts[0], gas:300000});

    }).then(function(){
      return platform.setPlatformAssetsWallet(ASSETS_WALLET, {from: accounts[0], gas:300000});

    }).then(function(){
      platform.setPlatformListingFeeToken(PLATFORM_LISTING_FEE_TOKEN, {from: accounts[0], gas:300000});
      platform.setPlatformListingFee(PLATFORM_LISTING_FEE, {from: accounts[0], gas:300000});
      platform.setPlatformFee(PLATFORM_FEE, {from: accounts[0], gas:300000});
      platform.setPlatformPercentage(PLATFORM_PERCENTAGE, {from: accounts[0], gas:300000});
      platform.setPlatformToken(PLATFORM_TOKEN, {from: accounts[0], gas:300000});

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
