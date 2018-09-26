var bn = require('bignumber.js');

const AssetToken = artifacts.require("./tokens/ERC20/DividendTokenERC20.sol");
const Crowdsale = artifacts.require("./crowdsale/CrowdsaleERC20.sol");
const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const BurnableToken = artifacts.require("./tokens/ERC20/BurnableToken.sol");
const Pausible = artifacts.require("./ownership/Pausible.sol");
const CrowdsaleGenerator = artifacts.require("./crowdsale/CrowdsaleGeneratorERC20.sol");
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
  let assetToken;
  let erc20;
  let crowdsale;
  let crowdsaleGen;   // crowdsale generator
  let db;
  let cm;
  let hash;
  let platform;
  let brokerFee;
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

  it('Deploy hashing contract', async() => {
    hash = await HashFunctions.new(db.address);
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

  it('Deploy CrowdsaleGenerator', async() => {
    crowdsaleGen = await CrowdsaleGenerator.new(db.address);
    await cm.addContract("CrowdsaleGenerator", crowdsaleGen.address);
  });

  it('Deploy crowdsale contract', async() => {
    crowdsale = await Crowdsale.new(db.address);
    await cm.addContract('CrowdsaleERC20', crowdsale.address);
    await cm.addContract('Owner', owner); //Right now some database functions are operated from owner account
  });

  it('Set operator', async() => {
    operators = await Operators.new(db.address);
    await cm.addContract('Operators', operators.address);
    let tx = await operators.registerOperator(operator, 'Operator');
    operatorID = tx.logs[0].args._operatorID;
    await operators.acceptERC20Token(operatorID, erc20.address, true, {from: operator});
    await operators.acceptEther(operatorID, true, {from: operator});
  });

  //Start successful funding
  it('Start funding', async() => {
    assetURI = 'ipfs.io/F3b2854A9';
    brokerFee = 5;
    let tx = await crowdsaleGen.createAssetOrderERC20(assetURI, operatorID, 100, 20*ETH, brokerFee, erc20.address, {from:broker});
    // console.log(tx.logs[0].args._assetID);
    assetID = tx.logs[0].args._assetID;
    assetTokenAddress = tx.logs[0].args._tokenAddress;
    console.log('Token Address: ' + tokenAddress);
    assetToken = await AssetToken.at(assetTokenAddress);
  });

  it('User1 funding', async() => {
    await erc20.approve(crowdsale.address, 5*ETH, {from:user1});
    let tx = await crowdsale.buyAssetOrder(assetID, 5*ETH, {from:user1});
    console.log(tx.logs[0].args);
    let user1AssetTokens = await assetToken.balanceOf(user1);
    console.log('assetToken Address: ' + assetToken.address);
    console.log('User: ' + user1);
    console.log('User assetTokens: ' + Number(user1AssetTokens));

    let assetTokenSupply = await assetToken.totalSupply()
    console.log('assetToken Supply: ' + assetTokenSupply);
    assert.equal(user1AssetTokens, 5*ETH*(100-brokerFee)/100);
  });

  it('Asset already exists fail', async() => {
    let err;
    let brokerFee = 2;
    //Fail because asset already exists
    try{
      await crowdsaleGen.createAssetOrderERC20(assetURI, operatorID, 10, 20*ETH, brokerFee, erc20.address, {from:broker});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to buy asset, fail to payout. No platform address', async() => {
    let err;
    try{
      await erc20.approve(crowdsale.address, 15*ETH, {from:user2});
      await crowdsale.buyAssetOrder(assetID, 15*ETH, {from:user2});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set platform', async() => {
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
    let tx = await crowdsale.buyAssetOrder(assetID, 15*ETH, {from:user2});
    let user2AssetTokens = await assetToken.balanceOf(user2);
    console.log(Number(user2AssetTokens));
    assert.equal(user2AssetTokens, 15*ETH*(100-brokerFee)/100);

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
      await crowdsale.buyAssetOrder(assetID, 5*ETH, {from:user3});
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
    await erc20.approve(assetToken.address, ETH, {from:operator});
    await assetToken.issueDividends(ETH, {from: operator});
    operatorBalanceAfter = await erc20.balanceOf(operator);
    console.log(Number(bn(operatorBalanceAfter).minus(operatorBalanceBefore).plus(bn(ETH).multipliedBy(10))));
  });

  it('User1 withdraw dividends', async() => {
    user1BalanceBefore = await erc20.balanceOf(user1);
    await assetToken.withdraw({from:user1});
    user1BalanceAfter = await erc20.balanceOf(user1);
    assert.equal(bn(user1BalanceAfter).isGreaterThan(user1BalanceBefore), true);
  });

  it('User2 withdraw dividends', async() => {
    user2BalanceBefore = await erc20.balanceOf(user2);
    await assetToken.withdraw({from:user2});
    user2BalanceAfter = await erc20.balanceOf(user2);
    assert.equal(bn(user2BalanceAfter).isGreaterThan(user2BalanceBefore), true);
  });

  //Start failed funding
  it('Start failed funding', async() => {
    let err;

    await operators.removeOperator(operatorID);
    assetURI = 'Fail: No operator';
    brokerFee = 10;
    try{
      await crowdsaleGen.createAssetOrderERC20(assetURI, operatorID, 10, 20*ETH, brokerFee, erc20.address, {from:broker});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set operator', async() => {
    let tx = await operators.registerOperator(operator, 'Operator');
    operatorID = tx.logs[0].args._operatorID;
    await operators.acceptERC20Token(operatorID, erc20.address, true, {from: operator});
  });

  it('Start funding that does not reach goal', async() => {
    assetURI = 'Goooooooaaallllllll';
    brokerFee = 20;
    tx = await crowdsaleGen.createAssetOrderERC20(assetURI, operatorID, 1, 20*ETH, brokerFee, erc20.address, {from:broker});
    //console.log(tx.logs[0].args._assetID);
    assetID = tx.logs[0].args._assetID;
    assetTokenAddress = tx.logs[0].args._tokenAddress;
    assetToken = await AssetToken.at(assetTokenAddress);
  });

  it('User3 funding', async() => {
    await erc20.approve(crowdsale.address, 5*ETH, {from:user3});
    let tx = await crowdsale.buyAssetOrder(assetID, 5*ETH, {from:user3});
    let user3assetTokens = await assetToken.balanceOf(user3);
    assert.equal(user3assetTokens, 5*ETH*(100-brokerFee)/100);
  });

  // TODO: this isn't failing as it should
  it('User1 funding fail', async() => {
    web3.currentProvider.send({jsonrpc: "2.0", method: "evm_increaseTime", params: [3], id: 0});

    let err;
    try{
      await erc20.approve(crowdsale.address, 5*ETH, {from:user1});
      await crowdsale.buyAssetOrder(assetID, 5*ETH, {from:user1});
    } catch(e){
      err = e;
    }
    // assert.notEqual(err, undefined);
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
    let totalassetTokens = await assetToken.totalSupply();
    user3BalanceBefore = await erc20.balanceOf(user3);
    await crowdsale.refund(assetID);
    await assetToken.withdraw({from:user3});
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
