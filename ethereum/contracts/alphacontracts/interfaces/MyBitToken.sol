pragma solidity ^0.4.24;

interface MyBitToken {

  function totalSupply() external returns (uint);

  function balanceOf(address _owner) external returns (uint);

  function transfer(address _to, uint _value) external returns (bool);

  function transferFrom(address _from, address _to, uint _value) external returns (bool);

  function burn(uint _amount) external returns (bool);

  function burnFrom(address _from, uint _amount) external returns (bool);

  function approve(address _spender, uint _value) external returns (bool);

  function allowance(address _owner, address _spender) external returns (uint);
}
