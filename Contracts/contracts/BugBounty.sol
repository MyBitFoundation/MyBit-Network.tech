pragma solidity ^0.4.18;

import './SafeMath.sol';
import './Database.sol';
import './TokenStake.sol';



// TODO: what to do with escrow for submitting bug 
contract BugBounty { 
  using SafeMath for *; 
  
Database public database; 


// ----------Bug Struct-------------------
mapping (bytes32 => Bug) public bugs; 

// ------------Safety-------------------
bool private rentrancy_lock = true;    // Prevents re-entrancy attack

struct Bug { 
  address submitter;
  uint stage;    // 0 = uninitialized, 1 = first stage, 2 = expert review
  uint severity;  // 1 = lowest,  2 = mid,  3 = highest
  mapping (address => bool) voted; 
  int voteSum;
  uint deadline; 
}


function BugBounty(address _database)
public { 
  database = Database(_database);
}

// NOTE: Limit of 1 bug per block
// TODO: Send bug funds somewhere
function submitBug(uint _severity)
external 
payable 
whenNotPaused { 
  require (msg.value == database.uintStorage(keccak256("bugSubmissionCost"))); 
  require (_severity < 4 && _severity > 0);
  bytes32 bugID = keccak256(msg.sender, block.number);
  Bug thisBug = bugs[bugID];
  thisBug.submitter = msg.sender;
  thisBug.deadline = block.number.add(database.uintStorage(keccak256("blocksForBugReview"))); 
  thisBug.stage = 1; 
  thisBug.severity = _severity; 
}

// TODO: check that total number of votes can't be decremented at the same time it is incremented
function voteForBug(bytes32 _bugID, bool _upvote)
external 
whenNotPaused
bugExists(_bugID)
beforeDeadline(_bugID) 
noDoubleVote(_bugID) 
onlyCertified {
  Bug thisBug = bugs[_bugID];
  if (_upvote) { thisBug.voteSum++; }
  else { thisBug.voteSum--; }
  numberOfVotesUnpaid = database.uintStorage(keccak256("numberOfVotesUnpaid", msg.sender));
  database.setUint(keccak256("numberOfVotesUnpaid", msg.sender), numberOfVotesUnpaid.add(1));
}

// TODO: 
function resolveStageTwo(bytes32 _bugID)
external
bugExists(_bugID)
passedDeadline(_bugID) 
whenNotPaused { 
  Bug thisBug = bugs[_bugID];
  if (bugs[_bugID]) { 
    TokenStake tokenStake = TokenStake(database.addressStorage(keccak256("contract", "TokenStake"))); 
    uint amountOwed = database.uintStorage(keccak256("severityCost", thisBug.severity));
    require(tokenStake.payBugBounty(amountOwed, thisBug.submitter)); 
  }
  delete thisBug;
}

function resolveStageOne(bytes32 _bugID)
external 
bugExists(_bugID)
passedDeadline(_bugID) { 
  Bug thisBug = bugs[_bugID];
  if (thisBug.voteSum < 0) { 
    delete bugs[_bugID];
  }
  else { 
  thisBug.voteSum = 0;   // reuse voting count for expert votes
  thisBug.stage = 2; 
  }
}


modifier bugExists(bytes32 _bugID){
  require(bugs[_bugID].stage != 0);
  _;
}

modifier onlyCertified {
  if (thisBug.stage == 1) { 
    require(database.boolStorage(keccak256("certifiedBugReviewer", msg.sender)));
    totalNumberOfVotes = database.uintStorage(keccak256("totalNumberOfBugVotes"));
    database.setUint(keccak256("totalNumberOfBugVotes"), totalNumberOfVotes.add(1));
  }
  else { 
    require(database.boolStorage(keccak256("expertBugReviewer", msg.sender)));
    totalNumberOfVotes = database.uintStorage(keccak256("totalNumberOfBugVotes", "expert"));
    database.setUint(keccak256("totalNumberOfBugVotes", "expert"), totalNumberOfVotes.add(1));
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
  bugs[_bugID].voted[msg.sender] = true; 
  _;
}

modifier nonReentrant() {
  require(!rentrancy_lock);
  rentrancy_lock = true;
  _;
  rentrancy_lock = false;
}

modifier whenNotPaused { 
  require(!database.boolStorage(keccak256("pause", this)));
  _; 
}

event LogBountyReceived(address indexed _sender, uint indexed _value, uint indexed _blockNumber);


}
