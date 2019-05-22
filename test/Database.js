const web3utils = require('web3-utils');
const bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

const Database = artifacts.require('./database/Database.sol');
const Events = artifacts.require('./database/Events.sol');
const API = artifacts.require('./database/API.sol');
const ContractManager = artifacts.require('./database/ContractManager.sol');
const HashFunctions = artifacts.require('./test/HashFunctions.sol');

contract('Database', async (accounts) => {
  const manager1 = accounts[0];
  const manager2 = accounts[1];
  const addressHash = web3utils.sha3('Address');
  const uintHash = web3utils.sha3('Uint');
  const stringHash = web3utils.sha3('String');
  const bytesHash = web3utils.sha3('Bytes');
  const bytes32Hash = web3utils.sha3('Bytes32');
  const boolHash = web3utils.sha3('Bool');
  const intHash = web3utils.sha3('Int');
  const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
  const NULL_BYTES32 = '0x0000000000000000000000000000000000000000000000000000000000000000';
  const REF_ADDRESS = '0x1111111111111111111111111111111111111111';
  const REF_BYTES32 = '0x1111111111111111111111111111111111111111111111111111111111111111';
  const TEST_ADDRESS = '0x2222222222222222222222222222222222222222';

  let database;
  let events;
  let api;
  let contractManager;
  let hash;

  it('Deploy hash functions', async() => {
    hash = await HashFunctions.new();
  });

  it('Deploy non-upgradeable database', async() => {
    database = await Database.new([manager1], false);
  });

  it('Deploy Events', async() => {
    events = await Events.new(database.address);
  });

  it('Deploy contract manager', async() => {
    contractManager = await ContractManager.new(database.address, events.address);
    await database.enableContractManagement(contractManager.address);
  });

  it('Add contract', async() => {
    await contractManager.addContract("Owner", manager1);
  })

  it('Fail to update contract', async() => {
    let err;
    try{
      await contractManager.addContract("Owner", manager2);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to remove contract', async() => {
    let err;
    try{
      await contractManager.removeContract("Owner");
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Deploy Database', async() => {
    database = await Database.new([manager1], true);
  });

  it('Deploy Events', async() => {
    events = await Events.new(database.address);
    console.log("Events address: ", events.address);
  });

  it('Deploy API', async() => {
    api = await API.new(database.address);
    assert.equal(await api.contractOwner(manager1), true);
  });

  it('Deploy contract manage contract', async() => {
    contractManager = await ContractManager.new(database.address, events.address);
  });

  it('Fail to set contract manager', async() => {
    let err;
    try{
      await database.enableContractManagement(0);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to set contract manager', async() => {
    let err;
    try{
      await database.enableContractManagement(contractManager.address, {from: manager2});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set contract manager', async() => {
    await database.enableContractManagement(contractManager.address);
  });

  it('Fail to set contract manager', async() => {
    let err;
    try{
      await database.enableContractManagement(contractManager.address);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to add manager', async() => {
    let err;
    try{
      await contractManager.addContract('User', manager1, {from: manager2});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to add manager', async() => {
    let err;
    try{
      await contractManager.addContract('', manager1);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Add user to manager', async() => {
    let block = await web3.eth.getBlock('latest');
    await contractManager.addContract('User', manager1);
    let logs = await events.getPastEvents('LogContractChange', {fromBlock: block.number});
    //assert.equal(await contractManager.contractExists(manager1), true);
  });

  it('Fail to add manager', async() => {
    let err;
    try{
      await contractManager.addContract('User', manager1);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to add manager', async() => {
    let err;
    try{
      await contractManager.addContract('User', manager2);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to update manager', async() => {
    let err;
    try{
      await contractManager.updateContract('User', 0);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to update manager', async() => {
    let err;
    try{
      await contractManager.updateContract('', manager2);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Update manager', async() => {
    await contractManager.updateContract('User', manager2);
    //assert.equal(await contractManager.contractExists(manager2), true);
    //assert.equal(await contractManager.contractExists(manager1), false);
  });

  it('Remove contract', async() => {
    await contractManager.removeContract('User');
    //assert.equal(await contractManager.contractExists(manager2), false);
  });

  it('Fail to remove contract', async() => {
    let err;
    try{
      await contractManager.removeContract('User');
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Re-add user to manager', async() => {
    await contractManager.addContract('User', manager1);
    //assert.equal(await contractManager.contractExists(manager1), true);
  });

  it('Fail to set address', async() => {
    let err;
    try{
      await database.setAddress(addressHash, manager1, {from: manager2});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set address', async() => {
    await database.setAddress(addressHash, manager1);
    assert.equal(await database.addressStorage(addressHash), manager1);
  });

  it('Set uint', async() => {
    await database.setUint(uintHash, 1);
    assert.equal(await database.uintStorage(uintHash), 1);
  });

  it('Set string', async() => {
    await database.setString(stringHash, 'string');
    assert.equal(await database.stringStorage(stringHash), 'string');
  });

  it('Set bytes', async() => {
    await database.setBytes(bytesHash, '0x6279746573');
    assert.equal(await database.bytesStorage(bytesHash), '0x6279746573');
  });

  it('Set bytes32', async() => {
    await database.setBytes32(bytes32Hash, '0x0000000000000000000000000000000000000000000000000000000000000000');
    assert.equal(await database.bytes32Storage(bytesHash), '0x0000000000000000000000000000000000000000000000000000000000000000');
  });

  it('Set bool', async() => {
    await database.setBool(boolHash, true);
    assert.equal(await database.boolStorage(boolHash), true);
  });

  it('Set int', async() => {
    await database.setInt(intHash, 1);
    assert.equal(await database.intStorage(intHash), 1);
  });

  it('Delete address', async() => {
    await database.deleteAddress(addressHash);
  });

  it('Delete Uint', async() => {
    await database.deleteUint(uintHash);
  });

  it('Delete string', async() => {
    await database.deleteString(stringHash);
  });

  it('Delete bytes', async() => {
    await database.deleteBytes(bytesHash);
  });

  it('Delete bytes32', async() => {
    await database.deleteBytes32(bytes32Hash);
  });

  it('Delete bool', async() => {
    await database.deleteBool(boolHash);
  });

  it('Delete int', async() => {
    await database.deleteInt(intHash);
  });

  //Test events
  it('Message event', async() => {
    await events.message('Test');
  });

  it('Transaction event', async() => {
    await events.transaction('Test', NULL_ADDRESS, NULL_ADDRESS, 0, NULL_ADDRESS);
  });

  it('Registration event', async() => {
    await events.registration('Test', NULL_ADDRESS);
  });

  it('Contract change event', async() => {
    await events.contractChange('Test', NULL_ADDRESS, 'Contract');
  });

  it('Asset event', async() => {
    await events.asset('Test', 'URI', NULL_ADDRESS, NULL_ADDRESS);
  });

  it('Escrow event', async() => {
    await events.escrow('Test', NULL_ADDRESS, NULL_BYTES32, NULL_ADDRESS, 0);
  });

  it('Order event', async() => {
    await events.order('Test', NULL_BYTES32, 0, 0);
  });

  it('Exchange event', async() => {
    await events.exchange('Test', NULL_BYTES32, NULL_ADDRESS, NULL_ADDRESS)
  });

  it('Operator event', async() => {
    await events.operator('Test', NULL_BYTES32, 'URI', NULL_ADDRESS);
  });

  it('Consensus event', async() => {
    await events.consensus('Test', NULL_BYTES32, NULL_BYTES32, 0, 0, 0);
  });

  //Test API

  it('Asset governance', async() => {
    let hashAddress = await hash.stringAddress("asset.governance", REF_ADDRESS);
    await database.setAddress(hashAddress, TEST_ADDRESS, {from:manager1});
    let dbresult = await database.addressStorage(hashAddress);
    let testAddress = await api.assetGovernance(REF_ADDRESS);
    assert.equal(testAddress, TEST_ADDRESS);
  });

  it('Asset vote duration', async() => {
    let hashAddress = await hash.stringAddress("asset.voteDuration", REF_ADDRESS);
    await database.setUint(hashAddress, 1);
    let testUint = await api.assetVoteDuration(REF_ADDRESS);
    assert.equal(bn(testUint).eq(1), true);
  });

  it('Asset quorum', async() => {
    let hashAddress = await hash.stringAddress("asset.quorum", REF_ADDRESS);
    await database.setUint(hashAddress, 1);
    let testUint = await api.assetQuorum(REF_ADDRESS);
    assert.equal(bn(testUint).eq(1), true);
  });

  it('Asset threshold', async() => {
    let hashAddress = await hash.stringAddress("asset.threshold", REF_ADDRESS);
    await database.setUint(hashAddress, 1);
    let testUint = await api.assetThreshold(REF_ADDRESS);
    assert.equal(bn(testUint).eq(1), true);
  });

  it('Asset stake requirement', async() => {
    let hashAddress = await hash.stringAddress("asset.stakeRequirement", REF_ADDRESS);
    await database.setUint(hashAddress, 1);
    let testUint = await api.assetStakeRequirement(REF_ADDRESS);
    assert.equal(bn(testUint).eq(1), true);
  });

  it('Commitment value', async() => {
    let hashAddress = await hash.stringAddressAddress("commitment.value", REF_ADDRESS, REF_ADDRESS);
    await database.setUint(hashAddress, 1);
    let testUint = await api.commitmentValue(REF_ADDRESS, REF_ADDRESS);
    assert.equal(bn(testUint).eq(1), true);
  });

  it('Commitment start', async() => {
    let hashAddress = await hash.stringAddressAddress("commitment.start", REF_ADDRESS, REF_ADDRESS);
    await database.setUint(hashAddress, 1);
    let testUint = await api.commitmentStart(REF_ADDRESS, REF_ADDRESS);
    assert.equal(bn(testUint).eq(1), true);
  });

  it('Commitment release time', async() => {
    let hashAddress = await hash.stringAddressAddress("commitment.releasetime", REF_ADDRESS, REF_ADDRESS);
    await database.setUint(hashAddress, 1);
    let testUint = await api.commitmentReleaseTime(REF_ADDRESS, REF_ADDRESS);
    assert.equal(bn(testUint).eq(1), true);
  });

  it('Proposal initiator', async() => {
    let hashAddress = await hash.stringBytes("proposal.initiator", REF_BYTES32);
    await database.setAddress(hashAddress, TEST_ADDRESS);
    let testAddress = await api.proposalInitiator(REF_BYTES32);
    assert.equal(testAddress, TEST_ADDRESS);
  });

  it('Proposal token', async() => {
    let hashAddress = await hash.stringBytes("proposal.token", REF_BYTES32);
    await database.setAddress(hashAddress, TEST_ADDRESS);
    let testAddress = await api.proposalToken(REF_BYTES32);
    assert.equal(testAddress, TEST_ADDRESS);
  });

  it('Proposal start', async() => {
    let hashBytes32 = await hash.stringBytes("proposal.start", REF_BYTES32)
    await database.setUint(hashBytes32, 1);
    let testUint =await api.proposalStart(REF_BYTES32);
    assert.equal(bn(testUint).eq(1), true);
  });

  it('Proposal vote count', async() => {
    let hashBytes32 = await hash.stringBytes("proposal.votecount", REF_BYTES32)
    await database.setUint(hashBytes32, 1);
    let testUint =await api.proposalVoteCount(REF_BYTES32);
    assert.equal(bn(testUint).eq(1), true);
  });

  it('Proposal voted', async() => {
    let hashBytes32Address = await hash.stringBytesAddress("proposal.voted", REF_BYTES32, REF_ADDRESS);
    await database.setUint(hashBytes32Address, 1);
    let testUint = await api.proposalVoted(REF_BYTES32, REF_ADDRESS);
    assert.equal(bn(testUint).eq(1), true);
  });

  it('Proposal dissent', async() => {
    let hashBytes32 = await hash.stringBytes("proposal.dissent", REF_BYTES32)
    await database.setUint(hashBytes32, 1);
    let testUint =await api.proposalDissent(REF_BYTES32);
    assert.equal(bn(testUint).eq(1), true);
  });

  it('Proposal approval', async() => {
    let hashBytes32 = await hash.stringBytes("proposal.approval", REF_BYTES32)
    await database.setUint(hashBytes32, 1);
    let testUint =await api.proposalApproval(REF_BYTES32);
    assert.equal(bn(testUint).eq(1), true);
  });

  it('Proposal quorum', async() => {
    let hashBytes32 = await hash.stringBytes("proposal.quorum", REF_BYTES32)
    await database.setUint(hashBytes32, 1);
    let testUint =await api.proposalQuorum(REF_BYTES32);
    assert.equal(bn(testUint).eq(100), true);
  });
  /*
  it('Proposal threshold', async() => {
    let hashBytes32 = await hash.stringBytes("proposal.threshold", REF_BYTES32)
    await database.setUint(hashBytes32, 1);
    let testUint =await api.proposalThreshold(REF_BYTES32);
    assert.equal(bn(testUint).eq(1), true);
  });
  */
  /*
  it('Proposal has consensus', async() => {
    let testBool =await api.hasConsensus(REF_BYTES32);
    assert.equal(testBool, false);
  });
  */

});
