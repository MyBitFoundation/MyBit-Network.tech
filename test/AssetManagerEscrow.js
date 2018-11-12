var bn = require('bignumber.js');

const AssetManagerEscrow = artifacts.require("./roles/AssetManagerEscrow.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const DivToken = artifacts.require("./tokens/ERC20/DividendToken.sol");
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
let tokenPerAccount;

contract('AssetManager Escrow', async() => {
  let divToken;
  let burnToken
  let db;
  let events;
  let cm;
  let api;
  let hash;
  let escrow;
  let platform;
  let operators;

  let assetManagerEscrowID;
  let operatorID;
  let assetID;
  let assetURI = 'NewAsset';

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

  it('Deploy api', async() => {
    api = await API.new(db.address);
    await cm.addContract('API', api.address);
  });

  it("Deploy standard token", async() => {
    burnToken = await MyBitToken.new('MyB', 10000*ETH);
  });

  it("Transfer token to assetManager", async() => {
    await burnToken.transfer(assetManager, 100*ETH);
    assetManagerBalance = await burnToken.balanceOf(assetManager);
    assert.equal(assetManagerBalance, 100*ETH);
  });

  it('Deploy platform', async() => {
    platform = await Platform.new(db.address, events.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformWallet(owner);
    await platform.setPlatformToken(burnToken.address);
  });

  it('Deploy assetManager escrow', async() => {
    escrow = await AssetManagerEscrow.new(db.address, events.address);
    await cm.addContract('AssetManagerEscrow', escrow.address);
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
    assetID = await hash.getAssetID(assetURI, 8*ETH, operatorID, {from:assetManager});
  });

  it("Lock escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(assetManager);
    await burnToken.approve(escrow.address, 2*ETH, {from:assetManager});
    let block = await web3.eth.getBlock('latest');
    await escrow.lockEscrow(assetID, 2*ETH, {from:assetManager});
    let e = events.LogEscrow({message: 'Escrow locked', origin: assetManager}, {fromBlock: block.number, toBlock: 'latest'});
    let logs = await Promisify(callback => e.get(callback));
    assetManagerEscrowID = logs[0].args.escrowID;
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceBefore).minus(balanceAfter);
    assert.equal(diff, 2*ETH);
  });

  //Funding deadline is passed but didn't raise enough funds
  it("Unlock escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(assetManager);
    await escrow.unlockEscrow(assetID, {from:assetManager});
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceAfter).minus(balanceBefore);
    assert.equal(diff.isEqualTo(bn(ETH).multipliedBy(2)), true);
  });

  it("Lock escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(assetManager);
    let assetManagerID = await api.getAssetManagerEscrowID(assetID, assetManager);
    await burnToken.approve(escrow.address, 2*ETH, {from:assetManager});
    await escrow.lockEscrow(assetID, 2*ETH, {from:assetManager});
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceBefore).minus(balanceAfter);
    assert.equal(await api.getAssetManagerEscrow(assetManagerID), 2*ETH);
    assert.equal(diff, 2*ETH);
  });

  it("Fail to lock escrow", async() => {
    let err;
    //Fail because asset already exists
    try{
      await escrow.lockEscrow(assetID, 2*ETH, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Finish funding", async() => {
    let finishHash = await hash.stringBytes('crowdsaleFinalized', assetID);
    await db.setBool(finishHash, true);
    let amountHash = await hash.stringBytes("amountToRaise", assetID);
    await db.setUint(amountHash, 8*ETH);

  });

  it("Deploy asset token", async() => {
    divToken = await DivToken.new(assetURI, owner);
    let tokenHash = await hash.stringBytes('tokenAddress', assetID);
    await db.setAddress(tokenHash, divToken.address);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    let totalSupply = bn(8).times(ETH);
    tokenPerAccount = totalSupply / tokenHolders.length;   // TODO: getting error with bignumber.js here
    for (var i = 0; i < tokenHolders.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await divToken.mint(tokenHolders[i], tokenPerAccount);
      userBalance = await divToken.balanceOf(tokenHolders[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    let currentSupply = await divToken.totalSupply();
    assert.equal(await divToken.balanceOf(owner), 0);
  });

  it("Fail to unlock escrow", async() => {
    let err;
    //Fail because no ROI yet
    try{
      await escrow.unlockEscrow(assetID, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Pay half ROI", async() => {
    await divToken.issueDividends({from:operator, value:4*ETH});
  });

  it("Fail to unlock escrow", async() => {
    let err;
    //Fail because wrong user
    try{
      await escrow.unlockEscrow(assetID, {from:operator});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to unlock escrow", async() => {
    let err;
    //Fail because funding not complete
    let fundingHash = await hash.stringBytes('fundingDeadline', assetID);
    let currentTime = await web3.eth.getBlock('latest').timestamp;
    await db.setUint(fundingHash, currentTime+10);
    try{
      await escrow.unlockEscrow(assetID, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
    await db.setUint(fundingHash, currentTime-10);
  });


  it("Unlock half escrow", async() => {
    let assetManagerID = await api.getAssetManagerEscrowID(assetID, assetManager);
    let balanceBefore = await burnToken.balanceOf(assetManager);
    await escrow.unlockEscrow(assetID, {from:assetManager});
    assert.equal(await api.getAssetManagerEscrowRemaining(assetManagerID), 1*ETH);
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceAfter).minus(balanceBefore);
    console.log(diff);
    assert.equal(diff.isEqualTo(bn(ETH).multipliedBy(2).dividedBy(2)), true);
  });

  it("Fail to unlock more escrow without further income", async() => {
    let err;
    try{
      await escrow.unlockEscrow(assetID, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Pay under a quarter of ROI", async() => {
    await divToken.issueDividends({from:operator, value: 1*ETH});
    let roi = await api.getAssetROI(assetID);
    assert.equal(bn(roi).lt(75), true);
  });


  it("Fail to unlock more escrow without further income", async() => {
    let err;
    try{
      await escrow.unlockEscrow(assetID, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });


  it("Pay rest of ROI", async() => {
    await divToken.issueDividends({from:operator, value:3*ETH});
    assert.equal(await divToken.assetIncome(), 8*ETH);
  });

  it("Unlock rest of escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(assetManager);
    await escrow.unlockEscrow(assetID, {from:assetManager});
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceAfter).minus(balanceBefore);
    assert.equal(diff.isEqualTo(bn(ETH).multipliedBy(2).dividedBy(2)), true);
  });

  it("Fail to unlock escrow after 100% ROI", async() => {
    let err;
    try{
      await escrow.unlockEscrow(assetID, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("More ROI !! ", async() => {
    await divToken.issueDividends({from:operator, value:4*ETH});
    assert.equal(await divToken.assetIncome(), 12*ETH);
  });

  it("Fail to unlock escrow after 150% ROI", async() => {
    let err;
    try{
      await escrow.unlockEscrow(assetID, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to burn", async() => {
    let err;
    //Fail because not owner
    try{
      await escrow.burnEscrow(assetID, {from:user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Return ether to operator (So we do not have to restart ganache!)', async() => {
    let amount = 2*ETH/tokenHolders.length;
    for (var i = 0; i < tokenHolders.length; i++) {
      await web3.eth.sendTransaction({from:tokenHolders[i], to:operator, value:amount})
    }
  });

});
