pragma solidity ^0.4.11;

contract Owned {
  address public owner;


  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  function Owned() {
    owner = msg.sender;
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