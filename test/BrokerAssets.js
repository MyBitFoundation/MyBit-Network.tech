var bn = require('bignumber.js');

const BrokerAssets = artifacts.require("./ecosystem/BrokerAssets.sol");
const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const DivToken = artifacts.require("./tokens/ERC20/GovernedToken.sol");
const BurnableToken = artifacts.require("./tokens/ERC20/BurnableToken.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Operators = artifacts.require("./ecosystem/Operators.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");

const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const broker = web3.eth.accounts[4];
const operator = web3.eth.accounts[5];
const tokenHolders = [user1, user2, user3];

const ETH = 1000000000000000000;
const tokenPerAccount = 10*ETH;

contract('Broker Assets', async() => {
  let divToken;
  let burnToken
  let db;
  let cm;
  let hash;
  let escrow;
  let assetID;
  let platform;
  let operators;
  let operatorID;
  let assetURI = 'NewAsset';

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

  it("Deploy standard token", async() => {
    burnToken = await BurnableToken.new('MyB', 10000*ETH);
  });

  it('Deploy dividend Token', async() => {
    divToken = await DivToken.new(db.address, assetURI, owner);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      console.log(web3.eth.accounts[i]);
      await divToken.mint(tokenHolders[i], tokenPerAccount);
      userBalance = await divToken.balanceOf(tokenHolders[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    // Check token ledger is correct
    assert.equal(await divToken.balanceOf(owner), 0);
  });

  it('Deploy broker assets', async() => {
    brokerAssets = await BrokerAssets.new(db.address);
    await cm.addContract('BrokerAssets', brokerAssets.address);
  });

  it("Transfer token to broker assets", async() => {
    await divToken.mint(brokerAssets.address, tokenPerAccount);
    brokerBalance = await divToken.balanceOf(brokerAssets.address);
    assert.equal(brokerBalance, tokenPerAccount);
  });
/*
  it('Deploy platform', async() => {
    platform = await Platform.new(db.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformWallet(owner);
    await platform.setPlatformToken(burnToken.address);
  });
*/

  it('Set operator', async() => {
    operators = await Operators.new(db.address);
    await cm.addContract('Operators', operators.address);
    let tx = await operators.registerOperator(operator, 'Operator');
    operatorID = tx.logs[0].args._operatorID;
  });

  it("Generate assetID", async() => {
    assetID = await hash.getAssetID(assetURI, 10*ETH, operatorID, {from:broker});
  });

  it("Set asset variables", async() => {
    let tokenHash = await hash.stringBytes("tokenAddress", assetID);
    let brokerHash = await hash.stringBytes("broker", assetID);
    let operatorHash = await hash.stringBytes("operator", assetID);
    await db.setAddress(tokenHash, divToken.address);
    await db.setAddress(brokerHash, broker);
    await db.setAddress(operatorHash, operator);
  });

  it('Send money to token contract', async() => {
    //await web3.eth.sendTransaction({from:operator, to:divToken.address, value:10*ETH});
    await divToken.issueDividends({from:operator, value:1*ETH});
    console.log(await web3.eth.getBalance(divToken.address));
  });

  it("Withdraw dividends", async() => {
    let balanceBefore = await web3.eth.getBalance(user1);
    console.log("withdraw dividends");
    let amountOwed = await divToken.getOwedDividends(user1);
    let tx = await divToken.withdraw({from:user1});
    let balanceAfter = await web3.eth.getBalance(user1);
    //console.log(tx);
    //assert.equal(balanceBefore.plus(amountOwed).eq(balanceAfter), true);
  });

  it('Withdraw from broker assets', async() => {
    let balanceBefore = await web3.eth.getBalance(broker);
    let amountOwed = await divToken.getOwedDividends(brokerAssets.address);
    console.log(amountOwed);
    console.log(await divToken.balanceOf(brokerAssets.address));
    assert.notEqual(amountOwed, 0);
    let tx = await brokerAssets.withdraw([assetID], {from:broker});
    //console.log(tx);
    let balanceAfter = await web3.eth.getBalance(broker);
    assert.equal(bn(balanceAfter).isGreaterThan(balanceBefore), true);
  });



});
