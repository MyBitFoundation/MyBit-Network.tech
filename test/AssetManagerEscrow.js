var bn = require('bignumber.js');

const AssetManagerEscrow = artifacts.require("./roles/AssetManagerEscrow.sol");
const AssetGovernance = artifacts.require("./ownership/AssetGovernance");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const DivToken = artifacts.require("./tokens/ERC20/DividendToken.sol");
const MyBitToken = artifacts.require("./tokens/ERC20/MyBitToken.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Operators = artifacts.require("./roles/Operators.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");
const API = artifacts.require("./database/API.sol");

const ETH = bn(10**18);
let tokenPerAccount;

contract('AssetManager Escrow', async(accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const user3 = accounts[3];
  const assetManager = accounts[4];
  const operator = accounts[5];
  const tokenHolders = [user1, user2, user3];

  let divToken;
  let burnToken
  let db;
  let events;
  let cm;
  let api;
  let hash;
  let escrow;
  let governance;
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
    burnToken = await MyBitToken.new('MyB', bn(10000).times(ETH));
  });

  it("Deploy asset goverance", async() => {
    governance = await AssetGovernance.new(db.address, events.address);
    await cm.addContract('AssetGovernance', governance.address);
  })

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
    escrow = await AssetManagerEscrow.new(db.address, events.address, governance.address);
    await cm.addContract('AssetManagerEscrow', escrow.address);
  });

  it('Set operator', async() => {
    operators = await Operators.new(db.address, events.address);
    await cm.addContract('Operators', operators.address);
    let block = await web3.eth.getBlock('latest');
    await operators.registerOperator(operator, 'Operator', 'Asset Type');
    let logs = await events.getPastEvents('LogOperator', {filter: {messageID: web3.utils.sha3('Operator registered'), origin: owner}, fromBlock: block.number});
    operatorID = logs[0].args.operatorID;
  });

  it("Generate assetID", async() => {
    assetID = await hash.getAssetID(assetURI, 8*ETH, operatorID, {from:assetManager});
  });

  it("Lock escrow", async() => {
    let escrowAmount = bn(2).times(ETH);
    let balanceBefore = await burnToken.balanceOf(assetManager);
    await burnToken.approve(escrow.address, escrowAmount, {from:assetManager});
    let block = await web3.eth.getBlock('latest');
    await escrow.lockEscrow(assetID, escrowAmount, {from:assetManager});
    let logs = await events.getPastEvents('LogEscrow', {filter: {messageID: web3.utils.sha3('Escrow locked'), origin: assetManager}, fromBlock: block.number});
    assetManagerEscrowID = logs[0].args.escrowID;
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceBefore).minus(balanceAfter);
    assert.equal(diff.eq(escrowAmount), true);
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
    let escrowAmount = bn(2).times(ETH);
    let balanceBefore = await burnToken.balanceOf(assetManager);
    let assetManagerID = await api.getAssetManagerEscrowID(assetID, assetManager);
    await burnToken.approve(escrow.address, escrowAmount, {from:assetManager});
    await escrow.lockEscrow(assetID, escrowAmount, {from:assetManager});
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceBefore).minus(balanceAfter);
    assert.equal(bn(await api.getAssetManagerEscrow(assetManagerID)).eq(escrowAmount), true);
    assert.equal(diff.eq(escrowAmount), true);
  });

  it("Fail to lock escrow", async() => {
    let err;
    //Fail because asset already exists
    try{
      await escrow.lockEscrow(assetID, bn(2).times(ETH), {from:assetManager});
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
      //console.log(accounts[i]);
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
    let block = await web3.eth.getBlock('latest');
    let currentTime = bn(block.timestamp);
    console.log(currentTime);
    await db.setUint(fundingHash, currentTime.plus(10));
    try{
      await escrow.unlockEscrow(assetID, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
    await db.setUint(fundingHash, currentTime.minus(10));
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
