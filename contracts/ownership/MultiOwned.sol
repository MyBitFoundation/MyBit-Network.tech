pragma solidity ^0.4.24;

import '../database/Database.sol';
import '../database/Events.sol';

// @title A contract for managing multiple platform owners
// @dev Multi owned platforms store owner as an address. Each owner has full privileges
// @author Peter Phillips, MyBit Foundation
contract MultiOwned {

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
    require(_newOwner != address(0));
    database.setBool(keccak256(abi.encodePacked("owner", _newOwner)), true);
    database.setBool(keccak256(abi.encodePacked("owner", msg.sender)), false);
    events.transaction('Ownership transferred', msg.sender, _newOwner, 0, address(0));
  }

  function addOwner(address _newOwner)
  public
  onlyOwner {
    require(_newOwner != address(0));
    database.setBool(keccak256(abi.encodePacked("owner", _newOwner)), true);
    events.transaction('Owner added', msg.sender, _newOwner, 0, address(0));
  }

  function removeOwner(address _currentOwner)
  public
  onlyOwner {
    require(_currentOwner != msg.sender);
    database.setBool(keccak256(abi.encodePacked("owner", _currentOwner)), false);
    events.transaction('Owner removed', msg.sender, _currentOwner, 0, address(0));
  }

  // @notice platform owners can destroy contract here
  function destroy()
  onlyOwner
  external {
    events.transaction('MultiOwned destroyed', address(this), msg.sender, address(this).balance, address(0));
    selfdestruct(msg.sender);
  }

  // @notice reverts if caller is not the owner
  modifier onlyOwner() {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))) == true);
    _;
  }

  //event OwnershipTransferred(address indexed owner, address indexed pendingOwner);
}
