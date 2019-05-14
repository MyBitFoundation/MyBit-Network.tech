pragma solidity ^0.4.24;

interface CrowdsaleReserveInterface {
  function issueETH(address _receiver, uint256 _amount) external returns (bool);
  function receiveETH(address _payer) external payable returns (bool);
  function refundETHAsset(address _asset, uint256 _amount) external returns (bool);
  function issueERC20(address _receiver, uint256 _amount, address _tokenAddress) external returns (bool);
  function requestERC20(address _payer, uint256 _amount, address _tokenAddress) external returns (bool);
  function approveERC20(address _receiver, uint256 _amount, address _tokenAddress) external returns (bool);
  function refundERC20Asset(address _asset, uint256 _amount, address _tokenAddress) external returns (bool);
}
