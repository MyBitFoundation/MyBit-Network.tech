const Database = artifacts.require("./Database.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const ContractManager = artifacts.require("./ContractManager.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const AssetCreation = artifacts.require("./AssetCreation.sol");
const Asset = artifacts.require("./Asset.sol");
const Owned = artifacts.require("./Owned.sol");
const UserAccess = artifacts.require("./UserAccess.sol");
const FundingHub = artifacts.require("./FundingHub.sol");
const StakingBank = artifacts.require("./StakingBank.sol");
const AssetExchange = artifacts.require('./AssetExchange.sol');
const MyBitToken = artifacts.require('./MyBitToken.sol');
const OperatorEscrow = artifacts.require('./OperatorEscrow.sol');
const OracleHub = artifacts.require('./OracleHub.sol');
const TokenBurn = artifacts.require('./TokenBurn.sol');
const TokenFaucet = artifacts.require('./TokenFaucet.sol');
const API = artifacts.require('./API.sol');
const Test = artifacts.require('./Test.sol');


contract('ContractTest.sol', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];
  let dbInstance;
  let hfInstance;
  let initialInstance;
  let contractManagerInstance;
  let assetCreationInstance;
  let assetInstance;
  let userAccessInstance;
  let fundingHubInstance;
  let stakingBankInstance;
  let assetExchangeInstance;
  let myBitTokenInstance;
  let tokenStakingInstance;
  let tokenBurnInstance;
  let ownedInstance;
  let oracleInstance; 
  let operatorEscrowInstance;
  let tokenFaucetInstance; 
  let apiInstance; 
  let testInstance;

  const myBitFoundation = web3.eth.accounts[7]
  let installerEscrow; 

  let oracleQueryCost = 400000000;

  let tokenSupply = 281207344012426;
  let tokenDecimals = 10**8;

  it("Deploy All Contracts", async () => {

     // Deploy Database
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);

     // Hash Functions
     hfInstance = await HashFunctions.new();
     apiInstance = await API.new(dbInstance.address); 

     // Test Contract
     testInstance = await Test.new(dbInstance.address)
     assert.equal(await testInstance.database(), dbInstance.address);
     testInstance.deposit({value: web3.toWei(1, "ether")});
     assert.equal(Number(await testInstance.getBalance()), web3.toWei(1, "ether")); 
     installerEscrow = testInstance.address; 

     // ContractManager Contract
     contractManagerInstance = await ContractManager.new(dbInstance.address);
     await dbInstance.setContractManager(contractManagerInstance.address);

     // InitialVariables Contract
     initialInstance = await InitialVariables.new(dbInstance.address);
     await contractManagerInstance.addContract('InitialVariables', initialInstance.address, ownerAddr2);
     await initialInstance.startDapp(myBitFoundation, installerEscrow);

     // MyBitToken Contract
     myBitTokenInstance = await MyBitToken.new(tokenSupply, 'MyBit Token', tokenDecimals, 'MyB');
     assert.equal(await myBitTokenInstance.owner(), ownerAddr1);
     ownerBalance = await myBitTokenInstance.balanceOf(ownerAddr1); 
     assert.equal(ownerBalance, tokenSupply);
     await contractManagerInstance.addContract('MyBitToken', myBitTokenInstance.address, ownerAddr2); 

     // TokenFaucet Contract 
     tokenFaucetInstance = await TokenFaucet.new(myBitTokenInstance.address);
     await contractManagerInstance.addContract('TokenFaucet', tokenFaucetInstance.address, ownerAddr2);

     // OracleHub Contract 
     oracleInstance = await OracleHub.new(dbInstance.address);
     await contractManagerInstance.addContract('OracleHub', oracleInstance.address, ownerAddr2);

     // OperatorEscrowInstance
     operatorEscrowInstance = await OperatorEscrow.new(dbInstance.address, myBitTokenInstance.address);
     await contractManagerInstance.addContract('OperatorEscrow', operatorEscrowInstance.address, ownerAddr2);

     // Owned Contract
     ownedInstance = await Owned.new(dbInstance.address);
     await contractManagerInstance.addContract('Owned', ownedInstance.address, ownerAddr2);

     // UserAccess Contract
     userAccessInstance = await UserAccess.new(dbInstance.address);
     await contractManagerInstance.addContract('UserAccess', userAccessInstance.address, ownerAddr2);

     // AssetCreation Contract
     assetCreationInstance = await AssetCreation.new(dbInstance.address);
     await contractManagerInstance.addContract('AssetCreation', assetCreationInstance.address, ownerAddr2);

     // FundingHub Contract
     fundingHubInstance = await FundingHub.new(dbInstance.address);
     await contractManagerInstance.addContract('FundingHub', fundingHubInstance.address, ownerAddr2);

     // Asset Contract
     assetInstance = await Asset.new(dbInstance.address);
     await contractManagerInstance.addContract('Asset', assetInstance.address, ownerAddr2);

     // StakingBank Contract
     stakingBankInstance = await StakingBank.new(dbInstance.address);
     await contractManagerInstance.addContract('StakingBank', stakingBankInstance.address, ownerAddr2);

     // Asset Exchange Contract
     assetExchangeInstance = await AssetExchange.new(dbInstance.address);
     await contractManagerInstance.addContract('AssetExchange', assetExchangeInstance.address, ownerAddr2);

     // TokenBurn Contract
     tokenBurnInstance = await TokenBurn.new(dbInstance.address, myBitTokenInstance.address);
     await contractManagerInstance.addContract('TokenBurn', tokenBurnInstance.address, ownerAddr2);


   });


  it("Spread Tokens to users", async () => { 
    let tokenAirdropAmount = 10000 * tokenDecimals;   // 10,000 tokens
    for (var i = 1; i < web3.eth.accounts.length; i++) { 
      await myBitTokenInstance.transfer(web3.eth.accounts[i], tokenAirdropAmount, {from: ownerAddr1});
      assert.equal(await myBitTokenInstance.balanceOf(web3.eth.accounts[i]), tokenAirdropAmount);
    }
  });

  it("Fill TokenFaucet", async () => { 
    // Fill TokenFaucet
    let faucetAmount = 100000 * tokenDecimals;   // 100,000 tokens
    await myBitTokenInstance.approve(tokenFaucetInstance.address, faucetAmount);
    assert.equal(await myBitTokenInstance.allowance(ownerAddr1, tokenFaucetInstance.address), faucetAmount);
    await tokenFaucetInstance.deposit(faucetAmount);
    assert.equal(await myBitTokenInstance.balanceOf(tokenFaucetInstance.address), faucetAmount); 
    assert.equal(await tokenFaucetInstance.tokensInFaucet(), faucetAmount);
  });

  it("Check that addresses are set", async () => { 
    assert.equal(await testInstance.getAddress("TokenFaucet"), await apiInstance.contractAddress("TokenFaucet"));
    assert.equal(await testInstance.getAddress("TokenBurn"), await apiInstance.contractAddress("TokenBurn"));
    assert.equal(await testInstance.getAddress("MyBitToken"), await apiInstance.contractAddress("MyBitToken"));
    assert.equal(await testInstance.getAddress("OracleHub"), await apiInstance.contractAddress("OracleHub"));

  });

  // ----------------------------------Manually Add Ether and MyBit prices-------------------------------------------------------
  it('Add dummy account as a contract', async () => {
   await contractManagerInstance.addContract('TestContractMimic', ownerAddr1, ownerAddr2);
   assert.equal(await apiInstance.contractAddress('TestContractMimic'), ownerAddr1, 'TestContractMimic correctly stored');
   assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', ownerAddr1)), true, 'ownerAddr1 address == true');
  });

  it('Manually add Eth & MyB USD value', async () => {
   await dbInstance.setUint(await hfInstance.stringHash('mybUSDPrice'), 3000);
   await dbInstance.setUint(await hfInstance.stringHash('ethUSDPrice'), 380);
   assert.equal(Number(await apiInstance.mybUSDPrice()), 3000, 'mybUSDPrice set correctly');
   assert.equal(Number(await apiInstance.ethUSDPrice()), 380, 'ethUSDPrice set correctly');

   await dbInstance.setUint(await hfInstance.stringHash('mybUSDPriceExpiration'), 1544015678); //1544015678 - 12 months ahead
   await dbInstance.setUint(await hfInstance.stringHash('ethUSDPriceExpiration'), 1544015678); //1544015678 - 12 months ahead
   assert.equal(Number(await apiInstance.mybUSDPriceExpiration()), 1544015678, 'mybUSDPrice set correctly');
   assert.equal(Number(await apiInstance.ethUSDPriceExpiration()), 1544015678, 'ethUSDPrice set correctly');
  });
  //---------------------------------------------------------------------------------------------------------------------------

  it("Burn tokens to access platform", async () => { 
    let accessLevel = 3;
    let testContractTokens = 20000 * tokenDecimals;
    await testInstance.withdrawAndApprove(tokenBurnInstance.address, testContractTokens); 
    assert.equal(Number(await myBitTokenInstance.allowance(testInstance.address, tokenBurnInstance.address)), testContractTokens);
    assert.equal(Number(await myBitTokenInstance.balanceOf(testInstance.address)), testContractTokens);
    await testInstance.burnAccessTokens(accessLevel);
    assert.equal(Number(await apiInstance.userAccess(testInstance.address)), accessLevel);
  });

});


//newAsset(bytes32 _assetID, uint _amountToBeRaised, uint _managerPercentage, bytes32 _installerID, bytes32 _assetType)
