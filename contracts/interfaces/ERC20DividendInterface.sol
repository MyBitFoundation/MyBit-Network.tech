pragma solidity ^0.4.24;

interface ERC20DividendInterface{
  function issueDividends(uint _amount) external payable returns (bool);

  // @dev Total number of tokens in existence
  function totalSupply() external view returns (uint256);

  function getERC20() external view returns (address);
}
