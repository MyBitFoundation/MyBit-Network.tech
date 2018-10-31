pragma solidity 0.4.24;

import "../ownership/TimedVote.sol";

contract TimedVoteFixture is TimedVote {
  // -----
  // State

  uint256 private timestamp;                    // Artificial now timestamp

  // -----------
  // Constructor

  /** Relay all arguments */
  constructor(address _tokenAddress, uint256 _voteDuration)
  public
  TimedVote(_tokenAddress, _voteDuration) {
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

  /** Require proposal ID new */
  function _onlyNew(bytes32 _proposalID)
  external
  view
  onlyNew(_proposalID) {}

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
   * Set account commitment
   * @param _account - Account to set commitment of.
   * @param _amount - MYB commitment amount.
   */
  function _setCommitment(address _account, uint256 _amount)
  external {
    commitments[_account] = Commitment(_amount, time());
  }

  /**
   * Set account voted
   * @param _proposalID - Identifier of proposal to set vote on.
   * @param _account - Account to set voted for.
   */
  function _setVoted(bytes32 _proposalID, address _account)
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
