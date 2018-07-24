var BigNumber = require('bignumber.js');

/* Contracts  */
const ContractManager = artifacts.require("./ContractManager.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const Owned = artifacts.require("./Owned.sol");
const Database = artifacts.require("./Database.sol");
const AssetManager = artifacts.require('./AssetManager.sol');
const UserAccess = artifacts.require('./UserAccess.sol');
const MyBitToken = artifacts.require('./ERC20.sol');
const AssetCreation = artifacts.require('./AssetCreation.sol');
const Asset = artifacts.require('./Asset.sol');
const FundingHub = artifacts.require('./FundingHub.sol');
const API = artifacts.require('./API.sol');
const TokenEscrow = artifacts.require('./TokenEscrow.sol'); 

contract('Deploying and storing all contracts + validation', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];

  const assetCreator = web3.eth.accounts[3];
  const funder1 = web3.eth.accounts[4];
  const funder2 = web3.eth.accounts[5];

  const funderNotApproved = web3.eth.accounts[6];
  const contractMimik = web3.eth.accounts[7];

  const myBitPayoutAddress = web3.eth.accounts[8];
  const assetEscrowPayoutAddress = web3.eth.accounts[9];


  let api;
  let contractManagerInstance;
  let hfInstance;
  let initialVariableInstance;
  let ownedInstance;
  let dbInstance;
  let assetManagerInstance;
  let userAccessInstance;
  let myBitTokenInstance;
  let assetCreationInstance;
  let assetInstance;
  let fundingHubInstance;
  let tokenEscrowInstance; 


  var initialSupply;
  var transferAmount;
  var approvalAmount;

  let amountToBeRaised = 500; // USD
  let managerPercentage = 5;   // 5%
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

   it('Deploy API', async () => {
     api = await API.new(dbInstance.address);
     assert.equal(await api.database(), dbInstance.address);
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
     await initialVariableInstance.startDapp(myBitPayoutAddress, assetEscrowPayoutAddress);
     //--------------------Asset Creation Variables-----------------
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('myBitFoundationPercentage')), 1, 'myBitFoundationPercentage == 1');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('installerPercentage')), 99, 'installerPercentage == 97');
   });

    it('Owned deployment ', async () => {
      ownedInstance = await Owned.new(dbInstance.address);

      // Ensure all variables are set in constructor and passed
      assert.equal(await ownedInstance.database(), await dbInstance.address, 'Owned database Address assigned properly');

      await contractManagerInstance.addContract('Owned', ownedInstance.address, ownerAddr2);
      assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(ownedInstance.address))), false, 'Contract manager(Owned) to database === false');
      assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'Owned')), ownedInstance.address, 'Owned address correctly stored');
      assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', ownedInstance.address)), true, 'Owned address == true');
    });

   it('MyBitToken contract deployment ', async () => {
     initialSupply = 180000000000000000000000000;
     myBitTokenInstance = await MyBitToken.new(initialSupply, 'MyBit', 18, 'MYB');
     await contractManagerInstance.addContract('MyBitToken', myBitTokenInstance.address, ownerAddr2);
     assert.equal(await myBitTokenInstance.balanceOf(web3.eth.accounts[0]), initialSupply, 'MyBitToken - Correct initial balance to owner');
     assert.equal(await myBitTokenInstance.totalSupply(), initialSupply, 'MyBitToken - Correct total supply');
     assert.equal(await myBitTokenInstance.name(), 'MyBit', 'MyBitToken - Correct token name');
     assert.equal(await myBitTokenInstance.symbol(), 'MYB', 'MyBitToken - Correct Token symbol');
     assert.equal(await myBitTokenInstance.decimals(), 18, 'MyBitToken - Correct decimals');
   });

   it('UserAccess deployment ', async () => {
     userAccessInstance = await UserAccess.new(dbInstance.address);
     assert.equal(await userAccessInstance.database(), await dbInstance.address, 'UserAccess database Address assigned properly');
     await contractManagerInstance.addContract('UserAccess', userAccessInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(userAccessInstance.address))), false, 'Contract manager(UserAccess) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'UserAccess')), userAccessInstance.address, 'UserAccess address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', userAccessInstance.address)), true, 'UserAccess address == true');
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

   it('TokenEscrow contract deployment ', async () => {
     tokenEscrowInstance = await TokenEscrow.new(dbInstance.address, myBitTokenInstance.address);
     await contractManagerInstance.addContract('TokenEscrow', tokenEscrowInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(tokenEscrowInstance.address))), false, 'Contract manager(TokenEscrow) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'TokenEscrow')), tokenEscrowInstance.address, 'TokenEscrow address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', tokenEscrowInstance.address)), true, 'TokenEscrow address == true');
   });

   it('assetManagerInstance contract deployment ', async () => {
     assetManagerInstance = await AssetManager.new(dbInstance.address);
     await contractManagerInstance.addContract('AssetManager', assetManagerInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(assetManagerInstance.address))), false, 'Contract manager(AssetManager) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'AssetManager')), assetManagerInstance.address);
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', assetManagerInstance.address)), true);
   });

   it('Manually Approve user', async () => {
     await userAccessInstance.approveUser(assetCreator, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', assetCreator)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(funder1, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder1)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(funder2, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder2)), 2, 'Access 2 granted');
   });

   it('Transfer tokens to asset creator', async () => {
     let balanceOfOwnerBefore = await myBitTokenInstance.balanceOf(ownerAddr1);
     let balanceOfAccess1Before = await myBitTokenInstance.balanceOf(assetCreator);
     assert.equal(balanceOfOwnerBefore, initialSupply, 'Owner has full initial supply');
     assert.equal(balanceOfAccess1Before, 0, 'assetCreator has 0 initial supply');

     transferAmount = 10000 * 10**18;  // Transfer 10,000 tokens
     await myBitTokenInstance.transfer(assetCreator, transferAmount,{from:ownerAddr1}); //transfer tokens for escrow

     let balanceOfOwnerAfterTransfer = await myBitTokenInstance.balanceOf(ownerAddr1);
     let balanceOfAccess1AfterTransfer = await myBitTokenInstance.balanceOf(assetCreator);
     assert.equal(BigNumber(balanceOfOwnerAfterTransfer).eq(BigNumber(initialSupply).minus(transferAmount)),true, 'Owner has been deducted transfer amount');
     assert.equal(balanceOfAccess1AfterTransfer, transferAmount, 'assetCreator has transfer tokens amount');
   });

   it('Approve and deposit escrow', async () => {
     approvalAmount = transferAmount / 2;
     await myBitTokenInstance.approveAndCall(tokenEscrowInstance.address, approvalAmount, await hfInstance.nullBytes(), {from:assetCreator});
     let allowance = await myBitTokenInstance.allowance(assetCreator, tokenEscrowInstance.address);
     assert.equal(await api.depositedMYB(assetCreator), approvalAmount); 
     assert.equal(await myBitTokenInstance.balanceOf(tokenEscrowInstance.address), approvalAmount);
     assert.equal(await myBitTokenInstance.allowance(assetCreator, tokenEscrowInstance.address), 0); 
   });


   it('Add dummy account as a contract', async () => {
     await contractManagerInstance.addContract('TestContractMimic', ownerAddr1, ownerAddr2);
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'TestContractMimic')), ownerAddr1, 'TestContractMimic correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', ownerAddr1)), true, 'ownerAddr1 address == true');
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


   it('Create asset', async () => {
     assetType = await hfInstance.stringHash('BitcoinATM');
     installerID =  await hfInstance.stringHash('GeneralBytes');
     let ipfsHash = await hfInstance.stringHash("This is simulating an ipfs storage bucket"); 
     let amountEscrowDeposited = await api.depositedMYB(assetCreator);
     let mybUSDPrice = await api.mybUSDPrice();
     assert.notEqual(approvalAmount, 0);
     assert.notEqual(managerPercentage); 
     assert.equal(amountEscrowDeposited, approvalAmount); 
     await assetCreationInstance.newAsset(amountToBeRaised, managerPercentage, approvalAmount, installerID, assetType, 23, ipfsHash, {from:assetCreator});
     LogAssetFundingStarted = await assetCreationInstance.LogAssetFundingStarted({},{fromBlock:0, toBlock:'latest'});
   });

  it ("listen for assetID", function (done) {
    // Create coffee machine asset
    LogAssetFundingStarted.watch(
      async function(e,r){
        if(e){ done(e); }
        else {
          console.log('LogAssetFundingStarted event triggered');
          assetID = r.args._assetID;
          LogAssetFundingStarted.stopWatching();
          done(e);
        }
    });
  });

   it("check new asset information was set properly", async () => { 
     let myBPrice = await api.mybUSDPrice(); 
     let addressAssigned = await api.assetManager(assetID);
     let escrowedForAsset = await api.escrowedForAsset(assetID);

     assert.equal(approvalAmount, escrowedForAsset, 'escrow deposited');
     assert.equal(addressAssigned, assetCreator, 'asset creator assigned to asset manager');

     assert.equal(await api.amountToBeRaised(assetID), amountToBeRaised,'amountToBeRaised asset set');
     assert.equal(await api.managerPercentage(assetID), managerPercentage, 'managerPercentage asset set');
     assert.equal(await api.fundingStage(assetID), 1, 'fundingStage asset set');

   });

   it('Change funding time to 0 > acting as contract', async () => {
     await contractManagerInstance.addContract('testContract', contractMimik, ownerAddr2);
     assert.equal(await api.contractAddress('testContract'), contractMimik, 'testContract set');
     assert.equal(await api.contractExists(contractMimik), true);

     let amountToBeRaised = await dbInstance.uintStorage(await hfInstance.stringBytes("amountToBeRaised", assetID));
     let ethUSDPrice = await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPrice'));

     // Modifier Checks
     let requiresEtherModifier = null;
     try {await fundingHubInstance.fund(assetID, {from:funder1});}
     catch (error) {requiresEtherModifier = error}
     assert.notEqual(requiresEtherModifier, null, 'modifier requiresEtherModifier');

     await dbInstance.setBool(await hfInstance.stringAddress('pause', fundingHubInstance.address), true,{from:contractMimik});
     let requiresNotPaused = null;
     try {await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(0.5,'ether')});}
     catch (error) {requiresNotPaused = error}
     assert.notEqual(requiresNotPaused, null, 'modifier requiresNotPaused');
     await dbInstance.setBool(await hfInstance.stringAddress('pause', fundingHubInstance.address), false,{from:contractMimik});

     await dbInstance.setUint(await hfInstance.stringBytes('fundingStage', assetID), 0, {from:contractMimik});
     let requiresAtStageModifier = null;
     try {await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(0.5,'ether')});}
     catch (error) {requiresAtStageModifier = error}
     assert.notEqual(requiresAtStageModifier, null, 'modifier requiresAtStageModifier');
     await dbInstance.setUint(await hfInstance.stringBytes('fundingStage', assetID), 1, {from:contractMimik});

     await dbInstance.setUint(await hfInstance.stringHash('ethUSDPrice'), 0, {from:contractMimik});
     let requiresUpdatedPriceModifier = null;
     try {await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(0.5,'ether')});}
     catch (error) {requiresUpdatedPriceModifier = error}
     assert.notEqual(requiresUpdatedPriceModifier, null, 'modifier requiresUpdatedPriceModifier');
     await dbInstance.setUint(await hfInstance.stringHash('ethUSDPrice'), ethUSDPrice, {from:contractMimik});

     await dbInstance.setUint(await hfInstance.stringBytes('fundingDeadline', assetID), 0, {from:contractMimik});
     let requiresFundingLimitModifier = null;
     try {await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(0.5,'ether')});}
     catch (error) {requiresFundingLimitModifier = error}
     assert.notEqual(requiresFundingLimitModifier, null, 'modifier requiresFundingLimitModifier');
     await dbInstance.setUint(await hfInstance.stringBytes('fundingDeadline', assetID), 1545310956, {from:contractMimik}); // Thursday, December 20, 2018 1:02:36 PM

     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder1)), 2, 'Access 2 granted');

     await dbInstance.setUint(await hfInstance.stringAddress('userAccess', funder1), 0);
     let requiresOnlyApprovedModifier = null;
     try {await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(0.5,'ether')});}
     catch (error) {requiresOnlyApprovedModifier = error}
     assert.notEqual(requiresOnlyApprovedModifier, null, 'modifier requiresOnlyApprovedModifier');
     await dbInstance.setUint(await hfInstance.stringAddress('userAccess', funder1), 2);

     await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(0.25,'ether')});

     // Testing ownership == 0
     await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(0.25,'ether')});
    });

    it('Initiate refund to allow refunds', async () => {
      // Modifier Check
      let requiresFundingPeriodOverModifier = null;
      try {await fundingHubInstance.initiateRefund(assetID);}
      catch (error) {requiresFundingPeriodOverModifier = error}
      assert.notEqual(requiresFundingPeriodOverModifier, null, 'modifier requiresFundingPeriodOverModifier');

      await dbInstance.setUint(await hfInstance.stringBytes('fundingStage', assetID), 0, {from:contractMimik});
      let requiresAtStageModifier = null;
      try {await fundingHubInstance.initiateRefund(assetID);}
      catch (error) {requiresAtStageModifier = error}
      assert.notEqual(requiresAtStageModifier, null, 'modifier requiresAtStageModifier');
      await dbInstance.setUint(await hfInstance.stringBytes('fundingStage', assetID), 1, {from:contractMimik});

      await dbInstance.setUint(await hfInstance.stringBytes('fundingDeadline', assetID), 100,{from:contractMimik});
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingDeadline', assetID)),100,'fundingDeadline changed');
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID)), 1, 'Funding stage == 1');
      await fundingHubInstance.initiateRefund(assetID)
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID)), 2, 'Funding stage == 2');
    });

    it('refund', async () => {
      // Modifier Check
      await dbInstance.setBool(await hfInstance.stringAddress('pause', fundingHubInstance.address), true,{from:contractMimik});
      let requiresNotPaused = null;
      try {await fundingHubInstance.refund(assetID, {from:funder1});}
      catch (error) {requiresNotPaused = error}
      assert.notEqual(requiresNotPaused, null, 'modifier requiresNotPaused');
      await dbInstance.setBool(await hfInstance.stringAddress('pause', fundingHubInstance.address), false,{from:contractMimik});

      await dbInstance.setUint(await hfInstance.stringBytes('fundingStage', assetID), 0, {from:contractMimik});
      let requiresAtStageModifier = null;
      try {await fundingHubInstance.refund(assetID, {from:funder1});}
      catch (error) {requiresAtStageModifier = error}
      assert.notEqual(requiresAtStageModifier, null, 'modifier requiresAtStageModifier');
      await dbInstance.setUint(await hfInstance.stringBytes('fundingStage', assetID), 2, {from:contractMimik});

      let userBalanceBefore = parseInt(web3.eth.getBalance(funder1));
      var refundGasEstimate = parseInt(await fundingHubInstance.refund.estimateGas(assetID, {from:funder1})).toFixed(7) / 10000000;
      let sharesBefore = await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits',assetID,funder1));

      // Require check
      await dbInstance.setUint(await hfInstance.stringBytesAddress("ownershipUnits", assetID, funder1), 0, {from:contractMimik});
      let ownershipUnitsGreaterThanZeroRequire = null;
      try {await fundingHubInstance.refund(assetID, {from:funder1});}
      catch (error) {ownershipUnitsGreaterThanZeroRequire = error}
      assert.notEqual(ownershipUnitsGreaterThanZeroRequire, null, 'require ownershipUnitsGreaterThanZeroRequire');
      await dbInstance.setUint(await hfInstance.stringBytesAddress("ownershipUnits", assetID, funder1), sharesBefore, {from:contractMimik});

      await fundingHubInstance.refund(assetID, {from:funder1});
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares',assetID,funder1)),0,'shares deleted');
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised',assetID)),0,'amountRaised reduced');

      let shouldBeBalanceAfter = (userBalanceBefore - parseInt(web3.toWei(refundGasEstimate,'ether'))) + parseInt(web3.toWei(0.5,'ether'));
      //assert.equal(parseInt(web3.eth.getBalance(funder1)), shouldBeBalanceAfter, 'refund successful');
    });

    it('destroy', async () =>{
      // Modifier Check
      let requiresOwnerModifier;
      try {await fundingHubInstance.destroy(ownerAddr1, funder2, {from:funder1});}
      catch (error) {requiresOwnerModifier = error}
      assert.notEqual(requiresOwnerModifier, null, 'modifier requiresOwnerModifier');

      // Require check
      let requireFunctionIntiator;
      try {await fundingHubInstance.destroy(ownerAddr1, funder2, {from:ownerAddr1});}
      catch (error) {requireFunctionIntiator = error}
      assert.notEqual(requireFunctionIntiator, null, 'modifier requireFunctionIntiator');

      await ownedInstance.setFunctionAuthorized(fundingHubInstance.address, 'destroy', await hfInstance.addressHash(funder2),{from:ownerAddr1});
      await fundingHubInstance.destroy(ownerAddr1,funder2,{from:ownerAddr3});
    });
});
