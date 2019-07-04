var bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

const Token = artifacts.require("MiniMeToken.sol");
const PlatformToken = artifacts.require("./tokens/erc20/MyBitToken.sol");
const MiniMeTokenFactory = artifacts.require("MiniMeTokenFactory.sol");
const Minter = artifacts.require("./database/Minter.sol");
const Crowdsale = artifacts.require("./crowdsale/CrowdsaleETH.sol");
const CrowdsaleGenerator = artifacts.require("./crowdsale/CrowdsaleGeneratorETH.sol");
const CrowdsaleReserve = artifacts.require("./database/CrowdsaleReserve.sol");
const EscrowReserve = artifacts.require("./database/EscrowReserve.sol");
const AssetManagerEscrow = artifacts.require("./roles/AssetManagerEscrow.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const Operators = artifacts.require("./roles/Operators.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const AssetManagerFunds = artifacts.require("./roles/AssetManagerFunds.sol");
const Pausible = artifacts.require("./ownership/Pausible.sol");
const Platform = artifacts.require("./ecosystem/Platform.sol");
const API = artifacts.require("./database/API.sol");
const FakeKyber = artifacts.require("./test/FakeKyber.sol");

const ETH = bn(10**18);
const scaling = bn(10**36);
const tokenSupply = bn(180000000).times(ETH);
const tokenPerAccount = bn(1000).times(ETH);
let assetManagerFee = 5;

//Just passing an empty address for kyber, since no converting is being done
/*
const kyber = {
  address : '0x0000000000000000000000000000000000000000'
};
*/

contract('Ether Crowdsale', async(accounts) => {
  const owner = accounts[0];
  const user1 = accounts[6];
  const user2 = accounts[7];
  const user3 = accounts[8];
  const assetManager = accounts[4];
  const operator = accounts[5];
  const tokenHolders = [user1, user2, user3];

  let maxGas;
  let id;
  let token;
  let platformToken;
  let tokenFactory;
  let minter;
  let crowdsale;
  let crowdsaleGen;
  let crowdsaleReserve;
  let escrowReserve;
  let escrow;
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
  let modelID;
  let assetURI;
  let assetAddress;
  let pausible;

  it('Get network ID and set max gas', async() => {
    id = await web3.eth.net.getId();
    if(id >= 1500000000000){
      maxGas = '0xfffffffffff';
    } else {
      maxGas = 6721975;
    }
  });

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
    platformToken = await PlatformToken.new('MyBit', 'MYB', tokenSupply.toString());
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 1; i < accounts.length; i++) {
      //console.log(accounts[i]);
      await platformToken.transfer(accounts[i], tokenPerAccount.toString());
      userBalance = bn(await platformToken.balanceOf(accounts[i]));
      assert.equal(userBalance.eq(tokenPerAccount), true);
    }
    // Check token ledger is correct
    let totalTokensCirculating = (accounts.length-1) * tokenPerAccount;
    let remainingTokens = bn(tokenSupply).minus(totalTokensCirculating);
    let ledgerTrue = bn(await platformToken.balanceOf(owner)).eq(remainingTokens);
    assert.equal(ledgerTrue, true);
  });

  it('Deploy token factory', async() => {
    tokenFactory = await MiniMeTokenFactory.new();
  });

  it('Deploy platform funds', async() => {
    platform = await Platform.new(db.address, events.address);
    await cm.addContract('Platform', platform.address);
    await platform.setPlatformToken(platformToken.address);
    await platform.setPlatformFee('3');
    await platform.setPlatformPercentage('1');
    await platform.setTokenFactory(tokenFactory.address);

    assert.equal(await api.getPlatformToken(), platformToken.address);
    assert.equal(bn(await api.getPlatformFee()).eq(3), true);
    assert.equal(bn(await api.getPlatformPercentage()).eq(1), true);
    assert.equal(await api.getPlatformTokenFactory(), tokenFactory.address);
  });

  it('Deploy assetManager escrow', async() => {
    escrow = await AssetManagerEscrow.new(db.address, events.address);
    await cm.addContract('AssetManagerEscrow', escrow.address);
  });

  it('Deploy asset manager funds', async() => {
    assetManagerFunds = await AssetManagerFunds.new(db.address, events.address);
    await cm.addContract('AssetManagerFunds', assetManagerFunds.address);
  });

  it('Deploy pausible contract', async() => {
    pausible = await Pausible.new(db.address, events.address);
    await cm.addContract('Pausible', pausible.address);
  });

  it('Deploy Minter', async() => {
    minter = await Minter.new(db.address);
    await cm.addContract("Minter", minter.address);
  });

  it('Deploy CrowdsaleReserve', async() => {
    reserve = await CrowdsaleReserve.new(db.address, events.address);
    await cm.addContract("CrowdsaleReserve", reserve.address);
  });

  it('Deploy EscrowReserve', async() => {
    escrowReserve = await EscrowReserve.new(db.address, events.address);
    await cm.addContract("EscrowReserve", escrowReserve.address);
  });

  it('Deploy FakeKyber', async() => {
    kyber = await FakeKyber.new();
  });

  it('Deploy CrowdsaleGenerator', async() => {
    crowdsaleGen = await CrowdsaleGenerator.new(db.address, events.address, kyber.address);
    await cm.addContract("CrowdsaleGeneratorETH", crowdsaleGen.address);
  });

  it('Deploy crowdsale contract', async() => {
    crowdsale = await Crowdsale.new(db.address, events.address);
    await cm.addContract('CrowdsaleETH', crowdsale.address);
    await cm.addContract('Owner', owner); //Right now some database functions are operated from owner account
  });

  it('Deploy operators', async() => {
    operators = await Operators.new(db.address, events.address);
    await cm.addContract('Operators', operators.address);
  });

  it('Set operator', async() => {
    let block = await web3.eth.getBlock('latest');
    await operators.registerOperator(operator, 'Operator', 'QmHash', '0x0000000000000000000000000000000000000000');
    let logs = await events.getPastEvents('LogOperator', {filter: {messageID: web3.utils.sha3('Operator registered'), origin: owner}, fromBlock: block.number});
    operatorID = logs[0].args.id;
    await operators.addAsset(operatorID, 'Asset', 'QmHash', true, true, '0x0000000000000000000000000000000000000000', {from: operator});
    logs = await events.getPastEvents('LogOperator', {filter: {messageID: web3.utils.sha3('Asset added'), origin: operator}, fromBlock: block.number});
    modelID = logs[0].args.id;
  });

  //Start successful funding
  it('Start funding in the future', async() => {
    assetURI = 'BTC ATM';
    let block = await web3.eth.getBlock('latest');
    let now = bn(block.timestamp);
    console.log(now);
    let startTime = now.plus(86400); //Startime is a day from now
    await platformToken.approve(crowdsaleGen.address, 10, {from:assetManager});
    await crowdsaleGen.createAssetOrderETH(assetURI, modelID, 100, startTime, bn(20).times(ETH), assetManagerFee, 10, platformToken.address, {from:assetManager});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset funding started'), manager: assetManager}, fromBlock: block.number});
    assetAddress = logs[0].args.asset;
    token = await Token.at(assetAddress);
  });

  it('User1 funding fail', async() => {
    //Start time hasn't been reached
    let err;
    try{
      await crowdsale.buyAssetOrderETH(assetAddress, {from:user1, value:bn(5).times(ETH).times(1.03)});
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
    await crowdsale.buyAssetOrderETH(assetAddress, {from:user1, value:bn(5).times(ETH).times(1.03), gas:maxGas});
    let user1Tokens = bn(await token.balanceOf(user1));
    assert.equal(user1Tokens.eq(bn(5).times(ETH)), true);
  });

  it('Asset already exists fail', async() => {
    let err;
    //Fail because asset already exists
    try{
      await crowdsaleGen.createAssetOrderETH(assetURI, modelID, 10, 0, bn(20).times(ETH).times(1.03), assetManagerFee, 0, platformToken.address, {from:assetManager, gas:maxGas});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('User2 funding', async() => {
    //console.log(web3.eth.getBalance(user2));
    await crowdsale.buyAssetOrderETH(assetAddress, {from:user2, value:bn(15).times(ETH).times(1.03), gas:maxGas});
    let user2Tokens = bn(await token.balanceOf(user2));
    assert.equal(user2Tokens.eq(bn(15).times(ETH)), true);
  });

  it('User3 funding fail', async() => {
    //Funding finished
    let err;
    try{
      await crowdsale.buyAssetOrderETH(assetAddress, {from:user3, value:bn(5).times(ETH), gas:maxGas});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to withdraw, platform address not set', async() => {
    let err;
    try{
      await crowdsale.payoutETH(assetAddress);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set platform', async() => {
    await platform.setPlatformFundsWallet(owner);
    await platform.setPlatformAssetsWallet(owner);

    assert.equal(await api.getPlatformFundsWallet(), owner);
    assert.equal(await api.getPlatformAssetsWallet(), owner);
  });

  it('Fail to set platform wallet', async() => {
    let err;
    try{
      await platform.setPlatformFundsWallet(assetManager, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Withdraw payout', async() => {
    ownerBalanceBefore = await web3.eth.getBalance(owner);
    assetManagerBalanceBefore = await web3.eth.getBalance(assetManager);
    let tx = await crowdsale.payoutETH(assetAddress, {from: assetManager, gasPrice:1});
    let gasDiff = bn(tx.receipt.gasUsed)
    ownerBalanceAfter = await web3.eth.getBalance(owner);
    assert.equal(bn(ownerBalanceAfter).minus(ownerBalanceBefore).isEqualTo(bn(ETH).multipliedBy(20).times(0.03)), true);
    assetManagerBalanceAfter = await web3.eth.getBalance(assetManager);
    assert.equal(bn(assetManagerBalanceAfter).minus(assetManagerBalanceBefore).plus(gasDiff).isEqualTo(bn(ETH).multipliedBy(20)), true);
    await web3.eth.sendTransaction({from:assetManager, to:operator, value:bn(assetManagerBalanceAfter).minus(assetManagerBalanceBefore).plus(gasDiff).toString()})
  })

  it('Fail to refund', async() => {
    let err;
    try{
      await crowdsale.refund(assetAddress, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to withdraw, already paid out', async() => {
    let err;
    try{
      await crowdsale.payoutETH(assetAddress);
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
    if(id < 1500000000000){
      managerBalanceBefore = bn(await web3.eth.getBalance(assetManager));
      await assetManagerFunds.withdraw(assetAddress, {from:assetManager, gas:maxGas});
      managerBalanceAfter = bn(await web3.eth.getBalance(assetManager));
      assert.equal(managerBalanceAfter.isGreaterThan(managerBalanceBefore), true);
    }
  });

  //Start failed funding
  it('Start funding without asset set', async() => {
    let err;
    await operators.removeAsset(modelID, {from: operator});
    assetURI = 'Fail: No operator';
    try{
      await crowdsaleGen.createAssetOrderETH(assetURI, modelID, 10, 0, bn(20).times(ETH), assetManagerFee, 0, platformToken.address, {from:assetManager, gas:maxGas});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Re-add asset', async() => {
    await operators.addAsset(operatorID, 'Asset', 'QmHash', true, true, '0x0000000000000000000000000000000000000000', {from: operator});
  });

  it('Start funding that does not reach goal', async() => {
    assetURI = 'No Goal';
    let block = await web3.eth.getBlock('latest');
    await crowdsaleGen.createAssetOrderETH(assetURI, modelID, 2, 0, bn(20).times(ETH), assetManagerFee, 0, platformToken.address, {from:assetManager, gas:maxGas});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset funding started'), manager: assetManager}, fromBlock: block.number});
    assetAddress = logs[0].args.asset;
    token = await Token.at(assetAddress);
  });

  it('User3 funding', async() => {
    await crowdsale.buyAssetOrderETH(assetAddress, {from:user3, value:bn(5).times(ETH).times(1.03), gas:maxGas});
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
      await crowdsale.buyAssetOrderETH(assetAddress, user1, {from:user1, value:bn(5).times(ETH).times(1.03), gas:maxGas});
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
    await crowdsaleGen.createAssetOrderETH(assetURI, modelID, 1, 0, bn(2).times(ETH), assetManagerFee, 0, platformToken.address, {from:assetManager});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset funding started'), manager: assetManager}, fromBlock: block.number});
    assetAddress = logs[0].args.asset;
    token = await Token.at(assetAddress);
  });

  it('User1 funding', async() => {
    let tokenSupply = await token.totalSupply()
    console.log('Token Supply: ' + tokenSupply);
    await crowdsale.buyAssetOrderETH(assetAddress, {from:user1, value:bn(2).times(ETH).times(1.03), gas:maxGas});
    await crowdsale.payoutETH(assetAddress, {from: assetManager});
    let user1Tokens = bn(await token.balanceOf(user1));
    console.log(user1Tokens.toNumber());
    assert.equal(user1Tokens.eq(bn(2).times(ETH)), true);
    assert.equal(bn(await token.balanceOf(assetManager)).eq(0), true);
    assert.equal(await api.crowdsaleFinalized(assetAddress), true);
  });


  it('Fail funding with 100% manager fee', async() => {
    assetURI = 'Free Management';
    assetManagerFee = 100;
    let err;
    try {
      await crowdsaleGen.createAssetOrderETH(assetURI, modelID, 1, 0, bn(2).times(ETH), assetManagerFee, 0, platformToken.address, {from:assetManager, gas:maxGas});
    }
    catch(e) {
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  //Start successful funding with 99% manager fee
  it('Start funding', async() => {
    assetURI = '98%managementfee.com';
    assetManagerFee = 98;
    let block = await web3.eth.getBlock('latest');
    await crowdsaleGen.createAssetOrderETH(assetURI, modelID, 10, 0, bn(2).times(ETH), assetManagerFee, 0, platformToken.address, {from:assetManager});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset funding started'), manager: assetManager}, fromBlock: block.number});
    assetAddress = logs[0].args.asset;
    token = await Token.at(assetAddress);
  });


  it('User2 funding ', async() => {
    await crowdsale.buyAssetOrderETH(assetAddress, {from:user2, value:bn(2).times(ETH).times(1.03), gas:maxGas});
    await crowdsale.payoutETH(assetAddress, {from: assetManager});
    let user2Tokens = bn(await token.balanceOf(user2));
    assert.equal(user2Tokens.eq(bn(2).times(ETH)), true);
    assert.equal(await api.crowdsaleFinalized(assetAddress), true);
  });

  it('Fail asset crowdsale with 0 amount to raise', async() => {
    assetURI = 'raisenothing.com';
    assetManagerFee = 42;
    let err;
    try{
      await crowdsaleGen.createAssetOrderETH(assetURI, modelID, 10, 0, 0, assetManagerFee, 0, platformToken.address, {from:assetManager, gas:maxGas});
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
    await crowdsaleGen.createAssetOrderETH(assetURI, modelID, 10, 0, 100, assetManagerFee, 0, platformToken.address, {from:assetManager, gas:maxGas});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset funding started'), manager: assetManager}, fromBlock: block.number});
    assetAddress = logs[0].args.asset;
    token = await Token.at(assetAddress);
  });

  it('User3 funding 100 wei', async() => {
    await crowdsale.buyAssetOrderETH(assetAddress, {from:user3, value:103, gas:maxGas});
    await crowdsale.payoutETH(assetAddress, {from: assetManager});
    let user3Balance = bn(await token.balanceOf(user3));
    assert.equal(user3Balance.eq(100), true);
    let assetManagerBalance = bn(await token.balanceOf(assetManagerFunds.address));
    console.log('Asset manager balance: ', assetManagerBalance);
    assert.equal(assetManagerBalance.eq(bn(100).div(0.49).times(0.5).integerValue()), true);
    assert.equal(await api.crowdsaleFinalized(assetAddress), true);
  });

  it('Start funding then cancel', async() => {
    //Start crowdsale
    assetURI = 'Cancelled';
    assetManagerFee = 0;
    let block = await web3.eth.getBlock('latest');
    await crowdsaleGen.createAssetOrderETH(assetURI, modelID, 100, 0, bn(10).times(ETH).toString(), assetManagerFee, 0, platformToken.address, {from:assetManager, gas:maxGas});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset funding started'), manager: assetManager}, fromBlock: block.number});
    assetAddress = logs[0].args.asset;
    token = await Token.at(assetAddress);
    //Fund
    await crowdsale.buyAssetOrderETH(assetAddress, {from:user1, value:bn(2).times(ETH).times(1.03).toString(), gas:maxGas});
  });


  it('Fail to cancel', async() => {
    let err;
    try{
      await crowdsale.cancel(assetAddress, assetManager, {from: user1})
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Cancel', async() => {
    //Cancel
    let balanceBefore = bn(await web3.eth.getBalance(user1));
    await crowdsale.cancel(assetAddress, assetManager, {from: assetManager});
    await token.withdraw({from:user1});
    let balanceAfter = bn(await web3.eth.getBalance(user1));
    assert.equal(balanceAfter.minus(balanceBefore).gt(0), true);
  });

  it('Set operator to not accept token for payment', async() => {
    await operators.acceptToken(modelID, '0x0000000000000000000000000000000000000000', false, {from: operator});
  });

  it('Fail to create crowdsale, insufficient escrow (100%)', async() => {
    let err;
    try{
      await platformToken.approve(crowdsaleGen.address, bn(1).times(ETH).minus(1), {from:assetManager});
      await crowdsaleGen.createAssetOrderETH('100% escrow', operatorID, 5, 0, bn(1).times(ETH), assetManagerFee, bn(1).times(ETH).minus(1), platformToken.address, {from:assetManager, gas:maxGas});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Create crowdsale with 100% escrow', async() => {
    await platformToken.approve(crowdsaleGen.address, bn(1).times(ETH), {from:assetManager});
    await crowdsaleGen.createAssetOrderETH('100% escrow', modelID, 5, 0, bn(1).times(ETH), assetManagerFee, bn(1).times(ETH), platformToken.address, {from:assetManager, gas:maxGas});
  });

  it('Set collateral on platform, change operator to accept crypto', async() => {
    await platform.setCollateralLevels(10, 25, 15, 10);
    await operators.acceptToken(modelID, '0x0000000000000000000000000000000000000000', true, {from: operator});
    let assetCount = bn(await api.getManagerAssetCount(assetManager));
    let level = bn(await api.getCollateralLevel(assetManager));
    console.log('Count: ', assetCount.toString());
    console.log('Level: ', level.toString());
  });

  it('Fail to create crowdsale, insufficient escrow (35%)', async() => {
    let err;
    try{
      await platformToken.approve(crowdsaleGen.address, bn(0.35).times(ETH).minus(1), {from:assetManager});
      await crowdsaleGen.createAssetOrderETH('35% escrow', modelID, 5, 0, bn(1).times(ETH), assetManagerFee, bn(0.35).times(ETH).minus(1), platformToken.address, {from:assetManager, gas:maxGas});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Create crowdsale with 35% escrow', async() => {
    await platformToken.approve(crowdsaleGen.address, bn(0.35).times(ETH), {from:assetManager});
    await crowdsaleGen.createAssetOrderETH('35% escrow', modelID, 5, 0, bn(1).times(ETH), assetManagerFee, bn(0.35).times(ETH), platformToken.address, {from:assetManager, gas:maxGas});
  });

  it('Set operator to not payout in token', async() => {
    await operators.payoutToken(modelID, '0x0000000000000000000000000000000000000000', false, {from: operator});
  });

  it('Fail to create crowdsale, insufficient escrow (35%*3)', async() => {
    let err;
    try{
      await platformToken.approve(crowdsaleGen.address, bn(1.05).times(ETH).minus(1), {from:assetManager});
      await crowdsaleGen.createAssetOrderETH('105% escrow', modelID, 5, 0, bn(1).times(ETH), assetManagerFee, bn(1.05).times(ETH).minus(1), platformToken.address, {from:assetManager, gas:maxGas});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Create crowdsale with 35%*3 escrow', async() => {
    await platformToken.approve(crowdsaleGen.address, bn(1.05).times(ETH), {from:assetManager});
    await crowdsaleGen.createAssetOrderETH('105% escrow', modelID, 5, 0, bn(1).times(ETH), assetManagerFee, bn(1.05).times(ETH), platformToken.address, {from:assetManager, gas:maxGas});
  });

  it('Set platform to not accept or payout in token', async() => {
    await operators.acceptToken(modelID, '0x0000000000000000000000000000000000000000', false, {from: operator});
  });

  it('Fail to create crowdsale, insufficient escrow (35%*3+100%)', async() => {
    let err;
    try{
      await platformToken.approve(crowdsaleGen.address, bn(2.05).times(ETH).minus(1), {from:assetManager});
      await crowdsaleGen.createAssetOrderETH('205% escrow', modelID, 5, 0, bn(1).times(ETH), assetManagerFee, bn(2.05).times(ETH).minus(1), platformToken.address, {from:assetManager, gas:maxGas});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Create crowdsale with 35%*3+100% escrow', async() => {
    await platformToken.approve(crowdsaleGen.address, bn(2.05).times(ETH), {from:assetManager});
    await crowdsaleGen.createAssetOrderETH('205% escrow', modelID, 5, 0, bn(1).times(ETH), assetManagerFee, bn(2.05).times(ETH), platformToken.address, {from:assetManager, gas:maxGas});
  });

  // TODO: try to force integer rounding

  it('Fail to destroy generator', async() => {
    let err;
    try{
      await crowdsaleGen.destroy({from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to destroy crowdsale', async() => {
    let err;
    try{
      await crowdsale.destroy({from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to destroy pausible', async() => {
    let err;
    try{
      await pausible.destroy({from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to destroy platform', async() => {
    let err;
    try{
      await platform.destroy({from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Destroy generator', async() => {
    await crowdsaleGen.destroy();
  });

  it('Destroy crowdsale', async() => {
    await crowdsale.destroy();
  });

  it('Destroy pausible', async() => {
    await pausible.destroy();
  });

  it('Destroy platform', async() => {
    await platform.destroy();
  });

});
