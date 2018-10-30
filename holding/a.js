var bn = require('bignumber.js');

const AssetExchange = artifacts.require("./ecosystem/AssetExchange.sol");
const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const DivToken = artifacts.require("./tokens/ERC20/DividendToken.sol");
const PlatformToken = artifacts.require("./tokens/erc20/BurnableToken.sol");
const ERC20Burner = artifacts.require("./ecosystem/ERC20Burner.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Operators = artifacts.require("./ecosystem/Operators.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");
const Pausible = artifacts.require("./ownership/Pausible.sol");
const CrowdsaleGeneratorERC20 = artifacts.require("./crowdsale/CrowdsaleGeneratorERC20.sol");
const CrowdsaleERC20 = artifacts.require("./crowdsale/CrowdsaleERC20.sol");
const CrowdsaleGeneratorETH = artifacts.require("./crowdsale/CrowdsaleGeneratorETH.sol");
const CrowdsaleETH = artifacts.require("./crowdsale/CrowdsaleETH.sol");

const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const broker1 = web3.eth.accounts[4];
const broker2 = web3.eth.accounts[5];
const operator = web3.eth.accounts[6];
const owner2 = web3.eth.accounts[7];
const asset1Holders = [user1, user2];
const asset2Holders = [user3, user2];

const ETH = 1000000000000000000;
const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = 1000000000000000000000;
const token1PerAccount = 10*ETH;
const token2PerAccount = 2*ETH;
const brokerFee = 1;

contract('AAAAAAAASSSSSSSSS', async() => {
  let dax;
  let db;
  let cm;
  let burner;
  let hash;
  let assetID;
  let assetToken;
  let assetTokenAddress;
  let platformToken;
  let erc20;
  let platform;
  let operators;
  let operatorID;
  let crowdsaleETH;
  let crowdsaleGenETH;
  let crowdsaleERC;
  let crowdsaleGenERC;


  it('Deploy hash contract', async() => {
    hash = await HashFunctions.new();
  });

  it('Deploy database contract', async() => {
    db = await Database.new([owner, owner2], true);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address);
    await db.enableContractManagement(cm.address);
    await cm.addContract('Owner', owner);
  });

  it('Deploy MyB token', async() => {
    platformToken = await PlatformToken.new('MyBit', tokenSupply);
  });

  it('Deploy Funding token', async() => {
    erc20 = await PlatformToken.new('DAI', tokenSupply);
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

  it("Spread erc20 to users", async() => {
    let userBalance;
    for (var i = 1; i < web3.eth.accounts.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await erc20.transfer(web3.eth.accounts[i], tokenPerAccount);
      userBalance = await erc20.balanceOf(web3.eth.accounts[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    // Check token ledger is correct
    let totalTokensCirculating = (web3.eth.accounts.length-1) * tokenPerAccount;
    let remainingTokens = bn(tokenSupply).minus(totalTokensCirculating);
    let ledgerTrue = bn(await erc20.balanceOf(owner)).eq(remainingTokens);
    assert.equal(ledgerTrue, true);
  });

  it('Deploy platform', async() => {
    platform = await Platform.new(db.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformWallet(owner);
    await platform.setPlatformToken(platformToken.address);
  });

  it('Deploy burner contract', async() => {
    burner = await ERC20Burner.new(db.address);
    await cm.addContract("ERC20Burner", burner.address);
  });

  it('Deploy operators', async() => {
    operators = await Operators.new(db.address);
    await cm.addContract("Operators", operators.address);
  });

  it('Deploy CrowdsaleGenerator', async() => {
    crowdsaleGenETH = await CrowdsaleGeneratorETH.new(db.address);
    await cm.addContract("CrowdsaleGeneratorETH", crowdsaleGenETH.address);
    await burner.setFee('0x667de2cd', crowdsaleGenETH.address,  250);
    //await burner.authorizeBurner(crowdsaleGenETH.address);
  });

  it('Deploy crowdsale contract', async() => {
    crowdsaleETH = await CrowdsaleETH.new(db.address);
    await cm.addContract('CrowdsaleETH', crowdsaleETH.address);
    await burner.setFee('0xa71d4c6a', crowdsaleETH.address,  250);
  //  await cm.addContract('Owner', owner); //Right now some database functions are operated from owner account
  //  await burner.authorizeBurner(crowdsaleETH.address);
  })

  it('Deploy CrowdsaleGenerator', async() => {
    crowdsaleGenERC = await CrowdsaleGeneratorERC20.new(db.address);
    await cm.addContract("CrowdsaleGeneratorERC20", crowdsaleGenERC.address);
    await burner.setFee('0x40aedf24', crowdsaleGenERC.address,  250);
    //await burner.authorizeBurner(crowdsaleGenERC.address);
  });

  it('Deploy crowdsale contract', async() => {
    crowdsaleERC = await CrowdsaleERC20.new(db.address);
    await cm.addContract('CrowdsaleERC20', crowdsaleERC.address);
    //await burner.authorizeBurner(crowdsaleERC.address);
    await burner.setFee('0xc9cd97eb', crowdsaleERC.address,  250);
  });

  it('Deploy exchange', async() => {
    dax = await AssetExchange.new(db.address);
    await cm.addContract('AssetExchange', dax.address);
    await burner.setFee('0xf08fa7b0', dax.address,  250);
    await burner.setFee('0xf5e20d6f', dax.address,  250);
  });

  it('Give platform burning permission', async() => {
    for(var i=1; i<web3.eth.accounts.length; i++){
      await burner.givePermission({from:web3.eth.accounts[i]});
      await platformToken.approve(burner.address, tokenSupply, {from:web3.eth.accounts[i]});
    }
  });

  it('Set operator', async() => {
    let tx = await operators.registerOperator(operator, 'OperatorOperator', {from: owner});
    operatorID = tx.logs[0].args._operatorID;
    await operators.acceptEther(operatorID, true, {from: operator});
    await operators.acceptERC20Token(operatorID, erc20.address, true, {from: operator});
  });

  it('Start crowdsale', async() => {
    var tx = await crowdsaleGenETH.createAssetOrderETH('assetURI', operatorID, 1, 20*ETH, brokerFee, {from:broker1});
    console.log(tx.logs[0].args);
    assetID = tx.logs[0].args._assetID;
    console.log(assetID);
  });

  it('User1 funding', async() => {
    var tx = await crowdsaleETH.buyAssetOrderETH(assetID, {from:user1, value:5*ETH});
    console.log(tx.logs[0].args);
  });

  it('Start crowdsaleERC20', async() => {
    var tx = await crowdsaleGenERC.createAssetOrderERC20('assetURI2', operatorID, 1, 20*ETH, brokerFee, erc20.address, {from:broker1});
    console.log(tx.logs[0].args);
    assetID = tx.logs[0].args._assetID;
    assetTokenAddress = tx.logs[0].args._tokenAddress;
  });

  it('User2 funding', async() => {
    await erc20.approve(crowdsaleERC.address, 20*ETH, {from:user2});
    var tx = await crowdsaleERC.buyAssetOrderERC20(assetID, 20*ETH, {from:user2});
    console.log(tx.logs[0].args);
  });

  //Create sell order
  it('Create sell order', async() => {
    assetToken = DivToken.at(assetTokenAddress);
    //Sell 2 tokens, at the price of 0.05 eth per token, i.e. for 0.1 eth total
    let tokenAmount = 2*ETH;
    let tokenPrice = 0.05*ETH;
    await assetToken.approve(dax.address, tokenAmount, {from:user2});
    let tx = await dax.createSellOrder(assetID, tokenAmount, tokenPrice, {from:user2});
    //order1ID = tx.logs[0].args._orderID;
    order1Creator = tx.logs[0].args._creator;
  });

  it('Buy order1', async() => {
    let tokenAmount = 2*ETH;
    let tokenPrice = 0.05*ETH;
    let amount = Number(bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH));
    tx = await dax.buyAsset(assetID, order1Creator, tokenAmount, tokenPrice, {from:user1, value:amount});
    console.log(tx.logs[0].args);
  });

  it('Create buy order', async() => {
    //Sell 2 tokens, at the price of 0.05 eth per token, i.e. for 0.1 eth total
    let tokenAmount = 0.5*ETH;
    let tokenPrice = 0.1*ETH;
    let amount = Number(bn(tokenAmount).multipliedBy(tokenPrice).dividedBy(ETH));
    let tx = await dax.createBuyOrder(assetID, tokenAmount, tokenPrice, {from:user1, value:amount});
    console.log(tx.logs[0].args);
    order2Creator = tx.logs[0].args._creator;
  });

});
