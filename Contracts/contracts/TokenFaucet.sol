pragma solidity 0.4.24;

import './MyBitToken.sol';

// Can use this contract to give tokens away.
// Note: This is not secure and has no limits placed. Use for test-net only.
contract TokenFaucet {

  MyBitToken public token;
  uint public tokensInFaucet;
  bytes32 accessPass; 

  constructor(address _tokenAddress, bytes32 _accessPass)
  public  {
    token = MyBitToken(_tokenAddress);
    accessPass = _accessPass; 
  }

  // For owner to deposit tokens easier
  function receiveApproval(receiveApproval(address _from, uint _amount, address _token, bytes _data)
  external {
    require(_token == msg.sender && _token == address(myBitToken));
    require(token.transferFrom(msg.sender, this, _amount));
    tokensInFaucet += _amount;
    emit TokenDeposit(msg.sender, _amount, block.number);
  }

  function deposit(uint _amount)
  external {
    require(token.transferFrom(msg.sender, this, _amount));
    tokensInFaucet += _amount;
    emit TokenDeposit(msg.sender, _amount, block.number);
  }

  // Weak defense with password. Not Secure
  function withdraw(uint _amount, string _pass)
  external {
    require (tokensInFaucet >= _amount);
    require (keccak256(_pass) == accessPass); 
    tokensInFaucet -= _amount;
    token.transfer(msg.sender, _amount);
    emit TokenWithdraw(msg.sender, _amount, block.number);
  }

  event TokenWithdraw(address _sender, uint _amount, uint _blockNumber);
  event TokenDeposit(address _depositer, uint _amount, uint _blockNumber);
}
