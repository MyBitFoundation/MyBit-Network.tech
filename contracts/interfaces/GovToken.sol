pragma solidity 0.4.24;


interface GovToken {

  function totalSupply() external returns (uint); 

  function balanceOf(address _user) external returns (uint); 

  function unlockTokens() external returns (bool);

  function lockTokens() external returns (bool); 

  function blockAtLock(address _user) external returns (uint); 

  function transfer(address _to, uint _amount) external returns (bool);

  function transferFrom(address _from, address _to, uint _amount) external returns (bool); 

}
