pragma solidity 0.4.24;

import '../database/Database.sol';
import '../math/SafeMath.sol'; 
import '../interfaces/ERC20.sol'; 


// @title A contract which allows for token holders to restrict/approve functions on the platform
// @notice Two owners are required to agree on a function to be called
// @dev An owner has already been initialized when database is deployed
// @author Kyle Dewhurst, MyBit Foundation
// TODO: Lock tokens to avoid double voting from different accounts
contract TokenOwned {
  using SafeMath for uint256; 
  Database public database;


  // NOTE: Local contract variables only here as a reference

  // @notice bytes32 key is sha3(contractAddress, methodID)    methodID = bytes4(sha3("functionName(parameterType, parameterType, etc...)) ")
  mapping (bytes32 => uint) public quorumLevel;     // Percentage of how many owners need to sign this function

  // @notice bytes32 key is sha3(contractAddress, methodID, sha3(parameter(s)))
  mapping (bytes32 => bool) public functionCallAuthorized;     // has enough signatures for this contract to call that function
  mapping (bytes32 => uint) public numberOfSignatures; 

  mapping (address => address) public delegate;    // user can authorize another address to vote for them

  // @notice creator of the contract sets the initial functions quorum level, dictating the level of consensus required for that function
  constructor(bytes32[] _restrictedFunctions, uint[] _quorumLevel)
  public { 
    require(_restrictedFunctions.length == _quorumLevel.length && _restrictedFunctions.length < 100); 
    for (uint8 i = 0; i < _restrictedFunctions.length; i++){
      database.setUint(_restrictedFunctions[i], _quorumLevel); 
    }
  }

  // If restricted it will have to be called from address(this) using a voting proccess on signForFunctionCall
  function addRestrictedFunction(address _contractAddress, bytes4 _methodID, uint _quorumLevel)
  external 
  isRestricted(bytes4(keccak256(abi.encodePacked("addRestrictedFunction(address, bytes4, uint256)"))), keccak256(abi.encodePacked(_contractAddress, _methodID, _quorumLevel)))
  anyOwner { 
    bytes32 functionID = keccak256(abi.encodePacked(_contractAddress, _methodID));
    database.setUint(functionID, _quorumLevel); 
  }

  // @param (bytes32) _parameterHash = The hash of the exact parameter to be called for function...ie sha3(0x3b443c34, 55)
  function signForFunctionCall(address _contractAddress, bytes4 _methodID, bytes32 _parameterHash)
  external
  anyOwner {
    bytes32 sigRequestID = keccak256(abi.encodePacked(_contractAddress, _methodID, _parameterHash)); 
    ERC20 platformToken = ERC20(database.addressStorage(keccak256(abi.encodePacked("platformToken"))));
    uint tokenHoldings = platformToken.balanceOf(msg.sender); 
    uint numSignatures = database.uintStorage(keccak256(abi.encodePacked("numberOfSignatures", sigRequestID)));
    database.setUint(keccak256(abi.encodePacked("numberOfSignatures", sigRequestID)), numSignatures.add(tokenHoldings)); 
  }



  //------------------------------------------------------------------------------------------------------------------
  //                                                Modifiers
  //------------------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------------------
  // Verifies that sender is an owners
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  // @notice add this modifer to functions that you want multi-sig requirements for
  // @dev function can only be called after at least n >= quorumLevel owners have agreed to call it
  modifier isRestricted(bytes4 _methodID, bytes32 _parameterHash) { 
      require(database.boolStorage(keccak256(abi.encodePacked(address(this), _methodID, _parameterHash))));  // owners must have agreed on function + parameters
    _;
      database.deleteBool(keccak256(abi.encodePacked(address(this), _methodID, _parameterHash)));  
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
