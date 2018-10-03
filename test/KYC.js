var BigNumber = require('bignumber.js');

const Database = artifacts.require('./database/Database.sol');
const ContractManager = artifacts.require('./database/ContractManager.sol');
const KYC = artifacts.require('./access/KYC.sol');

const ETH = 1000000000000000000;

contract('KYC', async (accounts) => {
  const owner = web3.eth.accounts[0];
  const user = web3.eth.accounts[1];

  let database;
  let contractManager;
  let kyc;

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

  it('Deploy kyc', async() => {
    kyc = await KYC.new(database.address);
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
