pragma solidity ^0.4.15;
import './SafeMath.sol';
import './MyBitToken.sol';
import './TokenHub.sol';


contract TokenLock{
using SafeMath for *;

  // Periods of 15 day withdraw fee, 1 day to withdraw

  address public tokenHubAddr;
  TokenHub public tokenHub;

  address public myBitTokenAddr;
  MyBitToken public myBitToken;

  uint256 public periodType; 	// 0-45, 1-90, 2-180, 3-360
  uint256 public daysToLast;        // how many days this contract should last
  uint256 public minFund;      // For future incase it gets spammed
  uint256 public creationTime; // Creation time of contract
  uint256 public maxMultiplier; // day multiplier
  uint256 public unlockTime;

  uint256 public MultiplierTest;
  uint256 public TokensTest;
  uint256 public DaysLockTest;

  uint256 public totalTokensLocked;  // not adding multiplier
  uint256 public totalTokensLockedWithMultiplier;
  mapping (address => uint256) tokenBalanceOf;
  mapping (address => uint256) usersUsableBalance;
  uint256 public totalUsersLocked;

  mapping(address => Locked[]) public userLocks;
  mapping(address => uint256) public userCountOfLocks;
  uint256 public totalUsersLocfked;
  mapping(uint256 => address) public indexOfAddress;
  mapping(address => uint256) public addressIndex;

  bool public contractTimeMet;

  uint256 public testAddress;

  uint256[] public rates;

  modifier isTokenHub(){
    require(msg.sender == tokenHubAddr);
    _;
  }

  modifier ContractTimeMet(){
    require(block.timestamp >= (unlockTime - 25 minutes));
            contractTimeMet = true;
            contractTimeMetE(this, totalTokensLocked, totalUsersLocked, daysToLast);
    _;
  }

  event tokenInContract(address _userAddr, address _tokenAddress, uint256 _amount, uint256 _usersUsableBalance);
  event tokenLocked(address _userAddr, address _tokenAddress, uint256 _totalUserLocks,
    uint256 _totalAvailableBalance, uint256 _amount);

  event tokenLockInfo(address _userAddr, uint256 _period, uint256 _daysLockedAt, uint256 _amount, uint256 _tokensIncludingMultiplier,
      uint256 _multiplier, uint256 _lockCount);
  event tokenLockInfo1(address _userAddr, uint256 _period, uint256 _unlockTime, uint256 _startingTime, uint256 _lastWithdrawl, uint256 _transactionFeeWhenLocked,
  uint256 _lockCount);

  event contractTimeMetE(address _addr, uint256 _totalTockens, uint256 _totalUsersLocked, uint256 _days);
  event transferFromE(address _from, address _to, uint256 _amount);
  event allTokensTransfered(address _contractAddress, uint256 _contractBalance);

  event updatedTransactionLock(address _userAddr, uint256 _currentTransactionFee);


  struct Locked{
    uint256 daysLockedAt;
    uint256 amountLocked;
    uint256 amountLockedIncludingMultiplier;
    uint256 multiplier;
    uint256 endingTime;
    uint256 startingTime;
    uint256 lastWithdrawl;
    uint256 transactionFeeWhenLocked;
  }

function TokenLock(uint256 _period, uint256 _days,
  uint256 _minFund, uint256 _creationTime, uint256 _multiplier,
  address _myBitTokenAddr, address _tokenHubAddr) public{
    periodType = _period;
    daysToLast = _days;
    minFund = _minFund;
    creationTime = _creationTime;
    maxMultiplier = _multiplier;
    unlockTime = creationTime + (daysToLast * 1 days);
    myBitTokenAddr = _myBitTokenAddr;
    myBitToken = MyBitToken(_myBitTokenAddr);
    tokenHubAddr = _tokenHubAddr;
    tokenHub = TokenHub(_tokenHubAddr);
    addRates();
  }

  function unlockToken() public ContractTimeMet returns(bool){
      require(contractTimeMet);
      uint256 _user;
      for(_user = 0; _user < totalUsersLocked; _user++){
        myBitToken.transferFrom(this, indexOfAddress[_user], tokenBalanceOf[indexOfAddress[_user]]);
        totalTokensLocked -= tokenBalanceOf[indexOfAddress[_user]];
        transferFromE(this, indexOfAddress[_user], tokenBalanceOf[indexOfAddress[_user]]);
      }
      require(_user == totalUsersLocked-1);
      require(totalTokensLocked == 0);
      allTokensTransfered(this, totalTokensLocked);
      tokenHub.deleteLockingTokenContract(periodType, daysToLast, maxMultiplier, this);
    }

  function approvalGiven(address _addr, uint256 _amount){
    require(myBitToken.transferFrom(_addr, this, _amount));
    usersUsableBalance[_addr] += _amount;
    tokenBalanceOf[_addr] += _amount;
    tokenInContract(_addr, this, _amount, usersUsableBalance[_addr]);
  }

  function lockToken(uint256 _period, uint256 _amount, address _userAddr) public returns(bool){
    require(_period == 0 || _period == 1 || _period == 2 || _period ==3);
    require(usersUsableBalance[_userAddr] >= _amount);
    uint256 currentTime = block.timestamp;
    uint256 _daysLockedAt = (currentTime - creationTime) /  1 days;
    uint256 _multiplier = rates[_daysLockedAt];
    uint256 _tokensIncludingMultiplier =  (_amount * _multiplier) * 100;
    // divide by 1000000000000000
    uint256 _transactionFeeWhenLocked = tokenHub.getCurrentTransactionFee();

    userLocks[_userAddr].push(Locked({
      daysLockedAt : _daysLockedAt,
      amountLocked : _amount,
      amountLockedIncludingMultiplier : _tokensIncludingMultiplier,
      multiplier : _multiplier,
      endingTime : unlockTime,
      startingTime : currentTime,
      lastWithdrawl : 0,
      transactionFeeWhenLocked : _transactionFeeWhenLocked
      }));

   if(userCountOfLocks[_userAddr] == 0){
     indexOfAddress[totalUsersLocked] = _userAddr;
     addressIndex[_userAddr] = totalUsersLocked;
     totalUsersLocked += 1;
   }

   tokenLockInfo(_userAddr, _period, _daysLockedAt, _amount, _tokensIncludingMultiplier, _multiplier, userCountOfLocks[_userAddr]);
   tokenLockInfo1(_userAddr, _period, unlockTime, currentTime, 0, _transactionFeeWhenLocked, userCountOfLocks[_userAddr]);



   userCountOfLocks[_userAddr] += 1;
   usersUsableBalance[_userAddr] -= _amount;
   totalTokensLocked += _amount;
   totalTokensLockedWithMultiplier += _tokensIncludingMultiplier;
   tokenLocked(_userAddr, this, userCountOfLocks[_userAddr], usersUsableBalance[_userAddr], _amount);

   return true;
    }

  function destroyContract() external isTokenHub returns(bool){
      selfdestruct(tokenHubAddr);
      return true;
    }

    //modifier is
  function updateUsersTransactionFeeWhenLocked(uint256 _period, address _userAddr, uint256 _lock, uint256 _currentTransactionFee) external isTokenHub returns(bool){
    require(_period == periodType);
    userLocks[_userAddr][_lock].transactionFeeWhenLocked = _currentTransactionFee;
    updatedTransactionLock(_userAddr, _currentTransactionFee);

    return true;
  }

  function getUsersLockWithMultipler(address _userAddr, uint256 _period, uint256 _lock) public constant returns(uint256, uint256){
    require(_period == periodType);
    return (userLocks[_userAddr][_lock].amountLockedIncludingMultiplier, userLocks[_userAddr][_lock].transactionFeeWhenLocked);
  }

  function getStartingTime(address _userAddr, uint256 _period, uint256 _lock) public constant returns(uint256){
    return userLocks[_userAddr][_lock].startingTime;
  }

  function getCurrentDays() public constant returns(uint256){
    return (creationTime - block.timestamp) / 1 days;
  }

  function getMaxDays() public constant returns(uint256){
    return daysToLast;
  }

  function getTotalTokensLocked() public constant returns(uint256){
    return totalTokensLocked;
  }

  function getTotalTokensLockedWithMultiplier() public constant returns(uint256){
    return totalTokensLockedWithMultiplier;
  }

  function getAddressIndex(address _userAddr) public constant returns (uint256){
    return addressIndex[_userAddr];
  }

  function addRates() public returns(uint256){
    if(periodType == 0){
      rates.push(1043288888888890);
      rates.push(1019577777777780);
      rates.push(995866666666667);
      rates.push(972155555555555);
      rates.push(948444444444444);
      rates.push(924733333333333);
      rates.push(901022222222222);
      rates.push(877311111111111);
      rates.push(853600000000000);
      rates.push(829888888888889);
      rates.push(806177777777778);
      rates.push(782466666666666);
      rates.push(758755555555555);
      rates.push(735044444444444);
      rates.push(711333333333333);
      rates.push(687622222222222);
      rates.push(663911111111111);
      rates.push(640200000000000);
      rates.push(616488888888889);
      rates.push(592777777777778);
      rates.push(569066666666667);
      rates.push(545355555555555);
      rates.push(521644444444444);
      rates.push(497933333333333);
      rates.push(474222222222222);
      rates.push(450511111111111);
      rates.push(426800000000000);
      rates.push(403088888888889);
      rates.push(379377777777778);
      rates.push(355666666666667);
      rates.push(331955555555556);
      rates.push(308244444444444);
      rates.push(284533333333333);
      rates.push(260822222222222);
      rates.push(237111111111111);
      rates.push(213400000000000);
      rates.push(189688888888889);
      rates.push(165977777777778);
      rates.push(142266666666667);
      rates.push(118555555555556);
      rates.push(94844444444445);
      rates.push(71133333333333);
      rates.push(47422222222222);
      rates.push(23711111111111);
    }

  }

}
