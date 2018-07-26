pragma solidity 0.4.24;

contract HashFunctions {

  function toBytes(uint x) 
  external
  pure
  returns (bytes b) {
    b = new bytes(32);
    assembly { mstore(add(b, 32), x) }
  }

  function getOrderID(bytes _assetID, address _user, uint _amount, uint _price, bool _buyOrder)
  external
  pure
  returns(bytes32) {
    return keccak256(abi.encodePacked(_assetID, _user, _amount, _price, _buyOrder));
  }

  function uintHash(uint _param)
  external
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_param));
  }

  function getStakingID(address _staker, uint256 _blockNumber, uint256 _amount)
  external
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_staker, _blockNumber, _amount));
  }

  function stringHash(string _name)
  external
  pure
  returns (bytes32){
    return keccak256(abi.encodePacked(_name));
  }

  function addressHash(address _param)
  external
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_param));
  }


  function contractHash(string _name)
  external
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked("contract", _name));
  }

  function stringAddress(string _param, address _paramTwo)
  external
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_param, _paramTwo));
  }

  function stringString(string _param, string _paramTwo)
  external
  pure
  returns (bytes32) {
    return (keccak256(abi.encodePacked(_param, _paramTwo)));
  }

  function stringBytes(string _param, bytes32 _paramTwo)
  external
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_param, _paramTwo));
  }

  function stringUint(string _param, uint _paramTwo)
  external
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_param, _paramTwo));
  }

  function stringBytesAddress(string _param, bytes32 _paramTwo, address _paramThree)
  external
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_param, _paramTwo, _paramThree));
  }

  function addressUintUint(address _param, uint _paramTwo, uint _paramThree)
  external
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_param, _paramTwo, _paramThree));
  }


  function getAuthorizeHash(address _contractAddress, address _owner, string _fnName, bytes32 _recipient)
  external
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_contractAddress, _owner, _fnName, _recipient));
  }

  function uintUint(uint _paramOne, uint _paramTwo)
  external
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_paramOne, _paramTwo));
  }


  function uintUintUint(uint _paramOne, uint _paramTwo, uint _paramThree)
  external
  pure
  returns (bytes32) {
    return keccak256(abi.encodePacked(_paramOne, _paramTwo, _paramThree)); 
  }

  function currentTime()
  external 
  view 
  returns (uint) { 
    return now;
  }

  function nullBytes()
  external
  pure
  returns (bytes32) {
    return bytes32(0);
  }

  function nullAddress()
  external
  pure
  returns (address) {
    return address(0);
  }

function ()
public {
  revert();
}





}
