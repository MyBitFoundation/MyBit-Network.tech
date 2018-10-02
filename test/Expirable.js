var BigNumber = require('bignumber.js');

const Database = artifacts.require('./database/Database.sol');
const ContractManager = artifacts.require('./database/ContractManager.sol');
const Expirable = artifacts.require('./access/Expirable.sol');

const ETH = 1000000000000000000;

contract('Access Hierarchy', async (accounts) => {
  const owner = web3.eth.accounts[0];
  const user = web3.eth.accounts[1];

  let database;
  let contractManager;
  let expirable;

  it('Deploy Database', async() => {
    database = await Database.new([owner], true);
  });

  it('Deploy contract manage contract', async() => {
    contractManager = await ContractManager.new(database.address);
  });

  it('Set contract manager', async() => {
    await database.enableContractManagement(contractManager.address);
  });

  it('Add user to manager', async() => {
    await contractManager.addContract('User', owner);
    //assert.equal(await contractManager.contractExists(owner), true);
  });

  it('Deploy access', async() => {
    expirable = await Expirable.new(database.address);
    await contractManager.addContract('Expirable', expirable.address);
  });

  it('Set access', async() => {
    await expirable.setUpperAccessLevel(2);
  });

  it('Fail to chage expiration', async() => {
    let err;
    try{
      await expirable.changeExpirationLength(60*60*24*30, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Change expiration', async() => {
    await expirable.changeExpirationLength(60*60*24*30);
  });

  it('Add user', async() => {
    await expirable.approveTemporaryUser(user, 1);
  });

  it('Remove user', async() => {
    await expirable.removeTemporaryUser(user);
  })


});
