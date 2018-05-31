var BigNumber = require('bignumber.js');

const Asset = artifacts.require('./Asset.sol');
const AssetCreation = artifacts.require('./AssetCreation.sol');
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

  let assetInstance;
  let assetCreationInstance;
  let contractManagerInstance;
  let dbInstance;
  let fundingHubInstance;
  let hfInstance;
  let initialVariableInstance;
  let AssetExchangeInstance;
  let myBitTokenInstance;
  let operatorEscrowInstance;
  let oracleHubInstance;
  let ownedInstance;
  let tokenBurnInstance;
  let tokenFaucetInstance;
  let userAccessInstance;

  let myBitPayoutAddress = web3.eth.accounts[8];
  let assetEscrowPayoutAddress = web3.eth.accounts[9];


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
     assert.equal(await dbInstance.uintStorage(await hfInstance.stringHash('installerPercentage')), 99, 'installerPercentage == 97');
   });

   it('MyBitToken contract deployment ', async () => {
     let initialSupply = 18000000000000000 * 10**10;
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
});
