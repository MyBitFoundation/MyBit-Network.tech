
pragma solidity ^0.4.18;
import './MyBitToken.sol'; 
import './Database.sol';

// This contract transfers MyBit tokens and holds them forever with no mechanism to transfer them out again. 
// TODO: Get oraclize call
// TODO: upgradeable myBitToken
contract TokenBurn { 

MyBitToken public myBitToken; 
Database public database;

uint256 public numTokensBurnt; 
mapping (uint => uint256) public accessCostUSD;   

function TokenBurn(address _myBitToken, address _database) 
public {
  myBitToken = MyBitToken(_myBitToken);
  database = Database(_database); 
  accessCostUSD[2] = 10;
  accessCostUSD[3] = 100;
  accessCostUSD[4] = 1000;
}

// Transfer tokens into this contract. 
function burnTokens(uint _accessLevelDesired)
external 
basicVerification(_accessLevelDesired)
whenNotPaused()
returns (bool) {
  // uint256 accessCostMyB = Oraclize(accessCostUSD[_accessLevelDesired]);    // Get USD -> MYB price 
  uint256 accessCostMyB = accessCostUSD[_accessLevelDesired];   // TODO: using this instead of oracle for now
  require(myBitToken.transferFrom(msg.sender, this, accessCostMyB));
  database.setUint(keccak256("userAccess", msg.sender), _accessLevelDesired);
  numTokensBurnt += accessCostMyB;
  LogMyBitBurnt(msg.sender, accessCostMyB, block.timestamp); 
  return true;
}

modifier basicVerification(uint _newAccessLevel) { 
  uint currentLevel = database.uintStorage(keccak256("userAccess", msg.sender));
  require(currentLevel >= 1);    // Must have basic KYC verification 
  require(currentLevel < _newAccessLevel);       // Dont allow burning to downgrade access level
  require (_newAccessLevel < 5); 
  _; 
}

modifier whenNotPaused { 
  require(!database.boolStorage(keccak256("pause", this)));
  _; 
}

event LogMyBitBurnt(address _burner, uint256 _amount, uint256 _timestamp);

}
