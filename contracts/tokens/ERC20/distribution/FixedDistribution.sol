pragma solidity 0.4.24;

import '../../../math/SafeMath.sol';
import './StandardDistribution.sol';


// @title Non-Transferable ERC20 token contract with shared revenue distribution functionality.
// @notice This token contract can receive payments in the fallback function and token owners can withdraw their share
// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657
// TODO: Suicide function

contract FixedDistribution is StandardDistribution {
  using SafeMath for uint;

  // @notice constructor: initialized
  constructor(string _tokenURI, address[] _tokenHolders, uint[] _amount)
  public {
    uint _totalSupply;
    tokenURI = _tokenURI;
    for (uint8 i = 0; i < _tokenHolders.length; i++) {
      _totalSupply = _totalSupply.add(_amount[i]);
      balances[_tokenHolders[i]] = balances[_tokenHolders[i]].add(_amount[i]);
    }
    supply = _totalSupply;
  }
}
