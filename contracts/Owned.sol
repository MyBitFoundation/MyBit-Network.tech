pragma solidity ^0.4.18;

contract Owned {
  address public owner;
  mapping (address => mapping (uint8 => bool)) public userApproved;   // 0: Approved to fund assets/create assets,  1: Approved to lock tokens,  2: Approved to trade/exchange tokens

  // ------------Approval--------------

  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  function Owned() 
  public {
    owner = msg.sender;
  }

  function transferOwnership(address _newOwner) 
  onlyOwner 
  external {
    require(_newOwner != address(0));
    OwnershipTransferred(owner, _newOwner);
    owner = _newOwner;
  }

  function approveUser(address _newUser, uint8 _accessLevel)
  onlyOwner
  external
  returns (bool) { 
    userApproved[_newUser][_accessLevel] = true; 
    return true;
  }

  function removeUser(address _user, uint8 _accessLevel)
  onlyOwner
  external
  returns (bool) { 
    userApproved[_user][_accessLevel] = false; 
    return true;
  }


  modifier onlyApproved(uint8 _accessLevel) { 
    require(userApproved[msg.sender][_accessLevel]); 
    _; 
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

}
