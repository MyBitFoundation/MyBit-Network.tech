pragma solidity ^0.4.18;
import './MyBitToken.sol';
import './Database.sol';
import './oraclizeAPI_05.sol';
import './SafeMath.sol';

// This contract transfers MyBit tokens and holds them forever with no mechanism to transfer them out again.
// TODO: upgradeable myBitToken
contract TokenBurn is usingOraclize{
  using SafeMath for *;


MyBitToken public myBitToken;
Database public database;

function TokenBurn(address _database, address _myBitToken)
public {
  myBitToken = MyBitToken(_myBitToken);
  database = Database(_database);
  // OAR = OraclizeAddrResolverI(0x6f485C8BF6fc43eA212E93BBF8ce046C7f1cb475); only for localhost
}

function burnTokens(uint _accessLevelDesired)
external
whenNotPaused
returns (bool) {
  uint256 accessCostMyB = database.uintStorage(keccak256("accessTokenFee", msg.sender, _accessLevelDesired));
  assert (accessCostMyB > 0);
  require(myBitToken.transferFrom(msg.sender, this, accessCostMyB));
  database.setUint(keccak256("userAccess", msg.sender), _accessLevelDesired);
  uint numTokensBurnt = database.uintStorage(keccak256("numberOfTokensBurnt"));
  database.setUint(keccak256("numberOfTokensBurnt"), numTokensBurnt.add(accessCostMyB));
  LogMyBitBurnt(msg.sender, accessCostMyB, block.timestamp);
  return true;
}

modifier whenNotPaused {
  require(!database.boolStorage(keccak256("pause", this)));
  _;
}

 modifier isOraclize() {
   require(msg.sender == oraclize_cbAddress());
   _;
}

event LogMyBitBurnt(address _burner, uint256 _amount, uint256 _timestamp);


}
