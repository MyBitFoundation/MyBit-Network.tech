var bn = require('bignumber.js');

/* Contracts  */
const Token = artifacts.require("./tokens/distribution/MintableDistribution.sol");

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

let tokenURI = 'MintyMint';

contract('Mintable Distribution', async (accounts) => {
  let token;

  it('Deploy Token', async() => {
    token = await Token.new(tokenURI, owner);
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    for (var i = 0; i < tokenHolders.length; i++) {
      console.log(web3.eth.accounts[i]);
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

  it('Finish minting', async() => {
    await token.finishMinting();
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

  it('Send money to token contract', async() => {
    await web3.eth.sendTransaction({from:owner, to:token.address, value:10*ETH});
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
