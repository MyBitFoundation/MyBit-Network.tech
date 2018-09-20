var bn = require('bignumber.js');

const Token = artifacts.require("./tokens/ERC20/DividendTokenERC20.sol");
const Crowdsale = artifacts.require("./crowdsale/CrowdsaleERC20.sol");
const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
//const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const BurnableToken = artifacts.require("./tokens/ERC20/BurnableToken.sol");
const Pausible = artifacts.require("./ownership/Pausible.sol");
const TokenFactory = artifacts.require("./crowdsale/TokenFactory.sol");
const Operators = artifacts.require("./ecosystem/Operators.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");


const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const broker = web3.eth.accounts[4];
const operator = web3.eth.accounts[5];
const tokenHolders = [user1, user2, user3, broker, operator];


const ETH = 1000000000000000000;
const scaling = 1000000000000000000000000000000000000;
const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = 1000000000000000000000;

contract('ERC20 Crowdsale', async() => {
  let token;
  let erc20;
  let crowdsale;
  let tokenFactory;
  let db;
  let cm;
  //let hash;
  let platform;
  let operators;
  let operatorID;
  let assetID;
  let assetURI;
  let tokenAddress;
  let pausible;

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

  it("Deploy standard token", async() => {
    erc20 = await BurnableToken.new('Dai', tokenSupply);
    console.log(erc20.address);
  });

  it("Spread erc20 to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await erc20.transfer(tokenHolders[i], tokenPerAccount);
      userBalance = await erc20.balanceOf(tokenHolders[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    // Check token ledger is correct
    let totalTokensCirculating = tokenHolders.length * tokenPerAccount;
    let remainingTokens = bn(tokenSupply).minus(totalTokensCirculating);
    let ledgerTrue = bn(await erc20.balanceOf(owner)).eq(remainingTokens);
    assert.equal(ledgerTrue, true);
  });

  it('Deploy token factory', async() => {
    tokenFactory = await TokenFactory.new();
  });

  it('Deploy crowdsale contract', async() => {
    crowdsale = await Crowdsale.new(db.address, tokenFactory.address);
    await cm.addContract('ERC20Crowdsale', crowdsale.address);
    await cm.addContract('Owner', owner); //Right now some database functions are operated from owner account
    await tokenFactory.addOwner(crowdsale.address);
  });

  it('Set operator', async() => {
    //Presumably there is some onboarding process for the operator?
    //operatorID = await hash.addressHash(operator);
    //operatorHash = await hash.stringBytes('operator', operatorID);
    //await db.setAddress(operatorHash, operator);
    operators = await Operators.new(db.address);
    await cm.addContract('Operators', operators.address);
    let tx = await operators.registerOperator(operator, 'Operator');
    operatorID = tx.logs[0].args._operatorID;
  });

  //Start successful funding
  it('Start funding', async() => {
    assetURI = 'BTC ATM';
    let tx = await crowdsale.startFundingPeriod(assetURI, operatorID, 10, 20*ETH, erc20.address, {from:broker});
    //console.log(tx.logs[0].args._assetID);
    assetID = tx.logs[0].args._assetID;
    tokenAddress = tx.logs[0].args._tokenAddress;
    console.log('Token Address: ' + tokenAddress);
    token = await Token.at(tokenAddress);
  });

  it('User1 funding', async() => {
    await erc20.approve(crowdsale.address, 5*ETH, {from:user1});
    let tx = await crowdsale.buyAsset(assetID, 5*ETH, {from:user1});
    console.log(Number(tx.logs[0].args._amount));
    let user1Tokens = await token.balanceOf(user1);
    console.log('Token Address: ' + token.address);
    console.log('User: ' + user1);
    console.log('User Tokens: ' + Number(user1Tokens));

    let tokenSupply = await token.totalSupply()
    console.log('Token Supply: ' + tokenSupply);
    assert.equal(user1Tokens, 5*ETH);
  });

  it('Asset already exists fail', async() => {
    let err;
    //Fail because asset already exists
    try{
      await crowdsale.startFundingPeriod(assetURI, operatorID, 10, 20*ETH, {from:broker});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to buy asset, fail to payout. No platform address', async() => {
    let err;
    try{
      await erc20.approve(crowdsale.address, 15*ETH, {from:user2});
      await crowdsale.buyAsset(assetID, 15*ETH, {from:user2});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set platform', async() => {
    //let platformHash = await hash.stringHash('platformWallet');
    //await db.setAddress(platformHash, owner);
    platform = await Platform.new(db.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformWallet(owner);
  });

  it('Fail to set platform wallet', async() => {
    let err;
    try{
      await platform.setPlatformWallet(broker, {from:broker});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('User2 funding', async() => {
    console.log(user2);
    ownerBalanceBefore = await erc20.balanceOf(owner);
    operatorBalanceBefore = await erc20.balanceOf(operator);
    await erc20.approve(crowdsale.address, 15*ETH, {from:user2});
    let tx = await crowdsale.buyAsset(assetID, 15*ETH, {from:user2});
    let user2Tokens = await token.balanceOf(user2);
    assert.equal(user2Tokens, 15*ETH);

    ownerBalanceAfter = await erc20.balanceOf(owner);
    console.log(Number(ownerBalanceAfter))
    assert.equal(bn(ownerBalanceAfter).minus(ownerBalanceBefore).isEqualTo(bn(ETH).multipliedBy(20).dividedBy(100)), true);

    operatorBalanceAfter = await erc20.balanceOf(operator);
    assert.equal(bn(operatorBalanceAfter).minus(operatorBalanceBefore).isEqualTo(bn(ETH).multipliedBy(20).minus( bn(ETH).multipliedBy(20).dividedBy(100) )), true);
  });

  it('User3 funding fail', async() => {
    //Funding finished
    let err;
    try{
      await erc20.approve(crowdsale.address, 5*ETH, {from:user3});
      await crowdsale.buyAsset(assetID, 5*ETH, {from:user3});
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
    operatorBalanceBefore = await erc20.balanceOf(operator);
    console.log(Number(operatorBalanceBefore));
    await erc20.approve(token.address, ETH, {from:operator});
    await token.issueDividends(ETH, {from: operator});
    operatorBalanceAfter = await erc20.balanceOf(operator);
    console.log(Number(bn(operatorBalanceAfter).minus(operatorBalanceBefore).plus(bn(ETH).multipliedBy(10))));
  });

  it('User1 withdraw dividends', async() => {
    user1BalanceBefore = await erc20.balanceOf(user1);
    await token.collectOwedDividends({from:user1});
    user1BalanceAfter = await erc20.balanceOf(user1);
    assert.equal(bn(user1BalanceAfter).isGreaterThan(user1BalanceBefore), true);
  });

  it('User2 withdraw dividends', async() => {
    user2BalanceBefore = await erc20.balanceOf(user2);
    await token.collectOwedDividends({from:user2});
    user2BalanceAfter = await erc20.balanceOf(user2);
    assert.equal(bn(user2BalanceAfter).isGreaterThan(user2BalanceBefore), true);
  });

  //Start failed funding
  it('Start failed funding', async() => {
    let err;

    await operators.removeOperator(operatorID);
    assetURI = 'Fail: No operator';

    try{
      await crowdsale.startFundingPeriod(assetURI, operatorID, 10, 20*ETH, {from:broker});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Start funding that does not reach goal', async() => {
    let tx = await operators.registerOperator(operator, 'NewOperator');
    operatorID = tx.logs[0].args._operatorID;
    assetURI = 'No Goal';
    tx = await crowdsale.startFundingPeriod(assetURI, operatorID, 2, 20*ETH, erc20.address, {from:broker});
    //console.log(tx.logs[0].args._assetID);
    assetID = tx.logs[0].args._assetID;
    tokenAddress = tx.logs[0].args._tokenAddress;
    token = await Token.at(tokenAddress);
  });

  it('User3 funding', async() => {
    await erc20.approve(crowdsale.address, 5*ETH, {from:user3});
    let tx = await crowdsale.buyAsset(assetID, 5*ETH, {from:user3});
    let user3Tokens = await token.balanceOf(user3);
    assert.equal(user3Tokens, 5*ETH);
  });

  it('User1 funding fail', async() => {
    web3.currentProvider.send({jsonrpc: "2.0", method: "evm_increaseTime", params: [3], id: 0});

    let err;
    try{
      await erc20.approve(crowdsale.address, 5*ETH, {from:user1});
      await crowdsale.buyAsset(assetID, 5*ETH, {from:user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Pause contract', async() => {
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
    user3BalanceBefore = await erc20.balanceOf(user3);
    await crowdsale.refund(assetID);
    await token.collectOwedDividends({from:user3});
    user3BalanceAfter = await erc20.balanceOf(user3);
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
  /*
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
  */

});
