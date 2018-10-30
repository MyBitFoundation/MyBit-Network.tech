pragma solidity ^0.4.24;

// @notice allows contract to call a basic withdraw() function taking no parameters on another contract
interface SendPayment {

  function receiveEthPayment(bytes32 _id) 
  external  
  payable
  returns (bool);

  function receiveTokenPayment(bytes32 _id, uint _amount) 
  external  
  returns (bool);

}
