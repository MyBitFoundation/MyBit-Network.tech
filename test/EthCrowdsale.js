var bn = require('bignumber.js');

const Token = artifacts.require("./tokens/erc20/DividendToken.sol");
const PlatformToken = artifacts.require("./tokens/erc20/BurnableToken.sol");
const ERC20Burner = artifacts.require("./ecosystem/ERC20Burner.sol");
const Crowdsale = artifacts.require("./crowdsale/CrowdsaleETH.sol");
const CrowdsaleGenerator = artifacts.require("./crowdsale/CrowdsaleGeneratorETH.sol");
const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const Operators = artifacts.require("./ecosystem/Operators.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Pausible = artifacts.require("./ownership/Pausible.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");


const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const assetManager = web3.eth.accounts[4];
const operator = web3.eth.accounts[5];
const tokenHolders = [user1, user2, user3];


const ETH = 1000000000000000000;
const scaling = 1000000000000000000000000000000000000;
const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = 1000000000000000000000;
const assetManagerFee = 5;

contract('Ether Crowdsale', async() => {

  let token;
  let platformToken;
  let crowdsale;
  let crowdsaleGen;
  let db;
  let cm;
  let hash;
  let platform;
  let operators;
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

  it('Deploy platform funds', async() => {
    platform = await Platform.new(db.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformToken(platformToken.address);
  });

  it('Deploy burner contract', async() => {
    burner = await ERC20Burner.new(db.address);
    await cm.addContract("ERC20Burner", burner.address);
  });

  it('Deploy pausible contract', async() => {
    pausible = await Pausible.new(db.address);
    await cm.addContract('Pausible', pausible.address);
  });

  it('Deploy CrowdsaleGenerator', async() => {
    crowdsaleGen = await CrowdsaleGenerator.new(db.address);
    await cm.addContract("CrowdsaleGeneratorETH", crowdsaleGen.address);
    await burner.setFee('0x667de2cd', crowdsaleGen.address,  250);
  });

  it('Deploy crowdsale contract', async() => {
    crowdsale = await Crowdsale.new(db.address);
    await cm.addContract('CrowdsaleETH', crowdsale.address);
    await cm.addContract('Owner', owner); //Right now some database functions are operated from owner account
    await burner.setFee('0xa71d4c6a', crowdsale.address,  250);
  });

  it('Deploy operators', async() => {
    operators = await Operators.new(db.address);
    await cm.addContract('Operators', operators.address);
  });

  it('Give platform burning permission', async() => {
    for(var i=1; i<web3.eth.accounts.length; i++){
      await cm.setContractStatePreferences(true, true, {from: web3.eth.accounts[i]});
      await platformToken.approve(burner.address, tokenSupply, {from:web3.eth.accounts[i]});
    }
  });

  it('Set operator', async() => {
    let tx = await operators.registerOperator(operator, 'Operator');
    operatorID = tx.logs[0].args._operatorID;
    await operators.acceptEther(operatorID, true, {from: operator});
  });

  //Start successful funding
  it('Start funding', async() => {
    assetURI = 'BTC ATM';
    let tx = await crowdsaleGen.createAssetOrderETH(assetURI, operatorID, 1, 20*ETH, assetManagerFee, {from:assetManager});
    //console.log(tx.logs[0].args._assetID);
    assetID = tx.logs[0].args._assetID;
    tokenAddress = tx.logs[0].args._tokenAddress;
    token = await Token.at(tokenAddress);
  });

  it('User1 funding', async() => {
    let tokenSupply = await token.totalSupply()
    console.log('Token Supply: ' + tokenSupply);
    let tx = await crowdsale.buyAssetOrderETH(assetID, {from:user1, value:5*ETH});
    let user1Tokens = await token.balanceOf(user1);
    assert.equal(user1Tokens, 5*ETH);
  });

  it('Asset already exists fail', async() => {
    let err;
    //Fail because asset already exists
    try{
      await crowdsaleGen.createAssetOrderETH(assetURI, operatorID, 10, 20*ETH, assetManagerFee, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });
/*
  it('Fail to buy asset, fail to payout. No platform address', async() => {
    let err;
    try{
      await crowdsale.buyAssetOrderETH(assetID, {from:user2, value:15*ETH});
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

    let tx = await crowdsale.buyAssetOrderETH(assetID, {from:user2, value:15*ETH});
    let user2Tokens = await token.balanceOf(user2);
    assert.equal(user2Tokens, 15*ETH);

    ownerBalanceAfter = await web3.eth.getBalance(owner);
    assert.equal(bn(ownerBalanceAfter).minus(ownerBalanceBefore).isEqualTo(bn(ETH).multipliedBy(20).dividedBy(100)), true);

    operatorBalanceAfter = await web3.eth.getBalance(operator);
    assert.equal(bn(operatorBalanceAfter).minus(operatorBalanceBefore).isEqualTo(bn(ETH).multipliedBy(20).minus( bn(ETH).multipliedBy(20).dividedBy(100) )), true);
  });

  it('User3 funding fail', async() => {
    //Funding finished
    let err;
    try{
      await crowdsale.buyAssetOrderETH(assetID, {from:user3, value:5*ETH});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to refund', async() => {
    let err;
    try{
      await crowdsale.refund(assetID, {from:assetManager});
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
  it('Start funding without operator set', async() => {
    let err;
    await operators.removeOperator(operatorID);
    assetURI = 'Fail: No operator';
    try{
      await crowdsaleGen.createAssetOrderETH(assetURI, operatorID, 10, 20*ETH, assetManagerFee, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set operator', async() => {
    let tx = await operators.registerOperator(operator, 'Operator');
    operatorID = tx.logs[0].args._operatorID;
    await operators.acceptEther(operatorID, true, {from: operator});
  });

  it('Start funding that does not reach goal', async() => {
    assetURI = 'No Goal';
    let tx = await crowdsaleGen.createAssetOrderETH(assetURI, operatorID, 2, 20*ETH, assetManagerFee, {from:assetManager});
    //console.log(tx.logs[0].args._assetID);
    assetID = tx.logs[0].args._assetID;
    tokenAddress = tx.logs[0].args._tokenAddress;
    token = await Token.at(tokenAddress);
  });

  it('User3 funding', async() => {
    let tx = await crowdsale.buyAssetOrderETH(assetID, {from:user3, value:5*ETH});
    let user3Tokens = await token.balanceOf(user3);
    assert.equal(user3Tokens, 5*ETH);
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
      await crowdsale.buyAssetOrderETH(assetID, {from:user1, value:5*ETH});
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

  // TODO: try to create asset with assetManager fee = 0

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
