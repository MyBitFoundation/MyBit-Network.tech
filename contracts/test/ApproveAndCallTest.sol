pragma solidity ^0.4.24;

contract ApproveAndCallTest{
  function receiveApproval(address from, uint tokens, address token, bytes data)
  public {
    emit LogApproval(from, tokens, token, data);
  }

  event LogApproval(address _from, uint _tokens, address _token, bytes _data);
}
