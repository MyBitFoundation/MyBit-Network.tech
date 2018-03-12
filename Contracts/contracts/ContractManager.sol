pragma solidity ^0.4.19;

import "./Database.sol";

// Contract Manager determines which contracts are allowed to make changes to the shares database contract. Changes in contracts require multi-sig from owners.
// TODO: Add event logs
contract ContractManager{
  Database public database;

  // Set the database contract
  function ContractManager(address _database)
  public
  noEmptyAddress(_database) {
    database = Database(_database);
  }

  // This function removes the ability for an owner to add a contract without another owner authorizing it. Call this once finished deploying initial contracts. 
  function setDeployFinished()
  external
  anyOwner {
    database.setBool(keccak256("deployFinished"), true);
  }

  // This function adds new contracts to the platform. Giving them write access to Database.sol
  // @Param: The name of the contract 
  // @Param: The address of the new contract 
  // @Param: The owner who authorized this function to be called
  // TODO: Remove deploy bypass signature?? 
  function addContract(string _name, address _contractAddress, address _functionSigner)
  external
  noEmptyAddress(_contractAddress)
  noEmptyString(_name)
  anyOwner {
    require(msg.sender != _functionSigner);
    require(database.boolStorage(keccak256(this, _functionSigner, "addContract", keccak256(_contractAddress))) || database.boolStorage(keccak256("deployFinished")) == false);
    require(!database.boolStorage(keccak256("contract", _contractAddress)));
    require(database.addressStorage(keccak256("contract", _name)) == address(0));
    database.setBool(keccak256(this, _functionSigner, "addContract", keccak256(_contractAddress)), false);
    database.setAddress(keccak256("contract", _name), _contractAddress);
    database.setBool(keccak256("contract", _contractAddress), true);
    LogContractAdded(_contractAddress, _name, block.number);
  }

  // Owner can remove an existing contract on the platform.
  // @Param: The name of the contract 
  // @Param: The owner who authorized this function to be called 
  function removeContract(string _name, address _functionSigner)
  external
  noEmptyString(_name)
  multiSigRequired(_functionSigner, "removeContract", keccak256(_name))
  anyOwner {
    address contractToDelete = database.addressStorage(keccak256(_name));
    database.setBool(keccak256(this, _functionSigner, "removeContract", keccak256(_name)), false);
    database.deleteBool(keccak256("contract", _name));
    database.deleteAddress(keccak256("contract", contractToDelete));
    LogContractRemoved(contractToDelete, _name, block.number);
  }

  // Owner can update an existing contract on the platform, giving it write access to Database
  // Invariants: New contract must not have null address. Function must be authorized by other owner. 
  // @Param: The name of the contract (First Letter Capitalized)
  // @Param: The address of the new contract
  // @Param: The address of the owner who authorized this function to be called
  function updateContract(string _name, address _newContractAddress, address _functionSigner)
  external
  noEmptyAddress(_newContractAddress)
  multiSigRequired(_functionSigner, "updateContract", keccak256(_newContractAddress))
  anyOwner {
    address oldAddress = database.addressStorage(keccak256("contract", _name));
    require (database.boolStorage(keccak256("contract", _name)));
    database.setBool(keccak256(this, _functionSigner, "updateContract", keccak256(_newContractAddress)), false);
    database.deleteBool(keccak256("contract", oldAddress));
    database.setAddress(keccak256("contract", _name), _newContractAddress);
    database.setBool(keccak256("contract", _newContractAddress), true);
    LogContractUpdated(oldAddress, _name, block.number);
    LogNewContractLocation(_newContractAddress, _name, block.number);
  }

  modifier anyOwner {
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  modifier noEmptyAddress(address _contract) {
    require(_contract != address(0));
    _;
  }

  modifier noEmptyString(string _name) {
    require(bytes(_name).length != 0);
    _;
  }

  modifier multiSigRequired(address _signer, string _functionName, bytes32 _keyParam) { 
    require(msg.sender != _signer);
    require(database.boolStorage(keccak256(this, _signer, _functionName, _keyParam)));
    _;
  }

  event LogContractAdded(address _contractAddress, string _name, uint _blockNumber);
  event LogContractRemoved(address contractToDelete, string _name, uint _blockNumber);
  event LogContractUpdated(address oldAddress, string _name, uint _blockNumber);
  event LogNewContractLocation(address _contractAddress, string _name, uint _blockNumber);
}
