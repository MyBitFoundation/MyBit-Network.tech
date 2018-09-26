pragma solidity ^0.4.24;

interface TokenFactoryInterface{

  function createEtherDividend(string _tokenURI) external returns (address);

  function createERC20Dividend(string _tokenURI, address _erc20Address) external returns (address);

}
