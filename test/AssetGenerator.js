var bn = require('bignumber.js');

const Token = artifacts.require("./tokens/erc20/DividendToken.sol");
const PlatformToken = artifacts.require("./tokens/erc20/BurnableToken.sol");
const ERC20Burner = artifacts.require("./ecosystem/ERC20Burner.sol");
const AssetGenerator = artifacts.require("./ecosystem/AssetGenerator.sol");
const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const FixedDistribution = artifacts.require("./tokens/distribution/FixedDistribution.sol");

const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");


const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const broker = web3.eth.accounts[4];
const operator = web3.eth.accounts[5];
const tokenHolders = [broker, user1, user2, user3];


const ETH = 1000000000000000000;
const scaling = 1000000000000000000000000000000000000;
const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = 1000000000000000000000;
const brokerFee = tokenPerAccount/10;

contract('Asset Generator', async() => {

  let token;
  let platformToken;
  let AssetGen;
  let db;
  let cm;
  let hash;
  let platform;
  let assetID;
  let assetURI;
  let tokenAddress;

/*
  it('Deploy hash contract', async() => {
    hash = await HashFunctions.new();
  });
*/
  it('Deploy database contract', async() => {
    db = await Database.new([owner], true);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address);
    await db.enableContractManagement(cm.address);
  });

  it('Deploy MyB token', async() => {
    platformToken = await PlatformToken.new('MyBit', tokenSupply);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 1; i < web3.eth.accounts.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await platformToken.transfer(web3.eth.accounts[i], tokenPerAccount);
      userBalance = await platformToken.balanceOf(web3.eth.accounts[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    // Check token ledger is correct
    let totalTokensCirculating = (web3.eth.accounts.length-1) * tokenPerAccount;
    let remainingTokens = bn(tokenSupply).minus(totalTokensCirculating);
    let ledgerTrue = bn(await platformToken.balanceOf(owner)).eq(remainingTokens);
    assert.equal(ledgerTrue, true);
  });

  it('Deploy platform funds', async() => {
    platform = await Platform.new(db.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformToken(platformToken.address);
  });

  it('Deploy burner contract', async() => {
    burner = await ERC20Burner.new(db.address);
    await cm.addContract("ERC20Burner", burner.address);
  });

  it('Deploy AssetGenerator', async() => {
    assetGen = await AssetGenerator.new(db.address);
    await cm.addContract("AssetGenerator", assetGen.address);
    await burner.setFee('0xf76c5c55', assetGen.address,  250);
    await burner.setFee('0x4e38c7f4', assetGen.address,  250);
  });

  it('Give platform burning permission', async() => {
    for(var i=1; i<web3.eth.accounts.length; i++){
      await burner.givePermission({from:web3.eth.accounts[i]});
      await platformToken.approve(burner.address, tokenSupply, {from:web3.eth.accounts[i]});
    }
  });

  it('Create Non-transferable Asset', async() => {
    assetURI = 'ASSET';
    let tx = await assetGen.createAsset(assetURI, tokenHolders, [brokerFee, tokenPerAccount, tokenPerAccount, tokenPerAccount], {from:broker});
    console.log(tx.logs[0].args);
    token = FixedDistribution.at(tx.logs[0].args._tokenAddress);
    brokerBalance = await token.balanceOf(broker);
    user1Balance = await token.balanceOf(user1);
    user2Balance = await token.balanceOf(user2);
    user3Balance = await token.balanceOf(user3);
    console.log(Number(brokerBalance));
    console.log(Number(user1Balance));
    console.log(Number(user2Balance));
    console.log(Number(user3Balance));
  });

  it('Fail to create Non-transferable Asset', async() => {
    let err;
    //Fail because user tokenHolder != amount
    try{
      assetURI = 'ASSETFail';
      await assetGen.createAsset(assetURI, tokenHolders, [tokenPerAccount, tokenPerAccount, tokenPerAccount], {from:broker});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Create Tradeable Asset', async() => {
    assetURI = 'ASSETASSET';
    let tx = await assetGen.createTradeableAsset(assetURI, tokenHolders, [brokerFee, tokenPerAccount, tokenPerAccount, tokenPerAccount], {from:broker});
    console.log(tx.logs[0].args);
    token = FixedDistribution.at(tx.logs[0].args._tokenAddress);
    brokerBalance = await token.balanceOf(broker);
    user1Balance = await token.balanceOf(user1);
    user2Balance = await token.balanceOf(user2);
    user3Balance = await token.balanceOf(user3);
    console.log(Number(brokerBalance));
    console.log(Number(user1Balance));
    console.log(Number(user2Balance));
    console.log(Number(user3Balance));
  });

  it('Fail to create Tradeable Asset', async() => {
    let err;
    //Fail because user tokenHolder != amount
    try{
      assetURI = 'ASSETASSETFail';
      await assetGen.createTradeableAsset(assetURI, tokenHolders, [tokenPerAccount, tokenPerAccount, tokenPerAccount], {from:broker});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });
});
