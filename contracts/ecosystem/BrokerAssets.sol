pragma solidity 0.4.24;

import "../interfaces/DivToken.sol";
import "../interfaces/ERC20.sol";
import "../interfaces/DBInterface.sol"; 
import "../math/SafeMath.sol"; 

contract BrokerAssets {
  using SafeMath for uint256; 
  DBInterface database;

  constructor(address _database){
    database = DBInterface(_database);
  }

  function addAsset(bytes32 _assetID){}

  // TODO: no mappings in memory ? 
  // // @notice Bulk withdraw from using list of assets this broker managages
  // function withdraw(bytes32[] _assetID)
  // external
  // returns (bool) {
  //   require(_assetID.length < 200);   // must be smaller than 2^8
  //   mapping(address => uint) tokensOwed;
  //   address[] memory tokenAddresses;
  //   uint weiOwed;
  //   for(uint8 i = 0; i < _assetID.length; i++){
  //     require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("broker", _assetID))) );
  //     address token = DivToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
  //     address erc20 = token.getERC20();
  //     uint amountOwed = token.getAmountOwed(address(this)); 
  //     if (amountOwed > 0) { 
  //       require(token.withdraw()); 
  //       if (erc20 == 0)  { 
  //         weiOwed = weiOwed.add(amountOwed); 
  //       }
  //       else { 
  //         if (tokensOwed[erc20] == 0) tokenAddresses.push(erc20);
  //         tokensOwed[erc20] = tokensOwed[erc20].add(amountOwed);
  //       }
  //     }
  //   }
  //   // Send all ERC20 balances to broker 
  //   for(i = 0; i < tokenAddresses.length; i++){
  //     ERC20(tokenAddresses[i]).transfer(msg.sender, tokensOwed[tokenAddresses[i]]);
  //   }
  //   // Send WEI to broker 
  //   msg.sender.transfer(weiOwed);
  //   return true;
  // }
  


  function changeBroker(bytes32 _assetID, address _newBrokerAddress)
  external
  investorsOnly(_assetID)
  returns (bool) {
    require(_newBrokerAddress != address(0));
    database.setAddress(keccak256(abi.encodePacked("broker", _assetID)), _newBrokerAddress);
    return true;
  }

  modifier investorsOnly(bytes32 assetID){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("tokenAddress", assetID))));
    _;
  }

}
