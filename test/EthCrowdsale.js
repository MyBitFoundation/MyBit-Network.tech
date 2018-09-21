var bn = require('bignumber.js');

const Token = artifacts.require("./tokens/ERC20/DividendToken.sol");
const Crowdsale = artifacts.require("./crowdsale/CrowdsaleEther.sol");
const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Pausible = artifacts.require("./ownership/Pausible.sol");

const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const broker = web3.eth.accounts[4];
const operator = web3.eth.accounts[5];
const tokenHolders = [user1, user2, user3];


const ETH = 1000000000000000000;
const scaling = 1000000000000000000000000000000000000;
const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = 1000000000000000000000;
const brokerFee = 5;

contract('Ether Crowdsale', async() => {
  let token;
  let crowdsale;
  let db;
  let cm;
  let hash;
  let operatorID;
  let operatorHash;
  let assetID;
  let assetURI;
  let tokenAddress;
  let pausible;

  it('Deploy hash contract', async() => {
    hash = await HashFunctions.new();
  });

  it('Deploy database contract', async() => {
    db = await Database.new([owner], true);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address);
    await db.enableContractManagement(cm.address);
  });

  it('Deploy pausible contract', async() => {
    pausible = await Pausible.new(db.address);
    await cm.addContract('Pausible', pausible.address);
  });

  it('Deploy crowdsale contract', async() => {
    crowdsale = await Crowdsale.new(db.address);
    await cm.addContract('EtherCrowdsale', crowdsale.address);
    await cm.addContract('Owner', owner); //Right now some database functions are operated from owner account
  });

  it('Set operator', async() => {
    //Presumably there is some onboarding process for the operator?
    operatorID = await hash.addressHash(operator);
    operatorHash = await hash.stringBytes('operator', operatorID);
    await db.setAddress(operatorHash, operator);
  });

  //Start successful funding
  it('Start funding', async() => {
    assetURI = 'BTC ATM';
    let tx = await crowdsale.createAssetOrder(assetURI, operatorID, 10, 20*ETH, brokerFee, {from:broker});
    //console.log(tx.logs[0].args._assetID);
    assetID = tx.logs[0].args._assetID;
    tokenAddress = tx.logs[0].args._tokenAddress;
    token = await Token.at(tokenAddress);
  });

  it('User1 funding', async() => {
    let tokenSupply = await token.totalSupply()
    console.log('Token Supply: ' + tokenSupply);
    let tx = await crowdsale.buyAssetOrder(assetID, {from:user1, value:5*ETH});
    let user1Tokens = await token.balanceOf(user1);
    assert.equal(user1Tokens, 5*ETH*(100-brokerFee)/100);
  });

  it('Asset already exists fail', async() => {
    let err;
    //Fail because asset already exists
    try{
      await crowdsale.createAssetOrder(assetURI, operatorID, 10, 20*ETH, brokerFee, {from:broker});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to buy asset, fail to payout. No platform address', async() => {
    let err;
    try{
      await crowdsale.buyAssetOrder(assetID, {from:user2, value:15*ETH});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set platform', async() => {
    let platformHash = await hash.stringHash('platformWallet');
    await db.setAddress(platformHash, owner);
  });

  it('User2 funding', async() => {
    console.log(user2);
    ownerBalanceBefore = web3.eth.getBalance(owner);
    operatorBalanceBefore = web3.eth.getBalance(operator);

    let tx = await crowdsale.buyAssetOrder(assetID, {from:user2, value:15*ETH});
    let user2Tokens = await token.balanceOf(user2);
    assert.equal(user2Tokens, 15*ETH*(100-brokerFee)/100);

    ownerBalanceAfter = web3.eth.getBalance(owner);
    assert.equal(bn(ownerBalanceAfter).minus(ownerBalanceBefore).isEqualTo(bn(ETH).multipliedBy(20).dividedBy(100)), true);

    operatorBalanceAfter = web3.eth.getBalance(operator);
    assert.equal(bn(operatorBalanceAfter).minus(operatorBalanceBefore).isEqualTo(bn(ETH).multipliedBy(20).minus( bn(ETH).multipliedBy(20).dividedBy(100) )), true);
  });

  it('User3 funding fail', async() => {
    //Funding finished
    let err;
    try{
      await crowdsale.buyAssetOrder(assetID, {from:user3, value:5*ETH});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to refund', async() => {
    let err;
    try{
      await crowdsale.refund(assetID, {from:broker});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Test dividends', async() => {
    operatorBalanceBefore = web3.eth.getBalance(operator);
    await web3.eth.sendTransaction({from: operator, to: tokenAddress, value:10*ETH});
    operatorBalanceAfter = web3.eth.getBalance(operator);
    console.log(Number(bn(operatorBalanceAfter).minus(operatorBalanceBefore).plus(bn(ETH).multipliedBy(10))));
  });

  it('User1 withdraw dividends', async() => {
    user1BalanceBefore = web3.eth.getBalance(user1);
    await token.withdraw({from:user1});
    user1BalanceAfter = web3.eth.getBalance(user1);
    assert.equal(bn(user1BalanceAfter).isGreaterThan(user1BalanceBefore), true);
  });

  it('User2 withdraw dividends', async() => {
    user2BalanceBefore = web3.eth.getBalance(user2);
    await token.withdraw({from:user2});
    user2BalanceAfter = web3.eth.getBalance(user2);
    assert.equal(bn(user2BalanceAfter).isGreaterThan(user2BalanceBefore), true);
  });

  //Start failed funding
  it('Start failed funding', async() => {
    let err;

    await db.deleteAddress(operatorHash);
    assetURI = 'Fail: No operator';

    try{
      await crowdsale.createAssetOrder(assetURI, operatorID, 10, 20*ETH, {from:broker});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Start funding that does not reach goal', async() => {
    await db.setAddress(operatorHash, operator);
    assetURI = 'No Goal';
    let tx = await crowdsale.createAssetOrder(assetURI, operatorID, 2, 20*ETH, brokerFee, {from:broker});
    //console.log(tx.logs[0].args._assetID);
    assetID = tx.logs[0].args._assetID;
    tokenAddress = tx.logs[0].args._tokenAddress;
    token = await Token.at(tokenAddress);
  });

  it('User3 funding', async() => {
    let tx = await crowdsale.buyAssetOrder(assetID, {from:user3, value:5*ETH});
    let user3Tokens = await token.balanceOf(user3);
    assert.equal(user3Tokens, 5*ETH*(100-brokerFee)/100);
  });

  it('User1 funding fail', async() => {
    web3.currentProvider.send({jsonrpc: "2.0", method: "evm_increaseTime", params: [3], id: 0});
    //After deadline
    let now = await web3.eth.getBlock('latest').timestamp;
    console.log(now);
    let deadlineHash = await hash.stringBytes('fundingDeadline', assetID);
    let deadline = await db.uintStorage(deadlineHash);
    console.log(Number(deadline));
    let err;
    try{
      await crowdsale.buyAssetOrder(assetID, {from:user1, value:5*ETH});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to pause', async() => {
    let err;
    try{
      await pausible.pause(crowdsale.address, {from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });


  it('Pause contract', async() => {
    //let pauseHash = await hash.stringAddress('paused', crowdsale.address)
    //await db.setBool(pauseHash, true);
    await pausible.pause(crowdsale.address);
  });

  it('Fail to refund: paused', async() => {
    let err;
    try{
      await crowdsale.refund(assetID, {from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Unpause contract', async() => {
    await pausible.unpause(crowdsale.address);
  });

  it('Refund', async() => {
    let totalTokens = await token.totalSupply();
    user3BalanceBefore = web3.eth.getBalance(user3);
    await crowdsale.refund(assetID);
    await token.withdraw({from:user3});
    user3BalanceAfter = web3.eth.getBalance(user3);
    assert.equal(bn(user3BalanceAfter).isGreaterThan(user3BalanceBefore), true);
  });

  it('Fail to send money to contract', async() => {
    let err;
    try{
      await web3.eth.sendTransaction({from:user3, to: crowdsale.address, value: ETH});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to destroy', async() => {
    let err;
    try{
      await crowdsale.destroy({from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Destroy', async() => {
    await crowdsale.destroy();
  });


});
