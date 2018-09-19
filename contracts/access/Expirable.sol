pragma solidity 0.4.24;


import '../math/SafeMath.sol';
import './AccessHierarchy.sol';

// @title A contract extension that gives an expiration date to user access
// @author Kyle Dewhurst, MyBit Foundation
contract Expirable is AccessHierarchy {
  using SafeMath for uint;

  uint public expirationLength = uint256(31557600);    // 365 days

  constructor(address _database) public AccessHierarchy(_database){}
    
  //------------------------------------------------------------------------------------------------------------------
  // @notice Owner can manually grant access to a user here. WIll be used for KYC approval
  // @param Address of new user.
  // @param The level of access granted by owner/burningcontract
  // TODO: does the modifier in AccessHierarchy throw?
  //------------------------------------------------------------------------------------------------------------------
  function approveTemporaryUser(address _newUser, uint _accessLevel)
  onlyOwner
  noEmptyAddress(_newUser)
  public
  returns (bool) {
    require(approveUser(_newUser, _accessLevel));
    uint expiry = now.add(expiry);
    database.setUint(keccak256(abi.encodePacked("userAccessExpiration", _newUser)), expiry);
    return true;
  }


  // @notice Owner can remove access for users
  // @param User to be removed
  function removeTemporaryUser(address _user)
  onlyOwner
  public
  returns (bool) {
    require(removeUser(_user));
    database.deleteUint(keccak256(abi.encodePacked("userAccessExpiration", _user)));
    return true;
  }


  // @notice Owner can change the length of expiration here
  // @param (uint) _newExpirationLength = The number of seconds until the access expires
  function changeExpirationLength(uint _newExpirationLength)
  external
  onlyOwner {
    uint oldExpiration = expirationLength;
    expirationLength = _newExpirationLength;
    emit LogExpirationLengthChanged(oldExpiration, expirationLength);
  }

  event LogExpirationLengthChanged(uint _oldExpirationLength, uint _newExpirationLength);

}
