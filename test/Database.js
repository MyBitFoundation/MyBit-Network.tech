var BigNumber = require('bignumber.js');

const Database = artifacts.require('./database/Database.sol');
const Events = artifacts.require('./database/Events.sol');
const ContractManager = artifacts.require('./database/ContractManager.sol');

contract('Database', async (accounts) => {
  const manager1 = accounts[0];
  const manager2 = accounts[1];

  const addressHash = web3.utils.sha3('Address');
  const uintHash = web3.utils.sha3('Uint');
  const stringHash = web3.utils.sha3('String');
  const bytesHash = web3.utils.sha3('Bytes');
  const bytes32Hash = web3.utils.sha3('Bytes32');
  const boolHash = web3.utils.sha3('Bool');
  const intHash = web3.utils.sha3('Int');

  let database;
  let events;
  let contractManager;

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

});
