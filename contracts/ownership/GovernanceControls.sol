pragma solidity ^0.4.24;

import '../database/Database.sol';
import '../database/Events.sol';
import '../math/SafeMath.sol';
import '../interfaces/ERC20.sol';


// @title A contract which allows for token holders to authorize particular functions to be called
// @notice Token holders must lock their tokens against a particular function
// @notice Token holders can unlock their tokens, removing their vote
// @dev An owner has already been initialized when database is deployed
// @author Kyle Dewhurst, MyBit Foundation
contract GovernanceControls {
  using SafeMath for uint256;

  Database public database;
  Events public events;



  // @dev methodID = bytes4(sha3("functionName(parameterType, parameterType)")
  // @dev functionID = sha3(contractAddress, methodID)
  // @dev numVotes is sha3(contractAddress, methodID, sha3(parameter, parameter)))
  // @dev quorumLevel = percentage of tokens required to be locked for the execution of a function


  // @notice initiator of the platform sets the initial functions quorum level
  // @notice quorum level dictates the number of votes required for that function to be executed
  constructor(address _database, address _events)
  public  {
    database = Database(_database);
    events = Events(_events);
    // bytes4 methodID = bytes4(keccak256(abi.encodePacked("setQuorumLevel(address, address, bytes4, uint256)")));
    // bytes32 functionID = keccak256(abi.encodePacked(address(this), methodID));
    // database.setUint(functionID, _baseQuorum);   // the initial quorum level to set further quorum levels
  }

  // @notice initiates governance for this token
  // @param _tokenAddress - MYB token contract address.
  // @param _voteDuration - Vote duration. Voting period of each proposal. Must be positive.
  // @param _quorum - Amount of supply that must vote to make a proposal valid. Integer percent, eg 20 for 20%. In range 1-100 inclusive.
  // @param _threshold - Amount of weighted votes that must be approval for a proposal to pass. Integer percent, eg 51 for 51%. In range 1-100 inclusive.
  function startGovernance(address _tokenAddress, uint256 _voteDuration, uint8 _quorum, uint8 _threshold, uint256 _stakeRequirement)
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
    database.setUint(keccak256(abi.encodePacked("token.stakerequirement", _tokenAddress)), _stakeRequirement);
    return true;
  }

  // // @notice If restricted it will have to be called from address(this) using a voting proccess on signForFunctionCall
  // function setQuorumLevel(address _contractAddress, address _tokenAddress, bytes4 _methodID, uint256 _quorumLevel)
  // external
  // isRestricted(msg.sig, keccak256(abi.encodePacked(_contractAddress, _tokenAddress, _methodID, _quorumLevel)))
  // returns (bool) {
  //   bytes32 functionID = keccak256(abi.encodePacked(_contractAddress, _methodID));
  //   database.setUint(functionID, _quorumLevel);
  //   return true;
  // }

  // function setThreshold()
  // external
  // returns (bool) {
  //   return true;
  // }
  //
  // function setBurnRatio()
  // external
  // returns (bool) {
  //   return true;
  // }
  //
  //
  // function setStakeAmount()
  // external
  // returns (bool) {
  //   return true;
  // }
  //


  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('Governance levels destroyed', address(this), msg.sender, address(this).balance, '');
    selfdestruct(msg.sender);
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
