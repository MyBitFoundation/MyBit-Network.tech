pragma solidity ^0.4.24;

interface EscrowReserveInterface {
  function issueERC20(address _receiver, uint256 _amount, address _tokenAddress) external returns (bool);
  function requestERC20(address _payer, uint256 _amount, address _tokenAddress) external returns (bool);
  function approveERC20(address _receiver, uint256 _amount, address _tokenAddress) external returns (bool);
  function burnERC20(uint256 _amount, address _tokenAddress) external returns (bool);
}
