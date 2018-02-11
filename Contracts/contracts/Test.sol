contract  Test { 


  function Test() 
  public { 

  }

  function getBalance()
  view 
  returns (uint) { 
    return this.balance; 
  }


  function()
  public
  payable { 
    logpayment(msg.sender, msg.value, block.timestamp); 
  }


  event logpayment(address _sender, uint _amount, uint _timestamp); 
}
