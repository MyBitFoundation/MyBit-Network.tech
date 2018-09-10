pragma solidity 0.4.24;

import '../database/Database.sol'; 

// @notice every operator on the plat
contract CrowdfundingDistribution {

  Database public database; 
 

  constructor(address _database)
  public { 
    database = Database(_database);  
  }

  function receiveEthPayment(bytes32 _id)
  external
  payable 
  returns (bool) { 
    // TODO: give 1% to platformOwners and 99% to operator
    return true;
  }

  function receiveTokenPayment(bytes32 _id, uint _amount)
  external 
  returns (bool) { 
    // TODO: give 1% to platformOwners and 99% to operator
    return true;
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
