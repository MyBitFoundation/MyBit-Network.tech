var bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

const Token = artifacts.require("./tokens/erc20/DividendToken.sol");
const PlatformToken = artifacts.require("./tokens/erc20/MyBitToken.sol");
//const ERC20Burner = artifacts.require("./access/ERC20Burner.sol");
const AssetGenerator = artifacts.require("./ecosystem/AssetGenerator.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const FixedDistribution = artifacts.require("./tokens/distribution/FixedDistribution.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Platform = artifacts.require("./ecosystem/Platform.sol");

const ETH = 10**18;
const scaling = 10**36;
const tokenSupply = bn(180000000).times(ETH);
const tokenPerAccount = bn(1000).times(ETH);
const assetManagerFee = tokenPerAccount.dividedBy(10);

//Just passing an empty address for kyber, since no burning is being done
const kyber = {
  address : '0x0000000000000000000000000000000000000000'
};

contract('Asset Generator', async(accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const user3 = accounts[3];
  const assetManager = accounts[4];
  const operator = accounts[5];
  const tokenHolders = [assetManager, user1, user2, user3];

  let token;
  let platformToken;
  let AssetGen;
  let db;
  let events;
  let cm;
  let hash;
  let platform;
  //let burner;
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

  it('Deploy Events', async() => {
    events = await Events.new(db.address);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address, events.address);
    await db.enableContractManagement(cm.address);
  });

  it('Deploy MyB token', async() => {
    platformToken = await PlatformToken.new('MyBit', 'MYB', tokenSupply.toString());
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 1; i < accounts.length; i++) {
      //console.log(accounts[i]);
      await platformToken.transfer(accounts[i], tokenPerAccount.toString());
      userBalance = bn(await platformToken.balanceOf(accounts[i]));
      assert.equal(userBalance.eq(tokenPerAccount), true);
    }
    // Check token ledger is correct
    let totalTokensCirculating = bn(accounts.length-1).times(tokenPerAccount);
    let remainingTokens = tokenSupply.minus(totalTokensCirculating);
    let ledgerTrue = bn(await platformToken.balanceOf(owner)).eq(remainingTokens);
    assert.equal(ledgerTrue, true);
  });

  it('Deploy platform funds', async() => {
    platform = await Platform.new(db.address, events.address);
    await cm.addContract('Platform', platform.address);
    await platform.setPlatformToken(platformToken.address);
  });
/*
  it('Deploy burner contract', async() => {
    burner = await ERC20Burner.new(db.address, events.address, kyber.address);
    await cm.addContract("ERC20Burner", burner.address);
  });
*/
  it('Deploy AssetGenerator', async() => {
    assetGen = await AssetGenerator.new(db.address, events.address);
    await cm.addContract("AssetGenerator", assetGen.address);
    //await burner.setFee('0xf76c5c55', assetGen.address,  250);
    //await burner.setFee('0x4e38c7f4', assetGen.address,  250);
  });

  it('Give permission to contract state', async() => {
    for(var i=1; i<accounts.length; i++){
      await cm.setContractStatePreferences(true, true, {from: accounts[i]});
      //await platformToken.approve(burner.address, tokenSupply.toString(), {from:accounts[i]});
    }
  });

  it('Create Non-transferable Asset', async() => {
    assetURI = 'ASSET';
    let block = await web3.eth.getBlock('latest');
    await assetGen.createAsset(assetURI, assetManager, tokenHolders, [assetManagerFee, tokenPerAccount.toString(), tokenPerAccount.toString(), tokenPerAccount.toString()], {from:assetManager});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset created'), origin: assetManager}, fromBlock: block.number});
    token = await FixedDistribution.at(logs[0].args.asset);
    assetManagerBalance = await token.balanceOf(assetManager);
    user1Balance = await token.balanceOf(user1);
    user2Balance = await token.balanceOf(user2);
    user3Balance = await token.balanceOf(user3);
    console.log(Number(assetManagerBalance));
    console.log(Number(user1Balance));
    console.log(Number(user2Balance));
    console.log(Number(user3Balance));
  });

  it('Fail to create Non-transferable Asset', async() => {
    let err;
    //Fail because user tokenHolder != amount
    try{
      assetURI = 'ASSETFail';
      await assetGen.createAsset(assetURI, assetManager, tokenHolders, [tokenPerAccount.toString(), tokenPerAccount.toString(), tokenPerAccount.toString()], {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Create Tradeable Asset', async() => {
    assetURI = 'ASSETASSET';
    let block = await web3.eth.getBlock('latest');
    await assetGen.createTradeableAsset(assetURI, assetManager, tokenHolders, [assetManagerFee, tokenPerAccount.toString(), tokenPerAccount.toString(), tokenPerAccount.toString()], {from:assetManager});
    let logs = await events.getPastEvents('LogAsset', {filter: {messageID: web3.utils.sha3('Asset created'), origin: assetManager}, fromBlock: block.number});
    token = await FixedDistribution.at(logs[0].args.asset);
    assetManagerBalance = await token.balanceOf(assetManager);
    user1Balance = await token.balanceOf(user1);
    user2Balance = await token.balanceOf(user2);
    user3Balance = await token.balanceOf(user3);
    console.log(Number(assetManagerBalance));
    console.log(Number(user1Balance));
    console.log(Number(user2Balance));
    console.log(Number(user3Balance));
  });

  it('Fail to create Tradeable Asset', async() => {
    let err;
    //Fail because user tokenHolder != amount
    try{
      assetURI = 'ASSETASSETFail';
      await assetGen.createTradeableAsset(assetURI, assetManager, tokenHolders, [tokenPerAccount.toString(), tokenPerAccount.toString(), tokenPerAccount.toString()], {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to destroy generator', async() => {
    let err;
    try{
      await assetGen.destroy({from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Destroy generator', async() => {
    await assetGen.destroy();
  });
});
