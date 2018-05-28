pragma solidity 0.4.23;

import "./Database.sol";

// ------------------------------------------------------------------------------------------------
// This contract determines which contracts are allowed to make changes to the database contract. 
// ------------------------------------------------------------------------------------------------
contract ContractManager{
  Database public database;

  // Set the database contract
  constructor(address _database)
  public
  noEmptyAddress(_database) {
    database = Database(_database);
  }

  // ------------------------------------------------------------------------------------------------
  // Call this once finished deploying initial contracts. 
  // This initiates multi-sig requirement to add new contracts
  // ------------------------------------------------------------------------------------------------
  function setDeployFinished()
  external
  anyOwner {
    database.setBool(keccak256("deployFinished"), true);
  }

  // ------------------------------------------------------------------------------------------------  
  // This function adds new contracts to the platform. Giving them write access to Database.sol
  // @Param: The name of the contract 
  // @Param: The address of the new contract 
  // @Param: The owner who authorized this function to be called
  // ------------------------------------------------------------------------------------------------  
  function addContract(string _name, address _contractAddress, address _functionSigner)
  external
  noEmptyAddress(_contractAddress)
  noEmptyString(_name)
  anyOwner {
    require(msg.sender != _functionSigner);
    require(database.boolStorage(keccak256(this, _functionSigner, "addContract", keccak256(_contractAddress))) || database.boolStorage(keccak256("deployFinished")) == false);
    require(!contractExists(_contractAddress));
    require(database.addressStorage(keccak256("contract", _name)) == address(0));
    database.setBool(keccak256(this, _functionSigner, "addContract", keccak256(_contractAddress)), false);
    database.setAddress(keccak256("contract", _name), _contractAddress);
    database.setBool(keccak256("contract", _contractAddress), true);
    emit LogContractAdded(_contractAddress, _name, block.number);
  }

  // ------------------------------------------------------------------------------------------------  
  // Owner can remove an existing contract on the platform.
  // @Param: The name of the contract 
  // @Param: The owner who authorized this function to be called 
  // ------------------------------------------------------------------------------------------------  
  function removeContract(string _name, address _functionSigner)
  external
  noEmptyString(_name)
  multiSigRequired(_functionSigner, "removeContract", keccak256(_name))
  anyOwner {
    address contractToDelete = database.addressStorage(keccak256("contract", _name));
    require(contractExists(contractToDelete));
    database.deleteBool(keccak256("contract", contractToDelete));
    database.deleteAddress(keccak256("contract", _name));
    emit LogContractRemoved(contractToDelete, _name, block.number);
  }

  // ------------------------------------------------------------------------------------------------  
  // Owner can update an existing contract on the platform, giving it write access to Database
  // Invariants: New contract must not have null address. Function must be authorized by other owner. 
  // @Param: The name of the contract (First Letter Capitalized)
  // @Param: The address of the new contract
  // @Param: The address of the owner who authorized this function to be called
  // ------------------------------------------------------------------------------------------------  
  function updateContract(string _name, address _newContractAddress, address _functionSigner)
  external
  noEmptyAddress(_newContractAddress)
  multiSigRequired(_functionSigner, "updateContract", keccak256(_newContractAddress))
  anyOwner {
    address oldAddress = database.addressStorage(keccak256("contract", _name));
    require (contractExists(oldAddress));
    database.setAddress(keccak256("contract", _name), _newContractAddress);
    database.setBool(keccak256("contract", _newContractAddress), true);
    database.deleteBool(keccak256("contract", oldAddress));
    emit LogContractUpdated(oldAddress, _name, block.number);
    emit LogNewContractLocation(_newContractAddress, _name, block.number);
  }

  // ------------------------------------------------------------------------------------------------  
  // Checks if the contract is already registered in database
  // ------------------------------------------------------------------------------------------------  
  function contractExists(address _contract)
  public 
  view 
  returns (bool){ 
    return database.boolStorage(keccak256("contract", _contract));
  }

  // ------------------------------------------------------------------------------------------------  
  //                                                Modifiers 
  // ------------------------------------------------------------------------------------------------  


  // ------------------------------------------------------------------------------------------------  
  //  Verify that sender is an owner  
  // ------------------------------------------------------------------------------------------------ 
  modifier anyOwner {
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  // ------------------------------------------------------------------------------------------------  
  //  Verify address isn't null  
  // ------------------------------------------------------------------------------------------------ 
  modifier noEmptyAddress(address _contract) {
    require(_contract != address(0));
    _;
  }

  // ------------------------------------------------------------------------------------------------  
  //  Don't accept empty string input  
  // ------------------------------------------------------------------------------------------------ 
  modifier noEmptyString(string _name) {
    require(bytes(_name).length != 0);
    _;
  }

  // ------------------------------------------------------------------------------------------------  
  //  Verify that function has been approved by another owner 
  // ------------------------------------------------------------------------------------------------ 
  modifier multiSigRequired(address _signer, string _functionName, bytes32 _keyParam) { 
    require(msg.sender != _signer);
    require(database.boolStorage(keccak256(this, _signer, _functionName, _keyParam)));
    database.setBool(keccak256(this, _signer, _functionName, _keyParam), false);
    _;
  }


  // ------------------------------------------------------------------------------------------------  
  //                                    Events
  // ------------------------------------------------------------------------------------------------  
  event LogContractAdded(address _contractAddress, string _name, uint _blockNumber);
  event LogContractRemoved(address contractToDelete, string _name, uint _blockNumber);
  event LogContractUpdated(address oldAddress, string _name, uint _blockNumber);
  event LogNewContractLocation(address _contractAddress, string _name, uint _blockNumber);
}
