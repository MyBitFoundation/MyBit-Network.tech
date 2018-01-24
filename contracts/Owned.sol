pragma solidity ^0.4.18;

// This contract handles authorization and freezing of the dapp
// TODO: add kill functionality??
contract Owned {
  address public owner;
  address public ownerBackup; 

  // Pause levels: 1 = pause basic functionality, 2 = pause withdraws
  mapping (address => mapping (uint8 => bool)) public paused;    // Address = contract address to pause,  uint8 = level of pause


  function Owned() 
  public {
  }

  function changeToBackupOwner(address _newBackup)
  noZeroAddress(_newBackup)
  external { 
    require (msg.sender == ownerBackup); 
    owner = msg.sender; 
    ownerBackup = _newBackup; 
  }

  function transferOwnership(address _newOwner) 
  onlyOwner
  noZeroAddress(_newOwner)
  external {
    require(_newOwner != address(0));
    owner = _newOwner;
    OwnershipTransferred(owner, _newOwner);
  }

  function pause(address _contract, uint8 _level) 
  onlyOwner  
  public {
    paused[_contract][_level] = true;
    Pause(_contract, _level, block.timestamp);
  }

  function unpause(address _contract, uint8 _level) 
  onlyOwner  
  public {
    paused[_contract][_level] = false;
    Unpause(_contract, _level, block.timestamp);
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  modifier noZeroAddress(address _param) { 
    require (_param != address(0)); 
    _;
  }

  event Pause(address _contract, uint8 _level, uint256 _timestamp);
  event Unpause(address _contract, uint8 _level, uint256 _timestamp);
  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
}
