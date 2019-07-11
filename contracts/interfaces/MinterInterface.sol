pragma solidity ^0.4.24;

interface MinterInterface {
  function cloneToken(string _uri, address _erc20Address) external returns (address asset);

  function mintAssetTokens(address _assetAddress, address _receiver, uint256 _amount) external returns (bool);

  function changeTokenController(address _assetAddress, address _newController) external returns (bool);
}
