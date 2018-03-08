pragma solidity ^0.4.19;

import './SafeMath.sol';
import './Database.sol';
import './TokenStaking.sol';



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
  mapping (address => bool) voted;
  int voteSum;
  uint stage;    // 0 = uninitialized, 1 = first stage, 2 = expert review
  uint severity;  // 1 = lowest,  2 = mid,  3 = highest
  uint deadline;
}


function BugBounty(address _database)
public {
  database = Database(_database);
}

// NOTE: Limit of 1 bug per block
function submitBug(uint _severity)
external
payable
whenNotPaused {
  require (msg.value == database.uintStorage(keccak256("bugSubmissionCost")));
  require (_severity < 4 && _severity > 0);
  bytes32 bugID = keccak256(msg.sender, block.number);
  Bug storage thisBug = bugs[bugID];
  thisBug.submitter = msg.sender;
  thisBug.deadline = block.number.add(database.uintStorage(keccak256("blocksForBugReview")));
  thisBug.stage = 1;
  thisBug.severity = _severity;
  LogNewBugSubmitted(msg.sender, bugID, _severity);
}

// User can vote for a proposed bug here if they have not already voted on it
function voteForBug(bytes32 _bugID, bool _upvote)
external
whenNotPaused
bugExists(_bugID)
beforeDeadline(_bugID)
noDoubleVote(_bugID)
onlyCertified(_bugID) {
  Bug storage thisBug = bugs[_bugID];
  if (_upvote) { thisBug.voteSum++; }
  else { thisBug.voteSum--; }
  if (database.boolStorage(keccak256("regularBugReviewer", msg.sender))) { vote(database.uintStorage(keccak256("expertVotePower")));  }
  else { vote(database.uintStorage(keccak256("regularVotePower"))); }
  LogBugVotedFor(msg.sender, _bugID, _upvote);
}

// Checks if experts have confirmed or denied the bug. If confirmed, MyB tokens are taken from stakers, if denied the bug struct is deleted.
// TODO: send bug funds somewhere.
function resolveStageTwo(bytes32 _bugID)
external
bugExists(_bugID)
passedDeadline(_bugID)
whenNotPaused {
  Bug storage thisBug = bugs[_bugID];
  if (bugs[_bugID].voteSum > 0) {
    uint amountOwed = database.uintStorage(keccak256("severityCost", thisBug.severity));
    require(TokenStaking(database.addressStorage(keccak256("contract", "TokenStaking"))).payBugBounty(amountOwed, thisBug.submitter));
  }
  delete bugs[_bugID];
  LogBugFinishedStageTwo(_bugID, amountOwed > 0, block.number);  // Test that amountOwed == 0 when fails
}

function resolveStageOne(bytes32 _bugID)
external
bugExists(_bugID)
passedDeadline(_bugID) {
  Bug storage thisBug = bugs[_bugID];
  if (thisBug.voteSum <= 0) {
    delete bugs[_bugID];
  }
  else {
  thisBug.voteSum = 0;   // reuse voting count for expert votes
  thisBug.stage = 2;
  }
  LogBugFinishedStageOne(_bugID, thisBug.stage == 2, block.number);
}

function vote(uint _votePower)
internal {
    uint totalNumberOfVotes = database.uintStorage(keccak256("totalNumberOfBugVotes"));
    database.setUint(keccak256("totalNumberOfBugVotes"), totalNumberOfVotes.add(_votePower));
    uint totalUserVotes = database.uintStorage(keccak256("totalUserVotes", msg.sender));
    database.setUint(keccak256("totalUserVotes", msg.sender), totalUserVotes.add(_votePower));
}


modifier bugExists(bytes32 _bugID){
  require(bugs[_bugID].stage != 0);
  _;
}

modifier onlyCertified(bytes32 _bugID) {
  if (bugs[_bugID].stage == 1) {
    require(database.boolStorage(keccak256("regularBugReviewer", msg.sender)));
  }
  else {
    require(database.boolStorage(keccak256("expertBugReviewer", msg.sender)));
  }
  _;
}

modifier passedDeadline(bytes32 _bugID) {
  Bug storage thisBug = bugs[_bugID];
  if (thisBug.stage == 1) {
    require (block.number > thisBug.deadline);
  }
  else{
    require (block.number > thisBug.deadline.add(database.uintStorage(keccak256("blocksforExpertReview"))));
  }
  _;
}

modifier beforeDeadline(bytes32 _bugID) {
  Bug storage thisBug = bugs[_bugID];
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

event LogBugFinishedStageOne(bytes32 _bugID, bool _passedStageOne, uint _blockNumber);
event LogBountyReceived(address indexed _sender, uint indexed _value, uint indexed _blockNumber);
event LogBugVotedFor(address _voter, bytes32 _bugID, bool _upvote);
event LogNewBugSubmitted(address indexed _bugSubmitter, bytes32 indexed bugID, uint indexed _severity);
event LogBugFinishedStageTwo(bytes32 _bugID, bool passedVote, uint _blockNumber);

}
