pragma solidity ^0.4.18;

import './SafeMath.sol';
import './Database.sol';



// TODO: what to do with escrow for submitting bug 
contract BugBounty { 
  using SafeMath for *; 
  
Database public database; 


// -------------User variables---------------
mapping (address => bool) public basicReviewer; 
mapping (address => bool) public expertReviewer; 


// ------------Voting & Payment----------------
mapping (address => uint) public weiOwed;
mapping (address => uint) public numberOfVotesUnpaid; 
uint public totalNumberOfVotes; 


// ----------Bug Struct-------------------
mapping (bytes32 => Bug) public bugs; 

// ------------Safety-------------------
  bool private rentrancy_lock = true;    // Prevents re-entrancy attack

struct Bug { 
  address submitter;
  uint stage;    // 0 = uninitialized, 1 = first stage, 2 = expert review
  mapping (address => bool) voted; 
  int voteSum;
  uint deadline; 
}


function BugBounty(address _database)
public { 
  database = Database(_database);

}

// NOTE: Limit of 1 bug per block
function submitBug()
external 
payable { 
  require (msg.value == bugSubmissionCost); 
  bytes32 bugID = keccak256(msg.sender, block.number);
  Bug thisBug = bugs[bugID];
  thisBug.submitter = msg.sender;
  thisBug.deadline = block.number.add(database.uintStorage(keccak256("blocksForBugReview"))); 
  thisBug.stage = 1; 
}

function voteForBug(bytes32 _bugID, bool _upvote)
external 
bugExists(_bugID)
beforeDeadline(_bugID) 
noDoubleVote(_bugID) 
certified {
  Bug thisBug = bugs[_bugID];
  vote(thisBug, msg.sender, _upvote);
}

function resolveVote(bytes32 _bugID)
external 
bugExists(_bugID)
passedDeadline(_bugID) { 
  Bug thisBug = bugs[_bugID];
  if (thisBug.voteSum < 0) { 
    delete bugs[_bugID];
    return;
  }
  thisBug.voteSum = 0;   // reuse voting count for expert votes
  thisBug.stage = 2; 
}


function vote(Bug thisBug, address _voter, bool _upvote)
internal { 
  if (_upvote) { thisBug.voteSum++; }
  else { thisBug.voteSum--; }
  numberOfVotesUnpaid[_voter] = numberOfVotesUnpaid.add(1);
  totalNumberOfVotes++; 
}


modifier requiresEther { 
  require(msg.value > 0);
  _;
}

modifier bugExists(bytes32 _bugID){
  require(bugs[_bugID].stage != 0);
  _;
}

modifier certified(bytes32 _bugID) {
  require (database.boolStorage(keccak256("userAccess", msg.sender)) >= 1); 
  if (thisBug.stage == 1) { 
    require(certifiedReviewer[msg.sender]);
  }
  else { 
    require(expertReviewer[msg.sender]); 
  }
}

modifier passedDeadline(bytes32 _bugID) { 
  Bug thisBug = bugs[_bugID];
  if (thisBug.stage == 1) { 
    require (block.number > thisBug.deadline);
  }
  else{ 
    require (block.number > thisBug.deadline.add(database.uintStorage(keccak256("blocksforExpertReview"))));
  }
  _;
}

modifier beforeDeadline(bytes32 _bugID) {
  Bug thisBug = bugs[_bugID];
  if (thisBug.stage == 1) { 
    require (block.number < thisBug.deadline);
  }
  else{ 
    require (block.number < thisBug.deadline.add(database.uintStorage(keccak256("blocksforExpertReview"))));
  }
  _;
}

modifier noDoubleVote(bytes32 _bugID) { 
  require(!bugs[_bugID].voted[msg.sender]);
  _;
}

modifier nonReentrant() {
  require(!rentrancy_lock);
  rentrancy_lock = true;
  _;
  rentrancy_lock = false;
}

event LogBountyReceived(address indexed _sender, uint indexed _value, uint indexed _blockNumber);


}
