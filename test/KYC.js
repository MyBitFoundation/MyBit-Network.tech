var bn = require('bignumber.js');

const Database = artifacts.require('./database/Database.sol');
const Events = artifacts.require('./database/Events.sol');
const ContractManager = artifacts.require('./database/ContractManager.sol');
const KYC = artifacts.require('./access/KYC.sol');

const ETH = bn(10**18);

contract('KYC', async (accounts) => {
  const owner = accounts[0];
  const user = accounts[1];

  let database;
  let events;
  let contractManager;
  let kyc;

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

  it('Deploy kyc', async() => {
    kyc = await KYC.new(database.address, events.address);
    await contractManager.addContract('KYC', kyc.address);
  });

  it('Fail to add kyc', async() => {
    let err;
    try{
      await kyc.approveKYC(user, {from:user});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Approve KYC', async() => {
    await kyc.approveKYC(user);
  });

  it('Remove KYC', async() => {
    await kyc.revokeKYC(user);
  });

});
