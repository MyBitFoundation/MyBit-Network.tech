pragma solidity ^0.4.24;

import '../database/Database.sol';
import '../database/Events.sol';
import '../math/SafeMath.sol';
import '../interfaces/ERC20.sol';


// @title A contract which allows for platform owners to come to consensus on important functionality
// @notice Can hold any number of owners. Each getting 1 vote.
// @dev An owner has already been initialized when database is deployed
// @author Kyle Dewhurst, MyBit Foundation
contract CollectiveOwned {
  using SafeMath for uint256;

  Database public database;
  Events public events;

  // @param (address) _database = the address of the platform database
  // @param (uint) _baseQuorum = the percentage of owners needed to approve a function call
  constructor(address _database, address _events, uint256 _baseQuorum)
  public {
    database = Database(_database);
    events = Events(_events);
    bytes4 methodID = bytes4(keccak256(abi.encodePacked("setQuorumLevel(address, bytes4, uint256)")));
    bytes32 functionID = keccak256(abi.encodePacked(address(this), methodID));
    database.setUint(functionID, _baseQuorum);   // the initial quorum level to set further quorum levels
  }

  // @notice any owner on the platform can call this function to add a new user if it has receieve quorum level of signatures
  // @notice must
  // @param (address) _newOwner the address of the new owner
  function addOwner(address _newOwner)
  external
  isRestricted(msg.sig, keccak256(abi.encodePacked(_newOwner)))
  onlyOwner {
    uint numOwners = database.uintStorage(keccak256(abi.encodePacked("numberOfOwners")));
    database.setBool(keccak256(abi.encodePacked("owner", _newOwner)), true);
    database.setUint(keccak256(abi.encodePacked("numberOfOwners")), numOwners.add(1));
  }

  // @notice any owner can call this function to remove an owner if the the function receives quorum level of signatures
  // @param (address) _owner = the owner to be removed from the group of owners
  function removeOwner(address _owner)
  external
  isRestricted(msg.sig, keccak256(abi.encodePacked(_owner)))
  onlyOwner {
    database.deleteBool(keccak256(abi.encodePacked("owner", _owner)));
  }

  // @notice restricts a function, forcing it to require _quorumLevel of votes to be executed
  function setQuorumLevel(address _contractAddress, bytes4 _methodID, uint256 _quorumLevel)
  external
  isRestricted(msg.sig, keccak256(abi.encodePacked(_contractAddress, _methodID, _quorumLevel)))
  returns (bool) {
    bytes32 functionID = keccak256(abi.encodePacked(_contractAddress, _methodID));
    database.setUint(functionID, _quorumLevel);
    return true;
  }

  // @param (bytes32) _parameterHash = The hash of the exact parameter to be called for function...ie sha3(true, 55)
  function voteForExecution(address _contractAddress, bytes4 _methodID, bytes32 _parameterHash)
  external
  returns (bool) {
    bytes32 executionID = keccak256(abi.encodePacked(_contractAddress, _methodID, _parameterHash));
    bytes32 numVotesID = keccak256(abi.encodePacked("numberOfSignatures", executionID));
    uint256 numSignatures = database.uintStorage(numVotesID);
    database.setUint(numVotesID, numSignatures.add(1));
    return true;
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('CollectiveOwned destroyed', address(this), msg.sender, address(this).balance, '');
    selfdestruct(msg.sender);
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
    uint256 numOwners = database.uintStorage(keccak256(abi.encodePacked("numberOfOwners")));
    // check that number of signatures are greater than required quorum
    return database.uintStorage(numVotesID).mul(100).div(numOwners) >= quorumLevel;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                                Modifiers
  //------------------------------------------------------------------------------------------------------------------


  // @notice reverts if caller is not the owner
  modifier onlyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))) == true);
    _;
  }

  // @notice add this modifer to functions that you want multi-sig requirements for
  // @dev function can only be called after at least n >= quorumLevel owners have agreed to call it
  modifier isRestricted(bytes4 _methodID, bytes32 _parameterHash) {
    require(isQuorumReached(address(this), _methodID, _parameterHash));  // owners must have agreed on function + parameters
    _;
    database.deleteBool(keccak256(abi.encodePacked(address(this), _methodID, _parameterHash)));
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                              Events
  //------------------------------------------------------------------------------------------------------------------
  /*
  event LogOwnerChanged(address indexed _previousOwner, address indexed _newOwner);
  event LogFunctionAuthorized(address indexed _owner, string indexed _functionName, bytes32 indexed _beneficiary, bytes32 _authHash);
  */
}
