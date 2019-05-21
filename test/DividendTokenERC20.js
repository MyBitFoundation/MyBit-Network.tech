var bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

const MiniMeTokenFactory = artifacts.require("MiniMeTokenFactory.sol");
const MiniMeToken = artifacts.require("MiniMeToken.sol");
const MyBitToken = artifacts.require("./tokens/ERC20/MyBitToken.sol");
const ApproveAndCall = artifacts.require("./test/ApproveAndCallTest.sol");

const ETH = bn(10**18);
const scaling = bn(10**36);
//const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = bn(1000).times(ETH);

contract('Dividend Token ERC20', async(accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const user3 = accounts[3];
  const tokenHolders = [user1, user2];
  const tokenSupply = tokenHolders.length * tokenPerAccount;

  let token;
  let erc20;
  let tokenURI = 'https://mybit.io';

  it("Deploy standard token", async() => {
    erc20 = await MyBitToken.new('Dai', 'DAI', bn(10000).times(ETH));
  });

  it('Deploy Dividend Token', async() => {
    tokenFactory = await MiniMeTokenFactory.new();
    tx = await tokenFactory.createCloneToken('0x0000000000000000000000000000000000000000', 0, tokenURI, 18, tokenURI, true, erc20.address, {from:owner});
    token = await MiniMeToken.at(tx.logs[0].args.token);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      //console.log(accounts[i]);
      await token.generateTokens(tokenHolders[i], tokenPerAccount.toString());
      userBalance = bn(await token.balanceOf(tokenHolders[i]));
      assert.equal(userBalance.eq(tokenPerAccount), true);
    }
    // Check token ledger is correct
    //let totalTokensCirculating = tokenHolders.length * tokenPerAccount;
    //let remainingTokens = bn(tokenSupply).minus(totalTokensCirculating);
    //let ledgerTrue = bn(await token.balanceOf(owner)).eq(remainingTokens);
    assert.equal(bn(await token.balanceOf(owner)).eq(0), true);
  });

  //Test dividends functions
  it('View token uri', async() => {
    let _tokenURI = await token.name();
    assert.equal(tokenURI, _tokenURI);
    console.log(tokenURI);
  });

  it('Send erc20 to token contract', async() => {
    await erc20.approve(token.address, bn(10).times(ETH).toString());
    await token.issueDividends(bn(10).times(ETH).toString(), {from:owner});
  });

  it('Fail to send money', async() => {
    let err;
    try{
      await erc20.approve(token.address, bn(10).times(ETH).toString());
      await token.issueDividends(0, {from:owner});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('View dividends owed', async() => {
    let owed = new bn(await token.getAmountOwed(user1));
    let expected = new bn(10).multipliedBy(ETH).multipliedBy(tokenPerAccount).dividedBy(tokenSupply).integerValue(bn.ROUND_FLOOR);
    assert.equal(owed.isEqualTo(expected), true);
  });

  it('Transfer tokens with dividends not withdrawn', async() => {
    user2Balance1 = await erc20.balanceOf(user2);
    await token.transfer(user3, tokenPerAccount.div(2).toString(), {from: user2});
    user2Balance2 = await erc20.balanceOf(user2);
    console.log(user2Balance2 - user2Balance1);
    await token.withdraw({from: user2})
    user2Balance3 = await erc20.balanceOf(user2);
    console.log(user2Balance3 - user2Balance2);

    await token.issueDividends(bn(10).times(ETH).toString(), {from:owner})
    user3Balance1 = await erc20.balanceOf(user3);
    await token.withdraw({from: user3})
    user3Balance2 = await erc20.balanceOf(user3);
    console.log(user3Balance2 - user3Balance1);

    await token.withdraw({from: user2})
    user2Balance4 = await erc20.balanceOf(user2);
    console.log(user2Balance4 - user2Balance3);

    await token.withdraw({from: user2})
    user2Balance5 = await erc20.balanceOf(user2);
    console.log(user2Balance5 - user2Balance4);

    user1Balance1 = await erc20.balanceOf(user1);
    await token.withdraw({from: user1})
    user1Balance2 = await erc20.balanceOf(user1);
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

  it('Check for direct transfers', async() => {
    let tx = await token.checkForTransfers();
    diff = tx.logs[0].args._difference;
    assert.equal(diff, 0);
  });

  it('Send erc20 directly to dividend contract', async() => {
    await erc20.transfer(token.address, bn(10).times(ETH).toString());
  });

  it('Check for direct transfers', async() => {
    let tx = await token.checkForTransfers();
    diff = tx.logs[0].args._difference;
    assert.equal(bn(diff).eq(10*ETH), true);
  });

  it('Approve and call', async() => {
    let approveandcall = await ApproveAndCall.new();
    tx = await token.approveAndCall(approveandcall.address, 1000, '0x00000000');
    console.log(tx.logs[0].args);
    assert.equal(tx.logs[0].args._amount, 1000);
  });

});
