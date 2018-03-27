pragma solidity ^0.4.18;

// ERC20 token implementation. Modified for MyBit transfer() function not returning bool.
contract Token {

  function totalSupply() constant returns (uint256 supply) {}

  function balanceOf(address _owner) constant returns (uint256 balance) {}

  function transfer(address _to, uint256 _value) {}

  function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {}

  function approve(address _spender, uint256 _value) returns (bool success) {}

  function allowance(address _owner, address _spender) constant returns (uint256 remaining) {}

  event Transfer(address indexed _from, address indexed _to, uint256 _value);
  event Approval(address indexed _owner, address indexed _spender, uint256 _value);

  uint public decimals;
  string public name;
}

// Can use this contract to give tokens away. 
// Note: This is not secure and has no limits placed. Use for test-net only.
contract TokenFaucet { 

  Token public token;
  uint public tokensInFaucet; 

  function TokenFaucet(address _tokenAddress)
  public  { 
    token = Token(_tokenAddress); 
  }

  function deposit(uint _amount)
  external { 
    require(token.transferFrom(msg.sender, this, _amount)); 
    tokensInFaucet += _amount;
    TokenDeposit(msg.sender, _amount, block.number); 
  }

  function withdraw(uint _amount)
  external { 
    require (tokensInFaucet >= _amount); 
    tokensInFaucet -= _amount;
    token.transfer(msg.sender, _amount);
    TokenWithdraw(msg.sender, _amount, block.number);
  }

  event TokenWithdraw(address _sender, uint _amount, uint _blockNumber); 
  event TokenDeposit(address _depositer, uint _amount, uint _blockNumber); 
}
