var bn = require('bignumber.js');

const AssetManagerFunds = artifacts.require("./roles/AssetManagerFunds.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const DivToken = artifacts.require("./tokens/ERC20/DividendToken.sol");
const DivTokenERC20 = artifacts.require("./tokens/ERC20/DividendTokenERC20.sol");
const MyBitToken = artifacts.require("./tokens/ERC20/MyBitToken.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
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
const tokenHolders = [user1, user2, user3];

const ETH = 1000000000000000000;
const tokenPerAccount = 10*ETH;

contract('AssetManagerFunds', async() => {
  let divToken;
  let divTokenERC20;
  let burnToken
  let db;
  let events;
  let cm;
  let hash;
  let api;
  let escrow;
  let assetID;
  let platform;
  let operators;
  let operatorID;
  let assetURI = 'NewAsset';
  let assetsETH;
  let assetsERC;

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
    burnToken = await MyBitToken.new('MyB', 10000*ETH);
    await burnToken.transfer(operator, 100*ETH);
    assert.equal(await burnToken.balanceOf(operator), 100*ETH);
  });

  it('Deploy dividend Token', async() => {
    divToken = await DivToken.new(assetURI, owner);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      console.log(web3.eth.accounts[i]);
      await divToken.mint(tokenHolders[i], tokenPerAccount);
      userBalance = await divToken.balanceOf(tokenHolders[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    // Check token ledger is correct
    assert.equal(await divToken.balanceOf(owner), 0);
  });

  it('Deploy assetManager assets', async() => {
    assetManagerFunds = await AssetManagerFunds.new(db.address, events.address);
    await cm.addContract('AssetManagerFunds', assetManagerFunds.address);
  });

  it("Transfer token to assetManager assets", async() => {
    await divToken.mint(assetManagerFunds.address, tokenPerAccount);
    assetManagerBalance = await divToken.balanceOf(assetManagerFunds.address);
    assert.equal(assetManagerBalance, tokenPerAccount);
  });

  it('Deploy platform', async() => {
    platform = await Platform.new(db.address, events.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformWallet(owner);
    await platform.setPlatformToken(burnToken.address);
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

  it("Generate assetID", async() => {
    assetID = await hash.getAssetID(assetURI, 10*ETH, operatorID, {from:assetManager});
    assetsETH = [assetID];
  });

  it("Set asset variables", async() => {
    let tokenHash = await hash.stringBytes("tokenAddress", assetID);
    let assetManagerHash = await hash.stringBytes("assetManager", assetID);
    let operatorHash = await hash.stringBytes("operator", assetID);
    await db.setAddress(tokenHash, divToken.address);
    await db.setAddress(assetManagerHash, assetManager);
    await db.setAddress(operatorHash, operator);
  });
/*
  it("Add multiple assets", async() => {
    var number = 92; //We can test multiple assets to find the limit, the limit is 93 (92 + 1 from 'Generate assetID')
    for(var i=0; i<number; i++){
      //Add token
      let testToken = await DivToken.new(i, owner);
      //Mint
      await testToken.mint(assetManagerFunds.address, tokenPerAccount);
      let balance = await testToken.balanceOf(assetManagerFunds.address);
      assert.equal(balance, tokenPerAccount);
      let uri = ''+i;
      let id = await hash.getAssetID(uri, 10*ETH, operatorID, {from:assetManager});
      //console.log('Asset ID ', i, ': ', id);
      assetsETH.push(id);

      let tokenHash = await hash.stringBytes("tokenAddress", id);
      let assetManagerHash = await hash.stringBytes("assetManager", id);
      let operatorHash = await hash.stringBytes("operator", id);
      await db.setAddress(tokenHash, testToken.address);
      await db.setAddress(assetManagerHash, assetManager);
      await db.setAddress(operatorHash, operator);

      await testToken.issueDividends({from:operator, value:0.1*ETH});


    }
  });
  */

  it('Send money to token contract', async() => {
    //await web3.eth.sendTransaction({from:operator, to:divToken.address, value:10*ETH});
    await divToken.issueDividends({from:operator, value:2*ETH});
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

  it('Withdraw from assetManager assets (ETH)', async() => {
    let balanceBefore = await web3.eth.getBalance(assetManager);
    let amountOwed = await divToken.getAmountOwed(assetManagerFunds.address);
    assert.notEqual(amountOwed, 0);
    await assetManagerFunds.retrieveAssetManagerETH(assetsETH, {from:assetManager, gas:6721975});
    let balanceAfter = await web3.eth.getBalance(assetManager);
    assert.equal(bn(balanceAfter).isGreaterThan(balanceBefore), true);
  });

  // TEST ERC20 assets

  it('Deploy dividendERC20 Token', async() => {
    assetURI = 'https://someurl.ch';
    divTokenERC20 = await DivTokenERC20.new(assetURI, owner, burnToken.address);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      await divTokenERC20.mint(tokenHolders[i], tokenPerAccount);
      userBalance = await divTokenERC20.balanceOf(tokenHolders[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    // Check token ledger is correct
    assert.equal(await divTokenERC20.balanceOf(owner), 0);
  });

  it("Transfer token to assetManager assets", async() => {
    await divTokenERC20.mint(assetManagerFunds.address, tokenPerAccount);
    assetManagerBalance = await divTokenERC20.balanceOf(assetManagerFunds.address);
    assert.equal(assetManagerBalance, tokenPerAccount);
  });

  it("Generate assetID", async() => {
    assetID = await hash.getAssetID(assetURI, 10*ETH, operatorID, {from:assetManager});
    assetsERC = [assetID];
  });

  it("Set asset variables", async() => {
    let tokenHash = await hash.stringBytes("tokenAddress", assetID);
    let assetManagerHash = await hash.stringBytes("assetManager", assetID);
    let operatorHash = await hash.stringBytes("operator", assetID);
    await db.setAddress(tokenHash, divTokenERC20.address);
    await db.setAddress(assetManagerHash, assetManager);
    await db.setAddress(operatorHash, operator);
  });

  it('Send payment tokens to asset-token contract', async() => {
    assert.equal(await divTokenERC20.getERC20(), burnToken.address);
    await burnToken.approve(divTokenERC20.address, 5*ETH, {from: operator});
    await divTokenERC20.issueDividends(5*ETH, {from: operator});
    assert.equal(await divTokenERC20.assetIncome(), 5*ETH);
    assert.equal(await burnToken.balanceOf(divTokenERC20.address), 5*ETH);
  });
/*
  it("Add multiple assets", async() => {
    var number = 41; //We can test multiple assets to find the limit, the limit is 42 (41 + 1 from 'Generate assetID')
    for(var i=0; i<number; i++){
      let uri = ''+i;
      //Add token
      let erc20Token = await MyBitToken.new(uri, 10000*ETH, {from: operator});
      let testToken = await DivTokenERC20.new(uri, owner, erc20Token.address);
      //Mint
      await testToken.mint(assetManagerFunds.address, tokenPerAccount);

      let balance = await testToken.balanceOf(assetManagerFunds.address);
      assert.equal(balance, tokenPerAccount);

      let id = await hash.getAssetID(uri, 10*ETH, operatorID, {from:assetManager});
      //console.log('Asset ID ', i, ': ', id);
      assetsERC.push(id);

      let tokenHash = await hash.stringBytes("tokenAddress", id);
      let assetManagerHash = await hash.stringBytes("assetManager", id);
      let operatorHash = await hash.stringBytes("operator", id);
      await db.setAddress(tokenHash, testToken.address);
      await db.setAddress(assetManagerHash, assetManager);
      await db.setAddress(operatorHash, operator);

      await erc20Token.approve(testToken.address, 1*ETH, {from: operator});
      await testToken.issueDividends(0.1*ETH, {from:operator});
    }
  });
*/
  it("Withdraw dividends ERC20", async() => {
    let balanceBefore = await burnToken.balanceOf(user1);
    let amountOwed = await divTokenERC20.getAmountOwed(user1);
    assert.notEqual(amountOwed, 0);
    console.log(amountOwed);
    let tx = await divTokenERC20.withdraw({from:user1});
    let balanceAfter = await burnToken.balanceOf(user1);
    //console.log(tx);
    assert.equal(balanceBefore.plus(amountOwed).eq(balanceAfter), true);
  });

  it('Withdraw from assetManager assets ERC20', async() => {
    let balanceBefore = await burnToken.balanceOf(assetManager);
    let amountOwed = await divTokenERC20.getAmountOwed(assetManagerFunds.address);
    assert.notEqual(amountOwed, 0);
    assert.equal(divTokenERC20.address, await api.getAssetAddress(assetID));
    assert.equal(await divTokenERC20.balanceOf(assetManagerFunds.address), tokenPerAccount);
    console.log("amount owed");
    console.log(amountOwed);
    let tx = await assetManagerFunds.retrieveAssetManagerTokens(assetsERC, {from:assetManager, gas:6721975});
    //console.log(tx);
    let balanceAfter = await burnToken.balanceOf(assetManager);
    console.log(balanceAfter);
    console.log(balanceBefore);
    assert.equal(balanceBefore.plus(amountOwed).eq(balanceAfter), true);
  });
});
