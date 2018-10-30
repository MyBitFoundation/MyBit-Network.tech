const BigNumber = require('bignumber.js');

const Token = artifacts.require('./tokens/ERC20/BurnableToken.sol');
const TimedVote = artifacts.require('TimedVoteFixture');


const user1 = web3.eth.accounts[0];

const tokenSupply = 180000000000000000000000000;


let token, timedVote;

beforeEach(async() => {
  token = await Token.new("MyBit", tokenSupply);
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

    it('Detect committed', async() => {
      await timedVote._setCommitment(user1, 5);
      await timedVote._onlyCommitted();
    });
  });

  describe('#onlyUncommitted', () => {
    it('Detect uncommitted', async() => {
      await timedVote._onlyUncommitted();
    });

    it('Detect committed', throws(async() => {
      await timedVote._setCommitment(user1, 5);
      await timedVote._onlyUncommitted();
    }));
  });

  describe('#commit', () => {
    it('Fail with value 0', throws(async() => {
      await timedVote.commit(0);
    }));

    it('Fail without approval', throws(async() => {
      await timedVote.commit(5);
    }));

    it('Fail with insufficient approval', async() => {
      await token.transfer(user1, 100);
      await token.approve(timedVote.address, 5, {from: user1});
      await throws(async() => {
        await timedVote.commit(100);
      });
    });

    it('Succeed', async() => {
      await token.transfer(user1, 100);
      await token.approve(timedVote.address, 100, {from: user1});
      await timedVote.commit(100);
    });

    it('Fail double commit', async() => {
      await token.transfer(user1, 200);
      await token.approve(timedVote.address, 200, {from: user1});
      await timedVote.commit(100);
      await throws(async() => {
        await timedVote.commit(100);
      });
    });

    it('Emit Commit', async() => {
      await token.transfer(user1, 100);
      await token.approve(timedVote.address, 100, {from: user1});
      const { logs: events } = await timedVote.commit(100);
      assert.isAtLeast(events.length, 1);
      const event = events.pop();
      assert.strictEqual(event.event, 'Commit');
      assert.strictEqual(event.args.account, user1);
      assert.isTrue(BigNumber(event.args.value).isEqualTo(100));
    });
  });
});
