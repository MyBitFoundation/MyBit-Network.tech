pragma solidity ^0.4.18;
import './MyBitToken.sol';
import './Database.sol';
import './SafeMath.sol';

// This contract transfers MyBit tokens and holds them forever with no mechanism to transfer them out again.
// TODO: upgradeable myBitToken
contract TokenBurn {
  using SafeMath for *;


  MyBitToken public myBitToken;
  Database public database;

  function TokenBurn(address _database, address _myBitToken)
  public {
    myBitToken = MyBitToken(_myBitToken);
    database = Database(_database);
  }

  function burnTokens(uint _accessLevelDesired)
  external
  whenNotPaused
  priceUpdated
  basicVerification(_accessLevelDesired)
  returns (bool) {
    uint mybPrice = database.uintStorage(keccak256("mybUSDPrice"));
    uint accessCostMyB = database.uintStorage(keccak256("accessTokenFee", _accessLevelDesired)).mul(10^11).div(mybPrice);
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

  modifier priceUpdated {
    require (now < database.uintStorage(keccak256("mybUSDPriceExpiration")));
    _;
  }

  event LogMyBitBurnt(address _burner, uint _amount, uint _timestamp);


}
