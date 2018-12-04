var bn = require('bignumber.js');

/* Contracts  */
const Token = artifacts.require("./tokens/distribution/FixedDistribution.sol");

const ETH = bn(10**18);
const tokenPerAccount = bn(1000).times(ETH);

contract('Fixed Distribution', async (accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const tokenHolders = [user1, user2];

  let token;
  let tokenURI = 'FixieFix';

  it('Deploy Token', async() => {
    token = await Token.new(tokenURI, tokenHolders, [tokenPerAccount, tokenPerAccount.times(2)]);
  });

});
