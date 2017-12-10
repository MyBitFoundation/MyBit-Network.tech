pragma solidity ^0.4.15;

contract Owned {
  address public owner;


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


  function transferOwnership(address newOwner) onlyOwner external {
    require(newOwner != address(0));
    OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }

}
