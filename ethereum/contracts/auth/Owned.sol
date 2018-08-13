pragma solidity 0.4.24;
import './Database.sol';

//------------------------------------------------------------------------------------------------------------------
// This contract handles owner authorization, freezing and access to critical functions
//------------------------------------------------------------------------------------------------------------------
contract Owned {

  Database public database;

  //------------------------------------------------------------------------------------------------------------------
  // Constructor: Initialize database
  //------------------------------------------------------------------------------------------------------------------
  constructor(address _database)
  noZeroAddress(_database)
  public {
    database = Database(_database);
  }

  //------------------------------------------------------------------------------------------------------------------
  // This function requires 2 of 3 owners to sign off on. Will replace one owner for another.
  // @Param: The address of the new owner address
  // @Param: The index of the new owner
  // @Param: The address of the first signer, who has approved the calling of this function
  //------------------------------------------------------------------------------------------------------------------
  function changeOwner(address _newOwner, address _oldOwner, address _functionSigner)
  anyOwner
  noZeroAddress(_newOwner)
  noZeroAddress(_functionSigner)
  external {
    require(msg.sender != _functionSigner);         // Check that this is different owner than the one who authorized
    bytes32 functionHash = keccak256(abi.encodePacked(address(this), _functionSigner, "changeOwner", keccak256(abi.encodePacked(_newOwner))));
    require(database.boolStorage(functionHash));   // Check that fuction has been authorized to be called with these parameters
    database.setBool(functionHash, false);         // Reset changeOwner() authorization
    database.deleteBool(keccak256(abi.encodePacked("owner", _oldOwner)));      // Remove old owners privileges
    database.setBool(keccak256(abi.encodePacked("owner", _newOwner)), true);
    emit LogOwnerChanged(_oldOwner, _newOwner);
  }

  //------------------------------------------------------------------------------------------------------------------
  // This function authorizes other owners to call critical functions such as selfdestruct or changeOwner() or add/remove contracts in ContractManager.
  // The critical functions often involve having a critical address change. If address is not critical any agreed address will work
  // Note: beneficiary is used in case an attacker gains control of one owner wallet, the other owner would need to also agree on the critical parameter which is in the format keccak256(criticalParameter)
  //------------------------------------------------------------------------------------------------------------------
  function setFunctionAuthorized(address _contractAddress, string _functionName, bytes32 _beneficiary)
  external
  anyOwner
  returns (bool) {
    require(bytes(_functionName).length != uint(0));
    bytes32 functionAuthHash = keccak256(abi.encodePacked(_contractAddress, msg.sender, _functionName, _beneficiary)); 
    database.setBool(functionAuthHash, true);    // Sign the function name + parameter
    emit LogFunctionAuthorized(msg.sender, _functionName, _beneficiary, functionAuthHash);
  }

  //------------------------------------------------------------------------------------------------------------------
  // This will pause all critical activity for the supplied address
  // @Param: The address of the contract which is to be paused\
  //------------------------------------------------------------------------------------------------------------------
  function pause(address _contract)
  anyOwner
  noZeroAddress(_contract)
  public {
    database.setBool(keccak256(abi.encodePacked("pause", _contract)), true);
    emit LogPaused(_contract);
  }

  //------------------------------------------------------------------------------------------------------------------
  // This will unpause all critical activity for the supplied address
  // @Param: The address of the contract which is to be unpaused
  //------------------------------------------------------------------------------------------------------------------
  function unpause(address _contract)
  anyOwner
  public {
    database.setBool(keccak256(abi.encodePacked("pause", _contract)), false);
    emit LogUnpaused(_contract);
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
  event LogPaused(address indexed _contract);
  event LogUnpaused(address indexed _contract);
  event LogOwnerChanged(address indexed _previousOwner, address indexed _newOwner);
  event LogFunctionAuthorized(address indexed _owner, string indexed _functionName, bytes32 indexed _beneficiary, bytes32 _authHash);
}
