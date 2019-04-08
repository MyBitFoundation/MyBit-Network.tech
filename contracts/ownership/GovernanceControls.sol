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

  Database public db;
  Events public events;



  // @notice initiator of the platform sets the initial functions quorum level
  // @notice quorum level dictates the number of votes required for that function to be executed
  constructor(address database, address logs)
  public  {
    db = Database(database);
    events = Events(logs);
  }

  // @notice initiates governance for this token
  // @param tokenAddress - MYB token contract address.
  // @param voteDuration - Vote duration. Voting period of each proposal. Must be positive.
  // @param quorum - Amount of supply that must vote to make a proposal valid. Integer percent, eg 20 for 20%. In range 1-100 inclusive.
  // @param threshold - Amount of weighted votes that must be approval for a proposal to pass. Integer percent, eg 51 for 51%. In range 1-100 inclusive.
  function startGovernance(address tokenAddress, address governanceContract, uint256 voteDuration, uint8 quorum, uint8 threshold)
  public
  returns (bool){
    // TODO: only allow initiating by platform contract
    require(quorum > 0 && quorum < 100);
    require(threshold > 0 && threshold < 100);
    require(voteDuration > 86400);   // 1 day minimum
    bytes32 governanceID = keccak256(abi.encodePacked("asset.governance", tokenAddress));
    require(db.addressStorage(governanceID) == address(0));
    db.setAddress(governanceID, governanceContract);
    db.setUint(keccak256(abi.encodePacked("asset.voteDuration", tokenAddress)), voteDuration);
    db.setUint(keccak256(abi.encodePacked("asset.quorum", tokenAddress)), quorum);
    db.setUint(keccak256(abi.encodePacked("asset.threshold", tokenAddress)), threshold);
    return true;
  }


  // // @notice If restricted it will have to be called from address(this) using a voting proccess on signForFunctionCall
  // function addFunctionality(address _contractAddress, address tokenAddress, bytes4 _methodID, uint256 quorumLevel, uint256 threshold)
  // external
  // isRestricted(msg.sig, keccak256(abi.encodePacked(_contractAddress, tokenAddress, _methodID, quorumLevel)))
  // returns (bool) {
  //   return true;
  // }


  // function updateGovernance(address token address newContract)
  // external
  // returns (bool) {
  //
  // }


  //
  // function setBurnRatio()
  // external
  // returns (bool) {
  //   return true;
  // }
  //


  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('Governance levels destroyed', address(this), msg.sender, address(this).balance, address(0));
    selfdestruct(msg.sender);
  }



  // @notice reverts if caller is not the owner
  modifier onlyOwner {
    require(db.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))) == true);
    _;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                              Events
  //------------------------------------------------------------------------------------------------------------------
}
