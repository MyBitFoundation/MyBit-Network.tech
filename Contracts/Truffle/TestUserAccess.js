const Database = artifacts.require("./Database.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const ContractManager = artifacts.require("./ContractManager.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const AssetCreation = artifacts.require("./AssetCreation.sol");
const UserAccess = artifacts.require("./UserAccess.sol");
const MyBitToken = artifacts.require('./MyBitToken.sol');
const Owned = artifacts.require('./Owned.sol');
const Asset = artifacts.require('./Asset.sol');
const FundingHub = artifacts.require('./FundingHub.sol');


contract('TestUserAccess', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];
  let dbInstance;
  let hfInstance;
  let initialInstance;
  let myBitTokenInstance;
  let userAccessInstance;
  let assetCreationInstance;
  let fundingHubInstance;

  const access1Account = web3.eth.accounts[4];
  const access2Account = web3.eth.accounts[5];
  const access3Account = web3.eth.accounts[6];
  const access4Account = web3.eth.accounts[7];

  const backupAddress = web3.eth.accounts[8];
  const assetCreator = web3.eth.accounts[9];


  /* Asset creation values */
  let amountToBeRaised = web3.toWei(1,'ether');
  let managerPercentage = 5;
  let assetID;
  let installerID;
  let assetType;


  it("Deploy All Contracts", async () => {
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
     hfInstance = await HashFunctions.new();
     // ContractManager Contract
     contractManagerInstance = await ContractManager.new(dbInstance.address);
     await dbInstance.setContractManager(contractManagerInstance.address);
     // InitialVariables Contract
     initialInstance = await InitialVariables.new(dbInstance.address);
     await contractManagerInstance.addContract('InitialVariables', initialInstance.address, ownerAddr2);
     await initialInstance.startDapp();
     // MyBitToken Contract
     myBitTokenInstance = await MyBitToken.new(281207344012426, 'MyBit Token', 8, 'MyB');
     // Owned Contract
     ownedInstance = await Owned.new(dbInstance.address);
     await contractManagerInstance.addContract('Owned', ownedInstance.address, ownerAddr2);
     // UserAccess Contract
     userAccessInstance = await UserAccess.new(dbInstance.address);
     await contractManagerInstance.addContract('UserAccess', userAccessInstance.address, ownerAddr2);
     // AssetCreation Contract
     assetCreationInstance = await AssetCreation.new(dbInstance.address);
     await contractManagerInstance.addContract('AssetCreation', assetCreationInstance.address, ownerAddr2);
     // Funding Hub contract
     fundingHubInstance = await FundingHub.new(dbInstance.address);
     await contractManagerInstance.addContract('FundingHub', fundingHubInstance.address, ownerAddr2);
     // HashFunctions Contract
     hfInstance = await HashFunctions.new();
     assetType = await hfInstance.sha3('BitcoinATM');
     installerID =  await hfInstance.sha3('installerID');
     assetID = await hfInstance.sha3('TestAsset');
     // Asset Contract
   });

   it("Upgrade Initial Access", async () => {
     // --------------- Generic  different users different access levels ------ //
     // Approve Access 1 via owner
     await userAccessInstance.approveUser(access1Account, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', access1Account)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(access2Account, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', access2Account)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(backupAddress, 1);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', backupAddress)), 1, 'Access 1 for set backup');

     await userAccessInstance.approveUser(assetCreator, 4);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', assetCreator)), 4, 'Access 4 for owner1');
   });

   it("Upgrade access +1", async () => {
    // ---------------------- Upgrade  users access level +1 ------------------ //
    await userAccessInstance.approveUser(access1Account, 3);
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', access1Account)), 3, 'Access 1 upgraded to 2');
  });

   it("Setup backupAddress - non malicious", async () => {
     await userAccessInstance.setBackupAddress(backupAddress, {from:access1Account});
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringAddress('backupAddress', access1Account)),backupAddress, 'Backup address correctly changed');
   });

   it('Sign Backup address', async () => {
     await userAccessInstance.signBackupAddress(access1Account, {from:backupAddress});
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('backupAddressSigned', backupAddress)), true, 'Backup address signed');
   });

   it('Asset Creation', async () => {
     await assetCreationInstance.newAsset(assetID, amountToBeRaised, 5, installerID, assetType, {from:assetCreator});
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('amountToBeRaised', assetID)), amountToBeRaised, 'Amount to be raised set properly');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('managerPercentage', assetID)), 5, 'Manager percentage set properly');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringBytes('assetManager', assetID)), assetCreator, 'Asset creator/manager set properly');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID)), 1, 'Funding stage set properly');
   });

   it('Asset Funding from access1Account', async () => {
     // User 1 buys 50%, then another 20% afterwards
     await fundingHubInstance.fund(assetID, {from:access1Account, value:web3.toWei(0.5,'ether')});
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID)), web3.toWei(0.5,'ether'), 'Amount raised added properly');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access1Account)), web3.toWei(0.5,'ether'), 'Shares added properly');
     await fundingHubInstance.fund(assetID, {from:access1Account, value:web3.toWei(0.25,'ether')});
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID)), web3.toWei(0.75,'ether'), 'Amount raised added properly');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access1Account)), web3.toWei(0.75,'ether'), 'Shares added properly');

     // User 2 buys remaining 25%
     await fundingHubInstance.fund(assetID, {from:access2Account, value:web3.toWei(0.25,'ether')});
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID)), web3.toWei(1,'ether'), 'Amount raised added properly');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access2Account)), web3.toWei(0.25,'ether'), 'Shares added properly');
   });

   it('Check asset has updated stage to fully funded and no-one can fund it anymore', async () => {
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('amountToBeRaised', assetID)), 0, 'Should be deleted == 0');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID)), 3, 'Funding stage == 3');
   });



});
//stress test 100000 accounts?
// multiple accounts same address reentry etc??
// setBackupAddress different users address already verified??? - backup address need to sign before backup is set


//newAsset(bytes32 _assetID, uint _amountToBeRaised, uint _managerPercentage, bytes32 _installerID, bytes32 _assetType)
