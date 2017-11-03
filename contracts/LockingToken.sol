pragma solidity ^0.4.15;
import './SafeMath.sol';
import './DateTime.sol';
import './myBitHub.sol';
import './tokenHub.sol';
import './MyBitToken.sol';



contract lockingTokens{
using SafeMath for *;



  uint256 public tokenHub;
  uint256 public myBitHub;
  MyBitToken public myBitToken;

  uint256 public periodType; 	// 0-45, 1-90, 2-180, 3-360
  uint256 public days;        // how many days this contract should last
  uint256 public minFund; // For future incase it gets spammed
  uint256 public maxFund; // For future incase of whales
  uint256 public creationTime;
  uint256 public maxMultiplier;
  uint256 public unlockTime;

  struct Locked{
    uint256 countOfLocks;
    uint256 amountLocked;  // value of individual lock
    uint256 dateLocked;
    uint256 multiplier;
  }


  Stages stages;
  mapping(address => uint256) public balanceOf;
  uint256 public totalContractBalance;
  uint256 public totalUsersLocked;
  //uint256 public totalTransactionFee;

  uint256 public fifteenCheckCycle;
  bool public fifteenCheckCycleCompleted;
  uint256 public checkCyclesCompleted;

  bool public contractTimeMet;

  enum Stages {
    ApprovalSuccess,
    LockTokenSuccess
  }

  //---User variables---//
  mapping(address => Locked[]) userLocks;
  mapping(address => uint256[]) userApproved;// How much each approval

  event approvalGranted(address _userAddr, uint256 _amount);
  event tokenLocked(address _addr, uint256 _totalBalanceUser, uint256 _amount);
  event contractTimeMetE(address _addr, uint256 _totalTockens, uint256 _totalUsersLocked, uint256 _days)

// fix wrong use of fifteenCheckCycle
  modifier ContractTimeMet(){
    if(!contractTimeMet || block.timestamp >= (fifteenCheckCycle - 25 minutes) &&
            block.timestamp <= (fifteenCheckCycle.add(25 minutes))
            && !fifteenCheckCycleCompleted){
      fifteenCheckCycle + 15 days;
      checkCyclesCompleted.add(1);
      fifteenCheckCycleCompleted = true;
      require(checkCyclesCompleted == days/15 days);
      contractTimeMet = true;
      contractTimeMetE(this, totalContractBalance, totalUsersLocked, days);
    }

    else{
      fifteenCheckCycleCompleted = false;
    }
  }

  function lockingToken(uint256 _period, uint256 _days,
    uint256 _minFund, uint256 _maxFund, uint256 _maxMultiplier,
    uint256 _creationTime, uint256 _myBitTokenAddr) external{
      periodType = _period;
      days = _days;
      minFund = _minFund;
      maxFund = _maxFund;
      maxMultiplier = _maxMultiplier;
      creationTime = _creationTime;
      fifteenCheckCycle = creationDate.add(15 days);
      unlockTime = creationTime.add(_period.mul(days));
      myBitToken = myBitToken(_myBitTokenAddr);
  }

  function approve(uint256 _amount) public returns(bool){
    require(_amount > 0 &&
            _amount >= minFund &&
            _amount <= maxFund &&
            msg.sender != address(0) &&
            myBitToken.balanceOf(msg.sender) >= _amount
            );
    require(myBitToken.approveAndCall(
      msg.sender, _amount, bytes(_amount));
    userApproved[msg.sender].push(_amount);
    approvalGranted(msg.sender, bytes(msg.sender));
  }

  function receiveApproval(address _addr, uint256 _amount) external returns(bool){
    require(myBitToken.transferFrom(_addr, this, _amount));

    uint256 currentTime = block.timestamp;
    uint256 currentDayCycle = (unlockTime - currentTime) / days;
    uint256 _multiplier = 1-((currentDayCycle-1).div(90).mul((1 + multiplier)));

    if(userLocks[addr].countOfLocks == 0){totalUsersLocked.add(1);}

    userLocks[_addr] = Locked(
      { countOfLocks : userLocks[_addr].add(1),
        amountLocked : _amount,
        dateLocked : block.timestamp,
        multiplier : _multiplier}
      );
    if(count)
    balanceOf[_addr].add(_amount);
    totalContractBalance.add(_amount);
    tokenLocked(_addr, balanceOf[_addr], _amount);
  }



  //---GETTERS---//
  function getTotalContractBalance() constant returns(uint256){
    return totalContractBalance;
  }

  //TODO send myB tokens back once compelete, 5 minute intervals




}
