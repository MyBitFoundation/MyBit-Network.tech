pragma solidity ^0.4.18;

contract Owned {
  address public owner;

  // ------------Approval--------------
  mapping (address => bool) public userApproved;   // users who are approved to create assets


  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  function Owned() 
  public {
    owner = msg.sender;
  }

  function validate(address _sender) 
  view 
  returns (bool) {
    return _sender == owner;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  function approveUser(address _newUser)
  onlyOwner
  external
  returns (bool) { 
    userApproved[_newUser] = true; 
    return true;
  }

  function removeUser(address _user)
  onlyOwner
  external
  returns (bool) { 
    userApproved[_user] = false; 
    return true;
  }

  function transferOwnership(address _newOwner) 
  onlyOwner 
  external {
    require(_newOwner != address(0));
    OwnershipTransferred(owner, _newOwner);
    owner = _newOwner;
  }

  modifier onlyApproved { 
    require(userApproved[msg.sender]); 
    _; 
  }

  }
