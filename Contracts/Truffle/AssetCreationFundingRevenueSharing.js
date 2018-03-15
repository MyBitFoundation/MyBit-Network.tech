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
  let assetInstance;
  let stakingBankInstance;

  const access1Account = web3.eth.accounts[4];
  const access2Account = web3.eth.accounts[5];
  const access3Account = web3.eth.accounts[6];
  const access4Account = web3.eth.accounts[7];

  const backupAddress = web3.eth.accounts[8];
  const assetCreator = web3.eth.accounts[9];
  const assetIncomePayer = web3.eth.accounts[10];

  const myBitPayoutAddress = web3.eth.accounts[11]; //81f5f34dc895e79fb12e6c184245453949d3eb57452a0b0efaa68d13efce8d6c
  const assetEscrowPayoutAddress = web3.eth.accounts[12]; //f5d4ddc88b0c2439af22630e2dc688330df5ec0aa4bb3102e992446851284ebc


  /* Asset creation values */
  let amountToBeRaised = web3.toWei(1,'ether');
  let managerPercentage = 5;
  let assetID;
  let installerID;
  let assetType;
  let creationGasEstimate;
  let assetAccount1FundedAmount;


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
     assetType = await hfInstance.sha3('BitcoinATM');
     installerID =  await hfInstance.sha3('installerID');
     assetID = await hfInstance.sha3('TestAsset');
     // Asset Contract*/
   });

   it('Initialize InitialVariables  variables via startDapp', async () => {
     await initialInstance.startDapp();
     //--------------------Asset Creation Variables-----------------
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('myBitFoundationPercentage')), 1, 'myBitFoundationPercentage == 1');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('stakedTokenPercentage')), 2, 'myBitFoundationPercentage == 2');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('installerPercentage')), 97, 'installerPercentage == 97');

     // ---------------------Staking Variables--------------------------
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('minimumStakeAmount')), 100, 'minimumStakeAmount == 100');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('minimumStakeTime')), 10, 'minimumStakeTime == 10');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('minimumWithdrawTime')), 5, 'minimumWithdrawTime == 5');

     //-------------------Bug Bounty Variables------------------------
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('blocksForBugReview')), 25, 'blocksForBugReview == 25');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('blocksForExpertReview')), 25, 'blocksForExpertReview == 25');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('bugSubmissionCost')), 1000000000000000000, 'bugSubmissionCost == 1000000000000000000');

     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('expertVotePower')), 5, 'expertVotePower == 5');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('regularVotePower')), 1, 'expertVotePower == 1');
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

  it('Asset Funding from access1Account', async () => {
    // User 1 buys 50%, then another 20% afterwards
    await fundingHubInstance.fund(assetID, {from:access1Account, value:web3.toWei(0.5,'ether')});
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID)), web3.toWei(0.5,'ether'), 'Amount raised added properly');
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access1Account)), web3.toWei(0.5,'ether'), 'Shares added properly');
    await fundingHubInstance.fund(assetID, {from:access1Account, value:web3.toWei(0.25,'ether')});
    assetAccount1FundedAmount = 0.75;
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

  it('FundingHub payout to transition to stage 4', async () => {
    // Check before payout
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID)), web3.toWei(1,'ether'));
    assert.equal(Number(web3.eth.getBalance(myBitPayoutAddress)), web3.toWei(100,'ether'), 'myBitPayoutAddress is  ==  1');
    assert.equal(Number(web3.eth.getBalance(assetEscrowPayoutAddress)), web3.toWei(100,'ether'), 'assetEscrowPayoutAddress == 1');

    let amountRaised = await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID));
    await fundingHubInstance.payout(assetID);
    assert.equal(Number(web3.eth.getBalance(stakingBankInstance.address)), web3.toWei(0.02), 'stakingBankInstance balance == 0.02');
    assert.equal(Number(web3.eth.getBalance(myBitPayoutAddress)), web3.toWei(100.01,'ether'), 'myBitPayoutAddress balance == 100.01');
    assert.equal(Number(web3.eth.getBalance(assetEscrowPayoutAddress)), web3.toWei(100.97,'ether'), 'assetEscrowPayoutAddress balance == 100.02');

    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID)), 4, 'Stage set to 4, ready for payments');
  });

  it('Sending Funds to asset', async () => {
    let etherAmountToFund = 1;
    var assetCreatorBalanceBefore = Number(web3.eth.getBalance(assetCreator));
    var totalReceivedBalanceBefore = Number(await dbInstance.uintStorage(await hfInstance.stringBytes('totalReceived', assetID)));
    await assetInstance.receiveIncome(assetID, '', {value:web3.toWei(etherAmountToFund,'ether')});
    let totalReceived = await dbInstance.uintStorage(await hfInstance.stringBytes('totalReceived', assetID));
    let managerAmount = web3.toWei(etherAmountToFund,'ether') * await dbInstance.uintStorage(await hfInstance.stringBytes('managerPercentage', assetID)) / 100;
    assert.equal(managerAmount, web3.toWei(managerPercentage/100, 'ether'), 'manager calculation correct');
    assert.equal(web3.eth.getBalance(assetCreator), Number(assetCreatorBalanceBefore) + Number(managerAmount), 'Manager assigned correct amount');
    assert.equal(totalReceived, web3.toWei(etherAmountToFund,'ether') - managerAmount, 'Total recieved assigned correctly');
  });

  it('Withdrawal earnings from asset', async () => {
    let shares = await dbInstance.uintStorage(await hfInstance.stringBytesAddress("shares", assetID, access1Account));
    let amountRaised = await dbInstance.uintStorage(await hfInstance.stringBytes("amountRaised", assetID));
    let totalPaidToFunders = await dbInstance.uintStorage(await hfInstance.stringBytes("totalPaidToFunders", assetID));
    let totalPaidToFunder = await dbInstance.uintStorage(await hfInstance.stringBytesAddress("totalPaidToFunder", assetID, access1Account));
    let totalReceived = await dbInstance.uintStorage(await hfInstance.stringBytes("totalReceived", assetID));
    let payment = ((totalReceived * shares) / amountRaised) - totalPaidToFunder;
    let balanceOfFunder = web3.eth.getBalance(access1Account);

    console.log('shares; ' + shares);
    console.log('amountRaised; ' + amountRaised);
    console.log('totalPaidToFunders; ' + totalPaidToFunders);
    console.log('totalPaidToFunder; ' + totalPaidToFunder);
    console.log('totalPaidToFunders; ' + totalPaidToFunders);
    console.log('totalReceived; ' + totalReceived);
    console.log('payment; ' + payment);
    console.log('balanceOfFunder; ' + balanceOfFunder);

    await assetInstance.withdraw(assetID, false, {from:access1Account});

    let totalPaidToFunderAfter = await dbInstance.uintStorage(await hfInstance.stringBytesAddress("totalPaidToFunder", assetID, access1Account));
    let totalPaidToFundersAfter = await dbInstance.uintStorage(await hfInstance.stringBytes("totalPaidToFunders", assetID));
    let balanceOfFunderAfter = web3.eth.getBalance(access1Account);
    console.log('totalPaidToFunderAfter' + totalPaidToFunderAfter);
    console.log('totalPaidToFundersAfter' + totalPaidToFundersAfter);
    console.log('balanceOfFunderAfter' + balanceOfFunderAfter);
    assert.equal(totalPaidToFunderAfter, (amountRaised-web3.toWei(managerPercentage/100, 'ether')) * assetAccount1FundedAmount, 'correctly paid the funder');
  });


});
//stress test 100000 accounts?
// multiple accounts same address reentry etc??
// setBackupAddress different users address already verified??? - backup address need to sign before backup is set
