pragma solidity ^0.4.15;

import './SafeMath.sol';
import './TokenLock.sol';
import './Owned.sol';

contract TokenHub is Owned{
  using SafeMath for *;

  function () public {
    revert();
  }


  modifier isOwner(){
    require(msg.sender == owner);
    _;
  }

  modifier isAssetHub(){
    require(assetHubAddr[msg.sender]);
    _;
  }

  modifier isAcceptedAsset(){
    require(asssetAccepted[msg.sender]);
    _;
  }

  modifier isMyBitHub(){
    require(msg.sender == myBitHubAddr);
    _;
  }

  modifier requiresEther() {
		require(msg.value > 0);
		_;
	}

  modifier isEitherOwnerOrThis(){
    require(msg.sender == this ||
            msg.sender == owner);
    _;
  }

/*  modifier withdrawOnDay15(address _periodAddr){
    TokenLock tokenLock = TokenLock(_periodAddr);
    require(tokenLock.getCurrentDays % 15);
    _;
  }*/

  function periodContractNotActive(uint256 _period) public returns(bool){
      if(periodContracts[_period] == address(0x0)){return true;}
      return false;
    }

  address public myBitTokenAddr;
  address public owner;       // Owner of contract
  address public assetAddr;       // Asset address
  address public myBitHubAddr;
  mapping(address => bool) asssetAccepted;

  uint256 public totalLocks;  // Contract total locks
  uint256 public activeLocks; // Total active locks
  uint256 public totalTokensLocked;   //Total tokens locked
  uint256 public totalTransactionFee;



  mapping (address => uint256[][]) public userOwed;
  mapping (address => uint256[]) public withdrawnPeriods;
  mapping (address => uint256[][]) public userTransactionFeeWithrawnAt;

  mapping (uint256 => address) public periodContracts;
  mapping (uint256 => uint256) public periodCreationDate;
  mapping (uint256 => uint256) public periodMultiplier;
  uint256[] public contractsStored;
  uint256 public numContracts;

  mapping (uint256 => uint256) public multiplierPerPeriod;
  mapping (uint256 => uint256) public periodToDays;


  function TokenHub(address _myBitTokenAddr){
    myBitHubAddr = msg.sender;
    myBitTokenAddr = _myBitTokenAddr;
    //assetHubAddr.push(_assetHubAddr);
    multiplierPerPeriod[0] = 67; // 0.067
    periodToDays[0] = 45;
    multiplierPerPeriod[1] = 134;// 0.134
     periodToDays[1] = 90;
    multiplierPerPeriod[2] = 266;// 0.266
    periodToDays[2] = 180;
    multiplierPerPeriod[3] = 533;// 0.533
    periodToDays[3] = 360;
  }

  function addAssetAccepted(address _assetAccepted) isMyBitHub returns(bool){
    asssetAccepted[_assetAccepted] =  true;
    return true;
  }

  function createTokenLockContract(uint256 _period, uint256 _days,
     uint256 _minFund, uint256 _multiplier)
     public isEitherOwnerOrThis returns(bool){
    require(numContracts <= 3);
    require(_period == 0 || _period == 1 || _period == 2 || _period == 3);
    require(periodContractNotActive(_period));

    TokenLock tokenLock = new TokenLock(
      _period, _days, _minFund, block.timestamp, _multiplier,
      myBitTokenAddr, this);

    periodContracts[_period] = address(tokenLock);
    periodCreationDate[_period] = block.timestamp;
    numContracts.add(1);
  }

  function deleteLockingTokenContract(uint256 _period, uint256 _days, uint256 _maxMultiplier,
    address _oldContractAddress){
      require(periodContracts[_period] == msg.sender);
      numContracts -= 1;
      TokenLock destroyThisContract = TokenLock(_oldContractAddress);
      require(destroyThisContract.destroyContract());
      createTokenLockContract(_period, _days, 0, _maxMultiplier);
    }


  function withdrawTransactionFee(uint256 _period, uint256 _startingTime){
    TokenLock tokenLock = TokenLock(periodContracts[_period]);
    uint256 currentDays = tokenLock.getCurrentDays();
    require(currentDays % 15 != 0);///---

    var (transactionFeeOwed, applicableTransactionFee, index) = getUsersShareOfPool(msg.sender, _period, _startingTime);
    uint256 currentDayDenomination = currentDays / 15;

    userOwed[msg.sender][_period][_startingTime] += transactionFeeOwed;
    msg.sender.transfer(userOwed[msg.sender][_period][_startingTime]);
    userOwed[msg.sender][_period][_startingTime] -= transactionFeeOwed;
    tokenLock.updateUsersTransactionFeeWhenLocked(_period, msg.sender, index, totalTransactionFee);
  }

  function getUsersShareOfPool(address _userAddr, uint256 _period, uint256 _startingTime) public constant returns(uint256, uint256, uint256){
    TokenLock tokenLock = TokenLock(periodContracts[_period]);
    var (amountLockedMultiplier, transactionFeeWhenLocked, index) = tokenLock.getUsersLockWithMultipler(_userAddr, _period, _startingTime);

    require(amountLockedMultiplier != 0);
    uint256 applicableTransactionFee = totalTransactionFee - transactionFeeWhenLocked;
    uint256 poolOwnership = amountLockedMultiplier / getTotalTokensLockedWithMultiplier();
    uint256 transactionFeeOwed = applicableTransactionFee * poolOwnership;
    return (transactionFeeOwed, applicableTransactionFee, index);
  }


  function getTotalTokensLockedWithMultiplier() public constant returns(uint256){
    uint256 totalTokensLockedWithMultiplier;
    for(uint256 _period =0; _period < numContracts; _period++){
      TokenLock tokenLock = TokenLock(periodContracts[_period]);
      totalTokensLockedWithMultiplier += tokenLock.getTotalTokensLockedWithMultiplier();
    }
    return totalTokensLockedWithMultiplier;
  }


  function receiveTransactionFee() external isAcceptedAsset payable{
    require(msg.value > 0);
    totalTransactionFee.add(msg.value);
  }

  function getCurrentTransactionFee() external constant returns(uint256){
    return totalTransactionFee;
  }

}
