pragma solidity ^0.4.24;

interface MinterInterface {
  function mintAssetTokens(address _assetAddress, address _receiver, uint256 _amount) external returns (bool);
  function stopMint(address _assetAddress) external returns (bool);
}
