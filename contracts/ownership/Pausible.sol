pragma solidity ^0.4.24;


import '../database/Database.sol';
import '../database/Events.sol';

// @title A contract which allows for the freezing of functionality within the platform.
// @dev only valid with a single owned ownership model
// @author Kyle Dewhurst, MyBit Foundation
contract Pausible {

  Database public database;
  Events public events;

  // @notice constructor: initialize database instance
  constructor(address _database, address _events)
  public {
    database = Database(_database);
    events = Events(_events);
  }

  // @notice This will pause all critical activity for the supplied address
  // @param: The address of the contract which is to be paused\
  function pause(address _contract)
  onlyOwner
  public {
    database.setBool(keccak256(abi.encodePacked("paused", _contract)), true);
    events.transaction('Contract paused', msg.sender, address(this), 0, '');
    //emit LogPaused(_contract, msg.sender);
  }

  // @notice This will unpause all critical activity for the supplied address
  // @param: The address of the contract which is to be unpaused
  function unpause(address _contract)
  onlyOwner
  public {
    database.deleteBool(keccak256(abi.encodePacked("paused", _contract)));
    events.transaction('Contract unpaused', msg.sender, address(this), 0, '');
    //emit LogUnpaused(_contract, msg.sender);
  }

  // @notice reverts if caller is not the owner
  modifier onlyOwner() {
    require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
    _;
  }
  /*
  event LogPaused(address indexed _contract, address _owner);
  event LogUnpaused(address indexed _contract, address _owner);
  */
}
