pragma solidity ^0.4.24;

// @title An interface to interact with Burnable ERC20 tokens 
interface BurnableERC20 { 

  function allowance(address tokenOwner, address spender) external view returns (uint remaining);
  
  function burnFrom(address _tokenHolder, uint _amount) external returns (bool success); 
  
  function totalSupply() external view returns (uint256);

  function balanceOf(address _who) external view returns (uint256);

  function transfer(address _to, uint256 _value) external returns (bool);

  function approve(address _spender, uint256 _value) external returns (bool);

  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);

  event Transfer(address indexed from, address indexed to, uint256 value);

  event Approval(address indexed owner, address indexed spender, uint256 value);

  event LogBurn(address indexed _spender, uint256 _value); 
}
