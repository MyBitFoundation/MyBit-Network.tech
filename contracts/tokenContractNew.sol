/*
  - each individual user has their own selection of periods, they automatically go to day 1(1 multiplier per period)
  - many different locks per user
  - total fee once locked
  - adding multiplier of users lock amount to total multiplier amount( )
  -
*/

pragma solidity ^0.4.15;
import './SafeMath.sol';
import './MyBitToken.sol';



contract tokenContractNew{
using SafeMath for *;

  modifier isOwner(){
    require(msg.sender == owner);
    _;
  }

  modifier isAsset(){
    require(msg.sender == asset);
    _;
  }

  modifier userExists(){
    require(userExists[msg.sender]);
    _;
  }

  modifier hasPeriodLock(uint256 _period){
    require(userPeriodLocks[msg.sender][_period].length >0);
    _;
  }

  CSToken public myBitToken;
  address public owner;       // Owner of contract
  address public assetAddr;       // Asset address
  uint256 public totalLocks;  // Contract total locks
  uint256 public activeLocks; // Total active locks
  uint256 public totalTokensLocked;   //Total tokens locked

  mapping (uint256 => uint256) totalLocksPerPeriod;
  mapping (uint256 => Multiplier) multiplierData; // multiplier => totalUsers/totalTokens
  mapping (address => uint256[]) userPeriodLocks;   // address => userLocksPerPeriod
  mapping (address => Period[]) usersLocks;       // address => lockedData
  mapping (address => bool) userExists;           // user has locked
  mapping (address => uint256) usersUsableBalance;  // balance of address tokens
  mapping (address => uint256) balanceOf;
  mapping (uint256 => uint256) multiplierPerPeriod;
  mapping (uint256 => uint256) periodToDays;        // How many days in each period

  struct Period{
    bool active;
    uint256 period;
    Locked[] locks;
  }

  struct Multiplier{
    uint256 totalUsers;
    uint256 totalTokens;
  }

  struct Locked{
    uint256 days;
    uint256 amountLocked;
    uint256 multiplier;
    uint256 endingTime;
    uint256 startingTime;
    uint256 lastWithdrawl;
  }

  function tokenContractNew(address _myBitTokenAddr, address _assetAddr){
    owner = msg.sender;
    myBitToken = CSToken(_myBitTokenAddr);
    asset = _assetAddr;
    multiplierPerPeriod[0] = 0.067; periodToDays[0] = 45;
    multiplierPerPeriod[1] = 0.134; periodToDays[1] = 90;
    multiplierPerPeriod[2] = 0.266; periodToDays[2] = 180;
    multiplierPerPeriod[3] = 0.533; periodToDays[3] = 360;
  }

  // Recieves update that user has given contract access rights to their tokens
  function receiveApproval(address _user, uint256 _amount,
                          address _myBitTokenAddr, bytes _extraData){
    require(myBitToken.transferFrom(_addr, this, _amount));
    userExists[msg.sender] = true;
    usersUsableBalance[msg.sender] += _amount;
    tokenBalanceOf[msg.sender] += _amount;
    tokenBalanceOf[this] += _amount;
  }

  function lockToken(uint256 _period, uint256 _amount) public payable returns(bool){
    require(_period == 0 || _period == 1 || _period == 2 || _period ==3);
    require(msg.value > 0 && msg.value != 0);
    require(userExists[msg.sender]);
    require(usersUsableBalance[msg.sender] >= _amount);

    uint256 currentTime = block.timestamp;

    userLocks[msg.sender][_period] = Period(
      { active : true,
        period : _period,
        locks : Locked(
        {
          days :  periodToDays[_period],
          amountLocked : _amount,
          multiplier : multiplierPerPeriod[_period],
          endingTime : currentTime + (periodToDays[_period] days),
          startingTime : currentTime,
          lastWithdrawl : 0
        })}));

   totalLocksPerPeriod[_period].add(1);
   multiplierData[multiplierPerPeriod[_period]].totalUsers.add(1);
   multiplierData[multiplierPerPeriod[_period]].totalTokens.add(_amount);
   userPeriodLocks[msg.sender][_period].add(1);
   usersUsableBalance[msg.sender] -= _amount;
  }

  function receiveTransactionFee() isAsset external payable{
    require(msg.value > 0);
    //balanceOf[this].add(msg.value);
  }

  function settleTransactionFee(){

  }

  function getUserLockIndex(uint256 _period, uint256 _amount, uint256 _endingTime) public
  constant returns(uint256){
    uint256 _position;
    for(_position = 0; _position < userLocks[msg.sender][_period].locks.length;
      _position ++;){
        if(userLocks[msg.sender][_period].locks[_position].endingTime == _endingTime
          && userLocks[msg.sender][_period].locks[_position].amountLocked == _amount){
          return _position;
        }
      }
  }

  function unlockTokens(uint256 _period, uint256 _amount, uint256 _endingTime) public
  userExists hasPeriodLock(_period) returns(bool){
    uint256 _position = getContractTimeMet(_period, _amount, _endingTime);
    require(myBitToken.transferFrom(this, msg.sender, _amount));

    uint256 multiplierForLock = userLocks[msg.sender][_period].locks[_position].multiplier;

    totalLocksPerPeriod[_period] -= 1;
    multiplierData[multiplierForLock].totalUsers -= 1;
    multiplierData[multiplierForLock].totalTokens -= _amount;
    userPeriodLocks[msg.sender][_period] -= 1;
    tokenBalanceOf[msg.sender] -= _amount;

    uint256 lengthOfLocks = userLocks[msg.sender][_period].locks.length;
    delete userLocks[msg.sender][_period].locks[_position];
    userLocks[msg.sender][_period].locks[_position] = userLocks[msg.sender][_period].locks[lengthOfLocks];
    delete userLocks[msg.sender][_period].locks[lengthOfLocks];
  }

  function withdrawl() payable{}
  function transfer() payable{}
  function getBalance(){}
  function getUser(){}
}
