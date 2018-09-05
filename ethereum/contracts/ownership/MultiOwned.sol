pragma solidity 0.4.24;

import '../database/Database.sol';
// @title A contract which allows for multi-sig ownership
// @notice Two owners are required to agree on a function to be called
// @author Kyle Dewhurst, MyBit Foundation
contract MultiOwned {
  Database public database;
  mapping (address => bool) public owner;
  mapping (bytes32 => bool) public functionAuthorized;

  // @notice Constructor: Makes msg.sender the owner
  constructor()
  public {
    owner[msg.sender] = true;
  }


  function addOwner()
  external
  anyOwner {

  }

  function removeOwner()
  external
  anyOwner {

  }

  // This function authorizes other owners to call critical functions such as selfdestruct or changeOwner() or add/remove contracts in ContractManager.
  // The critical functions often involve having a critical address change. If address is not critical any agreed address will work
  // Note: beneficiary is used in case an attacker gains control of one owner wallet, the other owner would need to also agree on the critical parameter which is in the format keccak256(criticalParameter)
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
  //                                                Modifiers
  //------------------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------------------
  // Verifies that sender is an owners
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
