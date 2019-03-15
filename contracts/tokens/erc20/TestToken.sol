pragma solidity ^0.4.24;

import "./BurnableToken.sol";
import "../../math/SafeMath.sol";

// @title ERC20 token contract with burning capabilities
// @notice Standard ERC20 contract with a deflationary supply.
contract TestToken is BurnableToken{
  using SafeMath for uint256;

  uint public INITIAL_SUPPLY = 10**(68);

  constructor(string _name, string _symbol, uint8 _decimals) public {
      supply = INITIAL_SUPPLY;
      balances[msg.sender] = INITIAL_SUPPLY;
      name = _name;
      symbol = _symbol;
      decimals = _decimals;
  }
}
