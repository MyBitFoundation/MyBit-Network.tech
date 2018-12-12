var bn = require('bignumber.js');

const Token = artifacts.require('MyBitToken');
const Proposals = artifacts.require('Proposals');
const Commitment = artifacts.require('Commitment');
const Database = artifacts.require('Database');
const Events = artifacts.require('Events');
const ContractManager = artifacts.require('ContractManager');
const GovernanceControls = artifacts.require('GovernanceControls');
const API = artifacts.require('API');
const PlatformFunds = artifacts.require('PlatformFunds');
const ConsensusTest = artifacts.require('ConsensusTest');




async function rejects (promise) {
  try {
    await promise;
    console.log("Promise succeeds");
    assert.fail('Incorrect success');
  } catch (e) {
    console.log("Promise fails");
  }
}

function increaseTime (seconds) {
  web3.currentProvider.send({
    jsonrpc: "2.0",
    method: "evm_increaseTime",
    params: [seconds], id: 0
  });
}

contract('Proposals', async (accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const user3 = accounts[3];

  // const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
  const tokenSupply = bn(180000000000000000000000000);
  const voteDurationDays = bn(15);
  const voteDuration = bn(voteDurationDays).times(24).times(60).times(60); // In seconds
  const unlockDays = voteDurationDays.plus(1);
  const quorum = bn(20); // 20%
  const threshold = bn(51); // 51%

  let methodID;
  let parameterHash;
  let proposalID;
  let nonce;

  let users = [user1, user2, user3];

  let tokensPerUser = tokenSupply.dividedBy(users.length);

  // Contract instances
  let token, proposals, commitment, gc, ctest, db, cm, events, api, platformFunds;


  it('Deploy database contract', async() => {
    db = await Database.new([owner], true);
    console.log("database address is ", db.address); 
  });

  it('Deploy API', async() => {
    api = await API.new(db.address);
  });

  it('Deploy Events', async() => {
    events = await Events.new(db.address);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address, events.address);
    await db.enableContractManagement(cm.address);
  });

  it('Deploy proposal contract', async() => {
    proposals = await Proposals.new(db.address, events.address);
    await cm.addContract("Proposals", proposals.address);
  });

  it('Deploy commitment contract', async() => {
    commitment = await Commitment.new(db.address, events.address);
    await cm.addContract("Commitment", commitment.address);
  });

  it("Deploy standard token", async() => {
    token = await Token.new('MYB', tokenSupply);
    assert.equal(tokenSupply.eq(await token.balanceOf(owner)), true);
  });

  it('Deploy governance controls', async() => {
    gc = await GovernanceControls.new(db.address, events.address);
    await cm.addContract("GovernanceControls", gc.address);
  });

  it('Deploy consensus test', async() => {
    ctest = await ConsensusTest.new(api.address);
  });


  it('Deploy platform', async() => {
    platform = await PlatformFunds.new(db.address, events.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformWallet(owner);
    await platform.setPlatformToken(token.address);
  });

  it('Spread token to users', async() => {
    for (let i = 0; i < users.length; i++){
      await token.transfer(users[i], tokensPerUser);
      assert.equal(tokensPerUser.eq(await token.balanceOf(users[i])));
    }
  });

  it('Try to commit user 1 before token is set as governed', async() => {
    await token.approve(commitment.address, tokensPerUser, {from: user1});
    await rejects(commitment.commit(tokensPerUser, token.address, {from: user1}));
  });

  it('Set token as governed on platform', async() => {
    await gc.startGovernance(token.address, proposals.address, voteDuration, quorum, threshold);
    assert.equal(await api.assetGovernance(token.address), proposals.address);
    console.log("token vote duration is: ", await api.assetVoteDuration(token.address));
    assert.equal(voteDuration.eq(await api.assetVoteDuration(token.address)), true);
    assert.equal(quorum.eq(await api.assetQuorum(token.address)), true);
    assert.equal(threshold.eq(await api.threshold(token.address)), true);
  });

  it("Try to commit with 0 tokens", async() => {
    await token.approve(commitment.address, tokensPerUser, {from: user1});
    await rejects(commitment.commit(0, token.address, {from: user1}));
  });

  it("Try to commit without approving transferFrom", async() => {
    await token.approve(commitment.address, 0, {from: user1});
    await rejects(commitment.commit(tokensPerUser, token.address, {from: user1}));
  });

  it('Commit users n-1', async() => {
    for (let i = 0; i < users.length-1; i++){
      await token.approve(commitment.address, tokensPerUser, {from: users[i]});
      await commitment.commit(tokensPerUser, token.address, {from: users[i]});
    }
  });

  it('Try to commit user 1 again', async() => {
    await token.approve(commitment.address, tokensPerUser, {from: user1});
    await rejects(commitment.commit(tokensPerUser, token.address, {from: user1}));
  });

  it('Try to create proposal from non-commited user', async() => {
    methodID = await api.getMethodID("checkConsensus(address, address, uint256)");
    parameterHash = await ctest.consensusTestParameterHash(user1, token.address, 69);
    await rejects(proposals.propose(token.address, ctest.address, methodID, parameterHash, {from: users[user.length-1]}));
  });

  it('Create proposal from user1', async() => {
    methodID = await api.getMethodID("checkConsensus(address, address, uint256)");
    parameterHash = await ctest.consensusTestParameterHash(user1, token.address, 69);
    await proposals.propose(token.address, ctest.address, methodID, parameterHash, {from: user1});
    proposalID = await api.getProposalID(ctest.address, token.address, methodID, parameterHash);
    assert.equal(await api.proposalInitiator(proposalID), user1);
    assert.equal(await api.proposalToken(proposalID), token.address);
    assert.notEqual(await api.proposalStart(proposalID), 0);
  });

  it('fast forward 1 vote duration', async() => {
    increaseTime(voteDuration);
  });

  it('should have failed consensus', async() => {
    assert.equal(await api.hasConsensus(proposalID), false);
    await rejects(ctest.checkConsensus(user1, token.address, 69));
  });

  it('Create proposal from user2', async() => {
    methodID = await api.getMethodID("checkConsensus(address, address, uint256)");
    parameterHash = await ctest.consensusTestParameterHash(user2, token.address, 69);
    await proposals.propose(token.address, ctest.address, methodID, parameterHash, {from: user2});
    proposalID = await api.getProposalID(ctest.address, token.address, methodID, parameterHash);
    assert.equal(await api.proposalInitiator(proposalID), user2);
    assert.equal(await api.proposalToken(proposalID), token.address);
    assert.notEqual(await api.proposalStart(proposalID), 0);
  });

  it('Approve user2 proposal from user1', async() => {
    let commitValue = await api.commitmentValue(token, user1);
    await proposal.approve(proposalID, {from: user1});
    let approvalAmount = await api.proposalApproval(proposalID);
    assert.equal(approvalAmount.eq(commitValue), true);
    console.log("proposal quorum is at: ", Number(await api.proposalQuorum(proposalID)));
    console.log("proposal threshold is at: ", Number(await api.proposalThreshold(proposalID)));
  });

  it('Approve user2 proposal from user2', async() => {
    let commitValue = await api.commitmentValue(token, user2);
    let approvalAmount = await api.proposalApproval(proposalID);
    await proposal.approve(proposalID, {from: user2});
    approvalAmount = approvalAmount.plus(commitValue);
    assert.equal(approvalAmount.eq(await api.proposalApproval(proposalID)), true);
    console.log("proposal quorum is at: ", Number(await api.proposalQuorum(proposalID)));
    console.log("proposal threshold is at: ", Number(await api.proposalThreshold(proposalID)));
  });

  });
