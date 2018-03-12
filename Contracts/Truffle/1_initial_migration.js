var Migrations = artifacts.require("./Migrations.sol");
var MyBitToken = artifacts.require("./MyBitToken.sol");
var HashFunctions = artifacts.require("./HashFunctions.sol");
var Database = artifacts.require("./Database.sol");
var InitialVariables = artifacts.require("./InitialVariables.sol");
var ContractManager = artifacts.require('./ContractManager.sol');
var AssetCreation = artifacts.require('./AssetCreation.sol');
var Asset = artifacts.require("./Asset.sol");
var Owned = artifacts.require('./Owned.sol');
var UserAccess = artifacts.require("./UserAccess.sol");
var FundingHub = artifacts.require("./FundingHub.sol");
var StakingBank = artifacts.require("./StakingBank.sol");
var BugBank = artifacts.require("./BugBank.sol");
var BugBounty = artifacts.require('./BugBounty.sol');
var MarketPlace = artifacts.require("./MarketPlace.sol");
var TokenStaking = artifacts.require("./TokenStaking.sol");
var TokenBurn = artifacts.require("./TokenBurn.sol");

/*
var Asset = artifacts.require("./Asset.sol");
var BugBounty = artifacts.require("./BugBounty.sol");
var SafeMath = artifacts.require("./SafeMath.sol");
var TokenBurn = artifacts.require("./TokenBurn.sol");
var TokenFaucet = artifacts.require("./TokenFaucet.sol");
var TokenStaking = artifacts.require("./TokenStaking.sol");
var WithdrawalManager = artifacts.require("./WithdrawalManager.sol");*/


module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MyBitToken);
  deployer.deploy(HashFunctions);
  deployer.deploy(Database,
    web3.eth.accounts[0],
    web3.eth.accounts[1],
    web3.eth.accounts[2]).then(function(){
      deployer.deploy(InitialVariables, Database.address);
      deployer.deploy(ContractManager, Database.address);
      deployer.deploy(Owned, Database.address);
      deployer.deploy(UserAccess, Database.address);
      deployer.deploy(AssetCreation, Database.address);
      deployer.deploy(FundingHub, Database.address);
      deployer.deploy(Asset, Database.address);
      deployer.deploy(StakingBank, Database.address);
      deployer.deploy(BugBank, Database.address);
      deployer.deploy(BugBounty, Database.address);
      deployer.deploy(MarketPlace, Database.address);
      deployer.deploy(TokenStaking, Database.address, MyBitToken.address);
      deployer.deploy(TokenBurn, Database.address, MyBitToken.address);
    })
  };

/*
  deployer.then(function(){
    return Database.new(web3.eth.accounts[0],web3.eth.accounts[1],web3.eth.accounts[2])
  }).then(function(instance){

  })
  deployer.deploy(Database,
    web3.eth.accounts[0],
    web3.eth.accounts[1],
    web3.eth.accounts[2]).then(function(){
      return deployer.deploy(InitialVariables, Database.address);
    });
};
/*return deployer.deploy([
    [ContractManager, Database.address],
    [InitialVariables, Database.address],
    [Owned, Database.address],
    [UserAccess, Database.address],
    [FundingHub, Database.address],
    [Asset, Database.address],
    [StakingBank, Database.address],
    [BugBank, Database.address],
    [BugBounty, Database.address],
    [TokenStaking, MyBitToken.address, Database.address],
    [MarketPlace, Database.address],
    [TokenBurn, MyBitToken.address, Database.address]
  ]);*/
