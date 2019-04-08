pragma solidity ^0.4.24;

import "./DividendToken.sol";
import "./GovernedToken.sol";
import "./BurnableToken.sol";

// @title A Dividend token that has governance features .
// @notice This token contract can receive ERC20 tokens as payments and token owners can lock tokens while submitting votes
// @dev Dividend tokens aren't actually locked, but restricted from transferring to avoid locking contravt having to distribute dividends.
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
contract GovernedTokenETH is GovernedToken, DividendToken, BurnableToken {

  // @notice constructor: initialized
  constructor(address _database, string _tokenURI, address _owner)
  public
  GovernedToken(_database)
  DividendToken(_tokenURI, _owner, address(0)){}

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
}
