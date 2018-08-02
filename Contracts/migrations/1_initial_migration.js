var Migrations = artifacts.require("./Migrations.sol");

const API = artifacts.require('./API.sol'); 
const Asset = artifacts.require('./Asset.sol');
const AssetCreation = artifacts.require('./AssetCreation.sol');
const ContractManager = artifacts.require("./ContractManager.sol");
const Database = artifacts.require("./Database.sol");
const FundingHub = artifacts.require("./FundingHub.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const AssetExchange = artifacts.require('./AssetExchange.sol');
const MyBitToken = artifacts.require('./ERC20.sol');
const AssetManager = artifacts.require('./AssetManager.sol');
const Owned = artifacts.require("./Owned.sol");
const TokenBurn = artifacts.require('./TokenBurn.sol');
const TokenFaucet = artifacts.require('./TokenFaucet.sol');
const UserAccess = artifacts.require('./UserAccess.sol');

module.exports = function(deployer, network) {
  // deployer.deploy(Migrations);
  console.log(network); 
  // deployer.deploy(Database, ).then(function() { 
  //   deployer.deploy(ContractManager, Database.address);
  //   deployer.deploy(API, Database.address); 
  //   deployer.deploy(MyBitToken, Database.address).then(function() { 
  //   deployer.deploy(TokenFaucet, MyBitToken.address); 
  //   deployer.deploy(TokenBurn, Database.address); 
  //   deployer.deploy(API, Database.address); 
  // }); 

  // });

};
