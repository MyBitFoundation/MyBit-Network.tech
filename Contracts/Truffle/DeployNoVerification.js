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
const BugBank = artifacts.require("./BugBank.sol");
const BugBounty = artifacts.require('./BugBounty.sol');
const MarketPlace = artifacts.require('./MarketPlace.sol');
const MyBitToken = artifacts.require('./MyBitToken.sol');
const TokenStaking = artifacts.require('./TokenStaking.sol');
const TokenBurn = artifacts.require('./TokenBurn.sol');

contract('TestUserAccess', async (accounts) => {
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
  let bugBankInstance;
  let bugBountyInstance;
  let marketPlaceInstance;
  let myBitTokenInstance;
  let tokenStakingInstance;
  let tokenBurnInstance;
  let ownedInstance;


  it("Deploy All Contracts", async () => {
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
     hfInstance = await HashFunctions.new();
     // ContractManager Contract
     contractManagerInstance = await ContractManager.new(dbInstance.address);
     await dbInstance.setContractManager(contractManagerInstance.address);

     // InitialVariables Contract
     initialInstance = await InitialVariables.new(dbInstance.address);
     await contractManagerInstance.addContract('InitialVariables', initialInstance.address, ownerAddr2);
     await initialInstance.startDapp();

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

     // FundingHub Contract
     fundingHubInstance = await FundingHub.new(dbInstance.address);
     await contractManagerInstance.addContract('FundingHub', fundingHubInstance.address, ownerAddr2);

     // Asset Contract
     assetInstance = await Asset.new(dbInstance.address);
     await contractManagerInstance.addContract('Asset', assetInstance.address, ownerAddr2);

     // StakingBank Contract
     stakingBankInstance = await StakingBank.new(dbInstance.address);
     await contractManagerInstance.addContract('StakingBank', stakingBankInstance.address, ownerAddr2);

     // BugBank Contract
     bugBankInstance = await BugBank.new(dbInstance.address);
     await contractManagerInstance.addContract('BugBank', bugBankInstance.address, ownerAddr2);

     // BugBounty Contract
     bugBountyInstance = await BugBounty.new(dbInstance.address);
     await contractManagerInstance.addContract('BugBounty', bugBountyInstance.address, ownerAddr2);

     marketPlaceInstance = await MarketPlace.new(dbInstance.address);
     await contractManagerInstance.addContract('MarketPlace', marketPlaceInstance.address, ownerAddr2);

     // TokenStaking Contract
     tokenStakingInstance = await TokenStaking.new(dbInstance.address, myBitTokenInstance.address);
     await contractManagerInstance.addContract('TokenStaking', tokenStakingInstance.address, ownerAddr2);

     // TokenBurn Contract
     tokenBurnInstance = await TokenBurn.new(dbInstance.address, myBitTokenInstance.address);
     await contractManagerInstance.addContract('TokenBurn', tokenBurnInstance.address, ownerAddr2);

     // Set deploy Finished
     await contractManagerInstance.setDeployFinished();
   });

   it("Deploy All Contracts", async () => {

   });
});


//newAsset(bytes32 _assetID, uint _amountToBeRaised, uint _managerPercentage, bytes32 _installerID, bytes32 _assetType)
