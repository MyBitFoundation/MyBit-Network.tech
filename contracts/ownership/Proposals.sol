pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../database/Events.sol";

interface Proposals_ERC20 {
  function transfer(address _to, uint256 _value) external returns (bool);
  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);
  function totalSupply() external view returns (uint);
}
interface Proposals_Database {
  function addressStorage(bytes32 _key) external view returns (address);
  function uintStorage(bytes32 _key) external view returns (uint);
  function boolStorage(bytes32 _key) external view returns (bool);
  function deleteUint(bytes32 _key) external;
  function deleteAddress(bytes32 _key) external;
  function deleteBool(bytes32 _key) external;
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


  Proposals_Database public db;
  Events public events;


  // @notice constructor
  // @param _db instance
  constructor(address database, address logs)
  public {
    db = Proposals_Database(database);
    events = Events(logs);
  }


  // @notice Creates a new proposal with the specified identifier. Fails if there is no voting committed. Fails if a proposal with the same identifier already exists.
  // @param proposalID - Identifier of new proposal.
  // @dev must delete data from previous proposal if there is a duplicate proposalID being made
  function propose(address token, address executingContract, bytes4 methodID, bytes32 parameterHash)
  external {
    require(hasCommitted(msg.sender, token) > 0, "user has no commitment");
    bytes32 proposalID = keccak256(abi.encodePacked(token, executingContract, methodID, parameterHash));
    require(!proposalOpen(proposalID), "proposal is already open");
    db.setUint(keccak256(abi.encodePacked("proposal.start", proposalID)), now);
    db.setAddress(keccak256(abi.encodePacked("proposal.token", proposalID)), token);
    db.setAddress(keccak256(abi.encodePacked("proposal.initiator", proposalID)), msg.sender);
    emit Propose(msg.sender, proposalID);
    emit ProposalDetails(proposalID, executingContract, methodID, parameterHash);
  }



  // @notice Approves proposal with all of your committed tokens
  // @param proposalID - Identifier of proposal to approve.
  function approve(bytes32 proposalID)
  external
  returns (bool){
    address token = db.addressStorage(keccak256(abi.encodePacked("proposal.token", proposalID)));
    require(hasCommitted(msg.sender, token) > 0, "Commitment required");  // Tokens committed + waited minimum staking time
    require(proposalOpen(proposalID), "Open proposal required");    // Is the proposal waiting execution?
    uint256 commitValue = tallyVotes(proposalID, token, msg.sender);
    bytes32 approvalID = keccak256(abi.encodePacked("proposal.approval", proposalID));
    uint256 approval = db.uintStorage(approvalID);
    db.setUint(approvalID, approval.add(commitValue));
    emit Approve(proposalID, msg.sender, commitValue);
    return true;
  }


  // @notice Declines proposal with all of your committed tokens. Your vote is weighted differently depending on how long your tokens have been committed.
  // Requires an unlocked commitment and an open proposal you haven't voted on. Emits Decline on success.
  // @param proposalID - Identifier of proposal to decline.
  function decline(bytes32 proposalID)
  external
  returns (bool){
    address token = db.addressStorage(keccak256(abi.encodePacked("proposal.token", proposalID)));
    require(hasCommitted(msg.sender, token) > 0, "Commitment required");
    require(proposalOpen(proposalID), "Open proposal required");
    uint256 commitValue = tallyVotes(proposalID, token, msg.sender);
    bytes32 dissentID = keccak256(abi.encodePacked("proposal.dissent", proposalID));
    uint256 dissent = db.uintStorage(dissentID);
    db.setUint(dissentID, dissent.add(commitValue));
    emit Decline(proposalID, msg.sender, commitValue);
    return true;
  }


  // @notice Updates users vote and the total vote count for this proposal
  function tallyVotes(bytes32 proposalID, address token, address tokenHolder)
  internal
  returns (uint commitValue) {
    bytes32 userVoteID = keccak256(abi.encodePacked("proposal.voted", proposalID, tokenHolder));
    require(db.uintStorage(userVoteID) == 0);  // make sure token holder hasn't already voted
    commitValue = db.uintStorage(keccak256(abi.encodePacked("commitment.value", token, tokenHolder)));
    db.setUint(userVoteID, commitValue);
    bytes32 voteID = keccak256(abi.encodePacked("proposal.votecount", proposalID));
    uint256 voteCount = db.uintStorage(voteID);
    db.setUint(voteID, voteCount.add(commitValue));
    return commitValue;
  }

  // TODO: test gas returns vs gas costs on this function
  // @notice removes consensus info about proposal. Won't be able to create same proposalID until voter data is removed
  function removeProposalInfo(bytes32 proposalID)
  internal
  returns (bool) {
    db.deleteAddress(keccak256(abi.encodePacked("proposal.token", proposalID)));
    db.deleteAddress(keccak256(abi.encodePacked("proposal.initiator", proposalID)));
    db.deleteUint(keccak256(abi.encodePacked("proposal.approval", proposalID)));
    db.deleteUint(keccak256(abi.encodePacked("proposal.dissent", proposalID)));
    db.deleteUint(keccak256(abi.encodePacked("proposal.start", proposalID)));
    return true;
  }

  // @notice removes voter data from database
  // @dev once all voters are removed, the rest of the proposal data can be safely removed
  // @dev deletes proposal start time, vote count,
  function removeProposalVoters(bytes32 proposalID, address[] voters)
  external
  returns (bool) {
    require (voters.length < 100);
    bool finished = db.boolStorage(keccak256(abi.encodePacked("proposal.executed", proposalID)));
    bool failed = !hasConsensus(proposalID) && !proposalOpen(proposalID);
    require(finished || failed, "proposal is still ongoing");   // check if it has been executed or failed to reach consensus
    uint deletedVotes;
    for (uint8 i = 0; i < voters.length; i++){
      deletedVotes = deletedVotes.add(db.uintStorage(keccak256(abi.encodePacked("proposal.voted", proposalID, voters[i]))));
      db.deleteUint(keccak256(abi.encodePacked("proposal.voted", proposalID, voters[i])));
    }
    uint voteCount = db.uintStorage(keccak256(abi.encodePacked("proposal.votecount", proposalID)));
    uint remaining = voteCount.sub(deletedVotes);
    db.setUint(keccak256(abi.encodePacked("proposal.votecount", proposalID)), remaining);
    if (finished) { db.deleteBool(keccak256(abi.encodePacked("proposal.executed", proposalID))); }
    if (remaining == 0){ removeProposalInfo(proposalID);  }
    return true;
  }

  /**
   * @dev Assumes active commitment.
   * @param account - Account owning commitment to get age of.
   * @return age - Commitment age.
   */
  function hasCommitted(address account, address token)
  public
  view
  returns (uint256) {
    return db.uintStorage(keccak256(abi.encodePacked("commitment.start", token, account)));
  }

  /**
   * @notice proposal is open for voting until vote duration has elapsed.
   * @return open - Whether proposal is open.
   */
  function proposalOpen(bytes32 proposalID)
  public
  view
  returns (bool open) {
    uint256 age = now.sub(db.uintStorage(keccak256(abi.encodePacked("proposal.start", proposalID))));
    address token = db.addressStorage(keccak256(abi.encodePacked("proposal.token", proposalID)));
    return (age <= db.uintStorage(keccak256(abi.encodePacked("asset.voteduration", token))) && age > now);
  }


  // @notice returns true if vote quorum and vote threshold are reached
  function hasConsensus(bytes32 proposalID)
  public
  view
  returns (bool){
    address assetToken = db.addressStorage(keccak256(abi.encodePacked("proposal.token", proposalID)));
    uint approval = db.uintStorage(keccak256(abi.encodePacked("proposal.approval", proposalID)));
    uint quorum = (approval * 100) / db.uintStorage(keccak256(abi.encodePacked("proposal.votecount", proposalID)));   // what percentage approved ??
    bool quorumReached = quorum >= db.uintStorage(keccak256(abi.encodePacked("asset.quorum", assetToken)));
    uint totalSupply = Proposals_ERC20(assetToken).totalSupply();
    uint voteCount = db.uintStorage(keccak256(abi.encodePacked("proposal.votecount", proposalID)));
    bool thresholdReached = ( (voteCount * 100) / totalSupply ) >= db.uintStorage(keccak256(abi.encodePacked("asset.threshold", assetToken)));
    return quorumReached && thresholdReached;
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
