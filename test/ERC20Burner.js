var bn = require('bignumber.js');

const Token = artifacts.require("./tokens/ERC20/MyBitToken.sol");
const ERC20Burner = artifacts.require("./access/ERC20Burner.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const Platform = artifacts.require("./ecosystem/PlatformFunds.sol");
const TestBurner = artifacts.require("./test/TestBurner.sol");


const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const tokenHolders = [user1, user2];

const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = 1000000000000000000000;


contract('Burner', async() => {
  let burner;
  let token;
  let db;
  let cm;
  let events;
  let platform;
  let testBurner;

  let testBurnerMethodID;

  it('Deploy Database', async() => {
    db = await Database.new([owner], true);
    events = await Events.new(db.address);
    cm = await ContractManager.new(db.address, events.address);
    await db.enableContractManagement(cm.address);
  });

  it('Deploy Token', async() => {
    token = await Token.new("MyBit", tokenSupply);
  });

  it('Spread tokens to users', async () => {
    await token.transfer(user1, tokenPerAccount);
    await token.transfer(user2, tokenPerAccount);
    /*
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await token.transfer(tokenHolders[i], tokenPerAccount);
      userBalance = await token.balanceOf(tokenHolders[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    // Check token ledger is correct
    let totalTokensCirculating = tokenHolders.length * tokenPerAccount;
    let remainingTokens = bn(tokenSupply).minus(totalTokensCirculating);
    let ledgerTrue = bn(await token.balanceOf(owner)).eq(remainingTokens);
    assert.equal(ledgerTrue, true);
    */
  });

  it('Set platform', async() => {
    platform = await Platform.new(db.address, events.address);
    await cm.addContract('PlatformFunds', platform.address);
    await platform.setPlatformToken(token.address);
  });


  it('Deploy ERC20Burner', async() => {
    burner = await ERC20Burner.new(db.address, events.address);
    await cm.addContract("ERC20Burner", burner.address);
    console.log(burner.address);
  });

  it('Deploy TestBurner', async() => {
    testBurner = await TestBurner.new(db.address, burner.address);
    await cm.addContract("TestBurner", testBurner.address);
  });


  it('Fail to send ether', async() => {
    let err;
    try{
      await web3.eth.sendTransaction({from:user1, to: burner.address, value: 10000})
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  // Only contract can burn tokens
  // Fee is not set
  // Did not approve burner
  it('Fail to burn tokens from user account', async() => {
    console.log(user1);
    console.log(user2);
    console.log(burner.address);
    let err;
    try{
      await burner.burn(user2, 1000, {from: user1});
    } catch(e){
      err = e;
      //console.log('Address not authorized')
    }
    assert.notEqual(err, undefined);
  });


  // Did not approve burner to spend tokens
  // permissions not set
  it('Fail to burn tokens from test burner', async() => {
    console.log(user1);
    console.log(user2);
    console.log(burner.address);
    let err;
    try{
      await testBurner.burnTokensManualFee(1000, {from: user1});
    } catch(e){
      err = e;
      //console.log('Address not authorized')
    }
    assert.notEqual(err, undefined);
  });


  // Fee not set
  // User has not given permission to current contract state
  it('Fail to burn tokens from test Burner', async() => {
    let err;
    let burnAmount = 1000;
    testBurnerMethodID = await testBurner.getMethodID();
    await token.approve(burner.address, burnAmount, {from: user1});
    try{
      await testBurner.burnTokens({from: user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Set testBurner fee', async() => {
    await burner.setFee(testBurnerMethodID, testBurner.address, 1000);
  })

  // User has not given permission to current state
  it('Fail to burn tokens', async() => {
    let err;
    let burnAmount = 1000;
    try{
      await token.approve(burner.address, burnAmount, {from: user2});
      await burner.burn(user2, burnAmount, {from: user1});
    } catch(e){
      err = e;
      //console.log('User has not given permission to current state');
    }
    assert.notEqual(err, undefined);
  });

  it('Give permissions to current state (both users)', async() => {
    await cm.setContractStatePreferences(true, true, {from: user1});
    await cm.setContractStatePreferences(true, true, {from: user2});
  });

  it('Burn tokens using methodID fee', async() => {
    await token.approve(burner.address, 1000, {from: user1});
    await testBurner.burnTokens({from:user1});
  });

  it('Remove permissions to current state (both users)', async() => {
    await cm.setContractStatePreferences(false, false, {from: user1});
    await cm.setContractStatePreferences(false, false, {from: user2});
  });

  // Permissions are removed
  it('Fail to burn', async() => {
    let err;
    try {
      await testBurner.burnTokensManualFee(1000, {from: user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Restore permissions to current state (both users)', async() => {
    await cm.setContractStatePreferences(true, true, {from: user1});
    await cm.setContractStatePreferences(true, true, {from: user2});
  });

  it('Burn tokens using manual fee', async() => {
    await token.approve(burner.address, 1000, {from: user1});
    await testBurner.burnTokensManualFee(1000, {from: user1});
  });

  // Fail to approve burner to spend tokens
  it('Fail to burn tokens from test burner', async() => {
    let err;
    try{
      await testBurner.burnTokensManualFee(1000, {from: user1});
    } catch(e){
      err = e;
      //console.log('Address not authorized')
    }
    assert.notEqual(err, undefined);
  });

  // TODO: set fee to 0 and try
  // TODO:

});
