var bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

const MiniMeTokenFactory = artifacts.require("MiniMeTokenFactory.sol");
const MiniMeToken = artifacts.require("MiniMeToken.sol");
const ApproveAndCall = artifacts.require("./test/ApproveAndCallTest.sol");

const ETH = bn(10**18);
const scaling = bn(10**36);
//const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = bn(1000).times(ETH);

contract('Dividend Token Ether', async(accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const user3 = accounts[3];
  const tokenHolders = [user1, user2];
  const tokenSupply = tokenHolders.length * tokenPerAccount;

  let token;
  let tokenURI = 'https://mybit.io';

  it('Deploy Token', async() => {
    tokenFactory = await MiniMeTokenFactory.new();
    tx = await tokenFactory.createCloneToken('0x0000000000000000000000000000000000000000', 0, tokenURI, 18, tokenURI, true, '0x0000000000000000000000000000000000000000', {from:owner});
    token = await MiniMeToken.at(tx.logs[0].args.token);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      console.log(accounts[i]);
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

  it('Fail to mint tokens', async() => {
    let err;
    try{
      await token.mint(user3, 100*ETH, {from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  //Test dividends functions
  it('View token uri', async() => {
    let _tokenURI = await token.name();
    assert.equal(tokenURI, _tokenURI);
    console.log(tokenURI);
  });

  it('Send money to token contract', async() => {
    await web3.eth.sendTransaction({from:owner, to:token.address, value:10*ETH});
    await web3.eth.sendTransaction({from:owner, to:token.address, value:0});
  });


  it('View dividends owed', async() => {
    let owed = new bn(await token.getAmountOwed(user1));
    let expected = new bn(10).multipliedBy(ETH).multipliedBy(tokenPerAccount).dividedBy(tokenSupply).integerValue(bn.ROUND_FLOOR);
    assert.equal(owed.isEqualTo(expected), true);
  });

  it('Transfer tokens with dividends not withdrawn', async() => {
    user2Balance1 = web3.eth.getBalance(user2);
    await token.transfer(user3, tokenPerAccount.div(2).toString(), {from: user2});
    user2Balance2 = web3.eth.getBalance(user2);
    console.log(user2Balance2 - user2Balance1);
    await token.withdraw({from: user2})
    user2Balance3 = web3.eth.getBalance(user2);
    console.log(user2Balance3 - user2Balance2);

    await web3.eth.sendTransaction({from:owner, to:token.address, value:bn(10).times(ETH).toString()})
    user3Balance1 = web3.eth.getBalance(user3);
    await token.withdraw({from: user3})
    user3Balance2 = web3.eth.getBalance(user3);
    console.log(user3Balance2 - user3Balance1);

    await token.withdraw({from: user2})
    user2Balance4 = web3.eth.getBalance(user2);
    console.log(user2Balance4 - user2Balance3);

    await token.withdraw({from: user2})
    user2Balance5 = web3.eth.getBalance(user2);
    console.log(user2Balance5 - user2Balance4);

    user1Balance1 = web3.eth.getBalance(user1);
    await token.withdraw({from: user1})
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
    await token.approve(user1, 5000, {from: user2});
    assert.equal(await token.allowance(user2, user1), 5000);
  });

  it('Transfer From', async() => {
    balance2 = await token.balanceOf(user2);
    console.log(Number(balance2));
    await token.transferFrom(user2, user1, 5000, {from: user1});
    assert.equal(await token.allowance(user2, user1), 0);
  });

  it('Fail to transfer from', async() => {
    let err;
    try{
      tx = await token.transferFrom(user1, user2, bn(10000000).times(ETH).toString(), {from:user2});
      console.log(tx);
      console.log(tx.logs[0].args);
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

  it('Approve and call', async() => {
    let approveandcall = await ApproveAndCall.new();
    tx = await token.approveAndCall(approveandcall.address, 1000, '0x00000000');
    console.log(tx.logs[0].args);
    assert.equal(tx.logs[0].args._amount, 1000);
  });


});
