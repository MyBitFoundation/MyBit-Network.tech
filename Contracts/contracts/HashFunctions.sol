
contract HashFunctions { 


  function HashFunctions()
  public
  {

  }

  function getOrderID(address _user, bytes _assetID)
  external
  view
  returns(bytes32) {
    return keccak256(_assetID, _user); 
  }
  

  function getStakingID(address _staker, uint256 _blockNumber, uint256 _amount)
  external
  view
  returns (bytes32) { 
    return keccak256(_staker, _blockNumber, _amount); 
  }

  function sha3(string _name) 
  external
  view 
  returns (bytes32){
    return keccak256(_name);
  }

  function addressHash(address _param)
  external
  view 
  returns (bytes32) { 
    return keccak256(_param);
  }
  

  function contractHash(string _name)
  external
  view
  returns (bytes32) { 
    return keccak256("contract", _name);
  }

  function stringAddress(string _param, address _paramTwo)
  external
  view
  returns (bytes32) { 
    return keccak256(_param, _paramTwo); 
  }

  function stringBytes(string _param, bytes32 _paramTwo)
  external
  view 
  returns (bytes32) { 
    return keccak256(_param, _paramTwo);
  }

  function stringUint(string _param, uint _paramTwo)
  external
  view 
  returns (bytes32) {
    return keccak256(_param, _paramTwo);
  }

  function stringBytesAddress(string _param, bytes32 _paramTwo, address _paramThree)
  external
  view 
  returns (bytes32) { 
    return keccak256(_param, _paramTwo, _paramThree);
  }

  function addressUintUint(address _param, uint _paramTwo, uint _paramThree)
  external
  view 
  returns (bytes32) { 
    return keccak256(_param, _paramTwo, _paramThree); 
  }
  

  function getAuthorizeHash(address _contractAddress, address _owner, string _fnName, bytes32 _recipient)
  external 
  view 
  returns (bytes32) { 
    return keccak256(_contractAddress, _owner, _fnName, _recipient); 
  }

  function nullBytes()
  external
  view
  returns (bytes32) { 
    return bytes32(0); 
  }

  function nullAddress()
  external
  view 
  returns (address) { 
    return address(0);
  }

function ()
public {
  revert();
}





}
