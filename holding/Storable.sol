pragma solidity ^0.4.24;

library Storable{
  //Overloaded functions
  function encode(string _label, bytes32 _arg1) pure public returns(bytes32){
    return keccak256(abi.encodePacked(_label, _arg1));
  }

  function encode(string _label, bytes32 _arg1, bytes32 _arg2) pure public returns(bytes32){
    return keccak256(abi.encodePacked(_label, _arg1, _arg2));
  }

  function encode(string _label, bytes32 _arg1, uint _arg2) pure public returns(bytes32){
    return keccak256(abi.encodePacked(_label, _arg1, _arg2));
  }

  function encode(string _label, address _arg1) pure public returns(bytes32){
    return keccak256(abi.encodePacked(_label, _arg1));
  }

  function encode(string _label, uint _arg1) pure public returns(bytes32){
    return keccak256(abi.encodePacked(_label, _arg1));
  }

  function encode(string _label, bool _arg1) pure public returns(bytes32){
    return keccak256(abi.encodePacked(_label, _arg1));
  }

  function encode(string _label, address _arg1) pure public returns(bytes32){
    return keccak256(abi.encodePacked(_label, _arg1));
  }

}
