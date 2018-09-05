pragma solidity 0.4.24;

import '../database/Database.sol';

// @title A contract for managing a single platform owner
// @dev Single owned platforms store owner as an address
contract SingleOwned {

  Database public database;

  constructor(address _database, address _owner) public {
    database = Database(_database);
    database.setAddress(keccak256(abi.encodePacked("owner")),  _owner);
  }

  //------------------------------------------------------------------------------------------------------------------
  // @notice Transfer ownership to to a new owner
  //------------------------------------------------------------------------------------------------------------------
  function changeOwner(address _newOwner)
  public
  onlyOwner {
    database.setAddress(keccak256(abi.encodePacked("owner")), _newOwner);
    emit OwnershipTransferred(msg.sender, _newOwner);
  }

  // @notice reverts if caller is not the owner
  modifier onlyOwner() {
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  event OwnershipTransferred(address indexed owner, address indexed pendingOwner);
}
