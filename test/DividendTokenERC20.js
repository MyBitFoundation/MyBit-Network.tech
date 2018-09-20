var bn = require('bignumber.js');

const Token = artifacts.require("./tokens/ERC20/DividendTokenERC20.sol");
const BurnableToken = artifacts.require("./tokens/ERC20/BurnableToken.sol");
const ApproveAndCall = artifacts.require("./test/ApproveAndCallTest.sol");

const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];
const tokenHolders = [user1, user2];

const ETH = 1000000000000000000;
const scaling = 1000000000000000000000000000000000000;
//const tokenSupply = 180000000000000000000000000;
const tokenPerAccount = 1000000000000000000000;
const tokenSupply = tokenHolders.length * tokenPerAccount;

let tokenURI = 'https://mybit.io';

contract('Dividend Token ERC20', async() => {
  let token;
  let erc20;

  it("Deploy standard token", async() => {
    erc20 = await BurnableToken.new('Dai', 10000*ETH);
  });

  it('Deploy Dividend Token', async() => {
    token = await Token.new(tokenURI, erc20.address);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      //console.log(web3.eth.accounts[i]);
      await token.mint(tokenHolders[i], tokenPerAccount);
      userBalance = await token.balanceOf(tokenHolders[i]);
      assert.equal(userBalance, tokenPerAccount);
    }
    // Check token ledger is correct
    //let totalTokensCirculating = tokenHolders.length * tokenPerAccount;
    //let remainingTokens = bn(tokenSupply).minus(totalTokensCirculating);
    //let ledgerTrue = bn(await token.balanceOf(owner)).eq(remainingTokens);
    assert.equal(await token.balanceOf(owner), 0);
  });

  //Test dividends functions
  it('View token uri', async() => {
    let _tokenURI = await token.getTokenURI();
    assert.equal(tokenURI, _tokenURI);
    console.log(tokenURI);
  });

  it('Send erc20 to token contract', async() => {
    await erc20.approve(token.address, 10*ETH);
    await token.issueDividends(10*ETH, {from:owner});
  });

  it('Fail to send money', async() => {
    let err;
    try{
      await erc20.approve(token.address, 10*ETH);
      await token.issueDividends(0, {from:owner});
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
    user2Balance1 = await erc20.balanceOf(user2);
    await token.transfer(user3, tokenPerAccount/2, {from: user2});
    user2Balance2 = await erc20.balanceOf(user2);
    console.log(user2Balance2 - user2Balance1);
    await token.withdraw({from: user2})
    user2Balance3 = await erc20.balanceOf(user2);
    console.log(user2Balance3 - user2Balance2);

    await token.issueDividends(10*ETH, {from:owner})
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
    await erc20.transfer(token.address, 10*ETH);
  });

  it('Check for direct transfers', async() => {
    let tx = await token.checkForTransfers();
    diff = tx.logs[0].args._difference;
    assert.equal(diff, 10*ETH);
  });

  it('Approve and call', async() => {
    let approveandcall = await ApproveAndCall.new();
    tx = await token.approveAndCall(approveandcall.address, 1000, '');
    console.log(tx.logs[0].args);
    assert.equal(tx.logs[0].args.value, 1000);
  });

});
