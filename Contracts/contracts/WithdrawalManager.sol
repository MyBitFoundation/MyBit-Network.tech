pragma solidity ^0.4.19;

import './SafeMath.sol';
import './Database.sol';


contract WithdrawalManager{

  Database public database;

  function WithdrawalManager(address _database)
  public  {
    database = Database(_database);
  }


  function addWithdrawalAddress(address _withdrawalAddress)
  noEmptyAddress(_withdrawalAddress)
  mustNotHaveAddressSet
  external
  returns (bool) {
    database.setAddress(keccak256("withdrawalAddress", msg.sender), _withdrawalAddress);
    database.setUint(keccak256("withdrawalAddress", _withdrawalAddress), 0);
    LogWithdrawalAddressSet(msg.sender, _withdrawalAddress, block.timestamp);
    return true;
  }

  function removeWithdrawalAddress()
  mustHaveAddressSet
  external
  returns (bool){
    address oldAddr = database.addressStorage(keccak256("withdrawalAddress", msg.sender));
    database.deleteAddress(keccak256("withdrawalAddress", msg.sender));
    //database.deleteUint(keccak256("withdrawalAddress", oldAddr)); /*Maybe delete? Not sure, should keep for tracking potentially */
    LogWithdrawalAddressRemoved(msg.sender, oldAddr, block.timestamp);
  }

  function updateWithdrawalAddress(address _withdrawalAddress)
  noEmptyAddress(_withdrawalAddress)
  mustHaveAddressSet
  external
  returns (bool){
    address oldAddr = database.addressStorage(keccak256("withdrawalAddress", msg.sender));
    database.setAddress(keccak256("withdrawalAddress", msg.sender), _withdrawalAddress);
    database.setUint(keccak256("withdrawalAddress", _withdrawalAddress), 0);
    LogWithdrawalAddressUpdated(msg.sender, oldAddr, _withdrawalAddress, block.timestamp);
  }

  // Deny empty address parameters
  modifier noEmptyAddress(address _param) {
    require(_param != address(0));
    _;
  }

  // User must have address
  modifier mustHaveAddressSet() {
    require(database.addressStorage(keccak256("withdrawalAddress", msg.sender)) != address(0));
    _;
  }

  modifier mustNotHaveAddressSet{
    require(database.addressStorage(keccak256("withdrawalAddress", msg.sender)) == address(0));
    _;
  }


  event LogWithdrawalAddressSet(address _user, address _newAddress, uint256 _timestamp);
  event LogWithdrawalAddressRemoved(address _user, address _removedAddress, uint256 _timestamp);
  event LogWithdrawalAddressUpdated(address _user, address _oldAddress, address _updatedAddress, uint256 _timestamp);

}
