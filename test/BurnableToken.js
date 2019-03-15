var bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

const Token = artifacts.require("./tokens/ERC20/MyBitToken.sol");

const ETH = bn(10**18);
const tokenSupply = bn(180000000).times(ETH);
const tokenPerAccount = bn(10).times(ETH);

contract('Dividend Token Ether', async(accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const user3 = accounts[3];
  const tokenHolders = [user1, user2];

  let token;
  let tokenURI = 'https://mybit.io';
  let tokenSymbol = 'MYB';

  it('Deploy Token', async() => {
    token = await Token.new(tokenURI, tokenSymbol, tokenSupply.toString());
    let supply = bn(await token.totalSupply());
    assert.equal(supply.eq(tokenSupply), true);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      console.log(accounts[i]);
      await token.transfer(tokenHolders[i], tokenPerAccount.toString());
      userBalance = bn(await token.balanceOf(tokenHolders[i]));
      assert.equal(userBalance.eq(tokenPerAccount), true);
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
    let supply = bn(await token.totalSupply());
    assert.equal(supply.eq(tokenSupply), true);
  });

  it('Approve user', async() => {
    await token.approve(user1, 10000, {from: user2});
    assert.equal(await token.allowance(user2, user1), 10000);
  });

  it('Transfer From', async() => {
    await token.transferFrom(user2, user1, 5000, {from: user1});
    assert.equal(bn(await token.allowance(user2, user1)).eq(5000), true);
  });

  it('Decrease approval', async() => {
    await token.decreaseApproval(user1, 2500, {from:user2})
    assert.equal(bn(await token.allowance(user2, user1)).eq(2500), true);
  });

  it('Increase approval', async() => {
    await token.increaseApproval(user1, 2500, {from:user2})
    assert.equal(bn(await token.allowance(user2, user1)).eq(5000), true);
  });

  it('Decrease approval', async() => {
    await token.decreaseApproval(user1, 10000, {from:user2})
    assert.equal(bn(await token.allowance(user2, user1)).eq(0), true);
  });

  it('Fail to transfer from', async() => {
    let err;
    try{
      await token.transferFrom(user1, user2, bn(10000000).times(ETH));
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
    let ownerBalanceBefore = bn(await token.balanceOf(owner));
    await token.burn(ETH);
    let ownerBalanceAfter = bn(await token.balanceOf(owner));
    let diff = ownerBalanceBefore.minus(ownerBalanceAfter);
    assert.equal(diff.eq(ETH), true);
  });
});
