pragma solidity ^0.4.24;

interface EtherDividendInterface{
  function issueDividends(uint256 _amount) external payable returns (bool);

  // @dev Total number of tokens in existence
  function totalSupply() external view returns (uint256);
}
