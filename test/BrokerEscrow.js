var bn = require('bignumber.js');

const BrokerEscrow = artifacts.require("./ecosystem/BrokerEscrow.sol");
const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const DivToken = artifacts.require("./tokens/ERC20/DividendToken.sol");
const BurnableToken = artifacts.require("./tokens/ERC20/BurnableToken.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Operators = artifacts.require("./ecosystem/Operators.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");

const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const broker = web3.eth.accounts[4];
const operator = web3.eth.accounts[5];
const tokenHolders = [user1, user2, user3];

const ETH = 1000000000000000000;
const tokenPerAccount = 10*ETH;

contract('Broker Escrow', async() => {
  let divToken;
  let burnToken
  let db;
  let cm;
  let hash;
  let escrow;
  let assetID;
  let platform;
  let operators;
  let operatorID;
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
    assetID = await hash.getAssetID(assetURI, 100*ETH, operatorID, {from:broker});
  });

  it("Lock escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(broker);
    await burnToken.approve(escrow.address, 10*ETH, {from:broker});
    await escrow.lockEscrow(assetID, 10*ETH, {from:broker});
    let balanceAfter = await burnToken.balanceOf(broker);
    let diff = bn(balanceBefore).minus(balanceAfter);
    assert.equal(diff, 10*ETH);
  });

  //Funding deadline is passed but didn't raise enough funds
  it("Unlock escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(broker);
    await escrow.unlockEscrow(assetID, {from:broker});
    let balanceAfter = await burnToken.balanceOf(broker);
    let diff = bn(balanceAfter).minus(balanceBefore);
    assert.equal(diff.isEqualTo(bn(ETH).multipliedBy(10)), true);
  });

  it("Lock escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(broker);
    await burnToken.approve(escrow.address, 10*ETH, {from:broker});
    await escrow.lockEscrow(assetID, 10*ETH, {from:broker});
    let balanceAfter = await burnToken.balanceOf(broker);
    let diff = bn(balanceBefore).minus(balanceAfter);
    assert.equal(diff, 10*ETH);
  });

  it("Fail to lock escrow", async() => {
    let err;
    //Fail because asset already exists
    try{
      await escrow.lockEscrow(assetID, 10*ETH, {from:broker});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to increase escrow", async() => {
    let err;
    //Fail because asset already exists
    try{
      await burnToken.approve(escrow.address, 1*ETH, {from:owner});
      await escrow.increaseEscrow(assetID, 1*ETH, {from:owner});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Increase escrow", async() => {
    await burnToken.approve(escrow.address, 1*ETH, {from:broker});
    await escrow.increaseEscrow(assetID, 1*ETH, {from:broker});
  });

  it("Finish funding", async() => {
    let finishHash = await hash.stringBytes('crowdsaleFinalized', assetID);
    await db.setBool(finishHash, true);
    let amountHash = await hash.stringBytes("amountToRaise", assetID);
    await db.setUint(amountHash, 100*ETH);

  });

  it("Deploy asset token", async() => {
    divToken = await DivToken.new(assetURI, owner);
    let tokenHash = await hash.stringBytes('tokenAddress', assetID);
    await db.setAddress(tokenHash, divToken.address);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await divToken.mint(tokenHolders[i], tokenPerAccount);
      userBalance = await divToken.balanceOf(tokenHolders[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
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

  it("Pay quarter ROI", async() => {
    await divToken.issueDividends({from:operator, value:25*ETH});
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
  });

  it("Unlock escrow", async() => {
    web3.currentProvider.send({jsonrpc: "2.0", method: "evm_increaseTime", params: [20], id: 0});

    let balanceBefore = await burnToken.balanceOf(broker);
    await escrow.unlockEscrow(assetID, {from:broker});
    let balanceAfter = await burnToken.balanceOf(broker);
    let diff = bn(balanceAfter).minus(balanceBefore);
    assert.equal(diff.isEqualTo(bn(ETH).multipliedBy(11).dividedBy(4)), true);
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

  it("BUUUUUURRRRNNNNN", async() => {
    let escrowHash = await hash.stringBytes('brokerEscrow', assetID);
    let redeemedHash = await hash.stringBytes('escrowRedeemed', assetID);
    let escrowBefore = bn(await db.uintStorage(escrowHash)).minus(await db.uintStorage(redeemedHash));
    assert.equal(escrowBefore.isEqualTo(bn(ETH).multipliedBy(11).dividedBy(4).multipliedBy(3)), true);
    await escrow.burnEscrow(assetID);
    let escrowAfter = await db.uintStorage(escrowHash);
    assert.equal(escrowAfter, 0);
  });

  it('Return ether to operator (So we do not have to restart ganache!)', async() => {
    let amount = 25*ETH/tokenHolders.length;
    for (var i = 0; i < tokenHolders.length; i++) {
      await web3.eth.sendTransaction({from:tokenHolders[i], to:operator, value:amount})
    }
  });

});
