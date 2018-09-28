pragma solidity 0.4.24;

import '../ecosystem/ERC20Burner.sol'; 


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
    require(burner.burn(msg.sender, _amount));
  }

  // Must set fee in ERC20Burner first
  function burnTokens()
  external { 
    bytes4 methodID = bytes4(keccak256(abi.encodePacked("burnTokens()")));
    uint amountToBurn = database.uintStorage(keccak256(abi.encodePacked(methodID, address(this)))); 
    require(burner.burn(msg.sender, amountToBurn));
    amountBurnt += amountToBurn; 
  }

  function getMethodID()
  external 
  view 
  returns (bytes4) { 
    return bytes4(keccak256(abi.encodePacked("burnTokens()")));
  }

}
