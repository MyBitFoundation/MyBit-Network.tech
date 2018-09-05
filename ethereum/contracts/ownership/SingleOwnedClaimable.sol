pragma solidity ^0.4.24;


contract SingleOwnedClaimable {

  Database public database; 

  //------------------------------------------------------------------------------------------------------------------
  // @notice Transfer ownership to to a new owner
  //------------------------------------------------------------------------------------------------------------------
  function transferOwnership(address _newOwner) 
  public 
  onlyOwner
  noZeroAddress(_newOwner) {
    database.setAddress(keccak256(abi.encodePacked("pendingOwner",)) msg.sender))));
  }

  //------------------------------------------------------------------------------------------------------------------
  // @notice Pending owner can claim full ownership here
  //------------------------------------------------------------------------------------------------------------------
  function claimOwnership() 
  public 
  onlyPendingOwner {
    emit OwnershipTransferred(owner, pendingOwner);
    database.setAddress(keccak256(abi.encodePacked("owner")), msg.sender); 
    databse.deleteAddress(keccak256(abi.encodePacked("pendingOwner", msg.sender))); 
    pendingOwner = address(0);
  }


  /**
   * @dev Modifier throws if called by any account other than the pendingOwner.
   */
  modifier onlyPendingOwner() {
    require(database.addressStorage(keccak256(abi.encodePacked("pendingOwner", msg.sender))));
    _;
  }

  modifier onlyOwner() { 
    require(database.addressStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _; 
  }

  event OwnershipTransferred(address indexed owner, address indexed pendingOwner);
