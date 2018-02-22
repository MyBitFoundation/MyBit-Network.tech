pragma solidity ^0.4.18;
import './SafeMath.sol';
import './MyBitToken.sol'; 
import './Database.sol'; 


// TODO: prevent users from accidentally transferring in tokens 
// TODO: store previous stakeID as well?? 
contract TokenStake { 
using SafeMath for *; 

  // --------MyBit Contracts-----------------
  MyBitToken public myBitToken; 
  Database public database; 
  

  // ----------Staking Information------------------
  mapping (bytes32 => Stake) public stakes; 
  mapping (address => uint) public rewardPaidToStaker;
  mapping (address => uint) public owedToUser; 
  uint public stakingRewardReceived;

  // ---------------Minimum amounts & times-----------------
  uint public minimumStakeAmount = 1000;           // Minimum number of tokens that must be staked
  uint public minimumBlocksToStake = 50;          // TODO: testing number Minimum number of blocks to wait until withdraw can be requested
  uint public minimumBlocksToWithdraw = 10;      // TODO: testing number. Minimum number of blocks need to wait after withdraw is requested.


  // -----Token Information--------------
  uint public totalMyBitStaked;


  // -------Safety------------------
  bool private rentrancy_lock = false;    // Prevents re-entrancy attack


  // -------LinkedList info-------------
  bytes32 public head; 
  uint public length; 


  struct Stake {
    address staker;
    uint amountStaked;        // Amount of MyB tokens staked
    uint blockWhenReleased;    // Block when user is allowed to request a withdraw. Once withdraw requested this variable will indicate when actual withdraw can be done
    bool pendingWithdraw;     // User has requested a withdraw of tokens. If true, must wait until block.number >= blockWhenReleased
    bytes32 next;             // This is the stake in front of 
  }


  function TokenStake(address _myBitToken, address _database) 
  public {
    myBitToken = MyBitToken(_myBitToken);
    database = Database(_database); 

  }


  // Once users approve TokenStaking contract, they can stake tokens here
  // NOTE: If user locks same number of tokens on the same block, they will lose their tokens as their mapping will be overwritten
  function stakeTokens(uint _amount)
  external
  onlyApproved
  whenNotPaused
  returns (bool) { 
    require (_amount >= minimumStakeAmount);
    require (myBitToken.transferFrom(msg.sender, this, _amount));
    uint blockAtWithdraw = minimumBlocksToStake.add(block.number);
    bytes32 ID = keccak256(msg.sender, blockAtWithdraw, _amount);
    Stake storage thisStake = stakes[ID];
    thisStake.staker = msg.sender;
    thisStake.amountStaked = _amount;
    thisStake.blockWhenReleased = blockAtWithdraw; 
    thisStake.next = head; 
    head = ID; 
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
    Stake memory thisStake = stakes[_stakeID];
    require(thisStake.pendingWithdraw == false);

  }

  // Once the minimum staking time has been fulfilled user can withdraw tokens here
  // TODO: don't let last person withdraw? 
  function removeStake(bytes32 _stakeID, bytes32 _previousStakeID) 
  external
  nonReentrant
  onlyApproved
  whenNotPaused
  ownerOfLock(_stakeID, msg.sender)
  stakingFinished(_stakeID)
  returns (bool) {
    require(stakes[_previousStakeID].next == _stakeID);
    settleLedger(msg.sender, _stakeID);
    Stake memory thisStake = stakes[_stakeID];
    totalMyBitStaked = totalMyBitStaked.sub(thisStake.amountStaked);
    myBitToken.transfer(msg.sender, thisStake.amountStaked);   // If transfer() fails the call will bubble up
    if (_stakeID == head) { head = thisStake.next;  }         // If this staker is last in list, make next person the last
    else { stakes[_previousStakeID].next = thisStake.next;  }   // Point previous stakeID ahead one place
    delete stakes[_stakeID];
    LogTokenWithdraw(msg.sender, block.number, _stakeID);    
  }

  function settleLedger(address _staker, bytes32 _stakeID)
  internal { 
    uint owed = calculateOwed(_staker, _stakeID);
    if (owed > 0) {
      owedToUser[msg.sender] = owedToUser[msg.sender].add(owed);
      rewardPaidToStaker[msg.sender] = rewardPaidToStaker[msg.sender].add(owed);
    }
  }

  // TODO: only be called by bugbounty contract
  function payBugBounty(uint _amount)
  nonReentrant
  external { 
    uint paidAmount = 0;
    while (paidAmount < _amount) { 
      bytes32 thisID = head; 
      Stake thisStake = stakers[head]; 
      head = thisStake.next;
      if (thisStake.amountStaked <= _amount.sub(paidAmount)) { 
        settleLedger(thisStake.staker, thisID);
        paidAmount = paidAmount.add(thisStake.amountStaked); 
        delete stakers[thisID]; 
      }
      else {
        settleLedger(thisStake.staker, thisID);
        thisStake.amountStaked = thisStake.amountStaked.sub(_amount.sub(paidAmount));
        paidAmount = _amount; 
        break;
      }
    }
    myBitToken.transfer(address(bugbounty), _amount); 
  }


  function withdraw(bytes32 _stakeID)
  external
  nonReentrant
  ownerOfLock(_stakeID, msg.sender)
  returns (bool) { 
    uint owed = owedToUser[msg.sender];
    assert(owed != 0);
    owedToUser[msg.sender] = 0;
    msg.sender.transfer(owed);
    return true;
  }

  // Asset contracts send fee here 
  function receiveReward() 
  external 
  payable
  requiresEther 
  { 
    stakingRewardReceived = stakingRewardReceived.add(msg.value);
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
    return stakingRewardsReceived.mul(thisStake.amountStaked).div(totalMyBitStaked).sub(rewardPaidToStaker[_staker]);
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
    Stake memory thisStake = stakes[_ID];
    require(_ID == keccak256(_owner, thisStake.blockAtWithdraw, thisStake.amountStaked)); 
    _;
  }

  modifier stakingFinished(bytes32 _ID) {
    require(stakes[_ID].blockAtWithdraw >= block.number);
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
