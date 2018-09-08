var bn = require('bignumber.js');

const Token = artifacts.require("./tokens/ERC20/DividendToken.sol");
const Burner = artifacts.require("./tokens/ecosystem/ERC20Burner.sol");
const Database = artifacts.require("./database/Database.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");

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


  it('Deploy Database', async() => {
    db = await Database.new([owner], true);
    cm = await ContractManager.new(db.address);
    await db.enableContractManagement(cm.address);
  });


  it('Deploy Token', async() => {
    token = await Token.new("MyBit", tokenSupply);
  });

  it('Spread tokens to users', async () => {
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
  });

  it('Deploy ERC20Burner', async() => {
    burner = await Burner.new(token.address, db.address);
    console.log(burner.address); 
  });

  it('Add ERC20Burner to Database', async() => { 
    let contractName = "ERC20Burner"; 
    await cm.addContract(contractName, burner.address);
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

  it('Fail to burn tokens', async() => {
    let err;
    try{
      await burner.burn(user2, 1000, {from: user1});
    } catch(e){
      err = e;
      //console.log('Address not authorized')
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to authorize Burner', async() => {
    let err;
    try{
      await burner.authorizeBurner(user1, {from: user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Authorize Burner', async() => {
    await burner.authorizeBurner(user1);
  });

  it('Fail to reauthorize Burner', async() => {
    let err;
    try{
      await burner.authorizeBurner(user1);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to burn tokens', async() => {
    let err;
    try{
      await burner.burn(user2, 1000, {from: user1});
    } catch(e){
      err = e;
      //console.log('User has not given allowance');
    }
    assert.notEqual(err, undefined);
  });

  it('Burn tokens', async() => {
    await token.approve(burner.address, 1000, {from: user2});
    await burner.burn(user2, 1000, {from: user1});
  });

  it('Revoke authorization', async() => {
    await burner.removeBurner(user1);
  });

  it('Fail to revoke authorization', async() => {
    let err;
    try{
      await burner.removeBurner(user1);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

});
