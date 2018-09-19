var bn = require('bignumber.js');

const Token = artifacts.require("./tokens/ERC20/BurnableToken.sol");

const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const tokenHolders = [user1, user2];

const ETH = 1000000000000000000;
const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = 10*ETH;

let tokenURI = 'https://mybit.io';

contract('Dividend Token Ether', async() => {
  let token;

  it('Deploy Token', async() => {
    token = await Token.new(tokenURI, tokenSupply);
    let supply = await token.totalSupply();
    assert.equal(supply, tokenSupply);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      console.log(web3.eth.accounts[i]);
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

  it('Fail to transfer', async() => {
    let err;
    try{
      await token.transfer(user2, 100*ETH, {from:user1});
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
      await token.transferFrom(user1, '', 0);
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
    balance2 = await token.balanceOf(user2);
    console.log(Number(balance2));
    await token.transferFrom(user2, user1, 5000, {from: user1});
    assert.equal(await token.allowance(user2, user1), 5000);
  });

  it('Decrease approval', async() => {
    await token.decreaseApproval(user1, 2500, {from:user2})
    assert.equal(await token.allowance(user2, user1), 2500);
  });

  it('Increase approval', async() => {
    await token.increaseApproval(user1, 2500, {from:user2})
    assert.equal(await token.allowance(user2, user1), 5000);
  });

  it('Decrease approval', async() => {
    await token.decreaseApproval(user1, 10000, {from:user2})
    assert.equal(await token.allowance(user2, user1), 0);
  });

  it('Fail to transfer from', async() => {
    let err;
    try{
      await token.transferFrom(user1, user2, 10000000*ETH);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Fail to transfer from', async() => {
    let err;
    try{
      await token.transfer('', 0, {from:user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Burn', async() => {
    let ownerBalanceBefore = await token.balanceOf(owner);
    await token.burn(ETH);
    let ownerBalanceAfter = await token.balanceOf(owner);
    let diff = bn(ownerBalanceBefore).minus(ownerBalanceAfter);
    assert.equal(diff.isGreaterThan(0), true);
  });
});
