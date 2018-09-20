pragma solidity ^0.4.24;

import '../../math/SafeMath.sol';
import '../../interfaces/PullPayment.sol';


// @title Non-Transferable ERC20 token contract with shared revenue distribution functionality.
// @notice This token contract can receive payments in the fallback function and token owners can withdraw their share
// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657
// TODO: Suicide function

contract StandardDistribution{
  using SafeMath for uint;


  uint public supply;
  mapping (address => uint) internal balances;

  string public tokenURI;                 // A reference to a URI containing further token information


  // @notice Token Income Information
  uint constant scalingFactor = 1e32;
  uint public assetIncome;
  uint public valuePerToken;

  mapping (address => uint) public claimableIncome;
  mapping (address => uint) public previousValuePerToken;


  // @notice Updates claimableIncome, sends all wei to the token holder
  function withdraw()
  public
  updateclaimableIncome(msg.sender)
  returns (uint _amount) {
      _amount = claimableIncome[msg.sender].div(scalingFactor);
      delete claimableIncome[msg.sender];
      msg.sender.transfer(_amount);
      emit LogIncomeCollected(now, msg.sender, _amount);
  }

  // @notice allows beneficiaries to withdraw from contracts at different locations to be re-distributed here
  // @dev can call withdraw() on any address if there are no parameters required. Fallback function will be triggered
  // @param (address) _contractAddress = The address to call withdraw() on.
  function getFunds(address _contractAddress)
  external
  returns (bool) {
    PullPayment(_contractAddress).withdraw();
    return true;
  }
  

  function issueDividends()
  payable
  public {
      valuePerToken = valuePerToken.add(msg.value.mul(scalingFactor).div(supply));
      assetIncome = assetIncome.add(msg.value);
      emit LogIncomeReceived(msg.sender, msg.value);
  }

    // Fallback function: Accepts Ether and updates ledger (issues dividends)
  function ()
    payable
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

  function totalSupply() public view returns (uint256) {
    return supply;
  }

  function balanceOf(address _owner) public view returns (uint256) {
    return balances[_owner];
  }

  // ------------------------------------------------------------------------------------------------
  //                                   Modifiers
  // ------------------------------------------------------------------------------------------------

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

  event LogIncomeReceived(address indexed _sender, uint _paymentAmount);
  event LogIncomeCollected(uint _block, address _address, uint _amount);

}
