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
const Staking = artifacts.require('./Staking.sol'); 


contract('Deploying and storing all contracts + validation', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];

  const assetCreator = web3.eth.accounts[3];
  const funder1 = web3.eth.accounts[4];
  const funder2 = web3.eth.accounts[5];

  // addresses for validation
  const funderNotApproved = web3.eth.accounts[6];
  const staker = web3.eth.accounts[7];
  const contractMimik = web3.eth.accounts[8];

  const myBitPayoutAddress = web3.eth.accounts[8];
  const assetEscrowPayoutAddress = web3.eth.accounts[6];

  let contractManagerInstance;
  let hfInstance;
  let api;
  let initialVariableInstance;
  let ownedInstance;
  let dbInstance;
  let assetManagerInstance;
  let stakingInstance;
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
  let escrowID;
  let installerID;
  let assetType;

  let amountEscrowedForAsset;
  let stakingAmount; 
  let stakingBlockCreation; 

  let LogEscrowRequester; 
  let LogEscrowUnlocked; 

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

    await contractManagerInstance.addContract('testContract', contractMimik, ownerAddr2);
    assert.equal(await api.contractAddress('testContract'), contractMimik, 'testContract set');

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

   it('Staking deployment', async () => { 
   	 stakingInstance = await Staking.new(dbInstance.address, myBitTokenInstance.address); 
   	 await contractManagerInstance.addContract('Staking', stakingInstance.address, ownerAddr2); 
   	 assert.equal(await api.contractExists(stakingInstance.address), true);
   	 assert.equal(await api.contractAddress("Staking"), stakingInstance.address);   
   })

   it('Manually Approve user', async () => {
     await userAccessInstance.approveUser(staker, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', staker)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(assetCreator, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', assetCreator)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(funder1, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder1)), 2, 'Access 2 granted');

     await userAccessInstance.approveUser(funder2, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder2)), 2, 'Access 2 granted');
   });

   it('Transfer tokens to user', async () => {
     let balanceOfOwnerBefore = await myBitTokenInstance.balanceOf(ownerAddr1);
     let balanceOfAccess1Before = await myBitTokenInstance.balanceOf(assetCreator);
     assert.equal(balanceOfOwnerBefore, initialSupply, 'Owner has full initial supply');
     assert.equal(balanceOfAccess1Before, 0, 'assetCreator has 0 initial supply');

     transferAmount = 100000 * 10**18;  // Transfer 100,000 tokens
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
     // Modifier Check
     let funderNotApprovedModifier = null;
     try {await tokenEscrowInstance.depositEscrow(500,{from:funderNotApproved});}
     catch (error) {funderNotApprovedModifier = error}
     assert.notEqual(funderNotApprovedModifier, null, 'modifier funderNotApproved');
     // Require check
     let depositEscrowRequire = null;
     try {await tokenEscrowInstance.depositEscrow(BigNumber(approvalAmount).plus(1),{from:assetCreator});}
     catch (error) {depositEscrowRequire = error}

     assert.notEqual(depositEscrowRequire,null, 'deposit require too many tokens');
     await tokenEscrowInstance.depositEscrow(approvalAmount,{from:assetCreator});
     let managerAmountDeposited = await api.depositedMYB(assetCreator);
     assert.equal(managerAmountDeposited, approvalAmount, 'Account escrow value updated');
   });

   /*
      Setting this manually as oraclizehub has been tested and is fully functional,
      if we were not to set it manually the test would rely on events and results
      in unecessary work.  In this test we are testing the asset manager  functionality,
      not that of OraclizeHub which can be seen in; TestOraclize.js .
   */
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
     installerID =  await hfInstance.stringHash('installerID');
     let ipfsHash = await hfInstance.stringHash("This is simulating an ipfs storage bucket"); 
     let amountEscrowDeposited = await api.depositedMYB(assetCreator);
     let mybUSDPrice = await api.mybUSDPrice();
     assert.notEqual(approvalAmount, 0);
     assert.notEqual(managerPercentage); 
     assert.equal(amountEscrowDeposited, approvalAmount); 
     await assetCreationInstance.newAsset(amountToBeRaised, managerPercentage, approvalAmount, installerID, assetType, 23, ipfsHash, {from:assetCreator});
     amountEscrowedForAsset = approvalAmount;
     LogAssetFundingStarted = await assetCreationInstance.LogAssetFundingStarted({},{fromBlock:0, toBlock:'latest'});
   });

    it ("listen for assetID", function (done) {
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
     assert.equal(await api.assetStaker(assetID), await hfInstance.nullAddress()); 

     assert.equal(await api.amountToBeRaised(assetID), amountToBeRaised,'amountToBeRaised asset set');
     assert.equal(await api.managerPercentage(assetID), managerPercentage, 'managerPercentage asset set');
     assert.equal(await api.fundingStage(assetID), 1, 'fundingStage asset set');

   });


   it('Fund asset', async () => {
     let amountToBeRaised = await dbInstance.uintStorage(await hfInstance.stringBytes("amountToBeRaised", assetID));
     let ethUSDPrice = await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPrice'));

     let halfOfUSDValueInEth = ((amountToBeRaised / ethUSDPrice) / 2);

     await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(halfOfUSDValueInEth,'ether')});
     await fundingHubInstance.fund(assetID, {from:funder2, value:web3.toWei(halfOfUSDValueInEth,'ether')});
    });

    it('Asset transition to stage 4', async () => {
     assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID))), 3, 'Funding stage == 3');
     await fundingHubInstance.payout(assetID);
     assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID))), 4, 'Stage set to 4, ready for payments');
    });

   it('Asset recieves funding', async () => {
     let etherAmountToFund = 1;
     await assetInstance.receiveIncome(assetID, '', {value:web3.toWei(etherAmountToFund,'ether')});
   });


  it('attempt to withdrawToken while asset is live ', async () => {
    let unlockedBalance = await api.depositedMYB(assetCreator);
    assert.equal(unlockedBalance, 0); 
    let escrowedBalance = await api.escrowedMYB(assetCreator); 
    assert.equal(escrowedBalance, approvalAmount); 

    // Try to withdraw from non approved user 
    let funderNotApprovedModifier = null;
    try {await tokenEscrowInstance.withdrawToken(500,{from:funderNotApproved});}
    catch (error) {funderNotApprovedModifier = error}
    assert.notEqual(funderNotApprovedModifier, null, 'modifier funderNotApproved');

    let contractBalance = await myBitTokenInstance.balanceOf(tokenEscrowInstance.address);

    // Try to withdraw too many tokens. Expect EVM error. 
    let unlockedBalanceTooMuch = null;
    try {await tokenEscrowInstance.withdrawToken(BigNumber(escrowedBalance),{from:assetCreator});}
    catch (error) {unlockedBalanceTooMuch = error}
    assert.notEqual(unlockedBalanceTooMuch, null, 'amount too high for unlocked balance');    


    let withdrawTooEarly; 
    try { await tokenEscrowInstance.withdrawToken(escrowedBalance,{from:assetCreator}); } 
    catch (error) { withdrawTooEarly = error; }
    assert.notEqual(withdrawTooEarly, null); 
    let tokenBalanceManager = await myBitTokenInstance.balanceOf(assetCreator);
    let escrowBalance = await myBitTokenInstance.balanceOf(tokenEscrowInstance.address);

   });

  it ('Kill asset', async () => { 
    await ownedInstance.setFunctionAuthorized(assetCreationInstance.address, "removeAsset", assetID); 
    await assetCreationInstance.removeAsset(assetID, ownerAddr1, {from: ownerAddr2}); 
    assert.equal(await api.fundingStage(assetID), 5); 

  }); 

   // AssetManager can now withdraw tokens
   it('Unlock escrow', async () => {
     await assetManagerInstance.unlockEscrow(assetID,{from:assetCreator});
     let managerAmountEscrowed = await api.escrowedMYB(assetCreator); 
     let managerAmountDeposited = await api.depositedMYB(assetCreator);

     assert.equal(managerAmountEscrowed, 0, 'unlocked funds');
     assert.equal(managerAmountDeposited, amountEscrowedForAsset, 'funds back in deposit - can withdraw');
     assert.equal(await api.escrowedForAsset(assetID), 0); 
   });

   it('Withdraw Deposited MYB', async () => { 
    // Try to withdraw too many tokens. Expect EVM error. 
    let unlockedBalanceTooMuch = null;
    try {await tokenEscrowInstance.withdrawToken(BigNumber(amountEscrowedForAsset).plus(1),{from:assetCreator});}
    catch (error) {unlockedBalanceTooMuch = error}
    assert.notEqual(unlockedBalanceTooMuch, null, 'amount too high for unlocked balance');  

    // Withdraw all deposited tokens
    let assetManagerBalanceMYB = await myBitTokenInstance.balanceOf(tokenEscrowInstance.address); 
    let mybBalanceBefore = await myBitTokenInstance.balanceOf(assetCreator); 
    await tokenEscrowInstance.withdraw(amountEscrowedForAsset, {from: assetCreator});

    console.log(await myBitTokenInstance.balanceOf(assetCreator)); 
    console.log(amountEscrowedForAsset);
    console.log(mybBalanceBefore); 
    assert.equal(BigNumber(await myBitTokenInstance.balanceOf(assetCreator)).eq(BigNumber(mybBalanceBefore).plus(amountEscrowedForAsset)), true); 

    // Try to withdraw a second time 
    let withdrawlAgain = null;
    try {await tokenEscrowInstance.withdrawToken(BigNumber(amountEscrowedForAsset),{from:assetCreator});}
    catch (error) {withdrawlAgain = error}
    assert.notEqual(withdrawlAgain, null, 'amount too high for unlocked balance');  

   }); 

   it('Request escrow staking', async () => {
     assetType = await hfInstance.stringHash('Robot');
     installerID =  await hfInstance.stringHash('RobotINC');
     managerPercentage = 7; 
     stakingAmount = 10000 * 10**18;   // 10,000 MYB 
     incomeShare = 50;     // Split income 50/50
     amountToBeRaised = 20000; 
     await stakingInstance.requestEscrowLending(stakingAmount, incomeShare, managerPercentage, amountToBeRaised, installerID, assetType, {from:assetCreator});
     amountEscrowedForAsset = amountToBeRaised;
     LogEscrowRequester = await stakingInstance.LogEscrowRequester({},{fromBlock:0, toBlock:'latest'});
   });

    it ("listen for creation block", function (done) {
      LogEscrowRequester.watch(
        async function(e,r){
          if(e){ done(e); }
          else {
            console.log('LogAssetFundingStarted event triggered');
            stakingBlockCreation = r.args._blockAtCreation;
            escrowID = r.args._escrowID;          // escrowID == escrowID
            LogEscrowRequester.stopWatching();
            done(e);
          }
      });
    });

    it ("Give staker tokens and deposit into tokenEscrowInstance", async () => { 
    	await myBitTokenInstance.transfer(staker, stakingAmount); 
    	assert.equal(await myBitTokenInstance.balanceOf(staker), stakingAmount); 
    	await myBitTokenInstance.approveAndCall(tokenEscrowInstance.address, stakingAmount, await hfInstance.nullBytes(), {from: staker}); 

    	assert.equal(await api.depositedMYB(staker), stakingAmount); 
    	assert.equal(await myBitTokenInstance.balanceOf(tokenEscrowInstance.address), stakingAmount); 

    });

    it ("Accept escrow lending with wrong parameters", async () => { 
      let escrowAccepted = null;
      try { await stakingInstance.approveEscrowLending(assetCreator, stakingAmount, incomeShare + 1, managerPercentage, amountToBeRaised, installerID, assetType, stakingBlockCreation, {from: staker}); }
      catch (error) {escrowAccepted = error}
      assert.notEqual(escrowAccepted, null, 'acceptance should fail'); 
    }); 

    it ("Accept escrow lending conditions from staker", async () => { 
    	assert.notEqual(await api.escrowExpiration(escrowID), 0);
      assert.notEqual(stakingBlockCreation, 0); 
    	await stakingInstance.approveEscrowLending(assetCreator, stakingAmount, incomeShare, managerPercentage, amountToBeRaised, installerID, assetType, stakingBlockCreation, {from: staker}); 
      LogEscrowStaked = await stakingInstance.LogEscrowStaked({Block:0, toBlock:'latest'});
    }); 

    it ("listen for staking event", function (done) {
      LogEscrowStaked.watch(
        async function(e,r){
          if(e){ done(e); }
          else {
            console.log('LogEscrowStaked event triggered');
            console.log("old assetID is " + assetID); 
            assetID = r.args._assetID;
            stakerAddr = r.args._staker; 
            assert.equal(r.args._amountMYB, stakingAmount); 
            assert.equal(await api.assetStaker(assetID), staker); 
            console.log("new assetID address  " + assetID); 
            console.log(await api.stakerIncomeShare(assetID)); 
            console.log(stakerAddr); 
            assert.equal(await api.stakerIncomeShare(assetID), incomeShare); 
            LogEscrowStaked.stopWatching();
            done(e);
          }
      });
    });

    it ("create asset", async () => { 
     let amountEscrowedMYB = await api.escrowedMYB(staker);
     let mybUSDPrice = await api.mybUSDPrice();
     let currentTimestamp = await hfInstance.currentTime(); 
     let ipfsHash = await hfInstance.stringHash("This is simulating an ipfs storage bucket"); 
     assert.notEqual(stakingAmount, 0);
     assert.equal(staker, await api.assetStaker(assetID)); 
     assert.equal(amountEscrowedMYB, stakingAmount); 
     await assetCreationInstance.newAsset(amountToBeRaised, managerPercentage, stakingAmount, installerID, assetType, stakingBlockCreation, ipfsHash, {from:assetCreator});
     assert.equal(await api.fundingStage(assetID), 1); 
    }); 


    it ("fund and payout asset", async () => { 
      let ethUSDPrice = await api.ethUSDPrice();
      let halfOfUSDValueInEth = ((amountToBeRaised / ethUSDPrice) / 2);


      await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(halfOfUSDValueInEth,'ether')});
      await fundingHubInstance.fund(assetID, {from:funder2, value:web3.toWei(halfOfUSDValueInEth,'ether')});
      await fundingHubInstance.fund(assetID, {from:funder2, value:web3.toWei(halfOfUSDValueInEth,'ether')});

      assert.equal(await api.fundingStage(assetID), 3); 
      await fundingHubInstance.payout(assetID); 
      assert.equal(await api.fundingStage(assetID), 4); 
    }); 

    it ("asset receives income ROI", async () => { 
      let ethUSDPrice = await api.ethUSDPrice(); 
      let managerIncomeBefore = await api.managerIncome(assetCreator); 
      halfROI = (amountToBeRaised / ethUSDPrice) / 2; 
      halfROIWEI = halfROI * 10**18; 
      managerAmount = BigNumber(await api.managerPercentage(assetID)).times(halfROIWEI).div(100); 
      assert.equal(await api.stakerIncomeShare(assetID), 50); 

      await assetInstance.receiveIncome(assetID, await hfInstance.stringHash("July payment"), {value: halfROIWEI}); 
      managerIncome = BigNumber(await api.managerIncome(assetCreator)).minus(managerIncomeBefore);
      stakerIncome = await api.managerIncome(staker); 
      let managerIncomeCheck = BigNumber(managerIncome).plus(stakerIncome); 
      assert.equal(BigNumber(managerAmount).eq(managerIncomeCheck), true); 
      assert.equal(BigNumber(managerIncome).eq(stakerIncome), true); 

      assert.equal(BigNumber(await api.assetIncome(assetID)).eq(BigNumber(halfROIWEI).minus(managerAmount)), true); 

    });

    // TODO: Check WEI balances
    it ("Staker withdraws funds", async () => { 
      let managerIncome = await api.managerIncome(assetCreator); 
      let stakerIncome = await api.managerIncome(staker); 
      assert.notEqual(managerIncome, 0);
      assert.notEqual(stakerIncome, 0); 

      await assetInstance.withdrawManagerIncome(assetID, {from: assetCreator}); 
      assert.equal(await api.managerIncome(assetCreator), 0);
      await assetInstance.withdrawManagerIncome(assetID, {from: staker})
      assert.equal(await api.managerIncome(stakerIncome), 0); 

    })

    it ("AssetManager tries to withdraw staked tokens", async () => { 
      let withdrawAttempt = null;
      try { await assetManagerInstance.unlockEscrow(assetID, {from: assetCreator}); } 
      catch (error) { withdrawAttempt = error; }
      assert.notEqual(withdrawAttempt, null); 

    });

    it ("Withdraw MYB escrow tokens up to 25% ROI", async () => { 
      let escrowedForAsset = await api.escrowedForAsset(assetID);
      let stakerEscrowedMYB = await api.escrowedMYB(staker); 
      let assetIncome = await api.assetIncome(assetID); 
      let amountRaised = await api.amountRaised(assetID); 
      let percentageROI = BigNumber(assetIncome).times(100).div(amountRaised);
      assert.equal(BigNumber(escrowedForAsset).eq(stakerEscrowedMYB), true); 
      let unlockAmount = BigNumber(stakerEscrowedMYB).times(25).div(100); 
      let expectedEscrowRemaining = BigNumber(escrowedForAsset).minus(unlockAmount); 
      assert.equal(percentageROI > 25, true); 
      assert.equal(percentageROI < 50, true); 
      console.log("staker escrowed MYB " + stakerEscrowedMYB); 
      await assetManagerInstance.unlockEscrow(assetID, {from: staker}); 
      let unlockedMYB = await api.depositedMYB(staker); 
      console.log("expected escrow remaining " + expectedEscrowRemaining); 
      console.log("amount expected to be unlocked " + unlockAmount); 
      console.log(await api.escrowedForAsset(assetID)); 
      console.log(await api.escrowedMYB(staker)); 
      // assert.equal(unlockedMYB, unlockAmount);
      // assert.equal(BigNumber(await api.escrowedForAsset(assetID)).eq(await api.escrowedMYB(staker)), true); 
      // assert.equal(BigNumber(await api.escrowedForAsset(assetID)).eq(expectedEscrowRemaining), true); 
      // assert.equal(await api.escrowedMYB(staker), expectedEscrowRemaining); 
      LogEscrowUnlocked = await assetManagerInstance.LogEscrowUnlocked({},{fromBlock:0, toBlock:'latest'});
    }); 

    it ("listen for assetID", function (done) {
      LogEscrowUnlocked.watch(
        async function(e,r){
          if(e){ done(e); }
          else {
            console.log('LogEscrowUnlocked event triggered');
            let user = r.args._user;
            let amount = r.args._amount; 
            console.log("amount unlocked " + amount); 
            LogEscrowUnlocked.stopWatching();
            done(e);
          }
      });
    });



});
