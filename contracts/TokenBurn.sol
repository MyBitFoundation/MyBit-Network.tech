
pragma solidity ^0.4.18;
import './MyBitToken.sol'; 
import './Approval.sol'; 

// This contract transfers MyBit tokens and holds them forever with no mechanism to transfer them out again. 
// TODO: Stop people from transferring in token on their own. 
// TODO: Get oraclize call
contract TokenBurn { 

MyBitToken myBitToken; 
Approval approval;

uint256 public numTokensBurnt; 
mapping (uint8 => uint256) public accessCostUSD;   

function TokenBurn(address _myBitToken, address _approval) 
public {
  myBitToken = MyBitToken(_myBitToken);
  approval = Approval(_approval); 
  accessCostUSD[2] = 10;
  accessCostUSD[3] = 100;
  accessCostUSD[4] = 1000;
}

// Transfer tokens into this contract. 
function burnTokens(uint8 _accessLevelDesired)
external 
basicVerification(_accessLevelDesired)
whenNotPaused(1)
returns (bool) {
  // uint256 accessCostMyB = Oraclize(accessCostUSD[_accessLevelDesired]);    // Get USD -> MYB price 
  uint256 accessCostMyB = accessCostUSD[_accessLevelDesired];   // TODO: using this instead of oracle for now
  require(myBitToken.transferFrom(msg.sender, this, accessCostMyB));
  require(approval.approveUser(msg.sender, _accessLevelDesired)); 
  numTokensBurnt += accessCostMyB;
  LogMyBitBurnt(msg.sender, accessCostMyB, block.timestamp); 
  return true;
}

modifier basicVerification(uint8 _newAccessLevel) { 
  uint8 currentLevel = approval.userAccess(msg.sender);
  require(currentLevel >= 1);    // Must have basic KYC verification 
  require(currentLevel < _newAccessLevel);       // Dont allow burning to downgrade access level
  _; 
}

modifier whenNotPaused(uint8 _level) { 
    require(!approval.paused(this, _level)); 
    _;
  }

event LogMyBitBurnt(address _burner, uint256 _amount, uint256 _timestamp);

}
