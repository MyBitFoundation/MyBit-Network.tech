pragma solidity ^0.4.18;
import './SafeMath.sol';
import './MyBitToken.sol'; 
import './Database.sol'; 
import './BugBounty.sol';


// TODO: prevent users from accidentally transferring in tokens 
// TODO: store previous stakeID as well?? 
contract TokenStake { 
using SafeMath for *; 

  // --------MyBit Contracts-----------------
  MyBitToken public myBitToken; 
  Database public database; 


  // -------Safety------------------
  bool private rentrancy_lock = false;    // Prevents re-entrancy attack


  function TokenStake(address _myBitToken, address _database) 
  public {
    myBitToken = MyBitToken(_myBitToken);
    database = Database(_database); 

  }

  // Once users approve TokenStaking contract to transfer tokens, they can stake tokens here/ 
  // User will be added to the end of a linkedlist
  // TODO: Log staking 
  function stakeTokens(uint _amount)
  external
  onlyApproved
  whenNotPaused
  returns (bool) { 
    require (_amount >= database.uintStorage(keccak256("minimumStakeAmount")));
    require (myBitToken.transferFrom(msg.sender, this, _amount));
    uint totalMyBitStaked = database.uintStorage(keccak256("totalMyBitStaked"));
    database.setUint(keccak256("totalMyBitStaked"), totalMyBitStaked.add(_amount));
    uint blockAtWithdraw = database.uintStorage(keccak256("minimumStakeTime")).add(block.number);
    bytes32 ID = keccak256(msg.sender, block.timestamp, _amount);
    database.setAddress(keccak256("staker", ID), msg.sender);
    database.setUint(keccak256("amountStaked", ID), _amount);
    database.setUint(keccak256("blockAtWithdraw", ID), blockAtWithdraw); 
    database.setBytes32(keccak256("nextStaker"), database.bytes32Storage(keccak256("headStaker")));
    database.setBytes32(keccak256("headStaker"), ID);
    return true;  
}


  function requestWithdraw(bytes32 _stakeID)
  external
  nonReentrant
  onlyApproved
  whenNotPaused
  ownerOfLock(_stakeID, msg.sender)
  stakingFinished(_stakeID)
  returns (bool) { 
    require(database.boolStorage(keccak256("pendingWithdraw")) == false);
    settleLedger(msg.sender, _stakeID);
    uint totalMyBitStaked = database.uintStorage(keccak256("totalMyBitStaked"));
    database.setUint(keccak256("totalMyBitStaked"), totalMyBitStaked.sub(thisStakeAmount));
    database.setBool(keccak256("pendingWithdraw"), true);
    return true;

  }

  // Once the minimum staking time has been fulfilled user can withdraw tokens here
  function removeStake(bytes32 _stakeID, bytes32 _previousStakeID) 
  external
  nonReentrant
  onlyApproved
  whenNotPaused
  ownerOfLock(_stakeID, msg.sender)
  stakingFinished(_stakeID)
  returns (bool) {
    require(database.bytes32Storage(keccak256("nextStaker", _previousStakeID)) == _stakeID || _previousStakeID == bytes32(0));    // Make sure the previous stakeID is pointing to this one
    uint thisStakeAmount = database.uintStorage(keccak256("amountStaked", _stakeID));
    bytes32 head = database.bytes32Storage(keccak256("headStaker"));
    myBitToken.transfer(msg.sender, thisStakeAmount);   // If transfer() fails the call will bubble up
    if (_stakeID == head) { head = database.bytes32Storage(keccak256("nextStaker", _stakeID)); }         // If this staker is last in list, make next person the last
    else { database.setBytes32(keccak256("nextStaker", _previousStakeID), database.bytes32Storage(keccak256("nextStaker", _stakeID));  }   // Point previous stakeID ahead one place
    deleteStake(_stakeID);
    LogTokenWithdraw(msg.sender, block.number, _stakeID);    
  }

  // TODO: only be called by bugbounty contract
  function payBugBounty(uint _amount)
  nonReentrant
  whenNotPaused
  external { 
    uint paidAmount = 0;
    while (paidAmount < _amount) { 
      bytes32 thisID = database.bytes32Storage(keccak256("headStaker")); 
      database.setBytes32(keccak256("headStaker"), database.bytes32Storage(keccak256("nextStaker"), thisID));
      uint thisStakeAmount = database.uintStorage(keccak256("amountStaked", thisID));
      settleLedger(thisStake.staker, thisID);
      if (thisStakeAmount <= _amount.sub(paidAmount)) { 
        paidAmount = paidAmount.add(thisStakeAmount); 
        deleteStake(thisID); 
      }
      else {
        database.setUint(keccak256("amountStaked", thisID), thisStakeAmount.sub(_amount.sub(paidAmount))); 
        paidAmount = _amount; 
      }
    }
    myBitToken.transfer(address(bugbounty), _amount); 
  }


  function withdraw(bytes32 _stakeID)
  external
  nonReentrant
  whenNotPaused
  ownerOfLock(_stakeID, msg.sender)
  returns (bool) { 
    uint owed = owedToUser[msg.sender];
    assert(owed != 0);
    owedToUser[msg.sender] = 0;
    uint rewardPaidToStaker = database.uintStorage(keccak256("rewardPaidToStaker", _stakeID));
    database.setUint(keccak256("rewardPaidToStaker", _stakeID), rewardPaidToStaker.add(owed)); 
    msg.sender.transfer(owed);
    return true;
  }

  // Asset contracts send fee here 
  // TODO: log assetID? 
  function receiveReward() 
  external 
  payable
  requiresEther 
  { 
    stakingRewardReceived = database.uintStorage(keccak256("stakingRewardReceived"));
    bugBountyAmount = msg.value.mul(10).div(100);
    BugBounty(database.addressStorage(keccak256("contract", "BugBounty"))).receiveReward(); 
    database.setUint(keccak256("stakingRewardReceived"), stakingRewardReceived.add(msg.value.sub(bugBountyAmount)));
    LogFeeReceived(msg.sender, msg.value, block.number); 
  }


  // Must be authorized by 1 of the 3 owners and then can be called by any of the other 2
  // Invariants: Must be 1 of 3 owners. Cannot be called by same owner who authorized the function to be called.
  // TODO: need to transfer all MYB tokens out before calling this 
  function destroy(address _functionInitiator, address _holdingAddress) 
  anyOwner 
  public {
    require(_functionInitiator != msg.sender); 
    require(database.boolStorage(keccak256(this, _functionInitiator, "destroy", keccak256(_holdingAddress))));
    LogDestruction(_holdingAddress, this.balance, msg.sender); 
    selfdestruct(_holdingAddress);
  }

// -------------------------------------Internal-----------------------------------
  function deleteStake(bytes32 _stakeID)
  internal { 
    database.deleteUint(keccak256("amountStaked", _stakeID));
    database.deleteUint(keccak256("blockAtWithdraw", _stakeID));
    database.deleteAddress(keccak256("staker", _stakeID)); 
    database.deleteBytes32(keccak256("nextStaker", _stakeID)); 
  }

  function settleLedger(address _staker, bytes32 _stakeID)
  internal { 
    uint owed = calculateOwed(_staker, _stakeID);
    if (owed > 0) {
      uint owedToUser = database.uintStorage(keccak256("stakingRevenueOwedToUser", _staker)); 
      database.setUint(keccak256("stakingRevenueOwedToUser", _staker), owedToUser.add(owed));
    }
  }


// ------------------------------------View only functions-------------------------------------------------

  function getBalance()
  view 
  external 
  returns (uint) {
    return this.balance;
  }


  function calculateOwed(address _staker, bytes32 _stakeID)
  public 
  view
  returns (uint) { 
    Stake memory thisStake = stakes[_stakeID];
    uint amountStaked = database.uintStorage(keccak256("amountStaked", _stakeID));
    uint totalMyBitStaked = database.uintStorage(keccak256("totalMyBitStaked", _stakeID));
    uint rewardPaidToStaker = database.uintStorage(keccak256("rewardPaidToStaker", _staker));
    return database.uintStorage(keccak256("stakingRewardReceived")).mul(amountStaked).div(totalMyBitStaked).sub(rewardPaidToStaker);
  }

  // -------------------------------Fallback------------------------

  function() 
  public {
    revert();
  }


  // -------------------------------Modifiers--------------------------------

  modifier onlyApproved { 
    require(database.uintStorage(keccak256("userAccess", msg.sender)) >= 3);
    _; 
  }
  
  modifier whenNotPaused { 
    require(!database.boolStorage(keccak256("pause", this)));
    _; 
  }

  modifier requiresEther {
    require(msg.value > 0);
    _;
  }

  modifier nonReentrant() {
    require(!rentrancy_lock);
    rentrancy_lock = true;
    _;
    rentrancy_lock = false;
  }

  modifier ownerOfLock(bytes32 _ID, address _owner) { 
    require(database.addressStorage(keccak256("staker", _ID)) == _owner); 
    _;
  }

  modifier stakingFinished(bytes32 _ID) {
    require(database.uintStorage(keccak256("blockAtWithdraw")) >= block.number);
    _;
  }


  modifier anyOwner { 
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  event LogDestruction(address indexed _locationSent, uint256 indexed _amountSent, address indexed _caller); 
  event LogFeeReceived(address indexed _sender, uint indexed _amount, uint indexed _blockNumber); 
  event LogTokensStaked(address indexed _staker, uint indexed _blockNumber, bytes32 indexed _ID); 
  event LogTokenWithdraw(address indexed _staker, uint indexed _blockNumber, bytes32 indexed _ID);


}
