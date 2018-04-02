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
const Test = artifacts.require('./Test.sol');


contract('Test Contract', async (accounts) => {
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
  let testInstance;

  const myBitFoundation = web3.eth.accounts[7]
  let installerEscrow; 

  let oracleQueryCost = 400000000;

  it("Deploy All Contracts", async () => {

     // Deploy Database
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);

     // Hash Functions
     hfInstance = await HashFunctions.new();

     // Test Contract
     testInstance = await Test.new(dbInstance.address)
     testInstance.deposit({value: web3.toWei(1, "ether")});
     installerEscrow = testInstance.address; 

     // ContractManager Contract
     contractManagerInstance = await ContractManager.new(dbInstance.address);
     await dbInstance.setContractManager(contractManagerInstance.address);

     // InitialVariables Contract
     initialInstance = await InitialVariables.new(dbInstance.address);
     await contractManagerInstance.addContract('InitialVariables', initialInstance.address, ownerAddr2);
     await initialInstance.startDapp(myBitFoundation, installerEscrow);

     // MyBitToken Contract
     myBitTokenInstance = await MyBitToken.new(281207344012426, 'MyBit Token', 8, 'MyB');
     await contractManagerInstance.addContract('MyBitToken', myBitTokenInstance.address, ownerAddr2); 

     // TokenFaucet Contract 
     tokenFaucetInstance = await TokenFaucet.new(myBitTokenInstance.address);

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

     // Set deploy Finished
     await contractManagerInstance.setDeployFinished();

     // Fill TokenFaucet
     let faucetAmount = 100000 * (10**8);
     await myBitTokenInstance.approve(tokenFaucetInstance.address, faucetAmount);
     await tokenFaucetInstance.deposit(faucetAmount, {from: ownerAddr1});
   });


   it("Approve all users", async () => { 
     for (var i = 0; i < web3.eth.accounts.length; i++) { 
      await userAccessInstance.approveUser(web3.eth.accounts[i], 1, {from: ownerAddr1})
      assert.equal(dbInstance.uintStorage(hfInstance.stringAddress("userAccess", web3.eth.accounts[i])), 1);
     }

   });

   it("Burn tokens from Test contract", async () => {
      let testContractTokens = 2000 * (10**8)
      let accessLevel = 3;
      await testInstance.burnAccessTokens(accessLevel, testContractTokens);

   });
});


//newAsset(bytes32 _assetID, uint _amountToBeRaised, uint _managerPercentage, bytes32 _installerID, bytes32 _assetType)
