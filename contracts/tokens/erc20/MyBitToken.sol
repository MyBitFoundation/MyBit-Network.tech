pragma solidity ^0.4.24;

import "./BurnableToken.sol";
import "../../math/SafeMath.sol";

// @title ERC20 token contract with burning capabilities
// @notice Standard ERC20 contract with a deflationary supply.
contract MyBitToken is BurnableToken{
  using SafeMath for uint256;

  string public tokenURI;

  // @notice constructor: initialized
  // @param (string) _tokenURI = The URI where information about this token can be found
  // @param (uint) _totalSupply = The initial supply of the token
  constructor(string _tokenURI, uint _totalSupply)
  public {
      supply = _totalSupply;                        // Update total supply
      tokenURI = _tokenURI;                         // Set the id for reference
      balances[msg.sender] = _totalSupply;
      emit Transfer(address(0), msg.sender, _totalSupply);    // Transfer event indicating token creation
  }
}
