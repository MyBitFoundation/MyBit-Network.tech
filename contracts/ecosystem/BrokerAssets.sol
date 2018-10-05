pragma solidity ^0.4.24;

import "../interfaces/DivToken.sol";
import "../interfaces/ERC20.sol";

contract BrokerAssets {
  DBInterface database;

  constructor(address _database){
    database = DBInterface(_database);
  }

  function addAsset(bytes32 _assetID){}

  // @notice Bulk withdraw from using list of assets this broker managages
  function withdraw(bytes32[] _assetID)
  external
  returns (bool) {
    require(_assetID.length < 200);
    mapping(address => uint) amount;
    address[] list;
    for(uint i=0; i<_assetID.length; i++){
      require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("broker", _assetID))) );
      token = DivToken(database.addressStorage(keccak256(abi.encodePacked("tokenAddress", _assetID))));
      address erc20 = token.getERC20();
      thisAmount = token.withdraw();

      if(amount[erc20] == 0){
        list.push(erc20);
      }
      amount[erc20] += thisAmount;
    }

    for(uint i=0; i<list.length; i++){
      if(list[i] == address(0)){
        //Ethereum owed is tracked under address(0)
        msg.sender.tranfer(amount[address(0)]);
      } else {
        ERC20(list[i]).transfer(msg.sender, amount[list[i]]);
    }
    return true;
  }

  function changeBroker(bytes32 _assetID, address _newBrokerAddress)
  external
  investorsOnly(_assetID)
  returns (bool) {
    require(_newBrokerAddress != address(0));
    database.setAddress(keccak256(abi.encodePacked("broker", _assetID)), _newBrokerAddress);
    return true;
  }

  modifier investorsOnly(bytes32 assetID){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("tokenAddress", assetID))) );
    _;
  }

}
