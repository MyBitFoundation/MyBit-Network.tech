var BigNumber = require('bignumber.js');

const ContractManager = artifacts.require("./ContractManager.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const Owned = artifacts.require("./Owned.sol");
const Database = artifacts.require("./Database.sol");
const UserAccess = artifacts.require('./UserAccess.sol');
const MyBitToken = artifacts.require('./ERC20.sol');
const TokenBurn = artifacts.require('./TokenBurn.sol');
const API = artifacts.require('./API.sol');

contract('Deploying and storing all contracts + validation', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];

  const account1 = web3.eth.accounts[3];
  const account2 = web3.eth.accounts[4];
  const account3 = web3.eth.accounts[5];
  const contractMimik = web3.eth.accounts[6];
  const assetCreator = web3.eth.accounts[7];

  const myBitPayoutAddress = web3.eth.accounts[8];
  const assetEscrowPayoutAddress = web3.eth.accounts[9];

  const decemberExpire = 1544015678;

  let dbInstance;
  let hfInstance;
  let apiInstance;
  let contractManagerInstance;
  let initialVariableInstance;
  let ownedInstance;
  let userAccessInstance;
  let tokenBurnInstance;
  let myBitTokenInstance;

  let transferAmount;
  let initialSupply;
  let myBitPrice = 3000;  // 10 to the power of 3 * 3 usd == 3000


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



   it('UserAccess deployment ', async () => {
     userAccessInstance = await UserAccess.new(dbInstance.address);
     assert.equal(await userAccessInstance.database(), await dbInstance.address, 'UserAccess database Address assigned properly');
     await contractManagerInstance.addContract('UserAccess', userAccessInstance.address, ownerAddr2);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr2, 'addContract', await hfInstance.addressHash(userAccessInstance.address))), false, 'Contract manager(UserAccess) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'UserAccess')), userAccessInstance.address, 'UserAccess address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', userAccessInstance.address)), true, 'UserAccess address == true');
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

   it('TokenBurn deployment ', async () => {
     tokenBurnInstance = await TokenBurn.new(dbInstance.address, myBitTokenInstance.address);
     await contractManagerInstance.addContract('TokenBurn', tokenBurnInstance.address, ownerAddr2);
   });

   it('Manually Approve user', async () => {
     await userAccessInstance.approveUser(account1, 1);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', account1)), 1, 'Access 1 manually granted');
     await userAccessInstance.approveUser(account2, 2);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', account2)), 2, 'Access 2 manually granted');
   });

   it('Manually remove user', async () => {
     await userAccessInstance.removeUser(account1);
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringAddress('userAccess', account1)), 0, 'Access manually removed');
   });

   it('Add mimik contract to add USD value', async () => {
     await contractManagerInstance.addContract('testContract', contractMimik, ownerAddr2);
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'testContract')), contractMimik, 'testContract set');
     await dbInstance.setUint(await hfInstance.stringHash('mybUSDPrice'), myBitPrice,{from:contractMimik});
     await dbInstance.setUint(await hfInstance.stringHash('mybUSDPriceExpiration'), decemberExpire,{from:contractMimik}); //1544015678 - 12 months ahead
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

   it('Approve token burn contract transfer', async () => {
     approvalAmount = transferAmount / 2;
     await myBitTokenInstance.approve(tokenBurnInstance.address, approvalAmount,{from:account1});
     let allowance = await myBitTokenInstance.allowance(account1, tokenBurnInstance.address);
     assert.equal(allowance, approvalAmount, 'Approval granted');
   });

   it('Burn token validation', async () => {
     // Modifier Check
     let whenNotPausedModifier = null;
     try {
       await dbInstance.setBool(await hfInstance.stringAddress('pause',tokenBurnInstance.address), true,{from:contractMimik});
       await tokenBurnInstance.burnTokens(2, {from:account1});
     }
     catch (error) {whenNotPausedModifier = error}
     assert.notEqual(whenNotPausedModifier, null, 'modifier whenNotPausedModifier');
     // set back to false after test
     await dbInstance.setBool(await hfInstance.stringAddress('pause',tokenBurnInstance.address), false,{from:contractMimik});

     let priceUpdatedModifier = null;
     try {
       await dbInstance.setUint(await hfInstance.stringHash('mybUSDPriceExpiration'), 0, {from:contractMimik});
       await tokenBurnInstance.burnTokens(2, {from:account1});
     }
     catch (error) {priceUpdatedModifier = error}
     assert.notEqual(priceUpdatedModifier, null, 'modifier priceUpdatedModifier');
     // set back to false after test
     await dbInstance.setUint(await hfInstance.stringHash('mybUSDPriceExpiration'), decemberExpire, {from:contractMimik});

     let basicverificationModifier = null;
     try {await tokenBurnInstance.burnTokens(7, {from:account1});}
     catch (error) {basicverificationModifier = error}
     assert.notEqual(basicverificationModifier, null, 'modifier basicVerificationModifierCurrentlevel');

     // assert accessCostMyB
     let accessCostMyBAssert = null;
     try {
       await dbInstance.setUint(await hfInstance.stringUint('accessTokenFee', 3), 0, {from:contractMimik});
       await tokenBurnInstance.burnTokens(3, {from:account1});
     }
     catch (error) {accessCostMyBAssert = error}
     assert.notEqual(accessCostMyBAssert, null, 'assert accessCostMyBAssert');
     // set back real value
     await dbInstance.setUint(await hfInstance.stringUint('accessTokenFee', 3), 100, {from:contractMimik});

     // require transferFrom
     let transferFromRequire = null;
     try {
       await tokenBurnInstance.burnTokens(3, {from:account2});
     }
     catch (error) {transferFromRequire = error}
     assert.notEqual(transferFromRequire, null, 'require transferFromRequire');
   });

 });
