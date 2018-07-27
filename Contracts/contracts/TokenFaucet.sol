pragma solidity 0.4.24;

import './MyBitToken.sol';

// Can use this contract to give tokens away.
// Note: This is not secure and has no limits placed. Use for test-net only.
contract TokenFaucet {

  MyBitToken public token;
  uint public tokensInFaucet;

  constructor(address _tokenAddress)
  public  {
    token = MyBitToken(_tokenAddress);
  }

  function deposit(uint _amount)
  external {
    require(token.transferFrom(msg.sender, this, _amount));
    tokensInFaucet += _amount;
    emit TokenDeposit(msg.sender, _amount, block.number);
  }

  function withdraw(uint _amount)
  external {
    require (tokensInFaucet >= _amount);
    tokensInFaucet -= _amount;
    token.transfer(msg.sender, _amount);
    emit TokenWithdraw(msg.sender, _amount, block.number);
  }

  event TokenWithdraw(address _sender, uint _amount, uint _blockNumber);
  event TokenDeposit(address _depositer, uint _amount, uint _blockNumber);
}
