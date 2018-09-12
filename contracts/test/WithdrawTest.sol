pragma solidity ^0.4.24;

contract WithdrawTest{

  mapping(address => uint) public balances;

  function withdraw() 
  external 
  returns (bool) {
    emit LogWithdraw(msg.sender, balances[msg.sender]);
    uint amount = balances[msg.sender];
    balances[msg.sender] = 0;
    msg.sender.transfer(amount);
    return true;
  }

  function deposit(address _receiver) 
  payable 
  external{
    emit LogDeposit(_receiver, msg.value);
    balances[_receiver] += msg.value;
  }

  event LogDeposit(address _receiver, uint _amount);
  event LogWithdraw(address _receiver, uint _amount);
}
