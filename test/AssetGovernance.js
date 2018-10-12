var bn = require('bignumber.js');


const AssetGovernance = artifacts.require("./ecosystem/AssetGovernance.sol");
const BrokerEscrow = artifacts.require("./ecosystem/BrokerEscrow.sol");
const BrokerAssets = artifacts.require("./ecosystem/BrokerAssets.sol");
const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const Operators = artifacts.require("./ecosystem/Operators.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");
const API = artifacts.require("./database/API.sol");
const GovernedToken = artifacts.require("./tokens/ERC20/GovernedToken.sol");
const PlatformToken = artifacts.require("./tokens/ERC20/BurnableToken.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");

const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const broker = web3.eth.accounts[4];
const operator = web3.eth.accounts[5];
const tokenHolders = [user1, user2, user3];

const ETH = 1000000000000000000;
let tokenPerAccount;

// This test will check that the voting mechanisms are working properly and will test the functionality of changing brokers
contract('AssetGovernance', async() => {
  let db;
  let cm;
  let operators;
  let platform;
  let api;
  let hash;
  let govToken;
  let burnToken;
  let governance;

  let brokerEscrowID;
  let operatorID;
  let assetID;
  let assetURI = 'https://alocationforassetdetails';

  it('Deploy hash contract', async() => {
    hash = await HashFunctions.new();
  });

  it('Deploy database contract', async() => {
    db = await Database.new([owner], true);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address);
    await db.enableContractManagement(cm.address);
    await cm.addContract('Owner', owner);
  });

  it('Deploy asset governance contract', async() => {
    governance = AssetGovernance.new(db.address);
  });

  it("Deploy standard token", async() => {
    burnToken = await PlatformToken.new('MyB', 180000000*ETH);
  });

  it("Transfer token to broker", async() => {
    await burnToken.transfer(broker, 100*ETH);
    brokerBalance = await burnToken.balanceOf(broker);
    assert.equal(brokerBalance, 100*ETH);
  });

  it('Deploy api', async() => {
    api = await API.new(db.address);
    await cm.addContract('API', api.address);
  });

  it('Deploy platform', async() => {
    platform = await Platform.new(db.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformWallet(owner);
    await platform.setPlatformToken(burnToken.address);
  });

  it('Deploy broker escrow', async() => {
    escrow = await BrokerEscrow.new(db.address);
    await cm.addContract('BrokerEscrow', escrow.address);
  });

  it('Deploy broker assets', async() => {
    brokerAssets = await BrokerAssets.new(db.address);
    await cm.addContract('BrokerAssets', brokerAssets.address);
  });

  it('Set operator', async() => {
    operators = await Operators.new(db.address);
    await cm.addContract('Operators', operators.address);
    let tx = await operators.registerOperator(operator, 'Operator');
    operatorID = tx.logs[0].args._operatorID;
  });

  it("Generate assetID", async() => {
    assetID = await hash.getAssetID(assetURI, 8*ETH, operatorID, {from:broker});
  });

  it("Lock escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(broker);
    await burnToken.approve(escrow.address, 2*ETH, {from:broker});
    tx = await escrow.lockEscrow(assetID, 2*ETH, {from:broker});
    brokerEscrowID = tx.logs[0].args._brokerEscrowID;
    let balanceAfter = await burnToken.balanceOf(broker);
    let diff = bn(balanceBefore).minus(balanceAfter);
    assert.equal(diff, 2*ETH);
  });


  it("Finish funding", async() => {
    let finishHash = await hash.stringBytes('crowdsaleFinalized', assetID);
    await db.setBool(finishHash, true);
    let amountHash = await hash.stringBytes("amountToRaise", assetID);
    await db.setUint(amountHash, 8*ETH);

  });

  it("Deploy governed asset token", async() => {
    govToken = await GovernedToken.new(db.address, assetURI, owner);
    let tokenHash = await hash.stringBytes('tokenAddress', assetID);
    await db.setAddress(tokenHash, govToken.address);
  });

  it("Set asset variables", async() => {
    let tokenHash = await hash.stringBytes("tokenAddress", assetID);
    let brokerHash = await hash.stringBytes("broker", assetID);
    let operatorHash = await hash.stringBytes("operator", assetID);
    await db.setAddress(tokenHash, govToken.address);
    await db.setAddress(brokerHash, broker);
    await db.setAddress(operatorHash, operator);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    let totalSupply = bn(8).times(ETH);
    tokenPerAccount = totalSupply / tokenHolders.length;   // TODO: getting error with bignumber.js here
    for (var i = 0; i < tokenHolders.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await govToken.mint(tokenHolders[i], tokenPerAccount);
      userBalance = await govToken.balanceOf(tokenHolders[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    let currentSupply = await govToken.totalSupply();
    assert.equal(await govToken.balanceOf(owner), 0);
  });

  it("Transfer token to broker assets", async() => {
    await govToken.mint(brokerAssets.address, tokenPerAccount);
    brokerBalance = await govToken.balanceOf(brokerAssets.address);
    assert.equal(brokerBalance, tokenPerAccount);
  });

  // TODO: start voting 
});
