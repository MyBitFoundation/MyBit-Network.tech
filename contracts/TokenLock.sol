  pragma solidity 0.4.18; // - https://consensys.github.io/smart-contract-best-practices/recommendations/#lock-pragmas-to-specific-compiler-version

  import './SafeMath.sol';
  import './MyBitToken.sol';
  import './TokenHub.sol';

  /*
    TODO; Description.
  */

  contract TokenLock{
    using SafeMath for *;


    function () payable public {
      revert();
    }

    // --------------------------Modifiers-------------------------- //
    modifier isTokenHub(){
      require(msg.sender == tokenHubAddr);
      _;
    }

    modifier ContractTimeMet(){
      require(block.timestamp >= (unlockTime - 25 minutes));
              contractTimeMet = true;
              ContractTimeMetLog(this, totalTokensLocked, totalUsersLocked, daysToLast);
      _;
    }


    // --------------------------Events-------------------------- //
    // - https://consensys.github.io/smart-contract-best-practices/recommendations/#differentiate-functions-and-events

    event TokenInContractLog(address _userAddr, address _tokenAddress, uint256 _amount, uint256 _usersUsableBalance, uint256 _periodType);
    event TokenLockLog(address _userAddr, address _contractAddress, uint256 _totalUserLocks,
      uint256 _totalAvailableBalance, uint256 _amount, uint256 _period);
    event TokenLockInfoLog(address _userAddr, uint256 _period, uint256 _daysLockedAt, uint256 _amount, uint256 _tokensIncludingMultiplier,
        uint256 _multiplier, uint256 _lockCount);
    event TokenLockInfoLog1(address _userAddr, uint256 _period, uint256 _unlockTime, uint256 _startingTime, uint256 _lastWithdrawl, uint256 _transactionFeeWhenLocked,
    uint256 _lockCount);
    event ContractTimeMetLog(address _addr, uint256 _totalTockens, uint256 _totalUsersLocked, uint256 _days);
    event TransferFromLog(address _from, address _to, uint256 _amount);
    event AllTokensTransferedLog(address _contractAddress, uint256 _contractBalance);
    event TokenContractIsBeingDestroyedLog(address _contractAddress);
    event UpdatedTransactionLockLog(address _userAddr, uint256 _currentTransactionFee);


    // --------------------------Variables-------------------------- //
    address public tokenHubAddr;    // TokenHub contract address
    TokenHub public tokenHub;       // TokenHub contract instance

    address public myBitTokenAddr;  // MyBitToken contract address
    MyBitToken public myBitToken;   // MyBitToken contract instance

    uint256 public periodType; 	    // 0-45 days, 1-90 days, 2-180 days, 3-360 days
    uint256 public daysToLast;      // Days this contract should last
    uint256 public minFund;         // For future incase it gets spammed
    uint256 public creationTime;    // Creation time of contract in epoch
    uint256 public maxMultiplier;   // First day multiplier of the locking period.(NOT USED CAN BE REMOVED)
    uint256 public unlockTime;      // Time when this contract period ends and tokens can be unlocked

    uint256 public totalTokensLocked;  // Raw total tokens locked in this locking period contract.
    uint256 public totalTokensLockedWithMultiplier;  // Total of tokens with attached day multiplier when locked
    mapping (address => uint256) tokenBalanceOf;     // Token balance of each user associated with address
    mapping (address => uint256) usersUsableBalance; // Users address associated with usable balance, gets updated when this address is approved for transfers by the MyBitToken contract
    uint256 public totalUsersLocked;                 // Total amount of users locked in this period
    uint256 public nextUnlockIndex;                  // Next index of user to unlock

    mapping(address => Locked[]) public userLocks;   // User address associated with array of their locks for this period
    mapping(address => uint256) public userCountOfLocks;  // Users count of locks
    mapping(uint256 => address) public indexOfAddress;    // Key; the index of their lock, value; user address
    mapping(address => uint256) public addressIndex;      // Key; user address, value; their index

    bool public contractTimeMet;  // If the unlock time has been met

    uint256[] public rates;       // Each day for each period type has a different multiplier rate

    // Each time a user locks, this is created
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


  /*
    TODO; TokenHub address isn't known yet :/ Someone can create one then call tokenhub
    @param _period;     The desired period type for the new contract.
    @@param _days;      How many days this new token locking contract should be active for.
    @param _minFund;    Minimum amount of MyBit tokens required to lock each time.(NOT USED)
    @param _creationTime;  Epoch time when this function was called(COULD CHANGE THIS SO ITS BLOCK.TIMESTAMP IN THIS CONTRACT)
    @param _multiplier; First day multiplier of the locking period.(NOT USED CAN BE REMOVED)
    @param _myBitTokenAddr; Address of MyBitToken contract
    @param _tokenHubAddr;   Address of TokenHub contract
    @modifier isTokenHub; Only callable by TokenHub
    @return Boolean stating whether or not the contract has been created
    @desc Called by tokenhub to create new tokenLocking contract.
  */
  function TokenLock(uint256 _period, uint256 _days,
    uint256 _minFund, uint256 _creationTime, uint256 _multiplier,
    address _myBitTokenAddr, address _tokenHubAddr) public isTokenHub{
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


    /*
      @modifier ContractTimeMet ensure that the contract unlock time has been met.
      @return boolean that all tokens have been unlocked
      @desc Loops through all users and their locks, then transfers them back to
              the user.
      TODO; only allow locked users to do this?
      TODO; reward for doing this
      TODO; Check for overflows!https://consensys.github.io/smart-contract-best-practices/known_attacks/#integer-overflow-and-underflow
    */
    function unlockToken() external ContractTimeMet returns(bool){
        require(contractTimeMet);
        require(totalTokensLocked != 0);

        // Dos with Block Gas Limit prevention - https://consensys.github.io/smart-contract-best-practices/known_attacks/#dos-with-block-gas-limit
        uint256 i = nextUnlockIndex;
        while(i < totalUsersLocked && msg.gas > 200000){
          address _userAddress = indexOfAddress[i];
          require(myBitToken.transferFrom(this, _userAddress, tokenBalanceOf[_userAddress]));
          totalTokensLocked -= tokenBalanceOf[_userAddress];
          TransferFromLog(this, _userAddress, tokenBalanceOf[_userAddress]);
        }
        nextUnlockIndex = i;

        require(totalTokensLocked == 0 && nextUnlockIndex == totalUsersLocked);
        AllTokensTransferedLog(this, totalTokensLocked);
        tokenHub.deleteLockingTokenContract(periodType, daysToLast, maxMultiplier, this);
      }


    /*
      @param _addr;  Approved user address
      @param _amount; Amount approved attached to user address
      @return bool when users balance has been increase
      @desc Gets called by an external event in MyBitToken contract once the user has verified
              that this contract can spend a certain amount of tokens.  Then tokens are transferred
              from the users address to this token contracts control.  An event is then triggered
              which is used to called tokenLock.
    */
    function approvalGiven(address _addr, uint256 _amount) external returns(bool){
      require(myBitToken.transferFrom(_addr, this, _amount));
      usersUsableBalance[_addr] += _amount;
      tokenBalanceOf[_addr] += _amount;
      TokenInContractLog(_addr, this, _amount, usersUsableBalance[_addr], periodType);
    }

    /*
      @param _period;  Validation that this locking contract is the correct period for locking
      @param _amount;  Amount to locking
      @param _userAddr; User address to lock contracts
      @return Boolean true or false if successfully locking
      @desc Locks the users MyBit tokens to this contract address.

      TODO; maybe msg.sender instead of pasing in address, but they dont loose out anyways if
              someone else does it for them.
    */
    function lockToken(uint256 _period, uint256 _amount, address _userAddr) public returns(bool){
      require(_period == 0 || _period == 1 || _period == 2 || _period ==3);
      require(usersUsableBalance[_userAddr] >= _amount);
      uint256 currentTime = block.timestamp;
      uint256 _daysLockedAt = (currentTime - creationTime) /  1 days;
      uint256 _multiplier = rates[_daysLockedAt];
      uint256 _tokensIncludingMultiplier =  (_amount * _multiplier) * 100;
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

     TokenLockInfoLog(_userAddr, _period, _daysLockedAt, _amount, _tokensIncludingMultiplier, _multiplier, userCountOfLocks[_userAddr]);
     TokenLockInfoLog1(_userAddr, _period, unlockTime, currentTime, 0, _transactionFeeWhenLocked, userCountOfLocks[_userAddr]);

     userCountOfLocks[_userAddr] += 1;
     usersUsableBalance[_userAddr] -= _amount;
     totalTokensLocked += _amount;
     totalTokensLockedWithMultiplier += _tokensIncludingMultiplier;

     require(tokenHub.updateTotalTokensLockedWithMultiplier(_tokensIncludingMultiplier, _period));

     TokenLockLog(_userAddr, this, userCountOfLocks[_userAddr], usersUsableBalance[_userAddr], _amount, _period);
     return true;
      }

    /*
      @modifier isTokenHub; Only callable by tokenhub.
      @desc Called by tokenhub once all the tokens have been unlocked to destroy this contract.
      https://consensys.github.io/smart-contract-best-practices/recommendations/#prefer-newer-solidity-constructs
    */
    function destroyContract() external isTokenHub returns(bool){
        selfdestruct(tokenHubAddr);
        TokenContractIsBeingDestroyedLog(this);
        return true;
      }

    /*

    */
    function updateUsersTransactionFeeWhenLocked(uint256 _period, address _userAddr, uint256 _lock, uint256 _currentTransactionFee) external isTokenHub returns(bool){
      require(_period == periodType);
      userLocks[_userAddr][_lock].transactionFeeWhenLocked = _currentTransactionFee;
      UpdatedTransactionLockLog(_userAddr, _currentTransactionFee);

      return true;
    }

    function getUsersAmountLockedIncludingMultipler(address _userAddr, uint256 _period, uint256 _lock) public constant returns(uint256){
      require(_period == periodType);
      return userLocks[_userAddr][_lock].amountLockedIncludingMultiplier;
    }

    function getTransactionFeeWhenLocked(address _userAddr, uint256 _period, uint256 _lock) public constant returns(uint256){
      require(_period == periodType);
      return userLocks[_userAddr][_lock].transactionFeeWhenLocked;
    }

    function getUserLockedArrayLenth(address _userAddr) public constant returns(uint256){
      return userLocks[_userAddr].length;
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

    function getUnlockTime() public constant returns(uint256){
      return unlockTime;
    }

    function getCurrentTime() public constant returns(uint256){
      return block.timestamp;
    }

    function getTotalUsersLocked() public constant returns(uint256){
      return totalUsersLocked;
    }

    function getTokenHubAddress() public constant returns(address){
      return tokenHubAddr;
    }

    function userHasLock(address _user, uint256 _lock) external constant isTokenHub returns(bool){
      require(userLocks[_user][_lock].amountLocked != 0);
      return true;
    }

    //----Testing Alterations---///
    function changeUnlockTime(uint256 _newUnlockTime) external returns(bool){
      unlockTime = _newUnlockTime;
      return true;
    }


    /* TODO; Fix ratessssss!!!!!!
    */
    function addRates() public returns(uint256){
      //if(periodType == 0){
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
      //}

    }

  }
