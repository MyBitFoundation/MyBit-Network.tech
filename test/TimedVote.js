const BigNumber = require('bignumber.js');

const Token = artifacts.require('./tokens/ERC20/BurnableToken.sol');
const TimedVote = artifacts.require('TimedVoteFixture');


const user1 = web3.eth.accounts[0];

const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
const tokenSupply = 180000000000000000000000000;
const validAddress = '0xbaCc40C0Df5E6eC2B0A4e9d1A0F748473F7f8b1a';


let token, timedVote;


function throws (executor) {
  return async() => {
    try {
      await executor();
      assert.fail();
    } catch (e) {}
  }
}


contract('TimedVote', () => {
  // ----
  // Hook
  // ----
  beforeEach(async() => {
    token = await Token.new("MyBit", tokenSupply);
    timedVote = await TimedVote.new(token.address);
  });

  // --------------
  // Pure Condition
  // --------------

  describe('Pure Condition', () => {
    describe('~addressNull', () => {
      it('Null', async() => {
        const null_ = await timedVote._addressNull(NULL_ADDRESS);
        assert.isTrue(null_);
      });

      it('Nonnull', async() => {
        const null_ = await timedVote._addressNull(validAddress);
        assert.isFalse(null_);
      });
    });
  });

  // --------------
  // View Condition
  // --------------

  describe('View Condition', () => {
    describe('#accountCommitted', () => {
      it('Uncommitted', async() => {
        const committed = await timedVote.accountCommitted(user1);
        assert.isFalse(committed);
      });

      it('Committed', async() => {
        await timedVote._setCommitment(user1, 5);
        const committed = await timedVote.accountCommitted(user1);
        assert.isTrue(committed);
      });
    });
  });

  // --------
  // Modifier
  // --------

  describe('Modifier', () => {
    describe('~onlyCommitted', () => {
      it('Reject uncommitted', throws(async() => {
        await timedVote._onlyCommitted();
      }));

      it('Accept committed', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._onlyCommitted();
      });
    });

    describe('~onlyUncommitted', () => {
      it('Accept uncommitted', async() => {
        await timedVote._onlyUncommitted();
      });

      it('Reject committed', throws(async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._onlyUncommitted();
      }));
    });

    describe('~onlyValidAddress', () => {
      it('Accept valid', async() => {
        await timedVote._onlyValidAddress(validAddress);
      });

      it('Reject null', throws(async() => {
        await timedVote._onlyValidAddress(NULL_ADDRESS);
      }));
    });
  });

  // ---------
  // Interface
  // ---------

  describe('Interface', () => {
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

    describe('#commitmentOf', () => {
      it('No commitment', async() => {
        const result = await timedVote.commitmentOf.call(user1);
        assert.isTrue(BigNumber(result).isEqualTo(0));
      });

      it('Commitment', async() => {
        await timedVote._setCommitment(user1, 100);
        const result = await timedVote.commitmentOf.call(user1);
        assert.isTrue(BigNumber(result).isEqualTo(100));
      });
    });

    describe('#withdraw', () => {
      it('Fail without commitment', throws(async() => {
        await timedVote.withdraw();
      }));

      it('Succeed', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 100, {from: user1});
        await timedVote.commit(100);
        await timedVote.withdraw();
      });

      it('Emit Withdraw', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 100, {from: user1});
        await timedVote.commit(100);
        const { logs: events } = await timedVote.withdraw();
        assert.isAtLeast(events.length, 1);
        const event = events.pop();
        assert.strictEqual(event.event, 'Withdraw');
        assert.strictEqual(event.args.account, user1);
        assert.isTrue(BigNumber(event.args.value).isEqualTo(100));
      });
    });
  });
});
