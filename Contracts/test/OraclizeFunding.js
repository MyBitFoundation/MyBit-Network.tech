var BigNumber = require('bignumber.js');

const Asset = artifacts.require('./Asset.sol');
const AssetCreation = artifacts.require('./AssetCreation.sol');
const API = artifacts.require('./API.sol');
const ContractManager = artifacts.require("./ContractManager.sol");
const Database = artifacts.require("./Database.sol");
const FundingHub = artifacts.require("./FundingHub.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const AssetExchange = artifacts.require('./AssetExchange.sol');
const MyBitToken = artifacts.require('./ERC20.sol');
const OperatorEscrow = artifacts.require('./OperatorEscrow.sol');
const OracleHub = artifacts.require('./OracleHub.sol');
const Owned = artifacts.require("./Owned.sol");
const TokenBurn = artifacts.require('./TokenBurn.sol');
const TokenFaucet = artifacts.require('./TokenFaucet.sol');
const UserAccess = artifacts.require('./UserAccess.sol');


contract('Deploying and storing all contracts + validation', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];

  const access1Account = web3.eth.accounts[3];
  const access2Account = web3.eth.accounts[4];
  const backupAddress = web3.eth.accounts[5];

  let assetInstance;
  let assetCreationInstance;
  let contractManagerInstance;
  let dbInstance;
  let fundingHubInstance;
  let hfInstance;
  let apiInstance;
  let initialVariableInstance;
  let AssetExchangeInstance;
  let myBitTokenInstance;
  let operatorEscrowInstance;
  let oracleHubInstance;
  let ownedInstance;
  let tokenBurnInstance;
  let tokenFaucetInstance;
  let userAccessInstance;

  const assetCreator = web3.eth.accounts[7];
  const myBitPayoutAddress = web3.eth.accounts[8];
  const assetEscrowPayoutAddress = web3.eth.accounts[9];

  let amountToBeRaised = 500; // USD
  let operatorPercentage = 5;   //
  let assetID;
  let installerID;
  let assetType;

  let ethUSDPrice;
  let mybUSDPrice;

  var halfOfUSDValueInEth;
  var storedUSDValue;
  var valueToFundINCGas;
  var tokenEscrowValue = 30495300000;

  var myBitPayoutAddressBalance;
  var assetEscrowPayoutAddressBalance;

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
     apiInstance = await API.new(dbInstance.address);
     assert.equal(await apiInstance.database(), dbInstance.address);
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
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('installerPercentage')), 99, 'installerPercentage == 99');
   });

   it('MyBitToken contract deployment ', async () => {
     initialSupply = 18000000000000000 * 10**10;
     myBitTokenInstance = await MyBitToken.new(initialSupply, 'MyBit', 18, 'MYB');

     assert.equal(await myBitTokenInstance.balanceOf(web3.eth.accounts[0]), initialSupply, 'MyBitToken - Correct initial balance to owner');
     assert.equal(await myBitTokenInstance.totalSupply(), initialSupply, 'MyBitToken - Correct total supply');
     assert.equal(await myBitTokenInstance.name(), 'MyBit', 'MyBitToken - Correct token name');
     assert.equal(await myBitTokenInstance.symbol(), 'MYB', 'MyBitToken - Correct Token symbol');
     assert.equal(await myBitTokenInstance.decimals(), 18, 'MyBitToken - Correct decimals');
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


    it('UserAccess deployment ', async () => {
      userAccessInstance = await UserAccess.new(dbInstance.address);

      // Ensure all variables are set in constructor and passed
      assert.equal(await userAccessInstance.database(), await dbInstance.address, 'UserAccess database Address assigned properly');

      await contractManagerInstance.addContract('UserAccess', userAccessInstance.address, ownerAddr2);
      assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(userAccessInstance.address))), false, 'Contract manager(UserAccess) to database === false');
      assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'UserAccess')), userAccessInstance.address, 'UserAccess address correctly stored');
      assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', userAccessInstance.address)), true, 'UserAccess address == true');
    });



   it('Asset Creation contract deployment', async () => {
     assetCreationInstance = await AssetCreation.new(dbInstance.address);

     // Ensure all variables are set in constructor and passed
     assert.equal(await assetCreationInstance.database(), await dbInstance.address, 'Asset Creation database Address assigned properly');
     assert.equal(await assetCreationInstance.fundingTime(), 3000, 'Asset creation funding time === 3000');

     await contractManagerInstance.addContract('AssetCreation', assetCreationInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(assetCreationInstance.address))), false, 'Contract manager(AssetCreation) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'AssetCreation')), assetCreationInstance.address, 'AssetCreation address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', assetCreationInstance.address)), true, 'AssetCreation address == true');
   });


   it('FundingHub deployment ', async () => {
     fundingHubInstance = await FundingHub.new(dbInstance.address);

     // Ensure all variables are set in constructor and passed
     assert.equal(await fundingHubInstance.database(), await dbInstance.address, 'FundingHub database Address assigned properly');

     await contractManagerInstance.addContract('FundingHub', fundingHubInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(fundingHubInstance.address))), false, 'Contract manager(FundingHub) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'FundingHub')), fundingHubInstance.address, 'FundingHub address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', fundingHubInstance.address)), true, 'FundingHub address == true');
   });

   it('Asset contract deployment ', async () => {
     assetInstance = await Asset.new(dbInstance.address);

     //Ensure all variables are set in constructor and passed
     assert.equal(await assetInstance.database(), await dbInstance.address, 'Asset database Address assigned properly');

     await contractManagerInstance.addContract('Asset', assetInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(assetInstance.address))), false, 'Contract manager(Asset) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'Asset')), assetInstance.address, 'Asset address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', assetInstance.address)), true, 'Asset address == true');
   });

   it('operatorEscrowInstance contract deployment ', async () => {
     operatorEscrowInstance = await OperatorEscrow.new(dbInstance.address, myBitTokenInstance.address);
     await contractManagerInstance.addContract('OperatorEscrow', operatorEscrowInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(operatorEscrowInstance.address))), false, 'Contract manager(OperatorEscrow) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'OperatorEscrow')), operatorEscrowInstance.address, 'OperatorEscrow address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', operatorEscrowInstance.address)), true, 'OperatorEscrow address == true');
   });

   it('oracleHubInstance contract deployment ', async () => {
     oracleHubInstance = await OracleHub.new(dbInstance.address);
     await contractManagerInstance.addContract('OracleHub', oracleHubInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(oracleHubInstance.address))), false, 'Contract manager(OracleHub) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'OracleHub')), oracleHubInstance.address, 'OracleHub address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', oracleHubInstance.address)), true, 'OracleHub address == true');
   });

   it('tokenFaucetInstance contract deployment ', async () => {
     tokenFaucetInstance = await TokenFaucet.new(myBitTokenInstance.address);
     await contractManagerInstance.addContract('TokenFaucet', tokenFaucetInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(tokenFaucetInstance.address))), false, 'Contract manager(TokenFaucet) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'TokenFaucet')), tokenFaucetInstance.address, 'TokenFaucet address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', tokenFaucetInstance.address)), true, 'TokenFaucet address == true');
   });


   it('AssetExchange contract deployment ', async () => {
     AssetExchangeInstance = await AssetExchange.new(dbInstance.address);

     //Ensure all variables are set in constructor and passed
     assert.equal(await AssetExchangeInstance.database(), await dbInstance.address, 'AssetExchange database Address assigned properly');

     await contractManagerInstance.addContract('AssetExchange', AssetExchangeInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(AssetExchangeInstance.address))), false, 'Contract manager(AssetExchange) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'AssetExchange')), AssetExchangeInstance.address, 'AssetExchange address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', AssetExchangeInstance.address)), true, 'AssetExchange address == true');
   });


   it('TokenBurn contract deployment ', async () => {
     tokenBurnInstance = await TokenBurn.new(dbInstance.address, myBitTokenInstance.address);

     //Ensure all variables are set in constructor and passed
     assert.equal(await tokenBurnInstance.database(), await dbInstance.address, 'TokenBurn database Address assigned properly');
     assert.equal(await tokenBurnInstance.myBitToken(), await myBitTokenInstance.address, 'TokenBurn myBitToken Address assigned properly');

     assert.equal(await dbInstance.uintStorage(await hfInstance.stringUint('accessTokenFee', 1)), 25, 'access level 1 set');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringUint('accessTokenFee', 2)), 75, 'access level 2 set');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringUint('accessTokenFee', 3)), 100, 'access level 3 set');


     await contractManagerInstance.addContract('TokenBurn', tokenBurnInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(tokenBurnInstance.address))), false, 'Contract manager(TokenBurn) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'TokenBurn')), tokenBurnInstance.address, 'TokenBurn address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', tokenBurnInstance.address)), true, 'TokenBurn address == true');
   });

   it('finalize deployment', async () => {
      await contractManagerInstance.setDeployFinished();
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

    await userAccessInstance.approveUser(assetCreator, 3);
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', assetCreator)), 3, 'Access 3 for owner1');
  });

  it('Update USD prices', async () => {
    let eUSDPriceBefore = await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPrice'));
    let mUSDPriceBefore = await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPrice'));

    await oracleHubInstance.mybUSDQuery({value:web3.toWei(0.5, 'ether')});
    // await oracleHubInstance.ethUSDQuery({value:web3.toWei(0.5,'ether')});

    let LogEthUSDQuery = await oracleHubInstance.LogEthUSDQuery({},{fromBlock:0, toBlock:'latest'});
    let LogmybUSDQuery = await oracleHubInstance.LogmybUSDQuery({},{fromBlock:0, toBlock:'latest'});

    let ethUSDQueryID;
    let mybUSDQueryID;
    var ethUSDPrice;
    var mybUSDPrice;

    let LogCallBackUSDEth = await oracleHubInstance.LogEthUSDCallbackReceived({},{fromBlock:0, toBlock:'latest'});
    let LogCallBackUSDMyB = await oracleHubInstance.LogMYBUSDCallbackReceived({},{fromBlock:0, toBlock:'latest'});

    assetType = await hfInstance.stringHash('BitcoinATM');
    installerID =  await hfInstance.stringHash('installerID');
    assetID = await hfInstance.stringHash('TestAsset');

    LogEthUSDQuery.watch(
          async function(e,r){
              if(!e){
                console.log('LogEthUSDQuery - Triggered');
                LogEthUSDQuery.stopWatching();
              }});

    LogmybUSDQuery.watch(
          async function(e,r){
              if(!e){
                mybUSDQueryID = r._queryID;
                console.log('LogmybUSDQuery - Triggered');
                LogmybUSDQuery.stopWatching();
              }});


    LogCallBackUSDEth.watch(
          async function(e,r){
              if(!e){
                let jsonResult = JSON.stringify(r);
                let jsonData = JSON.parse(jsonResult);
                console.log('LogEthUSDQuery - Triggered');
                //ethUSDPrice = parseInt(await dbInstance.uintStorage(await hfInstance.stringHash('mybUSDPrice')));
                ethUSDPrice = jsonData['args']._result;
                console.log('ethUSDPrice: ' + ethUSDPrice);
                halfOfUSDValueInEth = ((amountToBeRaised / ethUSDPrice) / 2) + 0.00000001; // Rounds... minor fix
                console.log('halfOfUSDValueInEth-----', halfOfUSDValueInEth);
                await oracleHubInstance.mybUSDQuery({from:web3.eth.accounts[1],value:web3.toWei(0.5,'ether')}); //random number for now, first query is free, second is not
                LogCallBackUSDEth.stopWatching();
              }});

    LogCallBackUSDMyB.watch(
          async function(e,r){
              if(!e){
                let jsonResult = JSON.stringify(r);
                let jsonData = JSON.parse(jsonResult);
                console.log('LogCallBackUSDMyB - Triggered');
                console.log('_tokenPrice: ' + jsonData['args']._tokenPrice);
                mybUSDPrice = parseInt(await dbInstance.uintStorage(await hfInstance.stringHash('mybUSDPrice')));
                console.log('mybUSDPrice', mybUSDPrice);
                await myBitTokenInstance.transfer(assetCreator, 30495400000,{from:ownerAddr1}); //transfer tokens to asset creator for escrow
                LogCallBackUSDMyB.stopWatching();
              }});
  });

  it('MyBitToken Events', async () => {
    let TransferLogOwned = myBitTokenInstance.Transfer({from:ownerAddr1},{fromBlock:0,toBlock:'latest'});
    let TransferLogCreator = myBitTokenInstance.Transfer({from:assetCreator},{fromBlock:0,toBlock:'latest'});

    TransferLogCreator.watch(
      async function(e,r){
        if(!e){
          console.log('Transfer creator escrow');
          await assetCreationInstance.newAsset(assetID, amountToBeRaised, operatorPercentage, 0, installerID, assetType, {from:assetCreator});
        }});

    TransferLogOwned.watch(
      async function(e,r){
        if(!e){
          console.log('Transfer Triggered');
          await myBitTokenInstance.approve(operatorEscrowInstance.address, Number(tokenEscrowValue) + 50,{from:assetCreator});
          await operatorEscrowInstance.depositEscrow(tokenEscrowValue, {from:assetCreator});
        }});
  });

  it('Escrow deposit Listener', async () => {
    let LogEscrowDeposited = await operatorEscrowInstance.LogEscrowDeposited({},{fromBlock:0,toBlock:'latest'});

    LogEscrowDeposited.watch(
      async function(e,r){
        if(!e){
          console.log('LogEscrowDeposited - Triggered');
          let jsonResult = JSON.stringify(r);
          let jsonData = JSON.parse(jsonResult);
          console.log('_from', jsonData['args']._from);
          console.log('_amount', jsonData['args']._amount);
        }})
  });

  it('Asset escrow listener', async () => {
    let LogLockAssetEscrow = await assetCreationInstance.LogLockAssetEscrow({},{fromBlock:0,toBlock:'latest'});

    LogLockAssetEscrow.watch(
      async function(e,r){
        if(!e){
          console.log('LogLockAssetEscrow - Triggered');
        //  assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes("operatorAmountDeposited", assetCreator))), tokenEscrowValue, 'escrow deposited');
          let jsonResult = JSON.stringify(r);
          let jsonData = JSON.parse(jsonResult);
          console.log('mybitAmountNeeded; ', jsonData['args']._amountOf);

          let amountMyBRequired = await dbInstance.uintStorage(await hfInstance.stringBytes('lockedForAsset', assetID));
          let myBPrice = await dbInstance.uintStorage(await hfInstance.stringHash('mybUSDPrice'));
          let addressAssigned = await dbInstance.addressStorage(await hfInstance.stringBytes("operatorEscrowed", assetID));

          let requiredAmount = parseInt((amountToBeRaised/myBPrice)*100);
          console.log('requiredAmount', requiredAmount);

          assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringAddress('operatorAmountDeposited', assetCreator))),  Number(tokenEscrowValue), 'escrow locked');
          assert.equal(parseInt(amountMyBRequired), requiredAmount, 'escrow correctly set');
          assert.equal(addressAssigned, assetCreator, 'asset creator assigned to asset');
        }});
  });

  it('Asset creation listener', async () => {
    let LogAssetFundingStarted = await assetCreationInstance.LogAssetFundingStarted({},{fromBlock:0,toBlock:'latest'});

    LogAssetFundingStarted.watch(
      async function(e,r){
        if(!e){
          console.log('LogAssetFundingStarted - Triggered');
          assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('amountToBeRaised',assetID))), amountToBeRaised);
          assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('operatorPercentage',assetID))), operatorPercentage);
          assert.equal(await dbInstance.addressStorage(await hfInstance.stringBytes('assetOperator', assetID)), assetCreator);
          assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage',assetID))), 1);
          //console.log('halfOfUSDValueInEth', web3.toWei(halfOfUSDValueInEth,'ether'));
          storedUSDValue = parseInt(await dbInstance.uintStorage(await hfInstance.stringHash("ethUSDPrice")));
          let ethUSDPriceExpiration = await dbInstance.uintStorage(await hfInstance.stringHash("ethUSDPriceExpiration"));
          //console.log('ethUSDPriceExpiration', parseInt(ethUSDPriceExpiration));
          //console.log('storedUSDValue', storedUSDValue);
          await fundingHubInstance.fund(assetID, {from:access1Account, value:web3.toWei(halfOfUSDValueInEth,'ether')});
        }});
  });


  it('Asset funding listener', async () => {
    let LogAssetFundedAccess1 = await fundingHubInstance.LogAssetFunded({_sender:access1Account},{fromBlock:0,toBlock:'latest'});
    let LogAssetFundedAccess2 = await fundingHubInstance.LogAssetFunded({_sender:access2Account},{fromBlock:0,toBlock:'latest'});
    let fundingLimitModifier = await fundingHubInstance.fundingLimitModifier({}, {fromBlock:0,toBlock:'latest'});


    fundingLimitModifier.watch(
      async function(e,r){
        if(!e){
          console.log('fundingLimitModifier - Triggered');
          let jsonResult = JSON.stringify(r);
          let jsonData = JSON.parse(jsonResult);
          console.log('amountRaised; ', jsonData['args']._value1);
          console.log('amountToBeRaised; ', jsonData['args']._value2);
          console.log('amountRaised; ', jsonData['args']._value3);
          /*
          Typically results in a small fractional amount being off e..g
          amountRaised;  499999999999999990800
          amountToBeRaised;  500000000000000000000
          */
        }});

    LogAssetFundedAccess1.watch(
      async function(e,r){
        if(!e){
          console.log('LogAssetFundedAccess1 - Triggered');
          assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID))), web3.toWei(halfOfUSDValueInEth,'ether'), 'Amount raised added properly');
          assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, access1Account))), web3.toWei(halfOfUSDValueInEth,'ether'), 'ownershipUnits added properly');
          let fundingStage = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID)));
          let amountRaised = await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID));
          console.log('fundingStage', fundingStage);
          await fundingHubInstance.fund(assetID, {from:access2Account, value:web3.toWei(halfOfUSDValueInEth,'ether')});
        }})

    LogAssetFundedAccess2.watch(
      async function(e,r){
        if(!e){
          console.log('LogAssetFundedAccess2 - Triggered');
          //assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID))), web3.toWei(halfOfUSDValueInEth*2,'ether'), 'Amount raised added properly');
          assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('ownershipUnits', assetID, access2Account))), web3.toWei(halfOfUSDValueInEth,'ether'), 'ownershipUnits added properly');
          let fundingStage = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID)));

          // Check asset has updated stage to fully funded and no-one can fund it anymore
          assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('amountToBeRaised', assetID))), 0, 'Should be deleted == 0');
          assert.equal(fundingStage, 3, 'Funding stage == 3');

          myBitPayoutAddressBalance = parseInt(web3.eth.getBalance(myBitPayoutAddress));
          assetEscrowPayoutAddressBalance = parseInt(web3.eth.getBalance(assetEscrowPayoutAddress));

          // FudningHub transition to stage 4 via payout
          await fundingHubInstance.payout(assetID);
        }});
  });

  it('Listen for payout events', async () => {
    let LogAssetPayout = await fundingHubInstance.LogAssetPayout({},{fromBlock:0,toBlock:'latest'});

    LogAssetPayout.watch(
      async function(e,r){
        if(!e){
          console.log('LogAssetPayout - Triggered');
          let originalAccountStartingBalance = parseInt(web3.toWei(100,'ether'));
          let amountRaised = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID)));
          let myBitFoundationPercentage = Number(await dbInstance.uintStorage(await hfInstance.stringHash('myBitFoundationPercentage')) / 100);
          let installerPercentage = Number(await dbInstance.uintStorage(await hfInstance.stringHash('installerPercentage')) / 100);

          assert.equal(parseInt(web3.eth.getBalance(myBitPayoutAddress)), Number(myBitPayoutAddressBalance) + Number(amountRaised*myBitFoundationPercentage), 'MyBitFoundation paid');
          assert.equal(parseInt(web3.eth.getBalance(assetEscrowPayoutAddress)), Number(assetEscrowPayoutAddressBalance) + Number(amountRaised*installerPercentage), 'InstallerEscrow paid');
          assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID))), 4, 'Stage set to 4, ready for payments');

          let etherAmountToFund = 1;
          var assetCreatorBalanceBefore = Number(web3.eth.getBalance(assetCreator));
          let revenueNote = await hfInstance.stringString('good month', 'installerID');
          await assetInstance.receiveIncome(assetID, revenueNote, {value:web3.toWei(etherAmountToFund,'ether')});
          let assetIncome = await dbInstance.uintStorage(await hfInstance.stringBytes('assetIncome', assetID));
          let managerAmount = web3.toWei(etherAmountToFund,'ether') * await dbInstance.uintStorage(await hfInstance.stringBytes('operatorPercentage', assetID)) / 100;
          assert.equal(managerAmount, web3.toWei(operatorPercentage/100, 'ether'), 'manager calculation correct');
          assert.equal(web3.eth.getBalance(assetCreator), Number(assetCreatorBalanceBefore) + Number(managerAmount), 'Manager assigned correct amount');
          assert.equal(assetIncome, web3.toWei(etherAmountToFund,'ether') - managerAmount, 'Total recieved assigned correctly');
        }});
  });


  it('Withdrawal earnings from asset', async () => {
    let LogIncomeReceived = await assetInstance.LogIncomeReceived({},{fromBlock:0,toBlock:'latest'});

    LogIncomeReceived.watch(
      async function(e,r){
        if(!e){
          console.log('LogIncomeReceived - Triggered');
          let ownershipUnits = await dbInstance.uintStorage(await hfInstance.stringBytesAddress("ownershipUnits", assetID, access1Account));
          let totalPaidToFundersBefore = await dbInstance.uintStorage(await hfInstance.stringBytes("totalPaidToFunders", assetID));
          let totalPaidToFunderBefore = await dbInstance.uintStorage(await hfInstance.stringBytesAddress("totalPaidToFunder", assetID, access1Account));
          let assetIncome = await dbInstance.uintStorage(await hfInstance.stringBytes("assetIncome", assetID));
          let amountRaised = await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID));
          let payment = ((assetIncome * ownershipUnits) / amountRaised) - totalPaidToFunderBefore;
          let balanceOfFunder = web3.eth.getBalance(access1Account);

          var withdrawalGasEstimate = parseInt(await assetInstance.withdraw.estimateGas(assetID, false, {from:access2Account})).toFixed(7) / 10000000;
          await assetInstance.withdraw(assetID, {from:access1Account});

          let totalPaidToFunderAfter = await dbInstance.uintStorage(await hfInstance.stringBytesAddress("totalPaidToFunder", assetID, access1Account));
          let totalPaidToFundersAfter = await dbInstance.uintStorage(await hfInstance.stringBytes("totalPaidToFunders", assetID));
          let balanceOfFunderAfter = parseInt(web3.eth.getBalance(access1Account));

          assert.equal(balanceOfFunderAfter, (balanceOfFunder-Number(web3.toWei(withdrawalGasEstimate,'ether'))) + payment,'payment added to funder');
        }});

      });
/*

  it('Change asset funding time', async () => {
      let defaultTime = 3000;
      assert.equal(parseInt(await assetCreationInstance.fundingTime()), defaultTime, 'default time == 3000');

      let newDefaultTime = 1000;
      await assetCreationInstance.changeFundingTime(newDefaultTime);
      assert.equal(parseInt(await assetCreationInstance.fundingTime()), newDefaultTime, 'default time == 1000');
  });

  it('Assign function signer', async () => {
    await ownedInstance.setFunctionAuthorized(assetCreationInstance.address, 'removeAsset', assetID,{from:ownerAddr1});
    await ownedInstance.setFunctionAuthorized(assetCreationInstance.address, 'changeFundingPercentages', await hfInstance.uintUintUint(50,25,25),{from:ownerAddr1});
  });

  it('Change Funding percentages', async () => {
    await assetCreationInstance.changeFundingPercentages(50, 25, 25, ownerAddr1, {from:ownerAddr2});
    assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.Sha3('myBitFoundationPercentage'))), 50, 'myBitFoundationPercentage updated to 50');
    assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.Sha3('installerPercentage'))), 25, 'installerPercentage updated to 25');
  });

  it('Remove asset', async () => {
    await assetCreationInstance.removeAsset(assetID, ownerAddr1, {from:ownerAddr3});
    let funcHash = await hfInstance.getAuthorizeHash(assetCreationInstance.address, ownerAddr1, 'removeAsset', assetID);
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage',assetID)), 5, 'state set to 5');
    assert.equal(await dbInstance.boolStorage(funcHash), false, 'boolstorage == false');
  });
  */
});
