pragma solidity ^0.4.18;

import './SafeMath.sol';
import './Database.sol';

contract BugBounty { 
  using SafeMath for *; 
  
Database public database; 

// ---------------Initial Variables-------------------
uint public blocksForBugReview;  
uint public blocksforExpertReview;
uint public bugSubmissionCost; 
mapping (uint => uint) public severityCost;    // Amount of MyBit paid for severity

// -------------User variables---------------
mapping (address => bool) public basicReviewer; 
mapping (address => bool) public expertReviewer;

// ------------Voting & Payment----------------
mapping (address => uint) public weiOwed;
mapping (address => uint) public numberOfVotesUnpaid; 
uint public totalNumberOfVotes; 

mapping (bytes32 => Bug) public bugs; 

struct Bug { 
  address submitter;
  bool approved; 
  mapping (address => bool) voted; 
  int voteSum;
  uint deadline; 
}


function BugBounty(address _database)
public { 
  database = Database(_database);
  blocksForBugReview = 100; 
  bugSubmissionCost = 1 ether;
  severityCost[1] = 100; 
  severityCost[2] = 1000; 
  severityCost[3] = 10000; 
}


function submitBug(bytes32 _storageHash)
external 
payable { 
  require (msg.value == bugSubmissionCost); 
  bytes32 bugID = keccak256(_storageHash, msg.sender, block.number);
  Bug thisBug = bugs[bugID];
  thisBug.submitter = msg.sender;
  thisBug.deadline = block.number.add(blocksForBugReview); 
}

function voteForBug(bytes32 _bugID, bool _upvote)
external 
beforeDeadline(bugs[_bugID].deadline) 
noDoubleVote(_bugID) {
  Bug thisBug = bugs[_bugID];
  require(thisBug._upvote >= block.number);
  require(certifiedReviewer[msg.sender]);
  vote(thisBug, msg.sender, _upvote);
}

function resolveInitialVote(bytes32 _bugID)
external 
passedDeadline(bugs[_bugID].deadline) { 
  Bug thisBug = bugs[_bugID];
  if (thisBug.voteSum < 0) { 
    delete bugs[_bugID];
    return;
  }
  thisBug.voteSum = 0;   // reuse voting count for expert votes
  thisBug.approved = true; 
}

function expertVote(bytes32 _bugID, bool _upvote)
external 
beforeDeadline(bugs[_bugID].deadline.add(blocksforExpertReview))
noDoubleVote(_bugID) { 
  Bug thisBug = bugs[_bugID];
  require(thisBug.approved);
  vote(thisBug, msg.sender, _upvote); 
}

function vote(Bug thisBug, address _voter, bool _upvote)
internal { 
  if (_upvote) { thisBug.voteSum++; }
  else { thisBug.voteSum--; }
  numberOfVotesUnpaid[_voter] = numberOfVotesUnpaid.add(1);
  totalNumberOfVotes++; 
}

function approveBug(bytes32 _bugID, uint _severityLevel)
external 
passedDeadline(bugs[_bugID].deadline.add(blocksforExpertReview)) { 
  require(thisBug.approved);
}

function declineBug(bytes32 _bugID)
external
passedDeadline(bugs[_bugID].deadline.add(blocksforExpertReview)) { 
  require(thisBug.approved); 
  delete bugs[_bugID];

}

function addReviewer(address _user, bool _expert)
external
onlyOwner { 

}

function removeReviewer(address _user, bool _expert)
external
onlyOwner { 

}

modifier bugExists(bytes32 _bugID){
  require(bugs[_bugID].submitter != address(0));
  _;
}

modifier passedDeadline(uint _deadline) { 
  require(_deadline < block.number);
  _;
}

modifier beforeDeadline(uint _deadline) { 
  require (_deadline > block.number);
  _;
}

modifier noDoubleVote(bytes32 _bugID) { 
  require(!bugs[_bugID].voted[msg.sender]);
  _;
}

}
