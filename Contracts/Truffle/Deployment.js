const Database = artifacts.require("./Database.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const ContractManager = artifacts.require("./ContractManager.sol");
const InitialVariables = artifacts.require("./InitialVariables.sol");
const AssetCreation = artifacts.require("./AssetCreation.sol");
const Asset = artifacts.require("./Asset.sol");


contract('Deploying and storing all contracts + validation', async (accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];
  let dbInstance;
  let hfInstance;
  let initialInstance;
  let contractManagerInstance;
  let assetCreationInstance;

  it("Owners should be assigned", async () => {
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
     hfInstance = await HashFunctions.new();

     /* Database Owners assigned properly */
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('owner', ownerAddr1)), true, 'Owner 1 assigned properly');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('owner', ownerAddr2)), true, 'Owner 2 assigned properly');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('owner', ownerAddr3)), true, 'Owner 3 assigned properly');
   });

   it('Assign ContractManager', async () => {
      contractManagerInstance = await ContractManager.new(dbInstance.address);

      /* Correct way of setting contract manager & check if its been assigned */
      await dbInstance.setContractManager(contractManagerInstance.address);
      assert.equal(await dbInstance.addressStorage(await hfInstance.stringString("contract", "ContractManager")),contractManagerInstance.address, 'Contract manager address equal');
      assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress("contract", contractManagerInstance.address)), true, 'Contract manager stored true');

      /*  Attempt to changeContractManager with wrong {from: details} &
          correct function signer since its fully viewable on blockchain*/
      // await dbInstance.changeContractManager(ownerAddr1, contractManagerInstance.address, web3.eth.accounts[5],{from:web3.eth.accounts[8]});
   });

   it('Add InitialVariables contract to database via contract manager', async () => {
    initialInstance = await InitialVariables.new(dbInstance.address);
    /* Check that initialvariables database address is correct compared to real database address */
    assert.equal(await initialInstance.database(), await dbInstance.address, 'Initial Variables database Address assigned properly');

    /* Add initialvariables contract to database and validate all fields are updated with correct outcome */
    await contractManagerInstance.addContract('InitialVariables', initialInstance.address, ownerAddr1);
    assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr1, 'addContract', await hfInstance.addressHash(initialInstance.address))), false, 'Contract manager to database === false');
    assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'InitialVariables')), initialInstance.address, 'Initial variables address correctly stored');
    assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', initialInstance.address)), true, 'Initial variables address == true');
   });

   it('Initialize InitialVariables  variables via startDapp', async () => {
     await initialInstance.startDapp();
     /* --------------------Asset Creation Variables----------------- */
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('myBitFoundationPercentage')), 1, 'myBitFoundationPercentage == 1');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('stakedTokenPercentage')), 2, 'myBitFoundationPercentage == 2');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('installerPercentage')), 97, 'installerPercentage == 97');

     /* ---------------------Staking Variables-------------------------- */
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('minimumStakeAmount')), 100, 'minimumStakeAmount == 100');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('minimumStakeTime')), 10, 'minimumStakeTime == 10');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('minimumWithdrawTime')), 5, 'minimumWithdrawTime == 5');


     /* -------------------Bug Bounty Variables------------------------ */
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('blocksForBugReview')), 25, 'blocksForBugReview == 25');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('blocksForExpertReview')), 25, 'blocksForExpertReview == 25');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('bugSubmissionCost')), 1000000000000000000, 'bugSubmissionCost == 1000000000000000000');

     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('expertVotePower')), 5, 'expertVotePower == 5');
     assert.equal(await dbInstance.uintStorage(await hfInstance.sha3('regularVotePower')), 1, 'expertVotePower == 1');

    // assert.equal(await dbInstance.uintStorage(await hfInstance.stringUint('bugSeverityCost', 1)), 100, 'bugSeverityCost 1 == 100');
    // assert.equal(await dbInstance.uintStorage(await hfInstance.stringUint('bugSeverityCost', 2)), 1000, 'bugSeverityCost 2 == 1000');
    // assert.equal(await dbInstance.uintStorage(await hfInstance.stringUint('bugSeverityCost', 3)), 10000, 'bugSeverityCost 3 == 10000');

   });

   it('Asset Creation contract deployment', async () => {
     assetCreationInstance = await AssetCreation.new(dbInstance.address);

     /* Ensure all variables are set in constructor and passed */
     assert.equal(await assetCreationInstance.database(), await dbInstance.address, 'Asset Creation database Address assigned properly');
     assert.equal(await assetCreationInstance.fundingTime(), 3000, 'Asset creation funding time === 3000');

     await contractManagerInstance.addContract('AssetCreation', assetCreationInstance.address, ownerAddr1);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr1, 'addContract', await hfInstance.addressHash(assetCreationInstance.address))), false, 'Contract manager(AssetCreation) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'AssetCreation')), assetCreationInstance.address, 'AssetCreation address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', assetCreationInstance.address)), true, 'AssetCreation address == true');
   });

   it('Asset contract deployment  ', async () => {
     /*assetCreationInstance = await AssetCreation.new(dbInstance.address);

      Ensure all variables are set in constructor and passed
     assert.equal(await assetCreationInstance.database(), await dbInstance.address, 'Asset Creation database Address assigned properly');
     assert.equal(await assetCreationInstance.fundingTime(), 3000, 'Asset creation funding time === 3000');

     await contractManagerInstance.addContract('AssetCreation', assetCreationInstance.address, ownerAddr1);
     assert.equal(await dbInstance.boolStorage(await hfInstance.getAuthorizeHash(contractManagerInstance.address, ownerAddr1, 'addContract', await hfInstance.addressHash(assetCreationInstance.address))), false, 'Contract manager(AssetCreation) to database === false');
     assert.equal(await dbInstance.addressStorage(await hfInstance.stringString('contract', 'AssetCreation')), assetCreationInstance.address, 'AssetCreation address correctly stored');
     assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress('contract', assetCreationInstance.address)), true, 'AssetCreation address == true');
     */
   });



});
