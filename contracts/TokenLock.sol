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

  uint256 public totalTokensLocked;  // not adding multiplier
  uint256 public totalTokensLockedWithMultiplier;
  mapping (address => uint256) tokenBalanceOf;
  mapping (address => uint256) usersUsableBalance;

  mapping(address => Locked[]) public userLocks;
  mapping(address => uint256) public userCountOfLocks;
  uint256 public totalUsersLocked;
  mapping(uint256 => address) public indexOfAddress;

  bool public contractTimeMet;

  modifier isTokenHub(){
    require(msg.sender == tokenHubAddr);
    _;
  }

  modifier ContractTimeMet(){
    require(block.timestamp >= (unlockTime - 25 minutes) &&
            block.timestamp <= (unlockTime + 25 minutes));
            contractTimeMet = true;
            contractTimeMetE(this, totalTokensLocked, totalUsersLocked, daysToLast);
    _;
  }

  event tokenInContract(address _userAddr, uint256 _amount);
  event tokenLocked(address _addr, uint256 _totalBalanceUser, uint256 _amount);
  event contractTimeMetE(address _addr, uint256 _totalTockens, uint256 _totalUsersLocked, uint256 _days);
  event transferFromE(address _from, address _to, uint256 _amount);
  event allTokensTransfered(address _contractAddress, uint256 _contractBalance);

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
    unlockTime = creationTime.add(_period.mul(daysToLast)); //FIX
    myBitTokenAddr = _myBitTokenAddr;
    myBitToken = MyBitToken(_myBitTokenAddr);
    tokenHubAddr = _tokenHubAddr;
    tokenHub = TokenHub(_tokenHubAddr);
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

  function receivepproval(address _addr, uint256 _amount){
    require(myBitToken.transferFrom(_addr, this, _amount));
    usersUsableBalance[_addr] += _amount;
    tokenBalanceOf[_addr] += _amount;
    tokenInContract(_addr, _amount);
  }

  function lockToken(uint256 _period, uint256 _amount) public payable returns(bool){
    require(_period == 0 || _period == 1 || _period == 2 || _period ==3);
    require(usersUsableBalance[msg.sender] >= _amount);
    uint256 currentTime = block.timestamp;
    uint256 _daysLockedAt = (block.timestamp - creationTime) /  1 days;
    uint256 _multiplier = mul((_daysLockedAt - 1) / daysToLast, 10000000);
    uint256 _tokensIncludingMultiplier =  _amount.mul(_multiplier).div(10000000);

    userLocks[msg.sender].push(Locked({
      daysLockedAt : _daysLockedAt,
      amountLocked : _amount,
      amountLockedIncludingMultiplier : _tokensIncludingMultiplier,
      multiplier : _multiplier,
      endingTime : unlockTime,
      startingTime : block.timestamp,
      lastWithdrawl : 0,
      transactionFeeWhenLocked : tokenHub.getCurrentTransactionFee()
      }));
   if(userCountOfLocks[msg.sender] == 0){
     indexOfAddress[totalUsersLocked] = msg.sender;
     totalUsersLocked.add(1);
   }
   userCountOfLocks[msg.sender].add(1);
   usersUsableBalance[msg.sender] -= _amount;
   totalTokensLocked += _amount;
   totalTokensLockedWithMultiplier += _tokensIncludingMultiplier;
    }

  function destroyContract() external isTokenHub returns(bool){
      selfdestruct(tokenHubAddr);
      return true;
    }

    //modifier is
  function updateUsersTransactionFeeWhenLocked(uint256 _period, address _userAddr, uint256 _index, uint _currentTransactionFee) external isTokenHub returns(bool){
    require(_period == periodType);
    userLocks[_userAddr][_index].transactionFeeWhenLocked == _currentTransactionFee;
    return true;
  }

  function getUsersLockWithMultipler(address _userAddr, uint256 _period, uint256 _startingTime) public constant returns(uint256, uint256, uint256){
    require(_period == periodType);
    for(uint256 i = 0; i < userCountOfLocks[_userAddr]; i++){
      if(userLocks[_userAddr][i].startingTime == _startingTime){
        return (userLocks[_userAddr][i].amountLockedIncludingMultiplier,
                userLocks[_userAddr][i].transactionFeeWhenLocked, i);
      }
    }
    return (0,0,0);
  }

  function getAllUsersLock(address _userAddr, uint256 _period) public constant returns(){
    require(_period = periodType);

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

}
