const Asset = artifacts.require('./Asset.sol');
const AssetCreation = artifacts.require('./AssetCreation.sol');
const ContractManager = artifacts.require("./ContractManager.sol");
const Database = artifacts.require("./Database.sol");
const FunderControls = artifacts.require('./FunderControls.sol');
const FundingHub = artifacts.require("./FundingHub.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const AssetExchange = artifacts.require('./AssetExchange.sol');
const MyBitToken = artifacts.require('./MyBitToken.sol');
const OperatorEscrow = artifacts.require('./OperatorEscrow.sol');
const OracleHub = artifacts.require('./OracleHub.sol');
const Owned = artifacts.require("./Owned.sol");
const StakingBank = artifacts.require('./StakingBank.sol');
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
  let funderControlsInstance;
  let fundingHubInstance;
  let hfInstance;
  let initailVariableInstance;
  let AssetExchangeInstance;
  let myBitTokenInstance;
  let operatorEscrowInstance;
  let oracleHubInstance;
  let ownedInstance;
  let stakingBankInstance;
  let tokenBurnInstance;
  let tokenFaucetInstance;
  let userAccessInstance;

  const assetCreator = web3.eth.accounts[7];
  const myBitPayoutAddress = web3.eth.accounts[8];
  const assetEscrowPayoutAddress = web3.eth.accounts[9];

  let amountToBeRaised = 1000; // USD
  let operatorPercentage = 5;   //
  let assetID;
  let installerID;
  let assetType;

  let ethUSDPrice;
  let mybUSDPrice;

  var halfOfUSDValueInEth;
  var storedUSDValue;
  var valueToFundINCGas;

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

   it('Add InitialVariables contract to database via contract manager', async () => {
    initailVariableInstance = await InitialVariables.new(dbInstance.address);
    // Check that initialvariables database address is correct compared to real database address
    assert.equal(await initailVariableInstance.database(), await dbInstance.address, 'Initial Variables database Address assigned properly');

    // Add initialvariables contract to database and validate all fields are updated with correct outcome
    await contractManagerInstance.addContract('InitialVariables', initailVariableInstance.address, ownerAddr2);
    assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(initailVariableInstance.address))), false, 'Contract manager to database === false');
    assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'InitialVariables')), initailVariableInstance.address, 'Initial variables address correctly stored');
    assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', initailVariableInstance.address)), true, 'Initial variables address == true');

   });


   it('Initialize InitialVariables  variables via startDapp', async () => {
     await initailVariableInstance.startDapp(myBitPayoutAddress, assetEscrowPayoutAddress);
     //--------------------Asset Creation Variables-----------------
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('myBitFoundationPercentage')), 1, 'myBitFoundationPercentage == 1');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('stakedTokenPercentage')), 2, 'myBitFoundationPercentage == 2');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('installerPercentage')), 97, 'installerPercentage == 97');
   });

   it('MyBitToken contract deployment ', async () => {
     let initialSupply = 281207344012426;
     myBitTokenInstance = await MyBitToken.new(initialSupply, 'MyBit Token', 8, 'MyB',{from:ownerAddr1});

     assert.equal(await myBitTokenInstance.owner(), web3.eth.accounts[0], 'MyBitToken -  owner assigned');
     assert.equal(await myBitTokenInstance.balanceOf(web3.eth.accounts[0]), initialSupply, 'MyBitToken - Correct initial balance to owner');
     assert.equal(await myBitTokenInstance.totalSupply(), initialSupply, 'MyBitToken - Correct total supply');
     assert.equal(await myBitTokenInstance.name(), 'MyBit Token', 'MyBitToken - Correct token name');
     assert.equal(await myBitTokenInstance.symbol(), 'MyB', 'MyBitToken - Correct Token symbol');
     assert.equal(await myBitTokenInstance.decimals(), 8, 'MyBitToken - Correct decimals');
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

   it('StakingBank contract deployment ', async () => {
     stakingBankInstance = await StakingBank.new(dbInstance.address);

     //Ensure all variables are set in constructor and passed
     assert.equal(await stakingBankInstance.database(), await dbInstance.address, 'StakingBank database Address assigned properly');

     await contractManagerInstance.addContract('StakingBank', stakingBankInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(stakingBankInstance.address))), false, 'Contract manager(StakingBank) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'StakingBank')), stakingBankInstance.address, 'StakingBank address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', stakingBankInstance.address)), true, 'StakingBank address == true');
   });


   it('funderControlsInstance contract deployment ', async () => {
     funderControlsInstance = await FunderControls.new(dbInstance.address);
     await contractManagerInstance.addContract('FunderControls', funderControlsInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(funderControlsInstance.address))), false, 'Contract manager(ContratManager) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'FunderControls')), funderControlsInstance.address, 'FunderControls address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', funderControlsInstance.address)), true, 'FunderControls address == true');
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

     assert.equal(await dbInstance.uintStorage(await hfInstance.stringUint('accessTokenFee', 2)), 25, 'access level 2 set');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringUint('accessTokenFee', 3)), 75, 'access level 2 set');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringUint('accessTokenFee', 4)), 100, 'access level 2 set');


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

    await userAccessInstance.approveUser(assetCreator, 4);
    assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', assetCreator)), 4, 'Access 4 for owner1');
  });

  it('Update USD prices', async () => {
    let eUSDPriceBefore = parseInt(await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPrice')));
    let mUSDPriceBefore = parseInt(await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPrice')));

    await oracleHubInstance.ethUSDQuery();

    let LogEthUSDQuery = await oracleHubInstance.LogEthUSDQuery({},{fromBlock:0, toBlock:'latest'});
    let LogmybUSDQuery = await oracleHubInstance.LogmybUSDQuery({},{fromBlock:0, toBlock:'latest'});

    let ethUSDQueryID;
    let mybUSDQueryID;
    var ethUSDPrice;
    var mybUSDPrice;

    let LogCallBackUSDEth = await oracleHubInstance.LogFundingCallbackReceived({},{fromBlock:0, toBlock:'latest'});
    let LogCallBackUSDMyB = await oracleHubInstance.LogBurnCallbackReceived({},{fromBlock:0, toBlock:'latest'});

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
                console.log('_result: ' + jsonData['args']._result);
                ethUSDPrice = parseInt(jsonData['args']._result);
                halfOfUSDValueInEth = (500 / ethUSDPrice) / 2;
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
                await myBitTokenInstance.transfer(assetCreator, 30495400000,{from:ownerAddr1});
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
          await assetCreationInstance.newAsset(assetID, 500, 5, installerID, assetType, {from:assetCreator});

        }});

    TransferLogOwned.watch(
      async function(e,r){
        if(!e){
          console.log('Transfer Triggered');
          await myBitTokenInstance.approve(operatorEscrowInstance.address, 30495300000,{from:assetCreator});
          await operatorEscrowInstance.depositEscrow(30495200000, {from:assetCreator});
        }});
  });

  it('Asset escrow listener', async () => {
    let LogLockAssetEscrow = await assetCreationInstance.LogLockAssetEscrow({},{fromBlock:0,toBlock:'latest'});

    LogLockAssetEscrow.watch(
      async function(e,r){
        if(!e){
          console.log('LogLockAssetEscrow - Triggered');
          let jsonResult = JSON.stringify(r);
          let jsonData = JSON.parse(jsonResult);
          console.log('mybitAmountNeeded; ', jsonData['args']._amountOf);

          let amountMyBRequired = await dbInstance.uintStorage(await hfInstance.stringBytes("assetEscrowRequirement", assetID));
          let myBPrice = await dbInstance.uintStorage(await hfInstance.stringHash('mybUSDPrice'));
          let addressAssigned = await dbInstance.addressStorage(await hfInstance.stringBytes("operatorEscrowed", assetID));
          let operatorEscrowedAmount = await dbInstance.uintStorage(await hfInstance.stringAddress('operatorAmountEscrowed', assetCreator));

          assert.equal(parseInt(amountMyBRequired), parseInt((500*10000000000)/myBPrice), 'escrow correctly set');
          assert.equal(addressAssigned, assetCreator, 'asset creator assigned to asset');
          assert.equal(parseInt(operatorEscrowedAmount), parseInt((500*10000000000)/myBPrice), 'operatorEscrowedAmount updated');
        }});
  });

  it('Asset creation listener', async () => {
    let LogAssetFundingStarted = await assetCreationInstance.LogAssetFundingStarted({},{fromBlock:0,toBlock:'latest'});

    LogAssetFundingStarted.watch(
      async function(e,r){
        if(!e){
          console.log('LogAssetFundingStarted - Triggered');
          assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('amountToBeRaised',assetID))), 500);
          assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('operatorPercentage',assetID))), 5);
          assert.equal(await dbInstance.addressStorage(await hfInstance.stringBytes('assetOperator', assetID)), assetCreator);
          assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage',assetID))), 1);
          console.log('halfOfUSDValueInEth', web3.toWei(halfOfUSDValueInEth,'ether'));
          storedUSDValue = parseInt(await dbInstance.uintStorage(await hfInstance.stringHash("ethUSDPrice")));
          let ethUSDPriceExpiration = await dbInstance.uintStorage(await hfInstance.stringHash("ethUSDPriceExpiration"));
          console.log('ethUSDPriceExpiration', parseInt(ethUSDPriceExpiration));
          console.log('storedUSDValue', storedUSDValue);
          valueToFundINCGas = 32768 + parseInt(web3.toWei(halfOfUSDValueInEth,'ether'));
          await fundingHubInstance.fund(assetID, storedUSDValue, {from:access1Account, value:web3.toWei(halfOfUSDValueInEth,'ether')});
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
          console.log('value1; ', jsonData['args']._value1);
          console.log('value2; ', jsonData['args']._value2);
          console.log('value3; ', jsonData['args']._value3);
        }});

    LogAssetFundedAccess1.watch(
      async function(e,r){
        if(!e){
          console.log('LogAssetFundedAccess1 - Triggered');
          assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID)), web3.toWei(halfOfUSDValueInEth,'ether'), 'Amount raised added properly');
          assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access1Account)), web3.toWei(halfOfUSDValueInEth,'ether'), 'Shares added properly');
          /*let fundingStage = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID)));
          let amountRaised = await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID));
          console.log('fundingStage', fundingStage);
          console.log('amountRaised--', parseInt(amountRaised));*/
          await fundingHubInstance.fund(assetID, storedUSDValue, {from:access2Account, value: web3.toWei(halfOfUSDValueInEth,'ether')});
        }})

    LogAssetFundedAccess2.watch(
      async function(e,r){
        if(!e){
          console.log('LogAssetFundedAccess2 - Triggered');
          //assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID)), web3.toWei(halfOfUSDValueInEth*2,'ether'), 'Amount raised added properly');
          //assert.equal(await dbInstance.uintStorage(await hfInstance.stringBytesAddress('shares', assetID, access2Account)), web3.toWei(halfOfUSDValueInEth,'ether'), 'Shares added properly');
          let amountRaised = await dbInstance.uintStorage(await hfInstance.stringBytes('amountRaised', assetID))*storedUSDValue;
          let fundingStage = parseInt(await dbInstance.uintStorage(await hfInstance.stringBytes('fundingStage', assetID)));
          let amountStillToBeRaised = 500000000000000000000 - amountRaised;
          console.log('fundingStage', fundingStage);
          console.log('amountStillToBeRaised', amountStillToBeRaised);
        }});
  });
/*
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
    let managerAmount = web3.toWei(etherAmountToFund,'ether') * await dbInstance.uintStorage(await hfInstance.stringBytes('operatorPercentage', assetID)) / 100;
    assert.equal(managerAmount, web3.toWei(operatorPercentage/100, 'ether'), 'manager calculation correct');
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

    await assetInstance.withdraw(assetID, false, {from:access1Account});

    let totalPaidToFunderAfter = await dbInstance.uintStorage(await hfInstance.stringBytesAddress("totalPaidToFunder", assetID, access1Account));
    let totalPaidToFundersAfter = await dbInstance.uintStorage(await hfInstance.stringBytes("totalPaidToFunders", assetID));
    let balanceOfFunderAfter = web3.eth.getBalance(access1Account);

    assert.equal(totalPaidToFunderAfter, (amountRaised-web3.toWei(operatorPercentage/100, 'ether')) * assetAccount1FundedAmount, 'correctly paid the funder');
  });

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
    assert.equal(parseInt(await dbInstance.uintStorage(await hfInstance.Sha3('stakedTokenPercentage'))), 25, 'stakedTokenPercentage updated to 25');
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
