const BigNumber = require('bignumber.js');

const Token = artifacts.require('./tokens/ERC20/BurnableToken.sol');
const TimedVote = artifacts.require('TimedVote');


const tokenSupply = 180000000000000000000000000;


contract('TimedVote', async() => {
  let token;
  let timedVote;

  it('Deploy Token', async() => {
    token = await Token.new("MyBit", tokenSupply);
  });

  it('Spread tokens to users', async() => {});

  it('Deploy TimedVote', async() => {
    timedVote = await TimedVote.new(token.address);
  })
});
