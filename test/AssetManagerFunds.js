var bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

const AssetManagerFunds = artifacts.require("./roles/AssetManagerFunds.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const MiniMeTokenFactory = artifacts.require("MiniMeTokenFactory.sol");
const MiniMeToken = artifacts.require("MiniMeToken.sol");
const MyBitToken = artifacts.require("./tokens/ERC20/MyBitToken.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Operators = artifacts.require("./roles/Operators.sol");
const Platform = artifacts.require("./ecosystem/Platform.sol");
const API = artifacts.require("./database/API.sol");

const ETH = bn(10**18);
const tokenPerAccount = bn(10).times(ETH);

contract('AssetManagerFunds', async(accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const user3 = accounts[3];
  const assetManager = accounts[4];
  const operator = accounts[5];
  const tokenHolders = [user1, user2, user3];

  let maxGas;
  let id;
  let divToken;
  let erc20Token;
  let tokenFactory;
  let db;
  let events;
  let cm;
  let hash;
  let api;
  let escrow;
  let platform;
  let operators;
  let operatorID;
  let assetURI = 'NewAsset';
  let assetsETH;
  let assetsERC;

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
    await cm.addContract('Owner', owner);
  });

  it('Deploy hash contract', async() => {
    api = await API.new(db.address);
  });

  it("Deploy standard token", async() => {
    erc20Token = await MyBitToken.new('MyBit', 'MYB', bn(10000).times(ETH).toString());
    await erc20Token.transfer(operator, bn(100).times(ETH));
    assert.equal(bn(await erc20Token.balanceOf(operator)).eq(bn(100).times(ETH)), true);
  });

  it('Deploy dividend Token', async() => {
    tokenFactory = await MiniMeTokenFactory.new();
    tx = await tokenFactory.createCloneToken('0x0000000000000000000000000000000000000000', 0, assetURI, 18, assetURI, true, '0x0000000000000000000000000000000000000000', {from:owner});
    divToken = await MiniMeToken.at(tx.logs[0].args.token);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      await divToken.generateTokens(tokenHolders[i], tokenPerAccount.toString());
      userBalance = bn(await divToken.balanceOf(tokenHolders[i]));
      assert.equal(userBalance.eq(tokenPerAccount), true);
    }
    // Check token ledger is correct
    assert.equal(bn(await divToken.balanceOf(owner)).eq(0), true);
  });

  it('Deploy assetManager assets', async() => {
    assetManagerFunds = await AssetManagerFunds.new(db.address, events.address);
    await cm.addContract('AssetManagerFunds', assetManagerFunds.address);
  });

  it("Transfer token to assetManager assets", async() => {
    await divToken.generateTokens(assetManagerFunds.address, tokenPerAccount.toString());
    assetManagerBalance = bn(await divToken.balanceOf(assetManagerFunds.address));
    assert.equal(assetManagerBalance.eq(tokenPerAccount), true);
  });

  it('Deploy platform', async() => {
    platform = await Platform.new(db.address, events.address);
    await cm.addContract('Platform', platform.address);
    await platform.setPlatformFundsWallet(owner);
    await platform.setPlatformAssetsWallet(owner);
    await platform.setPlatformToken(erc20Token.address);
  });

  it('Set operator', async() => {
    operators = await Operators.new(db.address, events.address);
    await cm.addContract('Operators', operators.address);
    let block = await web3.eth.getBlock('latest');
    await operators.registerOperator(operator, 'Operator', 'QmHash', '0x0000000000000000000000000000000000000000');
    let logs = await events.getPastEvents('LogOperator', {filter: {messageID: web3.utils.sha3('Operator registered'), origin: owner}, fromBlock: block.number});
    operatorID = logs[0].args.operatorID;
  });

  it("Set assets array", async() => {
    assetsETH = [divToken.address];
  });

  it("Set asset variables", async() => {
    let assetManagerHash = await hash.stringAddress("asset.manager", divToken.address);
    let operatorHash = await hash.stringAddress("operator", divToken.address);
    await db.setAddress(assetManagerHash, assetManager);
    await db.setAddress(operatorHash, operator);
  });

  it("Add multiple assets", async() => {
    var number = 20; //We can test multiple assets to find the limit, the limit is 93 (92 + 1 from 'Generate assetID')
    for(var i=0; i<number; i++){
      let uri = 'test'+i;
      //Add token
      tx = await tokenFactory.createCloneToken('0x0000000000000000000000000000000000000000', 0, uri, 18, uri, true, '0x0000000000000000000000000000000000000000', {from:owner});
      let testToken = await MiniMeToken.at(tx.logs[0].args.token);
      //Mint
      await testToken.generateTokens(assetManagerFunds.address, tokenPerAccount.toString());
      let balance = bn(await testToken.balanceOf(assetManagerFunds.address));
      assert.equal(balance.eq(tokenPerAccount), true);
      assetsETH.push(testToken.address);

      let assetManagerHash = await hash.stringAddress("asset.manager", testToken.address);
      let operatorHash = await hash.stringAddress("asset.operator", testToken.address);
      await db.setAddress(assetManagerHash, assetManager);
      await db.setAddress(operatorHash, operator);

      await testToken.issueDividends(bn(0.1).times(ETH).toString(), {from:operator, value:bn(0.1).times(ETH).toString()});
    }
  });

  it('Send money to token contract', async() => {
    //await web3.eth.sendTransaction({from:operator, to:divToken.address, value:10*ETH});
    await divToken.issueDividends(bn(2).times(ETH).toString(), {from:operator, value:bn(2).times(ETH).toString()});
    console.log(await web3.eth.getBalance(divToken.address));
    assert.equal(2*ETH, await divToken.assetIncome());
  });

  it("Withdraw dividends ETH", async() => {
    let balanceBefore = await web3.eth.getBalance(user1);
    console.log("withdraw dividends");
    let amountOwed = await divToken.getAmountOwed(user1);
    await divToken.withdraw({from:user1});
    let balanceAfter = await web3.eth.getBalance(user1);
    assert.notEqual(balanceBefore, balanceAfter);
    //console.log(tx);
    assert.equal(bn(balanceAfter).isGreaterThan(balanceBefore), true);
  });

  it("Fail to withdraw from assetManager asset: not asset manager", async() => {
    let err;
    try{
      await assetManagerFunds.withdraw(divToken.address, {from:owner});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to withdraw from assetManager asset: asset address cannot be zero", async() => {
    let err;
    try{
      await assetManagerFunds.withdraw('0x0000000000000000000000000000000000000000', {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Withdraw from single asset", async() => {
    //Withdraw fails in solidity-coverage
    if(id < 1500000000000){
      let amountOwed = bn(await divToken.getAmountOwed(assetManagerFunds.address));
      assert.notEqual(amountOwed.eq(0), true);
      let balanceBefore = await web3.eth.getBalance(assetManager);
      await assetManagerFunds.withdraw(divToken.address, {from:assetManager});
      let balanceAfter = await web3.eth.getBalance(assetManager);
      assert.equal(bn(balanceAfter).isGreaterThan(balanceBefore), true);
    }
  });

  it("Fail to withdraw from assetManager asset: no funds", async() => {
    let err;
    try{
      await assetManagerFunds.withdraw(divToken.address, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });


  it('Withdraw from assetManager assets (ETH)', async() => {
    //Withdraw fails in solidity-coverage
    if(id < 1500000000000){
      let balanceBefore = await web3.eth.getBalance(assetManager);
      await assetManagerFunds.retrieveAssetManagerETH(assetsETH, {from:assetManager, gas:maxGas});
      let balanceAfter = await web3.eth.getBalance(assetManager);
      assert.equal(bn(balanceAfter).isGreaterThan(balanceBefore), true);
    }
  });

  // TEST ERC20 assets

  it('Deploy dividendERC20 Token', async() => {
    assetURI = 'https://someurl.ch';
    tx = await tokenFactory.createCloneToken('0x0000000000000000000000000000000000000000', 0, assetURI, 18, assetURI, true, erc20Token.address, {from: owner});
    divToken = await MiniMeToken.at(tx.logs[0].args.token);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      await divToken.generateTokens(tokenHolders[i], tokenPerAccount.toString());
      userBalance = bn(await divToken.balanceOf(tokenHolders[i]));
      assert.equal(userBalance.eq(tokenPerAccount), true);
    }
    // Check token ledger is correct
    assert.equal(bn(await divToken.balanceOf(owner)).eq(0), true);
  });

  it("Transfer token to assetManager assets", async() => {
    await divToken.generateTokens(assetManagerFunds.address, tokenPerAccount);
    assetManagerBalance = bn(await divToken.balanceOf(assetManagerFunds.address));
    assert.equal(assetManagerBalance.eq(tokenPerAccount), true);
  });

  it("Setup asset array", async() => {
    assetsERC = [divToken.address];
    assetsERC.push(divToken.address); //Add address a second time to test handling redundancy
  });

  it("Set asset variables", async() => {
    let assetManagerHash = await hash.stringAddress("asset.manager", divToken.address);
    let operatorHash = await hash.stringAddress("operator", divToken.address);
    await db.setAddress(assetManagerHash, assetManager);
    await db.setAddress(operatorHash, operator);
  });

  it('Send payment tokens to asset-token contract', async() => {
    let divERC20 = await divToken.getERC20();
    assert.equal(await divToken.getERC20(), erc20Token.address);
    await erc20Token.approve(divToken.address, bn(5).times(ETH).toString(), {from: operator});
    await divToken.issueDividends(bn(5).times(ETH).toString(), {from: operator});
    assert.equal(bn(await divToken.assetIncome()).eq(5*ETH), true);
    assert.equal(bn(await erc20Token.balanceOf(divToken.address)).eq(5*ETH), true);
  });

  it("Add multiple assets", async() => {
    var number = 20; //We can test multiple assets to find the limit, the limit is 42 (41 + 1 from 'Generate assetID')
    for(var i=0; i<number; i++){
      let uri = 'test'+i;
      //Add token
      tx = await tokenFactory.createCloneToken('0x0000000000000000000000000000000000000000', 0, uri, 18, uri, true, erc20Token.address, {from:owner});
      let testToken = await MiniMeToken.at(tx.logs[0].args.token);
      //Mint
      await testToken.generateTokens(assetManagerFunds.address, tokenPerAccount.toString());

      let balance = bn(await testToken.balanceOf(assetManagerFunds.address));
      assert.equal(balance.eq(tokenPerAccount), true);

      assetsERC.push(testToken.address);

      let assetManagerHash = await hash.stringAddress("asset.manager", testToken.address);
      let operatorHash = await hash.stringAddress("asset.operator", testToken.address);
      await db.setAddress(assetManagerHash, assetManager);
      await db.setAddress(operatorHash, operator);

      await erc20Token.approve(testToken.address, bn(0.1).times(ETH).toString(), {from: operator});
      await testToken.issueDividends(bn(0.1).times(ETH).toString(), {from:operator});
    }
  });

  it("Withdraw dividends ERC20", async() => {
    let balanceBefore = bn(await erc20Token.balanceOf(user1));
    let amountOwed = await divToken.getAmountOwed(user1);
    assert.notEqual(amountOwed, 0);
    let tx = await divToken.withdraw({from:user1});
    let balanceAfter = bn(await erc20Token.balanceOf(user1));
    //console.log(tx);
    assert.equal(balanceBefore.plus(amountOwed).eq(balanceAfter), true);
  });

  it("Fail to withdraw from assetManager asset: not asset manager", async() => {
    let err;
    try{
      await assetManagerFunds.withdraw(divToken.address, {from:owner});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to withdraw from assetManager asset: asset address cannot be zero", async() => {
    let err;
    try{
      await assetManagerFunds.withdraw('0x0000000000000000000000000000000000000000', {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Withdraw from single asset", async() => {
    let amountOwed = bn(await divToken.getAmountOwed(assetManagerFunds.address));
    assert.notEqual(amountOwed.eq(0), true);
    let balanceBefore = await erc20Token.balanceOf(assetManager);
    await assetManagerFunds.withdraw(divToken.address, {from:assetManager});
    let balanceAfter = await erc20Token.balanceOf(assetManager);
    assert.equal(bn(balanceAfter).isGreaterThan(balanceBefore), true);
  });


  it('Withdraw from assetManager assets ERC20', async() => {
    let balanceBefore = await erc20Token.balanceOf(assetManager);
    await assetManagerFunds.retrieveAssetManagerTokens(assetsERC, {from:assetManager, gas:maxGas});
    let balanceAfter = await erc20Token.balanceOf(assetManager);
    assert.equal(bn(balanceAfter).isGreaterThan(balanceBefore), true);
  });

  it('Fail to destroy', async() => {
    let err;
    try{
      await assetManagerFunds.destroy({from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Destroy', async() => {
    await assetManagerFunds.destroy({from: owner});
  });
});
