pragma solidity ^0.4.24;

import '../math/SafeMath.sol';
import '../interfaces/PullPayment.sol';

// @notice This contract allows someone to leave ETH for a beneficiary
// @notice assumes each beneficiary receives equal amount
// TODO: Test for rounding errors. 
// TODO: Test array vs mapping storage costs
contract EqualDistribution {
  using SafeMath for uint;


  address public operator;  
  address[] public beneficiaries;             // List of chosen beneficiaries


  uint public totalReleased;               // Total WEI so far released to beneficiaries

  mapping (address => uint) public amountRedeemed;    // Amount of WEI this address has already withdrawn from contract


  // @notice constructor. Sets the operator, beneficiaries and where the income to be distributed is coming from
  // @param (address) _beneficiary = The ETH address of who is to receive the income. Could be a distribution contract.
  // @param (address) _pullPayment =
  constructor(address[] _beneficiaries)
  public
  payable {
    operator = msg.sender;
    beneficiaries = _beneficiaries;
  }

  // @notice allows beneficiaries to withdraw from contracts at different locations to be re-distributed here
  function getFunds(address _contractAddress)
  external
  returns (bool) {
    require(PullPayment(_contractAddress).withdraw());   // TODO: Need to play with gas here
    return true;
  }

  // @notice beneficiaries can withdraw income here
  function withdraw()
  external 
  returns (bool) { 
    uint amount = ((address(this).balance.add(totalReleased)).div(beneficiaries.length)).sub(amountRedeemed[msg.sender]); 
    amountRedeemed[msg.sender] = amountRedeemed[msg.sender].add(amount); 
    totalReleased = totalReleased.add(amount); 
    msg.sender.transfer(amount); 
    return true; 
  }

  // @notice fallback function. Accepts Ether and updates income balance
  function () 
  payable { 
    emit LogPayment(msg.sender, msg.value);  
  }   


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Constants
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // @notice check if the address is one of the beneficiaries
  function isBeneficiary(address _user)
  public
  view
  returns (bool) {
    for (uint i = 0; i < beneficiaries.length; i++){
      if (beneficiaries[i] == _user) { return true; }
    }
    return false;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Events
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  event LogPayment(address _sender, uint _amount);

}
