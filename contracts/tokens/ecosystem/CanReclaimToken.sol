pragma solidity ^0.4.24;

import "../../ownership/SingleOwned.sol";
import "../ERC20/StandardToken.sol";
import "../ERC20/SafeERC20.sol";


/**
 * @title Contracts that should be able to recover tokens
 * @author SylTi
 * @dev This allow a contract to recover any ERC20 token received in a contract by transferring the balance to the contract owner.
 * This will prevent any accidental loss of tokens.
 */
contract CanReclaimToken is SingleOwned {
  using SafeERC20 for StandardToken;

  /**
   * @dev Reclaim all ERC20Basic compatible tokens
   * @param _token ERC20Basic The address of the token contract
   */
  function reclaimToken(StandardToken _token) external onlyOwner {
    uint256 balance = _token.balanceOf(this);
    _token.safeTransfer(address(this), balance);
  }

}
