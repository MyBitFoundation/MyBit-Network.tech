pragma solidity ^0.4.18;

// This contract handles authorization and freezing of the dapp
// TODO: make pause() levels
contract Owned {
  address public owner;
  address public authority; 

  bool public paused = false;


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

  function pause() 
  onlyOwner  
  public {
    paused = true;
    Pause(block.timestamp);
  }

  function unpause() 
  onlyOwner  
  public {
    paused = false;
    Unpause(block.timestamp);
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  event Pause(uint256 _timestamp);
  event Unpause(uint256 _timestamp);
  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
}
