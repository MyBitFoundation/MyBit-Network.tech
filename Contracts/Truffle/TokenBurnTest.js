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


contract('TokenBurnTest', async (accounts) => {
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

  /* Events */
  let LogOraclizeQuerySent;

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
     // HashFunctions Contract
     hfInstance = await HashFunctions.new();
     assetType = await hfInstance.sha3('BitcoinATM');
     installerID =  await hfInstance.sha3('installerID');
     assetID = await hfInstance.sha3('TestAsset');
     // Asset Contract*/
   });

   it('Initialize', async () => {
     await initialInstance.startDapp();
     await contractManagerInstance.addContract('MyBitFoundation', myBitPayoutAddress, ownerAddr2);
     await contractManagerInstance.addContract('AssetEscrow', assetEscrowPayoutAddress, ownerAddr2);
     await userAccessInstance.approveUser(ownerAddr1, 1);
//     console.log('accessLevel set properly;;;/? ' + await dbInstance.uintStorage(await hfInstance.stringUint("accessLevel", 1)));
  //   console.log('minimum stake ;;;/? ' + await dbInstance.uintStorage(await hfInstance.sha3("minimumStakeAmount")));

     LogOraclizeQuerySent = await tokenBurnInstance.LogOraclizeQuerySent({},{fromBlock: 0, toBlock: 'latest'});
     LogCallBackRecieved = await tokenBurnInstance.LogCallBackRecieved({},{fromBlock: 0, toBlock: 'latest'});
     LogMyBitBurnt = await tokenBurnInstance.LogMyBitBurnt({},{fromBlock: 0, toBlock: 'latest'});
     console.log('Contract Address; ' + tokenBurnInstance.address);
     LogOraclizeQuerySent.watch(
           async function(e,r){
               if(!e){
                 let jsonResult = JSON.stringify(r);
                 let jsonData = JSON.parse(jsonResult);
                 console.log('---LogOraclizeQuerySent---');
                 console.log('From: ' + jsonData['args']._from);
                 console.log('AccessLevelDesired: ' + jsonData['args']._accessLevelDesired);
                 console.log('Timestamp: ' + jsonData['args']._timestamp);
                 console.log('--------------------------');
             }
           }
         );
     LogMyBitBurnt.watch(
          async function(e,r){
               if(!e){
                  let jsonResult = JSON.stringify(r);
                  let jsonData = JSON.parse(jsonResult);
                   console.log('---LogMyBitBurnt---');
                   console.log('Burner: ' + jsonData['args']._burner);
                   console.log('Amount: ' + jsonData['args']._amount);
                   console.log('Timestamp: ' + jsonData['args']._timestamp);
                   console.log('--------------------------');
              }
           }
         );
     LogCallBackRecieved.watch(
          async function(e,r){
             console.log('inside callback');
               if(!e){
                 console.log(r);
                 let jsonResult = JSON.stringify(r);
                 let jsonData = JSON.parse(jsonResult);
                 console.log('---LogCallBackRecieved---');
                 console.log('Sender: ' + jsonData['args']._sender);
                 console.log('Usd Price: ' + jsonData['args']._usdPrice);
                 console.log('Access Level: ' + jsonData['args']._accessLevel);
                 console.log('--------------------------');
                 // TODO; need to grab the cost from inside smart contract
                finalCost = (10/parseFloat(jsonData['args']._usdPrice) * (10 * 8));
                await myBitTokenInstance.approve(tokenBurnInstance.address, finalCost);
                await tokenBurnInstance.burnTokens(parseInt(jsonData['args']._accessLevel), finalCost);
                // asset
             }
           }
        );

   });


   it('Burn Query', async () => {
     accessLevelQuery = 2;
     await tokenBurnInstance.burnQuery(2);
   });



 });
