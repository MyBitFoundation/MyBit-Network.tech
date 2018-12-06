pragma solidity ^0.4.24;

import "../math/SafeMath.sol";


interface ERC20 {
  function transfer(address _to, uint256 _value) external returns (bool);
  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);
  function burn(uint256 _amount) external returns (bool);
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


// @notice a proposal/voting system that allows token holders to slash proposers stake
// @notice token holder must slash a proportional, but lower amount of their own tokens to slash the stake
// @dev use function burnStake() in any of the other voting systems to add slashing functionality
contract MutualSlashing {
  using SafeMath for uint256;

  DB public database;

  // @notice constructor
  // @param _database instance
  constructor(address _database)
  public {
    database = DB(_database);
  }

  /**
   * Commit MYB to voting
   * @notice Commits specified amount of your MYB to voting.
   * @dev Fails if you already have an active commitment. Emits Commit on success.
   * @param _value - MYB amount to commit.
   */
  function commit(uint256 _value, address _token)
  external {
    require(_value > 0, "Non zero value required");
    require(commitmentAge(msg.sender, _token) == 0, "commitment already made");
    require(database.uintStorage(keccak256(abi.encodePacked("commitment.releasetime", _token, msg.sender))) == 0);
    require(tokenIsGoverned(_token));
    require(ERC20(_token).transferFrom(msg.sender, address(this), _value), "transferFrom failed");
    database.setUint(keccak256(abi.encodePacked("commitment.value",  _token, msg.sender)), _value);
    database.setUint(keccak256(abi.encodePacked("commitment.start", _token, msg.sender)), now);
    emit Commit(msg.sender, _value);
  }

  
  function propose(address _token, uint256 _stake, address _contractAddress, bytes4 _methodID, bytes32 _parameterHash)
  external
  returns (bool){
    require(commitmentAge(msg.sender, _token) > 0, "user has no commitment");
    require(tokenIsGoverned(_token));
    bytes32 proposalID = keccak256(abi.encodePacked(msg.sender, _token, _contractAddress, _methodID, _parameterHash));
    require(!proposalOpen(proposalID), "proposal is already open");
    database.setAddress(keccak256(abi.encodePacked("proposal.initiator", proposalID)), msg.sender);
    database.setUint(keccak256(abi.encodePacked("proposal.stake", proposalID, msg.sender)), _stake);
    database.setUint(keccak256(abi.encodePacked("proposal.start", proposalID)), now);
    database.setAddress(keccak256(abi.encodePacked("proposal.token", proposalID)), _token);
    return true;
  }


  // @notice Approves proposal with all of your committed tokens with option to burn stakers tokens
  // @param _proposalID - Identifier of proposal to approve.
  // @param _tokenHolder : the user holding tokens relevent to this proposal
  // @param _amountToBurn : the amount of tokens user wishes to slash from the proposer
  function approve(bytes32 _proposalID, uint256 _amountToBurn)
  external
  returns (bool){
    address token = database.addressStorage(keccak256(abi.encodePacked("proposal.token", _proposalID)));
    uint age = commitmentAge(msg.sender, token);
    require(age > 0, "Commitment required");  // Tokens committed + waited minimum staking time
    require(proposalOpen(_proposalID), "Open proposal required");    // Is the proposal waiting execution?
    if (_amountToBurn > 0) require(burnStake(_proposalID, _amountToBurn));
    uint256 commitValue = tallyVotes(_proposalID, token, msg.sender);
    bytes32 approvalID = keccak256(abi.encodePacked("proposal.approval", _proposalID));
    uint256 approval = database.uintStorage(approvalID);
    database.setUint(approvalID, approval.add(commitValue));
    return true;
  }

  // @param _proposalID - Identifier of proposal to approve with option to burn stakers tokens
  // @param _tokenHolder : the user holding tokens relevent to this proposal
  // @param _amountToBurn : the amount of tokens user wishes to slash from the proposer
  function decline(bytes32 _proposalID, uint256 _amountToBurn)
  external
  returns (bool){
    address token = database.addressStorage(keccak256(abi.encodePacked("proposal.token", _proposalID)));
    uint age = commitmentAge(msg.sender, token);
    require(age > 0, "Commitment required");  // Tokens committed + waited minimum staking time
    require(proposalOpen(_proposalID), "Open proposal required");    // Is the proposal waiting execution?
    if (_amountToBurn > 0)  require(burnStake(_proposalID, _amountToBurn));
    uint256 commitValue = tallyVotes(_proposalID, token, msg.sender);
    bytes32 dissentID = keccak256(abi.encodePacked("proposal.dissent", _proposalID));
    uint256 dissent = database.uintStorage(dissentID);
    database.setUint(dissentID, dissent.add(commitValue));
    return true;
  }

  // @notice Updates users vote and the total vote count for this proposal
  function tallyVotes(bytes32 _proposalID, address _token, address _tokenHolder)
  internal
  returns (uint commitValue) {
    bytes32 userVoteID = keccak256(abi.encodePacked("proposal.voted", _proposalID, _tokenHolder));
    require(database.uintStorage(userVoteID) == 0);  // make sure token holder hasn't already voted
    commitValue = database.uintStorage(keccak256(abi.encodePacked("commitment.value", _token, _tokenHolder)));
    assert (commitValue > 0);
    database.setUint(userVoteID, commitValue);
    bytes32 voteID = keccak256(abi.encodePacked("proposal.votecount", _proposalID));
    uint256 voteCount = database.uintStorage(voteID);
    database.setUint(voteID, voteCount.add(commitValue));
    return commitValue;
  }

  // @notice internal call handling the mutual burning of proposer and voter tokens
  function burnStake(bytes32 _proposalID, uint256 _amountToBurn)
  internal
  returns (bool) {
    address token = database.addressStorage(keccak256(abi.encodePacked("proposal.token", _proposalID)));
    address proposer = database.addressStorage(keccak256(abi.encodePacked("proposal.initiator", _proposalID)));
    bytes32 stakeID = keccak256(abi.encodePacked("proposal.stake", _proposalID, proposer));
    bytes32 commitmentID = keccak256(abi.encodePacked("commitment.value", token, msg.sender));
    uint256 proposerStake = database.uintStorage(stakeID);
    require(proposerStake > 0, "proposer has no stake left");
    uint256 selfBurnAmount = _amountToBurn.mul(database.uintStorage(keccak256(abi.encodePacked("platform.burnrate"))));
    database.setUint(stakeID, proposerStake.sub(_amountToBurn));   // reduce stake amount
    database.setUint(commitmentID, database.uintStorage(commitmentID).sub(_amountToBurn));   // reduce commitment amount
    require(ERC20(token).burn(_amountToBurn.add(selfBurnAmount)));  // burn both proposer and token holder tokens
    return true;
  }

  // @notice token holder can signal their commitment to be withdrawn after proposal time has elapsed
  // @param _tokenHolder : the address of the tokenholder to cancelCommitment
  function cancelCommitment(address _token)
  external
  returns (bool){
    require(commitmentAge(msg.sender, _token) > 0, "token holder hasnt committed tokens");
    bytes32 releaseTimeID = keccak256(abi.encodePacked("commitment.releasetime", _token, msg.sender));
    require(now < database.uintStorage(releaseTimeID));
    database.deleteUint(keccak256(abi.encodePacked("commitment.start", _token, msg.sender)));   // remove reference to start date which is the authortiy check
    database.setUint(releaseTimeID, now.add(database.uintStorage(keccak256(abi.encodePacked("token.voteduration")))));
    return true;
  }


  // @notice Withdraws all of your committed MYB to the original address.
  // @dev Fails if your commitment is locked.
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
     * @param _age - The age of the commitment
     * @return multiplier - Current commitment multiplier.
     */
    function multiplierOf(uint _age)
    public
    pure
    returns (uint8 multiplier) {
      if (_age < 180) return 100;
      if (_age < 365) return 150;
      else return 200;
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

    event ProposalDetails(
      bytes32 proposalID,
      address contractAddress,
      bytes4 methodID,
      bytes32 parameterHash
    );

    /** Commitment withdrawn */
    event Withdraw(
      address indexed account,                    // Withdrawing account
      uint256 value                               // MYB amount withdrawn
    );

  }
