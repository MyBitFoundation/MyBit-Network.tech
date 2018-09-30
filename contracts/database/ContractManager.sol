pragma solidity 0.4.24;

import "../interfaces/DBInterface.sol";

// @title A contract manager that determines which contracts have write access to platform database
// @notice This contract determines which contracts are allowed to make changes to the database contract.
// @author Kyle Dewhurst, MyBit Foundation
contract ContractManager{
  DBInterface public database;

  // @notice constructor: initializes database
  // @param: the address for the database contract used by this platform
  constructor(address _database)
  public {
    database = DBInterface(_database);
  }

  // @notice This function adds new contracts to the platform. Giving them write access to Database.sol
  // @Param: The name of the contract
  // @Param: The address of the new contract
  function addContract(string _name, address _contractAddress)
  external
  isTrue(_contractAddress != address(0))
  isTrue(bytes(_name).length != uint(0))
  anyOwner {
    require(!database.boolStorage(keccak256(abi.encodePacked("contract", _contractAddress))));
    require(database.addressStorage(keccak256(abi.encodePacked("contract", _name))) == address(0));
    database.setAddress(keccak256(abi.encodePacked("contract", _name)), _contractAddress);
    database.setBool(keccak256(abi.encodePacked("contract", _contractAddress)), true);
    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));      //Update currentState
    bytes32 newState = keccak256(abi.encodePacked(currentState, _contractAddress));
    database.setBytes32(keccak256(abi.encodePacked("currentState")), newState);
    emit LogContractAdded(_contractAddress, _name, block.number);
  }

  // @notice Owner can remove an existing contract on the platform.
  // @Param: The name of the contract
  // @Param: The owner who authorized this function to be called
  function removeContract(string _name)
  external
  isTrue(bytes(_name).length != uint(0))
  contractExists(database.addressStorage(keccak256(abi.encodePacked("contract", _name))))
  anyOwner {
    address contractToDelete = database.addressStorage(keccak256(abi.encodePacked("contract", _name)));
    database.deleteBool(keccak256(abi.encodePacked("contract", contractToDelete)));
    database.deleteAddress(keccak256(abi.encodePacked("contract", _name)));
    emit LogContractRemoved(contractToDelete, _name, block.number);
  }

  // @notice Owner can update an existing contract on the platform, giving it write access to Database
  // @Param: The name of the contract (First Letter Capitalized)
  // @Param: The address of the new contract
  function updateContract(string _name, address _newContractAddress)
  external
  isTrue(_newContractAddress != 0)
  contractExists(database.addressStorage(keccak256(abi.encodePacked("contract", _name))))
  anyOwner {
    address oldAddress = database.addressStorage(keccak256(abi.encodePacked("contract", _name)));
    database.setAddress(keccak256(abi.encodePacked("contract", _name)), _newContractAddress);
    database.setBool(keccak256(abi.encodePacked("contract", _newContractAddress)), true);
    database.deleteBool(keccak256(abi.encodePacked("contract", oldAddress)));
    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));      //Update currentState
    bytes32 newState = keccak256(abi.encodePacked(currentState, _newContractAddress));
    database.setBytes32(keccak256(abi.encodePacked("currentState")), newState);
    emit LogContractUpdated(oldAddress, _name, block.number);
    emit LogNewContractLocation(_newContractAddress, _name, block.number);
  }

  // @notice user can decide to accept or deny the current and future state of the platform contracts
  // @notice if user accepts future upgrades they will automatically be able to interact with upgraded contracts
  // @param (bool) _acceptCurrentState: does the user agree to use the current contracts in the platform 
  // @param (bool) _ignoreStateChanges: does the user agree to use the platform despite contract changes
  function acceptContractState(bool _acceptCurrentState, bool _ignoreStateChanges)
  external
  returns (bool) {
    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked("currentState")));
    if (_acceptCurrentState) database.setBool(keccak256(abi.encodePacked(currentState, msg.sender)), true);
    if (_ignoreStateChanges)  database.setBool(keccak256(abi.encodePacked("ignoreStateChanges", msg.sender)), true); 
    emit LogContractStatePreferenceChanged(msg.sender, _acceptCurrentState, _ignoreStateChanges); 
    return true;
  }


  // ------------------------------------------------------------------------------------------------
  //                                                Modifiers
  // ------------------------------------------------------------------------------------------------

  // @notice Verify that sender is an owner
  modifier anyOwner {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }

  // @notice add this modifer to functions that you want multi-sig requirements for
  // @dev function can only be called after at least n >= quorumLevel owners have agreed to call it
  modifier isRestricted(bytes4 _methodID, bytes32 _parameterHash) {
      require(database.boolStorage(keccak256(abi.encodePacked(address(this), _methodID, _parameterHash))));  // owners must have agreed on function + parameters
    _;
      database.deleteBool(keccak256(abi.encodePacked(address(this), _methodID, _parameterHash)));
  }

  modifier contractExists(address _contract) { 
    database.boolStorage(keccak256(abi.encodePacked("contract", _contract)));
    _; 
  }

  modifier isTrue(bool _conditional) {
    require(_conditional); 
    _; 
  }



  // ------------------------------------------------------------------------------------------------
  //                                    Events
  // ------------------------------------------------------------------------------------------------
  event LogContractAdded(address _contractAddress, string _name, uint _blockNumber);
  event LogContractRemoved(address contractToDelete, string _name, uint _blockNumber);
  event LogContractUpdated(address oldAddress, string _name, uint _blockNumber);
  event LogNewContractLocation(address _contractAddress, string _name, uint _blockNumber);
  event LogContractStatePreferenceChanged(address indexed _user, bool _currentStateAcceptance, bool _ignoreStateChanges); 
}
