pragma solidity ^0.4.24;

import "./DividendTokenERC20.sol";
import "./GovernedToken.sol";
import "./BurnableToken.sol";

// @title A Dividend token that has governance features and receives ERC20 tokens as payment
// @notice This token contract can receive ERC20 tokens as payments and token owners can lock tokens while submitting votes
// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation
// @dev Dividend tokens aren't actually locked, but restricted from transferring to avoid locking contravt having to distribute dividends.
contract GovernedTokenERC20 is DividendTokenERC20, GovernedToken, BurnableToken{

  // @notice constructor: initializes database and DividendTokenERC20
  // @param (address) _database = the address of the platform database
  // @param (string) _tokenURI = The URI where details of the token (asse) can be found
  // @param (address) _owner = The minting authority for this token
  // @param (address) _erc20Address = The address of the erc20 token to be sent for dividends
  constructor(address _database, string _tokenURI, address _owner, address _erc20Address)
  public
  GovernedToken(_database)
  DividendTokenERC20(_tokenURI, _owner, _erc20Address){}

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
