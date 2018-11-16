pragma solidity 0.4.24;

import "../math/SafeMath.sol";

interface MyBitToken {
  function transfer(address _to, uint256 _value) external returns (bool);
  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);
}
interface DB {
  function uintStorage(bytes32 _key) external view returns (uint);
  function boolStorage(bytes32 _key) external view returns (bool);
  function deleteUint(bytes32 _key) external;
  function setUint(bytes32 _key, uint _value) external;
}

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
  using SafeMath for uint256;

  // --------
  // Constant

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



  /**
   * @notice constructor
   * @param _tokenAddress - MYB token contract address.
   * @param _voteDuration - Vote duration. Voting period of each proposal. Must be positive.
   * @param _quorum - Amount of supply that must vote to make a proposal valid. Integer percent, eg 20 for 20%. In range 1-100 inclusive.
   * @param _threshold - Amount of weighted votes that must be approval for a proposal to pass. Integer percent, eg 51 for 51%. In range 1-100 inclusive.
   */
  constructor(address _database, address _tokenAddress, uint256 _voteDuration, uint8 _quorum, uint8 _threshold)
  public
  onlyIn(_quorum, 1, 100)
  onlyIn(_threshold, 1, 100) {
    require(_voteDuration > 0);
    database = DB(_database);
    token = MyBitToken(_tokenAddress);
    voteDuration = _voteDuration;
    quorum = _quorum;
    threshold = _threshold;
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
    require(accountCommitted(msg.sender), "Commitment required");
    require(proposalExtant(_proposalID));
    require(proposalOpen(_proposalID), "Open proposal required");
    require(!database.boolStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", msg.sender))), "Already voted");
    database.setBool(keccak256(abi.encodePacked(_proposalID, "Proposal", msg.sender)), true);
    uint256 value = database.uintStorage(keccak256(abi.encodePacked(msg.sender, "Commitment", "value")));
    uint256 voted = database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted")));
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted")), voted.add(value));
    uint8 multiplier = multiplierOf(msg.sender);
    uint256 vote = value.mul(multiplier).div(100);
    uint256 approval = database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval")));
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval")), approval.add(vote));
    emit Approve(_proposalID, msg.sender, vote);
  }

  /**
   * Commit MYB to voting
   * @notice Commits specified amount of your MYB to voting.
   * @dev Fails if you already have an active commitment. Emits Commit on success.
   * @param _value - MYB amount to commit.
   */
  function commit(uint256 _value)
  external {
    require(_value > 0, "Nonzero value required");
    require(database.uintStorage(keccak256(abi.encodePacked(msg.sender, "Commitment", "value"))) == 0, "Commitment disallows");
    body[_assetID] = body[_assetID].add(_value);
    database.setUint(keccak256(abi.encodePacked(msg.sender, "Commitment", "value")), _value);
    database.setUint(keccak256(abi.encodePacked(msg.sender, "Commitment", "time")), now);
    bool transferred = token.transferFrom(msg.sender, address(this), _value);
    require(transferred, "Transfer failed");
    emit Commit(msg.sender, _value);
  }

  /**
   * @notice Declines proposal with all of your committed tokens. Your vote is weighted differently depending on how long your tokens have been committed.
   * Requires an unlocked commitment and an open proposal you haven't voted on. Emits Decline on success.
   * @param _proposalID - Identifier of proposal to decline.
   */
  function decline(bytes32 _proposalID)
  external {
    require(proposalExtant(_proposalID));
    require(proposalOpen(_proposalID), "Open proposal required");
    require(accountCommitted(msg.sender), "Commitment required");
    require(!database.boolStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", msg.sender))), "Already voted");
    database.setBool(keccak256(abi.encodePacked(_proposalID, "Proposal", msg.sender)), true);
    uint256 value = database.uintStorage(keccak256(abi.encodePacked(msg.sender, "Commitment", "value")));
    uint256 voted = database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted")));
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted")), voted.add(value));
    uint8 multiplier = multiplierOf(msg.sender);
    uint256 vote = value.mul(multiplier).div(100);
    uint256 dissent = database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "dissent")));
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "dissent")), dissent.add(vote));
    emit Decline(_proposalID, msg.sender, vote);
  }

  /**
   * @notice Gets commitment multiplier. A commitment multiplier changes as the commitment advances tiers.
   * @dev Fails if account has no active commitment.
   * @param _account - Account owning commitment to get the multiplier of.
   * @return multiplier - Current commitment multiplier.
   */
  function multiplierOf(address _account, bytes32 _assetID)
  public
  view
  returns (uint8 multiplier) {
    uint256 age = commitmentAge(_account);
    if (age < TIER_2_AGE) return TIER_1_MULTIPLIER;
    if (age < TIER_3_AGE) return TIER_2_MULTIPLIER;
    else return TIER_3_MULTIPLIER;
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
   * @notice Creates a new proposal with the specified identifier. Fails if there is no voting body. Fails if a proposal with the same identifier already exists.
   * @param _proposalID - Identifier of new proposal.
   */
  function propose(bytes32 _proposalID)
  external
  onlyAsset(_assetID) {
    require(body > 0, "Voting body required");
    require(!proposalExtant(_proposalID), "Proposal exists");
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "start")), now);
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted")), 0);
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval")), 0);
    database.setUint(keccak256(abi.encodePacked(_proposalID, "Proposal", "dissent")), 0);
    database.setBytes32(keccak256(abi.encodePacked(_proposalID, "Proposal", "assetID")), _assetID);
    emit Propose(msg.sender, _proposalID);
  }

  /**
   * @notice Returns the final result of the proposal.
   * @dev A proposal passes if it meets quorum and meets the approval threshold.
   * @param _proposalID - Identifier of proposal to get result of.
   * @return passed - Whether the proposal passed.
   */
  function result(bytes32 _proposalID)
  external
  view
  returns (bool passed) {
    uint8 votePercent = database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "voted"))).mul(100).div(body);
    passed = proposalExtant(_proposalID) && votePercent >= quorum && !proposalOpen(_proposalID);
    return (passed && meetsThreshold(_proposalID));
  }

  /**
   * @notice Withdraws all of your committed MYB to the original address.
   * @dev Fails if you have no active commitment. Fails if your commitment is locked.
   */
  function withdraw()
  external {
    require(accountCommitted(msg.sender), "Commitment required");
    uint256 _value = database.uintStorage(keccak256(abi.encodePacked(msg.sender, "Commitment", "value")));
    body = body.sub(_value);
    database.deleteUint(keccak256(abi.encodePacked(msg.sender, "Commitment", "value")));
    database.deleteUint(keccak256(abi.encodePacked(msg.sender, "Commitment", "time")));
    bool transferred = token.transfer(msg.sender, _value);
    require(transferred, "Transfer failed");
    emit Withdraw(msg.sender, _value);
  }

  // --------
  // Internal

  /**
   * @dev Assumes active commitment.
   * @param _account - Account owning commitment to get age of.
   * @return age - Commitment age.
   */
  function commitmentAge(address _account, bytes32 _assetID)
  internal
  view
  returns (uint256 age) {
    return now.sub(database.uintStorage(keccak256(abi.encodePacked(_account, "Commitment", "time"))));
  }

  /**
   * @notice Check account committed
   * @param _account - Account to check.
   * @return committed - Whether account has an active commitment.
   */
  function accountCommitted(address _account)
  public
  view
  returns (bool committed) {
    committed = database.uintStorage(keccak256(abi.encodePacked(_account, "Commitment", "value"))) > 0;
    return committed && (commitmentAge(_account) >= voteDuration);
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
    uint totalVotes = database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval"))).add(database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "dissent"))));
    uint approvalPercentage =  database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "approval"))).mul(100).div(totalVotes);
    return (approvalPercentage >= threshold);
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
    uint256 age = now.sub(database.uintStorage(keccak256(abi.encodePacked(_proposalID, "Proposal", "start"))));
    return (age <= voteDuration);
  }

  // --------
  // Modifier


  /**
   * @notice Number must be in range minimum through maximum inclusive.
   * @dev Throws id number is outside range.
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
