pragma solidity 0.4.24;

import "../interfaces/DBInterface.sol";
import "../database/Events.sol";

contract Approval{
  DBInterface private database;
  Events private events;

  constructor(address _database, address _events) public{
    database = DBInterface(_database);
    events = Events(_events);
  }

  // @notice A function to approve a user or contract to call functions on another msg.sender's behalf
  function approve(address _account, address _contract, bytes4 _function)
  external
  returns(bool){
    database.setBool(keccak256(abi.encodePacked("approval", msg.sender, _account, _contract, _function)), true);
    return true;
  }

  // @notice The function to revoke approval for another user to call functions for msg.sender
  function revoke(address _account, address _contract, bytes4 _function)
  external
  returns(bool){
    database.deleteBool(keccak256(abi.encodePacked("approval", msg.sender, _account, _contract, _function)));
    return true;
  }
}
