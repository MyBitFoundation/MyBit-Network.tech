pragma solidity 0.4.24;

import "../tokens/erc20/BurnableToken.sol";

contract BurnableTokenFixture is BurnableToken {
  /** Relay all arguments */
  constructor(string _tokenURI, uint _totalSupply)
  public
  BurnableToken(_tokenURI, _totalSupply) {}

  /** Transfer own token */
  function transfer(address _to, uint256 _value)
  public
  returns (bool) {
    return super.transfer(_to, _value);
  }

  /** Transfer approved token */
  function transferFrom(address _from, address _to, uint256 _value)
  public
  returns (bool) {
    return super.transferFrom(_from, _to, _value);
  }
}
