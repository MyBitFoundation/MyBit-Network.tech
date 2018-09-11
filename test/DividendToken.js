var bn = require('bignumber.js');

const Token = artifacts.require("./tokens/ERC20/DividendToken.sol");

const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const tokenHolders = [user1, user2];

const ETH = 1000000000000000000;
const scaling = 1000000000000000000000000000000000000;
const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = 1000000000000000000000;

let tokenURI = 'https://mybit.io';

contract('Token', async() => {
  let token;

  it('Deploy Token', async() => {
    token = await Token.new(tokenURI, tokenSupply);
  });

  it("Spread tokens to users", async() => {
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

  //Test dividends functions
  it('View token uri', async() => {
    let _tokenURI = await token.tokenURI();
    assert.equal(tokenURI, _tokenURI); 
    console.log(tokenURI);
  });

  it('Send money to token contract', async() => {
    await web3.eth.sendTransaction({from:owner, to:token.address, value:10*ETH})
  });

  it('Fail to send money', async() => {
    let err;
    try{
      await web3.eth.sendTransaction({from:owner, to:token.address, value:0})
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('View dividends owed', async() => {
    let owed = new bn(await token.getOwedDividends(user1));
    let expected = new bn(10).multipliedBy(ETH).multipliedBy(tokenPerAccount).dividedBy(tokenSupply).integerValue(bn.ROUND_FLOOR);
    assert.equal(owed.isEqualTo(expected), true);
  });

  it('Transfer tokens with dividends not withdrawn', async() => {
    user2Balance1 = web3.eth.getBalance(user2);
    await token.transfer(user3, tokenPerAccount/2, {from: user2});
    user2Balance2 = web3.eth.getBalance(user2);
    console.log(user2Balance2 - user2Balance1);
    await token.collectOwedDividends({from: user2})
    user2Balance3 = web3.eth.getBalance(user2);
    console.log(user2Balance3 - user2Balance2);

    await web3.eth.sendTransaction({from:owner, to:token.address, value:10*ETH})
    user3Balance1 = web3.eth.getBalance(user3);
    await token.collectOwedDividends({from: user3})
    user3Balance2 = web3.eth.getBalance(user3);
    console.log(user3Balance2 - user3Balance1);

    await token.collectOwedDividends({from: user2})
    user2Balance4 = web3.eth.getBalance(user2);
    console.log(user2Balance4 - user2Balance3);

    await token.collectOwedDividends({from: user2})
    user2Balance5 = web3.eth.getBalance(user2);
    console.log(user2Balance5 - user2Balance4);

    user1Balance1 = web3.eth.getBalance(user1);
    await token.collectOwedDividends({from: user1})
    user1Balance2 = web3.eth.getBalance(user1);
    console.log(user1Balance2 - user1Balance1);
  });

  //Test transfer functions
  it('Fail to transfer', async() => {
    let err;
    try{
      await token.transfer(token.address, 1000);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to transfer', async() => {
    let err;
    try{
      await token.transfer(0, 1000);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to transfer from', async() => {
    let err;
    try{
      await token.transferFrom(user1, token.address, 1000);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to transfer from', async() => {
    let err;
    try{
      await token.transferFrom(user1, 0, 1000);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Get totalSupply', async() => {
    let supply = await token.totalSupply();
    assert.equal(supply, tokenSupply);
  });

  it('Approve user', async() => {
    await token.approve(user1, 10000, {from: user2});
    assert.equal(await token.allowance(user2, user1), 10000);
  });

  it('Transfer From', async() => {
    await token.transferFrom(user2, user1, 5000, {from: user1});
    assert.equal(await token.allowance(user2, user1), 5000);
  });

});
