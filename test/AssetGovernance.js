var bn = require('bignumber.js');


const AssetGovernance = artifacts.require("./ecosystem/AssetGovernance.sol");
const AssetManagerEscrow = artifacts.require("./ecosystem/AssetManagerEscrow.sol");
const AssetManagerFunds = artifacts.require("./ecosystem/AssetManagerFunds.sol");
const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const Operators = artifacts.require("./ecosystem/Operators.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");
const API = artifacts.require("./database/API.sol");
const GovernedToken = artifacts.require("./tokens/ERC20/GovernedToken.sol");
const PlatformToken = artifacts.require("./tokens/ERC20/BurnableToken.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");

const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const assetManager = web3.eth.accounts[4];
const operator = web3.eth.accounts[5];
const newAssetManager = web3.eth.accounts[6];
const tokenHolders = [user1, user2, user3];

const ETH = 1000000000000000000;
let tokenPerAccount;

// This test will check that the voting mechanisms are working properly and will test the functionality of changing assetManagers
contract('AssetGovernance', async() => {
  let db;
  let cm;
  let operators;
  let platform;
  let escrow;
  let api;
  let hash;
  let govToken;
  let burnToken;
  let governance;

  let methodID;
  let parameterHash;
  let executionID;
  let assetManagerEscrowID;
  let operatorID;
  let assetID;
  let assetURI = 'https://alocationforassetdetails';

  it('Deploy HashFunctions', async() => {
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

  it('Deploy asset governance contract', async() => {
    governance = await AssetGovernance.new(db.address);
    await cm.addContract("AssetGovernance", governance.address);
  });

  it("Deploy standard token", async() => {
    burnToken = await PlatformToken.new('MyB', 180000000*ETH);
  });

  it("Transfer token to assetManager", async() => {
    await burnToken.transfer(assetManager, 100*ETH);
    assetManagerBalance = await burnToken.balanceOf(assetManager);
    assert.equal(assetManagerBalance, 100*ETH);
  });

  it('Deploy api', async() => {
    api = await API.new(db.address);
    await cm.addContract('API', api.address);
  });

  it('Deploy platform', async() => {
    platform = await Platform.new(db.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformWallet(owner);
    await platform.setPlatformToken(burnToken.address);
  });

  it('Deploy assetManager escrow', async() => {
    escrow = await AssetManagerEscrow.new(db.address);
    await cm.addContract('AssetManagerEscrow', escrow.address);
  });

  it('Deploy assetManager assets', async() => {
    assetManagerFunds = await AssetManagerFunds.new(db.address);
    await cm.addContract('AssetManagerFunds', assetManagerFunds.address);
  });

  it('Set operator', async() => {
    operators = await Operators.new(db.address);
    await cm.addContract('Operators', operators.address);
    let tx = await operators.registerOperator(operator, 'Operator');
    operatorID = tx.logs[0].args._operatorID;
  });

  it("Generate assetID", async() => {
    assetID = await hash.getAssetID(assetURI, 8*ETH, operatorID, {from:assetManager});
  });

  it("Lock escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(assetManager);
    await burnToken.approve(escrow.address, 2*ETH, {from:assetManager});
    tx = await escrow.lockEscrow(assetID, 2*ETH, {from:assetManager});
    assetManagerEscrowID = tx.logs[0].args._assetManagerEscrowID;
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceBefore).minus(balanceAfter);
    assert.equal(diff, 2*ETH);
  });

  it("Finish funding", async() => {
    let finishHash = await hash.stringBytes('crowdsaleFinalized', assetID);
    await db.setBool(finishHash, true);
    let amountHash = await hash.stringBytes("amountToRaise", assetID);
    await db.setUint(amountHash, 8*ETH);

  });

  it("Deploy governed asset token", async() => {
    govToken = await GovernedToken.new(db.address, assetURI, owner);
    let tokenHash = await hash.stringBytes('tokenAddress', assetID);
    await db.setAddress(tokenHash, govToken.address);
  });

  it("Set asset variables", async() => {
    let tokenHash = await hash.stringBytes("tokenAddress", assetID);
    let tokenIDHash = await hash.stringAddress("assetTokenID", govToken.address);
    let assetManagerHash = await hash.stringBytes("assetManager", assetID);
    let operatorHash = await hash.stringBytes("operator", assetID);
    await db.setAddress(tokenHash, govToken.address);
    await db.setBytes32(tokenIDHash, assetID);
    await db.setAddress(assetManagerHash, assetManager);
    await db.setAddress(operatorHash, operator);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    let totalSupply = bn(8).times(ETH);
    tokenPerAccount = totalSupply / tokenHolders.length;   // TODO: getting error with bignumber.js here
    for (var i = 0; i < tokenHolders.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await govToken.mint(tokenHolders[i], tokenPerAccount);
      userBalance = await govToken.balanceOf(tokenHolders[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    assert.equal(await govToken.balanceOf(owner), 0);
  });

  it("Transfer token to assetManager assets", async() => {
    await govToken.mint(assetManagerFunds.address, tokenPerAccount);
    assetManagerBalance = await govToken.balanceOf(assetManagerFunds.address);
    assert.equal(assetManagerBalance, tokenPerAccount);
  });

  it("Vote for AssetManager to be fired", async() => {
    let methodString = "becomeAssetManager(bytes32, address, uint256, uint256)";
    methodID = await api.getMethodID(methodString);
    parameterHash = await api.getAssetManagerParameterHash(assetID, assetManager, newAssetManager, 10*ETH, true);
    executionID = await api.getExecutionID(escrow.address, assetID, methodID, parameterHash);
    await governance.voteForExecution(escrow.address, assetID, methodID, parameterHash, tokenPerAccount, {from: user1});
    await govToken.approve(escrow.address, 10*ETH, {from: newAssetManager});
  });

  it("Try to transfer tokens", async() => {
    let err;
    //Fail because tokens are locked in vote for firing assetManager
    assert.equal(0, await api.getNumTokensAvailable(assetID, user1));
    assert.equal(await govToken.balanceOf(user1), tokenPerAccount);
    try{
      await govToken.transfer(user2, tokenPerAccount, {from: user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  })

  it("Fail voting again from same user", async() => {
    let err;
    //Fail because user already locked all tokens in past vote
    try{
      await governance.voteForExecution(escrow.address, assetID, methodID, parameterHash, tokenPerAccount, {from: user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  })


  it("Fail executing new assetManager", async() => {
    let err;
    let consensusProgress = await api.getCurrentConsensus(executionID, govToken.address);
    assert.equal(bn(consensusProgress).lt(50), true);
    // assert.equal(await govToken.allowance(newAssetManager, escrow.address), 10*ETH);
    //Fail because consensus is not yet reached
    try{
      await escrow.becomeAssetManager(assetID, assetManager, 10*ETH, true, {from:newAssetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Vote for AssetManager to be fired with half of tokens", async() => {
    await govToken.approve(escrow.address, 10*ETH, {from: newAssetManager});
    let methodString = "becomeAssetManager(bytes32, address, uint256, uint256)";
    methodID = await api.getMethodID(methodString);
    parameterHash = await api.getAssetManagerParameterHash(assetID, assetManager, newAssetManager, 10*ETH, true);
    assert.equal(tokenPerAccount, ( (tokenPerAccount / 2) + (tokenPerAccount / 2) ));
    await governance.voteForExecution(escrow.address, assetID, methodID, parameterHash, tokenPerAccount / 2, {from: user2});
    await governance.voteForExecution(escrow.address, assetID, methodID, parameterHash, tokenPerAccount / 2, {from: user2});
  });

});
