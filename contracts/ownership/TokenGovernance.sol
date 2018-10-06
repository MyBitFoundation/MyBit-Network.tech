pragma solidity 0.4.24;

import '../database/Database.sol';
import '../math/SafeMath.sol'; 
import '../interfaces/ERC20.sol'; 


// @title A contract which allows for token holders to authorize particular functions to be called
// @notice Token holders must lock their tokens against a particular function 
// @notice Token holders can unlock their tokens, removing their vote
// @dev An owner has already been initialized when database is deployed
// @author Kyle Dewhurst, MyBit Foundation
// TODO: Lock tokens to avoid double voting from different accounts
contract TokenGovernance {
  using SafeMath for uint256; 

  Database public database;

  ERC20 public governanceToken; 



  // @dev methodID = bytes4(sha3("functionName(parameterType, parameterType)")
  // @dev functionID = sha3(contractAddress, methodID)   
  // @dev numVotes is sha3(contractAddress, methodID, sha3(parameter, parameter)))
  // @dev quorumLevel = percentage of tokens required to be locked for the execution of a function 


  // @notice initiator of the platform sets the initial functions quorum level
  // @notice quorum level dictates the number of votes required for that function to be executed
  constructor(address _database, uint256 _baseQuorum)
  public  { 
    governanceToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("platformToken")))); 
    database = Database(_database); 
    governanceToken = ERC20(governanceToken); 
    bytes4 methodID = bytes4(keccak256(abi.encodePacked("setQuorumLevel(address, bytes4, uint256)"))); 
    bytes32 functionID = keccak256(abi.encodePacked(address(this), methodID));
    database.setUint(functionID, _baseQuorum);   // the initial quorum level to set further quorum levels 
  }

  // If restricted it will have to be called from address(this) using a voting proccess on signForFunctionCall
  function setQuorumLevel(address _contractAddress, bytes4 _methodID, uint256 _quorumLevel)
  external 
  isRestricted(msg.sig, keccak256(abi.encodePacked(_contractAddress, _methodID, _quorumLevel)))
  returns (bool) { 
    bytes32 functionID = keccak256(abi.encodePacked(_contractAddress, _methodID));
    database.setUint(functionID, _quorumLevel); 
    return true; 
  }

  // @param (bytes32) _parameterHash = The hash of the exact parameter to be called for function...ie sha3(true, 55)
  function voteForExecution(address _contractAddress, bytes4 _methodID, bytes32 _parameterHash, uint256 _voteAmount)
  external 
  returns (bool) {
    bytes32 executionID = keccak256(abi.encodePacked(_contractAddress, _methodID, _parameterHash)); 
    bytes32 numVotesID = keccak256(abi.encodePacked("numberOfVotes", executionID)); 
    require(lockTokens(_voteAmount, executionID)); 
    uint256 numVotes = database.uintStorage(numVotesID);
    database.setUint(numVotesID, numVotes.add(_voteAmount)); 
    return true; 
  }


  function unlockTokens(bytes32 _executionID)
  external 
  returns (bool) { 
    bytes32 voteID = keccak256(abi.encodePacked("tokenVotesLocked", _executionID, msg.sender));
    bytes32 numVotesID = keccak256(abi.encodePacked("numberOfVotes", _executionID));
    uint256 amountLocked = database.uintStorage(voteID);
    uint256 numVotes = database.uintStorage(numVotesID); 
    database.setUint(numVotesID, numVotes.sub(amountLocked)); 
    governanceToken.transfer(msg.sender, amountLocked); 
    return true; 
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                                Internal Functions
  //------------------------------------------------------------------------------------------------------------------

  function lockTokens(uint _amountToLock, bytes32 _executionID)
  internal 
  returns (bool) { 
    bytes32 voteID = keccak256(abi.encodePacked("tokenVotesLocked", _executionID, msg.sender));
    require(governanceToken.transferFrom(msg.sender, address(this), _amountToLock)); 
    uint256 amountLocked = database.uintStorage(voteID);
    database.setUint(voteID, amountLocked.add(_amountToLock)); 
    return true; 
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                                View Functions
  //------------------------------------------------------------------------------------------------------------------

  function isQuorumReached(address _contractAddress, bytes4 _methodID, bytes32 _parameterHash)
  public 
  view 
  returns (bool) { 
    uint256 quorumLevel = database.uintStorage(keccak256(abi.encodePacked(_contractAddress, _methodID))); 
    bytes32 executionID = keccak256(abi.encodePacked(_contractAddress, _methodID, _parameterHash)); 
    bytes32 numVotesID = keccak256(abi.encodePacked("numberOfVotes", executionID));
    uint256 numTokens = governanceToken.totalSupply(); 
    // check that number of signatures are greater than required quorum
    return database.uintStorage(numVotesID).mul(100).div(numTokens) >= quorumLevel; 
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                                Modifiers
  //------------------------------------------------------------------------------------------------------------------


  // @notice add this modifer to functions that you want multi-sig requirements for
  // @dev function can only be called after at least n >= quorumLevel owners have agreed to call it
  modifier isRestricted(bytes4 _methodID, bytes32 _parameterHash) { 
    require(isQuorumReached(address(this), _methodID, _parameterHash));   // owners must have agreed on function + parameters
    _;
    // remove votes from function call 
    database.deleteUint(keccak256(abi.encodePacked(address(this), _methodID, _parameterHash)));  
  }

  // @notice reverts if caller is not the owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))) == true);
    _;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                              Events
  //------------------------------------------------------------------------------------------------------------------
}
