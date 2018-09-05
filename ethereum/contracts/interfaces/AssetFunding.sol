pragma solidity ^0.4.24;

interface AssetFunding{

  function startFundingPeriod(bytes32 _assetID, address _assetToken, address _creator, uint _amountToRaise) external returns (bool);

  function fund(bytes32 _assetID, uint _amount) external returns (bool);

  function payout(bytes32 _assetID) external returns (bool);

  function initiateRefund(bytes32 _assetID) external returns (bool);

  function refund(bytes32 _assetID) external returns (bool);

  function destroy(address _functionInitiator, address _holdingAddress) external;

}
