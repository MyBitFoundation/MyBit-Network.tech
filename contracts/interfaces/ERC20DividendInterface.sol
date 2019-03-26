pragma solidity ^0.4.24;

interface ERC20DividendInterface{
  // @dev Function to mint tokens
  // @param _to The address that will receive the minted tokens.
  // @param _amount The amount of tokens to mint.
  function mint(address _to, uint256 _amount) external returns (bool);

  // @dev Function to stop minting new tokens.
  function finishMinting() external returns (bool);

  function issueDividends(uint _amount) external;

  // @dev Total number of tokens in existence
  function totalSupply() external view returns (uint256);

  function getERC20() external view returns (address);
}
