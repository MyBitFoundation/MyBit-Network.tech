const ContractManager = artifacts.require("./ContractManager.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const OracleHub = artifacts.require('./OracleHub.sol');
const Owned = artifacts.require("./Owned.sol");
const Database = artifacts.require("./Database.sol");
const OperatorEscrow = artifacts.require('./OperatorEscrow.sol');
const UserAccess = artifacts.require('./UserAccess.sol');
const MyBitToken = artifacts.require('./MyBitToken.sol');
const AssetCreation = artifacts.require('./AssetCreation.sol');
const Asset = artifacts.require('./Asset.sol');
const FundingHub = artifacts.require('./FundingHub.sol');
const WithdrawalManager = artifacts.require('./WithdrawalManager.sol');


contract('Deploying and storing all contracts + validation', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];

  const assetCreator = web3.eth.accounts[3];
  const withdrawalAddressSet = web3.eth.accounts[4];
  const withdrawalAddressSet2 = web3.eth.accounts[5];

  const funder1 = web3.eth.accounts[6];
  const funder2 = web3.eth.accounts[7];

  const myBitPayoutAddress = web3.eth.accounts[8];
  const assetEscrowPayoutAddress = web3.eth.accounts[9];

  const emptyAddress = '0x0000000000000000000000000000000000000000';

  let contractManagerInstance;
  let hfInstance;
  let initialVariableInstance;
  let oracleHubInstance;
  let ownedInstance;
  let dbInstance;
  let operatorEscrowInstance;
  let userAccessInstance;
  let myBitTokenInstance;
  let assetCreationInstance;
  let assetInstance;
  let fundingHubInstance;
  let stakingBankInstance;
  let withdrawalManagerInstance;

  var initialSupply;
  var transferAmount;
  var approvalAmount;

  let amountToBeRaised = 500; // USD
  let operatorPercentage = 5;   // 5%
  let assetID;
  let installerID;
  let assetType;

  let amountMyBRequired;

  it("Owners should be assigned", async () => {
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
     hfInstance = await HashFunctions.new();

     // Database Owners assigned properly
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('owner', ownerAddr1)), true, 'Owner 1 assigned properly');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('owner', ownerAddr2)), true, 'Owner 2 assigned properly');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('owner', ownerAddr3)), true, 'Owner 3 assigned properly');
   });

   it('Assign ContractManager', async () => {
      contractManagerInstance = await ContractManager.new(dbInstance.address);

      await dbInstance.setContractManager(contractManagerInstance.address);
      assert.equal(await dbInstance.addressStorage(await hfInstance.stringString("contract", "ContractManager")),contractManagerInstance.address, 'Contract manager address equal');
      assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress("contract", contractManagerInstance.address)), true, 'Contract manager stored true');

   });

   it('Add InitialVariables contract to database via contract manager', async () => {
    initialVariableInstance = await InitialVariables.new(dbInstance.address);
    // Check that initialvariables database address is correct compared to real database address
    assert.equal(await initialVariableInstance.database(), await dbInstance.address, 'Initial Variables database Address assigned properly');

    // Add initialvariables contract to database and validate all fields are updated with correct outcome
    await contractManagerInstance.addContract('InitialVariables', initialVariableInstance.address, ownerAddr2);
    assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(initialVariableInstance.address))), false, 'Contract manager to database === false');
    assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'InitialVariables')), initialVariableInstance.address, 'Initial variables address correctly stored');
    assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', initialVariableInstance.address)), true, 'Initial variables address == true');
   });

   it('Initialize InitialVariables  variables via startDapp', async () => {
     let address1NotEmptyRequire = null;
     try {await initialVariableInstance.startDapp(emptyAddress, assetEscrowPayoutAddress);}
     catch (error) {address1NotEmptyRequire = error}
     assert.notEqual(address1NotEmptyRequire, null, 'require address1NotEmptyRequire');

     let address2NotEmptyRequire = null;
     try {await initialVariableInstance.startDapp(myBitPayoutAddress, emptyAddress);}
     catch (error) {address2NotEmptyRequire = error}
     assert.notEqual(address2NotEmptyRequire, null, 'require address2NotEmptyRequire');

     let address3NotEmptyRequire = null;
     try {await initialVariableInstance.startDapp(emptyAddress, emptyAddress);}
     catch (error) {address3NotEmptyRequire = error}
     assert.notEqual(address3NotEmptyRequire, null, 'require address3NotEmptyRequire');

     await initialVariableInstance.startDapp(myBitPayoutAddress, assetEscrowPayoutAddress);
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringHash('MyBitFoundation')), myBitPayoutAddress, 'myBitPayoutAddress');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringHash('InstallerEscrow')), assetEscrowPayoutAddress, 'assetEscrowPayoutAddress');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('installerPercentage')), 99, 'installerPercentage ');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('myBitFoundationPercentage')), 1, 'myBitFoundationPercentage');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringUint('accessTokenFee', 1)), 25, 'accessTokenFee 2');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringUint('accessTokenFee', 2)), 75, 'accessTokenFee 3');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringUint('accessTokenFee', 3)), 100, 'accessTokenFee 4');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('priceUpdateTimeline')), 86400, 'priceUpdateTimeline');
   });
 });
