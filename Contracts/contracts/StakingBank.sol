pragma solidity ^0.4.18;
import './SafeMath.sol';
import './Database.sol'; 



// TODO: prevent users from accidentally transferring in tokens 
// TODO: store previous stakeID as well?? 
contract StakingBank { 
using SafeMath for *; 

  // --------MyBit Contracts-----------------
  Database public database; 


  // -------Safety------------------
  bool private rentrancy_lock = false;    // Prevents re-entrancy attack


  function StakingBank(address _myBitToken, address _database) 
  public {
    database = Database(_database); 
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
    database.setUint(keccak256("totalMyBitStaked"), totalMyBitStaked.sub(database.uintStorage(keccak256("stakeAmount", _stakeID))));
    database.setBool(keccak256("pendingWithdraw"), true);
    return true;
  }


  function withdraw(bytes32 _stakeID)
  external
  nonReentrant
  whenNotPaused
  ownerOfLock(_stakeID, msg.sender)
  returns (bool) {
    uint owed = database.uintStorage(keccak256("stakingRevenueOwedToUser", msg.sender)); 
    assert(owed != 0);
    database.deleteUint(keccak256("stakingRevenueOwedToUser", msg.sender));
    uint rewardPaidToStaker = database.uintStorage(keccak256("rewardPaidToStaker", _stakeID));
    database.setUint(keccak256("rewardPaidToStaker", _stakeID), rewardPaidToStaker.add(owed)); 
    msg.sender.transfer(owed);
    return true;
  }

  function bugWithdraw(uint _amount, address _userAddress)
  external 
  returns (bool) { 
    require(msg.sender == database.addressStorage(keccak256("contract", "BugBank")));
    _userAddress.transfer(_amount); 
    return true; 
  }

  // Asset contracts send fee here 
  // TODO: log assetID? 
  function receiveTransactionFee() 
  external 
  payable
  requiresEther 
  { 
    uint stakingRewardReceived = database.uintStorage(keccak256("stakingRewardReceived"));
    uint bugBountyAmount = msg.value.mul(10).div(100);
    uint totalBountyReceived = database.uintStorage(keccak256("bugBountyRewardReceived"));
    database.setUint(keccak256("bugBountyRewardReceived"), totalBountyReceived.add(bugBountyAmount)); 
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

  function settleLedger(address _staker, bytes32 _stakeID)
  public { 
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
