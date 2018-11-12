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
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");
const Pausible = artifacts.require("./ownership/Pausible.sol");
const Promisify = (inner) =>
    new Promise((resolve, reject) =>
        inner((err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    );

const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const broker1 = web3.eth.accounts[4];
const broker2 = web3.eth.accounts[5];
const operator = web3.eth.accounts[6];
const owner2 = web3.eth.accounts[7];
const asset1Holders = [user1, user2];
const asset2Holders = [user3, user2];

const ETH = 1000000000000000000;
const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = 1000000000000000000000;
const token1PerAccount = 10*ETH;
const token2PerAccount = 2*ETH;

contract('Asset Exchange', async() => {
  let dax;
  let db;
  let events;
  let cm;
  let burner;
  let hash;
  let asset1ID;
  let asset1Token;
  let asset2ID;
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
    for (var i = 1; i < web3.eth.accounts.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await platformToken.transfer(web3.eth.accounts[i], tokenPerAccount);
      userBalance = await platformToken.balanceOf(web3.eth.accounts[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    // Check token ledger is correct
    let totalTokensCirculating = (web3.eth.accounts.length-1) * tokenPerAccount;
    let remainingTokens = bn(tokenSupply).minus(totalTokensCirculating);
    let ledgerTrue = bn(await platformToken.balanceOf(owner)).eq(remainingTokens);
    assert.equal(ledgerTrue, true);
  });

  it('Deploy platform', async() => {
    platform = await Platform.new(db.address, events.address);
    await cm.addContract('PlatformFunds', platform.address);
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
    let e = events.LogOperator({message: 'Operator registered', origin: owner}, {fromBlock: block.number, toBlock: 'latest'});
    let logs = await Promisify(callback => e.get(callback));
    operatorID = logs[0].args.operatorID;
  });

  it('Give platform burning permission', async() => {
    for(var i=1; i<web3.eth.accounts.length; i++){
      await cm.setContractStatePreferences(true, true, {from: web3.eth.accounts[i]});
      await platformToken.approve(burner.address, tokenSupply, {from:web3.eth.accounts[i]});
    }
  });

  it('Give users access to DAX', async() => {
    let users = [user1, user2, user3];
    let accessHash;
    let expiryHash;
    for(var i=0; i<users.length; i++){
      accessHash = await hash.stringAddress('userAccess', users[i]);
      await db.setUint(accessHash, 3);
      expiryHash = await hash.stringAddress('userAccessExpiration', users[i]);
      await db.setUint(expiryHash, await web3.eth.getBlock('latest').timestamp+100000);
    }
  });

  it("Generate assetIDs", async() => {
    asset1ID = await hash.getAssetID('Asset1', 20*ETH, operatorID, {from:broker1});
    asset2ID = await hash.getAssetID('Asset2', 4*ETH, operatorID, {from:broker2});
  });

  it("Deploy asset1 token", async() => {
    asset1Token = await DivToken.new('Asset1', owner);
    let tokenHash = await hash.stringBytes('tokenAddress', asset1ID);
    await db.setAddress(tokenHash, asset1Token.address);
    let finalizedHash = await hash.stringBytes('crowdsaleFinalized', asset1ID);
    db.setBool(finalizedHash, true);
  });

  it("Deploy asset2 token", async() => {
    asset2Token = await DivToken.new('Asset2', owner);
    let tokenHash = await hash.stringBytes('tokenAddress', asset2ID);
    await db.setAddress(tokenHash, asset2Token.address);
    let finalizedHash = await hash.stringBytes('crowdsaleFinalized', asset2ID);
    db.setBool(finalizedHash, true);
  });

  it("Spread asset1 tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < asset1Holders.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await asset1Token.mint(asset1Holders[i], token1PerAccount);
      userBalance = await asset1Token.balanceOf(asset1Holders[i]);
      assert.equal(userBalance, token1PerAccount);
    }
    assert.equal(await asset1Token.balanceOf(owner), 0);
  });

  it("Spread asset2 tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < asset2Holders.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await asset2Token.mint(asset2Holders[i], token2PerAccount);
      userBalance = await asset2Token.balanceOf(asset2Holders[i]);
      assert.equal(userBalance, token2PerAccount);
    }
    assert.equal(await asset2Token.balanceOf(owner), 0);
  });

  it("Fail to create sell order", async() => {
    let err;
    //Fail because user not approved
    try{
      let tokenAmount = 2*ETH;
      let tokenPrice = 0.05*ETH;
      await dax.createSellOrder(asset1ID, tokenAmount, tokenPrice, {from:user1});
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
      await dax.createSellOrder(asset1ID, tokenAmount, tokenPrice, {from:user1});
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
    await dax.createSellOrder(asset1ID, tokenAmount, tokenPrice, {from:user1});
    let e = events.LogExchange({message: 'Sell order created', origin: user1}, {fromBlock: block.number, toBlock: 'latest'});
    let logs = await Promisify(callback => e.get(callback));
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
      await dax.createSellOrder(asset1ID, tokenAmount, tokenPrice, {from:user1});
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
      await dax.buyAsset(asset1ID, user2, tokenAmount, tokenPrice, {from:user3, value:amount});
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
      await dax.buyAsset(asset1ID, order1Creator, tokenAmount, tokenPrice, {from:web3.eth.accounts[9], value:amount});
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
      let accessHash = await hash.stringAddress('userAccess', web3.eth.accounts[9]);
      await db.setUint(accessHash, 3);
      await dax.buyAsset(asset1ID, order1Creator, tokenAmount, tokenPrice, {from:web3.eth.accounts[9], value:amount});
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
      await dax.buyAsset(asset1ID, order1Creator, tokenAmount, tokenPrice, {from:user3, value:amount});
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
      await dax.buyAsset(asset1ID, order1Creator, tokenAmount, tokenPrice, {from:user3, value:amount});
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
      await dax.buyAsset(asset1ID, order1Creator, tokenAmount, tokenPrice, {from:user3, value:amount});
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
    await dax.buyAsset(asset1ID, order1Creator, tokenAmount, tokenPrice, {from:user3, value:amount});
  });

  it("Fail to create buy order", async() => {
    let err;
    //Fail because no payment
    try{
      let tokenAmount = 0.5*ETH;
      let tokenPrice = 0.1*ETH;
      let amount = 0;
      await dax.createBuyOrder(asset2ID, tokenAmount, tokenPrice, {from:user2, value:amount});
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
      await dax.createBuyOrder(asset2ID, tokenAmount, tokenPrice, {from:user2, value:amount});
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
      await dax.createBuyOrder('', tokenAmount, tokenPrice, {from:user2, value:amount});
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
      await dax.createBuyOrder(fakeAssetID, tokenAmount, tokenPrice, {from:user2, value:amount});
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
    await dax.createBuyOrder(asset2ID, tokenAmount, tokenPrice, {from:user2, value:amount});
    let e = events.LogExchange({message: 'Buy order created', origin: user2}, {fromBlock: block.number, toBlock: 'latest'});
    let logs = await Promisify(callback => e.get(callback));
    console.log(logs);
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
      await dax.createBuyOrder(asset2ID, tokenAmount, tokenPrice, {from:user2, value:amount});
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
      await dax.sellAsset(asset2ID, owner, tokenAmount, tokenPrice, {from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Sell order2', async() => {
    let tokenAmount = 0.5*ETH;
    let tokenPrice = 0.1*ETH;
    await asset2Token.approve(dax.address, tokenAmount, {from:user3});
    await dax.sellAsset(asset2ID, order2Creator, tokenAmount, tokenPrice, {from:user3});
  });

  it('Withdraw', async() => {
    let balanceBefore = web3.eth.getBalance(user3);
    await dax.withdraw({from:user3});
    let balanceAfter = web3.eth.getBalance(user3);
    let diff = bn(balanceAfter).minus(balanceBefore);
    assert.equal(diff.isGreaterThan(0), true);
  });

  it('Create buy order', async() => {
    //Sell 2 tokens, at the price of 0.05 eth per token, i.e. for 0.1 eth total
    let tokenAmount = 10*ETH;
    let tokenPrice = 0.1*ETH;
    let amount = Number(bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH));
    let block = await web3.eth.getBlock('latest');
    await dax.createBuyOrder(asset2ID, tokenAmount, tokenPrice, {from:user2, value:amount});
    let e = events.LogExchange({message: 'Buy order created', origin: user2}, {fromBlock: block.number, toBlock: 'latest'});
    let logs = await Promisify(callback => e.get(callback));
    console.log(logs);
    order3Creator = logs[0].args.account;
  });

  it("Fail to delete order", async() => {
    let err;
    //Fail because wrong user
    try{
      let tokenAmount = 10*ETH;
      let tokenPrice = 0.1*ETH;
      await dax.deleteOrder(asset2ID, tokenAmount, tokenPrice, true, {from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Delete order", async() => {
    let tokenAmount = 10*ETH;
    let tokenPrice = 0.1*ETH;
    await dax.deleteOrder(asset2ID, tokenAmount, tokenPrice, true, {from:user2});
  });

  it('Create sell order', async() => {
    let tokenAmount = 0.5*ETH;
    let tokenPrice = 0.05*ETH;
    await asset1Token.approve(dax.address, tokenAmount, {from:user1});
    await dax.createSellOrder(asset1ID, tokenAmount, tokenPrice, {from:user1});
  });

  it("Delete order", async() => {
    let tokenAmount = 0.5*ETH;
    let tokenPrice = 0.05*ETH;
    await dax.deleteOrder(asset1ID, tokenAmount, tokenPrice, false, {from:user1});
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
    let balanceBefore = web3.eth.getBalance(owner);
    await dax.destroy(owner2, owner);
    let balanceAfter = web3.eth.getBalance(owner);
    let diff = bn(balanceAfter).minus(balanceBefore);
    assert.equal(diff.isGreaterThan(0), true);
  });

});
