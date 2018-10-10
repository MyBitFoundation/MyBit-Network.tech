pragma solidity 0.4.24;

import "../interfaces/DBInterface.sol"; 
import "../math/SafeMath.sol"; 

interface DToken { 
  function withdraw() external returns (bool);
  function getAmountOwed(address _user) external view returns (uint);
  function transfer(address _to, uint _amount) external returns (bool success);
  function getERC20() external  view returns (address);
}

contract BrokerAssets {
  using SafeMath for uint256;

  DBInterface public database;

  constructor(address _database){
    database = DBInterface(_database);
  }

  // function addAsset(bytes32 _assetID){}

  // @notice Bulk withdraw from using list of assets this broker managages
  // TODO: must have fixed sized arrays in memory? 
  function withdraw(bytes32[] _assetID)
  external
  returns (bool) {
    require(_assetID.length < 50);   // must be small
    uint[] memory payoutAmounts = new uint[](_assetID.length);
    address[] memory tokenAddresses = new address[](_assetID.length);
    uint numEntries;
    uint weiOwed;
    for(uint8 i = 0; i < _assetID.length; i++){
      require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("broker", _assetID))) );
      DToken token = DToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      address erc20 = token.getERC20();
      uint amountOwed = token.getAmountOwed(address(this)); 
      if (erc20 != address(0)){ 
        require(amountOwed > 0); 
        require(token.withdraw()); 
        uint8 tokenIndex = containsAddress(tokenAddresses, erc20);
        if (tokenIndex <= tokenAddresses.length) {  payoutAmounts[tokenIndex] += amountOwed; }
        else { 
          numEntries++;
          tokenAddresses[numEntries] = erc20; 
          payoutAmounts[numEntries] = amountOwed;  
        }
      }
      else { weiOwed += amountOwed; }
    }
    // Send all ERC20 balances to broker 
    for(i = 0; i < numEntries; i++){
      require(DToken(tokenAddresses[i]).transfer(msg.sender, payoutAmounts[i]));
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
  

}
