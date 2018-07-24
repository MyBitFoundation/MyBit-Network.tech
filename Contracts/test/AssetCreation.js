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
const TokenEscrow = artifacts.require('./TokenEscrow.sol'); 
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
  let tokenEscrowInstance; 
  let assetCreationInstance;
  let assetInstance;
  let fundingHubInstance;



  var initialSupply;
  var transferAmount;
  var approvalAmount;

  let amountToBeRaised = 500; // USD
  let managerPercentage = 5;   // 5%
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

  it('AssetManager contract deployment ', async () => {
     assetManagerInstance = await AssetManager.new(dbInstance.address);
     await contractManagerInstance.addContract('AssetManager', assetManagerInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(assetManagerInstance.address))), false, 'Contract manager(AssetManager) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'AssetManager')), assetManagerInstance.address, 'AssetManager address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', assetManagerInstance.address)), true, 'AssetManager address == true');
   });

   it('TokenEscrow contract deployment ', async () => {
     tokenEscrowInstance = await TokenEscrow.new(dbInstance.address, myBitTokenInstance.address);
     await contractManagerInstance.addContract('TokenEscrow', tokenEscrowInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(tokenEscrowInstance.address))), false, 'Contract manager(TokenEscrow) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'TokenEscrow')), tokenEscrowInstance.address, 'TokenEscrow address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', tokenEscrowInstance.address)), true, 'TokenEscrow address == true');
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

   it('Approve escrow to transfer', async () => {
     approvalAmount = transferAmount / 2;
     await myBitTokenInstance.approve(tokenEscrowInstance.address, approvalAmount,{from:assetCreator});
     let allowance = await myBitTokenInstance.allowance(assetCreator, tokenEscrowInstance.address);
     assert.equal(allowance, approvalAmount, 'Approval granted');
   });

   it('Deposit Escrow', async () => {
      await tokenEscrowInstance.depositEscrow(approvalAmount,{from:assetCreator});
      assert.equal(await api.depositedMYB(assetCreator), approvalAmount); 
      assert.equal(await myBitTokenInstance.balanceOf(tokenEscrowInstance.address), approvalAmount);
      assert.equal(await myBitTokenInstance.allowance(assetCreator, tokenEscrowInstance.address), 0); 
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
     installerID =  await hfInstance.stringHash('installerID');
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

  it('Fund asset', async () => {
    let amountToBeRaised = await api.amountToBeRaised(assetID); 
    let ethUSDPrice = await api.ethUSDPrice();

    let halfOfUSDValueInEth = ((amountToBeRaised / ethUSDPrice) / 2);
    console.log("amount of ETHER to send is");
    console.log(halfOfUSDValueInEth); 

    await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(halfOfUSDValueInEth,'ether')});
    await fundingHubInstance.fund(assetID, {from:funder2, value:web3.toWei(halfOfUSDValueInEth,'ether')});
  });

  it('Asset transition to stage 4', async () => {
    assert.equal(await api.fundingStage(assetID), 3, 'Funding stage == 3');
    await fundingHubInstance.payout(assetID);
    assert.equal(await api.fundingStage(assetID), 4, 'Stage set to 4, ready for payments');
  });

  it('Asset recieves income', async () => {
    amountToFundWEI = 10**18;
    managerCut = (managerPercentage * amountToFundWEI) / 100; 
    await assetInstance.receiveIncome(assetID, '', {value:amountToFundWEI});
    console.log(await api.assetIncome(assetID)); 
    assert.equal(await api.assetIncome(assetID), amountToFundWEI - managerCut); 
  });


   it('Withdraw income', async () => {
     let funder1OwnershipUnits = await api.ownershipUnits(assetID, funder1);
     let amountRaised = await api.amountRaised(assetID);
     let assetIncome = await api.assetIncome(assetID);
     let payment = BigNumber(assetIncome).times(funder1OwnershipUnits); 
     payment = BigNumber(payment).div(amountRaised); 
     assert.equal(payment * 2, (amountToFundWEI - managerCut)); 


     let withdrawGasEstimate = await assetInstance.withdraw.estimateGas(assetID, {from:funder1});
     let balanceOfUserBeforeWithdrawal = web3.eth.getBalance(funder1);
     let amountOwed = await api.getAmountOwed(assetID, funder1);

     assert.equal(BigNumber(amountOwed).eq(payment), true, 'amount owed correct');

     await assetInstance.withdraw(assetID, {from:funder1});


     let totalPaidToFundersAfter = await api.totalPaidToFunders(assetID); 
     let totalPaidToFunderAfter = await api.totalPaidToFunder(assetID, funder1);
     let balanceOfUserAfterWithdrawal = web3.eth.getBalance(funder1);
     let shouldBeBalanceAfter = balanceOfUserBeforeWithdrawal - web3.toWei(withdrawGasEstimate,'ether');

     assert.equal(BigNumber(totalPaidToFunderAfter).eq(payment), true, 'payment added to total funder paid');
     assert.equal(BigNumber(totalPaidToFundersAfter).eq(payment), true,  'payment added to total funders paid ');

     await assetInstance.withdraw(assetID, {from:funder2});
   });

   // TODO: Continue tests after breaing changes
   it('Remove Asset', async () => {
     await ownedInstance.setFunctionAuthorized(assetCreationInstance.address, 'removeAsset', assetID,{from:ownerAddr1});
     await assetCreationInstance.removeAsset(assetID, ownerAddr1,{from:ownerAddr3});
   });

   // it('Create Asset With No Escrow', async () => {
   //   let secondAssetCreator = web3.eth.accounts[6];
   //   let managerPercentage = 5;
   //   assetType = await hfInstance.stringHash('EthereumATM');
   //   installerID =  await hfInstance.stringHash('ATMInstallers');
   //   assetID = await hfInstance.stringHash('RaNdOm ID');
   //   assert.equal(0, await dbInstance.uintStorage(await hfInstance.stringAddress('managerAmountDeposited', secondAssetCreator)));
   //   // Send transaction with no escrow
   //   await assetCreationInstance.newAsset(assetID, amountToBeRaised, managerPercentage, 0, installerID, assetType, {from:secondAssetCreator});

   //   let myBPrice = await dbInstance.uintStorage(await hfInstance.stringHash('mybUSDPrice'));
   //   let addressAssigned = await dbInstance.addressStorage(await hfInstance.stringBytes("assetManager", assetID));
   //   let managerEscrowedAmount = await dbInstance.uintStorage(await hfInstance.stringAddress('lockedForAsset', secondAssetCreator));
   // });

   // it('Change funding Time ', async () => {
   //   let defaultTime = 3000;
   //   let newDefaultTime = 1000;
   //   assert.equal(parseInt(await assetCreationInstance.fundingTime()), defaultTime, 'default time == 3000');
   //   await assetCreationInstance.changeFundingTime(newDefaultTime);
   //   assert.equal(parseInt(await assetCreationInstance.fundingTime()), newDefaultTime, 'default time == 1000');
   // });

   // it('Change Funding percentages', async () => {
   //   await ownedInstance.setFunctionAuthorized(assetCreationInstance.address, 'changeFundingPercentages', await hfInstance.uintUint(50,50),{from:ownerAddr1});
   //   await assetCreationInstance.changeFundingPercentages(50, 50, ownerAddr1, {from:ownerAddr2});
   //   assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringHash('myBitFoundationPercentage'))), 50, 'myBitFoundationPercentage updated to 50');
   //   assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringHash('installerPercentage'))), 50, 'installerPercentage updated to 25');
   // });

   // it('Destroy Asset Contract', async () => {
   //   await ownedInstance.setFunctionAuthorized(assetInstance.address, 'destroy', await hfInstance.addressHash(funder2),{from:ownerAddr1});
   //   await assetInstance.destroy(ownerAddr1,funder2,{from:ownerAddr3});
   // });

   // it('Destroy AssetCreation` Contract', async () => {
   //   await ownedInstance.setFunctionAuthorized(assetCreationInstance.address, 'destroy', await hfInstance.addressHash(funder2),{from:ownerAddr1});
   //   await assetCreationInstance.destroy(ownerAddr1,funder2,{from:ownerAddr3});
   // });
 });
