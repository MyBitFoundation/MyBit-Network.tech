pragma solidity 0.4.24;

import "../interfaces/DivToken.sol";
import "../interfaces/ERC20.sol";
import "../interfaces/DBInterface.sol";
import "../math/SafeMath.sol";

interface DToken {
  function withdraw() external returns (bool);
  function getOwedDividends(address _user) external view returns (uint);
  function transfer(address _to, uint _amount) external returns (bool success);
  function getERC20() external  view returns (address);
}

contract BrokerAssets {
  using SafeMath for uint256;

  DBInterface public database;

  constructor(address _database)
  public {
    database = DBInterface(_database);
  }

  // @notice Bulk withdraw from using list of assets this broker managages
  function withdraw(bytes32[] _assetID)
  external
  returns (bool) {
    require(_assetID.length < 50);   // must be small
    uint[] memory payoutAmounts = new uint[](_assetID.length);
    address[] memory tokenAddresses = new address[](_assetID.length);
    uint numEntries;
    uint weiOwed;
    for(uint8 i = 0; i < _assetID.length; i++){
      require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("broker", _assetID[i]))) );
      DToken token = DToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID[i]))));
      //uint balanceBefore = address(this).balance;
      uint amountOwed = token.getOwedDividends(address(this));
      require(amountOwed > 0);
      require(token.withdraw());
      address erc20 = token.getERC20();
      if (erc20 != address(0)){
        uint8 tokenIndex = containsAddress(tokenAddresses, erc20);
        if (tokenIndex <= tokenAddresses.length) {  payoutAmounts[tokenIndex] += amountOwed; }
        else {
          numEntries++;
          tokenAddresses[numEntries] = erc20;
          payoutAmounts[numEntries] = amountOwed;
        }
      }
      else {
         //require(address(this).balance.sub(balanceBefore) != 0);
         //weiOwed += address(this).balance.sub(balanceBefore);
         weiOwed += amountOwed;
      }
    }
    // Send all ERC20 balances to broker
    for(i = 0; i < numEntries; i++){
      // require(DToken(tokenAddresses[i]).transfer(msg.sender, payoutAmounts[i]));
    }
    // Send WEI to broker
    msg.sender.transfer(weiOwed);
    return true;
  }

  function containsAddress(address[] _addressList, address _addr)
  internal
  pure
  returns (uint8) {
    for (uint8 i = 0; i < _addressList.length; i++){
      if (_addressList[i] == _addr) return i;
    }
    return uint8(_addressList.length + 1);
  }

  function ()
  payable
  public {}

}
