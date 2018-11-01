var BigNumber = require('bignumber.js');

const Database = artifacts.require('./database/Database.sol');
const Events = artifacts.require('./database/Events.sol');
const ContractManager = artifacts.require('./database/ContractManager.sol');
const AccessHierarchy = artifacts.require('./access/AccessHierarchy.sol');

const ETH = 1000000000000000000;

contract('Access Hierarchy', async (accounts) => {
  const owner = web3.eth.accounts[0];
  const user = web3.eth.accounts[1];

  let database;
  let events;
  let contractManager;
  let accessHierarchy;

  it('Deploy Database', async() => {
    database = await Database.new([owner], true);
  });

  it('Deploy Events', async() => {
    events = await Events.new(database.address);
  });

  it('Deploy contract manage contract', async() => {
    contractManager = await ContractManager.new(database.address, events.address);
  });

  it('Set contract manager', async() => {
    await database.enableContractManagement(contractManager.address);
  });

  it('Add user to manager', async() => {
    await contractManager.addContract('User', owner);
    //assert.equal(await database.boolStorage(sha3("contract", owner)), true);
  });

  it('Deploy access', async() => {
    accessHierarchy = await AccessHierarchy.new(database.address, events.address);
    await contractManager.addContract('AccessHierarchy', accessHierarchy.address);
  });

  it('Fail to set access', async() => {
    let err;
    try{
      await accessHierarchy.setUpperAccessLevel(2, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to set access', async() => {
    let err;
    try{
      await accessHierarchy.setUpperAccessLevel(0);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set access', async() => {
    await accessHierarchy.setUpperAccessLevel(2);
  });

  it('Fail to add user', async() => {
    let err;
    try{
      await accessHierarchy.approveUser(0, 1);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to add user', async() => {
    let err;
    try{
      await accessHierarchy.approveUser(user, 0);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to add user', async() => {
    let err;
    try{
      await accessHierarchy.approveUser(user, 1, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Add user', async() => {
    await accessHierarchy.approveUser(user, 1);
  });

  it('Remove user', async() => {
    await accessHierarchy.removeUser(user);
  })


});
