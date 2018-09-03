pragma solidity 0.4.24;

//------------------------------------------------------------------------------------------------------------------
// @notice This contract handles owner authorization for single owner platforms.
// @dev owner is already initialized in Database.
//------------------------------------------------------------------------------------------------------------------
contract Owned {

  Database public database;

  // @notice Constructor: Sets database contract
  constructor(address _database) { 
    database = Database(_database); 
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                              Events
  //------------------------------------------------------------------------------------------------------------------
  event LogOwnerChanged(address indexed _previousOwner, address indexed _newOwner);
}
