pragma solidity 0.4.24;

import "../tokens/erc20/BurnableToken.sol";

contract BurnableTokenFixture is BurnableToken {
  // -----
  // State

  bool private failTransfer = false;            // Fail #transfer
  bool private failTransferFrom = false;        // Fail #transferFrom

  // -----------
  // Constructor

  /** Relay all arguments */
  constructor(string _tokenURI, uint _totalSupply)
  public
  BurnableToken(_tokenURI, _totalSupply) {}

  // ------
  // Writer

  /** Enable failure of next #transfer call */
  function _failNextTransfer()
  external {
    failTransfer = true;
  }

  /** Enable failure of next #transferFrom call */
  function _failNextTransferFrom()
  external {
    failTransferFrom = true;
  }

  // --------
  // Override

  /** Transfer own token */
  function transfer(address _to, uint256 _value)
  public
  returns (bool) {
    if (failTransfer) {
      failTransfer = false;
      return false;
    }
    return super.transfer(_to, _value);
  }

  /** Transfer approved token */
  function transferFrom(address _from, address _to, uint256 _value)
  public
  returns (bool) {
    if (failTransferFrom) {
      failTransferFrom = false;
      return false;
    }
    return super.transferFrom(_from, _to, _value);
  }
}
