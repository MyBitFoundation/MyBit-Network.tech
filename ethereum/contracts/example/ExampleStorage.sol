pragma solidity ^0.4.24;
import './Database.sol';
import './Events.sol'; 

// @title An example of how the database contract and event contract can be used to 
contract ExampleStorage {

    Database public database;

    constructor(address _database)
    public {
      database = Database(_database);
    }

    function storeFavoriteNumber(uint256 _number)
    public
    returns (bool){
        database.setUint(keccak256(abi.encodePacked("favoriteNumber", msg.sender)), _number);
        return true;
    }



    function favoriteNumber(address _user)
    public
    view
    returns (uint) {
      return database.uintStorage(keccak256(abi.encodePacked("favoriteNumber", _user)));
    }


    // @notice can store events in an external events contract, to avoid losing event log data
    // @dev This will emit the event from the Event contract in case this contract is upgraded
    function numberStored(address _sender, uint _number)
    internal { 
        Events(database.addressStorage("contract", "Events")).numberStored(msg.sender);
    }
}
