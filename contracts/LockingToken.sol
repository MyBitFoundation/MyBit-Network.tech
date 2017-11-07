pragma solidity ^0.4.15;
import './SafeMath.sol';
import './DateTime.sol';
import './MyBitHub.sol';
import './TokenHub.sol';
import './MyBitToken.sol';


contract LockingToken{
using SafeMath for *;

  //uint256 public tokenHub;
  uint256 public myBitHub;
  TokenHub public tokenHub;
  address public tokenHubAddr;
  CSToken public myBitToken;


  uint256 public periodType; 	// 0-45, 1-90, 2-180, 3-360
  uint256 public daysToLast;        // how many days this contract should last
  uint256 public minFund; // For future incase it gets spammed
  uint256 public maxFund; // For future incase of whales
  uint256 public creationTime;
  uint256 public maxMultiplier;
  uint256 public unlockTime;

  struct Locked{
    uint256 amountLocked;  // value of individual lock
    uint256 dateLocked;
    uint256 multiplier;
  }


  Stages stages;
  //store integer of address location

  mapping(address => uint256) public balanceOf;
  mapping(uint256 => address) public indexOfAddress;
  mapping(address => bool) public hasLocked;
  uint256 public totalContractBalance;
  uint256 public totalUsersLocked;
  //uint256 public totalTransactionFee;

  mapping (uint256 => address) public allAddresses;

  uint256 public fifteenCheckCycle;
  bool public fifteenCheckCycleCompleted;
  uint256 public checkCyclesCompleted;

  bool public contractTimeMet;

  enum Stages {
    ApprovalSuccess,
    LockTokenSuccess
  }

  //---User variables---//
  mapping(address => Locked[]) public userLocks;
  mapping(uint256 => address) public userTotalLocked;
  mapping(address => uint256[]) public userApproved;// How much each approval
  mapping(address => uint256) public userCountOfLocks;

  event approvalGranted(address _userAddr, uint256 _amount);
  event tokenLocked(address _addr, uint256 _totalBalanceUser, uint256 _amount);
  event contractTimeMetE(address _addr, uint256 _totalTockens, uint256 _totalUsersLocked, uint256 _days);
  event transferFromE(address _from, address _to, uint256 _amount);
  event allTokensTransfered(address _contractAddress, uint256 _contractBalance);

// fix wrong use of fifteenCheckCycle

  modifier ContractTimeMet(){
    require(block.timestamp >= (unlockTime - 25 minutes) &&
            block.timestamp <= (unlockTime + 25 minutes));
            contractTimeMet = true;
            contractTimeMetE(this, totalContractBalance, totalUsersLocked, daysToLast);
    _;
  }

  modifier isTokenHub(){
    require(msg.sender == tokenHubAddr);
    _;
  }

  function LockingToken(uint256 _period, uint256 _days,
    uint256 _minFund, uint256 _maxFund, uint256 _maxMultiplier,
    uint256 _creationTime, address _myBitTokenAddr, address _tokenHubAddr) public isTokenHub{
      periodType = _period;
      daysToLast = _days;
      minFund = _minFund;
      maxFund = _maxFund;
      maxMultiplier = _maxMultiplier;
      creationTime = _creationTime;
      fifteenCheckCycle = creationTime.add(15 days);
      unlockTime = creationTime.add(_period.mul(daysToLast)); //FIX
      myBitToken = CSToken(_myBitTokenAddr);
      tokenHubAddr = _tokenHubAddr;
      tokenHub = TokenHub(_tokenHubAddr);
  }

  //User needs to call this;
  function unlockToken() public ContractTimeMet returns(bool){
      require(contractTimeMet);
      uint256 _user;
      for(_user = 0; _user < totalUsersLocked; _user++){
        myBitToken.transferFrom(this, indexOfAddress[_user], balanceOf[indexOfAddress[_user]]);
        totalContractBalance -= balanceOf[indexOfAddress[_user]];
        transferFromE(this, indexOfAddress[_user], balanceOf[indexOfAddress[_user]]);
      }
      require(_user == totalUsersLocked-1);
      require(totalContractBalance == 0);
      allTokensTransfered(this, totalContractBalance);
      tokenHub.deleteLockingTokenContract(periodType, daysToLast, maxMultiplier, this);
  }

  /*function approve(uint256 _amount) public returns(bool){
    //Check that its not ended
    require(_amount > 0 &&
            _amount >= minFund &&
            _amount <= maxFund &&
            msg.sender != address(0) &&
            myBitToken.balanceOf(msg.sender) >= _amount
            );
    require(myBitToken.approveAndCall(
      msg.sender, _amount));
    userApproved[msg.sender].push(_amount);
    approvalGranted(msg.sender, _amount);
  }*/

  function receiveApproval(address _addr, uint256 _amount) external returns(bool){
    require(myBitToken.transferFrom(_addr, this, _amount));
    userApproved[_addr].push(_amount);
    allAddresses[totalUsersLocked] = _addr;

    uint256 currentTime = block.timestamp;
    uint256 currentDayCycle = (unlockTime - currentTime) / daysToLast;
    uint256 _multiplier = 1-((currentDayCycle-1).div(90).mul((1 + maxMultiplier)));

    if(userCountOfLocks[_addr] == 0){totalUsersLocked.add(1);}
    userLocks[_addr].push(Locked(
      { amountLocked : _amount,
        dateLocked : block.timestamp,
        multiplier : _multiplier}
      ));
    userCountOfLocks[_addr].add(1);
    balanceOf[_addr].add(_amount);
    totalContractBalance.add(_amount);
    tokenLocked(_addr, balanceOf[_addr], _amount);
  }

  function destroyContract() external isTokenHub returns(bool){
    selfdestruct(tokenHubAddr);
    return true;
  }


  //---GETTERS---//
  function getTotalContractBalance() constant external returns(uint256){
    return totalContractBalance;
  }

  function getUserAmountOfLock(address _addr, uint256 _index) constant public returns(uint256){
    return userLocks[_addr][_index].amountLocked;
  }

  function getUserMultiplerOfLock(address _addr, uint256 _index) constant public returns(uint256){
    return userLocks[_addr][_index].multiplier;
  }




}
