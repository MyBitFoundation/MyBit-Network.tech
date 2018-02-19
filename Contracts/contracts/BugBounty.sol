pragma solidity ^0.4.18;

import './SafeMath.sol';
import './Database.sol';

contract BugBounty { 
  
Database public database; 

// ---------------Bug Variables-------------------
uint public blocksForBugReview;  
uint public bugSubmissionCost; 
mapping (uint => uint) public severityCost;    // Amount of MyBit paid for severity


mapping (address => bool) public certifiedReviewer; 
mapping (bytes32 => Bug) public bugs; 

struct Bug { 
  address submitter;
  int voteSum;
  mapping (address => int) userVote; 
  uint deadline; 
  bool approved; 
}


function BugBounty(address _database)
public { 
  database = Database(_database);
  blocksForBugReview = 100; 
}


function submitBug(bytes32 _storageHash)
external 
payable { 
  require (msg.value == bugSubmissionCost); 
  bytes32 bugID = keccak256(_storageHash, msg.sender, deadline);
  Bug thisBug = bugs[bugID];
  thisBug.submitter = msg.sender;
  thisBug.deadline = block.number.add(blocksForBugReview); 
}

function voteForBug(bytes32 _bugID)
external {
  Bug thisBug = bugs[_bugID];

}

function resolveBug(bytes32 _bugID)
external { 

}

function approveBug(bytes32 _bugID, uint _severityLevel)
external { 

}

function addExpert(address _expert)
external
onlyOwner { 

}

function removeExpert(address _expert)
external
onlyOwner { 

}

}
