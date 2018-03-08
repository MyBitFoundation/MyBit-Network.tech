pragma solidity ^0.4.19;

import './SafeMath.sol';
import './Database.sol';
import './StakingBank.sol';


// TODO: what to do with escrow for submitting bug
contract BugBank {
  using SafeMath for *;

  Database public database;

  bool private rentrancy_lock = false;

  function BugBank(address _database)
  public {
    database = Database(_database);
  }

  // Users can withdraw their reward for voting on bug proposals here
  function withdraw()
  nonReentrant
  external {
    uint payment = calculateOwed(msg.sender);
    assert (payment > 0);
    uint totalPaidToBugReviewer = database.uintStorage(keccak256("totalPaidToBugReviewer", msg.sender));
    database.setUint(keccak256("totalPaidToBugReviewer", msg.sender), totalPaidToBugReviewer.add(payment));
    require(StakingBank(database.addressStorage(keccak256("contract", "StakingBank"))).bugWithdraw(payment, msg.sender));
    LogBugBountyWithdraw(msg.sender, payment, block.number);
  }

  // Owner can add an expert or regular bug reviewer here
  function addReviewer(address _user, bool _expert)
  external
  anyOwner {
    if (_expert) {
      require(!database.boolStorage(keccak256("expertBugReviewer", _user)));
      database.setBool(keccak256("expertBugReviewer", _user), true);
    }
    else {
      require(!database.boolStorage(keccak256("regularBugReviewer", _user)));
      database.setBool(keccak256("regularBugReviewer", _user), true);
    }
    LogReviewerAdded(_user, _expert, block.number);
  }

  // Owner can remove an expert or regular bug reviewer here
  function removeReviewer(address _user, bool _expert)
  external
  anyOwner {
      if (_expert) {
      require(database.boolStorage(keccak256("expertBugReviewer", _user)));
      database.deleteBool(keccak256("expertBugReviewer", _user));
    }
    else {
      require(database.boolStorage(keccak256("regularBugReviewer", _user)));
      database.deleteBool(keccak256("regularBugReviewer", _user));
    }
    LogReviewerRemoved(_user, _expert, block.number);
  }

  // Fallback. This is triggered if functionID isn't called or doesn't match
  function() public { 
    revert();
  }

  // ----------------------------View Only----------------------------

  // Calculates how much bug reviewer is owed
  function calculateOwed(address _user)
  public
  view
  returns (uint){
    require(database.boolStorage(keccak256("expertBugReviewer", _user)) || database.boolStorage(keccak256("regularBugReviewer", _user)));
    uint totalVotes = database.uintStorage(keccak256("totalNumberOfBugVotes"));
    uint totalBugFeeReceived = database.uintStorage(keccak256("bugBountyRewardReceived"));
    uint totalBugVotesUser = database.uintStorage(keccak256("totalBugVotesUser", _user));
    uint totalPaidToBugReviewer = database.uintStorage(keccak256("totalPaidToBugReviewer", _user));
    return totalBugFeeReceived.mul(totalBugVotesUser).div(totalVotes).sub(totalPaidToBugReviewer);
  }

  // -------------------------------Modifiers------------------------------------


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

  modifier anyOwner {
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }


  event LogReviewerAdded(address _user, bool _expert, uint _blockNumber);
  event LogReviewerRemoved(address _user, bool _expert, uint _blockNumber);
  event LogBugBountyWithdraw(address _user, uint payment, uint _blockNumber);


}
