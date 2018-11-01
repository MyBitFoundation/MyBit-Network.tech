const BigNumber = require('bignumber.js');

const Token = artifacts.require('BurnableTokenStub');
const TimedVote = artifacts.require('TimedVoteStub');


const user1 = web3.eth.accounts[1];
const user2 = web3.eth.accounts[2];
const user3 = web3.eth.accounts[3];

const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
const tokenSupply = 180000000000000000000000000;
const voteDurationDays = 15;
const voteDuration = voteDurationDays * 24 * 60 * 60; // In seconds
const unlockDays = voteDurationDays + 1;
const closeDays = voteDurationDays + 1;
const tier2Days = 180 + 1;
const tier3Days = 365 + 1;
const tier1Multiplier = 100;
const tier2Multiplier = 150;
const tier3Multiplier = 200;
const quorum = 20; // 20%
const threshold = 51; // 51%
const validAddress = '0xbaCc40C0Df5E6eC2B0A4e9d1A0F748473F7f8b1a';
const proposalID =
  '0x0011223344556677889900112233445566778899001122334455667788990011';


let token, timedVote;


async function throws (executor) {
  try {
    await executor();
    assert.fail('Incorrect success');
  } catch (e) {}
}

async function rejects (promise) {
  try {
    await promise;
    assert.fail('Incorrect success');
  } catch (e) {}
}


contract('TimedVote', () => {
  // ----
  // Hook
  // ----

  beforeEach(async() => {
    token = await Token.new("MyBit", tokenSupply);
    timedVote = await TimedVote.new(
      token.address,
      voteDuration,
      quorum,
      threshold
    );
  });

  // ---------
  // Construct
  // ---------

  describe('Construct', () => {
    it('Succeed', async() => {
      await TimedVote.new(token.address, voteDuration, quorum, threshold);
    });

    it('Fail with null token address', async() => {
      await rejects(TimedVote.new(
        NULL_ADDRESS,
        voteDuration,
        quorum,
        threshold
      ));
    });

    it('Fail with 0 vote duration', async() => {
      await rejects(TimedVote.new(token.address, 0, quorum, threshold));
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
        await timedVote._timeTravelDays(unlockDays);
        const locked = await timedVote._commitmentLocked(user1);
        assert.isFalse(locked);
      });
    });

    describe('~commitmentTier2', () => {
      it('Prior tier', async() => {
        await timedVote._setCommitment(user1, 5);
        const tier2 = await timedVote._commitmentTier2(user1);
        assert.isFalse(tier2);
      });

      it('Tier 2', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(tier2Days);
        const tier2 = await timedVote._commitmentTier2(user1);
        assert.isTrue(tier2);
      });
    });

    describe('~commitmentTier3', () => {
      it('Prior tier', async() => {
        await timedVote._setCommitment(user1, 5);
        const tier3 = await timedVote._commitmentTier3(user1);
        assert.isFalse(tier3);
      });

      it('Tier 3', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(tier3Days);
        const tier3 = await timedVote._commitmentTier3(user1);
        assert.isTrue(tier3);
      });
    });

    describe('~hasVoted', () => {
      it('No vote', async() => {
        await timedVote._addProposal(proposalID);
        const voted = await timedVote._hasVoted(user1, proposalID);
        assert.isFalse(voted);
      });

      it('Vote', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._setVoter(proposalID, user1);
        const voted = await timedVote._hasVoted(user1, proposalID);
        assert.isTrue(voted);
      });
    });

    describe('~meetsQuorum', () => {
      it('Over', async() => {
        const body = tokenSupply / 2;
        const amount = (quorum + 10) / 100 * body;
        await timedVote._setBody(body);
        await timedVote._addProposal(proposalID);
        await timedVote._setVoted(proposalID, amount);
        const meets = await timedVote._meetsQuorum(proposalID);
        assert.isTrue(meets);
      });

      it('Under', async() => {
        const body = tokenSupply / 2;
        const amount = (quorum - 10) / 100 * body;
        await timedVote._setBody(body);
        await timedVote._addProposal(proposalID);
        await timedVote._setVoted(proposalID, amount);
        const meets = await timedVote._meetsQuorum(proposalID);
        assert.isFalse(meets);
      });

      it('At', async() => {
        const body = tokenSupply / 2;
        const amount = quorum / 100 * body;
        await timedVote._setBody(body);
        await timedVote._addProposal(proposalID);
        await timedVote._setVoted(proposalID, amount);
        const meets = await timedVote._meetsQuorum(proposalID);
        assert.isTrue(meets);
      });
    });

    describe('~meetsThreshold', () => {
      it('Over', async() => {
        const approval = 900;
        const dissent = 100;
        await timedVote._addProposal(proposalID);
        await timedVote._setApproval(proposalID, approval);
        await timedVote._setDissent(proposalID, dissent);
        const meets = await timedVote._meetsThreshold(proposalID);
        assert.isTrue(meets);
      });

      it('Under', async() => {
        const approval = 200;
        const dissent = 800;
        await timedVote._addProposal(proposalID);
        await timedVote._setApproval(proposalID, approval);
        await timedVote._setDissent(proposalID, dissent);
        const meets = await timedVote._meetsThreshold(proposalID);
        assert.isFalse(meets);
      });

      it('At', async() => {
        const approval = 510;
        const dissent = 490;
        await timedVote._addProposal(proposalID);
        await timedVote._setApproval(proposalID, approval);
        await timedVote._setDissent(proposalID, dissent);
        const meets = await timedVote._meetsThreshold(proposalID);
        assert.isTrue(meets);
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

    describe('~proposalOpen', () => {
      it('Open', async() => {
        await timedVote._addProposal(proposalID);
        const open = await timedVote._proposalOpen(proposalID);
        assert.isTrue(open);
      });

      it('Closed', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._timeTravelDays(closeDays);
        const open = await timedVote._proposalOpen(proposalID);
        assert.isFalse(open);
      });
    });
  });

  // ----------
  // Pure Value
  // ----------

  describe('Pure Value', () => {
    describe('~percentage', () => {
      it('0%', async() => {
        const percent = await timedVote._percentage(0, 1000);
        assert.isTrue(BigNumber(percent).isEqualTo(0));
      });

      it('1%', async() => {
        const percent = await timedVote._percentage(10, 1000);
        assert.isTrue(BigNumber(percent).isEqualTo(1));
      });

      it('20%', async() => {
        const percent = await timedVote._percentage(200, 1000);
        assert.isTrue(BigNumber(percent).isEqualTo(20));
      });

      it('50%', async() => {
        const percent = await timedVote._percentage(500, 1000);
        assert.isTrue(BigNumber(percent).isEqualTo(50));
      });

      it('100%', async() => {
        const percent = await timedVote._percentage(1000, 1000);
        assert.isTrue(BigNumber(percent).isEqualTo(100));
      });

      it('200%', async() => {
        const percent = await timedVote._percentage(2000, 1000);
        assert.isTrue(BigNumber(percent).isEqualTo(200));
      });

      it('Approximate', async() => {
        const percent = await timedVote._percentage(57, 599);
        assert.isTrue(BigNumber(percent).isEqualTo(9)); // Exact ~9.5
      });

      it('Approximately none', async() => {
        const percent = await timedVote._percentage(57, 55555);
        assert.isTrue(BigNumber(percent).isEqualTo(0)); // Exact ~0.1
      });
    });

    describe('~weightVote', () => {
      it('1.0', async() => {
        const vote = await timedVote._weightVote(10, 100);
        assert.isTrue(BigNumber(vote).isEqualTo(10));
      });

      it('1.5', async() => {
        const vote = await timedVote._weightVote(10, 150);
        assert.isTrue(BigNumber(vote).isEqualTo(15));
      });

      it('2.0', async() => {
        const vote = await timedVote._weightVote(10, 200);
        assert.isTrue(BigNumber(vote).isEqualTo(20));
      });
    });
  });

  // ----------
  // View Value
  // ----------

  describe('View Value', () => {
    describe('~approvalPercentage', () => {
      it('0%', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._setDissent(proposalID, 1000);
        const percent = await timedVote._approvalPercentage(proposalID);
        assert.isTrue(BigNumber(percent).isEqualTo(0));
      });

      it('50%', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._setApproval(proposalID, 500);
        await timedVote._setDissent(proposalID, 500);
        const percent = await timedVote._approvalPercentage(proposalID);
        assert.isTrue(BigNumber(percent).isEqualTo(50));
      });

      it('100%', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._setApproval(proposalID, 1000);
        const percent = await timedVote._approvalPercentage(proposalID);
        assert.isTrue(BigNumber(percent).isEqualTo(100));
      });
    });

    describe('~commitmentAge', () => {
      it('Birth', async() => {
        await timedVote._setCommitment(user1, 5);
        const age = await timedVote._commitmentAge(user1);
        assert.isTrue(BigNumber(age).isEqualTo(0));
      });

      it('Terrible 2s', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelSeconds(222);
        const age = await timedVote._commitmentAge(user1);
        assert.isTrue(BigNumber(age).isEqualTo(222));
      });
    });

    describe('#commitmentOf', () => {
      it('No commitment', async() => {
        const result = await timedVote.commitmentOf(user1);
        assert.isTrue(BigNumber(result).isEqualTo(0));
      });

      it('Commitment', async() => {
        await timedVote._setCommitment(user1, 100);
        const result = await timedVote.commitmentOf(user1);
        assert.isTrue(BigNumber(result).isEqualTo(100));
      });
    });

    describe('#multiplierOf', () => {
      it('Tier 1', async() => {
        await timedVote._setCommitment(user1, 5);
        const multiplier = await timedVote.multiplierOf(user1);
        assert.isTrue(BigNumber(multiplier).isEqualTo(tier1Multiplier));
      });

      it('Tier 2', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(tier2Days);
        const multiplier = await timedVote.multiplierOf(user1);
        assert.isTrue(BigNumber(multiplier).isEqualTo(tier2Multiplier));
      });

      it('Tier 3', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(tier3Days);
        const multiplier = await timedVote.multiplierOf(user1);
        assert.isTrue(BigNumber(multiplier).isEqualTo(tier3Multiplier));
      });
    });

    describe('~proposalAge', () => {
      it('Birth', async() => {
        await timedVote._addProposal(proposalID);
        const age = await timedVote._proposalAge(proposalID);
        assert.isTrue(BigNumber(age).isEqualTo(0));
      });

      it('Terrible 2s', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._timeTravelSeconds(222);
        const age = await timedVote._proposalAge(proposalID);
        assert.isTrue(BigNumber(age).isEqualTo(222));
      });
    });

    describe('~time', () => {
      it('Current time', async() => {
        const [ abstractedInstant, realInstant ] =
          await timedVote._time();
        assert.isTrue(BigNumber(abstractedInstant).isEqualTo(realInstant));
      });
    });

    describe('~totalVotes', () => {
      it('None', async() => {
        await timedVote._addProposal(proposalID);
        const votes = await timedVote._totalVotes(proposalID);
        assert.isTrue(BigNumber(votes).isEqualTo(0));
      });

      it('Approval', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._setApproval(proposalID, 50);
        const votes = await timedVote._totalVotes(proposalID);
        assert.isTrue(BigNumber(votes).isEqualTo(50));
      });

      it('Dissent', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._setDissent(proposalID, 50);
        const votes = await timedVote._totalVotes(proposalID);
        assert.isTrue(BigNumber(votes).isEqualTo(50));
      });

      it('Mixed', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._setApproval(proposalID, 50);
        await timedVote._setDissent(proposalID, 50);
        const votes = await timedVote._totalVotes(proposalID);
        assert.isTrue(BigNumber(votes).isEqualTo(100));
      });
    });

    describe('~votingPercentage', () => {
      it('None', async() => {
        await timedVote._setCommitment(user1, tokenSupply / 2);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        const percent = await timedVote._votingPercentage(proposalID);
        assert.isTrue(BigNumber(percent).isEqualTo(0));
      });

      it('Half approve', async() => {
        await timedVote._setCommitment(user1, tokenSupply / 4);
        await timedVote._setCommitment(user2, tokenSupply / 4);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.approve(proposalID, {from: user1});
        const percent = await timedVote._votingPercentage(proposalID);
        assert.isTrue(BigNumber(percent).isEqualTo(50));
      });

      it('Half decline', async() => {
        await timedVote._setCommitment(user1, tokenSupply / 4);
        await timedVote._setCommitment(user2, tokenSupply / 4);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.decline(proposalID, {from: user1});
        const percent = await timedVote._votingPercentage(proposalID);
        assert.isTrue(BigNumber(percent).isEqualTo(50));
      });

      it('Half mixed', async() => {
        await timedVote._setCommitment(user1, tokenSupply / 8);
        await timedVote._setCommitment(user2, tokenSupply / 8);
        await timedVote._setCommitment(user3, tokenSupply / 4);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.approve(proposalID, {from: user1});
        await timedVote.decline(proposalID, {from: user2});
        const percent = await timedVote._votingPercentage(proposalID);
        assert.isTrue(BigNumber(percent).isEqualTo(50));
      });

      it('Full approve', async() => {
        await timedVote._setCommitment(user1, tokenSupply / 2);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.approve(proposalID, {from: user1});
        const percent = await timedVote._votingPercentage(proposalID);
        assert.isTrue(BigNumber(percent).isEqualTo(100));
      });

      it('Full decline', async() => {
        await timedVote._setCommitment(user1, tokenSupply / 2);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.decline(proposalID, {from: user1});
        const percent = await timedVote._votingPercentage(proposalID);
        assert.isTrue(BigNumber(percent).isEqualTo(100));
      });

      it('Full mixed', async() => {
        await timedVote._setCommitment(user1, tokenSupply / 4);
        await timedVote._setCommitment(user2, tokenSupply / 4);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.approve(proposalID, {from: user1});
        await timedVote.decline(proposalID, {from: user2});
        const percent = await timedVote._votingPercentage(proposalID);
        assert.isTrue(BigNumber(percent).isEqualTo(100));
      });
    });
  });

  // --------
  // Modifier
  // --------

  describe('Modifier', () => {
    describe('~onlyClosed(proposal)', () => {
      it('Accept closed', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._timeTravelDays(closeDays);
        await timedVote._onlyClosedProposal(proposalID);
      });

      it('Reject open', async() => {
        await timedVote._addProposal(proposalID);
        await rejects(timedVote._onlyClosedProposal(proposalID));
      });
    });

    describe('~onlyCommitted', () => {
      it('Reject uncommitted', async() => {
        await rejects(timedVote._onlyCommitted({from: user1}));
      });

      it('Accept committed', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._onlyCommitted({from: user1});
      });
    });

    describe('~onlyExtant(proposal)', () => {
      it('Accept extant', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._onlyExtant(proposalID);
      });

      it('Reject nonextant', async() => {
        await rejects(timedVote._onlyExtant(proposalID));
      });
    });

    describe('~onlyIn', () => {
      it('Accept inner', async() => {
        await timedVote._onlyIn(5, 0, 10);
      });

      it('Accept lower limit', async() => {
        await timedVote._onlyIn(0, 0, 10);
      });

      it('Accept upper limit', async() => {
        await timedVote._onlyIn(10, 0, 10);
      });

      it('Reject below', async() => {
        await rejects(timedVote._onlyIn(5, 6, 10));
      });

      it('Reject above', async() => {
        await rejects(timedVote._onlyIn(11, 6, 10));
      });
    });

    describe('~onlyNew(proposalID)', () => {
      it('Accept new', async() => {
        await timedVote._onlyNew(proposalID);
      });

      it('Reject extant', async() => {
        await timedVote._addProposal(proposalID);
        await rejects(timedVote._onlyNew(proposalID));
      });
    });

    describe('~onlyOneVote', () => {
      it('Accept first', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._onlyOneVote(proposalID, user1);
      });

      it('Reject subsequent', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._setVoter(proposalID, user1);
        await rejects(timedVote._onlyOneVote(proposalID, user1));
      });
    });

    describe('~onlyOpen(proposal)', () => {
      it('Accept open', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._onlyOpenProposal(proposalID);
      });

      it('Reject closed', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._timeTravelDays(closeDays);
        await rejects(timedVote._onlyOpenProposal(proposalID));
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
        await timedVote._onlyUncommitted({from: user1});
      });

      it('Reject committed', async() => {
        await timedVote._setCommitment(user1, 5);
        await rejects(timedVote._onlyUncommitted({from: user1}));
      });
    });

    describe('~onlyUnlocked', () => {
      it('Accept unlocked', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._onlyUnlocked({from: user1});
      });

      it('Reject locked', async() => {
        await timedVote._setCommitment(user1, 5);
        await rejects(timedVote._onlyUnlocked({from: user1}));
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

    describe('~onlyVotingBody', () => {
      it('Reject without voting body', async() => {
        await rejects(timedVote._onlyVotingBody());
      });

      it('Accept with voting body', async() => {
        await timedVote._setBody(1);
        await timedVote._onlyVotingBody();
      });
    });
  });

  // ---------
  // Interface
  // ---------

  describe('Interface', () => {
    describe('#approve', () => {
      it('Fail without commitment', async() => {
        await timedVote._addProposal(proposalID);
        await rejects(timedVote.approve(proposalID, {from: user1}));
      });

      it('Fail with locked commitment', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._addProposal(proposalID);
        await rejects(timedVote.approve(proposalID, {from: user1}));
      });

      it('Fail with missing proposal', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await rejects(timedVote.approve(proposalID, {from: user1}));
      });

      it('Fail with closed proposal', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote._timeTravelDays(closeDays);
        await rejects(timedVote.approve(proposalID, {from: user1}));
      });

      it('Fail on plural vote', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote._setVoter(proposalID, user1);
        await rejects(timedVote.approve(proposalID, {from: user1}));
      });

      it('Succeed', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.approve(proposalID, {from: user1});
      });

      it('Emit Approve', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        const { logs: events } = await timedVote.approve(
          proposalID,
          {from: user1}
        );
        assert.isAtLeast(events.length, 1);
        const event = events.pop();
        assert.strictEqual(event.event, 'Approve');
        assert.strictEqual(event.args.proposalID, proposalID);
        assert.strictEqual(event.args.account, user1);
        assert.isTrue(BigNumber(event.args.vote).isEqualTo(5));
      });
    });

    describe('#commit', () => {
      it('Fail with value 0', async() => {
        await rejects(timedVote.commit(0, {from: user1}));
      });

      it('Fail without approval', async() => {
        await rejects(timedVote.commit(5, {from: user1}));
      });

      it('Fail with insufficient approval', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 5, {from: user1});
        await rejects(timedVote.commit(100, {from: user1}));
      });

      it('Fail on transfer failure', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 100, {from: user1});
        await token._failNextTransferFrom();
        await rejects(timedVote.commit(100, {from: user1}));
      });

      it('Succeed', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 100, {from: user1});
        await timedVote.commit(100, {from: user1});
      });

      it('Fail double commit', async() => {
        await token.transfer(user1, 200);
        await token.approve(timedVote.address, 200, {from: user1});
        await timedVote.commit(100, {from: user1});
        await rejects(timedVote.commit(100, {from: user1}));
      });

      it('Emit Commit', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 100, {from: user1});
        const { logs: events } = await timedVote.commit(100, {from: user1});
        assert.isAtLeast(events.length, 1);
        const event = events.pop();
        assert.strictEqual(event.event, 'Commit');
        assert.strictEqual(event.args.account, user1);
        assert.isTrue(BigNumber(event.args.value).isEqualTo(100));
      });
    });

    describe('#decline', () => {
      it('Fail without commitment', async() => {
        await timedVote._addProposal(proposalID);
        await rejects(timedVote.decline(proposalID, {from: user1}));
      });

      it('Fail with locked commitment', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._addProposal(proposalID);
        await rejects(timedVote.decline(proposalID, {from: user1}));
      });

      it('Fail with missing proposal', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await rejects(timedVote.decline(proposalID, {from: user1}));
      });

      it('Fail with closed proposal', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote._timeTravelDays(closeDays);
        await rejects(timedVote.decline(proposalID, {from: user1}));
      });

      it('Fail on plural vote', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote._setVoter(proposalID, user1);
        await rejects(timedVote.decline(proposalID, {from: user1}));
      });

      it('Succeed', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.decline(proposalID, {from: user1});
      });

      it('Emit Decline', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        const { logs: events } = await timedVote.decline(
          proposalID,
          {from: user1}
        );
        assert.isAtLeast(events.length, 1);
        const event = events.pop();
        assert.strictEqual(event.event, 'Decline');
        assert.strictEqual(event.args.proposalID, proposalID);
        assert.strictEqual(event.args.account, user1);
        assert.isTrue(BigNumber(event.args.vote).isEqualTo(5));
      });
    });

    describe('#propose', () => {
      it('Fail with extant ID', async() => {
        await timedVote._addProposal(proposalID);
        await rejects(timedVote.propose(proposalID, {from: user1}));
      });

      it('Succeed', async() => {
        await timedVote.propose(proposalID, {from: user1});
        const extant = await timedVote.proposalExtant(proposalID);
        assert.isTrue(extant);
      });

      it('Emit Propose', async() => {
        const { logs: events } = await timedVote.propose(
          proposalID,
          {from: user1}
        );
        const event = events.pop();
        assert.strictEqual(event.event, 'Propose');
        assert.strictEqual(event.args.proposer, user1);
        assert.strictEqual(event.args.proposalID, proposalID);
      });
    });

    describe('#result', () => {
      it('Fail with missing proposal', async() => {
        await rejects(timedVote.result(proposalID));
      });

      it('Fail with open proposal', async() => {
        await timedVote._addProposal(proposalID);
        await rejects(timedVote.result(proposalID));
      });

      it('Defeated under quorum', async() => {
        await timedVote._setBody(10000);
        await timedVote._setCommitment(user1, 10);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.approve(proposalID, {from: user1});
        await timedVote._timeTravelDays(closeDays);
        const result = await timedVote.result(proposalID);
        assert.isFalse(result);
      });

      it('Defeated under threshold', async() => {
        await timedVote._setCommitment(user1, tokenSupply / 4);
        await timedVote._setCommitment(user2, tokenSupply / 4);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.approve(proposalID, {from: user1});
        await timedVote.decline(proposalID, {from: user2});
        await timedVote._timeTravelDays(closeDays);
        const result = await timedVote.result(proposalID);
        assert.isFalse(result);
      });

      it('Passed', async() => {
        await timedVote._setCommitment(user1, tokenSupply / 2);
        await timedVote._setCommitment(user2, tokenSupply / 4);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.approve(proposalID, {from: user1});
        await timedVote.decline(proposalID, {from: user2});
        await timedVote._timeTravelDays(closeDays);
        const result = await timedVote.result(proposalID);
        assert.isTrue(result);
      });
    });

    describe('#status', () => {
      it('Fail with missing proposal', async() => {
        await rejects(timedVote.status(proposalID));
      });

      it('Initial', async() => {
        await timedVote._addProposal(proposalID);
        const [ open, age, voted, approval, dissent ] =
          await timedVote.status(proposalID);
        assert.isTrue(open);
        assert.isTrue(BigNumber(age).isEqualTo(0));
        assert.isTrue(BigNumber(voted).isEqualTo(0));
        assert.isTrue(BigNumber(approval).isEqualTo(0));
        assert.isTrue(BigNumber(dissent).isEqualTo(0));
      });

      it('Closed', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._timeTravelDays(closeDays);
        const [ open ] = await timedVote.status(proposalID);
        assert.isFalse(open);
      });

      it('Aged', async() => {
        await timedVote._addProposal(proposalID);
        await timedVote._timeTravelSeconds(222);
        const [ , age ] = await timedVote.status(proposalID);
        assert.isTrue(BigNumber(age).isEqualTo(222));
      });

      it('Approval', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.approve(proposalID, {from: user1});
        const [ , , voted, approval ] = await timedVote.status(proposalID);
        assert.isTrue(BigNumber(voted).isEqualTo(5));
        assert.isTrue(BigNumber(approval).isEqualTo(5));
      });

      it('Dissent', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.decline(proposalID, {from: user1});
        const [ , , voted, , dissent ] = await timedVote.status(proposalID);
        assert.isTrue(BigNumber(voted).isEqualTo(5));
        assert.isTrue(BigNumber(dissent).isEqualTo(5));
      });

      it('Mixed', async() => {
        await timedVote._setCommitment(user1, 5);
        await timedVote._setCommitment(user2, 5);
        await timedVote._timeTravelDays(unlockDays);
        await timedVote._addProposal(proposalID);
        await timedVote.approve(proposalID, {from: user1});
        await timedVote.decline(proposalID, {from: user2});
        const [ , , voted, approval, dissent ] =
          await timedVote.status(proposalID);
        assert.isTrue(BigNumber(voted).isEqualTo(10));
        assert.isTrue(BigNumber(approval).isEqualTo(5));
        assert.isTrue(BigNumber(dissent).isEqualTo(5));
      });
    });

    describe('#withdraw', () => {
      it('Fail without commitment', async() => {
        await rejects(timedVote.withdraw({from: user1}));
      });

      it('Fail with locked commitment', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 100, {from: user1});
        await timedVote.commit(100, {from: user1});
        await rejects(timedVote.withdraw({from: user1}));
      });

      it('Fail on transfer failure', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 100, {from: user1});
        await timedVote.commit(100, {from: user1});
        await timedVote._timeTravelDays(unlockDays);
        await token._failNextTransfer();
        await rejects(timedVote.withdraw({from: user1}));
      });

      it('Succeed', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 100, {from: user1});
        await timedVote.commit(100, {from: user1});
        await timedVote._timeTravelDays(unlockDays);
        await timedVote.withdraw({from: user1});
      });

      it('Emit Withdraw', async() => {
        await token.transfer(user1, 100);
        await token.approve(timedVote.address, 100, {from: user1});
        await timedVote.commit(100, {from: user1});
        await timedVote._timeTravelDays(unlockDays);
        const { logs: events } = await timedVote.withdraw({from: user1});
        assert.isAtLeast(events.length, 1);
        const event = events.pop();
        assert.strictEqual(event.event, 'Withdraw');
        assert.strictEqual(event.args.account, user1);
        assert.isTrue(BigNumber(event.args.value).isEqualTo(100));
      });
    });
  });
});
