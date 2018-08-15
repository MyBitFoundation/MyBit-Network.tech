pragma solidity 0.4.24;

// TODO: Dynamic calls straight to the contracts or designate a wallet to make calls? 
contract MultiOwned { 

  address[] public owners;

  //------------------------------------------------------------------------------------------------------------------
  // @notice Constructor: Makes msg.sender the owner 
  //------------------------------------------------------------------------------------------------------------------
  constructor(address[] _owners)
  public {
    require(_owners.length < 10); 
    
  }

  //------------------------------------------------------------------------------------------------------------------
  // @notice Changes an owner 
  //------------------------------------------------------------------------------------------------------------------
  function changeOwner(address _newOwner, address _ownerToBeReplaced, address _functionSigner)
  anyOwner
  noZeroAddress(_newOwner)
  external {  }

  //------------------------------------------------------------------------------------------------------------------
  // @notice Authorized other owners to agree on calling a function with a particular parameter
  //------------------------------------------------------------------------------------------------------------------
  function setFunctionAuthorized(address _contractAddress, string _functionName, bytes32 _criticalParameter)
  external
  anyOwner
  returns (bool) {  }




  //------------------------------------------------------------------------------------------------------------------
  //                                                Modifiers
  //------------------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------------------
  // @notice Verifies that sender is an owners
  //------------------------------------------------------------------------------------------------------------------
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  //------------------------------------------------------------------------------------------------------------------
  // @notice Verifies no empty addresses are used as parameter
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
