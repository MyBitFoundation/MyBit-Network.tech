var bn = require('bignumber.js');

const AssetExchange = artifacts.require("./ecosystem/AssetExchange.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require('./database/Events.sol');
const ContractManager = artifacts.require("./database/ContractManager.sol");
const DivToken = artifacts.require("./tokens/ERC20/DividendToken.sol");
const PlatformToken = artifacts.require("./tokens/erc20/MyBitToken.sol");
const ERC20Burner = artifacts.require("./access/ERC20Burner.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Operators = artifacts.require("./roles/Operators.sol");
const Platform = artifacts.require("./ecosystem/Platform.sol");
const Pausible = artifacts.require("./ownership/Pausible.sol");

const ETH = 10**18;
const tokenSupply = bn(180000000).times(ETH);
const tokenPerAccount = bn(1000).times(ETH);
const token1PerAccount = bn(10).times(ETH);
const token2PerAccount = bn(2).times(ETH);

contract('Asset Exchange', async(accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const user3 = accounts[3];
  const broker1 = accounts[4];
  const broker2 = accounts[5];
  const operator = accounts[6];
  const owner2 = accounts[7];
  const asset1Holders = [user1, user2];
  const asset2Holders = [user3, user2];

  let dax;
  let db;
  let events;
  let cm;
  let burner;
  let hash;
  let asset1Token;
  let asset2Token;
  let platformToken;
  let platform;
  let operators;
  let operatorID;
  //let order1ID;
  let order1Creator;
  //let order2ID;
  let order2Creator;
  let pausible;

  it('Deploy hash contract', async() => {
    hash = await HashFunctions.new();
  });

  it('Deploy database contract', async() => {
    db = await Database.new([owner, owner2], true);
  });

  it('Deploy Events', async() => {
    events = await Events.new(db.address);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address, events.address);
    await db.enableContractManagement(cm.address);
    await cm.addContract('Owner', owner);
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
    let totalTokensCirculating = bn(accounts.length-1).times(tokenPerAccount);
    let remainingTokens = bn(tokenSupply).minus(totalTokensCirculating);
    let ledgerTrue = bn(await platformToken.balanceOf(owner)).eq(remainingTokens);
    assert.equal(ledgerTrue, true);
  });

  it('Deploy platform', async() => {
    platform = await Platform.new(db.address, events.address);
    await cm.addContract('Platform', platform.address);
    await platform.setPlatformWallet(owner);
    await platform.setPlatformToken(platformToken.address);
  });

  it('Deploy burner contract', async() => {
    burner = await ERC20Burner.new(db.address, events.address);
    await cm.addContract("ERC20Burner", burner.address);
  });

  it('Deploy pausible contract', async() => {
    pausible = await Pausible.new(db.address, events.address);
    await cm.addContract('Pausible', pausible.address);
  });

  it('Deploy exchange', async() => {
    dax = await AssetExchange.new(db.address, events.address);
    await cm.addContract('AssetExchange', dax.address);
    await burner.setFee('0xf08fa7b0', dax.address,  250);
    await burner.setFee('0xf5e20d6f', dax.address,  250);
  });

  it('Set operator', async() => {
    operators = await Operators.new(db.address, events.address);
    await cm.addContract('Operators', operators.address);
    let block = await web3.eth.getBlock('latest');
    await operators.registerOperator(operator, 'Operator', 'Asset Type');
    let logs = await events.getPastEvents('LogOperator', {filter: {messageID: web3.utils.sha3('Operator registered'), origin: owner}, fromBlock: block.number});
    operatorID = logs[0].args.operatorID;
  });

  it('Give platform burning permission', async() => {
    for(var i=1; i<accounts.length; i++){
      await cm.setContractStatePreferences(true, true, {from: accounts[i]});
      await platformToken.approve(burner.address, tokenSupply, {from:accounts[i]});
    }
  });

  it('Give users access to DAX', async() => {
    let users = [user1, user2, user3];
    let accessHash;
    let expiryHash;
    let block;
    for(var i=0; i<users.length; i++){
      accessHash = await hash.stringAddress('userAccess', users[i]);
      await db.setUint(accessHash, 3);
      expiryHash = await hash.stringAddress('userAccessExpiration', users[i]);
      block = await web3.eth.getBlock('latest');
      await db.setUint(expiryHash, bn(block.timestamp).plus(100000));
    }
  });

  it("Deploy asset1 token", async() => {
    asset1Token = await DivToken.new('Asset1', owner);
    let tokenHash = await hash.stringAddress('tokenAddress', asset1Token.address);
    await db.setAddress(tokenHash, asset1Token.address);
    let finalizedHash = await hash.stringAddress('crowdsaleFinalized', asset1Token.address);
    db.setBool(finalizedHash, true);
  });

  it("Deploy asset2 token", async() => {
    asset2Token = await DivToken.new('Asset2', owner);
    let tokenHash = await hash.stringAddress('tokenAddress', asset2Token.address);
    await db.setAddress(tokenHash, asset2Token.address);
    let finalizedHash = await hash.stringAddress('crowdsaleFinalized', asset2Token.address);
    db.setBool(finalizedHash, true);
  });

  it("Spread asset1 tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < asset1Holders.length; i++) {
      //console.log(accounts[i]);
      await asset1Token.mint(asset1Holders[i], token1PerAccount);
      userBalance = bn(await asset1Token.balanceOf(asset1Holders[i]));
      assert.equal(userBalance.eq(token1PerAccount), true);
    }
    assert.equal(await asset1Token.balanceOf(owner), 0);
  });

  it("Spread asset2 tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < asset2Holders.length; i++) {
      //console.log(accounts[i]);
      await asset2Token.mint(asset2Holders[i], token2PerAccount);
      userBalance = bn(await asset1Token.balanceOf(asset1Holders[i]));
      assert.equal(userBalance.eq(token1PerAccount), true);
    }
    assert.equal(await asset2Token.balanceOf(owner), 0);
  });

  it("Fail to create sell order", async() => {
    let err;
    //Fail because user not approved
    try{
      let tokenAmount = 2*ETH;
      let tokenPrice = 0.05*ETH;
      await dax.createSellOrder(asset1Token.address, user1, tokenAmount, tokenPrice, {from:user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to create sell order", async() => {
    let err;
    //Fail because no payment
    try{
      let tokenAmount = 0;
      let tokenPrice = 0.05*ETH;
      await asset1Token.approve(dax.address, tokenAmount, {from:user1});
      await dax.createSellOrder(asset1Token.address, user1, tokenAmount, tokenPrice, {from:user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  //Create sell order
  it('Create sell order', async() => {
    //Sell 2 tokens, at the price of 0.05 eth per token, i.e. for 0.1 eth total
    let tokenAmount = 2*ETH;
    let tokenPrice = 0.05*ETH;
    await asset1Token.approve(dax.address, tokenAmount, {from:user1});
    let block = await web3.eth.getBlock('latest');
    await dax.createSellOrder(asset1Token.address, user1, tokenAmount, tokenPrice, {from:user1});
    let logs = await events.getPastEvents('LogExchange', {filter: {messageID: web3.utils.sha3('Sell order created'), origin: user1}, fromBlock: block.number});
    order1Creator = logs[0].args.account;
    assert.equal(order1Creator, user1);
    //console.log(order1Creator);
  });

  it("Fail to create sell order", async() => {
    let err;
    //Fail because same order
    try{
      let tokenAmount = 2*ETH;
      let tokenPrice = 0.05*ETH;
      await asset1Token.approve(dax.address, tokenAmount, {from:user1});
      await dax.createSellOrder(asset1Token.address, user1, tokenAmount, tokenPrice, {from:user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to buy order", async() => {
    let err;
    //Fail because wrong seller
    try{
      let tokenAmount = 2*ETH;
      let tokenPrice = 0.05*ETH;
      let amount = Number(bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH));
      await asset1Token.approve(dax.address, tokenAmount, {from:user2});
      await dax.buyAsset(asset1Token.address, user3, user2, tokenAmount, tokenPrice, {from:user3, value:amount});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });
/*
  it("Fail to buy order", async() => {
    let err;
    //Fail because user not approved
    try{
      let tokenAmount = 2*ETH;
      let tokenPrice = 0.05*ETH;
      let amount = Number(bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH));
      await asset1Token.approve(dax.address, tokenAmount, {from:user2});
      await dax.buyAsset(asset1Token.address, order1Creator, tokenAmount, tokenPrice, {from:accounts[9], value:amount});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to buy order", async() => {
    let err;
    //Fail because user approval expired
    try{
      let tokenAmount = 2*ETH;
      let tokenPrice = 0.05*ETH;
      let amount = Number(bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH));
      await asset1Token.approve(dax.address, tokenAmount, {from:user2});
      let accessHash = await hash.stringAddress('userAccess', accounts[9]);
      await db.setUint(accessHash, 3);
      await dax.buyAsset(asset1Token.address, order1Creator, tokenAmount, tokenPrice, {from:accounts[9], value:amount});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });
*/
  it("Fail to buy order", async() => {
    let err;
    //Fail because wrong value
    try{
      let tokenAmount = 2*ETH;
      let tokenPrice = 0.05*ETH;
      let amount = ETH;
      await dax.buyAsset(asset1Token.address, user3, order1Creator, tokenAmount, tokenPrice, {from:user3, value:amount});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to buy order", async() => {
    let err;
    //Fail because wrong value
    try{
      let tokenAmount = 2*ETH;
      let tokenPrice = 0.05*ETH;
      let amount = 0;
      await dax.buyAsset(asset1Token.address, user3, order1Creator, tokenAmount, tokenPrice, {from:user3, value:amount});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Pause contract', async() => {
    await pausible.pause(dax.address);
  });

  it("Fail to buy order", async() => {
    let err;
    //Fail because paused
    try{
      let tokenAmount = 2*ETH;
      let tokenPrice = 0.05*ETH;
      let amount = Number(bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH));
      await dax.buyAsset(asset1Token.address, user3, order1Creator, tokenAmount, tokenPrice, {from:user3, value:amount});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Unpause contract', async() => {
    await pausible.unpause(dax.address);
  });

  it('Buy order1', async() => {
    let tokenAmount = 2*ETH;
    let tokenPrice = 0.05*ETH;
    let amount = Number(bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH));
    await dax.buyAsset(asset1Token.address, user3, order1Creator, tokenAmount, tokenPrice, {from:user3, value:amount});
  });

  it("Fail to create buy order", async() => {
    let err;
    //Fail because no payment
    try{
      let tokenAmount = 0.5*ETH;
      let tokenPrice = 0.1*ETH;
      let amount = 0;
      await dax.createBuyOrder(asset2Token.address, user2, tokenAmount, tokenPrice, {from:user2, value:amount});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to create buy order", async() => {
    let err;
    //Fail because wrong payment
    try{
      let tokenAmount = 0.5*ETH;
      let tokenPrice = 0.1*ETH;
      let amount = ETH;
      await dax.createBuyOrder(asset2Token.address, user2, tokenAmount, tokenPrice, {from:user2, value:amount});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to create buy order", async() => {
    let err;
    //Fail because invalid asset
    try{
      let tokenAmount = 0.5*ETH;
      let tokenPrice = 0.1*ETH;
      let amount = Number(bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH));
      let fakeAssetID = await hash.getAssetID('FakeAsset', ETH, operatorID, {from:user2});
      await dax.createBuyOrder('', user2, tokenAmount, tokenPrice, {from:user2, value:amount});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to create buy order", async() => {
    let err;
    //Fail because invalid asset
    try{
      let tokenAmount = 0.5*ETH;
      let tokenPrice = 0.1*ETH;
      let amount = Number(bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH));
      let fakeAssetID = await hash.getAssetID('FakeAsset', ETH, operatorID, {from:user2});
      await dax.createBuyOrder(fakeAssetID, user2, tokenAmount, tokenPrice, {from:user2, value:amount});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Create buy order', async() => {
    //Sell 2 tokens, at the price of 0.05 eth per token, i.e. for 0.1 eth total
    let tokenAmount = 0.5*ETH;
    let tokenPrice = 0.1*ETH;
    let amount = Number(bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH));
    let block = await web3.eth.getBlock('latest');
    await dax.createBuyOrder(asset2Token.address, user2, tokenAmount, tokenPrice, {from:user2, value:amount});
    let logs = await events.getPastEvents('LogExchange', {filter: {messageID: web3.utils.sha3('Buy order created'), origin: user2}, fromBlock: block.number});
    order2Creator = logs[0].args.account;
    assert.equal(order2Creator, user2);
  });

  it("Fail to create buy order", async() => {
    let err;
    //Fail because same order
    try{
      let tokenAmount = 0.5*ETH;
      let tokenPrice = 0.1*ETH;
      let amount = Number(bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH));
      await dax.createBuyOrder(asset2Token.address, user2, tokenAmount, tokenPrice, {from:user2, value:amount});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to sell", async() => {
    let err;
    //Fail because same order
    try{
      let tokenAmount = 0.5*ETH;
      let tokenPrice = 0.1*ETH;
      await asset2Token.approve(dax.address, tokenAmount, {from:user3});
      await dax.sellAsset(asset2Token.address, user3, owner, tokenAmount, tokenPrice, {from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Sell order2', async() => {
    let tokenAmount = 0.5*ETH;
    let tokenPrice = 0.1*ETH;
    await asset2Token.approve(dax.address, tokenAmount, {from:user3});
    await dax.sellAsset(asset2Token.address, user3, order2Creator, tokenAmount, tokenPrice, {from:user3});
  });

  it('Withdraw', async() => {
    let balanceBefore = bn(await web3.eth.getBalance(user3));
    await dax.withdraw({from:user3});
    let balanceAfter = bn(await web3.eth.getBalance(user3));
    let diff = balanceAfter.minus(balanceBefore);
    assert.equal(diff.isGreaterThan(0), true);
  });

  it('Create buy order', async() => {
    //Sell 2 tokens, at the price of 0.05 eth per token, i.e. for 0.1 eth total
    let tokenAmount = 10*ETH;
    let tokenPrice = 0.1*ETH;
    let amount = bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH);
    let block = await web3.eth.getBlock('latest');
    await dax.createBuyOrder(asset2Token.address, user2, tokenAmount, tokenPrice, {from:user2, value:amount});
    let logs = await events.getPastEvents('LogExchange', {filter: {messageID: web3.utils.sha3('Buy order created'), origin: user2}, fromBlock: block.number});
    order3Creator = logs[0].args.account;
  });

  it("Fail to delete order", async() => {
    let err;
    //Fail because wrong user
    try{
      let tokenAmount = 10*ETH;
      let tokenPrice = 0.1*ETH;
      await dax.deleteOrder(asset2Token.address, user3, tokenAmount, tokenPrice, true, {from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Delete order", async() => {
    let tokenAmount = 10*ETH;
    let tokenPrice = 0.1*ETH;
    await dax.deleteOrder(asset2Token.address, user2, tokenAmount, tokenPrice, true, {from:user2});
  });

  it('Create sell order', async() => {
    let tokenAmount = 0.5*ETH;
    let tokenPrice = 0.05*ETH;
    await asset1Token.approve(dax.address, tokenAmount, {from:user1});
    await dax.createSellOrder(asset1Token.address, user1, tokenAmount, tokenPrice, {from:user1});
  });

  it("Delete order", async() => {
    let tokenAmount = 0.5*ETH;
    let tokenPrice = 0.05*ETH;
    await dax.deleteOrder(asset1Token.address, user1, tokenAmount, tokenPrice, false, {from:user1});
  });

  it('Fail to send ether to contract', async() => {
    let err;
    //Fail to send ether
    try{
      await web3.eth.sendTransaction({from:owner, to:dax.address, value:ETH});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to destroy', async() => {
    let err;
    //Fail because initializer == msg.sender
    try{
      await dax.destroy(owner, owner);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to destroy', async() => {
    let err;
    //Fail because bool is not set
    try{
      await dax.destroy(owner2, owner);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to destroy', async() => {
    let err;
    //Fail because not owner
    try{
      await dax.destroy(owner2, owner, {from:user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Destroy', async() => {
    let ownerHash = await hash.addressHash(owner);
    let initiatorHash = await hash.getFunctionInitiatorHash(dax.address, owner2, ownerHash);
    db.setBool(initiatorHash, true);
    let balanceBefore = bn(await web3.eth.getBalance(owner));
    await dax.destroy(owner2, owner);
    let balanceAfter = bn(await web3.eth.getBalance(owner));
    let diff = bn(balanceAfter).minus(balanceBefore);
    assert.equal(diff.isGreaterThan(0), true);
  });

});
