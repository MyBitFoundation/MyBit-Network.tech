var bn = require('bignumber.js');

/* Contracts  */
const Token = artifacts.require("./tokens/distribution/FixedDistribution.sol");

const ETH = 1000000000000000000;
const scaling = 1000000000000000000000000000000000000;
const tokenPerAccount = 1000000000000000000000;

contract('Fixed Distribution', async (accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const tokenHolders = [user1, user2];

  let token;
  let tokenURI = 'FixieFix';

  it('Deploy Token', async() => {
    token = await Token.new(tokenURI, tokenHolders, [tokenPerAccount, tokenPerAccount*2]);
  });

});
