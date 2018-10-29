pragma solidity ^0.4.24;

import '../../math/SafeMath.sol';
import './StandardDistribution.sol';



// @title Non-Transferable ERC20 token contract with shared revenue distribution functionality.
// @notice This token contract can receive payments in the fallback function and token owners can withdraw their share
// @author Kyle Dewhurst, MyBitFoundation
// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657
contract MintableDistribution is StandardDistribution{
  using SafeMath for uint;

  bool public mintingFinished = false;
  address public minter;

  // @notice constructor: initialized
  constructor(string _tokenURI, address _minter)
  public {
      tokenURI = _tokenURI;                         // Set the id for reference
      minter = _minter;
  }

  // @dev Function to mint tokens
  // @param _to The address that will receive the minted tokens.
  // @param _amount The amount of tokens to mint.
  function mint(address _to, uint256 _amount)
  public
  canMint
  returns (bool) {
    supply = supply.add(_amount);
    balances[_to] = balances[_to].add(_amount);
    emit Mint(_to, _amount);
    return true;
  }


  // @dev Function to stop minting new tokens.
  function finishMinting()
  public
  canMint
  returns (bool) {
    mintingFinished = true;
    emit MintFinished();
    return true;
  }

  // ------------------------------------------------------------------------------------------------
  //                                   Modifiers
  // ------------------------------------------------------------------------------------------------


  // @notice modifier: Requires that minting hasn't finished
  modifier canMint() {
    require(!mintingFinished && msg.sender == minter);
    _;
  }


  // ------------------------------------------------------------------------------------------------
  //                                     Events
  // ------------------------------------------------------------------------------------------------

  event Mint(address indexed to, uint256 amount);
  event MintFinished();

}
