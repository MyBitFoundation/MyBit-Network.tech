var BigNumber = require('bignumber.js');

/* Contracts  */
const ContractManager = artifacts.require("./ContractManager.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const OracleHub = artifacts.require('./OracleHub.sol');
const Owned = artifacts.require("./Owned.sol");
const Database = artifacts.require("./Database.sol");
const OperatorEscrow = artifacts.require('./OperatorEscrow.sol');
const UserAccess = artifacts.require('./UserAccess.sol');
const MyBitToken = artifacts.require('./ERC20.sol');
const AssetCreation = artifacts.require('./AssetCreation.sol');
const Asset = artifacts.require('./Asset.sol');
const FundingHub = artifacts.require('./FundingHub.sol');
const AssetExchange = artifacts.require('./AssetExchange.sol');
const API = artifacts.require('./API.sol');

contract('Deploying and storing all contracts + validation', async (accounts) => {
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
  let oracleHubInstance;
  let ownedInstance;
  let dbInstance;
  let operatorEscrowInstance;
  let userAccessInstance;
  let myBitTokenInstance;
  let assetCreationInstance;
  let assetInstance;
  let fundingHubInstance;
  let assetExchangeInstance;
  let apiInstance;


  var initialSupply;
  var escrowAmount;


  let amountToBeRaised = 5000; // USD
  let operatorPercentage = 7;   // 5%
  let assetID;
  let installerID;
  let assetType;
  let assetRevenuePayments = 1 * 10**18;
  let assetIncome;

  let user1ownershipUnitsInitially;


  it("Owners should be assigned", async () => {
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
     hfInstance = await HashFunctions.new();
     apiInstance = await API.new(dbInstance.address);

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

   it('oracleHubInstance contract deployment ', async () => {
     oracleHubInstance = await OracleHub.new(dbInstance.address);
     await contractManagerInstance.addContract('OracleHub', oracleHubInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(oracleHubInstance.address))), false, 'Contract manager(OracleHub) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'OracleHub')), oracleHubInstance.address, 'OracleHub address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', oracleHubInstance.address)), true, 'OracleHub address == true');
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

   it('operatorEscrowInstance contract deployment ', async () => {
     operatorEscrowInstance = await OperatorEscrow.new(dbInstance.address, myBitTokenInstance.address);
     await contractManagerInstance.addContract('OperatorEscrow', operatorEscrowInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(operatorEscrowInstance.address))), false, 'Contract manager(OperatorEscrow) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'OperatorEscrow')), operatorEscrowInstance.address, 'OperatorEscrow address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', operatorEscrowInstance.address)), true, 'OperatorEscrow address == true');
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
     escrowAmount = 1000 * 10**18;
     await myBitTokenInstance.approve(operatorEscrowInstance.address, escrowAmount,{from:assetCreator});
     let allowance = await myBitTokenInstance.allowance(assetCreator, operatorEscrowInstance.address);
     assert.equal(allowance, escrowAmount, 'Approval granted');
   });

   it('Deposit Escrow', async () => {
      await operatorEscrowInstance.depositEscrow(escrowAmount,{from:assetCreator});
      let operatorAmountDeposited = await dbInstance.uintStorage(await hfInstance.stringAddress('operatorAmountDeposited', assetCreator));
      assert.equal(operatorAmountDeposited, escrowAmount, 'Account escrow value updated');
   });

   /*
      Setting this manually as oraclizehub has been tested and is fully functional,
      if we were not to set it manually the test would rely on events and results
      in unecessary work.  In this test we are testing the operator functionality,
      not that of OraclizeHub which can be seen in; TestOraclize.js .
   */
   it('Add dummy account as a contract', async () => {
     await contractManagerInstance.addContract('TestContractMimic', ownerAddr1, ownerAddr2);
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'TestContractMimic')), ownerAddr1, 'TestContractMimic correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', ownerAddr1)), true, 'ownerAddr1 address == true');
   });

   it('Manually add Eth & MyB USD value', async () => {
     await dbInstance.setUint(await hfInstance.stringHash('mybUSDPrice'), 3000);
     await dbInstance.setUint(await hfInstance.stringHash('ethUSDPrice'), 700);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('mybUSDPrice')), 3000, 'mybUSDPrice set correctly');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPrice')), 700, 'ethUSDPrice set correctly');

     await dbInstance.setUint(await hfInstance.stringHash('mybUSDPriceExpiration'), 1544015678); //1544015678 - 12 months ahead
     await dbInstance.setUint(await hfInstance.stringHash('ethUSDPriceExpiration'), 1544015678); //1544015678 - 12 months ahead
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('mybUSDPriceExpiration')), 1544015678, 'mybUSDPrice set correctly');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPriceExpiration')), 1544015678, 'ethUSDPrice set correctly');
   });


   it('Create asset', async () => {
     assetType = await hfInstance.stringHash('BitcoinATM');
     installerID =  await hfInstance.stringHash('installerID');
     assetID = await hfInstance.stringHash('TestAsset');
     assert.notEqual(escrowAmount, 0);
     // Create new asset
     await assetCreationInstance.newAsset(assetID, amountToBeRaised, operatorPercentage, escrowAmount, installerID, assetType, {from:assetCreator});
     let addressAssigned = await dbInstance.addressStorage(await hfInstance.stringBytes("assetOperator", assetID));
     let operatorEscrowedAmount = await dbInstance.uintStorage(await hfInstance.stringBytes('lockedForAsset', assetID));
     // Check operator variables were set properly
     assert.equal(addressAssigned, assetCreator, 'asset creator assigned to asset');
     assert.equal(operatorEscrowedAmount, escrowAmount, 'operatorEscrowedAmount updated');
     // Check new asset variables were set properly
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes("amountToBeRaised", assetID)), amountToBeRaised,'amountToBeRaised asset set');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes("operatorPercentage", assetID)), operatorPercentage, 'operatorPercentage asset set');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringBytes("assetOperator", assetID)), assetCreator, 'assetOperator asset set');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes("fundingStage", assetID)), 1, 'fundingStage asset set');
   });

   it('Fund asset', async () => {
     let amountToBeRaised = await dbInstance.uintStorage(await hfInstance.stringBytes("amountToBeRaised", assetID));
     let ethUSDPrice = await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPrice'));
     assert.notEqual(ethUSDPrice, 0);
     let quarterOfValueInETH = ((amountToBeRaised / ethUSDPrice) / 4);

     await fundingHubInstance.fund(assetID, {from:funder1, value:web3.toWei(quarterOfValueInETH,'ether')});
     await fundingHubInstance.fund(assetID, {from:funder2, value:web3.toWei(quarterOfValueInETH,'ether')});
     await fundingHubInstance.fund(assetID, {from:funder3, value:web3.toWei(quarterOfValueInETH,'ether')});
     await fundingHubInstance.fund(assetID, {from:funder4, value:web3.toWei(quarterOfValueInETH,'ether')});

     assert.equal((await apiInstance.amountRaised(assetID) / 10**18) * ethUSDPrice, amountToBeRaised);
    });

    it('Asset transition to stage 4', async () => {
     assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID))), 3, 'Funding stage == 3');
     let amountRaised = await apiInstance.amountRaised(assetID);

     assert.equal(amountRaised, (amountRaised * .99) + (amountRaised * .01));
     await fundingHubInstance.payout(assetID);
     assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID))), 4, 'Stage set to 4, ready for payments');
    });

   it('Asset recieves funding', async () => {
     assert.equal(await apiInstance.assetIncome(assetID), 0);
     await assetInstance.receiveIncome(assetID, await hfInstance.nullBytes(), {value:assetRevenuePayments});
     assetIncome = BigNumber(await apiInstance.assetIncome(assetID));
     let operatorIncome = assetRevenuePayments * (operatorPercentage / 100);
     assert.equal(assetIncome.plus(operatorIncome), assetRevenuePayments);
   });

   it('Withdraw income', async () => {
     let userownershipUnits = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder1)));
     let amountRaised = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID)));
     let totalPaidToFunder = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('totalPaidToFunder', assetID, funder1)));
     let payment = ((assetIncome * userownershipUnits) / amountRaised) - totalPaidToFunder


     let withdrawGasEstimate = parseInt(await assetInstance.withdraw.estimateGas(assetID, false, {from:funder1})).toFixed(7) / 10000000;
     let balanceOfUserBeforeWithdrawal = parseInt(web3.eth.getBalance(funder1));

     let amountOwed = await assetInstance.getAmountOwed(assetID, funder1);
     assert.equal(amountOwed, payment, 'amount owed correct');
     await assetInstance.withdraw(assetID, false, {from:funder1});
     await assetInstance.withdraw(assetID, false, {from:funder2});

     let totalPaidToFundersAfter = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('totalPaidToFunders', assetID)));
     let totalPaidToFunderAfter = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('totalPaidToFunder', assetID, funder1)));
     let balanceOfUserAfterWithdrawal = parseInt(web3.eth.getBalance(funder1));
     let shouldBeBalanceAfter = Number(balanceOfUserBeforeWithdrawal) - Number(parseInt(web3.toWei(withdrawGasEstimate,'ether')));

     assert.equal(totalPaidToFunderAfter, payment, 'payment added to total funder paid');
     assert.equal(totalPaidToFundersAfter, payment*2, 'payment added to total funders paid ');
   });

    it('Create sell order - full ownershipUnits, CREATESELLORDER', async () => {
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder1)), 3, 'Access 3 granted for exchanges');
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', funder2)), 3, 'Access 3 granted for exchanges');

      let user1ownershipUnits = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder1)));
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
      let user1ownershipUnits = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder1)));
      user1ownershipUnitsInitially = parseInt(user1ownershipUnits);
      await assetExchangeInstance.createSellOrder(assetID, user1ownershipUnits, 1, {from:funder1});
      let orderID = await hfInstance.getOrderID(assetID, funder1, user1ownershipUnits, 1, false);
      assert.equal(await assetExchangeInstance.orders(funder1, orderID), true, 'Order Created');
      assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress("ownershipUnits", assetID, funder1)), user1ownershipUnits,'ownershipUnits still exist');
    });

    it('Buy Asset - from sell order, BUYASSET', async () =>{
      let user1ownershipUnits = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder1)));
      let user2ownershipUnits = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder2)));

      let userBalanceBeforeBuy = parseInt(web3.eth.getBalance(funder2));
      var estimateGasBuyAsset = parseInt(await assetExchangeInstance.buyAsset.estimateGas(assetID, funder1, user1ownershipUnits, 1,{from:funder2,value:user1ownershipUnits})).toFixed(7) / 10000000;
      let orderID = await hfInstance.getOrderID(assetID, funder1, user1ownershipUnits, 1, false);

      await assetExchangeInstance.buyAsset(assetID, funder1, user1ownershipUnits, 1,{from:funder2,value:user1ownershipUnits});

      assert.equal(parseInt(await assetExchangeInstance.weiOwed(funder1)), user1ownershipUnits, 'Seller can withdraw their owed amount');
      assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder1))), 0, 'ownershipUnits correctly reduced to 0');
      assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, funder2))), Number(user1ownershipUnits) + Number(user2ownershipUnits), 'ownershipUnits correctly added funder2');
      assert.equal(await assetExchangeInstance.orders(funder1, orderID), false,'Sell order deleted');

     let userBalanceAfterBuy = parseInt(web3.eth.getBalance(funder2));
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
