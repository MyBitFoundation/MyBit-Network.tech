pragma solidity ^0.4.24;

interface Crowdsale{

  function startFundingPeriod(string _assetURI, bytes32 _operatorID, uint _fundingLength, uint _amountToRaise) external;

  function buyAsset(bytes32 _assetID) external payable returns (bool);

  function refund(bytes32 _assetID) external returns (bool);

  function destroy() external;

}
