pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../database/Events.sol";

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
 * Anyone can create a proposal. An token holder can lock their tokens to become
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


  DB public database;
  Events public events;


  // @notice constructor
  // @param _database instance
  constructor(address _database, address _events)
  public {
    database = DB(_database);
    events = Events(_events);
  }


  // @notice Creates a new proposal with the specified identifier. Fails if there is no voting committed. Fails if a proposal with the same identifier already exists.
  // @param _proposalID - Identifier of new proposal.
  function propose(address _token, address _contractAddress, bytes4 _methodID, bytes32 _parameterHash)
  external {
    require(commitmentAge(msg.sender, _token) > 0, "user has no commitment");
    bytes32 proposalID = keccak256(abi.encodePacked(_token, _contractAddress, _methodID, _parameterHash));
    require(!proposalOpen(proposalID), "proposal is already open");
    database.setUint(keccak256(abi.encodePacked("proposal.start", proposalID)), now);
    database.setAddress(keccak256(abi.encodePacked("proposal.token", proposalID)), _token);
    database.setAddress(keccak256(abi.encodePacked("proposal.initiator", proposalID)), msg.sender);
    emit Propose(msg.sender, proposalID);
    emit ProposalDetails(proposalID, _contractAddress, _methodID, _parameterHash);
  }



  // @notice Approves proposal with all of your committed tokens
  // @param _proposalID - Identifier of proposal to approve.
  function approve(bytes32 _proposalID)
  external
  returns (bool){
    address token = database.addressStorage(keccak256(abi.encodePacked("proposal.token", _proposalID)));
    uint age = commitmentAge(msg.sender, token);
    require(age > 0, "Commitment required");  // Tokens committed + waited minimum staking time
    require(proposalOpen(_proposalID), "Open proposal required");    // Is the proposal waiting execution?
    uint256 commitValue = tallyVotes(_proposalID, token, msg.sender);
    bytes32 approvalID = keccak256(abi.encodePacked("proposal.approval", _proposalID));
    uint256 approval = database.uintStorage(approvalID);
    database.setUint(approvalID, approval.add(commitValue));
    emit Approve(_proposalID, msg.sender, commitValue);
    return true;
  }


  // @notice Declines proposal with all of your committed tokens. Your vote is weighted differently depending on how long your tokens have been committed.
  // Requires an unlocked commitment and an open proposal you haven't voted on. Emits Decline on success.
  // @param _proposalID - Identifier of proposal to decline.
  function decline(bytes32 _proposalID)
  external
  returns (bool){
    address token = database.addressStorage(keccak256(abi.encodePacked("proposal.token", _proposalID)));
    uint age = commitmentAge(msg.sender, token);
    require(age > 0, "Commitment required");
    require(proposalOpen(_proposalID), "Open proposal required");
    uint256 commitValue = tallyVotes(_proposalID, token, msg.sender);
    bytes32 dissentID = keccak256(abi.encodePacked("proposal.dissent", _proposalID));
    uint256 dissent = database.uintStorage(dissentID);
    database.setUint(dissentID, dissent.add(commitValue));
    emit Decline(_proposalID, msg.sender, commitValue);
    return true;
  }


  // @notice Updates users vote and the total vote count for this proposal
  function tallyVotes(bytes32 _proposalID, address _token, address _tokenHolder)
  internal
  returns (uint commitValue) {
    bytes32 userVoteID = keccak256(abi.encodePacked("proposal.voted", _proposalID, _tokenHolder));
    require(database.uintStorage(userVoteID) == 0);  // make sure token holder hasn't already voted
    commitValue = database.uintStorage(keccak256(abi.encodePacked("commitment.value", _token, _tokenHolder)));
    database.setUint(userVoteID, commitValue);
    bytes32 voteID = keccak256(abi.encodePacked("proposal.votecount", _proposalID));
    uint256 voteCount = database.uintStorage(voteID);
    database.setUint(voteID, voteCount.add(commitValue));
    return commitValue;
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
    return (age <= database.uintStorage(keccak256(abi.encodePacked("asset.voteduration", token))) && age > 0);
  }



  // -----
  // Event

  /** Approve vote cast */
  event Approve(
    bytes32 indexed proposalID,                 // Approved proposal identifier
    address indexed account,                    // Approving account
    uint256 vote                                // Weighted approval amount
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

}
