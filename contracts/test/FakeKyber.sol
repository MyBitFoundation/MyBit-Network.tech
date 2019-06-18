pragma solidity ^0.4.24;

contract FakeKyber {
  function getExpectedRate(address src, address dest, uint srcQty) external view returns (uint expectedRate, uint slippageRate){
    return (10**18, 10**18);
  }
  function trade(address src, uint srcAmount, address dest, address destAddress, uint maxDestAmount,uint minConversionRate, address walletId) external payable returns(uint){
    return srcAmount;
  }
}
