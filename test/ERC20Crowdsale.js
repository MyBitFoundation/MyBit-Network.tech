var bn = require('bignumber.js');

const AssetToken = artifacts.require("./tokens/erc20/DividendTokenERC20.sol");
const BurnableToken = artifacts.require("./tokens/erc20/BurnableToken.sol");
const ERC20Burner = artifacts.require("./access/ERC20Burner.sol");
const Crowdsale = artifacts.require("./crowdsale/CrowdsaleERC20.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Pausible = artifacts.require("./ownership/Pausible.sol");
const AssetManagerFunds = artifacts.require("./roles/AssetManagerFunds.sol");
const CrowdsaleGenerator = artifacts.require("./crowdsale/CrowdsaleGeneratorERC20.sol");
const Operators = artifacts.require("./roles/Operators.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");
const API = artifacts.require("./database/API.sol");
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
const assetManager = web3.eth.accounts[4];
const operator = web3.eth.accounts[5];
const tokenHolders = [user1, user2, user3, assetManager, operator];


const ETH = 1000000000000000000;
const scaling = 1000000000000000000000000000000000000;
const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = 1000000000000000000000;

contract('ERC20 Crowdsale', async() => {
  let assetToken;
  let erc20;
  let platformToken;
  let crowdsale;
  let crowdsaleGen;   // crowdsale generator
  let db;
  let events;
  let cm;
  let hash;
  let api;
  let platform;
  let assetManagerFunds;
  let assetManagerFee;
  let operators;
  let operatorID;
  let assetID;
  let assetURI;
  let tokenAddress;
  let pausible;

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

  it('Deploy hashing contract', async() => {
    hash = await HashFunctions.new(db.address);
  });

  it('Deploy api contract', async() => {
    api = await API.new(db.address);
  });

  it('Deploy MyB token', async() => {
    platformToken = await BurnableToken.new('MyBit', tokenSupply);
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
    platform = await Platform.new(db.address, events.address);
    await cm.addContract('PlatformFunds', platform.address);
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
    crowdsaleGen = await CrowdsaleGenerator.new(db.address, events.address);
    await cm.addContract("CrowdsaleGenerator", crowdsaleGen.address);
    await burner.setFee('0x40aedf24', crowdsaleGen.address,  250);
  });

  it('Deploy crowdsale contract', async() => {
    crowdsale = await Crowdsale.new(db.address, events.address);
    await cm.addContract('CrowdsaleERC20', crowdsale.address);
    await cm.addContract('Owner', owner); //Right now some database functions are operated from owner account
    await burner.setFee('0xc9cd97eb', crowdsale.address,  250);
  });

  it('Deploy operators', async() => {
    operators = await Operators.new(db.address, events.address);
    await cm.addContract('Operators', operators.address);
  });

  it('Give platform burning permission', async() => {
    for(var i=1; i<web3.eth.accounts.length; i++){
      await cm.setContractStatePreferences(true, true, {from: web3.eth.accounts[i]});
      await platformToken.approve(burner.address, tokenSupply, {from:web3.eth.accounts[i]});
    }
  });

  it('Set operator', async() => {
    let block = await web3.eth.getBlock('latest');
    await operators.registerOperator(operator, 'Operator', 'Asset Type');
    let e = events.LogOperator({message: 'Operator registered', origin: owner}, {fromBlock: block.number, toBlock: 'latest'});
    let logs = await Promisify(callback => e.get(callback));
    operatorID = logs[0].args.operatorID;
    await operators.acceptERC20Token(operatorID, erc20.address, true, {from: operator});
    await operators.acceptEther(operatorID, true, {from: operator});
  });

  //Start successful funding
  it('Start funding', async() => {
    assetURI = 'ipfs.io/F3b2854A9';
    assetManagerFee = 5;
    let block = await web3.eth.getBlock('latest');
    await crowdsaleGen.createAssetOrderERC20(assetURI, operatorID, 100, 0, 20*ETH, assetManagerFee, erc20.address, {from:assetManager});
    let e = events.LogAsset({message: 'Asset funding started', origin: assetManager}, {fromBlock: block.number, toBlock: 'latest'});
    let logs = await Promisify(callback => e.get(callback));
    assetID = logs[0].args.assetID;
    assetTokenAddress = logs[0].args.token;
    console.log('Token Address: ' + tokenAddress);
    assetToken = await AssetToken.at(assetTokenAddress);
  });

  it('User1 funding', async() => {
    await erc20.approve(crowdsale.address, 5*ETH, {from:user1});
    await crowdsale.buyAssetOrderERC20(assetID, 5*ETH, {from:user1});
    let user1AssetTokens = await assetToken.balanceOf(user1);
    console.log('assetToken Address: ' + assetToken.address);
    console.log('User: ' + user1);
    console.log('User assetTokens: ' + Number(user1AssetTokens));

    let assetTokenSupply = await assetToken.totalSupply()
    console.log('assetToken Supply: ' + assetTokenSupply);
    assert.equal(user1AssetTokens, 5*ETH);
  });

  it('Asset already exists fail', async() => {
    let err;
    let assetManagerFee = 2;
    //Fail because asset already exists
    try{
      await crowdsaleGen.createAssetOrderERC20(assetURI, operatorID, 10, 0, 20*ETH, assetManagerFee, erc20.address, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to buy asset, fail to payout. No platform address', async() => {
    let err;
    try{
      await erc20.approve(crowdsale.address, 15*ETH, {from:user2});
      await crowdsale.buyAssetOrderERC20(assetID, 15*ETH, {from:user2});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

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
    console.log(user2);
    ownerBalanceBefore = await erc20.balanceOf(owner);
    operatorBalanceBefore = await erc20.balanceOf(operator);
    await erc20.approve(crowdsale.address, 15*ETH, {from:user2});
    await crowdsale.buyAssetOrderERC20(assetID, 15*ETH, {from:user2});
    let user2AssetTokens = await assetToken.balanceOf(user2);
    console.log(Number(user2AssetTokens));
    assert.equal(user2AssetTokens, 15*ETH);

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
      await crowdsale.buyAssetOrderERC20(assetID, 5*ETH, {from:user3});
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

  it('Asset Manager withdraw dividends', async() => {
    managerBalanceBefore = await erc20.balanceOf(assetManager);
    await assetManagerFunds.withdraw(assetID, {from:assetManager});
    managerBalanceAfter = await erc20.balanceOf(assetManager);
    assert.equal(bn(managerBalanceAfter).isGreaterThan(managerBalanceBefore), true);
  });

  //Start failed funding
  it('Start failed funding', async() => {
    let err;

    await operators.removeOperator(operatorID);
    assetURI = 'Fail: No operator';
    assetManagerFee = 10;
    try{
      await crowdsaleGen.createAssetOrderERC20(assetURI, operatorID, 10, 0, 20*ETH, assetManagerFee, erc20.address, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set operator', async() => {
    let block = await web3.eth.getBlock('latest');
    await operators.registerOperator(operator, 'Operator', 'Asset Type');
    let e = events.LogOperator({message: 'Operator registered', origin: owner}, {fromBlock: block.number, toBlock: 'latest'});
    let logs = await Promisify(callback => e.get(callback));
    operatorID = logs[0].args.operatorID;
    await operators.acceptERC20Token(operatorID, erc20.address, true, {from: operator});
    await operators.acceptEther(operatorID, true, {from: operator});
  });

  it('Start funding that does not reach goal', async() => {
    assetURI = 'Goooooooaaallllllll';
    assetManagerFee = 20;
    let block = await web3.eth.getBlock('latest');
    await crowdsaleGen.createAssetOrderERC20(assetURI, operatorID, 1, 0, 20*ETH, assetManagerFee, erc20.address, {from:assetManager});
    let e = events.LogAsset({message: 'Asset funding started', origin: assetManager}, {fromBlock: block.number, toBlock: 'latest'});
    let logs = await Promisify(callback => e.get(callback));
    assetID = logs[0].args.assetID;
    assetTokenAddress = logs[0].args.token;
    assetToken = await AssetToken.at(assetTokenAddress);
  });

  it('User3 funding', async() => {
    await erc20.approve(crowdsale.address, 5*ETH, {from:user3});
    await crowdsale.buyAssetOrderERC20(assetID, 5*ETH, {from:user3});
    let user3assetTokens = await assetToken.balanceOf(user3);
    assert.equal(user3assetTokens, 5*ETH);
  });

  // TODO: this isn't failing as it should
  it('User1 funding fail', async() => {
    web3.currentProvider.send({jsonrpc: "2.0", method: "evm_increaseTime", params: [3], id: 0});

    let err;
    try{
      await erc20.approve(crowdsale.address, 5*ETH, {from:user1});
      await crowdsale.buyAssetOrderERC20(assetID, 5*ETH, {from:user1});
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

  // start funding with 0 assetmanager fee
  it('Start funding with no fee', async() => {
    assetURI = 'ipfs.io/F3b285ABA9';
    assetManagerFee = 0;
    let block = await web3.eth.getBlock('latest');
    await crowdsaleGen.createAssetOrderERC20(assetURI, operatorID, 100, 0, 2*ETH, assetManagerFee, erc20.address, {from:assetManager});
    let e = events.LogAsset({message: 'Asset funding started', origin: assetManager}, {fromBlock: block.number, toBlock: 'latest'});
    let logs = await Promisify(callback => e.get(callback));
    assetID = logs[0].args.assetID;
    assetTokenAddress = logs[0].args.token;
    console.log('Token Address: ' + tokenAddress);
    assetToken = await AssetToken.at(assetTokenAddress);
  });

  it('Fully fund no fee asset', async() => {
    await erc20.approve(crowdsale.address, 2*ETH, {from:user1});
    let platformWalletBalance = await erc20.balanceOf(owner);
    await crowdsale.buyAssetOrderERC20(assetID, 2*ETH, {from:user1});
    let user1AssetTokens = await assetToken.balanceOf(user1);
    let assetTokenSupply = await assetToken.totalSupply()
    assert.equal(assetTokenSupply.eq(user1AssetTokens), true);
    assert.equal(user1AssetTokens, 2*ETH);
    assert.equal(await assetToken.mintingFinished(), true);
    assert.equal(await assetToken.balanceOf(assetManager), 0);
    assert.equal(await api.crowdsaleFinalized(assetID), true);
    // Check payout to platform and operator
    console.log(platformWalletBalance);
    console.log(await erc20.balanceOf(owner));
    // assert.equal(bn(platformWalletBalance).gt(await erc20.balanceOf(owner)), true);
  });

  it('Fail to create asset with 0 amount to raise', async() => {
    let err;
    assetURI = 'ipfs.io/F3b285ABCA9';
    assetManagerFee = 12;
    try{
      await await crowdsaleGen.createAssetOrderERC20(assetURI, operatorID, 100, 0, 0, assetManagerFee, erc20.address, {from:assetManager});
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
