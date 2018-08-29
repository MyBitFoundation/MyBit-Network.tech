pragma solidity 0.4.24;


contract Expirable is UserAccess { 

  uint public expirationLength;    // The default number of seconds until access expires
  mapping (address => uint) public expirationTime; 

  //------------------------------------------------------------------------------------------------------------------
  // Constructor: Set the default number of seconds until expiration
  //------------------------------------------------------------------------------------------------------------------
  constructor(uint _expirationLength)
  public { 
    expirationLength = _expirationLength; 
  }

  function changeExpirationLength(uint _newExpirationLength)
  external 
  onlyOwner { 
    expirationLength = _newExpirationLength; 
  }

  modifier notExpired() { 
    require(expirationTime[msg.sender] > now); 
    _;
  }
}
