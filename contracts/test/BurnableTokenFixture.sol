pragma solidity 0.4.24;

import "../tokens/erc20/BurnableToken.sol";

contract BurnableTokenFixture is BurnableToken {
  /** Relay all arguments */
  constructor(string _tokenURI, uint _totalSupply)
  public
  BurnableToken(_tokenURI, _totalSupply) {}
}
