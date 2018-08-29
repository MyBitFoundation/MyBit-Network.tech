pragma solidity ^0.4.24;

import "./Owned.sol";


// @dev Single owned platforms store owner as an address
contract SingleOwned is Owned {

  //------------------------------------------------------------------------------------------------------------------
  // @notice Transfer ownership to to a new owner
  //------------------------------------------------------------------------------------------------------------------
  function transferOwnership(address _newOwner) 
  public 
  onlyOwner
  noZeroAddress(_newOwner) {
    database.setAddress(keccak256(abi.encodePacked("owner")),  _newOwner);
    OwnershipTransferred(msg.sender, _newOwner); 
  }

  modifier onlyOwner() { 
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _; 
  }

  event OwnershipTransferred(address indexed owner, address indexed pendingOwner);
