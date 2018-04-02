pragma solidity ^0.4.19;

import './Database.sol';

// This contract is involved in setting default variables. These will be set before the contracts are deployed, since contracts cannot write to database before the database approves their address
// tODO: add controls for these variables
contract InitialVariables { 

Database public database; 

function InitialVariables(address _database)
public { 
  database = Database(_database);
}

function startDapp()
external  {
  // --------------------Asset Creation Variables-----------------
  database.setUint(keccak256("myBitFoundationPercentage"), 1);
  database.setUint(keccak256("stakedTokenPercentage"), 2);
  database.setUint(keccak256("installerPercentage"), 97);

  // ---------------------Access Price in USD--------------------------
  database.setUint(keccak256("accessTokenFee", uint(2)), 25);
  database.setUint(keccak256("accessTokenFee", uint(3)), 75); 
  database.setUint(keccak256("accessTokenFee", uint(4)), 100); 


  // --------------------Operator Cost-----------------------
  database.setUint(keccak256("operatorEscrowPercentage"), 10); 

  // -------------Oracle Variables-------------------------
  database.setUint(keccak256("priceUpdateTimeline"), 1000);     // TODO: testing number. This is the length of time an Oracle price is valid for
  
  LogInitialized(msg.sender, address(database), block.number);
}

event LogInitialized(address _sender, address _database, uint _blockNumber); 

}
