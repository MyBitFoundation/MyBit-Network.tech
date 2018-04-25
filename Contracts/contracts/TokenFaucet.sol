pragma solidity 0.4.19;

// ERC20 token interface. Modified for MyBit transfer() function not returning bool.
interface Token {

  function totalSupply() public constant returns (uint256 supply);

  function balanceOf(address _owner) public constant returns (uint256 balance);

  function transfer(address _to, uint256 _value) public;

  function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);

  function approve(address _spender, uint256 _value) public returns (bool success);

  function allowance(address _owner, address _spender) public constant returns (uint256 remaining);

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
