const BigNumber = require('bignumber.js');

const Token = artifacts.require('./tokens/ERC20/BurnableToken.sol');
const TimedVote = artifacts.require('TimedVoteFixture');


const user1 = web3.eth.accounts[0];

const tokenSupply = 180000000000000000000000000;


let token, timedVote;

before(async() => {
  token = await Token.new("MyBit", tokenSupply);
});

beforeEach(async() => {
  timedVote = await TimedVote.new(token.address);
});


function throws (executor) {
  return async() => {
    try {
      await executor();
      assert.fail();
    } catch (e) {}
  }
}

function succeeds (executor) {
  return async() => {
    try {
      await executor();
    } catch (e) {
      assert.fail(e);
    }
  }
}


contract('TimedVote', () => {
  describe('#isCommitted', () => {
    it('Detect uncommitted', async() => {
      const committed = await timedVote.isCommitted(user1);
      assert.isFalse(committed);
    });

    it('Detect committed', async() => {
      await timedVote._setCommitment(user1, 5);
      const committed = await timedVote.isCommitted(user1);
      assert.isTrue(committed);
    });
  });

  describe('#onlyCommitted', () => {
    it('Detect uncommitted', throws(async() => {
      await timedVote._onlyCommitted();
    }));

    it('Detect committed', succeeds(async() => {
      await timedVote._setCommitment(user1, 5);
      await timedVote._onlyCommitted();
    }));
  });
});
