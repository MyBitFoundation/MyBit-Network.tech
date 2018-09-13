  interface BurnERC20 { 

    function burnFrom(address _tokenHolder, uint _amount) external returns (bool success); 

    function burn(uint _amount) external returns (bool success); 

    event LogBurn(address indexed _spender, uint256 _value); 

}
