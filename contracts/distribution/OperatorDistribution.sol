pragma solidity 0.4.24;

import '../database/Database.sol'; 

// @notice every operator on the plat
contract OperatorDistribution {

  Database public database; 
 

  constructor(address _database)
  public { 
    database = Database(_database);  
  }

  function receivePayment(bytes32 assetID)
  external { 
    // TODO: give 1% to platformOwners and 99% to operator
  }

  function withdraw()
  external {
  }


  // @notice Fallback function accepts ether
  function()
  public 
  payable {
    revert(); 
  }

}
