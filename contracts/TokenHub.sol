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

  /*modifier isAssetHub(){
    require(assetHubAddr[msg.sender]);
    _;
  }*/

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
    require(
            msg.sender == owner);
    _;
  }

/*  modifier withdrawOnDay15(address _periodAddr){
    TokenLock tokenLock = TokenLock(_periodAddr);
    require(tokenLock.getCurrentDays % 15);
    _;
  }*/

  event transactionFeeRecieved(address _from, uint256 _amount, uint256 _totalTransactionFee);
  event withdrawTransactionFeeE(address _from, uint256 _period, uint256 _lock, uint256 _transactionFeeOwed);
  event usersShareOfPoolE(address _userAddr, uint256 _period, uint256 _lock,
    uint256 amountLockedMultiplier, uint256 transactionFeeWhenLocked);

  event secondUsersShareOfPoolE(uint256 applicableTransactionFee, uint256 totalTokensLockedWithMultiplier,
          uint256 poolOwnership, uint256 transactionFeeOwed, uint256 totalTransactionFee,
          uint256 transactionFeeWhenLocked, uint256 amountLockedMultiplier);

  function periodContractNotActive(uint256 _period) public returns(bool){
      if(periodContracts[_period] == address(0x0)){return true;}
      return false;
    }

  address public myBitTokenAddr;
  address public owner;       // Owner of contract
  address public assetAddr;       // Asset address
  address public myBitHubAddr;
  mapping(address => bool) asssetAccepted;

  uint256 public transferAmountTest;

  uint256 public totalLocks;  // Contract total locks
  uint256 public activeLocks; // Total active locks
  uint256 public totalTokensLocked;   //Total tokens locked
  uint256 public totalTransactionFee;



  mapping (address => mapping(uint256 => mapping(uint256 => uint256))) public userOwed;
  mapping (address => uint256[]) public withdrawnPeriods;
  mapping (address => uint256[][]) public userTransactionFeeWithrawnAt;

  mapping (uint256 => address) public periodContracts;
  mapping (uint256 => uint256) public periodCreationDate;
  mapping (uint256 => uint256) public periodMultiplier;
  uint256[] public contractsStored;
  uint256 public numContracts;



  function TokenHub(address _myBitTokenAddr){
    myBitHubAddr = msg.sender;
    myBitTokenAddr = _myBitTokenAddr;
    owner = this;
  }

  /*function addAssetAccepted(address _assetAccepted) isAssetHub returns(bool){
    asssetAccepted[_assetAccepted] =  true;
    return true;
  }*/

  //isEitherOwnerOrThis
  function createTokenLockContract(uint256 _period, uint256 _days,
     uint256 _minFund, uint256 _multiplier)
     public  returns(bool){
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


  function withdrawTransactionFee(uint256 _period, uint256 _lock) public returns(bool){
    TokenLock tokenLock = TokenLock(periodContracts[_period]);
    uint256 currentDays = tokenLock.getCurrentDays();
    require(currentDays % 15 != 0);///---

    var (transactionFeeOwed) = getUsersShareOfPool(msg.sender, _period, _lock);

    userOwed[msg.sender][_period][_lock] += transactionFeeOwed;
    msg.sender.transfer(userOwed[msg.sender][_period][_lock]);
    withdrawTransactionFeeE(msg.sender, _period, _lock, userOwed[msg.sender][_period][_lock]);
    userOwed[msg.sender][_period][_lock] -= transactionFeeOwed;

    tokenLock.updateUsersTransactionFeeWhenLocked(_period, msg.sender, _lock, totalTransactionFee);
  }

  function getUsersShareOfPool(address _userAddr, uint256 _period, uint256 _lock) public constant returns(uint256){
    TokenLock tokenLock = TokenLock(periodContracts[_period]);
    var (amountLockedMultiplier, transactionFeeWhenLocked) = tokenLock.getUsersLockWithMultipler(_userAddr, _period, _lock);

    //usersShareOfPoolE(_userAddr,_period,_lock, amountLockedMultiplier, transactionFeeWhenLocked);

    require(amountLockedMultiplier != 0);
    uint256 applicableTransactionFee;
    if(totalTransactionFee == transactionFeeWhenLocked){
      applicableTransactionFee = transactionFeeWhenLocked;
    }
    else{
      applicableTransactionFee = totalTransactionFee - transactionFeeWhenLocked;
    }
    uint256 totalTokensLockedWithMultiplier =  getTotalTokensLockedWithMultiplier();
    uint256 poolOwnership = (amountLockedMultiplier*1000000000) / totalTokensLockedWithMultiplier;
    uint256 transactionFeeOwed = (applicableTransactionFee * poolOwnership) / 1000000000 ;


    secondUsersShareOfPoolE(applicableTransactionFee, totalTokensLockedWithMultiplier, poolOwnership, transactionFeeOwed,
      totalTransactionFee, transactionFeeWhenLocked, amountLockedMultiplier);

    return transactionFeeOwed;
  }


  function getTotalTokensLockedWithMultiplier() public constant returns(uint256){
    uint256 totalTokensLockedWithMultiplier;
    for(uint256 _period =0; _period < numContracts; _period++){
      TokenLock tokenLock = TokenLock(periodContracts[_period]);
      totalTokensLockedWithMultiplier += tokenLock.getTotalTokensLockedWithMultiplier();
    }
    return tokenLock.getTotalTokensLockedWithMultiplier();
  }


  function receiveTransactionFee() external payable returns(bool){ //isAcceptedAsset
    require(msg.value > 0);
    totalTransactionFee += msg.value;
    transactionFeeRecieved(msg.sender, msg.value, totalTransactionFee);
    return true;
  }

  function getCurrentTransactionFee() external constant returns(uint256){
    return totalTransactionFee;
  }

}
