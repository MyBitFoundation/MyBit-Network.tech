pragma solidity 0.4.24;

import '../math/SafeMath.sol';
import '../../interfaces/ERC20.sol';


// @title Non-Transferable ERC20 token contract with shared revenue distribution functionality.
// @notice This token contract can receive payments in the fallback function and token owners can withdraw their share
// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657
// TODO: Suicide function
contract MintableDistribution is ERC20 {
  using SafeMath for uint;

  bool public mintingFinished = false;
  address public mint; 

  uint public totalSupply;
  mapping (address => uint) internal balanceOf;

  string public tokenURI;                 // A reference to a URI containing further token information


  // @notice Token Income Information
  uint constant scalingFactor = 1e32;
  uint public assetIncome;
  uint public valuePerToken;

  mapping (address => uint) public claimableIncome;
  mapping (address => uint) public previousValuePerToken;


  // @notice constructor: initialized
  constructor(string _tokenURI, address _mint)
  public {
      tokenURI = _tokenURI;                         // Set the id for reference
      mint = _mint; 
  }

  function issueDividends()
  payable
  requiresEther
  public {
      valuePerToken = valuePerToken.add(msg.value.mul(scalingFactor).div(supply));
      assetIncome = assetIncome.add(msg.value);
      emit LogIncomeReceived(msg.sender, msg.value);
  }

  // @notice Updates claimableIncome, sends all wei to the token holder
  function collectOwedDividends()
  public
  updateclaimableIncome(msg.sender)
  returns (uint _amount) {
      _amount = claimableIncome[msg.sender].div(scalingFactor);
      delete claimableIncome[msg.sender];
      msg.sender.transfer(_amount);
      emit LogIncomeCollected(now, msg.sender, _amount);
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
    emit Transfer(address(0), _to, _amount);
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

    // Fallback function: Accepts Ether and updates ledger
  function ()
    payable
    requiresEther
    public {
      valuePerToken = valuePerToken.add(msg.value.mul(scalingFactor).div(supply));
      assetIncome = assetIncome.add(msg.value);
      emit LogIncomeReceived(msg.sender, msg.value);
  }



  // ------------------------------------------------------------------------------------------------
  //                                   View Functions 
  // ------------------------------------------------------------------------------------------------

  // @notice Calculates how much value _user holds
  function getTokenValue(address _user)
  public
  view
  returns (uint) {
      uint valuePerTokenDifference = valuePerToken.sub(previousValuePerToken[_user]);
      return valuePerTokenDifference.mul(balances[_user]);
  }

  // @notice Calculates how much wei user is owed. (new income + claimableIncome) / 10**32
  function getUnclaimedAmount(address _user)
  public
  view
  returns (uint) {
      return (getTokenValue(_user).add(claimableIncome[_user]).div(scalingFactor));
  }

  // ------------------------------------------------------------------------------------------------
  //                                   Modifiers
  // ------------------------------------------------------------------------------------------------


  // @notice modifier: Requires that minting hasn't finished
  modifier canMint() {
    require(!mintingFinished && msg.sender == mint);
    _;
  }


  // Updates the amount owed to user while holding tokenSupply
  // @dev must be called before transfering tokens
  modifier updateclaimableIncome(address _user) {
      claimableIncome[_user] = claimableIncome[_user].add(getTokenValue(_user));
      previousValuePerToken[_user] = valuePerToken;
      _;
  }

  // ------------------------------------------------------------------------------------------------
  //                                     Events
  // ------------------------------------------------------------------------------------------------

  event Mint(address indexed to, uint256 amount);
  event MintFinished();

}
