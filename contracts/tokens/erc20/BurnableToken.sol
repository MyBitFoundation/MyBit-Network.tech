pragma solidity ^0.4.24;

import "./StandardToken.sol";
import "../../interfaces/BurnERC20.sol";
import "../../math/SafeMath.sol";

// @title ERC20 token contract with burning capabilities
// @notice Standard ERC20 contract with a deflationary supply.
contract BurnableToken is StandardToken, BurnERC20 {
  using SafeMath for uint256;

  // ------------------------------------------------------------------------
  // Removes senders tokens from supply.
  // Lowers investor balance and totalSupply by _amount
  // ------------------------------------------------------------------------
  function burn(uint _amount)
  public
  returns (bool success) {
    balances[msg.sender] = balances[msg.sender].sub(_amount);
    supply = supply.sub(_amount);
    emit LogBurn(msg.sender, _amount);
    emit Transfer(msg.sender, address(0), _amount);
    return true;
  }

  // ------------------------------------------------------------------------
  // An approved sender can burn _amount tokens of investor _from
  // Lowers investor balance and supply by _amount
  // ------------------------------------------------------------------------
  function burnFrom(address _from, uint _amount)
  public
  returns (bool success) {
    balances[_from] = balances[_from].sub(_amount);                         // Subtract from the targeted balance
    allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_amount);             // Subtract from the sender's allowance
    supply = supply.sub(_amount);                              // Update supply
    emit LogBurn(_from, _amount);
    emit Transfer(_from, address(0), _amount);
    return true;
  }
}
