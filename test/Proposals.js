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

  const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
  const tokenSupply = bn(180000000000000000000000000);
  const voteDurationDays = bn(15);
  const voteDuration = bn(voteDurationDays).times(24).times(60).times(60); // In seconds
  const unlockDays = voteDurationDays.plus(1);
  const quorum = bn(20); // 20%
  const threshold = bn(51); // 51%

  let users = [user1, user2, user3];

  let tokensPerUser = tokenSupply.dividedBy(users.length);

  // Contract instances
  let token, proposals, commitment, gc, db, cm, events, api, platformFunds;


  it('Deploy database contract', async() => {
    db = await Database.new([owner], true);
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



  it('Deploy platform', async() => {
    platform = await PlatformFunds.new(db.address, events.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformWallet(owner);
    await platform.setPlatformToken(token.address);
  });

  it('Spread token to users', async() => {
    for (let i = 0; i < user.length; i++){
      await token.transfer(user[i], tokensPerUser);
      assert.equal(tokensPerUser.eq(await token.balanceOf(user[i])));
    }
  });

  it('Try to commit user 1 before token is set as governed', async() => {
    await token.approve(commitment.address, tokensPerUser, {from: user1});
    await commitment.commit(tokensPerUser, token.address, {from: user1});
  });

  it('Set token as governed on platform', async() => {
    await gc.startGovernance(token.address, voteDuration, quorum, threshold, 1);
    assert.equal(await api.tokenGoverned(token.address), true);
    console.log("token vote duration is: ", await api.tokenVoteDuration(token.address));
    assert.equal(voteDuration.eq(await api.tokenVoteDuration(token.address)), true);
    assert.equal(quorum.eq(await api.tokenQuorum(token.address)), true);
    assert.equal(threshold.eq(await api.threshold(token.address)), true);
    assert.equal(await api.tokenStakeRequirement(token.address), 1);
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
    for (let i = 0; i < user.length-1; i++){
      await token.approve(commitment.address, tokensPerUser, {from: users[i]});
      await commitment.commit(tokensPerUser, token.address, {from: users[i]});
    }
  });

  it('Try to commit user 1 again', async() => {
    await token.approve(commitment.address, tokensPerUser, {from: user1});
    await commitment.commit(tokensPerUser, token.address, {from: user1});
  });



  });
