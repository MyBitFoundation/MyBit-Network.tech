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
const StakingBank = artifacts.require('./StakingBank.sol');


contract('Test asset creation', async (accounts) => {
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
  let assetInstance;
  let stakingBankInstance;

  const access1Account = web3.eth.accounts[4];
  const access2Account = web3.eth.accounts[5];
  const access3Account = web3.eth.accounts[6];
  const access4Account = web3.eth.accounts[7];

  const backupAddress = web3.eth.accounts[8];
  const assetCreator = web3.eth.accounts[9];
  const assetCreator2 = web3.eth.accounts[10];
  const assetIncomePayer = web3.eth.accounts[11];

  const myBitPayoutAddress = web3.eth.accounts[12];
  const assetEscrowPayoutAddress = web3.eth.accounts[13];

  const contractMimik = web3.eth.accounts[14];

  /* Asset creation values */
  let amountToBeRaised = web3.toWei(1,'ether');
  let managerPercentage = 5;
  let assetID;
  let installerID;
  let assetType;
  let creationGasEstimate;
  let assetAccount1FundedAmount;

  let assetType2;
  let installerID2;
  let assetID2;

  it("Deploy All Contracts", async () => {
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
     hfInstance = await HashFunctions.new();
     // ContractManager Contract
     contractManagerInstance = await ContractManager.new(dbInstance.address);
     await dbInstance.setContractManager(contractManagerInstance.address);
     // InitialVariables Contract
     initialInstance = await InitialVariables.new(dbInstance.address);
     await contractManagerInstance.addContract('InitialVariables', initialInstance.address, ownerAddr2);
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
     // Asset Contract
     assetInstance = await Asset.new(dbInstance.address);
     await contractManagerInstance.addContract('Asset', assetInstance.address, ownerAddr2);
     // Staking Bank Contract
     stakingBankInstance = await StakingBank.new(dbInstance.address);
     await contractManagerInstance.addContract('StakingBank', stakingBankInstance.address, ownerAddr2);
     // HashFunctions Contract
     hfInstance = await HashFunctions.new();
     assetType = await hfInstance.Sha3('BitcoinATM');
     installerID =  await hfInstance.Sha3('installerID');
     assetID = await hfInstance.Sha3('TestAsset');

     assetType2 = await hfInstance.Sha3('BitcoinATM2');
     installerID2 = await hfInstance.Sha3('installerID2');
     assetID2 = await hfInstance.Sha3('TestAsset2');
   });

   it('Initialize InitialVariables  variables via startDapp', async () => {
     await initialInstance.startDapp();
     //--------------------Asset Creation Variables-----------------
     assert.equal(await dbInstance.uintStorage(await hfInstance.Sha3('myBitFoundationPercentage')), 1, 'myBitFoundationPercentage == 1');
     assert.equal(await dbInstance.uintStorage(await hfInstance.Sha3('stakedTokenPercentage')), 2, 'myBitFoundationPercentage == 2');
     assert.equal(await dbInstance.uintStorage(await hfInstance.Sha3('installerPercentage')), 97, 'installerPercentage == 97');

     // ---------------------Staking Variables--------------------------
     assert.equal(await dbInstance.uintStorage(await hfInstance.Sha3('minimumStakeAmount')), 100, 'minimumStakeAmount == 100');
     assert.equal(await dbInstance.uintStorage(await hfInstance.Sha3('minimumStakeTime')), 10, 'minimumStakeTime == 10');
     assert.equal(await dbInstance.uintStorage(await hfInstance.Sha3('minimumWithdrawTime')), 5, 'minimumWithdrawTime == 5');

     //-------------------Bug Bounty Variables------------------------
     assert.equal(await dbInstance.uintStorage(await hfInstance.Sha3('blocksForBugReview')), 25, 'blocksForBugReview == 25');
     assert.equal(await dbInstance.uintStorage(await hfInstance.Sha3('blocksForExpertReview')), 25, 'blocksForExpertReview == 25');
     assert.equal(await dbInstance.uintStorage(await hfInstance.Sha3('bugSubmissionCost')), 1000000000000000000, 'bugSubmissionCost == 1000000000000000000');

     assert.equal(await dbInstance.uintStorage(await hfInstance.Sha3('expertVotePower')), 5, 'expertVotePower == 5');
     assert.equal(await dbInstance.uintStorage(await hfInstance.Sha3('regularVotePower')), 1, 'expertVotePower == 1');
   });

  it('Set MyBitFoundation address, and AssetEscrow', async () => {
    await contractManagerInstance.addContract('MyBitFoundation', myBitPayoutAddress, ownerAddr2);
    await contractManagerInstance.addContract('AssetEscrow', assetEscrowPayoutAddress, ownerAddr2);

    assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'MyBitFoundation')), myBitPayoutAddress, 'MyBitFoundationAddr set');
    assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'AssetEscrow')), assetEscrowPayoutAddress, 'AssetEscrowAddr set');
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

  it('Asset Creation', async () => {
    await assetCreationInstance.newAsset(assetID, amountToBeRaised, managerPercentage, installerID, assetType, {from:assetCreator});
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('amountToBeRaised', assetID)), amountToBeRaised, 'Amount to be raised set properly');
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('managerPercentage', assetID)), managerPercentage, 'Manager percentage set properly');
    assert.equal(await dbInstance.addressStorage(await hfInstance.stringBytes('assetManager', assetID)), assetCreator, 'Asset creator/manager set properly');
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID)), 1, 'Funding stage set properly');
  });

  it('Change funding time to 0 > acting as contract', async () => {
    await contractManagerInstance.addContract('testContract', contractMimik, ownerAddr2);
    assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'testContract')), contractMimik, 'testContract set');

    // fund to refund after
    await fundingHubInstance.fund(assetID, {from:access1Account, value:web3.toWei(0.5,'ether')});

    await dbInstance.setUint(await hfInstance.stringBytes('fundingDeadline', assetID), 100,{from:contractMimik});
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingDeadline', assetID)),100,'fundingDeadline changed');
  });

  it('Initiate refund to allow refunds', async () => {
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID)), 1, 'Funding stage == 1');
    await fundingHubInstance.initiateRefund(assetID)
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID)), 2, 'Funding stage == 2');
  });

  it('refund', async () => {
    let userBalanceBefore = parseInt(web3.eth.getBalance(access1Account));
    var refundGasEstimate = parseInt(await fundingHubInstance.refund.estimateGas(assetID, {from:access1Account})).toFixed(7) / 10000000;
    let sharesBefore = await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares',assetID,access1Account));

    await fundingHubInstance.refund(assetID, {from:access1Account});
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares',assetID,access1Account)),0,'shares deleted');
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised',assetID)),0,'amountRaised reduced');

    let shouldBeBalanceAfter = (userBalanceBefore - parseInt(web3.toWei(refundGasEstimate,'ether'))) + parseInt(web3.toWei(0.5,'ether'));
    assert.equal(parseInt(web3.eth.getBalance(access1Account)), shouldBeBalanceAfter, 'refund successful');
  });

  it('destroy', async () =>{
    await ownedInstance.setFunctionAuthorized(fundingHubInstance.address, 'destroy', await hfInstance.addressHash(access2Account),{from:ownerAddr1});
    await fundingHubInstance.destroy(ownerAddr1,access2Account,{from:ownerAddr3});

  });
});
