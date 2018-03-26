pragma solidity ^0.4.17;

contract HelloCoverage {
  address public owner;
  uint public uintValue;


  function HelloCoverage() public {
    owner = msg.sender;
    uintValue = 10;
  }

  function updateUintValue(uint _val) public {
    uintValue = _val;
  }
}
