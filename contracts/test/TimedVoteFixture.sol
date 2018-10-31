pragma solidity 0.4.24;

import "../ownership/TimedVote.sol";

contract TimedVoteFixture is TimedVote {
  // -----
  // State

  uint256 private timestamp;                    // Artificial now timestamp

  // -----------
  // Constructor

  /** Relay all arguments */
  constructor(
    address _tokenAddress,
    uint256 _voteDuration,
    uint8 _quorum,
    uint8 _threshold
  )
  public
  TimedVote(_tokenAddress, _voteDuration, _quorum, _threshold) {
    timestamp = now;
  }

  // --------
  // Revealer

  /** Check address null */
  function _addressNull(address _address)
  external
  pure
  returns (bool null_) {
    return addressNull(_address);
  }

  /** Proposal approval percentage */
  function _approvalPercentage(bytes32 _proposalID)
  external
  view
  returns (uint8 percent) {
    return approvalPercentage(_proposalID);
  }

  /** Get commitment age */
  function _commitmentAge(address _account)
  external
  view
  returns (uint256 age) {
    return commitmentAge(_account);
  }

  /** Check commitment locked */
  function _commitmentLocked(address _account)
  external
  view
  returns (bool locked) {
    return commitmentLocked(_account);
  }

  /** Check commitment tier 2 */
  function _commitmentTier2(address _account)
  external
  view
  returns (bool tier2) {
    return commitmentTier2(_account);
  }

  /** Check commitment tier 3 */
  function _commitmentTier3(address _account)
  external
  view
  returns (bool tier3) {
    return commitmentTier3(_account);
  }

  /** Check account has voted */
  function _hasVoted(address _account, bytes32 _proposalID)
  external
  view
  returns (bool voted) {
    return hasVoted(_account, _proposalID);
  }

  /** Require proposal closed */
  function _onlyClosedProposal(bytes32 _proposalID)
  external
  view
  onlyClosed(_proposalID) {}

  /** Require sender committed */
  function _onlyCommitted()
  external
  view
  onlyCommitted(msg.sender) {}

  /** Require proposal extant */
  function _onlyExtant(bytes32 _proposalID)
  external
  view
  onlyExtant(_proposalID) {}

  function _onlyIn(uint8 number, uint8 minimum, uint8 maximum)
  external
  pure
  onlyIn(number, minimum, maximum) {}

  /** Require proposal ID new */
  function _onlyNew(bytes32 _proposalID)
  external
  view
  onlyNew(_proposalID) {}

  /** Require maximum 1 vote */
  function _onlyOneVote(bytes32 _proposalID, address _account)
  external
  view
  onlyOneVote(_proposalID, _account) {}

  /** Require proposal open */
  function _onlyOpenProposal(bytes32 _proposalID)
  external
  view
  onlyOpen(_proposalID) {}

  /** Require number positive */
  function _onlyPositive(uint256 _number)
  external
  pure
  onlyPositive(_number) {}

  /** Require sender uncommitted */
  function _onlyUncommitted()
  external
  view
  onlyUncommitted(msg.sender) {}

  /** Require commitment unlocked */
  function _onlyUnlocked()
  external
  view
  onlyUnlocked(msg.sender) {}

  /** Require address valid */
  function _onlyValidAddress(address _address)
  external
  pure
  onlyValid(_address) {}

  /** Percentage */
  function _percentage(uint256 _portion, uint256 _total)
  external
  pure
  returns (uint8 percent) {
    return percentage(_portion, _total);
  }

  /** Get proposal age */
  function _proposalAge(bytes32 _proposalID)
  external
  view
  returns (uint256 age) {
    return proposalAge(_proposalID);
  }

  /** Check proposal open */
  function _proposalOpen(bytes32 _proposalID)
  external
  view
  returns (bool open) {
    return proposalOpen(_proposalID);
  }

  /** Proposal total votes */
  function _totalVotes(bytes32 _proposalID)
  external
  view
  returns (uint256 votes) {
    return totalVotes(_proposalID);
  }

  /** Proposal voting percentage */
  function _votingPercentage(bytes32 _proposalID)
  external
  view
  returns (uint8 percent) {
    return votingPercentage(_proposalID);
  }

  /** Weight vote */
  function _weightVote(uint256 _value, uint8 _multiplier)
  external
  pure
  returns (uint256 vote) {
    return weightVote(_value, _multiplier);
  }

  // ------
  // Writer

  /**
   * Add proposal
   * @param _proposalID - Identifier of new proposal.
   */
  function _addProposal(bytes32 _proposalID)
  external {
    proposals[_proposalID] = Proposal(time(), 0, 0, 0);
  }

  /**
   * Set proposal approval
   * @dev
   * Assumes extant proposal.
   * @param _proposalID - Identifier of proposal.
   * @param _approval - Approval amount.
   */
  function _setApproval(bytes32 _proposalID, uint256 _approval)
  external {
    proposals[_proposalID].approval = _approval;
  }

  /**
   * Set account commitment
   * @param _account - Account to set commitment of.
   * @param _amount - MYB commitment amount.
   */
  function _setCommitment(address _account, uint256 _amount)
  external {
    commitments[_account] = Commitment(_amount, time());
  }

  /**
   * Set proposal dissent
   * @dev
   * Assumes extant proposal.
   * @param _proposalID - Identifier of proposal.
   * @param _dissent - Dissent amount.
   */
  function _setDissent(bytes32 _proposalID, uint256 _dissent)
  external {
    proposals[_proposalID].dissent = _dissent;
  }

  /**
   * Set account voter
   * @param _proposalID - Identifier of proposal to make a voter on.
   * @param _account - Account to make a voter.
   */
  function _setVoter(bytes32 _proposalID, address _account)
  external {
    proposals[_proposalID].voters[_account] = true;
  }

  /**
   * Advance time by seconds
   * @param _seconds - Seconds to advance.
   */
  function _timeTravelSeconds(uint256 _seconds)
  public {
    timestamp = timestamp.add(_seconds);
  }

  /**
   * Advance time by minutes
   * @param _minutes - Minutes to advance.
   */
  function _timeTravelMinutes(uint256 _minutes)
  public {
    uint256 _seconds = _minutes.mul(60);
    _timeTravelSeconds(_seconds);
  }

  /**
   * Advance time by hours
   * @param _hours - Hours to advance.
   */
  function _timeTravelHours(uint256 _hours)
  public {
    uint256 _minutes = _hours.mul(60);
    _timeTravelMinutes(_minutes);
  }

  /**
   * Advance time by days
   * @param _days - Days to advance.
   */
  function _timeTravelDays(uint256 _days)
  external {
    uint256 _hours = _days.mul(24);
    _timeTravelHours(_hours);
  }

  // --------
  // Override

  /**
   * Get artificial current time
   * @dev
   * Provides an artificial now timestamp. Enables control of time in tests.
   * @return instant - Artificial current instant.
   */
  function time()
  internal
  view
  returns (uint256 instant) {
    return timestamp;
  }
}
