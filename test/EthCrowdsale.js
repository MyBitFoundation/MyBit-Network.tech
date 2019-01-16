var bn = require('bignumber.js');

const Token = artifacts.require("./tokens/erc20/DividendToken.sol");
const PlatformToken = artifacts.require("./tokens/erc20/MyBitToken.sol");
const ERC20Burner = artifacts.require("./access/ERC20Burner.sol");
const Crowdsale = artifacts.require("./crowdsale/CrowdsaleETH.sol");
const CrowdsaleGenerator = artifacts.require("./crowdsale/CrowdsaleGeneratorETH.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const Operators = artifacts.require("./roles/Operators.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const AssetManagerFunds = artifacts.require("./roles/AssetManagerFunds.sol");
const Pausible = artifacts.require("./ownership/Pausible.sol");
const Platform = artifacts.require("./ecosystem/Platform.sol");
const API = artifacts.require("./database/API.sol");

const ETH = bn(10**18);
const scaling = bn(10**36);
const tokenSupply = bn(180000000).times(ETH);
const tokenPerAccount = bn(1000).times(ETH);
let assetManagerFee = 5;

contract('Ether Crowdsale', async(accounts) => {
  const owner = accounts[0];
  const user1 = accounts[6];
  const user2 = accounts[7];
  const user3 = accounts[8];
  const assetManager = accounts[4];
  const operator = accounts[5];
  const tokenHolders = [user1, user2, user3];

  let token;
  let platformToken;
  let crowdsale;
  let crowdsaleGen;
  let db;
  let events;
  let cm;
  let hash;
  let api;
  let platform;
  let assetManagerFunds;
  let operators;
  let operatorID;
  let operatorHash;
  let assetURI;
  let assetAddress;
  let pausible;

  it('Deploy hash contract', async() => {
    hash = await HashFunctions.new();
  });

  it('Deploy database contract', async() => {
    db = await Database.new([owner], true);
  });

  it('Deploy Events', async() => {
    events = await Events.new(db.address);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address, events.address);
    await db.enableContractManagement(cm.address);
  });

  it('Deploy api contract', async() => {
    api = await API.new(db.address);
  });

  it('Deploy MyB token', async() => {
    platformToken = await PlatformToken.new('MyBit', tokenSupply);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 1; i < accounts.length; i++) {
      //console.log(accounts[i]);
      await platformToken.transfer(accounts[i], tokenPerAccount);
      userBalance = bn(await platformToken.balanceOf(accounts[i]));
      assert.equal(userBalance.eq(tokenPerAccount), true);
    }
    // Check token ledger is correct
    let totalTokensCirculating = (accounts.length-1) * tokenPerAccount;
    let remainingTokens = bn(tokenSupply).minus(totalTokensCirculating);
    let ledgerTrue = bn(await platformToken.balanceOf(owner)).eq(remainingTokens);
    assert.equal(ledgerTrue, true);
  });

  it('Deploy platform funds', async() => {
    platform = await Platform.new(db.address, events.address);
    await cm.addContract('Platform', platform.address);
    await platform.setPlatformToken(platformToken.address);
  });

  it('Deploy burner contract', async() => {
    burner = await ERC20Burner.new(db.address, events.address);
    await cm.addContract("ERC20Burner", burner.address);
  });

  it('Deploy asset manager funds', async() => {
    assetManagerFunds = await AssetManagerFunds.new(db.address, events.address);
    await cm.addContract('AssetManagerFunds', assetManagerFunds.address);
  });

  it('Deploy pausible contract', async() => {
    pausible = await Pausible.new(db.address, events.address);
    await cm.addContract('Pausible', pausible.address);
  });

  it('Deploy CrowdsaleGenerator', async() => {
    crowdsaleGen = await CrowdsaleGenerator.new(db.address, events.address);
    await cm.addContract("CrowdsaleGeneratorETH", crowdsaleGen.address);
    await burner.setFee('0x667de2cd', crowdsaleGen.address,  250);
  });

  it('Deploy crowdsale contract', async() => {
    crowdsale = await Crowdsale.new(db.address, events.address);
    await cm.addContract('CrowdsaleETH', crowdsale.address);
    await cm.addContract('Owner', owner); //Right now some database functions are operated from owner account
    await burner.setFee('0xa71d4c6a', crowdsale.address,  250);
  });

  it('Deploy operators', async() => {
    operators = await Operators.new(db.address, events.address);
    await cm.addContract('Operators', operators.address);
  });

  it('Give platform burning permission', async() => {
    for(var i=1; i<accounts.length; i++){
      await cm.setContractStatePreferences(true, true, {from: accounts[i]});
      await platformToken.approve(burner.address, tokenSupply, {from:accounts[i]});
    }
  });

  it('Set operator', async() => {
    let block = await web3.eth.getBlock('latest');
    await operators.registerOperator(operator, 'Operator', 'Asset Type');
    let logs = await events.getPastEvents('LogOperator', {filter: {messageID: web3.utils.sha3('Operator registered'), origin: owner}, fromBlock: block.number});
    operatorID = logs[0].args.operatorID;
    await operators.acceptEther(operatorID, true, {from: operator});
  });

  //Start successful funding
  it('Start funding in the future', async() => {
    assetURI = 'BTC ATM';
    let block = await web3.eth.getBlock('latest');
    let now = bn(block.timestamp);
    console.log(now);
    let startTime = now.plus(86400); //Startime is a day from now
    await crowdsaleGen.createAssetOrderETH(assetURI, assetManager, operatorID, 100, startTime, bn(20).times(ETH), assetManagerFee, 0, {from:assetManager});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset funding started'), manager: assetManager}, fromBlock: block.number});
    assetAddress = logs[0].args.asset;
    token = await Token.at(assetAddress);
  });

  it('User1 funding fail', async() => {
    //Start time hasn't been reached
    let err;
    try{
      await crowdsale.buyAssetOrderETH(assetAddress, user1, {from:user1, value:bn(5).times(ETH)});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('User1 funding', async() => {
    web3.currentProvider.send({
        jsonrpc: "2.0",
        method: "evm_increaseTime",
        params: [86400], id: 0
    }, function(){
      console.log('Move forward in time');
    });
    let tokenSupply = bn(await token.totalSupply());
    console.log('Token Supply: ' + tokenSupply.toNumber());
    await crowdsale.buyAssetOrderETH(assetAddress, user1, {from:user1, value:bn(5).times(ETH)});
    let user1Tokens = bn(await token.balanceOf(user1));
    assert.equal(user1Tokens.eq(bn(5).times(ETH)), true);
  });

  it('Asset already exists fail', async() => {
    let err;
    //Fail because asset already exists
    try{
      await crowdsaleGen.createAssetOrderETH(assetURI, assetManager, operatorID, 10, 0, bn(20).times(ETH), assetManagerFee, 0, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });
/*
  it('Fail to buy asset, fail to payout. No platform address', async() => {
    let err;
    try{
      await crowdsale.buyAssetOrderETH(assetAddress, user2, {from:user2, value:1bn(5).times(ETH)});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });
*/
  it('Set platform', async() => {
    await platform.setPlatformWallet(owner);
  });

  it('Fail to set platform wallet', async() => {
    let err;
    try{
      await platform.setPlatformWallet(assetManager, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('User2 funding', async() => {
    //console.log(web3.eth.getBalance(user2));
    ownerBalanceBefore = await web3.eth.getBalance(owner);
    operatorBalanceBefore = await web3.eth.getBalance(operator);

    await crowdsale.buyAssetOrderETH(assetAddress, user2, {from:user2, value:bn(15).times(ETH)});
    let user2Tokens = bn(await token.balanceOf(user2));
    assert.equal(user2Tokens.eq(bn(15).times(ETH)), true);


    ownerBalanceAfter = await web3.eth.getBalance(owner);
    assert.equal(bn(ownerBalanceAfter).minus(ownerBalanceBefore).isEqualTo(bn(ETH).multipliedBy(20).dividedBy(100)), true);

    operatorBalanceAfter = await web3.eth.getBalance(operator);
    assert.equal(bn(operatorBalanceAfter).minus(operatorBalanceBefore).isEqualTo(bn(ETH).multipliedBy(20).minus( bn(ETH).multipliedBy(20).dividedBy(100) )), true);
  });

  it('User3 funding fail', async() => {
    //Funding finished
    let err;
    try{
      await crowdsale.buyAssetOrderETH(assetAddress, user3, {from:user3, value:bn(5).times(ETH)});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to refund', async() => {
    let err;
    try{
      await crowdsale.refund(assetAddress, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Test dividends', async() => {
    operatorBalanceBefore = web3.eth.getBalance(operator);
    await web3.eth.sendTransaction({from: operator, to: assetAddress, value:bn(10).times(ETH)});
    operatorBalanceAfter = web3.eth.getBalance(operator);
    console.log(Number(bn(operatorBalanceAfter).minus(operatorBalanceBefore).plus(bn(ETH).multipliedBy(10))));
  });

  it('User1 withdraw dividends', async() => {
    user1BalanceBefore = bn(await web3.eth.getBalance(user1));
    await token.withdraw({from:user1});
    user1BalanceAfter = bn(await web3.eth.getBalance(user1));
    assert.equal(user1BalanceAfter.isGreaterThan(user1BalanceBefore), true);
  });

  it('User2 withdraw dividends', async() => {
    user2BalanceBefore = bn(await web3.eth.getBalance(user2));
    await token.withdraw({from:user2});
    user2BalanceAfter = bn(await web3.eth.getBalance(user2));
    assert.equal(user2BalanceAfter.isGreaterThan(user2BalanceBefore), true);
  });

  it('Asset manager withdraw dividends', async() => {
    managerBalanceBefore = bn(await web3.eth.getBalance(assetManager));
    await assetManagerFunds.withdraw(assetAddress, assetManager, {from:assetManager});
    managerBalanceAfter = bn(await web3.eth.getBalance(assetManager));
    assert.equal(managerBalanceAfter.isGreaterThan(managerBalanceBefore), true);
  });

  //Start failed funding
  it('Start funding without operator set', async() => {
    let err;
    await operators.removeOperator(operatorID);
    assetURI = 'Fail: No operator';
    try{
      await crowdsaleGen.createAssetOrderETH(assetURI, assetManager, operatorID, 10, 0, bn(20).times(ETH), assetManagerFee, 0, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set operator', async() => {
    let block = await web3.eth.getBlock('latest');
    await operators.registerOperator(operator, 'Operator', 'Asset Type');
    let logs = await events.getPastEvents('LogOperator', {filter: {messageID: web3.utils.sha3('Operator registered'), origin: owner}, fromBlock: block.number});
    operatorID = logs[0].args.operatorID;
    await operators.acceptEther(operatorID, true, {from: operator});
  });

  it('Start funding that does not reach goal', async() => {
    assetURI = 'No Goal';
    let block = await web3.eth.getBlock('latest');
    await crowdsaleGen.createAssetOrderETH(assetURI, assetManager, operatorID, 2, 0, bn(20).times(ETH), assetManagerFee, 0, {from:assetManager});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset funding started'), manager: assetManager}, fromBlock: block.number});
    assetAddress = logs[0].args.asset;
    token = await Token.at(assetAddress);
  });

  it('User3 funding', async() => {
    await crowdsale.buyAssetOrderETH(assetAddress, user3, {from:user3, value:bn(5).times(ETH)});
    let user3Tokens = bn(await token.balanceOf(user3));
    assert.equal(user3Tokens.eq(bn(5).times(ETH)), true);
  });

  it('User1 funding fail', async() => {
    web3.currentProvider.send({
        jsonrpc: "2.0",
        method: "evm_increaseTime",
        params: [3], id: 0
    }, function(){
      console.log('Move forward in time');
    });

    //After deadline
    let now = await web3.eth.getBlock('latest').timestamp;
    console.log(now);
    let deadlineHash = await hash.stringBytes('fundingDeadline', assetAddress);
    let deadline = await db.uintStorage(deadlineHash);
    console.log(Number(deadline));
    let err;
    try{
      await crowdsale.buyAssetOrderETH(assetAddress, user1, {from:user1, value:bn(5).times(ETH)});
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
    await pausible.pause(crowdsale.address);
  });

  it('Fail to refund: paused', async() => {
    let err;
    try{
      await crowdsale.refund(assetAddress, {from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Unpause contract', async() => {
    await pausible.unpause(crowdsale.address);
  });

  it('Refund', async() => {
    let totalTokens = bn(await token.totalSupply());
    user3BalanceBefore = bn(await web3.eth.getBalance(user3));
    await crowdsale.refund(assetAddress);
    await token.withdraw({from:user3});
    user3BalanceAfter = bn(await web3.eth.getBalance(user3));
    assert.equal(user3BalanceAfter.isGreaterThan(user3BalanceBefore), true);
  });

  //Start successful funding with no manager fee
  it('Start funding', async() => {
    assetURI = 'Free Management';
    assetManagerFee = 0;
    let block = await web3.eth.getBlock('latest');
    await crowdsaleGen.createAssetOrderETH(assetURI, assetManager, operatorID, 1, 0, bn(2).times(ETH), assetManagerFee, 0, {from:assetManager});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset funding started'), manager: assetManager}, fromBlock: block.number});
    assetAddress = logs[0].args.asset;
    token = await Token.at(assetAddress);
  });

  it('User1 funding', async() => {
    let tokenSupply = await token.totalSupply()
    console.log('Token Supply: ' + tokenSupply);
    await crowdsale.buyAssetOrderETH(assetAddress, user1, {from:user1, value:bn(2).times(ETH)});
    let user1Tokens = bn(await token.balanceOf(user1));
    console.log(user1Tokens.toNumber());
    assert.equal(user1Tokens.eq(bn(2).times(ETH)), true);
    assert.equal(await token.mintingFinished(), true);
    assert.equal(bn(await token.balanceOf(assetManager)).eq(0), true);
    assert.equal(await api.crowdsaleFinalized(assetAddress), true);
  });


  it('Fail funding with 100% manager fee', async() => {
    assetURI = 'Free Management';
    assetManagerFee = 100;
    let err;
    try {
      await crowdsaleGen.createAssetOrderETH(assetURI, assetManager, operatorID, 1, 0, bn(2).times(ETH), assetManagerFee, 0, {from:assetManager});
    }
    catch(e) {
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  //Start successful funding with 99% manager fee
  it('Start funding', async() => {
    assetURI = '99%managementfee.com';
    assetManagerFee = 99;
    let block = await web3.eth.getBlock('latest');
    await crowdsaleGen.createAssetOrderETH(assetURI, assetManager, operatorID, 10, 0, bn(2).times(ETH), assetManagerFee, 0, {from:assetManager});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset funding started'), manager: assetManager}, fromBlock: block.number});
    assetAddress = logs[0].args.asset;
    token = await Token.at(assetAddress);
  });


  it('User2 funding ', async() => {
    await crowdsale.buyAssetOrderETH(assetAddress, user2, {from:user2, value:bn(2).times(ETH)});
    let user2Tokens = bn(await token.balanceOf(user2));
    assert.equal(user2Tokens.eq(bn(2).times(ETH)), true);
    assert.equal(await token.mintingFinished(), true);
    assert.equal(await api.crowdsaleFinalized(assetAddress), true);
  });

  it('Fail asset crowdsale with 0 amount to raise', async() => {
    assetURI = 'raisenothing.com';
    assetManagerFee = 42;
    let err;
    try{
      await crowdsaleGen.createAssetOrderETH(assetURI, assetManager, operatorID, 10, 0, 0, assetManagerFee, 0, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  // amountToRaise == 1
  it('Start funding with small amount to raise', async() => {
    assetURI = 'lowgoals.com';
    assetManagerFee = 50;
    let block = await web3.eth.getBlock('latest');
    await crowdsaleGen.createAssetOrderETH(assetURI, assetManager, operatorID, 10, 0, 1, assetManagerFee, 0, {from:assetManager});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset funding started'), manager: assetManager}, fromBlock: block.number});
    assetAddress = logs[0].args.asset;
    token = await Token.at(assetAddress);
  });


  // Note it's possible for asset-token supply to be larger than wei received due to rounding error
  // This example makes 2 asset tokens, but only receives 1 WEI as it mints a token for the assetmanager
  it('User3 funding 1 wei', async() => {
    await crowdsale.buyAssetOrderETH(assetAddress, user3, {from:user3, value:1});
    let user3Tokens = bn(await token.balanceOf(user3));
    assert.equal(user3Tokens.eq(1), true);
    assert.equal(bn(await token.balanceOf(assetManager)).eq(0), true);//This should round down to zero
    assert.equal(await token.mintingFinished(), true);
    assert.equal(await api.crowdsaleFinalized(assetAddress), true);
  });


    // TODO: try to force integer rounding

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
