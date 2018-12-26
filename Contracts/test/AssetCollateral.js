var BigNumber = require('bignumber.js');

const AssetCollateral = artifacts.require('./AssetCollateral.sol');
const Database = artifacts.require("./Database.sol");
const ContractManager = artifacts.require("./ContractManager.sol");
const HashFunctions = artifacts.require("./HashFunctions.sol");
const API = artifacts.require("./API.sol");
const MyBitToken = artifacts.require('./MyBitToken.sol');

contract('AssetCollateral', async(accounts) => {
  const ownerAddr1 = web3.eth.accounts[0];
  const ownerAddr2 = web3.eth.accounts[1];
  const ownerAddr3 = web3.eth.accounts[2];

  const assetCreator = web3.eth.accounts[3];

  let collateral, api, myb, assetID;

  it('Deploy MyB', async() => {
    let initialSupply = 180000000000000000000000000;
    myb = await MyBitToken.new(initialSupply, 'MyBit', 18, 'MYB');
  });

  it("Owners should be assigned", async () => {
     dbInstance = await Database.new(ownerAddr1, ownerAddr2, ownerAddr3);
     hfInstance = await HashFunctions.new();
     api = await API.new(dbInstance.address);
     collateral = await AssetCollateral.new(api.address, myb.address);
     myb.transfer(collateral.address, 10000000000000);

     // Database Owners assigned properly
     assert.equal(await api.isOwner(ownerAddr1), true, 'Owner 1 assigned properly');
     assert.equal(await api.isOwner(ownerAddr2), true, 'Owner 2 assigned properly');
     assert.equal(await api.isOwner(ownerAddr3), true, 'Owner 3 assigned properly');
   });

   it('Assign ContractManager', async () => {
      contractManagerInstance = await ContractManager.new(dbInstance.address);

      await dbInstance.setContractManager(contractManagerInstance.address);
      assert.equal(await dbInstance.addressStorage(await hfInstance.stringString("contract", "ContractManager")),contractManagerInstance.address, 'Contract manager address equal');
      assert.equal(await dbInstance.boolStorage(await hfInstance.stringAddress("contract", contractManagerInstance.address)), true, 'Contract manager stored true');

      await contractManagerInstance.addContract('HashFunctions', hfInstance.address, ownerAddr2);
      await contractManagerInstance.addContract('API', api.address, ownerAddr2);
      await contractManagerInstance.addContract('AssetCollateral', collateral.address, ownerAddr2);
      await contractManagerInstance.addContract('Owner', ownerAddr1, ownerAddr2);
   });

   it('Set up asset', async () => {
     assetID = await hfInstance.stringHash('Asset');
     await dbInstance.setUint(await hfInstance.stringBytes("assetIncome", assetID), 0);
     await dbInstance.setUint(await hfInstance.stringBytes("amountRaised", assetID), 100);
   });

   it('Set up escrow', async() => {
     await collateral.lockEscrow(assetID, assetCreator, 100);
   });

   it('Fail to withdraw', async() => {
     let err;
     try{
       await collateral.withdrawEscrow(assetID, {from: assetCreator});
     } catch (e){
       err = e;
     }
     assert.notEqual(err, undefined);
   });

   it('Add income', async() => {
     await dbInstance.setUint(await hfInstance.stringBytes("assetIncome", assetID), 25);
   });

   it('View unlocked', async() => {
     let unlocked = await collateral.unlockedEscrow(assetID);
     assert.equal(unlocked, 25);
   });

   it('Withdraw', async() => {
     let balanceBefore = await myb.balanceOf(assetCreator);
     await collateral.withdrawEscrow(assetID, {from: assetCreator});
     let balanceAfter = await myb.balanceOf(assetCreator);
     assert.equal(balanceAfter-balanceBefore, 25);
   });

   it('Add too much income', async() => {
     await dbInstance.setUint(await hfInstance.stringBytes("assetIncome", assetID), 125);
   });

   it('View unlocked doesnt go over 100', async() => {
     let unlocked = await collateral.unlockedEscrow(assetID);
     console.log("amount unlocked is ", Number(unlocked));
     assert.equal(unlocked, 75);
   });

   it('Withdraw rest of escrow', async() => {
     let balanceBefore = await myb.balanceOf(assetCreator);
     await collateral.withdrawEscrow(assetID, {from: assetCreator});
     let balanceAfter = await myb.balanceOf(assetCreator);
     assert.equal(balanceAfter-balanceBefore, 75);
   });


});
