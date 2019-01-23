pragma solidity ^0.4.24;

import "./StandardToken.sol";
import "../../math/SafeMath.sol";


// @notice give GovernedToken access to view uint and bytes32 storage
interface DBAccess {
  function addressStorage(bytes32 _key) external view returns (address);
  function uintStorage(bytes32 _key) external view returns (uint);
  function bytes32Storage(bytes32 _key) external view returns (bytes32);
  function setUint(bytes32 _key, uint _value) external;
}

// @title A Dividend token that has governance features .
// @notice This token contract can receive ERC20 tokens as payments and token owners can lock tokens while submitting votes
// @dev Dividend tokens aren't actually locked, but restricted from transferring to avoid locking contravt having to distribute dividends.
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
contract GovernedToken is StandardToken{
  using SafeMath for uint;

  DBAccess public database;


  // @notice constructor: initialized
  constructor(address _database)
  public{
    database = DBAccess(_database);
  }


  // @notice returns the amount of tokens _investor has locked for this asset
  function getAmountAvailable(address _investor)
  public
  view
  returns (uint) {
    uint amountLocked = database.uintStorage(keccak256(abi.encodePacked("commitment.value", address(this), _investor)));
    uint balance = balances[_investor];
    uint available = balance.sub(amountLocked);
    return available;
  }

  // @notice commit tokens for proposals and voting
  function lock(uint _amount)
  external
  returns(bool success) {
    require(_amount > 0);
    require(database.addressStorage(keccak256(abi.encodePacked("asset.governance", address(this)))) != address(0));
    uint totalToLock = database.uintStorage(keccak256(abi.encodePacked("commitment.value", address(this), msg.sender))).add(_amount);
    require(totalToLock <= balanceOf(msg.sender));
    database.setUint(keccak256(abi.encodePacked("commitment.start", address(this), msg.sender)), now);
    database.setUint(keccak256(abi.encodePacked("commitment.releasetime", address(this), msg.sender)), now.add(database.uintStorage(keccak256(abi.encodePacked("asset.voteDuration", address(this))))));
    database.setUint(keccak256(abi.encodePacked("commitment.value", address(this), msg.sender)), totalToLock);
    return true;
  }

  // @notice unlock commited tokens
  function unlock(uint _amount)
  external
  returns(bool success) {
    require(database.uintStorage(keccak256(abi.encodePacked("commitment.releasetime", address(this), msg.sender))) <= now);
    uint remainderToLock = database.uintStorage(keccak256(abi.encodePacked("commitment.value", address(this), msg.sender))).sub(_amount);
    require(remainderToLock >= 0);
    if(remainderToLock == 0){ database.setUint(keccak256(abi.encodePacked("commitment.start", address(this), msg.sender)), 0); }
    database.setUint(keccak256(abi.encodePacked("commitment.value", address(this), msg.sender)), remainderToLock);
    return true;
  }

}
