pragma solidity 0.4.24;

import '../database/Database.sol';

// @title A contract for managing a single platform owner
// @dev Single owned platforms store owner as an address
contract SingleOwned {

  Database public database;

  constructor(address _database) public {
    database = Database(_database);
    //database.setAddress(keccak256(abi.encodePacked("owner")),  _owner);
    //database.boolStorage(keccak256(abi.encodePacked("owner", _owner))) = true;
  }

  //------------------------------------------------------------------------------------------------------------------
  // @notice Transfer ownership to to a new owner
  //------------------------------------------------------------------------------------------------------------------
  function changeOwner(address _newOwner)
  public
  onlyOwner {
    //database.setAddress(keccak256(abi.encodePacked("owner")), _newOwner);
    database.setBool(keccak256(abi.encodePacked("owner", _newOwner)), true);
    database.setBool(keccak256(abi.encodePacked("owner", msg.sender)), false);
    emit OwnershipTransferred(msg.sender, _newOwner);
  }

  // @notice reverts if caller is not the owner
  modifier onlyOwner() {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))) == true);
    _;
  }

  event OwnershipTransferred(address indexed owner, address indexed pendingOwner);
}
