pragma solidity ^0.4.24;

import "../tokens/ERC20/DividendToken.sol";
import "../tokens/ERC20/DividendTokenERC20.sol";

contract TokenFactory{
  mapping(address => bool) owners;

  constructor() public{
    owners[msg.sender] = true;
  }

  function createEtherDividend(string _tokenURI)
  onlyOwner
  external
  returns (address){
    DividendToken assetToken = new DividendToken(_tokenURI, msg.sender);
    return address(assetToken);
  }

  function createERC20Dividend(string _tokenURI, address _erc20Address)
  onlyOwner
  external
  returns (address){
    DividendTokenERC20 assetToken = new DividendTokenERC20(_tokenURI, msg.sender, _erc20Address);
    return address(assetToken);
  }

  function addOwner(address _newOwner)
  onlyOwner
  external{
    owners[_newOwner] = true;
  }

  function removeOwner(address _oldOwner)
  onlyOwner
  external{
    require(msg.sender != _oldOwner);
    owners[_oldOwner] = false;
  }

  // @notice Sender must be a registered owner
  modifier onlyOwner {
    require(owners[msg.sender]);
    _;
  }
}
