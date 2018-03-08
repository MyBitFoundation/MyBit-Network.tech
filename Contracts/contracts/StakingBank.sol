pragma solidity ^0.4.19;
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


  function StakingBank(address _database) 
  public {
    database = Database(_database); 
  }

  // This function settles the ledger for this user and initiates his waiting period to withdraw tokens. These tokens can still be claimed by the bug bounty if necessary
  // Note: User will not be eligable for further rewards
  function requestWithdraw(bytes32 _stakeID)
  external
  nonReentrant
  onlyApproved
  whenNotPaused
  ownerOfLock(_stakeID, msg.sender)
  stakingFinished(_stakeID)
  returns (bool) { 
    require(database.boolStorage(keccak256("pendingWithdraw", _stakeID)) == false);
    settleLedger(msg.sender, _stakeID);
    uint totalMyBitStaked = database.uintStorage(keccak256("totalMyBitStaked"));
    database.setUint(keccak256("totalMyBitStaked"), totalMyBitStaked.sub(database.uintStorage(keccak256("amountStaked", _stakeID))));
    database.setBool(keccak256("pendingWithdraw", _stakeID), true);
    LogTokenWithdraw(msg.sender, _stakeID, block.number);
    return true;
  }

  // This function sends Ether to staker based on what he is owed
  // Note: Must call SettleLedger before calling this function to get the lastest amount owed 
  // TODO: settleLedger within this transaction....check gas difference
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
    uint rewardPaidToStakers = database.uintStorage(keccak256("rewardPaidToStakers"));
    database.setUint(keccak256("rewardPaidToStaker", _stakeID), rewardPaidToStaker.add(owed));
    database.setUint(keccak256("rewardPaidToStakers"), rewardPaidToStakers.add(owed));
    msg.sender.transfer(owed);
    return true;
  }

  // Called by BugBounty contract when necessary
  function bugWithdraw(uint _amount, address _userAddress)
  external 
  returns (bool) { 
    require(msg.sender == database.addressStorage(keccak256("contract", "BugBank")));
    _userAddress.transfer(_amount); 
    return true; 
  }

  // Asset contracts send fee here 
  function receiveTransactionFee(bytes32 _assetID) 
  external 
  payable
  requiresEther 
  { 
    uint stakingRewardReceived = database.uintStorage(keccak256("stakingRewardReceived"));
    uint bugBountyAmount = msg.value.mul(10).div(100);
    uint totalBountyReceived = database.uintStorage(keccak256("bugBountyRewardReceived"));
    database.setUint(keccak256("bugBountyRewardReceived"), totalBountyReceived.add(bugBountyAmount)); 
    database.setUint(keccak256("stakingRewardReceived"), stakingRewardReceived.add(msg.value.sub(bugBountyAmount)));
    LogFeeReceived(_assetID, msg.value, block.number); 
  }


  // Must be authorized by 1 of the 3 owners and then can be called by any of the other 2
  // Invariants: Must be 1 of 3 owners. Cannot be called by same owner who authorized the function to be called.
  function destroy(address _functionInitiator, address _holdingAddress) 
  anyOwner 
  public {
    require(_functionInitiator != msg.sender); 
    require(database.boolStorage(keccak256(this, _functionInitiator, "destroy", keccak256(_holdingAddress))));
    LogDestruction(_holdingAddress, this.balance, msg.sender); 
    selfdestruct(_holdingAddress);
  }

// -------------------------------------Internal-----------------------------------
  // TODO: maybe batch multiple stakeID's 
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
    uint totalMyBitStaked = database.uintStorage(keccak256("totalMyBitStaked"));
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
    require(database.uintStorage(keccak256("blockAtWithdraw")) <= block.number);
    _;
  }


  modifier anyOwner { 
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  event LogDestruction(address indexed _locationSent, uint256 indexed _amountSent, address indexed _caller); 
  event LogFeeReceived(bytes32 indexed _assetID, uint indexed _amount, uint indexed _blockNumber); 
  event LogTokensStaked(address indexed _staker, uint indexed _blockNumber, bytes32 indexed _ID); 
  event LogTokenWithdraw(address indexed _staker, bytes32 indexed _ID, uint indexed _blockNumber);


}
