pragma solidity ^0.4.18;
import './MyBitToken.sol';
import './Database.sol';
import './oraclizeAPI_05.sol';
import './SafeMath.sol';

// This contract transfers MyBit tokens and holds them forever with no mechanism to transfer them out again.
// TODO: upgradeable myBitToken
contract TokenBurn is usingOraclize {
  using SafeMath for *;

  
MyBitToken public myBitToken;
Database public database;

mapping (uint => uint) public accessCostUSD;

function TokenBurn(address _database, address _myBitToken)
public {
  myBitToken = MyBitToken(_myBitToken);
  database = Database(_database);
  accessCostUSD[2] = 10;
  accessCostUSD[3] = 100;
  accessCostUSD[4] = 1000;
}


function burnQuery(uint _accessLevelDesired)
external
basicVerification(_accessLevelDesired)
whenNotPaused
payable
returns(bool){
   bytes32 queryID = oraclize_query('URL', 'json(https://api.coinmarketcap.com/v1/ticker/mybit-token/).0.price_usd');
   database.setAddress(queryID, msg.sender);
   database.setUint(queryID, _accessLevelDesired);
   return true;
}

function __callback(bytes32 myid, uint256 result)
public
isOraclize
whenNotPaused
returns(bool){
  uint256 accessLevelDesired = database.uintStorage(myid);
  address sender = database.addressStorage(myid);
  uint256 myBitTokensNeeded = accessCostUSD[accessLevelDesired] / result;
  database.setUint(keccak256("accessTokenFee", sender, accessLevelDesired), myBitTokensNeeded);
  database.deleteAddress(myid);
  database.deleteUint(myid);
  LogCallBackRecieved(sender, result, accessLevelDesired, myBitTokensNeeded);
  return true;
}

// TODO: must guard for re-entrancy
// TODO: hardcode value until deployed on ropsten
function burnTokens(uint _accessLevelDesired)
external
basicVerification(_accessLevelDesired)
whenNotPaused
returns (bool) {
  uint256 accessCostMyB = accessCostUSD[_accessLevelDesired];
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
  require(currentLevel >= 1);    // Must have basic KYC verification
  require(currentLevel < _newAccessLevel);       // Dont allow burning to downgrade access level
  require (_newAccessLevel < 5);
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

event LogMyBitBurnt(address _burner, uint256 _amount, uint256 _timestamp);
event LogCallBackRecieved(address _sender, uint256 _usdPrice, uint256 _subscribeLevel, uint256 _myBitTokensNeeded);

}
