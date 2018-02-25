pragma solidity ^0.4.18;

import './SafeMath.sol';
import './Database.sol';

contract ExpertBounty { 
  using SafeMath for *; 

mapping (address => bool) public expertReviewer;


function expertVote(bytes32 _bugID, bool _upvote)
external 
beforeDeadline(bugs[_bugID].deadline.add(blocksforExpertReview))
noDoubleVote(_bugID) { 
  require(expertReviewer[msg.sender]);
  Bug thisBug = bugs[_bugID];
  require(thisBug.approved);
  vote(thisBug, msg.sender, _upvote); 
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



}
