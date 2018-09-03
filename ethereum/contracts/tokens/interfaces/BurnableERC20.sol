pragma solidity ^0.4.24;

// @title An interface to interact with Burnable ERC20 tokens 
interface BurnableERC20 { 

    function allowance(address tokenOwner, address spender) external view returns (uint remaining);
    function burnFrom(address _tokenHolder, uint _amount) external returns (bool success); 

}
