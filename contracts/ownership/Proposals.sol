pragma solidity 0.4.24;

import "../math/SafeMath.sol";

interface ERC20 {
  function transfer(address _to, uint256 _value) external returns (bool);
  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);
}
interface DB {
  function addressStorage(bytes32 _key) external view returns (address);
  function uintStorage(bytes32 _key) external view returns (uint);
  function boolStorage(bytes32 _key) external view returns (bool);
  function deleteUint(bytes32 _key) external;
  function setBool(bytes32 _key, bool _bool) external;
  function setUint(bytes32 _key, uint _value) external;
  function setBytes32(bytes32 _key, bytes32 _value) external;
  function setAddress(bytes32 _key, address _value) external;
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
contract Proposals {
  using SafeMath for uint256;

  // --------
  // Constant

  uint256 constant TIER_2_AGE = 180 days;       // Tier 2 commitment age
  uint256 constant TIER_3_AGE = 365 days;       // Tier 3 commitment age
  uint8 constant TIER_1_MULTIPLIER = 100;       // Tier 1 multiplier
  uint8 constant TIER_2_MULTIPLIER = 150;       // Tier 2 multiplier
  uint8 constant TIER_3_MULTIPLIER = 200;       // Tier 3 multiplier

  DB public database;


  // @notice constructor
  // @param _database instance
  constructor(address _database)
  public {
    database = DB(_database);
  }

  // @notice initiates governance for this token
  // @param _tokenAddress - MYB token contract address.
  // @param _voteDuration - Vote duration. Voting period of each proposal. Must be positive.
  // @param _quorum - Amount of supply that must vote to make a proposal valid. Integer percent, eg 20 for 20%. In range 1-100 inclusive.
  // @param _threshold - Amount of weighted votes that must be approval for a proposal to pass. Integer percent, eg 51 for 51%. In range 1-100 inclusive.
  function startGovernance(address _tokenAddress, uint256 _voteDuration, uint8 _quorum, uint8 _threshold)
  public
  returns (bool){
    // TODO: only allow initiating by platform contract
    require(_quorum > 0 && _quorum < 100);
    require(_threshold > 0 && _threshold < 100);
    bytes32 tokenID = keccak256(abi.encodePacked("token.governed", _tokenAddress));
    require(!database.boolStorage(tokenID));
    database.setBool(tokenID, true);
    database.setUint(keccak256(abi.encodePacked("token.voteduration", _tokenAddress)), _voteDuration);
    database.setUint(keccak256(abi.encodePacked("token.quorum", _tokenAddress)), _quorum);
    database.setUint(keccak256(abi.encodePacked("token.threshold", _tokenAddress)), _threshold);
    return true;
  }

    /**
     * Commit MYB to voting
     * @notice Commits specified amount of your MYB to voting.
     * @dev Fails if you already have an active commitment. Emits Commit on success.
     * @param _value - MYB amount to commit.
     */
    function commit(address _tokenHolder, uint256 _value, address _token)
    external {
      require(_value > 0, "Non zero value required");
      require(commitmentAge(_tokenHolder, _token) == 0, "commitment already made");
      require(tokenIsGoverned(_token));
      require(ERC20(_token).transferFrom(_tokenHolder, address(this), _value), "transferFrom failed");
      database.setUint(keccak256(abi.encodePacked("commitment.value",  _token, _tokenHolder)), _value);
      database.setUint(keccak256(abi.encodePacked("commitment.start", _token, _tokenHolder)), now);
      emit Commit(_tokenHolder, _value);
    }


    // @notice Creates a new proposal with the specified identifier. Fails if there is no voting committed. Fails if a proposal with the same identifier already exists.
    // @param _proposalID - Identifier of new proposal.
    // TODO: format calldata properly
    function propose(address _proposer, address _token, address _contractAddress, bytes4 _methodID, bytes32 _parameterHash)
    external {
      require(commitmentAge(_proposer, _token) > 0, "user has no commitment");
      require(tokenIsGoverned(_token));
      bytes32 proposalID = keccak256(abi.encodePacked(_proposer, _token, _contractAddress, _methodID, _parameterHash));
      require(!proposalOpen(proposalID), "proposal is already open");
      database.setUint(keccak256(abi.encodePacked("proposal.start", proposalID)), now);
      database.setAddress(keccak256(abi.encodePacked("proposal.token", proposalID)), _token);
      emit Propose(_proposer, proposalID);
    }




  // @notice Approves proposal with all of your committed tokens
  // @param _proposalID - Identifier of proposal to approve.
  function approve(bytes32 _proposalID, address _tokenHolder)
  external {
    address token = database.addressStorage(keccak256(abi.encodePacked("proposal.token", _proposalID)));
    uint age = commitmentAge(_tokenHolder, token);
    require(age > 0, "Commitment required");  // Tokens committed + waited minimum staking time
    require(proposalOpen(_proposalID), "Open proposal required");    // Is the proposal waiting execution?
    uint256 commitValue = tallyVotes(_proposalID, _tokenHolder);
    uint256 voteWeight = commitValue.mul(multiplierOf(_tokenHolder, age)).div(100);
    bytes32 approvalID = keccak256(abi.encodePacked("proposal.approval", _proposalID));
    uint256 approval = database.uintStorage(approvalID);
    database.setUint(approvalID, approval.add(voteWeight));
    emit Approve(_proposalID, _tokenHolder, voteWeight);
  }

  /**
   * @notice Declines proposal with all of your committed tokens. Your vote is weighted differently depending on how long your tokens have been committed.
   * Requires an unlocked commitment and an open proposal you haven't voted on. Emits Decline on success.
   * @param _proposalID - Identifier of proposal to decline.
   */
  function decline(bytes32 _proposalID, address _tokenHolder)
  external {
    address token = database.addressStorage(keccak256(abi.encodePacked("proposal.token", _proposalID)));
    uint age = commitmentAge(_tokenHolder, token);
    require(age > 0, "Commitment required");
    require(proposalOpen(_proposalID), "Open proposal required");
    uint256 commitValue = tallyVotes(_proposalID, _tokenHolder);
    uint256 voteWeight = commitValue.mul(multiplierOf(_tokenHolder, age)).div(100);
    bytes32 dissentID = keccak256(abi.encodePacked("proposal.dissent", _proposalID));
    uint256 dissent = database.uintStorage(dissentID);
    database.setUint(dissentID, dissent.add(voteWeight));
    emit Decline(_proposalID, _tokenHolder, commitValue);
  }


  // @notice Updates users vote and the total vote count for this proposal
  function tallyVotes(bytes32 _proposalID, address _tokenHolder)
  internal
  returns (uint commitValue) {
    bytes32 userVoteID = keccak256(abi.encodePacked("proposal.voted", _proposalID, _tokenHolder));
    address token = database.addressStorage(keccak256(abi.encodePacked("proposal.token", _proposalID)));
    require(!database.boolStorage(userVoteID));  // make sure token holder hasn't already voted
    database.setBool(userVoteID, true);
    commitValue = database.uintStorage(keccak256(abi.encodePacked("commitment.value", token, _tokenHolder)));
    bytes32 voteID = keccak256(abi.encodePacked("proposal.votecount", _proposalID));
    uint256 voteCount = database.uintStorage(voteID);
    database.setUint(voteID, voteCount.add(commitValue));
    assert (commitValue > 0);
    return commitValue;
  }


  function cancelCommitment(address _tokenHolder, address _token)
  external
  returns (bool){
    require(commitmentAge(_tokenHolder, _token) > 0, "token holder hasnt committed tokens");
    bytes32 releaseTimeID = keccak256(abi.encodePacked("commitment.releasetime", _token, _tokenHolder));
    require(now < database.uintStorage(releaseTimeID));
    database.deleteUint(keccak256(abi.encodePacked("commitment.start", _token, _tokenHolder)));   // remove reference to start date which is the authortiy check
    database.setUint(releaseTimeID, now.add(database.uintStorage(keccak256(abi.encodePacked("token.voteduration")))));
    return true;
  }

  /**
   * @notice Withdraws all of your committed MYB to the original address.
   * @dev Fails if you have no active commitment. Fails if your commitment is locked.
   */
  function withdrawTokens(address _tokenHolder, address _token)
  external
  returns (bool){
    require(commitmentAge(_tokenHolder, _token) > 0, "token holder hasnt committed tokens");
    bytes32 releaseTimeID = keccak256(abi.encodePacked("commitment.releasetime", _token, _tokenHolder));
    uint releaseTime = database.uintStorage(releaseTimeID);
    require(now > releaseTime && releaseTime > 0);
    database.deleteUint(releaseTimeID);
    bytes32 commitmentValueID = keccak256(abi.encodePacked("commitment.value", _tokenHolder));
    uint256 value = database.uintStorage(commitmentValueID);
    database.deleteUint(commitmentValueID);
    require(ERC20(_token).transfer(_tokenHolder, value));
    emit Withdraw(_tokenHolder, value);
    return true;
  }

  // --------
  // Internal

  /**
   * @dev Assumes active commitment.
   * @param _account - Account owning commitment to get age of.
   * @return age - Commitment age.
   */
  function commitmentAge(address _account, address _token)
  internal
  view
  returns (uint256) {
    return now.sub(database.uintStorage(keccak256(abi.encodePacked("commitment.start", _token, _account))));
  }

  /**
   * @notice proposal is open for voting until vote duration has elapsed.
   * @return open - Whether proposal is open.
   */
  function proposalOpen(bytes32 _proposalID)
  internal
  view
  returns (bool open) {
    uint256 age = now.sub(database.uintStorage(keccak256(abi.encodePacked("proposal.start", _proposalID))));
    address token = database.addressStorage(keccak256(abi.encodePacked("proposal.token", _proposalID)));
    return (age <= database.uintStorage(keccak256(abi.encodePacked("token.voteduration", token))) && age > 0);
  }

  /**
   * @notice Gets commitment multiplier. A commitment multiplier changes as the commitment advances tiers.
   * @dev Fails if account has no active commitment.
   * @param _account - Account owning commitment to get the multiplier of.
   * @return multiplier - Current commitment multiplier.
   */
  function multiplierOf(address _account, uint age)
  public
  view
  returns (uint8 multiplier) {
    if (age < TIER_2_AGE) return TIER_1_MULTIPLIER;
    if (age < TIER_3_AGE) return TIER_2_MULTIPLIER;
    else return TIER_3_MULTIPLIER;
  }

  // --------
  // Modifier

  function tokenIsGoverned(address _token)
  public
  view
  returns (bool){
    return (database.boolStorage(keccak256(abi.encodePacked("token.governed", _token))));
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
