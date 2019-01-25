pragma solidity ^0.4.24;

import '../access/ERC20Burner.sol';
import '../database/Database.sol';

contract TestBurner {

  ERC20Burner public burner;
  Database public database;

  uint public amountBurnt;

  constructor(address _database, address _burner)
  public {
    burner = ERC20Burner(_burner);
    database = Database(_database);
  }

  function burnTokensManualFee(uint _amount)
  external {
    require(burner.burn(msg.sender, _amount, database.addressStorage(keccak256(abi.encodePacked("platform.token")))));
  }

  // Must set fee in ERC20Burner first
  function burnTokens()
  external {
    bytes4 methodID = bytes4(keccak256(abi.encodePacked("burnTokens()")));
    uint amountToBurn = database.uintStorage(keccak256(abi.encodePacked(methodID, address(this))));
    require(burner.burn(msg.sender, amountToBurn, database.addressStorage(keccak256(abi.encodePacked("platform.token")))));
    amountBurnt += amountToBurn;
  }

  function getMethodID()
  external
  pure
  returns (bytes4) {
    return bytes4(keccak256(abi.encodePacked("burnTokens()")));
  }

}
