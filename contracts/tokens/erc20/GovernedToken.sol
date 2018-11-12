pragma solidity ^0.4.24;

import "./DividendToken.sol";
import "./BurnableToken.sol";
import "../../math/SafeMath.sol";


// @notice give GovernedToken access to view uint and bytes32 storage
interface DBAccess {
  function uintStorage(bytes32 _key) external view returns (uint);
  function bytes32Storage(bytes32 _key) external view returns (bytes32);
}

// @title A Dividend token that has governance features .
// @notice This token contract can receive ERC20 tokens as payments and token owners can lock tokens while submitting votes
// @dev Dividend tokens aren't actually locked, but restricted from transferring to avoid locking contravt having to distribute dividends.
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
contract GovernedToken is DividendToken, BurnableToken {
  using SafeMath for uint;

  DBAccess public database;


  // @notice constructor: initialized
  constructor(address _database, string _tokenURI, address _owner)
  public
  DividendToken(_tokenURI, _owner){
    database = DBAccess(_database);
  }

  // @notice Standard DividendToke transfer function, which checks for locked tokens before sending
  function transfer(address _to, uint _amount)
  public
  returns (bool success) {
      require(_amount <= getAmountAvailable(msg.sender));
      super.transfer(_to, _amount);
      return true;
  }

  // @notice Standard DividendToke transferFrom function, which checks for locked tokens before sending
  function transferFrom(address _from, address _to, uint _amount)
  public
  returns (bool success) {
      require(_amount <= getAmountAvailable(_from));
      super.transferFrom(_from, _to, _amount);
      return true;
  }

  // @notice returns the amount of tokens _investor has locked for this asset
  function getAmountAvailable(address _investor)
  public
  view
  returns (uint) {
    bytes32 assetID = database.bytes32Storage(keccak256(abi.encodePacked("assetTokenID", address(this))));
    uint amountLocked = database.uintStorage(keccak256(abi.encodePacked("tokensLocked", assetID, _investor)));
    uint balance = balances[_investor];
    uint available = balance.sub(amountLocked);
    return available;
  }

}
