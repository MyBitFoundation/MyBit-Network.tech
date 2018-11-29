const bn = require('bignumber.js');

/* Contracts  */
const Token = artifacts.require("./tokens/distribution/MintableDistribution.sol");

const ETH = bn(10**18);
const scaling = bn(10**36);
const tokenPerAccount = bn(1000).times(ETH);

contract('Mintable Distribution', async (accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const user3 = accounts[3];
  const tokenHolders = [user1, user2];
  const tokenSupply = tokenHolders.length * tokenPerAccount;

  let token;
  let tokenURI = 'MintyMint';

  it('Deploy Token', async() => {
    token = await Token.new(tokenURI, owner);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      console.log(accounts[i]);
      await token.mint(tokenHolders[i], tokenPerAccount);
      userBalance = bn(await token.balanceOf(tokenHolders[i]));
      assert.equal(userBalance.eq(tokenPerAccount), true);
    }
    // Check token ledger is correct
    //let totalTokensCirculating = tokenHolders.length * tokenPerAccount;
    //let remainingTokens = bn(tokenSupply).minus(totalTokensCirculating);
    //let ledgerTrue = bn(await token.balanceOf(owner)).eq(remainingTokens);
    assert.equal(bn(await token.balanceOf(owner)).eq(0), true);
  });

  it('Finish minting', async() => {
    await token.finishMinting();
  });

  it('Fail to mint tokens', async() => {
    let err;
    try{
      await token.mint(user3, bn(100).times(ETH), {from:user3});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Send money to token contract', async() => {
    await web3.eth.sendTransaction({from:owner, to:token.address, value:bn(10).times(ETH)});
    await web3.eth.sendTransaction({from:owner, to:token.address, value:0});
  });

  it('View dividends owed', async() => {
    let owed = new bn(await token.getUnclaimedAmount(user1));
    let expected = new bn(10).multipliedBy(ETH).multipliedBy(tokenPerAccount).dividedBy(tokenSupply).integerValue(bn.ROUND_FLOOR);
    assert.equal(owed.isEqualTo(expected), true);
  });

  it('Transfer tokens with dividends not withdrawn', async() => {
    user2Balance1 = web3.eth.getBalance(user2);
    await token.withdraw({from: user2})
    user2Balance2 = web3.eth.getBalance(user2);
    console.log(user2Balance2 - user2Balance1);

    await token.issueDividends({from:owner, value:10*ETH})

    await token.withdraw({from: user2})
    user2Balance3 = web3.eth.getBalance(user2);
    console.log(user2Balance3 - user2Balance2);

    await token.withdraw({from: user2})
    user2Balance4 = web3.eth.getBalance(user2);
    console.log(user2Balance4 - user2Balance3);

    user1Balance1 = web3.eth.getBalance(user1);
    await token.withdraw({from: user1})
    user1Balance2 = web3.eth.getBalance(user1);
    console.log(user1Balance2 - user1Balance1);
  });

  it('Get totalSupply', async() => {
    let supply = await token.totalSupply();
    assert.equal(supply, tokenSupply);
  });

});
