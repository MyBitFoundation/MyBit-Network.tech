var request = require('request');

const options = {
  url: '',
  method: '',
  body: '',
  headers: ''
};

const urls  = {
  eth: 'https://api.coinmarketcap.com/v1/ticker/Ethereum',
  myb: 'https://api.coinmarketcap.com/v1/ticker/mybit-token/'
};

//json(https://api.coinmarketcap.com/v1/ticker/ethereum/).0.price_usd
//json(https://api.coinmarketcap.com/v1/ticker/mybit-token/).0.price_usd

/* Contracts  */
const ContractManager = artifacts.require("./ContractManager.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const OracleHub = artifacts.require('./OracleHub.sol');
const Owned = artifacts.require("./Owned.sol");
const Database = artifacts.require("./Database.sol");

<<<<<<< HEAD:SolcCoverage/test/TestOraclize.js

contract('TestOraclize', async (accounts) => {
=======
contract('Deploying and storing all contracts + validation', async (accounts) => {
>>>>>>> f0a19f6418c8b5a1be2cca107ba7fa8805683278:Contracts/Tests/TestOraclize.js
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];

  const access1Account = web3.eth.accounts[3];
  const access2Account = web3.eth.accounts[4];
  const backupAddress = web3.eth.accounts[5];

  const myBitPayoutAddress = web3.eth.accounts[8];
  const assetEscrowPayoutAddress = web3.eth.accounts[9];

  let contractManagerInstance;
  let hfInstance;
  let initialVariableInstance;
  let oracleHubInstance;
  let ownedInstance;
  let dbInstance;

  let ethUSDPrice;
  let mybUSDPrice;

  let ethAPIPrice;
  let mybAPIPrice;

  it('API ETH USD coinmarketcap', async () => {
      options.url = urls.eth;
      options.method = 'GET';
      request(options, function (error, response) {
        var jsonResponse = JSON.parse(response.body)
        console.log('ETH USD: ', parseInt(jsonResponse[0].price_usd));
        ethAPIPrice = parseInt(jsonResponse[0].price_usd);
      });
  });

  it('API MYB USD coinmarketcap', async () => {
      options.url = urls.myb;
      options.method = 'GET';
      request(options, function (error, response) {
        var jsonResponse = JSON.parse(response.body)
        console.log('MyB USD: ', parseInt(1000 * jsonResponse[0].price_usd));
        mybAPIPrice = parseInt(1000 * jsonResponse[0].price_usd);
      });
  });


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
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('stakedTokenPercentage')), 2, 'myBitFoundationPercentage == 2');
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('installerPercentage')), 97, 'installerPercentage == 97');
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

  it('Update USD prices', async () => {
    let eUSDPriceBefore = parseInt(await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPrice')));
    let mUSDPriceBefore = parseInt(await dbInstance.uintStorage(await hfInstance.stringHash('ethUSDPrice')));
    var ethUSDPriceAfter;
    var mybUSDPriceAfter;

    let ethUSDQueryGasCost = parseInt(await oracleHubInstance.ethUSDQuery.estimateGas({value:web3.toWei(0.1,'ether')}));

    let requireEtherModifier = null;
    try {await oracleHubInstance.ethUSDQuery();}
    catch (error) {requireEtherModifier = error}
    assert.notEqual(requireEtherModifier, null, 'modifier requireEtherModifier');

    await oracleHubInstance.ethUSDQuery({value:web3.toWei(0.1,'ether')});

    let LogEthUSDQuery = await oracleHubInstance.LogEthUSDQuery({},{fromBlock:0, toBlock:'latest'});
    let LogmybUSDQuery = await oracleHubInstance.LogmybUSDQuery({},{fromBlock:0, toBlock:'latest'});

    let LogCallBackUSDEth = await oracleHubInstance.LogFundingCallbackReceived({},{fromBlock:0, toBlock:'latest'});
    let LogCallBackUSDMyB = await oracleHubInstance.LogBurnCallbackReceived({},{fromBlock:0, toBlock:'latest'});


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
                assert.equal(jsonData['args']._result, ethAPIPrice, 'ETH API and oraclize results correct');
                let storedValue = await dbInstance.uintStorage(await hfInstance.stringHash("ethUSDPrice"));
                assert.equal(storedValue, ethAPIPrice, 'Stored value ETH USD correctly');

                let requireEtherModifier = null;
                try {await oracleHubInstance.mybUSDQuery();}
                catch (error) {requireEtherModifier = error}
                assert.notEqual(requireEtherModifier, null, 'modifier requireEtherModifier');

                await oracleHubInstance.mybUSDQuery({value:web3.toWei(0.1,'ether')}); //random number for now, first query is free, second is not
                LogCallBackUSDEth.stopWatching();
              }});

    LogCallBackUSDMyB.watch(
          async function(e,r){
              if(!e){
                let jsonResult = JSON.stringify(r);
                let jsonData = JSON.parse(jsonResult);
                console.log('LogCallBackUSDMyB - Triggered');
                console.log('_tokenPrice: ' + jsonData['args']._tokenPrice);
                assert.equal(jsonData['args']._tokenPrice, mybAPIPrice, 'MYB API and oraclize results correct');
                let storedValue = await dbInstance.uintStorage(await hfInstance.stringHash("mybUSDPrice"));
                assert.equal(storedValue, mybAPIPrice, 'Stored value MyB USD correctly');
                LogCallBackUSDMyB.stopWatching();
              }});
      });

    it('Attempt to mimik oraclize', async () => {
      let bytes32Value = web3.fromAscii('ethereum', 32);

      let isOraclizeModifier = null;
      try {await oracleHubInstance.__callback(bytes32Value, 'test');}
      catch (error) {isOraclizeModifier = error}
      assert.notEqual(isOraclizeModifier, null, 'modifier isOraclizeModifier');
    });



});
