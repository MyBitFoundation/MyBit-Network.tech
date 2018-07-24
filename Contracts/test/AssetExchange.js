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
const AssetExchange = artifacts.require('./AssetExchange.sol');
const API = artifacts.require('./API.sol');

contract('AssetExchange - Deploying and storing all contracts + validation', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];

  const assetCreator = web3.eth.accounts[3];
  const funder1 = web3.eth.accounts[4];
  const funder2 = web3.eth.accounts[5];
  const funder3 = web3.eth.accounts[6];
  const funder4 = web3.eth.accounts[7];

  const myBitPayoutAddress = web3.eth.accounts[8];
  const assetEscrowPayoutAddress = web3.eth.accounts[9];

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
  let assetExchangeInstance;
  let api;


  var initialSupply;
  var escrowAmount;


  let amountToBeRaised = 5000; // USD
  let managerPercentage = 7;   // 5%
  let assetID;
  let installerID;
  let assetType;
  let assetRevenuePayments = 1 * 10**18;
  let assetIncome;

  let user1ownershipUnitsInitially;
  let LogAssetFundingSuccess; 


  it("Owners should be assigned", async () => {
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
     hfInstance = await HashFunctions.new();
     api = await API.new(dbInstance.address);

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

   it('AssetCreation/funding/asset/stakingbank deployment', async () => {
     assetCreationInstance = await AssetCreation.new(dbInstance.address);
     await contractManagerInstance.addContract('AssetCreation', assetCreationInstance.address, ownerAddr2);
     // Funding Hub contract
     fundingHubInstance = await FundingHub.new(dbInstance.address);
     await contractManagerInstance.addContract('FundingHub', fundingHubInstance.address, ownerAddr2);
     // Asset Contract
     assetInstance = await Asset.new(dbInstance.address);
     await contractManagerInstance.addContract('Asset', assetInstance.address, ownerAddr2);
     // AssetExchange contract
     assetExchangeInstance = await AssetExchange.new(dbInstance.address);
     await contractManagerInstance.addContract('AssetExchange', assetExchangeInstance.address, ownerAddr2);
   });

   it('assetManagerInstance contract deployment ', async () => {
     assetManagerInstance = await AssetManager.new(dbInstance.address);
     await contractManagerInstance.addContract('AssetManager', assetManagerInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(assetManagerInstance.address))), false, 'Contract manager(AssetManager) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'AssetManager')), assetManagerInstance.address);
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', assetManagerInstance.address)), true);
   });

   it('Manually Approve users', async () => {
     await userAccessInstance.approveUser(assetCreator, 3);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', assetCreator)), 3, 'Access 3 granted');

     await userAccessInstance.approveUser(funder1, 3);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder1)), 3, 'Access 3 granted');

     await userAccessInstance.approveUser(funder2, 3);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder2)), 3, 'Access 3 granted');

     await userAccessInstance.approveUser(funder3, 3);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder3)), 3, 'Access 3 granted');

     await userAccessInstance.approveUser(funder4, 3);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder4)), 3, 'Access 3 granted');
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
     installerID =  await hfInstance.stringHash('installerID');
     let ipfsHash = await hfInstance.stringHash("This is simulating an ipfs storage bucket"); 
     let amountEscrowDeposited = await api.depositedMYB(assetCreator);
     let mybUSDPrice = await api.mybUSDPrice();
     assert.notEqual(managerPercentage); 
     await assetCreationInstance.newAsset(amountToBeRaised, managerPercentage, 0, installerID, assetType, 23, ipfsHash, {from:assetCreator});
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

     assert.equal(addressAssigned, assetCreator, 'asset creator assigned to asset manager');

     assert.equal(await api.amountToBeRaised(assetID), amountToBeRaised,'amountToBeRaised asset set');
     assert.equal(await api.managerPercentage(assetID), managerPercentage, 'managerPercentage asset set');
     assert.equal(await api.fundingStage(assetID), 1, 'fundingStage asset set');
   });

   it('Fund asset', async () => {
     let amountToBeRaised = await api.amountToBeRaised(assetID);
     let ethUSDPrice = await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPrice'));
     assert.notEqual(ethUSDPrice, 0);
     let goalInETH = BigNumber(amountToBeRaised).times(10**18).div(ethUSDPrice); 
     let quarterOfGoalInWEI = goalInETH.div(4);
     // assert.equal( (quarterOfGoalInWEI * ethUSDPrice) * 4, amountToBeRaised);    // Check for rounding errors

     await fundingHubInstance.fund(assetID, {from:funder1, value:quarterOfGoalInWEI});
     await fundingHubInstance.fund(assetID, {from:funder2, value:quarterOfGoalInWEI});
     await fundingHubInstance.fund(assetID, {from:funder3, value:quarterOfGoalInWEI});
     await fundingHubInstance.fund(assetID, {from:funder4, value:quarterOfGoalInWEI});

     LogAssetFundingSuccess = await fundingHubInstance.LogAssetFundingSuccess({},{fromBlock:0, toBlock:'latest'});
    });


    it ("listen for funding success", function (done) {
      // Create coffee machine asset
      LogAssetFundingSuccess.watch(
        async function(e,r){
          if(e){ done(e); }
          else {
            console.log('LogAssetFundingSuccess event triggered');
            let currentEthPrice = r.args._currentEthPrice;
            let amountRaised = r.args._amountRaised; 
            assert.equal(await api.fundingStage(assetID), 3, 'Funding stage == 3');
            assert.equal(await api.amountRaised(assetID), amountRaised); 
            LogAssetFundingSuccess.stopWatching();
            done(e);
          }
      });
    });


    it('Payout and transition asset to stage 4', async () => {
     await fundingHubInstance.payout(assetID);
     assert.equal(await api.fundingStage(assetID), 4, 'Stage set to 4, ready for payments');
    });

   it('Asset recieves funding', async () => {
     assert.equal(await api.assetIncome(assetID), 0);
     await assetInstance.receiveIncome(assetID, await hfInstance.nullBytes(), {value:assetRevenuePayments});
     assetIncome = BigNumber(await api.assetIncome(assetID));
     let managerIncome = assetRevenuePayments * (managerPercentage / 100);
     assert.equal(assetIncome.plus(managerIncome), assetRevenuePayments);
   });

   it('Withdraw income', async () => {
     let userownershipUnits = await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder1));
     let amountRaised = await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID));
     let totalPaidToFunder = await dbInstance.uintStorage(await hfInstance.stringBytesAddress('totalPaidToFunder', assetID, funder1));
     let payment = ((assetIncome * userownershipUnits) / amountRaised) - totalPaidToFunder


     let withdrawGasEstimate = await assetInstance.withdraw.estimateGas(assetID, {from:funder1}).toFixed(7) / 10000000;
     let balanceOfUserBeforeWithdrawal = web3.eth.getBalance(funder1);

     let amountOwed = await assetInstance.getAmountOwed(assetID, funder1);
     assert.equal(amountOwed, payment, 'amount owed correct');
     await assetInstance.withdraw(assetID, {from:funder1});
     await assetInstance.withdraw(assetID, {from:funder2});

     let totalPaidToFundersAfter = await dbInstance.uintStorage(await hfInstance.stringBytes('totalPaidToFunders', assetID));
     let totalPaidToFunderAfter = await dbInstance.uintStorage(await hfInstance.stringBytesAddress('totalPaidToFunder', assetID, funder1));
     let balanceOfUserAfterWithdrawal = web3.eth.getBalance(funder1);
     let shouldBeBalanceAfter = balanceOfUserBeforeWithdrawal - web3.toWei(withdrawGasEstimate,'ether');

     assert.equal(totalPaidToFunderAfter, payment, 'payment added to total funder paid');
     assert.equal(totalPaidToFundersAfter, payment*2, 'payment added to total funders paid ');
   });

    it('Create sell order - full ownershipUnits, CREATESELLORDER', async () => {
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder1)), 3, 'Access 3 granted for exchanges');
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder2)), 3, 'Access 3 granted for exchanges');

      let user1ownershipUnits = await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder1));
      await assetExchangeInstance.createSellOrder(assetID, user1ownershipUnits, 1, {from:funder1});
      let orderID = await hfInstance.getOrderID(assetID, funder1, user1ownershipUnits, 1, false);
      assert.equal(await assetExchangeInstance.orders(funder1, orderID), true, 'Order Created');
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress("ownershipUnits", assetID, funder1)), user1ownershipUnits, 'ownershipUnits still exist');
    });

    it('Delete sell order - full/half ownershipUnits, DELETEORDER', async () =>{
      let user1ownershipUnits = await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder1));
      let orderID = await hfInstance.getOrderID(assetID, funder1, user1ownershipUnits, 1, false);
      await assetExchangeInstance.deleteOrder(assetID, user1ownershipUnits, 1, false,{from:funder1});
      assert.equal(await assetExchangeInstance.orders(funder1, orderID), false, 'Sell order has been deleted');
    });

    it('Create sellorder again to purchase, CREATESELLORDER', async () => {
      let user1ownershipUnits = await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder1));
      user1ownershipUnitsInitially = user1ownershipUnits;
      await assetExchangeInstance.createSellOrder(assetID, user1ownershipUnits, 1, {from:funder1});
      let orderID = await hfInstance.getOrderID(assetID, funder1, user1ownershipUnits, 1, false);
      assert.equal(await assetExchangeInstance.orders(funder1, orderID), true, 'Order Created');
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress("ownershipUnits", assetID, funder1)), user1ownershipUnits,'ownershipUnits still exist');
    });

    it('Buy Asset - from sell order, BUYASSET', async () =>{
      let user1ownershipUnits = await api.ownershipUnits(assetID, funder1);
      let user2ownershipUnits = await api.ownershipUnits(assetID, funder2);

      let userBalanceBeforeBuy = web3.eth.getBalance(funder2);
      var estimateGasBuyAsset = await assetExchangeInstance.buyAsset.estimateGas(assetID, funder1, user1ownershipUnits, 1,{from:funder2,value:user1ownershipUnits}).toFixed(7) / 10000000;
      let orderID = await hfInstance.getOrderID(assetID, funder1, user1ownershipUnits, 1, false);

      await assetExchangeInstance.buyAsset(assetID, funder1, user1ownershipUnits, 1,{from:funder2,value:user1ownershipUnits});

      assert.equal(await assetExchangeInstance.weiOwed(funder1), user1ownershipUnits, 'Seller can withdraw their owed amount');
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder1)), 0, 'ownershipUnits correctly reduced to 0');
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder2)), user1ownershipUnits + user2ownershipUnits, 'ownershipUnits correctly added funder2');
      assert.equal(await assetExchangeInstance.orders(funder1, orderID), false,'Sell order deleted');

     let userBalanceAfterBuy = web3.eth.getBalance(funder2);
    // assert.equal(userBalanceAfterBuy, (Number(userBalanceBeforeBuy) - Number(user1ownershipUnits)) - Number(web3.toWei(estimateGasBuyAsset,'ether')), 'User correctly paid for asset');
    // TODO; Check balance afterwards
    });


    it('Withdraw funds after sale completed WITHDRAW', async () =>{
      let userBalanceBeforeWithdrawal = parseInt(web3.eth.getBalance(funder1));
      var estimateGasWithdrawalSale = parseInt(await assetExchangeInstance.withdraw.estimateGas({from:funder1})).toFixed(7) / 10000000;
      await assetExchangeInstance.withdraw({from:funder1});
      var shouldBeBalanceAfter = (Number(userBalanceBeforeWithdrawal) + Number(user1ownershipUnitsInitially)) - Number(web3.toWei(estimateGasWithdrawalSale,'ether'));
      let userBalanceAfterWithdrawal = parseInt(web3.eth.getBalance(funder1));
    //  assert.equal(userBalanceAfterWithdrawal, shouldBeBalanceAfter, 'User withdrawal payout successful');
    // TODO; Check balance afterwards
    });

    it('Create buy order - BUYORDER', async () =>{
     await assetExchangeInstance.createBuyOrder(assetID, user1ownershipUnitsInitially, 1, {from:funder1, value:user1ownershipUnitsInitially});
     assert.equal(parseInt(await assetExchangeInstance.weiDeposited(funder1)), user1ownershipUnitsInitially, 'Wei properly deposited');

     let orderID = await hfInstance.getOrderID(assetID, funder1, user1ownershipUnitsInitially, 1, true);
     assert.equal(await assetExchangeInstance.orders(funder1, orderID), true, 'Order Created');
    });

   it('Sell Asset - from buy order, SELLASSET', async () =>{
     let userownershipUnitsBeforeSell = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder2)));
     let userBalanceBeforeBuy = parseInt(web3.eth.getBalance(funder2));
     var estimateGasSellAsset = parseInt(await assetExchangeInstance.sellAsset.estimateGas(assetID, funder1, user1ownershipUnitsInitially, 1,{from:funder2})).toFixed(7) / 10000000;
     let orderID = await hfInstance.getOrderID(assetID, funder1, user1ownershipUnitsInitially, 1, true);

     await assetExchangeInstance.sellAsset(assetID, funder1, user1ownershipUnitsInitially, 1, {from:funder2});

     assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder1))), user1ownershipUnitsInitially, 'ownershipUnits correctly updated');
     assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder2))), Number(userownershipUnitsBeforeSell) - Number(user1ownershipUnitsInitially), 'ownershipUnits correctly deducted');

     assert.equal(parseInt(await assetExchangeInstance.weiOwed(funder2)), user1ownershipUnitsInitially,'Seller can withdraw their owed amount');
     assert.equal(await assetExchangeInstance.orders(funder1, orderID), false,'Sell order deleted');
     // TODO; Check balance afterwards
   });

  it('Destroy asset exchange contract', async () => {
    await ownedInstance.setFunctionAuthorized(assetExchangeInstance.address, 'destroy', await hfInstance.addressHash(funder2),{from:ownerAddr1});
    await assetExchangeInstance.destroy(ownerAddr1,funder2,{from:ownerAddr3});
  });
 });
