interface MyBitToken {

  function totalSupply() constant returns (uint256);

  function balanceOf(address _owner) constant returns (uint256);

  function transfer(address _to, uint256 _value);

  function transferFrom(address _from, address _to, uint256 _value) returns (bool);

  function approve(address _spender, uint256 _value) returns (bool);

  function allowance(address _owner, address _spender) constant returns (uint256);
}
