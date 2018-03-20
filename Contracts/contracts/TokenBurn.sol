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


 function burnQuery(uint _accessLevelDesired)
 external
 basicVerification(_accessLevelDesired)
 whenNotPaused
 payable
 returns(bool){
  bytes32 queryID = oraclize_query('nested', '[WolframAlpha]  10 to the power of 8 multiplied by ${[URL] json(https://api.coinmarketcap.com/v1/ticker/mybit-token/).0.price_usd}');
  database.setAddress(queryID, msg.sender);
  database.setUint(queryID, _accessLevelDesired);
  LogOraclizeQuerySent(msg.sender, _accessLevelDesired, queryID);
  return true;
}

 function __callback(bytes32 myid, string result)
 public
 isOraclize
 whenNotPaused
 {
   uint accessLevelDesired = database.uintStorage(myid);
   address sender = database.addressStorage(myid);
   database.setUint(keccak256("accessTokenFee", sender, accessLevelDesired), parseInt(result));
   database.deleteAddress(myid);
   database.deleteUint(myid);
   LogCallBackRecieved(myid, sender, parseInt(result));
}

function burnTokens(uint _accessLevelDesired)
external
basicVerification(_accessLevelDesired)
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

modifier basicVerification(uint _newAccessLevel) {
  uint currentLevel = database.uintStorage(keccak256("userAccess", msg.sender));
  require(_newAccessLevel >= 2);
  require(_newAccessLevel <= 4);
  require(_newAccessLevel > currentLevel);
  _;
}

modifier whenNotPaused {
  require(!database.boolStorage(keccak256("pause", this)));
  _;
}

 modifier isOraclize() {
   require(msg.sender == oraclize_cbAddress());
   _;
}

event LogOraclizeQuerySent( address indexed _from, uint256 indexed _accessLevelDesired, bytes32 indexed _queryID);
event LogMyBitBurnt(address _burner, uint256 _amount, uint256 _timestamp);
event LogCallBackRecieved(bytes32 indexed _queryID, address indexed _sender, uint indexed _usdPrice);

}
