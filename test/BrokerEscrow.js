var bn = require('bignumber.js');

const BrokerEscrow = artifacts.require("./ecosystem/BrokerEscrow.sol");
const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const DivToken = artifacts.require("./tokens/ERC20/DividendToken.sol");
const BurnableToken = artifacts.require("./tokens/ERC20/BurnableToken.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Operators = artifacts.require("./ecosystem/Operators.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");
const API = artifacts.require("./database/API.sol");

const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const broker = web3.eth.accounts[4];
const operator = web3.eth.accounts[5];
const tokenHolders = [user1, user2, user3];

const ETH = 1000000000000000000;
let tokenPerAccount;

contract('Broker Escrow', async() => {
  let divToken;
  let burnToken
  let db;
  let cm;
  let api;
  let hash;
  let escrow;
  let platform;
  let operators;

  let brokerEscrowID;
  let operatorID;
  let assetID;
  let assetURI = 'NewAsset';

  it('Deploy hash contract', async() => {
    hash = await HashFunctions.new();
  });

  it('Deploy database contract', async() => {
    db = await Database.new([owner], true);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address);
    await db.enableContractManagement(cm.address);
    await cm.addContract('Owner', owner);
  });

  it('Deploy api', async() => {
    api = await API.new(db.address);
    await cm.addContract('API', api.address);
  });

  it("Deploy standard token", async() => {
    burnToken = await BurnableToken.new('MyB', 10000*ETH);
  });

  it("Transfer token to broker", async() => {
    await burnToken.transfer(broker, 100*ETH);
    brokerBalance = await burnToken.balanceOf(broker);
    assert.equal(brokerBalance, 100*ETH);
  });

  it('Deploy platform', async() => {
    platform = await Platform.new(db.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformWallet(owner);
    await platform.setPlatformToken(burnToken.address);
  });

  it('Deploy broker escrow', async() => {
    escrow = await BrokerEscrow.new(db.address);
    await cm.addContract('BrokerEscrow', escrow.address);
  });

  it('Set operator', async() => {
    operators = await Operators.new(db.address);
    await cm.addContract('Operators', operators.address);
    let tx = await operators.registerOperator(operator, 'Operator');
    operatorID = tx.logs[0].args._operatorID;
  });

  it("Generate assetID", async() => {
    assetID = await hash.getAssetID(assetURI, 8*ETH, operatorID, {from:broker});
  });

  it("Lock escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(broker);
    await burnToken.approve(escrow.address, 2*ETH, {from:broker});
    tx = await escrow.lockEscrow(assetID, 2*ETH, {from:broker});
    brokerEscrowID = tx.logs[0].args._brokerEscrowID;
    let balanceAfter = await burnToken.balanceOf(broker);
    let diff = bn(balanceBefore).minus(balanceAfter);
    assert.equal(diff, 2*ETH);
  });

  //Funding deadline is passed but didn't raise enough funds
  it("Unlock escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(broker);
    await escrow.unlockEscrow(assetID, {from:broker});
    let balanceAfter = await burnToken.balanceOf(broker);
    let diff = bn(balanceAfter).minus(balanceBefore);
    assert.equal(diff.isEqualTo(bn(ETH).multipliedBy(2)), true);
  });

  it("Lock escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(broker);
    let brokerID = await api.getBrokerEscrowID(assetID, broker);
    await burnToken.approve(escrow.address, 2*ETH, {from:broker});
    await escrow.lockEscrow(assetID, 2*ETH, {from:broker});
    let balanceAfter = await burnToken.balanceOf(broker);
    let diff = bn(balanceBefore).minus(balanceAfter);
    assert.equal(await api.getBrokerEscrow(brokerID), 2*ETH);
    assert.equal(diff, 2*ETH);
  });

  it("Fail to lock escrow", async() => {
    let err;
    //Fail because asset already exists
    try{
      await escrow.lockEscrow(assetID, 2*ETH, {from:broker});
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
      await escrow.unlockEscrow(assetID, {from:broker});
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
      await escrow.unlockEscrow(assetID, {from:broker});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
    await db.setUint(fundingHash, currentTime-10);
  });


  it("Unlock half escrow", async() => {
    let brokerID = await api.getBrokerEscrowID(assetID, broker);
    let balanceBefore = await burnToken.balanceOf(broker);
    await escrow.unlockEscrow(assetID, {from:broker});
    assert.equal(await api.getBrokerEscrowRemaining(brokerID), 1*ETH);
    let balanceAfter = await burnToken.balanceOf(broker);
    let diff = bn(balanceAfter).minus(balanceBefore);
    console.log(diff);
    assert.equal(diff.isEqualTo(bn(ETH).multipliedBy(2).dividedBy(2)), true);
  });

  it("Fail to unlock more escrow without further income", async() => {
    let err;
    try{
      await escrow.unlockEscrow(assetID, {from:broker});
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
      await escrow.unlockEscrow(assetID, {from:broker});
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
    let balanceBefore = await burnToken.balanceOf(broker);
    await escrow.unlockEscrow(assetID, {from:broker});
    let balanceAfter = await burnToken.balanceOf(broker);
    let diff = bn(balanceAfter).minus(balanceBefore);
    assert.equal(diff.isEqualTo(bn(ETH).multipliedBy(2).dividedBy(2)), true);
  });

  it("Fail to unlock escrow after 100% ROI", async() => {
    let err;
    try{
      await escrow.unlockEscrow(assetID, {from:broker});
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
      await escrow.unlockEscrow(assetID, {from:broker});
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
/*
  it("BUUUUUURRRRNNNNN", async() => {
    let escrowBefore = await api.getBrokerEscrowRemaining(brokerEscrowID);
    console.log(Number(escrowBefore));
    console.log(Number(bn(ETH).multipliedBy(2).minus(bn(ETH).multipliedBy(2).dividedBy(4))));
    assert.equal(bn(escrowBefore).isEqualTo(bn(ETH).multipliedBy(2).minus(bn(ETH).multipliedBy(2).dividedBy(4))), true);
    await escrow.burnEscrow(assetID);
    let escrowAfter = await db.uintStorage(escrowHash);
    assert.equal(escrowAfter, 0);
  });
*/
  it('Return ether to operator (So we do not have to restart ganache!)', async() => {
    let amount = 2*ETH/tokenHolders.length;
    for (var i = 0; i < tokenHolders.length; i++) {
      await web3.eth.sendTransaction({from:tokenHolders[i], to:operator, value:amount})
    }
  });

});
