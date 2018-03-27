const Database = artifacts.require("./Database.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const WithdrawalManager = artifacts.require("./WithdrawalManager.sol");
const ContractManager = artifacts.require("./ContractManager.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const AssetCreation = artifacts.require("./AssetCreation.sol");
const UserAccess = artifacts.require("./UserAccess.sol");
const FundingHub = artifacts.require('./FundingHub.sol');
const Asset = artifacts.require('./Asset.sol');
const StakingBank = artifacts.require('./StakingBank.sol');


contract('TestWithdrawalManager', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];

  const userAccount1 = web3.eth.accounts[3];
  const withdrawalAddressSet = web3.eth.accounts[4];
  const withdrawalAddressSet2 = web3.eth.accounts[5];

  const funder1 = web3.eth.accounts[6];
  const funder2 = web3.eth.accounts[7];
  const assetCreator = web3.eth.accounts[8];

  const myBitPayoutAddress = web3.eth.accounts[9]; //81f5f34dc895e79fb12e6c184245453949d3eb57452a0b0efaa68d13efce8d6c
  const assetEscrowPayoutAddress = web3.eth.accounts[10];

  let dbInstance;
  let hfInstance;
  let wmInstance;
  let userAccessInstance;
  let assetCreationInstance;
  let fundingHubInstance;
  let assetInstance;
  let stakingBankInstance;

  let assetType;
  let assetID;
  let installerID;

  it("Deploy All Contracts", async () => {
    dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
    hfInstance = await HashFunctions.new();
    // Contract Manager
    contractManagerInstance = await ContractManager.new(dbInstance.address);
    await dbInstance.setContractManager(contractManagerInstance.address);
    // InitialVariables Contract
    initialInstance = await InitialVariables.new(dbInstance.address);
    await contractManagerInstance.addContract('InitialVariables', initialInstance.address, ownerAddr2);
    // WithdrawalManager
    wmInstance = await WithdrawalManager.new(dbInstance.address);
    await contractManagerInstance.addContract('WithdrawalManager', wmInstance.address, ownerAddr2);
    // User access
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

    assetType = await hfInstance.Sha3('BitcoinATM');
    installerID =  await hfInstance.Sha3('installerID');
    assetID = await hfInstance.Sha3('TestAsset');
  });

  it("Validate no withdrawal address set", async () => {
    let withdrawalAddress = await dbInstance.addressStorage(
      await hfInstance.stringAddress('withdrawalAddress', funder1));
    let withdrawalAmountAddress = await dbInstance.uintStorage(
      await hfInstance.stringAddress('withdrawalAddress', funder1));

    assert.equal(withdrawalAddress, '0x0000000000000000000000000000000000000000', 'address empty');
    assert.equal(withdrawalAmountAddress, 0, 'address empty value');
  });

  it("Add withdrawalAddress - addWithdrawalAddress", async () => {
    await wmInstance.addWithdrawalAddress(withdrawalAddressSet,{from:funder1});

    let withdrawalAddress = await dbInstance.addressStorage(
      await hfInstance.stringAddress('withdrawalAddress', funder1));
    let withdrawalAmountAddress = await dbInstance.uintStorage(
      await hfInstance.stringAddress('withdrawalAddress', withdrawalAddressSet));

    assert.equal(withdrawalAddress, withdrawalAddressSet, 'address correctly set');
    assert.equal(withdrawalAmountAddress, 0, 'address empty value');
  });

  it("Update withdrawalAddress - updateWithdrawalAddress", async () => {
    await wmInstance.updateWithdrawalAddress(withdrawalAddressSet2,{from:funder1});

    let withdrawalAddress = await dbInstance.addressStorage(
      await hfInstance.stringAddress('withdrawalAddress', funder1));
    let withdrawalAmountAddress = await dbInstance.uintStorage(
      await hfInstance.stringAddress('withdrawalAddress', withdrawalAddressSet2));

    assert.equal(withdrawalAddress, withdrawalAddressSet2, 'address correctly set');
    assert.equal(withdrawalAmountAddress, 0, 'address empty value');
  });

  it('Create and give asset revenue', async () => {
    await initialInstance.startDapp();
    await contractManagerInstance.addContract('MyBitFoundation', myBitPayoutAddress, ownerAddr2);
    await contractManagerInstance.addContract('AssetEscrow', assetEscrowPayoutAddress, ownerAddr2);

    await userAccessInstance.approveUser(funder1, 4);
    await userAccessInstance.approveUser(funder2, 4);
    await userAccessInstance.approveUser(assetCreator, 4);

    await assetCreationInstance.newAsset(assetID, web3.toWei(1,'ether'), 5, installerID, assetType, {from:assetCreator});

    await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(0.5,'ether')});
    await fundingHubInstance.fund(assetID, {from:funder2, value:web3.toWei(0.5,'ether')});

    assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID))), 3, 'Funding stage == 3');
    await fundingHubInstance.payout(assetID);
    assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID))), 4, 'Stage set to 4, ready for payments');

    await assetInstance.receiveIncome(assetID, '', {value:web3.toWei(1,'ether')});

    // verify has obtain income
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes("totalReceived", assetID)),web3.toWei(0.95,'ether'));
  });

  it('Withdraw funds from funder1 using - withdrawalAddress', async () => {
    let withdrawalAddressSet2BalanceBefore = parseInt(web3.eth.getBalance(withdrawalAddressSet2));
    await assetInstance.withdraw(assetID, true, {from:funder1});

    let withdrawalAmountAddress = parseInt(await dbInstance.uintStorage(
      await hfInstance.stringAddress('withdrawalAddress', withdrawalAddressSet2)));

    assert.equal(withdrawalAmountAddress, web3.toWei(0.475,'ether'),'withdrawaladdress has ether');
    assert.equal(parseInt(web3.eth.getBalance(withdrawalAddressSet2)), parseInt(withdrawalAddressSet2BalanceBefore) + parseInt(web3.toWei(0.475,'ether')),
  'funds correctly withdrawn to other address');
  });

  it('Remove withdrawalAddress - removeWithdrawalAddress', async () => {
    await wmInstance.removeWithdrawalAddress({from:funder1});

    let withdrawalAmountAddress = parseInt(await dbInstance.uintStorage(
      await hfInstance.stringAddress('withdrawalAddress', withdrawalAddressSet2)));

    let withdrawalAddress = await dbInstance.addressStorage(
      await hfInstance.stringAddress('withdrawalAddress', funder1));

    assert.equal(withdrawalAddress, '0x0000000000000000000000000000000000000000', 'address empty');
    assert.equal(withdrawalAmountAddress, parseInt(web3.toWei(0.475,'ether')),'address still holds withdrawal amount');
  });
});
