var bn = require('bignumber.js');

const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const SingleOwned = artifacts.require("./ownership/SingleOwned.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");

contract('SingleOwned', async(accounts) => {
  const owner = accounts[0];
  const newOwner = accounts[1];

  let db;
  let events;
  let cm;
  let so;
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

  it('Deploy SingleOwned', async() => {
    so = await SingleOwned.new(db.address, events.address);
    await cm.addContract('SingleOwned', so.address);
  });

  it('Fail change owner', async() => {
    let err;
    try{
      await so.changeOwner(newOwner, {from:newOwner});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Change owner', async() => {
    await so.changeOwner(newOwner, {from:owner});
    let ownerHash = await hash.stringAddress('owner', newOwner);
    let ownerBool = await db.boolStorage(ownerHash);
    assert.equal(ownerBool, true);
  });

  it('Fail to destroy', async() => {
    let err;
    try{
      await so.destroy({from:owner});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Destroy', async() => {
    await so.destroy({from: newOwner});
  });

});
