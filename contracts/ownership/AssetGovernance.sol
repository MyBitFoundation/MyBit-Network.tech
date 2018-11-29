pragma solidity ^0.4.24;

import "../math/SafeMath.sol";
import "../database/Events.sol";
import "../interfaces/VotingInterface.sol";
interface Burner { function burnEscrow(bytes32 _assetID) external returns (bool); }
interface Escrow { function unlockEscrow(bytes32 _assetID) external returns (bool); }
interface DB {
  function addressStorage(bytes32 _key) external  view returns (address);
  function uintStorage(bytes32 _key) external view returns (uint);
  function boolStorage(bytes32 _key) external view returns (bool);
  function setUint(bytes32 _key, uint _value) external;
  function setAddress(bytes32 _key, address _value) external;
}
interface TokenView {
  function totalSupply() external view returns (uint);
  function balanceOf(address _tokenHolder) external view returns (uint);
}

// @title A contract to manage the governance of assets on the platform
// @author Kyle Dewhurst, MyBit Foundation
// @notice All token holders of an asset can vote here
contract AssetGovernance is VotingInterface{
  using SafeMath for uint256;

  DB public database;
  Events public events;

  uint public consensus = 66;   // TODO: sub the assetmanager portion of tokens, since they can't be voted with
  uint constant scalingFactor = 10e32;

  constructor(address _database, address _events)
  public {
    database = DB(_database);
    events = Events(_events);
  }

  function propose(address _executingContract, bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash)
  public {
    bytes32 proposalID = keccak256(abi.encodePacked(_executingContract, _assetID, _methodID, _parameterHash));
    require(database.addressStorage(keccak256(abi.encodePacked("proposal.token", proposalID))) == address(0));
    address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID)));
    database.setAddress(keccak256(abi.encodePacked("tokenAddress", proposalID)), tokenAddress);
    //emit Propose(msg.sender, proposalID);
  }

  function getProposalID(address _executingContract, bytes32 _assetID, bytes4 _methodID, bytes32 _parameterHash)
  external
  pure
  returns(bytes32){
    return(keccak256(abi.encodePacked(_executingContract, _assetID, _methodID, _parameterHash)));
  }

  // @param (bytes32) _parameterHash = The hash of the exact parameter to be called for function...
  // @dev ie sha3(_assetID) or sha3(_assetID, someAddress)
  function voteForExecution(bytes32 _proposalID, uint _amountToLock)
  external
  validProposal(_proposalID)
  returns (bool) {
    bytes32 numVotesID = keccak256(abi.encodePacked("voteTotal", _proposalID));
    bytes32 investorVotesID = keccak256(abi.encodePacked("investorVotes", _proposalID, msg.sender));
    uint256 numVotes = database.uintStorage(numVotesID);
    uint256 investorVotes = database.uintStorage(investorVotesID);
    require(lockTokens(_proposalID, msg.sender, _amountToLock), "unable to lock tokens");
    database.setUint(numVotesID, numVotes.add(_amountToLock));
    database.setUint(investorVotesID, investorVotes.add(_amountToLock));
    return true;
  }


  // @notice unlock tokens, removing them from the vote
  // @dev _executionID should be looked up in event logs. it is equal to sha3(_assetID, _methodID, _parameterHash)
  function unlockToken(bytes32 _proposalID, uint _amountToUnlock)
  external
  validProposal(_proposalID)
  returns (bool) {
    bytes32 voteTotalID = keccak256(abi.encodePacked("voteTotal", _proposalID));
    bytes32 investorVotesID = keccak256(abi.encodePacked("investorVotes", _proposalID, msg.sender));
    uint investorVotes = database.uintStorage(investorVotesID);
    uint totalVotes = database.uintStorage(voteTotalID);
    address tokenAddress = database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _proposalID)));
    uint numTokensLocked = database.uintStorage(keccak256(abi.encodePacked("tokensLocked", tokenAddress, msg.sender)));
    require(investorVotes >= _amountToUnlock, "Amount to unlock greater than committed voted");   // 1 vote = 1 token
    database.setUint(voteTotalID, totalVotes.sub(_amountToUnlock));
    database.setUint(investorVotesID, investorVotes.sub(_amountToUnlock));
    database.setUint(keccak256(abi.encodePacked("tokensLocked", tokenAddress, msg.sender)), numTokensLocked.sub(_amountToUnlock));
    return true;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Public Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // @notice  Checks that 2/3 or more of token holders agreed on function call
  function isConsensusReached(bytes32 _proposalID)
  public
  view
  returns (bool) {
    TokenView assetToken = TokenView(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _proposalID))));
    bytes32 numVotesID = keccak256(abi.encodePacked("voteTotal", _proposalID));
    uint256 numTokens = assetToken.totalSupply();
    return database.uintStorage(numVotesID).mul(scalingFactor).mul(100).div(numTokens).div(scalingFactor) >= consensus;
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('AssetGovernance destroyed', address(this), msg.sender, address(this).balance, '');
    selfdestruct(msg.sender);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                 Voting Interface Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function result(bytes32 _proposalID)
  external
  view
  returns (bool passed) {
    require(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _proposalID))) != address(0), "proposalID isnt created");
    bytes32 numVotesID = keccak256(abi.encodePacked("voteTotal", _proposalID));
    uint256 numTokens = TokenView(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _proposalID)))).totalSupply();
    // events.consensus('Current consensus', _proposalID, numVotesID, database.uintStorage(numVotesID), numTokens, database.uintStorage(numVotesID).mul(100).div(numTokens));
    //emit LogConsensus(numVotesID, database.uintStorage(numVotesID), numTokens, keccak256(abi.encodePacked(address(this), _assetID, _methodID, _parameterHash)), database.uintStorage(numVotesID).mul(100).div(numTokens));
    return(database.uintStorage(numVotesID).mul(100).div(numTokens) >= consensus);
  }

  function proposalExtant(bytes32 _proposalID)
  public
  view
  returns (bool extant) {
    return (database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _proposalID))) != address(0));
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Internal Functions
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // @notice lock asset tokens to be able to vote
  // @dev keeps track of how many assetTokens this investor has locked (for GovernedToken checks)
  function lockTokens(bytes32 _proposalID, address _investor, uint _amount)
  internal
  returns (bool) {
    TokenView assetToken = TokenView(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _proposalID))));
    uint numTokensLocked = database.uintStorage(keccak256(abi.encodePacked("tokensLocked", address(assetToken), _investor)));
    require(_amount <= assetToken.balanceOf(_investor).sub(numTokensLocked), "Amount to lock greater than available");
    database.setUint(keccak256(abi.encodePacked("tokensLocked", address(assetToken), _investor)), numTokensLocked.add(_amount));
    return true;
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //                                            Modifiers
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // @notice reverts if the asset does not have a token address set in the database
  modifier validProposal(bytes32 _proposalID) {
    require(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _proposalID))) != address(0), "Invalid asset");
    _;
  }

  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))), "Not owner");
    _;
  }

  modifier onlyApprovedContract() {
      require(database.boolStorage(keccak256(abi.encodePacked("contract", msg.sender))));
      _;
  }


}
