pragma solidity 0.4.24;

import '../database/Database.sol';
import '../math/SafeMath.sol'; 
import '../interfaces/ERC20.sol'; 


// @title A contract which allows for token holders to vote for functions to be called
// @notice Token holders must lock their tokens against a particular function 
// @notice Token holders can unlock their tokens, removing their vote
// @dev An owner has already been initialized when database is deployed
// @author Kyle Dewhurst, MyBit Foundation
// TODO: Lock tokens to avoid double voting from different accounts
contract TokenOwned {
  using SafeMath for uint256; 
  Database public database;
  ERC20 public governanceToken; 

  bool public governanceEnded; 

  // NOTE: Local contract variables only here as a reference

  // @notice bytes32 key is sha3(contractAddress, methodID)    methodID = bytes4(sha3("functionName(parameterType, parameterType, etc...)) ")
  mapping (bytes32 => uint) public quorumLevel;     // Percentage of how many owners need to sign this function

  // @notice bytes32 key is sha3(contractAddress, methodID, sha3(parameter(s)))
  mapping (bytes32 => uint) public numberOfSignatures; 


  // @notice creator of the contract sets the initial functions quorum level, dictating the level of consensus required for that function
  constructor(address _governanceToken, bytes32[] _restrictedFunctions, uint[] _quorumLevel)
  public { 
    require(_restrictedFunctions.length == _quorumLevel.length && _restrictedFunctions.length < 100); 
    governanceToken = ERC20(_governanceToken); 
    for (uint8 i = 0; i < _restrictedFunctions.length; i++){
      database.setUint(_restrictedFunctions[i], _quorumLevel[i]); 
    }
  }

  // If restricted it will have to be called from address(this) using a voting proccess on signForFunctionCall
  function addRestrictedFunction(address _contractAddress, bytes4 _methodID, uint _quorumLevel)
  external 
  isRestricted(msg.sig, keccak256(abi.encodePacked(_contractAddress, _methodID, _quorumLevel)))
  returns (bool) { 
    bytes32 functionID = keccak256(abi.encodePacked(_contractAddress, _methodID));
    database.setUint(functionID, _quorumLevel); 
    return true; 
  }

  // @param (bytes32) _parameterHash = The hash of the exact parameter to be called for function...ie sha3(0x3b443c34, 55)
  function signForFunctionCall(address _contractAddress, bytes4 _methodID, bytes32 _parameterHash, uint _amountToLock)
  external 
  returns (bool) {
    bytes32 sigRequestID = keccak256(abi.encodePacked(_contractAddress, _methodID, _parameterHash)); 
    bytes32 numSignaturesID = keccak256(abi.encodePacked("numberOfSignatures", sigRequestID)); 
    require(lockTokens(_amountToLock, sigRequestID)); 
    uint numSignatures = database.uintStorage(numSignaturesID);
    database.setUint(numSignaturesID, numSignatures.add(_amountToLock)); 
    return true; 
  }

  function unlockTokens(bytes32 _sigRequestID)
  external 
  returns (bool) { 
    bytes32 storageID = keccak256(abi.encodePacked("tokenVotesLocked", _sigRequestID, msg.sender));
    bytes32 numSignaturesID = keccak256(abi.encodePacked("numberOfSignatures", sigRequestID));
    uint amountLocked = database.uintStorage(storageID);
    uint numSignatures = database.uintStorage(numSignaturesID); 
    database.setUint(numSignaturesID, numSignatures.sub(amountLocked)); 
    governanceToken.transfer(msg.sender, amountLocked); 
    return true; 
  }


  function endGovernance()
  external 
  isRestricted(msg.sig, keccak256(""))
  returns (bool) { 
    return true; 
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                                Internal Functions
  //------------------------------------------------------------------------------------------------------------------

  function lockTokens(uint _amountToLock, bytes32 _sigRequestID)
  internal 
  returns (bool) { 
    bytes32 storageID = keccak256(abi.encodePacked("tokenVotesLocked", _sigRequestID, msg.sender));
    require(governanceToken.transferFrom(msg.sender, address(this), _amountToLock)); 
    uint amountLocked = database.uintStorage(storageID);
    database.setUint(storageID, amountLocked.add(_amountToLock)); 
    return true; 
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                                View Functions
  //------------------------------------------------------------------------------------------------------------------

  function isQuorumReached(address _contractAddress, bytes4 _methodID, bytes32 _parameterHash)
  external 
  view 
  returns (bool) { 
    
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                                Modifiers
  //------------------------------------------------------------------------------------------------------------------


  // @notice add this modifer to functions that you want multi-sig requirements for
  // @dev function can only be called after at least n >= quorumLevel owners have agreed to call it
  modifier isRestricted(bytes4 _methodID, bytes32 _parameterHash) { 
      uint quorumLevel = database.uintStorage(keccak256(abi.encodePacked(address(this), _methodID))); 
      require(database.uintStorage(keccak256(abi.encodePacked(address(this), _methodID, _parameterHash))) > quorumLevel);  // owners must have agreed on function + parameters
    _;
    // remove signatures from function call 
    database.deleteUint(keccak256(abi.encodePacked(address(this), _methodID, _parameterHash)));  
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verifies no empty addresses are input
  //------------------------------------------------------------------------------------------------------------------
  modifier noZeroAddress(address _param) {
    require (_param != address(0));
    _;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                              Events
  //------------------------------------------------------------------------------------------------------------------
  event LogOwnerChanged(address indexed _previousOwner, address indexed _newOwner);
  event LogFunctionAuthorized(address indexed _owner, string indexed _functionName, bytes32 indexed _beneficiary, bytes32 _authHash);
}
