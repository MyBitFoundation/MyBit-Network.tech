pragma solidity ^0.4.24;

import '../database/Database.sol';
import '../database/Events.sol';

// @title A contract for managing a single platform owner
// @dev Single owned platforms store owner as an address
// @author Kyle Dewhurst, MyBit Foundation
contract SingleOwned {

  Database public database;
  Events public events;

  // @notice constructor: initiate database instance
  constructor(address _database, address _events) public {
    database = Database(_database);
    events = Events(_events);
  }

  // @notice Transfer ownership to to a new owner
  function changeOwner(address _newOwner)
  public
  onlyOwner {
    database.setBool(keccak256(abi.encodePacked("owner", _newOwner)), true);
    database.setBool(keccak256(abi.encodePacked("owner", msg.sender)), false);
    events.transaction('Ownership transferred', msg.sender, _newOwner, 0, '');
    //emit OwnershipTransferred(msg.sender, _newOwner);
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('SingleOwned destroyed', address(this), msg.sender, address(this).balance, '');
    selfdestruct(msg.sender);
  }

  // @notice reverts if caller is not the owner
  modifier onlyOwner() {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))) == true);
    _;
  }

  //event OwnershipTransferred(address indexed owner, address indexed pendingOwner);
}
