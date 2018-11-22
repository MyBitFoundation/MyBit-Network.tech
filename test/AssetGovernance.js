const bn = require('bignumber.js');
const abi = require("web3-eth-abi");

const AssetGovernance = artifacts.require("./ownership/AssetGovernance.sol");
const AssetManagerEscrow = artifacts.require("./roles/AssetManagerEscrow.sol");
const AssetManagerFunds = artifacts.require("./roles/AssetManagerFunds.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const Operators = artifacts.require("./roles/Operators.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");
const API = artifacts.require("./database/API.sol");
const GovernedToken = artifacts.require("./tokens/ERC20/GovernedToken.sol");
const Proposals = artifacts.require('./ownership/Proposals.sol');
const PlatformToken = artifacts.require("./tokens/ERC20/MyBitToken.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const RawCall = artifacts.require("./ownership/RawCall.sol");
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
const newAssetManager = web3.eth.accounts[6];
const tokenHolders = [user1, user2, user3];
//Time vote constants
const voteDurationDays = 15;
const voteDuration = voteDurationDays * 24 * 60 * 60; // In seconds
const quorum = 20; // 20%
const threshold = 51; // 51%

const ETH = 1000000000000000000;
let tokenPerAccount;

// This test will check that the voting mechanisms are working properly and will test the functionality of changing assetManagers
contract('AssetGovernance', async() => {
  let db;
  let events;
  let cm;
  let operators;
  let platform;
  let escrow;
  let api;
  let hash;
  let govToken;
  let platformToken;
  let governance;
  let proposals;
  let rawCall;

  let methodID;
  let parameterHash;
  let proposalID;
  let assetManagerEscrowID;
  let operatorID;
  let assetID;
  let assetURI = 'https://alocationforassetdetails';
  let totalSupply;

  it('Deploy HashFunctions', async() => {
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

  it('Deploy asset governance contract', async() => {
    governance = await AssetGovernance.new(db.address, events.address);
    await cm.addContract("AssetGovernance", governance.address);
  });

  it("Deploy standard token", async() => {
    platformToken = await PlatformToken.new('MyB', 180000000*ETH);
  });

  it("Transfer token to assetManagers", async() => {
    await platformToken.transfer(assetManager, 100*ETH);
    assetManagerBalance = await platformToken.balanceOf(assetManager);
    assert.equal(assetManagerBalance, 100*ETH);
    await platformToken.transfer(newAssetManager, 100*ETH);
    newAssetManagerBalance = await platformToken.balanceOf(newAssetManager);
    assert.equal(newAssetManagerBalance, 100*ETH);
  });

  it('Deploy api', async() => {
    api = await API.new(db.address);
    await cm.addContract('API', api.address);
  });

  it('Deploy platform', async() => {
    platform = await Platform.new(db.address, events.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformWallet(owner);
    await platform.setPlatformToken(platformToken.address);
  });

  it('Deploy raw call', async() => {
    rawCall = await RawCall.new();
  });

  it('Deploy assetManager escrow', async() => {
    escrow = await AssetManagerEscrow.new(db.address, events.address, governance.address);
    await cm.addContract('AssetManagerEscrow', escrow.address);
  });

  it('Deploy assetManager assets', async() => {
    assetManagerFunds = await AssetManagerFunds.new(db.address, events.address);
    await cm.addContract('AssetManagerFunds', assetManagerFunds.address);
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
    let balanceBefore = await platformToken.balanceOf(assetManager);
    await platformToken.approve(escrow.address, 2*ETH, {from:assetManager});
    let block = await web3.eth.getBlock('latest');
    await escrow.lockEscrow(assetID, 2*ETH, {from:assetManager});
    let e = events.LogEscrow({message: 'Escrow locked', origin: assetManager}, {fromBlock: block.number, toBlock: 'latest'});
    let logs = await Promisify(callback => e.get(callback));
    assetManagerEscrowID = logs[0].args.escrowID;
    let balanceAfter = await platformToken.balanceOf(assetManager);
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

  // Each token holder has 25% of total supply  (assetmanager has 25%)
  it("Spread tokens to users", async() => {
    let userBalance;
    let totalSupply = 999999999999999999999999999999999999;
    let supplyCheck;
    tokenPerAccount = totalSupply / tokenHolders.length;   // TODO: getting error with bignumber.js here
    for (var i = 0; i < tokenHolders.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await govToken.mint(tokenHolders[i], tokenPerAccount);
      supplyCheck += tokenPerAccount;
      userBalance = await govToken.balanceOf(tokenHolders[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    assert.equal(await govToken.balanceOf(owner), 0);
    console.log("each user has a potential vote percentage of ", (tokenPerAccount * 100) / await govToken.totalSupply());
    // assert.equal(supplyCheck, await govToken.totalSupply());
  });

  it("Transfer token to assetManager assets", async() => {
    await govToken.mint(assetManagerFunds.address, tokenPerAccount);
    assetManagerBalance = await govToken.balanceOf(assetManagerFunds.address);
    assert.equal(assetManagerBalance, tokenPerAccount);
  });

  it("Initiate a vote", async() => {
    let methodString = "becomeAssetManager(bytes32,address,address,uint256,bool)";
    methodID = await api.getMethodID(methodString);
    parameterHash = await api.getAssetManagerParameterHash(assetID, assetManager, newAssetManager, 10*ETH, true);
    await governance.propose(escrow.address, assetID, methodID, parameterHash);
    proposalID = await api.getProposalID(escrow.address, assetID, methodID, parameterHash);
  });

  it("Vote for AssetManager to be fired", async() => {
    await governance.voteForExecution(proposalID, tokenPerAccount, {from: user1});
    let consensusProgress = await api.getCurrentConsensus(proposalID, govToken.address);
    console.log("First vote received, consensus is : " , Number(consensusProgress));
    console.log("First user voted with : ", tokenPerAccount);
    console.log("Votes for execution from user1 is : ", Number(await api.getInvestorVotes(proposalID, user1)));
    console.log("Total votes for execution are: ", Number(await api.getTotalVotes(proposalID)));
    console.log("Total token supply is: ", Number(await govToken.totalSupply()));
    assert.equal(consensusProgress, 25);
  });

  it("Try to transfer tokens", async() => {
    let err;
    //Fail because tokens are locked in vote for firing assetManager
    assert.equal(0, await api.getNumTokensAvailable(proposalID, user1));
    assert.equal(await govToken.balanceOf(user1), tokenPerAccount);
    try{
      await govToken.transfer(user2, tokenPerAccount, {from: user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail voting again from same user", async() => {
    let err;
    //Fail because user already locked all tokens in past vote
    try{
      await governance.voteForExecution(proposalID, tokenPerAccount, {from: user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });


  it("Fail executing new assetManager", async() => {
    let err;
    let consensusProgress = await api.getCurrentConsensus(proposalID, govToken.address);
    console.log("fail executing new asset manager, consensus is : " , Number(consensusProgress));
    assert.equal(bn(consensusProgress).lt(66), true);
    // assert.equal(await govToken.allowance(newAssetManager, escrow.address), 10*ETH);
    //Fail because consensus is not yet reached
    try{
      await escrow.becomeAssetManager(assetID, assetManager, 10*ETH, true, {from:newAssetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Vote for AssetManager with 2nd token holder ", async() => {
    await governance.voteForExecution(proposalID, tokenPerAccount, {from: user2});
    let consensusProgress = await api.getCurrentConsensus(proposalID, govToken.address);
    console.log("Second vote received, consensus is : " , Number(consensusProgress));
    console.log("Second user voted with : ", tokenPerAccount);
    console.log("Votes for execution from user2 is : ", Number(await api.getInvestorVotes(proposalID, user2)));
    console.log("Total votes for execution are: ", Number(await api.getTotalVotes(proposalID)));
    console.log("Total token supply is: ", Number(await govToken.totalSupply()));
    assert.equal(consensusProgress, 50);
  });

  it("Fail to vote, bad proposalID", async() => {
    let err;
    try{
      await governance.voteForExecution('', tokenPerAccount, {from: user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Vote for AssetManager with 3rd token holder ", async() => {
    await governance.voteForExecution(proposalID, tokenPerAccount, {from: user3});
    let consensusProgress = await api.getCurrentConsensus(proposalID, govToken.address);
    console.log("Third vote received, consensus is : " , Number(consensusProgress));
    console.log("Third user voted with : ", tokenPerAccount);
    console.log("Votes for execution from user3 is : ", Number(await api.getInvestorVotes(proposalID, user3)));
    console.log("Total votes for execution are: ", Number(await api.getTotalVotes(proposalID)));
    console.log("Total token supply is: ", Number(await govToken.totalSupply()));
    assert.equal(bn(consensusProgress).gt(66), true);
  });

  it("Fail to unlock, insufficient tokens", async() => {
    let err;
    let userBalance = await govToken.balanceOf(user3);
    let tokenAmount = 2*userBalance;
    try{
      await governance.unlockToken(escrow.address, assetID, methodID, parameterHash, tokenAmount, {from: user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });


  it("Unlock tokens for 3rd token holder", async() => {
    await governance.unlockToken(proposalID, tokenPerAccount, {from: user3});
    let consensusProgress = await api.getCurrentConsensus(proposalID, govToken.address);
    console.log("Third vote revoked, consensus is : " , Number(consensusProgress));
  });

  it("Fail executing new assetManager", async() => {
    let err;
    let consensusProgress = await api.getCurrentConsensus(proposalID, govToken.address);
    console.log("fail executing new asset manager, consensus is : " , Number(consensusProgress));
    assert.equal(bn(consensusProgress).lt(66), true);
    // assert.equal(await govToken.allowance(newAssetManager, escrow.address), 10*ETH);
    //Fail because consensus is not yet reached
    try{
      await escrow.becomeAssetManager(assetID, assetManager, 10*ETH, true, {from:newAssetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Revote for AssetManager with 3rd token holder ", async() => {
    await governance.voteForExecution(proposalID, tokenPerAccount, {from: user3});
    let consensusProgress = await api.getCurrentConsensus(proposalID, govToken.address);
    console.log("Third vote received, consensus is : " , Number(consensusProgress));
    console.log("Third user voted with : ", tokenPerAccount);
    console.log("Votes for execution from user3 is : ", Number(await api.getInvestorVotes(proposalID, user3)));
    console.log("Total votes for execution are: ", Number(await api.getTotalVotes(proposalID)));
    console.log("Total token supply is: ", Number(await govToken.totalSupply()));
    assert.equal(bn(consensusProgress).gt(66), true);
  });

/*
  it("Change AssetManager", async() => {
    await platformToken.approve(escrow.address, 10*ETH, {from: newAssetManager});
    let consensus = await governance.isConsensusReached(proposalID);
    console.log("consensus is reached?  ", consensus);
    // let e = await governance.LogConsensus({}, {fromBlock: 0, toBlock: 'latest'});
    // let logs = await Promisify(callback => e.get(callback));
    // console.log('Consensus: ', consensus);
    // console.log(logs[0].args);
    await escrow.becomeAssetManager(assetID, assetManager, 10*ETH, true, {from:newAssetManager});
  });
*/
  it("Change AssetManager", async() => {
    let methodString = "becomeAssetManager(bytes32,address,address,uint256,bool)";
    methodID = await api.getMethodID(methodString);
    await platformToken.approve(escrow.address, 10*ETH, {from: newAssetManager});
    let consensus = await governance.isConsensusReached(proposalID);
    console.log("consensus is reached?  ", consensus);
    let num = Number(bn(ETH).multipliedBy(10)).toString();
    let params = await abi.encodeParameters(['bytes32', 'address', 'address', 'uint256', 'bool'], [assetID, assetManager, newAssetManager, num, true]);
    await rawCall.execute(escrow.address, methodID, params, proposalID, governance.address, {from: newAssetManager});
    assert.equal(newAssetManager, await api.getAssetManager(assetID));
  });

  it("Fail to destroy, not owner", async() => {
    let err;
    try{
      await governance.destroy({from: user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Deploy new voting contract", async() => {
    proposals = await Proposals.new(db.address);
    await cm.addContract("Proposals", proposals.address);
  });

  it("Start vote to change voting process", async() => {
    let methodString = "changeVotingProcess(address)";
    methodID = await api.getMethodID(methodString);
    parameterHash = await api.getVotingProcessParameterHash(proposals.address);
    platformAssetID = await api.getPlatformAssetID();
    await governance.propose(escrow.address, platformAssetID, methodID, parameterHash);
    proposalID = await api.getProposalID(escrow.address, platformAssetID, methodID, parameterHash);
  });

  it("Owner votes to change", async() => {
    let ownerBalance = await platformToken.balanceOf(owner);
    await governance.voteForExecution(proposalID, ownerBalance, {from: owner});
    let consensusProgress = await api.getCurrentConsensus(proposalID, platformToken.address);
    console.log("Owner vote received, consensus is : " , Number(consensusProgress));
    console.log("Owner voted with : ", ownerBalance);
    console.log("Votes for execution from owner is : ", Number(await api.getInvestorVotes(proposalID, owner)));
    console.log("Total votes for execution are: ", Number(await api.getTotalVotes(proposalID)));
    console.log("Total token supply is: ", Number(await platformToken.totalSupply()));
    assert.equal(bn(consensusProgress).gt(66), true);
  });

  it("Change voting process", async() => {
    await escrow.changeVotingProcess(proposals.address);
    assert.equal(await escrow.votingProcess(), proposals.address);
  });

  it("Destroy", async() => {
    await governance.destroy({from: owner});
  });

});
