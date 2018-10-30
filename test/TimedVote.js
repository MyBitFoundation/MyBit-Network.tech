const BigNumber = require('bignumber.js');

const Token = artifacts.require('./tokens/ERC20/BurnableToken.sol');
const TimedVote = artifacts.require('TimedVoteFixture');


const tokenSupply = 180000000000000000000000000;


let token, timedVote;

before(async() => {
  token = await Token.new("MyBit", tokenSupply);
});

beforeEach(async() => {
  timedVote = await TimedVote.new(token.address);
});


contract('TimedVote', () => {});
