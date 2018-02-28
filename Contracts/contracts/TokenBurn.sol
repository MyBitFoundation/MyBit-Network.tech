pragma solidity ^0.4.18;
import './MyBitToken.sol';
import './Database.sol';
import './OraclizeAPI.sol';

// This contract transfers MyBit tokens and holds them forever with no mechanism to transfer them out again.
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


// function burnQuery(uint _accessLevelDesired)
// internal
// basicVerification(_accessLevelDesired)
// whenNotPaused
// payable
// returns(bool){
//   bytes32 queryID = oraclize_query('URL', 'json(https://api.coinmarketcap.com/v1/ticker/mybit-token/).0.price_usd');
//   database.setAddress(queryID, msg.sender);
//   database.setUint(queryID, _accessLevelDesired);
//   return true;
// }

// function __callback(bytes32 myid, uint256 result)
// public
// isOrcalize
// whenNotPaused{
//   uint256 _usdPrice = result.mul(8); // Curent mybit token is 8 decimal places, handle it in wei?
//   address _sender = database.addressStorage(myid);
//   uint256 _accessLevelDesired = database.uintStorage(myid);
//   uint256 _myBitTokensNeeded = accessCostUSD[_accessLevelDesired] / _usdPrice;
//   database.setUint(keccak256(_sender, _accessLevelDesired), _myBitTokensNeeded);
//   database.deleteAddress(queryID);
//   database.deleteUint(queryID);
//   LogCallBackRecieved(_sender, _usdPrice, _accessLevelDesired, _myBitTokensNeeded);
// }

function burnTokens(uint _accessLevelDesired)
external
basicVerification(_accessLevelDesired)
whenNotPaused
returns (bool) {
  // uint256 accessCostMyB = database.uintStorage(keccak256(msg.sender, _accessLevelDesired));
  uint accessCostMyB = accessCostUSD[_accessLevelDesired];
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

// modifier isOrcalize() {
//   require(msg.sender == oraclize_cbAddress());
//   _;
// }

event LogMyBitBurnt(address _burner, uint256 _amount, uint256 _timestamp);
event LogCallBackRecieved(address _sender, uint256 _usdPrice, uint256 _subscribeLevel, uint256 _myBitTokensNeeded);

}
