const Database = artifacts.require("./Database.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const ContractManager = artifacts.require("./ContractManager.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const AssetCreation = artifacts.require('./AssetCreation.sol');
const Owned = artifacts.require('./Owned.sol');

contract('TestContractManager', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];
  const myBitPayoutAddress = web3.eth.accounts[3];
  const assetEscrowPayoutAddress = web3.eth.accounts[4];

  const newAssetCreationAddress = web3.eth.accounts[5];

  let oldACAddress;

  let dbInstance;
  let hfInstance;
  let cmInstance;
  let ivInstance;
  let acInstance;
  let oInstance;

  it("Deploy All Contracts", async () => {
    console.log('Type of address', typeof ownerAddr1);
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
     hfInstance = await HashFunctions.new();
     // ContractManager Contract
     cmInstance = await ContractManager.new(dbInstance.address);
     await dbInstance.setContractManager(cmInstance.address);
     // InitialVariables Contract
     ivInstance = await InitialVariables.new(dbInstance.address);
     await cmInstance.addContract('InitialVariables', ivInstance.address, ownerAddr2);
     // AssetCreation Contract
     acInstance = await AssetCreation.new(dbInstance.address);
     await cmInstance.addContract('AssetCreation', acInstance.address, ownerAddr2);
     oldACAddress = acInstance.address;
     // Owned contract
     oInstance = await Owned.new(dbInstance.address);
     await cmInstance.addContract('Owned', oInstance.address, ownerAddr2);

   });

   it('Initialize', async () => {
     await ivInstance.startDapp(myBitPayoutAddress, assetEscrowPayoutAddress);
     assert.equal(await cmInstance.database(), dbInstance.address, 'database address correctly set');
   });

   it('Set function authorization', async () => {
     await oInstance.setFunctionAuthorized(cmInstance.address, 'updateContract', await hfInstance.addressHash(newAssetCreationAddress),{from:ownerAddr1});
     await oInstance.setFunctionAuthorized(cmInstance.address, 'removeContract', await hfInstance.stringHash('AssetCreation'),{from:ownerAddr1});
   });

   it('Update Contract', async () => {
     assert.equal(await cmInstance.contractExists(acInstance.address), true, 'addr exists');
     await cmInstance.updateContract('AssetCreation', newAssetCreationAddress, ownerAddr1,{from:ownerAddr2});
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress("contract", newAssetCreationAddress)), true,'new address exists');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress("contract", oldACAddress)), false,'old address does not exist');

     let authorizationHash = await hfInstance.getAuthorizeHash(cmInstance.address, ownerAddr1, 'updateContract', await hfInstance.addressHash(newAssetCreationAddress));
     assert.equal(await dbInstance.boolStorage(authorizationHash),false,'auth hash deleted');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'AssetCreation')), newAssetCreationAddress, 'new addr set');
   });

   it('Remove Contract', async () => {
     assert.equal(await cmInstance.contractExists(newAssetCreationAddress), true, 'addr exists');
     await cmInstance.removeContract('AssetCreation', ownerAddr1,{from:ownerAddr2});

     let authorizationHash = await hfInstance.getAuthorizeHash(cmInstance.address, ownerAddr1, 'removeContract', await hfInstance.addressHash(newAssetCreationAddress));
     assert.equal(await dbInstance.boolStorage(authorizationHash), false,'function signer removed');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress("contract", oldACAddress)), false,'old address has been deleted');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'AssetCreation')), '0x0000000000000000000000000000000000000000', 'address been deleted');
   });

   it('Set deployed', async () => {
     await cmInstance.setDeployFinished();
   });

});
