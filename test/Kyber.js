//MyBit
const AssetToken = artifacts.require("DividendToken.sol");
const Minter = artifacts.require("./database/Minter.sol");
const CrowdsaleGeneratorERC20 = artifacts.require("CrowdsaleGeneratorERC20.sol");
const CrowdsaleERC20 = artifacts.require("CrowdsaleERC20.sol");
const CrowdsaleGeneratorETH = artifacts.require("CrowdsaleGeneratorETH.sol");
const CrowdsaleETH = artifacts.require("CrowdsaleETH.sol");
const CrowdsaleReserve = artifacts.require("CrowdsaleReserve.sol");
const Database = artifacts.require("Database.sol");
const Events = artifacts.require("Events.sol");
const ContractManager = artifacts.require("ContractManager.sol");
const AssetManagerFunds = artifacts.require("AssetManagerFunds.sol");
const AssetManagerEscrow = artifacts.require("AssetManagerEscrow.sol");
const EscrowReserve = artifacts.require("EscrowReserve.sol");
const Operators = artifacts.require("Operators.sol");
const Platform = artifacts.require("Platform.sol");
const API = artifacts.require("API.sol");
const PlatformDistribution = artifacts.require("PlatformDistribution.sol");

const TestToken = artifacts.require("./TestToken.sol");
const Reserve = artifacts.require("./KyberReserve.sol");
const Network = artifacts.require("./KyberNetwork.sol");
const NetworkProxy = artifacts.require("./KyberNetworkProxy.sol");
const ConversionRates = artifacts.require("./ConversionRates.sol");
const Bank   = artifacts.require("./MockCentralBank.sol");
const Whitelist  = artifacts.require("./WhiteList.sol");
const FeeBurner = artifacts.require("./FeeBurner.sol");
const ExpectedRate = artifacts.require("./ExpectedRate.sol");
const Wrapper   = artifacts.require("./Wrapper.sol");
const CentralizedExchange = artifacts.require("./MockExchange.sol");
const BigNumber = require('bignumber.js');
BigNumber.config({ EXPONENTIAL_AT: 80 });

const ETH = new BigNumber(10**18);
const tokenPerAccount = new BigNumber(1000).times(ETH);

let assetToken, minter, crowdsaleReserve, crowdsaleGenERC20, crowdsaleERC20, crowdsaleGenETH,
    crowdsaleETH, db, events, cm, assetManagerFunds, escrowReserve, assetManagerEscrow,
    operators, platform, api, platformDistribution;

let operatorID, assetURI, assetAddress;

var tokenSymbol = [];//["OMG", "DGD", "CVC", "FUN", "MCO", "GNT", "ADX", "PAY",
                   //"BAT", "KNC", "EOS", "LINK"];
var tokenName = [];//[ "OmiseGO", "Digix", "Civic", "FunFair", "Monaco", "Golem",
//"Adex", "TenX", "BasicAttention", "KyberNetwork", "Eos", "ChainLink" ];

var internalUseTokens = []
var listedTokens = []

var tokenDecimals = [];//[18,9,8,8,8,18,4,18,18,18,18,18]

var tokenInitialReserveBalance = [];

var reserveInitialEth;

var tokenInstance = [];
var kncInstance;
var kgtInstance;
const kgtName = "Kyber genesis token";
const kgtSymbol = "KGT";
const kgtDec = 0;


var conversionRate = (((new BigNumber(10)).pow(18)).times(2));
var counterConversionRate = (((new BigNumber(10)).pow(18)).div(2));

const expBlock = 10**10;
const validBlockDuration = 256;
var maxGas;
const precisionUnits = new BigNumber(10 ** 18);
var tokenOwner;

var networkProxy;
var networkProxyOwner;

var network;
var networkOwner;

var reserve;
var reserveOwner;

var ethAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
var ethChecksum = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
var emptyAddress = "0x0000000000000000000000000000000000000000";

var exchanges = [];// ["Bittrex", "Liqui", "Huobi", "Binance", "Bitfinex"];
var exchangesInstance = [];
var exchangeDepositAddresses = [];
var supportedTokens = {}

var bank;
var wrapper;

var whitelist;
var conversionRates;
var feeBurner;
var expectedRate;

var nam;// = "0xc6bc2f7b73da733366985f5f5b485262b45a77a3";
var victor_1;// = "0x760d30979eb313a2d23c53e4fb55986183b0ffd9";
var victor_2;// = "0xEDd15B61505180B3A0C25B193dF27eF10214D851";
var victor_3;// = "0x13922f1857c0677f79e4bbb16ad2c49faa620829";
var duc;// = "0x25B8b1F2c21A70B294231C007e834Ad2de04f51F";


var outputFileName;

////////////////////////////////////////////////////////////////////////////////

var getNetwork = async function(){
  var id = await web3.eth.net.getId();
  console.log('Nerwork ID: ', id);
  if(id >= 1500000000000){
    return "testrpc";
  } else if(id == 5777) {
    return "ganache";
  } else if( id == 17 || id == 4447) {
    return "dev";
  } else if( id == 42 ) {
    return "kovan";
  } else if( id == 3 ) {
    return "ropsten";
  } else {
    return "unknown";
  }
};

var deployTokens = function( owner ){
  return new Promise(function (fulfill, reject){

      var inputs = [];

      for (var i = 0 ; i < tokenSymbol.length ; i++ ) {
          inputs.push(i);
      }

      //deploy all tokens from json
      return inputs.reduce(function (promise, item) {
        return promise.then(function () {
           var symbol = tokenSymbol[item];
           var name = tokenName[item];
           var decimals = tokenDecimals[item];
           return TestToken.new(name, symbol, decimals, {from:owner});
        }).then(function(instance){
           if( tokenSymbol[item] === "KNC" ) {
             console.log("found knc");
             kncInstance = instance;
           }
           tokenInstance.push(instance);
        })
      }, Promise.resolve()).then(function(){
          return TestToken.new(kgtName, kgtSymbol, kgtDec).then(function (instance) {
            kgtInstance = instance;
          }).then(function(){
            fulfill(true);
          });
      }).catch(function(err){
          reject(err);
      });
  });
};

////////////////////////////////////////////////////////////////////////////////

var transferFundsToBank = function( owner, bankAddress, amount ) {
  return new Promise(function (fulfill, reject){

      var inputs = [];

      for (var i = 0 ; i < tokenInstance.length ; i++ ) {
          inputs.push(tokenInstance[i]);
      }

     return inputs.reduce(function (promise, item) {
      return promise.then(function () {
          return item.transfer(bankAddress, amount, {from:owner});
      });

      }, Promise.resolve()).then(function(){
          fulfill(true);
      }).catch(function(err){
          reject(err);
      });
  });
};

var getBlockNumberWithPromise = function( ) {
    return new Promise(function(fulfill, reject){
            web3.eth.getBlockNumber(function(error, result){
            if( error ) {
                return reject(error);
            }
            else {
                return fulfill(result);
            }
        });
    });
};

////////////////////////////////////////////////////////////////////////////////

var depositTokensToReserve = function( owner, reserveInstance ) {
  return new Promise(function (fulfill, reject){

      var inputs = [];

      for (var i = 0 ; i < tokenInstance.length ; i++ ) {
          inputs.push(i);
      }

      var actualAmount;
     return inputs.reduce(function (promise, item) {
       var token = tokenInstance[item];
       var amount = tokenInitialReserveBalance[item];
      return promise.then(function () {
          return token.decimals();
      }).then(function(decimals){
          actualAmount = new BigNumber(amount).times(new BigNumber(10).pow(decimals));
          //console.log(token.address);
          //console.log(actualAmount.toString());
          return token.transfer(reserveInstance.address, actualAmount, {from:owner});
          //return token.approve(reserveInstance.address, actualAmount, {from:owner});
      //}).then(function(){
        //return reserve.depositToken(token.address, actualAmount, {from:owner})
      }).then(function(){
        // send some tokens to duc
        return token.transfer(duc, actualAmount,{from:owner});
      });

      }, Promise.resolve()).then(function(){
          fulfill(true);
      }).catch(function(err){
          reject(err);
      });
  });
};

////////////////////////////////////////////////////////////////////////////////

var createExchanges = function( owner, bankAddress ) {
    return new Promise(function (fulfill, reject){

        var inputs = [];

        for (var i = 0 ; i < exchanges.length ; i++ ) {
          inputs.push(exchanges[i]);
        }

        return inputs.reduce(function (promise, item) {
            return promise.then(function () {
                return CentralizedExchange.new(item, bankAddress, {from:owner});
            }).then(function(instance){
                exchangesInstance.push(instance);
                return addDepositAddressToExchange(instance, owner, item);
            });
        }, Promise.resolve()).then(function(){
            fulfill(true);
        }).catch(function(err){
            reject(err);
        });
    });
};

/////////////////////////////////////////////////////////////////


var addDepositAddressToExchange = function( exchange, owner, exchangeName ) {
    return new Promise(function (fulfill, reject){

        var tokens = [];
        var depositAddresses = {}; //dict (JS object) of deposit address per token for this exchange

        //create array of tokens
        for (var i = 0 ; i < tokenInstance.length ; i++ ) {
            if (supportedTokens[exchangeName].indexOf(tokenSymbol[i].toLowerCase()) >= 0) {
              tokens.push(i);
            }
        }

        return tokens.reduce(function (promise, item) {
            return promise.then(function () {
                return exchange.addMockDepositAddress( tokenInstance[item].address, {from:owner});
            }).then(function(){
                return exchange.tokenDepositAddresses(tokenInstance[item].address)
            }).then (function (mockDepositAddress){
                depositAddresses[tokenSymbol[item]] = mockDepositAddress;
                return reserve.approveWithdrawAddress(tokenInstance[item].address, mockDepositAddress, true);
            });
        }, Promise.resolve()).then(function(){
            return exchange.addMockDepositAddress(ethAddress, {from:owner});
        }).then(function(){
            return exchange.tokenDepositAddresses(ethAddress);
        }).then(function(depositAddress) {
            depositAddresses["ETH"] = depositAddress;
            exchangeDepositAddresses.push(depositAddresses);
	          return reserve.approveWithdrawAddress(ethAddress, depositAddress, true);
        }).then(function(){
            fulfill(true);
        }).catch(function(err){
          reject(err);
        });
    });
};

////////////////////////////////////////////////////////////////////////////////

var approveIntermediateAccount = function( addr ) {
  return new Promise(function (fulfill, reject){

      var tokens = [];

      //create array of tokens
      for (var i = 0 ; i < tokenInstance.length ; i++ ) {
          tokens.push(i);
      }

      return tokens.reduce(function (promise, item) {
          return promise.then(function () {
              return reserve.approveWithdrawAddress(tokenInstance[item].address, addr, true);
          });
      }, Promise.resolve()).then(function(){
          return reserve.approveWithdrawAddress(ethAddress, addr, true);
      }).then(function(){
          fulfill(true);
      }).catch(function(err){
        reject(err);
      });
  });
};

////////////////////////////////////////////////////////////////////////////////

var transferOwnershipInExchangesAndBank = function( owner, newOwners ) {
  return new Promise(function (fulfill, reject){

      var inputs = [];
      function OwnerAndExchange( owner, exchangesInstance) {
        this.owner = owner;
        this.exchangesInstance = exchangesInstance;
      }

      for (var i = 0 ; i < exchanges.length ; i++ ) {
        for( var j = 0 ; j < newOwners.length ; j++ ) {
          inputs.push(new OwnerAndExchange(newOwners[j],exchangesInstance[i]));
        }
      }

     return inputs.reduce(function (promise, item) {
      return promise.then(function () {
          return item.exchangesInstance.addOwner(item.owner);
      }).then(function(){
        return bank.addOwner(item.owner);
      });

      }, Promise.resolve()).then(function(){
          fulfill(true);
      }).catch(function(err){
          reject(err);
      });
  });
};

////////////////////////////////////////////////////////////////////////////////

var listTokens = function( owner, reserve, network, expBlock, rate, convRate ) {
  return new Promise(function (fulfill, reject){

      var inputs = [];

      for (var i = 0 ; i < tokenInstance.length ; i++ ) {
          inputs.push(tokenInstance[i]);
      }

     return inputs.reduce(function (promise, item) {
      var tokenAddress = item.address;
      return promise.then(function () {
          // list (eth=>token) in reserve
          // list (token=>eth) in reserve
          // list (eth=>token) in network
          // list (token=>eth) in network
          return conversionRates.addToken( tokenAddress );
      }).then(function(){
        return item.decimals();
      }).then(function(decimals){
          return conversionRates.setTokenControlInfo( tokenAddress,
                                              BigNumber(10**(decimals-2)).toString(),
                                              BigNumber(10 ** decimals).times(50000).toString(),
                                              BigNumber(10 ** decimals).times(1000000).toString() );
      }).then(function(){
          return conversionRates.enableTokenTrade( tokenAddress );
      }).then(function(){
          var x = [0];
          var y = [0];
          return conversionRates.setQtyStepFunction(tokenAddress,
                                            x,
                                            y,
                                            x,
                                            y );
      }).then(function(){
        var x = [0];
        var y = [0];
        return conversionRates.setImbalanceStepFunction(tokenAddress,
                                          x,
                                          y,
                                          x,
                                          y );
      }).then(function(){
        return conversionRates.setBaseRate( [tokenAddress],
                                     [convRate],
                                     [rate],
                                     ["0x000000"],
                                     ["0x000000"],
                                     0,
                                     [0] );
      }).then(function(){
        return network.listPairForReserve(reserve.address,
                                          tokenAddress,
                                          true,
                                          true,
                                          true,
                                          {from:networkOwner});
      });

      }, Promise.resolve()).then(function(){
          fulfill(true);
      }).catch(function(err){
          reject(err);
      });
  });
};

////////////////////////////////////////////////////////////////////////////////

var sendEtherWithPromise = function( sender, recv, amount ) {
    return new Promise(function(fulfill, reject){
            web3.eth.sendTransaction({to: recv, from: sender, value: amount}, function(error, result){
            if( error ) {
                return reject(error);
            }
            else {
                return fulfill(true);
            }
        });
    });
};

////////////////////////////////////////////////////////////////////////////////

contract('Kyber', function(accounts) {

  beforeEach(function(done){
    done();
  });
  afterEach(function(done){
    done();
  });

  it("setup parameters", async function() {
    let networkID = await getNetwork();
    if(networkID == "testrpc"){
      maxGas = '0xfffffffffff';
    } else {
      maxGas = 4612388;
    }
    // tokens
    var tokenInfo = {
      "OMG": {
        "name": "OmiseGO",
        "decimals": 18,
        "reserve balance": 1062.4452
      },
      "KNC": {
        "name": "KyberNetwork",
        "decimals": 18,
        "reserve balance": 3291.3726
      },
      "EOS": {
        "name": "Eos",
        "decimals": 18,
        "reserve balance": 1890.2334
      },
      "SNT": {
        "name": "STATUS",
        "decimals": 18,
        "reserve balance": 74100.06
      },
      "ELF": {
        "name": "AELF",
        "decimals": 18,
        "reserve balance": 9381.696
      },
      "POWR": {
        "name": "Power Ledger",
        "decimals": 6,
        "reserve balance": 21139.446
      },
      "MANA": {
        "name": "MANA",
        "decimals": 18,
        "reserve balance": 83010.6
      },
      "BAT": {
        "name": "Basic Attention Token",
        "decimals": 18,
        "reserve balance": 24832.062
      },
      "REQ": {
        "name": "Request",
        "decimals": 18,
        "reserve balance": 57109.62
      },
      "GTO": {
        "name": "Gifto",
        "decimals": 5,
        "reserve balance": 36007.17
      },
      "RDN": {
        "name": "Raiden",
        "decimals": 18,
        "reserve balance": 3595.0146
      },
      "APPC": {
        "name": "AppCoins",
        "decimals": 18,
        "reserve balance": 14453.868
      },
      "ENG": {
        "name": "Enigma",
        "decimals": 8,
        "reserve balance": 4226.7708
      },
      "SALT": {
        "name": "Salt",
        "decimals": 8,
        "reserve balance": 2918.7378
      },
      "BQX": {
        "name": "Ethos",
        "decimals": 8
      },
      "ADX": {
        "name": "AdEx",
        "decimals": 4
      },
      "AST": {
        "name": "AirSwap",
        "decimals": 4
      },
      "RCN": {
        "name": "RipioCreditNetwork",
        "decimals": 18
      },
      "ZIL": {
        "name": "Zilliqa",
        "decimals": 12
      },
      "LINK": {
        "name": "ChainLink",
        "decimals": 18
      },
      "DAI": {
        "name": "DAI",
        "decimals": 18
      },
      "DGX": {
        "name": "Digix Gold",
        "decimals": 9
      }
    };
    Object.keys(tokenInfo).forEach(function(key) {
      var val = tokenInfo[key];
      var symbol = key;
      var name = val["name"];
      var decimals = val["decimals"];
      var initialBalance = val["reserve balance"];
      if( initialBalance === undefined ) {
        initialBalance = 1000000;
      }

      tokenSymbol.push(key);
      tokenName.push(name);
      tokenDecimals.push(decimals);
      tokenInitialReserveBalance.push(initialBalance);
    });

    internalUseTokens = ["omg","knc","eos","snt","elf","powr","mana","bat","req","gto","rdn",
                        "appc","eng","salt","bqx","ast","zil","link","dgx"]
    listedTokens = ["omg","knc","eos","snt","elf","powr","mana","bat","req","gto","rdn","appc",
                   "eng","salt","bqx","adx","ast","rcn","zil","link","dai"]

    exchanges = ["bittrex","liqui","huobi","binance","bitfinex"]
    supportedTokens = {
      "bittrex": [
        "omg",
        "snt",
        "powr",
        "mana",
        "bat",
        "eng",
        "salt"
      ],
      "liqui": [
        "omg",
        "knc",
        "eos",
        "snt",
        "bat",
        "eng"
      ],
      "huobi": [
        "omg",
        "eos",
        "elf",
        "powr",
        "mana",
        "bat",
        "req",
        "rdn",
        "appc",
        "eng",
        "salt"
      ],
      "binance": [
        "omg",
        "knc",
        "eos",
        "snt",
        "elf",
        "powr",
        "mana",
        "bat",
        "req",
        "gto",
        "rdn",
        "appc",
        "eng",
        "salt",
        "bqx"
      ],
      "bitfinex": [
        "omg",
        "eos",
        "snt",
        "bat"
      ]
    }

    victor_1 = "0x760d30979eb313a2d23c53e4fb55986183b0ffd9";
    victor_2 = "0xEDd15B61505180B3A0C25B193dF27eF10214D851";
    victor_3 = "0x13922f1857c0677f79e4bbb16ad2c49faa620829";
    nam = [
      "0x385baa4d78c91e5ce6ccafab9e96fdc83ea4427d",
      "0x1d217486cdd98c6f565ef567cba26dc331660fb6",
      "0x2ebac32cb5b6c1eebabe59e288d120fb3422cef7",
      "0x7b29938afb14cd0eaa5abf2519c9e7c052f6a278",
      "0x9ca354a72d66127875db293765179a767315058e",
      "0xc6bc2f7b73da733366985f5f5b485262b45a77a3"
    ];
    duc = "0x25B8b1F2c21A70B294231C007e834Ad2de04f51F";


    // reserve initial ether
    reserveInitialEth = 16;
  });


  it("create tokens", function() {
//    console.log(accounts[0]);
    this.timeout(31000000);
    tokenOwner = accounts[0];
    return deployTokens(tokenOwner);
  });

  it("create bank and transfer funds", function() {
    this.timeout(31000000);
    var amount = new BigNumber(10**58);
    return Bank.new().then(function(instance){
        bank = instance;
        return transferFundsToBank(tokenOwner, bank.address, amount.toString());
        // TODO - deposit ether
    }).then(function(){
      return bank.depositEther({value:10}); // deposit 10 wei
    }).then(function(){
      var bankInitialEth = new BigNumber(10**18).times(10);
      console.log("depositing " + bankInitialEth.toString() + " ether to bank");
      return sendEtherWithPromise(accounts[0],bank.address,bankInitialEth);
    });
  });

  it("create whitelist", function() {
    this.timeout(31000000);
    return Whitelist.new(accounts[0], kgtInstance.address).then(function(instance){
        whitelist = instance;
        return whitelist.addOperator(accounts[0]);
    }).then(function(){
        return whitelist.setCategoryCap(0,5000);
    }).then(function(){
        return whitelist.setCategoryCap(1,0);
    }).then(function(){
        return whitelist.setCategoryCap(2,1000);
    }).then(function(){
        return whitelist.setUserCategory("0x9f1a678b0079773b5c4f5aa8573132d2b8bcb1e7",1);
    }).then(function(){
        //transfer kgt to this user to it will be treated as category 2.
        kgtInstance.transfer("0x089bAa07Eb9097031bABC99DBa4222D85521883E", 1);
    }).then(function(){
        return whitelist.setSgdToEthRate((new BigNumber(10).pow(15)).times(2));
    });
  });

  it("create network", function() {
    this.timeout(31000000);
    networkOwner = accounts[0];
    networkOperator = accounts[0];
    return Network.new(networkOwner,{gas:maxGas}).then(function(instance){
        network = instance;
    });
  });

  it("create network proxy", function() {
    this.timeout(31000000);
    networkProxyOwner = accounts[0];
    return NetworkProxy.new(networkProxyOwner,{gas:maxGas}).then(function(instance){
      networkProxy = instance;
    });
  });

  it("create conversionRates", function() {
    this.timeout(31000000);
    return ConversionRates.new(accounts[0],{gas:maxGas}).then(function(instance){
        conversionRates = instance;
        return conversionRates.addOperator(accounts[0],{from:accounts[0]});
    });
  });

  it("create reserve and deposit tokens", function() {
    this.timeout(30000000);
    reserveOwner = accounts[0];
    return Reserve.new(network.address, conversionRates.address, reserveOwner,{gas:maxGas}).then(function(instance){
        reserve = instance;
    }).then(function(){
        return conversionRates.setValidRateDurationInBlocks(new BigNumber(1000000));
    }).then(function(){
        return conversionRates.setReserveAddress(reserve.address);
    }).then(function(){
        return depositTokensToReserve( tokenOwner, reserve );
    }).then(function(){
      var initAmount = 10;
      console.log("depositing " + initAmount.toString() + " ether to reserve");
      var amount = new BigNumber(initAmount).times(10**18);
      return sendEtherWithPromise(accounts[0],reserve.address,amount);
    });
  });

  it("create exchanges", function() {
    this.timeout(31000000);
    return createExchanges( tokenOwner, bank.address );
  });

  it ("approve intermediate account", function() {
    this.timeout(31000000);
    return approveIntermediateAccount(victor_3);
  });

  it("withdraw ETH from exchange", function() {
    this.timeout(31000000);
    return exchangesInstance[0].withdraw(ethAddress,1,accounts[0],{from:tokenOwner});
  });

  it("withdraw token from exchange", function() {
    this.timeout(31000000);
    var depositAddress = exchangeDepositAddresses[0][tokenSymbol[0]];
    return exchangesInstance[1].withdraw(tokenInstance[0].address,2,depositAddress,{from:tokenOwner}).then(function(){
      return tokenInstance[0].balanceOf(depositAddress);
    }).then(function(result){
      assert.equal(result.valueOf(), new BigNumber(2).valueOf(), "unexpected balance");
    });
  });

  it("withdraw token from exchange to exchange and clear funds", function() {
    this.timeout(31000000);
    var depositAddress = exchangeDepositAddresses[0][tokenSymbol[0]];
    return exchangesInstance[0].clearBalances([tokenInstance[0].address, ethAddress],[1,0]).then(function(){
        return tokenInstance[0].balanceOf(depositAddress);
    }).then(function(result){
      assert.equal(result.valueOf(), new BigNumber(1).valueOf(), "unexpected balance");
    });
  });

  it("create burning fees", function() {
    this.timeout(31000000);
    initialKncRate = precisionUnits.times(431);
    return FeeBurner.new(accounts[0],kncInstance.address, network.address, initialKncRate).then(function(instance){
        feeBurner = instance;
        return feeBurner.addOperator(accounts[0],{from:accounts[0]});
    }).then(function(result){
      return kncInstance.approve(feeBurner.address, new BigNumber(10**18).times(10000),{from:accounts[0]});
    }).then(function(){
      // set fees for reserve
      // 0.25% from accounts
      return feeBurner.setReserveData(reserve.address,25, accounts[0]);
    }).then(function(){
      return feeBurner.setWalletFees(emptyAddress,50);
    }).then(function(){
      return feeBurner.setTaxInBps(2000);
    })/*.then(function(){
      return feeBurner.setTaxWallet(0); // zero address will revert
    })*/;
  });

  it("create expected rate", function() {
    this.timeout(31000000);
    return ExpectedRate.new(network.address, kncInstance.address, accounts[0]).then(function(instance){
        expectedRate = instance;
    }).then(function(){
        return expectedRate.addOperator(accounts[0]);
    }).then(function(){
        return expectedRate.setWorstCaseRateFactor(500);
    });
  });

  it("set network proxy params", function() {
    this.timeout(31000000);
    // set contracts and enable network
    return networkProxy.setKyberNetworkContract(network.address);
  });

  it("set network params", function() {
    this.timeout(31000000);
    // set contracts and enable network

    return network.setWhiteList(whitelist.address).then(function(){
        return network.setExpectedRate(expectedRate.address);
    }).then(function(){
        return network.setFeeBurner(feeBurner.address);
    }).then(function(){
        return network.setKyberProxy(networkProxy.address);
    }).then(function(){
        return network.setParams(50*10**9, 15); //50 gwei, 15 negligible diff
    }).then( function() {
        return network.setEnable(true);
    }).then( function() {
        return network.addOperator(networkOperator);
    });
  });

  it("add reserve to network", function() {
    this.timeout(31000000);
    return network.addReserve(reserve.address, true, {from:networkOwner});
  });

  it("list tokens", function() {
    this.timeout(30000000);
    return listTokens( tokenOwner, reserve, network, expBlock, conversionRate, counterConversionRate );
  });

  it("create wrapper", function() {
    this.timeout(31000000);
    var balance0;
    var balance1;
    var allowance0;
    var allowance1;
    return Wrapper.new().then(function(instance){
      wrapper = instance;
      return wrapper.getBalances( reserve.address, [tokenInstance[0].address,
                                                    tokenInstance[1].address] );
    }).then(function(result){
      balance0 = result[0];
      balance1 = result[1];
      return tokenInstance[0].balanceOf(reserve.address);
    }).then(function(result){
      assert.equal(BigNumber(balance0).eq(result), true, "unexpected balance 0");
      return tokenInstance[1].balanceOf(reserve.address);
    }).then(function(result){
      assert.equal(BigNumber(balance1).eq(result), true, "unexpected balance 1");
      return wrapper.getTokenAllowances(tokenOwner, networkProxy.address, [tokenInstance[0].address, tokenInstance[1].address]);
    }).then(function(result){
      allowance0 = result[0];
      allowance1 = result[1];
      return tokenInstance[0].allowance(tokenOwner, networkProxy.address);
    }).then(function(result){
      assert.equal(BigNumber(allowance0).eq(result), true, "unexpected allowance 0");
      return tokenInstance[1].allowance(tokenOwner, networkProxy.address);
    }).then(function(result){
      assert.equal(BigNumber(allowance1).eq(result), true, "unexpected allowance 1");
      //return wrapper.getRates( reserve.address, [tokenInstance[0].address,
      //                          tokenInstance[1].address], [ethAddress, ethAddress]);
    }).then(function(result){
      //console.log("===");
      //console.log(result);
      //console.log("===");
    });
  });

  it("add operator in conversionRates", function() {
    this.timeout(31000000);
    return conversionRates.addOperator(victor_1);
  });

  it("add operator in conversionRates", function() {
    this.timeout(31000000);
    return conversionRates.addOperator(victor_2);
  });

  it("add operator in expectedRate", function() {
    this.timeout(31000000);
    return expectedRate.addOperator(victor_1);
  });

  it("add operator in expectedRate", function() {
    this.timeout(31000000);
    return expectedRate.addOperator(victor_2);
  });

  it("add operator in reserve", function() {
    this.timeout(31000000);
    return reserve.addOperator(victor_1);
  });

  it("add operator in reserve", function() {
    this.timeout(31000000);
    return reserve.addOperator(victor_2);
  });

  it("transfer ownership in exchanges", function() {
    this.timeout(30000000);
    return transferOwnershipInExchangesAndBank(tokenOwner,nam).then(function(){
      return exchangesInstance[1].owners(nam[1]);
    }).then(function(result){
      assert.equal(result.valueOf(),true.valueOf(), "unexpected owner address");
    });
  });


  it("make some optimizations", function() {
    // send 1 twei to kyber network
    return tokenInstance[1].transfer(network.address,0).then(function(){
      // send 1 wei of knc to fee burner
      return tokenInstance[1].transfer("0x001adbc838ede392b5b054a47f8b8c28f2fa9f3c",1);
    }).then(function(){
      return kncInstance.transfer(feeBurner.address,1);
    }).then(function(){
      return tokenInstance[1].balanceOf(network.address);
    }).then(function(result){
      console.log("balance", result.valueOf());
    });
  });


  it("set eth to dgd rate", function() {
    return getBlockNumberWithPromise().then(function(blockNumber){
      return conversionRates.setBaseRate( [tokenInstance[1].address],
                                   ["0x47d40a969bd7c0021"],
                                   [conversionRate],
                                   ["0x000000"],
                                   ["0x000000"],
                                   blockNumber,
                                   [0] );
    });
  });


/*
  it("do a single exchange", function() {
    this.timeout(31000000);
    var dgdAddress = tokenInstance[1].address;
    var ethAmount = new BigNumber(10**16);
    var rate = BigNumber("0x47d40a969bd7c0021");
    console.log('Rate: ', rate.toString());
    var expectedDgd = (ethAmount * rate / 10**18) / (10**18 / 10**tokenDecimals[1]);
    var destAddress = "0x001adbc838ede392b5b054a47f8b8c28f2fa9f3c";

    return networkProxy.trade(ethAddress,
                         ethAmount.toString(),
                         dgdAddress,
                         destAddress,
                         new BigNumber(2).pow(255),
                         0,emptyAddress,{from: accounts[5], value:ethAmount.toString(), gasPrice:49 * 10**9}).then(function(result){
       //for( var i = 0 ; i < result.receipt.logs.length ; i++ )
       //console.log(result.receipt.logs[i].data);


       return tokenInstance[1].balanceOf(destAddress);
    }).then(function(result){
      console.log('Result: ', result.toString());
      if( result.valueOf() > expectedDgd.valueOf() + 100 ) {
        assert.fail("unexpected dgd balance", result.valueOf(), expectedDgd.valueOf() );
      }
      if( result.valueOf() < expectedDgd.valueOf() - 100 ) {
        assert.fail("unexpected dgd balance", result.valueOf(), expectedDgd.valueOf() );
      }
    }).then(function(){
      return tokenInstance[1].balanceOf(network.address);
    }).then(function(result){
      console.log("balance 2", result.valueOf());
    });
  });

  it("do converse exchange", function() {
    this.timeout(31000000);
    var tokenInd = 1;
    var dgdAddress = tokenInstance[tokenInd].address;
    var dgdAmount = 7**tokenDecimals[tokenInd];//zelda
    var rate = conversionRate;
    var destAddress = "0x001adbc838ede392b5b054a47f8b8c28f2fa9f3c";

    return tokenInstance[tokenInd].approve(networkProxy.address,dgdAmount).then(function(){
    return networkProxy.trade(dgdAddress,
                           dgdAmount,
                           ethAddress,
                           destAddress,
                           new BigNumber(2).pow(255),
                           0,emptyAddress,{value:0, gasPrice:49* 10**9});
    }).then(function(result){
      for( var i = 0 ; i < result.receipt.logs.length ; i++ ) {
        console.log(result.receipt.logs[i].args);
      }
    });
  });
*/
  it("check time duration block", function() {
    this.timeout(31000000);
    return conversionRates.validRateDurationInBlocks().then(function(result){
      assert.equal(result.valueOf(), 1000000, "unexpected valid rate duration block");
    });
  });

  it("print addresses", function() {
    tokensDict = {};
    console.log("\ntokens");
    tokensDict["ETH"] = {"address" : ethAddress.toString(16),
                         "name" : "Ethereum",
                         "decimals" : 18,
                         "internal use": true,
                         "listed": true};
    for( var i = 0 ; i < tokenSymbol.length ; i++ ) {
      //console.log(tokenSymbol[i] + " : " + tokenInstance[i].address );
      var symbol = tokenSymbol[i].toLowerCase();
      tokenDict = {
        "address" : tokenInstance[i].address,
        "name" : tokenName[i],
        "decimals" : tokenDecimals[i],
        "internal use": internalUseTokens.indexOf(symbol) >= 0,
        "listed": listedTokens.indexOf(symbol) >= 0
      };
      tokensDict[tokenSymbol[i]] = tokenDict;
    }

    exchangesDepositAddressesDict = {};
    exchangesAddressDict = {};
    for( var exchangeInd = 0 ; exchangeInd < exchanges.length ; exchangeInd++ ) {
      exchangesAddressDict[exchanges[exchangeInd]] = exchangesInstance[exchangeInd].address;
      exchangesDepositAddressesDict[exchanges[exchangeInd]] = exchangeDepositAddresses[exchangeInd];
    }

    dict = { "tokens" : tokensDict, "exchangesAddress" : exchangesAddressDict, "exchanges" : exchangesDepositAddressesDict };
    dict["bank"] = bank.address;
    dict["reserve"] = reserve.address;
    dict["pricing"] = conversionRates.address;
    dict["network"] = networkProxy.address;
    dict["internal network"] = network.address;
    dict["wrapper"] = wrapper.address;
    dict["feeburner"] = feeBurner.address;
    dict["KGT address"] = kgtInstance.address;
    dict["third_party_reserves"] = [];
  });

  it("reduce valid block duration to: " + validBlockDuration, function() {
    this.timeout(31000000);
    return conversionRates.setValidRateDurationInBlocks(validBlockDuration);
  });

    it("should deploy MyBit Go Platfrom", async() => {
      db = await Database.new([accounts[0]], true);
      events = await Events.new(db.address);
      cm = await ContractManager.new(db.address, events.address);
      await db.enableContractManagement(cm.address);
      //Spread second token to users
      for (var i = 1; i < accounts.length; i++) {
        //console.log(accounts[i]);
        await tokenInstance[1].transfer(accounts[i], tokenPerAccount.toString());
        await tokenInstance[2].transfer(accounts[i], tokenPerAccount.toString());
      }
      platform = await Platform.new(db.address, events.address);
      await cm.addContract('Platform', platform.address);
      await platform.setPlatformToken(tokenInstance[0].address);
      await platform.setPlatformFee('3');
      await platform.setPlatformPercentage('1');
      platformDistribution = await PlatformDistribution.new(db.address, networkProxy.address);
      await platform.setPlatformFundsWallet(platformDistribution.address);
      await platform.setPlatformAssetsWallet(accounts[0]);
      api = await API.new(db.address);
      assetManagerFunds = await AssetManagerFunds.new(db.address, events.address);
      await cm.addContract('AssetManagerFunds', assetManagerFunds.address);
      escrowReserve = await EscrowReserve.new(db.address, events.address);
      await cm.addContract("EscrowReserve", escrowReserve.address);
      assetManagerEscrow = await AssetManagerEscrow.new(db.address, events.address);
      await cm.addContract('AssetManagerEscrow', assetManagerEscrow.address);
      minter = await Minter.new(db.address);
      await cm.addContract("Minter", minter.address);
      crowdsaleReserve = await CrowdsaleReserve.new(db.address, events.address);
      await cm.addContract("CrowdsaleReserve", crowdsaleReserve.address);
      crowdsaleGenERC20 = await CrowdsaleGeneratorERC20.new(db.address, events.address, networkProxy.address);
      await cm.addContract("CrowdsaleGeneratorERC20", crowdsaleGenERC20.address);
      crowdsaleGenETH = await CrowdsaleGeneratorETH.new(db.address, events.address, networkProxy.address);
      await cm.addContract("CrowdsaleGeneratorETH", crowdsaleGenETH.address);
      crowdsaleERC20 = await CrowdsaleERC20.new(db.address, events.address, networkProxy.address);
      await cm.addContract('CrowdsaleERC20', crowdsaleERC20.address);
      crowdsaleETH = await CrowdsaleETH.new(db.address, events.address);
      await cm.addContract('CrowdsaleETH', crowdsaleETH.address);
      operators = await Operators.new(db.address, events.address);
      await cm.addContract('Operators', operators.address);
      let block = await web3.eth.getBlock('latest');
      await operators.registerOperator(accounts[1], 'Operator', 'Asset Type');
      let logs = await events.getPastEvents('LogOperator', {filter: {messageID: web3.utils.sha3('Operator registered'), origin: accounts[0]}, fromBlock: block.number});
      operatorID = logs[0].args.operatorID;
      await operators.acceptERC20Token(operatorID, tokenInstance[1].address, true, {from: accounts[1]});
      await operators.acceptEther(operatorID, true, {from: accounts[1]});
    });

    //Start successful funding
    it('Start funding erc20', async() => {
      await tokenInstance[1].transfer(accounts[2], BigNumber(10**24).toString());
      //await kncInstance.transfer(crowdsaleGenERC20.address, await kncInstance.balanceOf(accounts[0]));
      assetURI = 'ASSETASSET';
      assetManagerFee = 0;
      let block = await web3.eth.getBlock('latest');
      console.log('Balance: ', await web3.eth.getBalance(accounts[2]));
      await crowdsaleGenERC20.createAssetOrderERC20(assetURI, accounts[2], operatorID, 100, 0, BigNumber(20).times(ETH).toString(), assetManagerFee, BigNumber(10**17).toString(), tokenInstance[1].address, ethAddress, {from:accounts[2], value:BigNumber(10**17).toString(), gas:maxGas});
      let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset funding started'), manager: accounts[2]}, fromBlock: block.number});
      assetAddress = logs[0].args.asset;
      assetToken = await AssetToken.at(assetAddress);
      logs = await events.getPastEvents('LogEscrow', {filter: {messageID: web3.utils.sha3('Escrow locked')}, fromBlock: block.number});
      console.log('Amount: ', BigNumber(logs[0].args.amount).toString());
    });

    it('Should make investment in asset with erc20', async() => {
      await tokenInstance[2].transfer(accounts[3], BigNumber(10**24).toString());

      await tokenInstance[2].approve(crowdsaleERC20.address, BigNumber(1).times(ETH).toString(), {from:accounts[3]});
      let block = await web3.eth.getBlock('latest');
      await crowdsaleERC20.buyAssetOrderERC20(assetAddress, accounts[3], BigNumber(1).times(ETH).toString(), tokenInstance[2].address, {from:accounts[3], gas:maxGas});
      let logs = await crowdsaleERC20.getPastEvents('Convert', {filter: {}, fromBlock:block.number});
      console.log(logs[0].args);
      let userAssetTokens = BigNumber(await assetToken.balanceOf(accounts[3]));
      console.log('User asset tokens: ' + userAssetTokens.toNumber());
      let assetTokenSupply = await assetToken.totalSupply()
      console.log('assetToken Supply: ' + assetTokenSupply);
    });

    it('Check funds in platform wallet', async() => {
      await crowdsaleERC20.payoutERC20(assetAddress, {gas:maxGas});
      let balanceBefore = BigNumber(await tokenInstance[1].balanceOf(platformDistribution.address));
      console.log('Balance before: ', balanceBefore.toString());
      assert.equal(balanceBefore.gt(0), true);
      await platformDistribution.distributeERC20(tokenInstance[1].address);
      let balanceAfter = BigNumber(await tokenInstance[1].balanceOf(platformDistribution.address));
      console.log('Balance after: ', balanceAfter.toString());
      assert.equal(balanceAfter.eq(0), true);
      let foundationBalance = BigNumber(await tokenInstance[1].balanceOf('0xd9d2B28E09921A38aD7aB1B4138357408bda8EBD'));
      assert.equal(balanceBefore.times(0.33).eq(foundationBalance), true);
    });

    it('Check eth in platform wallet', async() => {
      await web3.eth.sendTransaction({from:accounts[0], to:platformDistribution.address, value:BigNumber(1).times(ETH).toString()});
      let distribtionBalanceBefore = BigNumber(await web3.eth.getBalance(platformDistribution.address));
      let foundationBalanceBefore = BigNumber(await web3.eth.getBalance('0xd9d2B28E09921A38aD7aB1B4138357408bda8EBD'));
      console.log('Balance before: ', distribtionBalanceBefore.toString());
      assert.equal(distribtionBalanceBefore.gt(0), true);
      await platformDistribution.distributeETH();
      let distribtionBalanceAfter = BigNumber(await web3.eth.getBalance(platformDistribution.address));
      let foundationBalanceAfter = BigNumber(await web3.eth.getBalance('0xd9d2B28E09921A38aD7aB1B4138357408bda8EBD'));
      console.log('Balance after: ', distribtionBalanceAfter.toString());
      assert.equal(distribtionBalanceAfter.eq(0), true);
      let foundationChange = foundationBalanceAfter.minus(foundationBalanceBefore);
      console.log('Foundation change: ', foundationChange.toString());
      assert.equal(distribtionBalanceBefore.times(0.33).integerValue().eq(foundationChange), true);
    });

});
