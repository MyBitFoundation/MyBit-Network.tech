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
const TokenBurn = artifacts.require('./TokenBurn.sol');
const MarketPlace = artifacts.require('./MarketPlace.sol');


contract('TestMarketPlace', async (accounts) => {
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
  let tokenBurnInstance;
  let marketplaceInstance;

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

  let accessLevelQuery;
  let finalCost;

  let userShares;
  let orderID;


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
     // Token Burn Contract
     tokenBurnInstance = await TokenBurn.new(dbInstance.address, myBitTokenInstance.address);
     await contractManagerInstance.addContract('TokenBurn', tokenBurnInstance.address, ownerAddr2);
     // Marketplace contract
     marketplaceInstance = await MarketPlace.new(dbInstance.address);
     await contractManagerInstance.addContract('MarketPlace', marketplaceInstance.address, ownerAddr2);
     // HashFunctions Contract
     hfInstance = await HashFunctions.new();
     assetType = await hfInstance.Sha3('BitcoinATM');
     installerID =  await hfInstance.Sha3('installerID');
     assetID = await hfInstance.Sha3('TestAsset');
     // Asset Contract*/
   });

   it("Initialize Values", async () => {
     await initialInstance.startDapp();
     await contractManagerInstance.addContract('MyBitFoundation', myBitPayoutAddress, ownerAddr2);
     await contractManagerInstance.addContract('AssetEscrow', assetEscrowPayoutAddress, ownerAddr2);
   });

   it("User Approval", async () => {
     await userAccessInstance.approveUser(assetCreator, 4);
     await userAccessInstance.approveUser(access1Account, 4);
     await userAccessInstance.approveUser(access2Account, 4);
     await userAccessInstance.approveUser(access3Account, 4);
     await userAccessInstance.approveUser(access4Account, 4);

     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', assetCreator)), 4, 'Access 4 granted');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', access1Account)), 4, 'Access 4 granted');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', access2Account)), 4, 'Access 4 granted');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', access3Account)), 4, 'Access 4 granted');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', access4Account)), 4, 'Access 4 granted');
   });

   it("Asset Creation", async () => {
     await assetCreationInstance.newAsset(assetID, amountToBeRaised, managerPercentage, installerID, assetType, {from:assetCreator});
   });

   it('Asset Funding', async () => {
     await fundingHubInstance.fund(assetID, {from:access1Account, value:web3.toWei(0.25,'ether')});
     await fundingHubInstance.fund(assetID, {from:access2Account, value:web3.toWei(0.25,'ether')});
     await fundingHubInstance.fund(assetID, {from:access3Account, value:web3.toWei(0.25,'ether')});
     await fundingHubInstance.fund(assetID, {from:access4Account, value:web3.toWei(0.25,'ether')});
   });

   it('Asset transition to fully funded stage > payout to installer', async () => {
    assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID))), 3, 'Funding stage == 3');
     await fundingHubInstance.payout(assetID);
     assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID))), 4, 'Stage set to 4, ready for payments');
   });

   it('Asset Receieves income', async () =>{
     let etherAmountToFund = 1;
     await assetInstance.receiveIncome(assetID, '', {value:web3.toWei(etherAmountToFund,'ether')});
     let managerAmount = web3.toWei(etherAmountToFund,'ether') * await dbInstance.uintStorage(await hfInstance.stringBytes('managerPercentage', assetID)) / 100;
     assert.equal(managerAmount, web3.toWei(managerPercentage/100, 'ether'), 'manager calculation correct');
     let totalReceived = await dbInstance.uintStorage(await hfInstance.stringBytes("totalReceived", assetID));
     assert.equal(totalReceived, web3.toWei(1,'ether') - managerAmount, 'Total recieved assigned correctly');
   });

   it('Withdraw income earnings ', async () =>{

     let shares = await dbInstance.uintStorage(await hfInstance.stringBytesAddress("shares", assetID, access1Account));
     let amountRaised = await dbInstance.uintStorage(await hfInstance.stringBytes("amountRaised", assetID));
     let totalPaidToFunders = await dbInstance.uintStorage(await hfInstance.stringBytes("totalPaidToFunders", assetID));
     let totalPaidToFunder = await dbInstance.uintStorage(await hfInstance.stringBytesAddress("totalPaidToFunder", assetID, access1Account));
     let totalReceived = await dbInstance.uintStorage(await hfInstance.stringBytes("totalReceived", assetID));
     let payment = ((totalReceived * shares) / amountRaised) - totalPaidToFunder;
     let balanceOfFunder = web3.eth.getBalance(access1Account);


     /*console.log('shares; ' + shares);
     console.log('amountRaised; ' + amountRaised);
     console.log('totalPaidToFunders; ' + totalPaidToFunders);
     console.log('totalPaidToFunder; ' + totalPaidToFunder);
     console.log('totalPaidToFunders; ' + totalPaidToFunders);
     console.log('totalReceived; ' + totalReceived);
     console.log('payment; ' + payment);
     console.log('balanceOfFunder; ' + balanceOfFunder);*/

     await assetInstance.withdraw(assetID, false, {from:access1Account});
     await assetInstance.withdraw(assetID, false, {from:access2Account});
     await assetInstance.withdraw(assetID, false, {from:access3Account});
     await assetInstance.withdraw(assetID, false, {from:access4Account});

     let totalPaidToFunder1After = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress("totalPaidToFunder", assetID, access1Account)));
     let totalPaidToFunder2After = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress("totalPaidToFunder", assetID, access2Account)));
     let totalPaidToFunder3After = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress("totalPaidToFunder", assetID, access3Account)));
     let totalPaidToFunder4After = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress("totalPaidToFunder", assetID, access4Account)));

     let totalPaidToFundersAfter = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes("totalPaidToFunders", assetID)));

     assert.equal(totalPaidToFunder1After, web3.toWei(0.2375,'ether'), 'correctly paid the funder 1');
     assert.equal(totalPaidToFunder2After, web3.toWei(0.2375,'ether'), 'correctly paid the funder 2');
     assert.equal(totalPaidToFunder3After, web3.toWei(0.2375,'ether'), 'correctly paid the funder 2');
     assert.equal(totalPaidToFunder4After, web3.toWei(0.2375,'ether'), 'correctly paid the funder 2');

     assert.equal(totalPaidToFundersAfter, web3.toWei(0.95,'ether'), 'correctly paid the funders');
   });

   it('Create sell order - full shares, CREATESELLORDER', async () => {
     let user1Shares = await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access1Account));

     await marketplaceInstance.createSellOrder(assetID, user1Shares, 1, {from:access1Account});
     let orderID = await hfInstance.getOrderID(assetID, access1Account, user1Shares, 1, false);
     assert.equal(await marketplaceInstance.orders(access1Account, orderID), true, 'Order Created');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress("shares", assetID, access1Account)), web3.toWei(0.25,'ether'),'Shares still exist');
   });


   it('Delete sell order - full/half shares, DELETEORDER', async () =>{
     /* Full  Shares - works*/
     let user1Shares = await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access1Account));

     await marketplaceInstance.deleteOrder(assetID, user1Shares, 1, false,{from:access1Account});
     let orderID = await hfInstance.getOrderID(assetID, access1Account, web3.toWei(0.5,'ether'), web3.toWei(1,'ether'), false);
     assert.equal(await marketplaceInstance.orders(access1Account, orderID), false, 'Sell order has been deleted');

     /* Half Shares - should not work */
     //await marketplaceInstance.deleteOrder(assetID, web3.toWei(0.25,'ether'), web3.toWei(1,'ether'), false,{from: access1Account});
   });

   it('Create sellorder again to purchase, CREATESELLORDER', async () => {
     let user1Shares = await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access1Account));
     let sellingPrice = web3.toWei(1,'ether');

     await marketplaceInstance.createSellOrder(assetID, user1Shares, 1, {from:access1Account});
     let orderID = await hfInstance.getOrderID(assetID, access1Account, user1Shares, 1, false);
     assert.equal(await marketplaceInstance.orders(access1Account, orderID), true, 'Order Created');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress("shares", assetID, access1Account)), web3.toWei(0.25,'ether'),'Shares still exist');
   });

   it('Buy Asset - from sell order, BUYASSET', async () =>{
     let user1Shares = await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access1Account));

     let userBalanceBeforeBuy = parseInt(web3.eth.getBalance(access2Account));
     var estimateGasBuyAsset = parseInt(await marketplaceInstance.buyAsset.estimateGas(assetID, access1Account, web3.toWei(0.25,'ether'), 1,{from:access2Account,value:web3.toWei(0.25,'ether')})).toFixed(7) / 10000000;
     let orderID = await hfInstance.getOrderID(assetID, access1Account, user1Shares, 1, false);

     await marketplaceInstance.buyAsset(assetID, access1Account, web3.toWei(0.25,'ether'), 1,{from:access2Account,value:web3.toWei(0.25,'ether')});

     LogSharesTraded = await assetInstance.LogSharesTraded({},{fromBlock:0, toBlock:'latest'});
     LogSellOrderCompleted = await marketplaceInstance.LogSellOrderCompleted({},{fromBlock:0, toBlock:'latest'});

     // Done here due to race condition
     assert.equal(parseInt(await marketplaceInstance.weiOwed(access1Account)), web3.toWei(0.25,'ether'),'Seller can withdraw their owed amount');
     assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access1Account))), 0, 'Shares correctly reduced to 0');
     assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access2Account))), web3.toWei(0.5,'ether'), 'Shares correctly added to previous 0.5 eth');
     assert.equal(await marketplaceInstance.orders(access1Account, orderID), false,'Sell order deleted');

     LogSharesTraded.watch(
           async function(e,r){
               if(!e){
                 console.log('LogSharesTraded - Triggered');
                 LogSharesTraded.stopWatching();
               }});

     LogSellOrderCompleted.watch(
           async function(e,r){
               if(!e){
                 console.log('LogSellOrderCompleted - Triggered');
                 LogSellOrderCompleted.stopWatching();
                 //assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('totalPaidToFunder', assetID, access2Account)), web3.toWei(0.475,'ether')), 'Paid amount added');
                 //assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('totalPaidToFunder', assetID, access1Account))), 0, 'Seller amount reduced to 0');
               }});

    // Check balance of buyer
    let userBalanceAfterBuy = parseInt(web3.eth.getBalance(access2Account));
    // /assert.equal(userBalanceAfterBuy, (userBalanceBeforeBuy-web3.toWei(0.25,'ether')) - web3.toWei(estimateGasBuyAsset,'ether'), 'User correctly paid for asset');
   });

   it('Withdraw funds after sale completed WITHDRAW', async () =>{
     let userBalanceBeforeWithdrawal = parseInt(web3.eth.getBalance(access1Account));
     var estimateGasWithdrawalSale = parseInt(await marketplaceInstance.withdraw.estimateGas({from:access1Account})).toFixed(7) / 10000000;
     await marketplaceInstance.withdraw({from:access1Account});

     var shouldBeBalanceAfter = (userBalanceBeforeWithdrawal+parseInt(web3.toWei(0.25,'ether'))) -parseInt(web3.toWei(estimateGasWithdrawalSale,'ether'));
     // console.log('estimateGasWithdrawalSale', estimateGasWithdrawalSale);

     let userBalanceAfterWithdrawal = parseInt(web3.eth.getBalance(access1Account));
     /*console.log('userBalanceBeforeWithdrawal', userBalanceBeforeWithdrawal);
     console.log('userBalanceAfterWithdrawal', userBalanceAfterWithdrawal);
     console.log('correctValue', shouldBeBalanceAfter);*/
    // assert.equal(userBalanceAfterWithdrawal+10000, shouldBeBalanceAfter, 'User withdrawal payout successful');
   });

   it('Create buy order - BUYORDER', async () =>{
    await marketplaceInstance.createBuyOrder(assetID, web3.toWei(0.25,'ether'), 1, {from:access1Account, value:web3.toWei(0.25,'ether')});
    assert.equal(parseInt(await marketplaceInstance.weiDeposited(access1Account)), web3.toWei(0.25,'ether'), 'Wei properly deposited');

    let orderID = await hfInstance.getOrderID(assetID, access1Account, web3.toWei(0.25,'ether'), 1, true);
    assert.equal(await marketplaceInstance.orders(access1Account, orderID), true, 'Order Created');


    LogBuyOrderCreated = await marketplaceInstance.LogBuyOrderCreated({},{fromBlock:0, toBlock:'latest'});
    LogBuyOrderCreated.watch(
          async function(e,r){
              if(!e){
                console.log('LogBuyOrderCreated Triggered');
                LogBuyOrderCreated.stopWatching();
              }});

    LogBuyOrderDetails = await marketplaceInstance.LogBuyOrderDetails({},{fromBlock:0, toBlock:'latest'});
    LogBuyOrderDetails.watch(
         async function(e,r){
             if(!e){
               console.log('LogBuyOrderCreated Triggered');
               LogBuyOrderDetails.stopWatching();
             }});
   });

    it('Sell Asset - from buy order, SELLASSET', async () =>{
      let userBalanceBeforeBuy = parseInt(web3.eth.getBalance(access2Account));
      var estimateGasSellAsset = parseInt(await marketplaceInstance.sellAsset.estimateGas(assetID, access1Account, web3.toWei(0.25,'ether'), 1,{from:access2Account})).toFixed(7) / 10000000;
      await marketplaceInstance.sellAsset(assetID, access1Account, web3.toWei(0.25,'ether'), 1, {from:access2Account});

      assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('totalPaidToFunder', assetID, access2Account))), web3.toWei(0.2375,'ether'), 'Paid amount deducted');
      assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access1Account))), web3.toWei(0.25,'ether'), 'Shares correctly updated to 0.25');
      assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access2Account))), web3.toWei(0.25,'ether'), 'Shares correctly deducted');

      assert.equal(parseInt(await marketplaceInstance.weiOwed(access2Account)), web3.toWei(0.25,'ether'),'Seller can withdraw their owed amount');
      //assert.equal(await marketplaceInstance.orders(access1Account, orderID), false,'Sell order deleted');

      LogSharesTraded = await assetInstance.LogSharesTraded({},{fromBlock:0, toBlock:'latest'});
      LogSharesTraded.watch(
            async function(e,r){
                if(!e){
                  console.log('LogSharesTraded - Triggered');
                  LogSharesTraded.stopWatching();
                }})

      LogSellOrderCompleted = await marketplaceInstance.LogSellOrderCompleted({},{fromBlock:0, toBlock:'latest'});
      LogSellOrderCompleted.watch(
            async function(e,r){
                if(!e){
                  console.log('LogSellOrderCompleted - Triggered');
                  LogSellOrderCompleted.stopWatching();
                }});

     // Check balance of buyer
     //let userBalanceAfterBuy = parseInt(web3.eth.getBalance(access2Account));
     //assert.equal(userBalanceAfterBuy, (userBalanceBeforeBuy-web3.toWei(0.5,'ether')) - web3.toWei(estimateGasBuyAsset,'ether'), 'User correctly paid for asset'); */
    });

    it('Withdraw funds after sale completed WITHDRAW', async () =>{
      await marketplaceInstance.withdraw({from:access2Account});
      assert.equal(parseInt(await marketplaceInstance.weiOwed(access2Account)), 0, 'Wei owed has been updated');
    });


    it('Destroy contract', async () =>{
      await ownedInstance.setFunctionAuthorized(marketplaceInstance.address, 'destroy', await hfInstance.addressHash(access2Account),{from:ownerAddr1});
      await marketplaceInstance.destroy(ownerAddr1,access2Account,{from:ownerAddr3});
    });

});
