var bn = require('bignumber.js');

const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const MultiOwned = artifacts.require("./ownership/MultiOwned.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");

contract('MultiOwned', async(accounts) => {
  const owner = accounts[0];
  const newOwner = accounts[1];

  let db;
  let events;
  let cm;
  let mo;
  let hash;

  it('Deploy hash contract', async() => {
    hash = await HashFunctions.new();
  });

  it('Deploy Database', async() => {
    db = await Database.new([owner], true);
  });

  it('Deploy Events', async() => {
    events = await Events.new(db.address);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address, events.address);
    await db.enableContractManagement(cm.address);
  });

  it('Deploy MultiOwned', async() => {
    mo = await MultiOwned.new(db.address, events.address);
    await cm.addContract('MultiOwned', mo.address);
  });

  it('Fail change owner', async() => {
    let err;
    try{
      await mo.changeOwner(newOwner, {from:newOwner});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail change owner', async() => {
    let err;
    try{
      await so.changeOwner('0x0000000000000000000000000000000000000000', {from:owner});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Change owner', async() => {
    await mo.changeOwner(newOwner, {from:owner});
    let ownerHash = await hash.stringAddress('owner', newOwner);
    let ownerBool = await db.boolStorage(ownerHash);
    assert.equal(ownerBool, true);
  });

  it('Fail add owner', async() => {
    let err;
    try{
      await mo.addOwner(owner, {from:owner});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail add owner', async() => {
    let err;
    try{
      await so.addOwner('0x0000000000000000000000000000000000000000', {from:newOwner});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Add owner', async() => {
    await mo.addOwner(owner, {from:newOwner});
    let ownerHash = await hash.stringAddress('owner', owner);
    let ownerBool = await db.boolStorage(ownerHash);
    assert.equal(ownerBool, true);
  });

  it('Fail remove owner', async() => {
    let err;
    try{
      await mo.removeOwner(owner, {from:owner});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Remove owner', async() => {
    await mo.removeOwner(owner, {from:newOwner});
    let ownerHash = await hash.stringAddress('owner', owner);
    let ownerBool = await db.boolStorage(ownerHash);
    assert.equal(ownerBool, false);
  });

  it('Fail to destroy', async() => {
    let err;
    try{
      await mo.destroy({from:owner});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Destroy', async() => {
    await mo.destroy({from: newOwner});
  });

});
