pragma solidity ^0.4.24;
<<<<<<< HEAD


  interface BurnERC20 { 
=======
>>>>>>> cfca62c0ebbd634466419668061fdcb9510084e2

interface BurnERC20 {

    function burnFrom(address _tokenHolder, uint _amount) external returns (bool success);

    function burn(uint _amount) external returns (bool success);

    event LogBurn(address indexed _spender, uint256 _value);

}
