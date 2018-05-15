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
  const notOwnerAddress = web3.eth.accounts[6];
  const realAddressNotStoredNotStored = web3.eth.accounts[9];

  const emptyAddress = '0x0000000000000000000000000000000000000000';
  const emptyString = '';

  let oldACAddress;

  let dbInstance;
  let hfInstance;
  let cmInstance;
  let ivInstance;
  let acInstance;
  let oInstance;

  it("TestNewContractManager", async () => {
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
     hfInstance = await HashFunctions.new();

     // Modifier Check
     let addressNotEmptyModifier = null;
     try {await ContractManager.new(emptyAddress);}
     catch (error) {addressNotEmptyModifier = error}
     assert.notEqual(addressNotEmptyModifier, null, 'modifier addressNotEmptyModifier');

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

   it('Add contract Modifier', async () => {
     // Modifier check
     let addressNotEmptyModifier = null;
     try {await cmInstance.addContract('TestContract', emptyAddress, ownerAddr2);}
     catch (error) {addressNotEmptyModifier = error}
     assert.notEqual(addressNotEmptyModifier, null, 'modifier addressNotEmptyModifier');

     let noEmptyStringModifier = null;
     try {await cmInstance.addContract('', realAddressNotStored, ownerAddr2);}
     catch (error) {noEmptyStringModifier = error}
     assert.notEqual(noEmptyStringModifier, null, 'modifier noEmptyStringModifier');

     let anyOwnerModifier = null;
     try {await cmInstance.addContract('TestContract', realAddressNotStored, ownerAddr2, {from:notOwnerAddress});}
     catch (error) {anyOwnerModifier = error}
     assert.notEqual(anyOwnerModifier, null, 'modifier anyOwnerModifier');
   });

   it('Add contract Requires', async () => {
     let senderNotFunctionSignerRequire = null;
     try {await cmInstance.addContract('TestContract', realAddressNotStored, ownerAddr2,{from:ownerAddr2});}
     catch (error) {senderNotFunctionSignerRequire = error}
     assert.notEqual(senderNotFunctionSignerRequire, null, 'require senderNotFunctionSignerRequire');

     let contractExistsRequire = null;
     try {await cmInstance.addContract('TestContract', acInstance.address, ownerAddr2);}
     catch (error) {contractExistsRequire = error}
     assert.notEqual(contractExistsRequire, null, 'require contractExistsRequire');

     let contractNameExistsRequire = null;
     try {await cmInstance.addContract('AssetCreation', realAddressNotStored, ownerAddr2);}
     catch (error) {contractNameExistsRequire = error}
     assert.notEqual(contractNameExistsRequire, null, 'require contractNameExistsRequire');
   });

   it('Remove Contract Modifiers', async () => {
      let noEmptyStringModifier = null;
      try {await cmInstance.removeContract('', ownerAddr2);}
      catch (error) {noEmptyStringModifier = error}
      assert.notEqual(noEmptyStringModifier, null, 'modifier noEmptyStringModifier');

      let anyOwnerModifier = null;
      try {await cmInstance.removeContract('TestContract', ownerAddr2, {from:notOwnerAddress});}
      catch (error) {anyOwnerModifier = error}
      assert.notEqual(anyOwnerModifier, null, 'modifier anyOwnerModifier');

      let multiSigRequiredModifier = null;
      try {await cmInstance.removeContract('TestContract', notOwnerAddress);}
      catch (error) {multiSigRequiredModifier = error}
      assert.notEqual(multiSigRequiredModifier, null, 'modifier multiSigRequiredModifier');
    });


    it('Remove Contract Requires', async () => {
      let contractExistsRequire = null;
      try {await cmInstance.addContract('AssetCreation', realAddressNotStored, ownerAddr2);}
      catch (error) {contractExistsRequire = error}
      assert.notEqual(contractExistsRequire, null, 'require contractExistsRequire');
    });

   it('Update Contract Modifiers', async () => {
      let noEmptyStringModifier = null;
      try {await cmInstance.updateContract('', ownerAddr2);}
      catch (error) {noEmptyStringModifier = error}
      assert.notEqual(noEmptyStringModifier, null, 'modifier noEmptyStringModifier');

      let anyOwnerModifier = null;
      try {await cmInstance.updateContract('TestContract', ownerAddr2, {from:notOwnerAddress});}
      catch (error) {anyOwnerModifier = error}
      assert.notEqual(anyOwnerModifier, null, 'modifier anyOwnerModifier');

      let multiSigRequiredModifier = null;
      try {await cmInstance.updateContract('TestContract', notOwnerAddress);}
      catch (error) {multiSigRequiredModifier = error}
      assert.notEqual(multiSigRequiredModifier, null, 'modifier multiSigRequiredModifier');
    });


    it('Update Contract Requires', async () => {
      let contractExistsRequire = null;
      try {await cmInstance.updateContract('AssetCreation', realAddressNotStored, ownerAddr2);}
      catch (error) {contractExistsRequire = error}
      assert.notEqual(contractExistsRequire, null, 'require contractExistsRequire');
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
     // Modifier Check
     let anyOwnerModifier = null;
     try {await cmInstance.setDeployFinished({from:notOwnerAddress});}
     catch (error) {anyOwnerModifier = error}
     assert.notEqual(anyOwnerModifier, null, 'modifier anyOwnerModifier');

     await cmInstance.setDeployFinished();

     // Require try add after deploy finished
     let deployFinishedRequire = null;
     try {await cmInstance.addContract('TestContract', realAddressNotStored, ownerAddr2);}
     catch (error) {deployFinishedRequire = error}
     assert.notEqual(deployFinishedRequire, null, 'require deployFinishedRequire');
   });
});
