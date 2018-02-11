pragma solidity ^0.4.13;

import "./Database.sol";

// TODO: require multisig for all contract changes
contract ContractManager{
  Database public database; 

  function ContractManager(address _database)
  public 
  noEmptyAddress(_database) {
    database = Database(_database);
  }

  function addContract(string _name, address _contractAddress) 
  external 
  noEmptyAddress(_contractAddress)
  noEmptyString(_name)
  anyOwner {
    require(!database.boolStorage(keccak256("contract", _contractAddress)));
    require(database.addressStorage(keccak256("contract", _name)) != _contractAddress); 
    database.setAddress(keccak256("contract", _name), _contractAddress);
    database.setBool(keccak256("contract", _contractAddress), true);
  }

  function removeContract(string _name) 
  external
  noEmptyString(_name)
  anyOwner {
    address contractToDelete = database.addressStorage(keccak256(_name));
    database.deleteBool(keccak256("contract", _name));
    database.deleteAddress(keccak256("contract", contractToDelete)); 
  }

  function updateContract(string _name, address _contractAddress)
  external
  noEmptyAddress(_contractAddress)
  anyOwner {
    bytes32 contractKey = keccak256(_name); 
    address oldAddress = database.addressStorage(keccak256("contract", _name));
    require (oldAddress != 0);
    database.deleteBool(keccak256("contract", oldAddress));
    database.setAddress(keccak256("contract", _name), _contractAddress); 
    database.setBool(keccak256("contract", _contractAddress), true);
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

}
