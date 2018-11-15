pragma solidity 0.4.24;

import "../ownership/TimedVote.sol";

contract TimedVoteStub is TimedVote {
  // -----
  // State

  uint256 private timestamp;                    // Artificial now timestamp

  // -----------
  // Constructor

  /** Relay all arguments */
  constructor(
    address _database,
    uint256 _voteDuration,
    uint8 _quorum,
    uint8 _threshold
  )
  public
  TimedVote(_database, _voteDuration, _quorum, _threshold) {
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
  function _commitmentAge(address _account, bytes32 _assetID)
  external
  view
  returns (uint256 age) {
    return commitmentAge(_account, _assetID);
  }

  /** Check commitment locked */
  function _commitmentLocked(address _account, bytes32 _assetID)
  external
  view
  returns (bool locked) {
    return commitmentLocked(_account, _assetID);
  }

  /** Check commitment tier 2 */
  function _commitmentTier2(address _account, bytes32 _assetID)
  external
  view
  returns (bool tier2) {
    return commitmentTier2(_account, _assetID);
  }

  /** Check commitment tier 3 */
  function _commitmentTier3(address _account, bytes32 _assetID)
  external
  view
  returns (bool tier3) {
    return commitmentTier3(_account, _assetID);
  }

  /** Check account has voted */
  function _hasVoted(address _account, bytes32 _proposalID)
  external
  view
  returns (bool voted) {
    return hasVoted(_account, _proposalID);
  }

  /** Check proposal meets quorum */
  function _meetsQuorum(bytes32 _proposalID)
  external
  view
  returns (bool meets) {
    return meetsQuorum(_proposalID);
  }

  /** Check proposal meets threshold */
  function _meetsThreshold(bytes32 _proposalID)
  external
  view
  returns (bool meets) {
    return meetsThreshold(_proposalID);
  }

  /** Require proposal closed */
  function _onlyClosedProposal(bytes32 _proposalID)
  external
  view
  onlyClosed(_proposalID) {}

  /** Require sender committed */
  function _onlyCommitted(bytes32 _assetID)
  external
  view
  onlyCommitted(msg.sender, _assetID) {}

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
  function _onlyUncommitted(bytes32 _assetID)
  external
  view
  onlyUncommitted(msg.sender, _assetID) {}

  /** Require commitment unlocked */
  function _onlyUnlocked(bytes32 _assetID)
  external
  view
  onlyUnlocked(msg.sender, _assetID) {}

  /** Require address valid */
  function _onlyValidAddress(address _address)
  external
  pure
  onlyValid(_address) {}

  /** Require voting body */
  function _onlyVotingBody(bytes32 _assetID)
  external
  view
  onlyVotingBody(_assetID) {}

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
  function _addProposal(bytes32 _proposalID, bytes32 _assetID)
  external {
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "start")), now);
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted")), 0);
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval")), 0);
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "dissent")), 0);
    database.setBytes32(keccak256(abi.encodePacked(_proposalID, "Proposal", "assetID")), _assetID);
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
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval")), _approval);
  }

  /**
   * Set voting body amount
   * @param _amount - Voting body amount.
   */
  function _setBody(bytes32 _assetID, uint256 _amount)
  external {
    body[_assetID] = _amount;
  }

  /**
   * Set account commitment
   * @param _account - Account to set commitment of.
   * @param _amount - MYB commitment amount.
   */
  function _setCommitment(address _account, bytes32 _assetID, uint256 _amount)
  external {
    body[_assetID] = body[_assetID].add(_amount);
    database.setUint(keccak256(abi.encodePacked(_account, _assetID, "Commitment", "value")), _amount);
    database.setUint(keccak256(abi.encodePacked(_account, _assetID, "Commitment", "time")), now);
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
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "dissent")), _dissent);
  }

  /**
   * Set proposal voting MYB amount
   * @dev
   * Assumes extant proposal.
   * @param _proposalID - Identifier of proposal.
   * @param _voted - Voting MYB amount.
   */
  function _setVoted(bytes32 _proposalID, uint256 _voted)
  external {
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted")), _voted);
  }

  /**
   * Set account voter
   * @param _proposalID - Identifier of proposal to make a voter on.
   * @param _account - Account to make a voter.
   */
  function _setVoter(bytes32 _proposalID, address _account)
  external {
    database.setBool(keccak256(abi.encodePacked(_proposalID, "Proposal", _account)), true);
  }
}
