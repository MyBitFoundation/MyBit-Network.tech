var bn = require('bignumber.js');

/* Contracts  */
const Token = artifacts.require("./tokens/ERC20/distribution/FixedDistribution.sol");

const owner = web3.eth.accounts[0];
const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const tokenHolders = [user1, user2];

const ETH = 1000000000000000000;
const scaling = 1000000000000000000000000000000000000;
const tokenPerAccount = 1000000000000000000000;

let tokenURI = 'FixieFix';

contract('Fixed Distribution', async (accounts) => {
  let token;

  it('Deploy Token', async() => {
    token = await Token.new(tokenURI, tokenHolders, [tokenPerAccount, tokenPerAccount*2]);
  });

});
