pragma solidity ^0.4.24;

import "../interfaces/CrowdsaleReserveInterface.sol";
import "../interfaces/ERC20.sol";
import "../interfaces/DividendInterface.sol";

interface Events {
  function transaction(string _message, address _from, address _to, uint _amount, address _token)  external;
}
interface DB {
  function addressStorage(bytes32 _key) external view returns (address);
  function uintStorage(bytes32 _key) external view returns (uint);
  function setUint(bytes32 _key, uint _value) external;
  function deleteUint(bytes32 _key) external;
  function setBool(bytes32 _key, bool _value) external;
  function boolStorage(bytes32 _key) external view returns (bool);
}

contract CrowdsaleReserve is CrowdsaleReserveInterface{
  DB private database;
  Events private events;

  constructor(address _database, address _events) public {
    database = DB(_database);
    events = Events(_events);
  }
  function issueETH(address _receiver, uint256 _amount) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleETH"))), 'Contract not authorized');
    require(address(this).balance >= _amount, 'Not enough funds');
    _receiver.transfer(_amount);
    events.transaction("Ether withdrawn from crowdsale reserve", address(this), _receiver, _amount, address(0));
    return true;
  }
  function receiveETH(address _payer) external payable returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleETH"))), 'Contract not authorized');
    events.transaction("Ether received by crowdsale reserve", address(this), _payer, msg.value, address(0));
    return true;
  }
  function refundETHAsset(address _asset, uint256 _amount) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleETH"))), 'Contract not authorized');
    require(DividendInterface(_asset).issueDividends.value(_amount)(_amount), 'Dividend issuance failed');
    events.transaction("Asset issued refund by crowdsale reserve", _asset, address(this), _amount, address(0));
    return true;
  }
  function issueERC20(address _receiver, uint256 _amount, address _tokenAddress) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleERC20"))), 'Contract not authorized');
    ERC20 erc20 = ERC20(_tokenAddress);
    require(erc20.balanceOf(this) >= _amount, 'Not enough funds');
    require(erc20.transfer(_receiver, _amount), 'Transfer failed');
    events.transaction("ERC20 withdrawn from crowdsale reserve", address(this), _receiver, _amount, _tokenAddress);
    return true;
  }
  function requestERC20(address _payer, uint256 _amount, address _tokenAddress) external returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleERC20"))), 'Contract not authorized');
    require(ERC20(_tokenAddress).transferFrom(_payer, address(this), _amount), 'Transfer failed');
    events.transaction("ERC20 received by crowdsale reserve", _payer, address(this), _amount, _tokenAddress);
  }
  function approveERC20(address _receiver, uint256 _amount, address _tokenAddress) public returns (bool){
    require(msg.sender == database.addressStorage(keccak256(abi.encodePacked("contract", "CrowdsaleERC20"))), 'Contract not authorized');
    require(ERC20(_tokenAddress).approve(_receiver, _amount), 'Approval failed');
    events.transaction("ERC20 approval given by crowdsale reserve", address(this), _receiver, _amount, _tokenAddress);
    return true;
  }
  function refundERC20Asset(address _asset, uint256 _amount, address _tokenAddress) external returns (bool){
    approveERC20(_asset, _amount, _tokenAddress);
    require(DividendInterface(_asset).issueDividends(_amount), 'Dividend issuance failed');
    events.transaction("Asset issued refund by crowdsale reserve", _asset, address(this), _amount, _tokenAddress);
    return true;
  }
}
