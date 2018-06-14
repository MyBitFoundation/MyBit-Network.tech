pragma solidity 0.4.24;
import './MyBitToken.sol';
import './Database.sol';
import './SafeMath.sol';

//------------------------------------------------------------------------------------------------------------------
// This contract transfers MyBit tokens and holds them forever with no mechanism to transfer them out again.
//------------------------------------------------------------------------------------------------------------------
contract TokenBurn {
  using SafeMath for uint;


  MyBitToken public myBitToken;
  Database public database;

  //------------------------------------------------------------------------------------------------------------------
  // Constructor: Initialize Database and MyBitToken
  //------------------------------------------------------------------------------------------------------------------
  constructor(address _database, address _myBitToken)
  public {
    myBitToken = MyBitToken(_myBitToken);
    database = Database(_database);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Users can gain access to the platform by burning tokens here
  // Every access level has an associated price in USD. The equivalent value of MyBit must be burnt to gain acccess.
  // TODO: add receiveApproval option
  //------------------------------------------------------------------------------------------------------------------
  function burnTokens(uint _accessLevelDesired)
  external
  whenNotPaused
  priceUpdated
  basicVerification(_accessLevelDesired)
  returns (bool) {
    uint mybPrice = database.uintStorage(keccak256(abi.encodePacked("mybUSDPrice")));
    uint accessCostMyB = (database.uintStorage(keccak256(abi.encodePacked("accessTokenFee", _accessLevelDesired))).mul(10**21)).div(mybPrice);
    assert (accessCostMyB > uint(0));
    require(myBitToken.burnFrom(msg.sender, accessCostMyB));
    database.setUint(keccak256(abi.encodePacked("userAccess", msg.sender)), _accessLevelDesired);
    emit LogMyBitBurnt(msg.sender, accessCostMyB);
    return true;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                              Modifiers
  //------------------------------------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------------------------------------
  // Verifies that desired access level is allowed. No user can downgrade access by burning tokens
  //------------------------------------------------------------------------------------------------------------------
  modifier basicVerification(uint _newAccessLevel) {
  uint currentLevel = database.uintStorage(keccak256(abi.encodePacked("userAccess", msg.sender)));
  require(currentLevel < _newAccessLevel || database.uintStorage(keccak256(abi.encodePacked("userAccessExpiry", msg.sender))) < now);       // Dont allow burning to downgrade access level unless access has expired
  require (_newAccessLevel < uint(4) && _newAccessLevel > uint(0));      // Must be 1, 2 or 3
  _;
}

  //------------------------------------------------------------------------------------------------------------------
  // Verifies contracts has not been paused
  //------------------------------------------------------------------------------------------------------------------
  modifier whenNotPaused {
    require(!database.boolStorage(keccak256(abi.encodePacked("pause", address(this)))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verifies that the MyBit/USD price is still valid
  //------------------------------------------------------------------------------------------------------------------
  modifier priceUpdated {
    require (now < database.uintStorage(keccak256(abi.encodePacked("priceExpiration"))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  //                                           Events
  //------------------------------------------------------------------------------------------------------------------
  event LogMyBitBurnt(address _burner, uint _amount);


}
