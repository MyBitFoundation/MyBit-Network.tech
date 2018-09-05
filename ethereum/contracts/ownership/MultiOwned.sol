pragma solidity 0.4.24;

// @title A contract which allows for multi-sig ownership 
// @notice Two owners are required to agree on a function to be called 
// @author Kyle Dewhurst, MyBit Foundation 
contract MultiOwned {


  mapping (bytes32 => bool) public functionAuthorized; 
  mapping (bytes32 => uint8) public quorumNeeded; 

  uint public quorumLevel; 

  function addOwner(address _newOwner)
  external 
  anyOwner { 
    database.setBool(keccak256(abi.encodePacked("owner", _newOwner)), true); 
  }

  function removeOwner()
  external 
  anyOwner { 

  }

  function signForFunctionCall(bytes4 _methodID)
  external 
  anyOwner { 

  }

  function callAuthorizedFunction(bytes4 _methodID)
  external 
  anyOwner { 

  }

  //------------------------------------------------------------------------------------------------------------------
  //                                                Modifiers
  //------------------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------------------
  // Verifies sthat sender is an owners
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // Verifies no empty addresses are input
  //------------------------------------------------------------------------------------------------------------------
  modifier noZeroAddress(address _param) {
    require (_param != address(0));
    _;
  }


  //------------------------------------------------------------------------------------------------------------------
  //                                              Events
  //------------------------------------------------------------------------------------------------------------------
  event LogOwnerChanged(address indexed _previousOwner, address indexed _newOwner);
  event LogFunctionAuthorized(address indexed _owner, string indexed _functionName, bytes32 indexed _beneficiary, bytes32 _authHash);
}
