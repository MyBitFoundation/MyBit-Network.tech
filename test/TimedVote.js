const BigNumber = require('bignumber.js');

const Token = artifacts.require('./tokens/ERC20/BurnableToken.sol');
const TimedVote = artifacts.require('TimedVoteFixture');


const user1 = web3.eth.accounts[0];

const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
const tokenSupply = 180000000000000000000000000;
const voteDurationDays = 15;
const voteDuration = voteDurationDays * 24 * 60 * 60; // In seconds
const unlockDays = voteDurationDays + 1;
const validAddress = '0xbaCc40C0Df5E6eC2B0A4e9d1A0F748473F7f8b1a';
const proposalID =
  '0x0011223344556677889900112233445566778899001122334455667788990011';


let token, timedVote;


async function throws (executor) {
  try {
    await executor();
    assert.fail();
  } catch (e) {}
}

async function rejects (promise) {
  try {
    await promise;
    assert.fail();
  } catch (e) {}
}


contract('TimedVote', () => {
  // ----
  // Hook
  // ----

  beforeEach(async() => {
    token = await Token.new("MyBit", tokenSupply);
    timedVote = await TimedVote.new(token.address, voteDuration);
  });

  // ---------
  // Construct
  // ---------

  describe('Construct', () => {
    it('Succeed', async() => {
      await TimedVote.new(token.address, voteDuration);
    });

    it('Fail with null token address', async() => {
      await rejects(TimedVote.new(NULL_ADDRESS, voteDuration));
    });

    it('Fail with 0 vote duration', async() => {
      await rejects(TimedVote.new(token.address, 0));
    });
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

    describe('~commitmentLocked', () => {
      it('Locked', async() => {
        await timedVote._setCommitment(user1, 5);
        const locked = await timedVote._commitmentLocked(user1);
        assert.isTrue(locked);
      });

      it('Unlocked', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._advanceCommitmentDays(user1, unlockDays);
        const locked = await timedVote._commitmentLocked(user1);
        assert.isFalse(locked);
      });
    });

    describe('#proposalExtant', () => {
      it('Extant', async() => {
        await timedVote._addProposal(proposalID);
        const extant = await timedVote.proposalExtant(proposalID);
        assert.isTrue(extant);
      });

      it('Nonextant', async() => {
        const extant = await timedVote.proposalExtant(proposalID);
        assert.isFalse(extant);
      });
    });
  });

  // --------
  // Modifier
  // --------

  describe('Modifier', () => {
    describe('~onlyCommitted', () => {
      it('Reject uncommitted', async() => {
        await rejects(timedVote._onlyCommitted());
      });

      it('Accept committed', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._onlyCommitted();
      });
    });

    describe('~onlyPositive', () => {
      it('Accept positive', async() => {
        await timedVote._onlyPositive(55);
      });

      it('Accept 1', async() => {
        await timedVote._onlyPositive(1);
      });

      it('Reject 0', async() => {
        await rejects(timedVote._onlyPositive(0));
      });
    });

    describe('~onlyUncommitted', () => {
      it('Accept uncommitted', async() => {
        await timedVote._onlyUncommitted();
      });

      it('Reject committed', async() => {
        await timedVote._setCommitment(user1, 5);
        await rejects(timedVote._onlyUncommitted());
      });
    });

    describe('~onlyUnlocked', () => {
      it('Accept unlocked', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._advanceCommitmentDays(user1, unlockDays);
        await timedVote._onlyUnlocked();
      });

      it('Reject locked', async() => {
        await timedVote._setCommitment(user1, 5);
        await rejects(timedVote._onlyUnlocked());
      });
    });

    describe('~onlyValid(address)', () => {
      it('Accept valid', async() => {
        await timedVote._onlyValidAddress(validAddress);
      });

      it('Reject null', async() => {
        await rejects(timedVote._onlyValidAddress(NULL_ADDRESS));
      });
    });
  });

  // ---------
  // Interface
  // ---------

  describe('Interface', () => {
    describe('#commit', () => {
      it('Fail with value 0', async() => {
        await rejects(timedVote.commit(0));
      });

      it('Fail without approval', async() => {
        await rejects(timedVote.commit(5));
      });

      it('Fail with insufficient approval', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 5, {from: user1});
        await rejects(timedVote.commit(100));
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
        await rejects(timedVote.commit(100));
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
      it('Fail without commitment', async() => {
        await rejects(timedVote.withdraw());
      });

      it('Fail with locked commitment', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 100, {from: user1});
        await timedVote.commit(100);
        await rejects(timedVote.withdraw());
      });

      it('Succeed', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 100, {from: user1});
        await timedVote.commit(100);
        await timedVote._advanceCommitmentDays(user1, unlockDays);
        await timedVote.withdraw();
      });

      it('Emit Withdraw', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 100, {from: user1});
        await timedVote.commit(100);
        await timedVote._advanceCommitmentDays(user1, unlockDays);
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
