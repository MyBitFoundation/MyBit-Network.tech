var BigNumber = require('bignumber.js');

const Database = artifacts.require('./database/Database.sol');
const Events = artifacts.require('./database/Events.sol');
const ContractManager = artifacts.require('./database/ContractManager.sol');
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

contract('Database', async (accounts) => {
  const manager1 = web3.eth.accounts[0];
  const manager2 = web3.eth.accounts[1];

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
    let e = events.LogContractChange({}, {fromBlock: block.number, toBlock: 'latest'});
    let logs = await Promisify(callback => e.get(callback));
    console.log(logs[0].args);
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
      await database.setAddress('Address', manager1, {from: manager2});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set address', async() => {
    await database.setAddress('Address', manager1);
    assert.equal(await database.addressStorage('Address'), manager1);
  });

  it('Set uint', async() => {
    await database.setUint('Uint', 1);
    assert.equal(await database.uintStorage('Uint'), 1);
  });

  it('Set string', async() => {
    await database.setString('String', 'string');
    assert.equal(await database.stringStorage('String'), 'string');
  });

  it('Set bytes', async() => {
    await database.setBytes('Bytes', 0x6279746573);
    assert.equal(await database.bytesStorage('Bytes'), 0x6279746573);
  });

  it('Set bytes32', async() => {
    await database.setBytes32('Bytes32', 0x0000000000000000000000000000000000000000000000000000000000000000);
    assert.equal(await database.bytes32Storage('Bytes'), 0x0000000000000000000000000000000000000000000000000000000000000000);
  });

  it('Set bool', async() => {
    await database.setBool('Bool', true);
    assert.equal(await database.boolStorage('Bool'), true);
  });

  it('Set int', async() => {
    await database.setInt('Int', 1);
    assert.equal(await database.intStorage('Int'), 1);
  });

  it('Delete address', async() => {
    await database.deleteAddress('Address');
  });

  it('Delete Uint', async() => {
    await database.deleteUint('Uint');
  });

  it('Delete string', async() => {
    await database.deleteString('String');
  });

  it('Delete bytes', async() => {
    await database.deleteBytes('Bytes');
  });

  it('Delete bytes32', async() => {
    await database.deleteBytes32('Bytes32');
  });

  it('Delete bool', async() => {
    await database.deleteBool('Bool');
  });

  it('Delete int', async() => {
    await database.deleteInt('Int');
  });

});
