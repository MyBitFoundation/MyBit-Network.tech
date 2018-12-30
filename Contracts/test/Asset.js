var BigNumber = require('bignumber.js');

/* Contracts  */
const Database = artifacts.require("./Database.sol");
const ContractManager = artifacts.require("./ContractManager.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const API = artifacts.require("./API.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const Owned = artifacts.require("./Owned.sol");
const AssetManager = artifacts.require('./AssetManager.sol');
const UserAccess = artifacts.require('./UserAccess.sol');
const MyBitToken = artifacts.require('./MyBitToken.sol');
const TokenBurn = artifacts.require('./TokenBurn.sol');
const AssetCreation = artifacts.require('./AssetCreation.sol');
const Asset = artifacts.require('./Asset.sol');
const FundingHub = artifacts.require('./FundingHub.sol');


contract('Deploying and storing all contracts + validation', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];

  const assetCreator = web3.eth.accounts[3];
  const secondAssetCreator = web3.eth.accounts[4];

  const funder1 = web3.eth.accounts[5];
  const funder2 = web3.eth.accounts[6];
  const funder3 = web3.eth.accounts[7];

  const myBitPayoutAddress = web3.eth.accounts[8];
  const assetEscrowPayoutAddress = web3.eth.accounts[9];

  let dbInstance;
  let contractManagerInstance;
  let hfInstance;
  let api;
  let initialVariableInstance;
  let ownedInstance;
  let assetManagerInstance;
  let userAccessInstance;
  let myBitTokenInstance;
  let assetCreationInstance;
  let assetInstance;
  let fundingHubInstance;



  var initialSupply;
  var transferAmount;
  var approvalAmount;

  let amountToBeRaised = 500; // USD
  let managerPercentage = 10;   // 5%
  let assetID;
  let installerID;
  let assetType;
  let amountToFundWEI;


  // EVENTS
  let LogAssetFundingStarted;


  it("Owners should be assigned", async () => {
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
     hfInstance = await HashFunctions.new();
     api = await API.new(dbInstance.address);

     // Database Owners assigned properly
     assert.equal(await api.isOwner(ownerAddr1), true, 'Owner 1 assigned properly');
     assert.equal(await api.isOwner(ownerAddr2), true, 'Owner 2 assigned properly');
     assert.equal(await api.isOwner(ownerAddr3), true, 'Owner 3 assigned properly');
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
   });

   it('Initialize InitialVariables  variables via startDapp', async () => {
     await initialVariableInstance.startDapp(myBitPayoutAddress, assetEscrowPayoutAddress);
     //--------------------Asset Creation Variables-----------------
   });

    it('Owned deployment ', async () => {
      ownedInstance = await Owned.new(dbInstance.address);
      // Ensure all variables are set in constructor and passed
      assert.equal(await ownedInstance.database(), await dbInstance.address, 'Owned database Address assigned properly');
      await contractManagerInstance.addContract('Owned', ownedInstance.address, ownerAddr2);
    });

    it ("Add owner as contract to manually adjust variables", async() => {
        await contractManagerInstance.addContract('Owner', accounts[0], ownerAddr2);
    });

   it('MyBitToken contract deployment ', async () => {
     initialSupply = 180000000000000000000000000;
     myBitTokenInstance = await MyBitToken.new(initialSupply, 'MyBit', 18, 'MYB');
     await contractManagerInstance.addContract('MyBitToken', myBitTokenInstance.address, ownerAddr2);
   });

   it('UserAccess deployment ', async () => {
     userAccessInstance = await UserAccess.new(dbInstance.address);
     assert.equal(await userAccessInstance.database(), await dbInstance.address, 'UserAccess database Address assigned properly');
     await contractManagerInstance.addContract('UserAccess', userAccessInstance.address, ownerAddr2);
   });

   it('AssetCreation deployment', async () => {
     assetCreationInstance = await AssetCreation.new(dbInstance.address);
     await contractManagerInstance.addContract('AssetCreation', assetCreationInstance.address, ownerAddr2);
     // Funding Hub contract
     fundingHubInstance = await FundingHub.new(dbInstance.address);
     await contractManagerInstance.addContract('FundingHub', fundingHubInstance.address, ownerAddr2);
     // Asset Contract
     assetInstance = await Asset.new(dbInstance.address);
     await contractManagerInstance.addContract('Asset', assetInstance.address, ownerAddr2);

   });


   it('Manually Approve user', async () => {
     await userAccessInstance.approveUser(assetCreator, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', assetCreator)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(secondAssetCreator, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', secondAssetCreator)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(funder1, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder1)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(funder2, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder2)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(funder3, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder3)), 2, 'Access 2 granted');
   });


   it('Set ETH and MYB prices in USD', async () => {
     let ethPrice = 470;
     let mybPrice = 98;   // floating point 10^3
     await initialVariableInstance.setDailyPrices(ethPrice, mybPrice);
     // Check values set properly
     assert.equal(await api.ethUSDPrice(), ethPrice);
     assert.equal(await api.mybUSDPrice(), mybPrice);

     let priceExpiration = await api.priceTimeToExpiration();
     assert.notEqual(priceExpiration, 0);
   });

   it('Set up asset', async () => {
     assetID = await hfInstance.stringHash('Assety');
     await dbInstance.setUint(await hfInstance.stringBytes("assetIncome", assetID), 0);
     await dbInstance.setUint(await hfInstance.stringBytes("amountRaised", assetID), 100);
     await dbInstance.setUint(await hfInstance.stringBytes("amountToBeRaised", assetID), amountToBeRaised);
     await dbInstance.setUint(await hfInstance.stringBytesAddress("ownershipUnits", assetID, funder1), 50);
     await dbInstance.setUint(await hfInstance.stringBytesAddress("ownershipUnits", assetID, funder2), 50);
     await dbInstance.setUint(await hfInstance.stringBytes("fundingStage", assetID), 4);
     await dbInstance.setAddress(await hfInstance.stringBytes("assetManager", assetID), assetCreator);
     await dbInstance.setUint(await hfInstance.stringBytes("managerPercentage", assetID), managerPercentage);
     assert.equal(await api.fundingStage(assetID), 4, 'Stage set to 4, ready for payments');
   });


  it('Asset recieves income', async () => {
    amountToFundWEI = 100;
    managerCut = (managerPercentage * amountToFundWEI) / 100;
    assert.equal(managerCut, 10);
    await assetInstance.receiveIncome(assetID, '', {value:amountToFundWEI});
    console.log("asset income is ", Number(await api.assetIncome(assetID)));
    assert.equal(await api.assetIncome(assetID), amountToFundWEI - managerCut);
  });


   let assetBalance;

   it('Manager withdraw income', async() => {
      let managerOwed = await api.assetManagerIncome(assetCreator);
      assetBalance = web3.eth.getBalance(assetInstance.address);
      await assetInstance.withdrawManagerIncome(assetID, {from: assetCreator});
      assert.equal(assetBalance - managerOwed, web3.eth.getBalance(assetInstance.address));
   });

   it('Withdraw income funder 1', async () => {

     let funderOneOwed = await api.getAmountOwed(assetID, funder1);
     console.log("Funder one owed: ", Number(funderOneOwed));
     console.log("funder one owed: ", Number(await assetInstance.getAmountOwed(assetID, funder1)));
     assert.equal(45, funderOneOwed);
     assetBalance = web3.eth.getBalance(assetInstance.address);
     await assetInstance.withdraw(assetID, {from:funder1});
     assert.equal(assetBalance - funderOneOwed, web3.eth.getBalance(assetInstance.address));

   });

   it('Withdraw income funderTwo', async() => {
       let funderTwoOwed = await api.getAmountOwed(assetID, funder2);
       assert.equal(45, funderTwoOwed);
       assetBalance = web3.eth.getBalance(assetInstance.address);
       await assetInstance.withdraw(assetID, {from:funder2});
       assert.equal(assetBalance - funderTwoOwed, web3.eth.getBalance(assetInstance.address));
   });

   it('Asset recieves income (2)', async () => {
     // amountToFundWEI = BigNumber(Math.floor((Math.random() * 1000) + 1));
     amountToFundWEI = 11;
     assetBalance = web3.eth.getBalance(assetInstance.address);
     console.log("asset balance before ", Number(assetBalance));
     await assetInstance.receiveIncome(assetID, '', {value:amountToFundWEI});
     let assetBalanceAfter = web3.eth.getBalance(assetInstance.address);
     console.log("sending wei to asset ", Number(amountToFundWEI));
     console.log("asset balance after ", Number(assetBalanceAfter));
     assert.equal(assetBalance + amountToFundWEI, Number(assetBalanceAfter));
   });

   it('Withdraw income', async () => {
     assetBalance = web3.eth.getBalance(assetInstance.address);
     let fundersOwed = await api.getAmountOwed(assetID, funder1) * 2;
     await assetInstance.withdraw(assetID, {from:funder1});
     await assetInstance.withdraw(assetID, {from:funder2});
     managerCut = managerCut * 2;
     assert.equal(assetBalance - fundersOwed, web3.eth.getBalance(assetInstance.address));
     console.log("manager cut: ", managerCut);
     console.log("balance of asset ", web3.eth.getBalance(assetInstance.address));
 });

 it('Asset recieves income (3)', async () => {
   // amountToFundWEI = BigNumber(Math.floor((Math.random() * 1000) + 1));
   amountToFundWEI = Math.floor((Math.random() * 1000) + 1);
   assetBalance = web3.eth.getBalance(assetInstance.address);
   console.log("asset balance before ", Number(assetBalance));
   await assetInstance.receiveIncome(assetID, '', {value:amountToFundWEI});
   let assetBalanceAfter = web3.eth.getBalance(assetInstance.address);
   console.log("sending wei to asset ", Number(amountToFundWEI));
   console.log("asset balance after ", Number(assetBalanceAfter));
 });

 it('Withdraw income', async () => {
   assetBalance = web3.eth.getBalance(assetInstance.address);
   let fundersOwed = await api.getAmountOwed(assetID, funder1) * 2;
   await assetInstance.withdraw(assetID, {from:funder1});
   await assetInstance.withdraw(assetID, {from:funder2});
   managerCut = managerCut * 2;
   assert.equal(assetBalance - fundersOwed, web3.eth.getBalance(assetInstance.address));
   console.log("manager cut: ", managerCut);
   console.log("balance of asset ", web3.eth.getBalance(assetInstance.address));
});

it('stress test', async() => {
    let balanceBefore = web3.eth.getBalance(assetInstance.address);
    for (let i = 0; i < 100; i++){
        let newIncome = Math.floor((Math.random() * 1000) + 2);
        await assetInstance.receiveIncome(assetID, '', {value:newIncome});
        await assetInstance.withdraw(assetID, {from:funder1});
        await assetInstance.withdraw(assetID, {from:funder2});
    }
    await assetInstance.withdrawManagerIncome(assetID);
    assert.equal(balanceBefore, web3.eth.getBalance(assetInstance.address));
});
});
