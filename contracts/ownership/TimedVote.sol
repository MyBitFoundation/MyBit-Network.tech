pragma solidity 0.4.24;

import "../tokens/erc20/BurnableToken.sol";
import "../math/SafeMath.sol";

/**
 * @title Proposal voting
 * @notice
 * Anyone can create a proposal. An MYB holder can lock their tokens to become
 * a voter. Voters may approve or decline proposals. Vote weight increases as
 * tokens are locked for longer periods. A proposal closes after 15 days. It
 * passes if a 20% quorum of total MYB supply voted and 51% of weighted votes
 * approved.
 *
 * Provide the address of the MYB token contract and vote duration. Voting for
 * each proposal will be open for the specified duration.
 */
contract TimedVote {
  // -------
  // Library

  using SafeMath for uint256;

  // --------
  // Constant

  address constant NULL_ADDRESS = address(0);   // Null address
  uint256 constant TIER_2_AGE = 180 days;       // Tier 2 commitment age
  uint8 constant TIER_2_MULTIPLIER = 150;       // Tier 2 multiplier

  // ----
  // Type

  // Commitment of MYB tokens to voting
  struct Commitment {
    uint256 value;                              // MYB amount
    uint256 time;                               // Commit instant
  }

  // Proposal for the MYB community
  struct Proposal {
    uint256 start;                              // Create instant
    uint256 voted;                              // Voting MYB amount
    uint256 approval;                           // Weighted approval amount
    uint256 dissent;                            // Weighted dissent amount
    mapping(address => bool) voters;            // Voting accounts
  }

  // -----
  // State

  BurnableToken token;                          // MYB token contract
  uint256 voteDuration;                         // Vote duration
  mapping(address => Commitment) commitments;   // Active commitments
  mapping(bytes32 => Proposal) proposals;       // Created proposals

  // -----------
  // Constructor

  /**
   * @param _tokenAddress - MYB token contract address.
   * @param _voteDuration - Vote duration. Voting period of each proposal.
   *     Must be positive.
   */
  constructor(address _tokenAddress, uint256 _voteDuration)
  public
  onlyValid(_tokenAddress)
  onlyPositive(_voteDuration) {
    token = BurnableToken(_tokenAddress);
    voteDuration = _voteDuration;
  }

  // ---------
  // Interface

  /**
   * Check account committed
   * @param _account - Account to check.
   * @return committed - Whether the account has an active commitment.
   */
  function accountCommitted(address _account)
  public
  view
  returns (bool committed) {
    return (commitments[_account].value > 0);
  }

  /**
   * Commit MYB to voting
   * @notice
   * Commits specified amount of your MYB to voting. Approve this contract with
   * the token contract for the desired amount before calling. Fails if you
   * already have an active commitment. Emits Commit on success.
   * @param _value - MYB amount to commit.
   */
  function commit(uint256 _value)
  external
  onlyUncommitted(msg.sender) {
    require(_value > 0, "Nonzero value required");
    commitments[msg.sender] = Commitment(_value, now);
    bool transferred = token.transferFrom(msg.sender, this, _value);
    require(transferred, "Transfer failed");
    emit Commit(msg.sender, _value);
  }

  /**
   * Get account commitment amount
   * @param _account - Account to get commitment amount of.
   * @return value - MYB amount currently committed by the given account.
   */
  function commitmentOf(address _account)
  external
  view
  returns (uint256 value) {
    return commitments[_account].value;
  }

  /**
   * Check proposal extant
   * @param _proposalID - Proposal identifier to check.
   * @return extant - Whether a proposal with the specified identifier exists.
   */
  function proposalExtant(bytes32 _proposalID)
  public
  view
  returns (bool extant) {
    return (proposals[_proposalID].start > 0);
  }

  /**
   * Create proposal
   * @notice
   * Creates a new proposal with the specified identifier. Fails if a proposal
   * with the same identifier already exists. Emits Propose on success.
   * @param _proposalID - Identifier of new proposal.
   */
  function propose(bytes32 _proposalID)
  external
  onlyNew(_proposalID) {
    proposals[_proposalID] = Proposal(now, 0, 0, 0);
    emit Propose(msg.sender, _proposalID);
  }

  /**
   * Withdraw committed MYB
   * @notice
   * Withdraws all of your committed MYB to the original address. Fails if you
   * have no active commitment. Fails if your commitment is locked. Emits
   * Withdraw on success.
   */
  function withdraw()
  external
  onlyCommitted(msg.sender)
  onlyUnlocked(msg.sender) {
    uint256 _value = commitments[msg.sender].value;
    delete commitments[msg.sender];
    bool transferred = token.transfer(msg.sender, _value);
    require(transferred, "Transfer failed");
    emit Withdraw(msg.sender, _value);
  }

  // --------
  // Internal

  /**
   * Check address null
   * @param _address - Address to check.
   * @return null_ - Whether the address is the null address.
   */
  function addressNull(address _address)
  internal
  pure
  returns (bool null_) {
    return (_address == NULL_ADDRESS);
  }

  /**
   * Get commitment age
   * @dev
   * Assumes active commitment.
   * @param _account - Account owning commitment to get age of.
   * @return age - Commitment age.
   */
  function commitmentAge(address _account)
  internal
  view
  returns (uint256 age) {
    return now.sub(commitments[_account].time);
  }

  /**
   * Check commitment locked
   * @notice
   * A commitment is locked if its age is within the vote duration.
   * @dev
   * Assumes the specified account has an active commitment.
   * @param _account - Account owning commitment to check.
   * @return locked - Whether commitment of the specified account is locked.
   */
  function commitmentLocked(address _account)
  internal
  view
  returns (bool locked) {
    uint256 age = now.sub(commitments[_account].time);
    return (age <= voteDuration);
  }

  /**
   * Check proposal open
   * @notice
   * A proposal is open for voting if its age is within the vote duration.
   * @dev
   * Assumes a proposal with the specified identifier exists.
   * @param _proposalID - Identifier of proposal to check.
   * @return open - Whether proposal with the specified identifier is open.
   */
  function proposalOpen(bytes32 _proposalID)
  internal
  view
  returns (bool open) {
    uint256 age = now.sub(proposals[_proposalID].start);
    return (age <= voteDuration);
  }

  /**
   * Get current time
   * @dev
   * Used as interface to the now timestamp to enable overriding in tests.
   * @return timestamp - Current instant.
   */
  function time()
  internal
  view
  returns (uint256 timestamp) {
    return now;
  }

  // --------
  // Modifier

  /**
   * Require proposal closed
   * @dev
   * Throws if named proposal is open. Assumes proposal exists.
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
   * Throws if the specified account does not have an active commitment.
   * @param _account - Account that must be committed.
   */
  modifier onlyCommitted(address _account) {
    require(
      accountCommitted(_account),
      "Commitment required"
    );
    _;
  }

  /**
   * Require proposal extant
   * @dev
   * Throws if a proposal with the specified identifier does not exist.
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
   * Require proposal ID new
   * @dev
   * Throws if a proposal with the specified identifier already exists.
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
   * Require proposal open
   * @dev
   * Throws if named proposal is closed. Assumes proposal exists.
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
   * Throws if the specified number is not positive.
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
   * Throws if the specified account has an active commitment.
   * @param _account - Account that must be uncommitted.
   */
  modifier onlyUncommitted(address _account) {
    require(
      !accountCommitted(_account),
      "Commitment disallows"
    );
    _;
  }

  /**
   * Require commitment unlocked
   * @dev
   * Throws if the commitment of the specified account is locked.
   * Assumes the account has an active commitment.
   * @param _account - Account owning commitment that must be unlocked.
   */
  modifier onlyUnlocked(address _account) {
    require(
      !commitmentLocked(_account),
      "Unlocked commitment required"
    );
    _;
  }

  /**
   * Require address valid
   * @dev
   * Throws if the specified address is the null address.
   * @param _address - Address that must be valid.
   */
  modifier onlyValid(address _address) {
    require(
      !addressNull(_address),
      "Valid address required"
    );
    _;
  }

  // -----
  // Event

  /** MYB committed to voting */
  event Commit(
    address indexed account,
    uint256 value
  );

  /** Proposal created */
  event Propose(
    address indexed proposer,
    bytes32 proposalID
  );

  /** Commitment withdrawn */
  event Withdraw(
    address indexed account,
    uint256 value
  );
}
