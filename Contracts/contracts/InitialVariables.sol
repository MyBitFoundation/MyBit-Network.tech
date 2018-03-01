pragma solidity ^0.4.18;

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

// ---------------------Staking Variables--------------------------
  database.setUint(keccak256("minimumStakeAmount"), 1000); 
  database.setUint(keccak256("minimumStakeTime"), 50);    // TODO: testing number Minimum number of blocks to wait until withdraw can be requested
  database.setUint(keccak256("minimumWithdrawlTime"), 50);     // TODO: testing number. Minimum number of blocks need to wait after withdraw is requested.


  // -----------Bug Bounty Variables--------------------
  database.setUint(keccak256("blocksForBugReview"), 25);      // TODO: testing number 
  database.setUint(keccak256("blocksForExpertReview"), 25);      // TODO: testing number 
  database.setUint(keccak256("bugSubmissionCost"), 1000000000000000000); 
  database.setUint(keccak256("bugSeverityCost", 1), 100); 
  database.setUint(keccak256("bugSeverityCost", 2), 1000); 
  database.setUint(keccak256("bugSeverityCost", 3), 10000); 
  database.setUint(keccak256("expertVotePower"), 5); 
  database.setUint(keccak256("regularVotePower"), 1); 
}

}
