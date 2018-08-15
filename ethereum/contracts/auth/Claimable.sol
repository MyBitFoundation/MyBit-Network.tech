pragma solidity ^0.4.24;

import "./Owned.sol";

contract Claimable is Owned {

  address public pendingOwner;

  //------------------------------------------------------------------------------------------------------------------
  // @notice Transfer ownership to to a new owner
  //------------------------------------------------------------------------------------------------------------------
  function transferOwnership(address _newOwner) 
  public 
  onlyOwner
  noZeroAddress(_newOwner) {
    pendingOwner = _newOwner;
  }

  //------------------------------------------------------------------------------------------------------------------
  // @notice Pending owner can claim full ownership here
  //------------------------------------------------------------------------------------------------------------------
  function claimOwnership() 
  public 
  onlyPendingOwner {
    emit OwnershipTransferred(owner, pendingOwner);
    owner = pendingOwner;
    pendingOwner = address(0);
  }


  /**
   * @dev Modifier throws if called by any account other than the pendingOwner.
   */
  modifier onlyPendingOwner() {
    require(msg.sender == pendingOwner);
    _;
  }
