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

  // Call this once finished deploying initial contracts.
  function setDeployFinished()
  external
  anyOwner {
    database.setBool(keccak256("deployFinished"), true);
  }

  function addContract(string _name, address _contractAddress, address _functionSigner)
  external
  noEmptyAddress(_contractAddress)
  noEmptyString(_name)
  anyOwner {
    require(database.boolStorage(keccak256(this, _functionSigner, "addContract", keccak256(_contractAddress))) || database.boolStorage(keccak256("deployFinished")) == false);
    require(!database.boolStorage(keccak256("contract", _contractAddress)));
    require(database.addressStorage(keccak256("contract", _name)) != _contractAddress);
    database.setBool(keccak256(this, _functionSigner, "addContract", keccak256(_contractAddress)), false);
    database.setAddress(keccak256("contract", _name), _contractAddress);
    database.setBool(keccak256("contract", _contractAddress), true);
    LogContractAdded(_contractAddress, _name, block.number);
  }

  function removeContract(string _name, address _functionSigner)
  external
  noEmptyString(_name)
  anyOwner {
    require(database.boolStorage(keccak256(this, _functionSigner, "removeContract", keccak256(_name))));
    address contractToDelete = database.addressStorage(keccak256(_name));
    database.setBool(keccak256(this, _functionSigner, "removeContract", keccak256(_name)), false);
    database.deleteBool(keccak256("contract", _name));
    database.deleteAddress(keccak256("contract", contractToDelete));
    LogContractRemoved(contractToDelete, _name, block.number);
  }

  function updateContract(string _name, address _contractAddress, address _functionSigner)
  external
  noEmptyAddress(_contractAddress)
  anyOwner {
    require(database.boolStorage(keccak256(this, _functionSigner, "updateContract", keccak256(_contractAddress))));
    address oldAddress = database.addressStorage(keccak256("contract", _name));
    require (oldAddress != 0);
    database.setBool(keccak256(this, _functionSigner, "updateContract", keccak256(_contractAddress)), false);
    database.deleteBool(keccak256("contract", oldAddress));
    database.setAddress(keccak256("contract", _name), _contractAddress);
    database.setBool(keccak256("contract", _contractAddress), true);
    LogContractUpdated(oldAddress, _name, block.number);
    LogNewContractLocation(_contractAddress, _name, block.number);
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

  event LogContractAdded(address _contractAddress, string _name, uint _blockNumber);
  event LogContractRemoved(address contractToDelete, string _name, uint _blockNumber);
  event LogContractUpdated(address oldAddress, string _name, uint _blockNumber);
  event LogNewContractLocation(address _contractAddress, string _name, uint _blockNumber);
}
