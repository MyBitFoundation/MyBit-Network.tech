var bn = require('bignumber.js');

const Database = artifacts.require('./database/Database.sol');
const Events = artifacts.require('./database/Events.sol');
const ContractManager = artifacts.require('./database/ContractManager.sol');
const Expirable = artifacts.require('./access/Expirable.sol');

const ETH = bn(10**18);

contract('Access Hierarchy', async (accounts) => {
  const owner = accounts[0];
  const user = accounts[1];

  let database;
  let events;
  let contractManager;
  let expirable;

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
    //assert.equal(await contractManager.contractExists(owner), true);
  });

  it('Deploy access', async() => {
    expirable = await Expirable.new(database.address, events.address);
    await contractManager.addContract('Expirable', expirable.address);
  });

  it('Set access', async() => {
    await expirable.setUpperAccessLevel(2);
  });

  it('Fail to chage expiration', async() => {
    let err;
    try{
      await expirable.changeExpirationLength(bn(60).times(60).times(24).times(30), {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Change expiration', async() => {
    await expirable.changeExpirationLength(bn(60).times(60).times(24).times(30));
  });

  it('Add user', async() => {
    await expirable.approveTemporaryUser(user, 1);
  });

  it('Remove user', async() => {
    await expirable.removeTemporaryUser(user);
  })


});
