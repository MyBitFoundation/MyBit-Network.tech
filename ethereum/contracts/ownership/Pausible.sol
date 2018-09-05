pragma solidity 0.4.24;

import './MultiOwned.sol';
import '../database/Database.sol';

contract Pausible is MultiOwned{

  Database public database;

  constructor(address _database)
  public {
    database = Database(_database);
  }

  //------------------------------------------------------------------------------------------------------------------
  // This will pause all critical activity for the supplied address
  // @Param: The address of the contract which is to be paused\
  //------------------------------------------------------------------------------------------------------------------
  function pause(address _contract)
  anyOwner
  public {
    database.setBool(keccak256(abi.encodePacked("paused", _contract)), true);
    emit LogPaused(_contract, msg.sender);
  }

  //------------------------------------------------------------------------------------------------------------------
  // This will unpause all critical activity for the supplied address
  // @Param: The address of the contract which is to be unpaused
  //------------------------------------------------------------------------------------------------------------------
  function unpause(address _contract)
  anyOwner
  public {
    database.deleteBool(keccak256(abi.encodePacked("paused", _contract)));
    emit LogUnpaused(_contract, msg.sender);
  }

  //------------------------------------------------------------------------------------------------------------------
  // Requires that contract has not been paused
  //------------------------------------------------------------------------------------------------------------------
  modifier whenNotPaused(address _contract) {
    require(!database.boolStorage(keccak256(abi.encodePacked("paused", _contract))));
    _;
  }

  modifier noZeroAddress(address _address){
    require(_address != address(0));
    _;
  }



  event LogPaused(address indexed _contract, address _owner);
  event LogUnpaused(address indexed _contract, address _owner);

}
