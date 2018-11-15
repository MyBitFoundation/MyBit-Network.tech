pragma solidity 0.4.24;

import "../interfaces/ERC20.sol";
import "../math/SafeMath.sol";
import "../interfaces/DBInterface.sol";

/**
 * @title Proposal voting
 * @notice
 * Anyone can create a proposal. An MYB holder can lock their tokens to become
 * a voter. Voters may approve or decline proposals. Vote weight increases as
 * tokens are locked for longer periods. A proposal closes after a configurable
 * vote duration. It passes if a quorum of total MYB supply voted and the
 * approval ratio of weighted votes reaches the required threshold.
 *
 * Provide the address of the MYB token contract, vote duration, quorum, and
 * approval threshold. On each proposal, voting will be open for the specified
 * duration. For a proposal to be eligible to pass the percent of total MYB
 * that votes must be at least the quorum. For a proposal to pass the percent
 * of weighted votes that are approval must be at least the approval threshold.
 */
contract TimedVote {
  // -------
  // Library

  using SafeMath for uint256;

  // --------
  // Constant

  address constant NULL_ADDRESS = address(0);   // Null address
  uint256 constant TIER_2_AGE = 180 days;       // Tier 2 commitment age
  uint256 constant TIER_3_AGE = 365 days;       // Tier 3 commitment age
  uint8 constant TIER_1_MULTIPLIER = 100;       // Tier 1 multiplier
  uint8 constant TIER_2_MULTIPLIER = 150;       // Tier 2 multiplier
  uint8 constant TIER_3_MULTIPLIER = 200;       // Tier 3 multiplier

  // -----
  // State

  DBInterface database;                         //Database contract
  uint256 voteDuration;                         // Vote duration
  uint8 quorum;                                 // Quorum
  uint8 threshold;                              // Approval threshold
  mapping(bytes32 => uint256) body;             // Voting body token amount, by assetID

  // -----------
  // Constructor

  /**
   * @param _voteDuration - Vote duration. Voting period of each proposal.
   *     Must be positive.
   * @param _quorum - Amount of supply that must vote to make a proposal valid.
   *     Integer percent, eg 20 for 20%. In range 1-100 inclusive.
   * @param _threshold - Amount of weighted votes that must be approval for a
   *     proposal to pass. Integer percent, eg 51 for 51%. In range 1-100
   *     inclusive.
   */
  constructor(
    address _database,
    uint256 _voteDuration,
    uint8 _quorum,
    uint8 _threshold
  )
  public
  onlyValid(_database)
  onlyPositive(_voteDuration)
  onlyIn(_quorum, 1, 100)
  onlyIn(_threshold, 1, 100) {
    database = DBInterface(_database);
    voteDuration = _voteDuration;
    quorum = _quorum;
    threshold = _threshold;
  }

  // ---------
  // Interface

  /**
   * Check account committed
   * @param _account - Account to check.
   * @return committed - Whether account has an active commitment.
   */
  function accountCommitted(address _account, bytes32 _assetID)
  public
  view
  returns (bool committed) {
    return (database.uintStorage(keccak256(abi.encodePacked(_account, _assetID, "Commitment", "value"))) > 0);
  }

  /**
   * Approve proposal
   * @notice
   * Approves proposal with all of your committed tokens. Your vote is weighted
   * differently depending on how long your tokens have been committed.
   * Requires an unlocked commitment and an open proposal you haven't voted on.
   * Emits Approve on success.
   * @param _proposalID - Identifier of proposal to approve.
   */
  function approve(bytes32 _proposalID)
  external {
    require(proposalExtant(_proposalID), "Proposal not found");
    require(proposalOpen(_proposalID), "Open proposal required");
    require(!hasVoted(msg.sender, _proposalID), "Already voted");
    bytes32 assetID = database.bytes32Storage(keccak256(abi.encodePacked(_proposalID, "Proposal", "assetID")));
    require(accountCommitted(msg.sender, assetID), "Commitment required");
    require(!commitmentLocked(msg.sender, assetID), "Unlocked commitment required");
    uint256 value = database.uintStorage(keccak256(abi.encodePacked(msg.sender, assetID, "Commitment", "value")));
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted")), database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted"))).add(value));
    database.setBool(keccak256(abi.encodePacked(_proposalID, "Proposal", msg.sender)), true);
    uint8 multiplier = multiplierOf(msg.sender, assetID);
    uint256 vote = weightVote(value, multiplier);
    uint256 approval = database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval")));
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval")), approval.add(vote));
    emit Approve(_proposalID, msg.sender, vote);
  }

  /**
   * Commit MYB to voting
   * @notice
   * Commits specified amount of your MYB to voting. Approve this contract with
   * the token contract for the desired amount before calling. Fails if you
   * already have an active commitment. Emits Commit on success.
   * @param _value - MYB amount to commit.
   */
  function commit(uint256 _value, bytes32 _assetID)
  external
  onlyUncommitted(msg.sender, _assetID) {
    require(_value > 0, "Nonzero value required");
    body[_assetID] = body[_assetID].add(_value);
    database.setUint(keccak256(abi.encodePacked(msg.sender, _assetID, "Commitment", "value")), _value);
    database.setUint(keccak256(abi.encodePacked(msg.sender, _assetID, "Commitment", "time")), now);
    bool transferred = ERC20(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)))).transferFrom(msg.sender, address(this), _value);
    require(transferred, "Transfer failed");
    emit Commit(msg.sender, _value);
  }

  /**
   * Get account commitment amount
   * @notice
   * Returns 0 if account has no commitment.
   * @param _account - Account to get commitment amount of.
   * @return value - MYB amount currently committed by the account.
   */
  function commitmentOf(address _account, bytes32 _assetID)
  external
  view
  returns (uint256 value) {
    return database.uintStorage(keccak256(abi.encodePacked(_account, _assetID, "Commitment", "value")));
  }

  /**
   * Decline proposal
   * @notice
   * Declines proposal with all of your committed tokens. Your vote is weighted
   * differently depending on how long your tokens have been committed.
   * Requires an unlocked commitment and an open proposal you haven't voted on.
   * Emits Decline on success.
   * @param _proposalID - Identifier of proposal to decline.
   */
  function decline(bytes32 _proposalID)
  external {
    require(proposalExtant(_proposalID), "Proposal not found");
    require(proposalOpen(_proposalID), "Open proposal required");
    require(!hasVoted(msg.sender, _proposalID), "Already voted");
    bytes32 assetID = database.bytes32Storage(keccak256(abi.encodePacked(_proposalID, "Proposal", "assetID")));
    require(accountCommitted(msg.sender, assetID), "Commitment required");
    require(!commitmentLocked(msg.sender, assetID), "Unlocked commitment required");
    uint256 value = database.uintStorage(keccak256(abi.encodePacked(msg.sender, assetID, "Commitment", "value")));
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted")), database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted"))).add(value));
    database.setBool(keccak256(abi.encodePacked(_proposalID, "Proposal", msg.sender)), true);
    uint8 multiplier = multiplierOf(msg.sender, assetID);
    uint256 vote = weightVote(value, multiplier);
    uint256 dissent = database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "dissent")));
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "dissent")), dissent.add(vote));
    emit Decline(_proposalID, msg.sender, vote);
  }

  /**
   * Get commitment multiplier
   * @notice
   * A commitment multiplier changes as the commitment advances tiers.
   * Fails if account has no active commitment.
   * @param _account - Account owning commitment to get the multiplier of.
   * @return multiplier - Current commitment multiplier.
   */
  function multiplierOf(address _account, bytes32 _assetID)
  public
  view
  onlyCommitted(_account, _assetID)
  returns (uint8 multiplier) {
    if (commitmentTier3(_account, _assetID)) return TIER_3_MULTIPLIER;
    else if (commitmentTier2(_account, _assetID)) return TIER_2_MULTIPLIER;
    else return TIER_1_MULTIPLIER;
  }

  /**
   * Check proposal extant
   * @param _proposalID - Proposal identifier to check.
   * @return extant - Whether proposal with identifier exists.
   */
  function proposalExtant(bytes32 _proposalID)
  public
  view
  returns (bool extant) {
    return (database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "start"))) > 0);
  }

  /**
   * Create proposal
   * @notice
   * Creates a new proposal with the specified identifier. Fails if there is no
   * voting body. Fails if a proposal with the same identifier already exists.
   * Emits Propose on success.
   * @param _proposalID - Identifier of new proposal.
   */
  function propose(bytes32 _proposalID, bytes32 _assetID)
  external
  onlyVotingBody(_assetID)
  onlyNew(_proposalID)
  onlyAsset(_assetID){
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "start")), now);
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted")), 0);
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval")), 0);
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "dissent")), 0);
    database.setBytes32(keccak256(abi.encodePacked(_proposalID, "Proposal", "assetID")), _assetID);
    emit Propose(msg.sender, _proposalID);
  }

  /**
   * Get proposal result
   * @notice
   * Returns the final result of the proposal. A proposal passes if it meets
   * quorum and meets the approval threshold. Fails if the proposal does not
   * exist. Fails if the proposal is still open for voting.
   * @param _proposalID - Identifier of proposal to get result of.
   * @return passed - Whether the proposal passed.
   */
  function result(bytes32 _proposalID)
  external
  view
  onlyExtant(_proposalID)
  onlyClosed(_proposalID)
  returns (bool passed) {
    return (meetsQuorum(_proposalID) && meetsThreshold(_proposalID));
  }

  /**
   * Get proposal status.
   * @notice
   * Provides the current status of an approval. May be called during voting
   * to get the status so far. Fails if the proposal does not exist. Use
   * #result after voting close to get the final result.
   * @param _proposalID - Identifier of proposal to get status of.
   * @return open - Whether the proposal is open.
   * @return age - Proposal age. Voting closes after voteDuration.
   * @return votingBody - Proposal voting body MYB amount. Fixed when created.
   * @return voted - Voting MYB amount. Must meet quorum to pass.
   * @return approval - Weighted approval amount. Must meet threshold to pass.
   * @return dissent - Weighted dissent amount.
   */
  function status(bytes32 _proposalID)
  external
  view
  onlyExtant(_proposalID)
  returns (
    bool open,
    uint256 age,
    uint256 votingBody,
    uint256 voted,
    uint256 approval,
    uint256 dissent
  ) {
    return (
      proposalOpen(_proposalID),
      proposalAge(_proposalID),
      body[database.bytes32Storage(keccak256(abi.encodePacked(_proposalID, "Proposal", "assetID")))],
      database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted"))),
      database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval"))),
      database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "dissent")))
    );
  }

  /**
   * Withdraw committed MYB
   * @notice
   * Withdraws all of your committed token to the original address. Fails if you
   * have no active commitment. Fails if your commitment is locked. Emits
   * Withdraw on success.
   * @param _assetID - The assetID of the locked tokens
   */
  function withdraw(bytes32 _assetID)
  external
  onlyCommitted(msg.sender, _assetID)
  onlyUnlocked(msg.sender, _assetID) {
    uint256 _value = database.uintStorage(keccak256(abi.encodePacked(msg.sender, _assetID, "Commitment", "value")));
    body[_assetID] = body[_assetID].sub(_value);
    database.deleteUint(keccak256(abi.encodePacked(msg.sender, _assetID, "Commitment", "value")));
    database.deleteUint(keccak256(abi.encodePacked(msg.sender, _assetID, "Commitment", "time")));
    bool transferred = ERC20(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)))).transfer(msg.sender, _value);
    require(transferred, "Transfer failed");
    emit Withdraw(msg.sender, _value);
  }

  // --------
  // Internal

  /**
   * Check address null
   * @param _address - Address to check.
   * @return null_ - Whether address is the null address.
   */
  function addressNull(address _address)
  internal
  pure
  returns (bool null_) {
    return (_address == NULL_ADDRESS);
  }

  /**
   * Proposal approval percentage
   * @notice
   * Provides what percentage proposal approval is of total weighted votes.
   * @dev
   * Assumes extant proposal. Assumes nonzero total votes.
   * @param _proposalID - Identifier of proposal to calculate for.
   */
  function approvalPercentage(bytes32 _proposalID)
  internal
  view
  returns (uint8 percent) {
    return percentage(
      database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval"))),
      totalVotes(_proposalID)
    );
  }

  /**
   * Get commitment age
   * @dev
   * Assumes active commitment.
   * @param _account - Account owning commitment to get age of.
   * @return age - Commitment age.
   */
  function commitmentAge(address _account, bytes32 _assetID)
  internal
  view
  returns (uint256 age) {
    return now.sub(database.uintStorage(keccak256(abi.encodePacked(_account, _assetID, "Commitment", "time"))));
  }

  /**
   * Check commitment locked
   * @notice
   * A commitment is locked until vote duration has elapsed.
   * @dev
   * Assumes active commitment.
   * @param _account - Account owning commitment to check.
   * @return locked - Whether commitment is locked.
   */
  function commitmentLocked(address _account, bytes32 _assetID)
  internal
  view
  returns (bool locked) {
    uint256 age = commitmentAge(_account, _assetID);
    return (age <= voteDuration);
  }

  /**
   * Check commitment tier 2
   * @notice
   * A commitment becomes tier 2 after TIER_2_AGE has elapsed.
   * @dev
   * Assumes active commitment. Assumes commitment is not a higher tier.
   * @param _account - Account owning commitment to check.
   * @return tier2 - Whether commitment is tier 2.
   */
  function commitmentTier2(address _account, bytes32 _assetID)
  internal
  view
  returns (bool tier2) {
    uint256 age = commitmentAge(_account, _assetID);
    return (age > TIER_2_AGE);
  }

  /**
   * Check commitment tier 3
   * @notice
   * A commitment becomes tier 3 after TIER_3_AGE has elapsed.
   * @dev
   * Assumes active commitment. Assumes commitment is not a higher tier.
   * @param _account - Account owning commitment to check.
   * @return tier3 - Whether commitment is tier 3.
   */
  function commitmentTier3(address _account, bytes32 _assetID)
  internal
  view
  returns (bool tier3) {
    uint256 age = commitmentAge(_account, _assetID);
    return (age > TIER_3_AGE);
  }

  /**
   * Check account has voted
   * @notice
   * Checks whether account has voted on a proposal.
   * @dev
   * Assumes extant proposal.
   * @param _account - Account to check.
   * @param _proposalID - Identifier of proposal to check.
   * @return voted - Whether account has voted on the proposal.
   */
  function hasVoted(address _account, bytes32 _proposalID)
  internal
  view
  returns (bool voted) {
    return database.boolStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", _account)));
  }

  /**
   * Check proposal meets quorum
   * @dev
   * Assumes extant proposal.
   * @param _proposalID - Identiier of proposal to check.
   * @return meets - Whether proposal meets quorum.
   */
  function meetsQuorum(bytes32 _proposalID)
  internal
  view
  returns (bool meets) {
    return (votingPercentage(_proposalID) >= quorum);
  }

  /**
   * Check proposal meets threshold
   * @dev
   * Assumes extant proposal. Assumes nonzero total votes.
   * @param _proposalID - Identifier of proposal to calculate for.
   */
  function meetsThreshold(bytes32 _proposalID)
  internal
  view
  returns (bool meets) {
    return (approvalPercentage(_proposalID) >= threshold);
  }

  /**
   * Percentage
   * @notice
   * Provides percentage portion is of total.
   * @param _portion - Portion to calculate percentage for.
   * @param _total - Total to calculate percentage of.
   * @return percent - Percentage portion is of total. Integer percent.
   */
  function percentage(uint256 _portion, uint256 _total)
  internal
  pure
  returns (uint8 percent) {
    return uint8(_portion.mul(100).div(_total));
  }

  /**
   * Get proposal age
   * @dev
   * Assumes extant proposal.
   * @param _proposalID - Identifier of proposal to get age of.
   * @return age - Proposal age.
   */
  function proposalAge(bytes32 _proposalID)
  internal
  view
  returns (uint256 age) {
    return now.sub(database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "start"))));
  }

  /**
   * Check proposal open
   * @notice
   * A proposal is open for voting until vote duration has elapsed.
   * @dev
   * Assumes extant proposal.
   * @param _proposalID - Identifier of proposal to check.
   * @return open - Whether proposal is open.
   */
  function proposalOpen(bytes32 _proposalID)
  internal
  view
  returns (bool open) {
    uint256 age = proposalAge(_proposalID);
    return (age <= voteDuration);
  }

  /**
   * Proposal total votes
   * @notice
   * Provides total weighted votes cast on the proposal.
   * Sum of weighted approval and weighted dissent.
   * @param _proposalID - Identifier of proposal to calculate for.
   * @return votes - Total weighted votes cast on the proposal.
   */
  function totalVotes(bytes32 _proposalID)
  internal
  view
  returns (uint256 votes) {
    return database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval")))
      .add(database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "dissent"))));
  }

  /**
   * Proposal voting percentage
   * @notice
   * Provides what percentage voting MYB amount is of total voting body MYB
   * amount at proposal time.
   * @dev
   * Assumes extant proposal. Assumes nonzero voting body at proposal time.
   * @param _proposalID - Identifier of proposal to calculate for.
   */
  function votingPercentage(bytes32 _proposalID)
  internal
  view
  returns (uint8 percent) {
    return percentage(
      database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted"))),
      body[database.bytes32Storage(keccak256(abi.encodePacked(_proposalID, "Proposal", "assetID")))]
    );
  }

  /**
   * Weight vote
   * @param _value - Token amount applied.
   * @param _multiplier - Weighting multiplier.
   * @return vote - Weighted vote amount.
   */
  function weightVote(uint256 _value, uint8 _multiplier)
  internal
  pure
  returns (uint256 vote) {
    return _value.mul(_multiplier).div(100);
  }

  // --------
  // Modifier

  /**
   * Require proposal closed
   * @dev
   * Throws if proposal is open. Assumes extant proposal.
   * @param _proposalID - Identifier of proposal that must be closed.
   */
  modifier onlyClosed(bytes32 _proposalID) {
    require(
      !proposalOpen(_proposalID),
      "Closed proposal required"
    );
    _;
  }

  /**
   * Require account committed
   * @dev
   * Throws if account does not have a commitment.
   * @param _account - Account that must be committed.
   */
  modifier onlyCommitted(address _account, bytes32 _assetID) {
    require(
      accountCommitted(_account, _assetID),
      "Commitment required"
    );
    _;
  }

  /**
   * Require proposal extant
   * @dev
   * Throws if proposal does not exist.
   * @param _proposalID - Identifier for which a proposal must exist.
   */
  modifier onlyExtant(bytes32 _proposalID) {
    require(
      proposalExtant(_proposalID),
      "Proposal not found"
    );
    _;
  }

  /**
   * Require number in range
   * @notice
   * Number must be in range minimum through maximum inclusive.
   * @dev
   * Throws id number is outside range.
   * @param number - Number that must be in range.
   * @param minimum - Lower limit.
   * @param maximum - Upper limit.
   */
  modifier onlyIn(uint8 number, uint8 minimum, uint8 maximum) {
    require(
      number >= minimum && number <= maximum,
      "Number outside valid range"
    );
    _;
  }

  /**
   * Require proposal ID new
   * @dev
   * Throws if identifier refers to an extant proposal.
   * @param _proposalID - Proposal identifier that must be new.
   */
  modifier onlyNew(bytes32 _proposalID) {
    require(
      !proposalExtant(_proposalID),
      "Proposal exists"
    );
    _;
  }

  /**
   * Require maximum 1 vote
   * @dev
   * Throws if account has already voted on the proposal.
   * Assumes extant proposal.
   * @param _proposalID - Identifier of proposal to check.
   * @param _account - Account to check.
   */
  modifier onlyOneVote(bytes32 _proposalID, address _account) {
    require(
      !hasVoted(_account, _proposalID),
      "Already voted"
    );
    _;
  }

  /**
   * Require proposal open
   * @dev
   * Throws if proposal is closed. Assumes extant proposal.
   * @param _proposalID - Identifier of proposal that must be open.
   */
  modifier onlyOpen(bytes32 _proposalID) {
    require(
      proposalOpen(_proposalID),
      "Open proposal required"
    );
    _;
  }

  /**
   * Require number positive
   * @dev
   * Throws if number is not positive.
   * @param _number - Number that must be positive.
   */
  modifier onlyPositive(uint256 _number) {
    require(
      _number > 0,
      "Positive number required"
    );
    _;
  }

  /**
   * Require account uncommitted
   * @dev
   * Throws if account has active commitment.
   * @param _account - Account that must be uncommitted.
   */
  modifier onlyUncommitted(address _account, bytes32 _assetID) {
    require(
      !accountCommitted(_account, _assetID),
      "Commitment disallows"
    );
    _;
  }

  /**
   * Require commitment unlocked
   * @dev
   * Throws if commitment is locked. Assumes active commitment.
   * @param _account - Account owning commitment that must be unlocked.
   */
  modifier onlyUnlocked(address _account, bytes32 _assetID) {
    require(
      !commitmentLocked(_account, _assetID),
      "Unlocked commitment required"
    );
    _;
  }

  /**
   * Require address valid
   * @dev
   * Throws if address is the null address.
   * @param _address - Address that must be valid.
   */
  modifier onlyValid(address _address) {
    require(
      !addressNull(_address),
      "Valid address required"
    );
    _;
  }

  /**
   * Require voting body
   * @dev
   * Throws if voting body MYB amount is 0.
   */
  modifier onlyVotingBody(bytes32 _assetID) {
    require(
      body[_assetID] > 0,
      "Voting body required"
    );
    _;
  }

  /**
   * Require asset ID is valid
   * @dev
   * Throws if address is the null address.
   * @param _assetID - AssetID that must have a valid token address.
   */
  modifier onlyAsset(bytes32 _assetID){
    require(
      !addressNull(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)))),
      "Valid asset required"
    );
    _;
  }

  // -----
  // Event

  /** Approve vote cast */
  event Approve(
    bytes32 indexed proposalID,                 // Approved proposal identifier
    address indexed account,                    // Approving account
    uint256 vote                                // Weighted approval amount
  );

  /** MYB committed to voting */
  event Commit(
    address indexed account,                    // Committing account
    uint256 value                               // MYB amount committed
  );

  /** Decline vote cast */
  event Decline(
    bytes32 indexed proposalID,                 // Declined proposal identifier
    address indexed account,                    // Declining account
    uint256 vote                                // Weighted dissent amount
  );

  /** Proposal created */
  event Propose(
    address indexed proposer,                   // Proposing account
    bytes32 proposalID                          // Proposal identifier
  );

  /** Commitment withdrawn */
  event Withdraw(
    address indexed account,                    // Withdrawing account
    uint256 value                               // MYB amount withdrawn
  );
}
