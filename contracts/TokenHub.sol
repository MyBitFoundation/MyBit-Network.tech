  pragma solidity 0.4.18; // - https://consensys.github.io/smart-contract-best-practices/recommendations/#lock-pragmas-to-specific-compiler-version

  import './SafeMath.sol';
  import './TokenLock.sol';
  import './Owned.sol';

  /*
    TODO; Description.
  */

  contract TokenHub is Owned{
    using SafeMath for *;

    /*
      TODO; If the tokenlock sends remaining funds it will get reverted?
    */
    function () payable public {
      revert();
    }

    // --------------------------Modifiers-------------------------- //
    modifier isTokenLock(uint256 _period){
      require(msg.sender == periodContracts[_period]);
      _;
    }

    modifier isOwner(){
      require(msg.sender == myBitFoundationAddr);
      _;
    }

    modifier isThis(){
      require(msg.sender == address(this));
      _;
    }

    modifier isThisOrOwner(){
      require(msg.sender == address(this) || msg.sender == myBitFoundationAddr);
      _;
    }

    modifier requiresEther() {
  		require(msg.value > 0);
  		_;
  	}

    modifier stopInEmergency { if (!stopped) _; }
    modifier onlyInEmergency { if (stopped) _; }



    // --------------------------Events-------------------------- //
    // - https://consensys.github.io/smart-contract-best-practices/recommendations/#differentiate-functions-and-events

    event GetTotalTokensLockedWithMultiplierLog(uint256 _totalTokensLockedWithMultiplier, uint256 _period);
    event TransactionFeeRecievedLog(address _from, uint256 _amount, uint256 _totalTransactionFee);
    event WithdrawTransactionFeeLog(address _from, uint256 _period, uint256 _lock, uint256 _transactionFeeOwed);
    event UsersShareOfPoolLog(address _userAddr, uint256 _period, uint256 _lock,
      uint256 amountLockedMultiplier, uint256 transactionFeeWhenLocked, uint256 totalTransactionFee);
    event SecondUsersShareOfPoolLog(uint256 applicableTransactionFee, uint256 totalTokensLockedWithMultiplier,
            uint256 poolOwnership, uint256 transactionFeeOwed, uint256 totalTransactionFee,
            uint256 transactionFeeWhenLocked, uint256 amountLockedMultiplier);
    event TokenContractBeingDeletedLog(address _oldContractAddress);
    event NumOfContractsEventLog(uint256 _numContracts);
    event NewTokenContractCreatedLog(address _contractAddress, uint256 _period);

    event testEvent1(address _userAddr, uint256 _period, uint256 _lock, uint256 _theirAmount, uint256 _transactionFeeOwed);
    event testEvent2(address _userAddr, uint256 _amountOwed, address _contractAddress);
    event testEvent3(address _userAddr, address _contractAddress);

    // --------------------------Emergency-------------------------- //
    bool public stopped;

    // --------------------------Variables-------------------------- //
    address public myBitTokenAddr;              // MyBitToken contract address
    address public myBitFoundationAddr;         // Address of mybit Foundation

    uint256 public totalTokensLocked;           // Total tokens locked
    uint256 public totalTransactionFee;         // Total transaction fee from revenue generating assets
    uint256 public totalTokensLockedWithMultiplier;   //TODO; fix


    mapping (address => mapping(uint256 => mapping(uint256 => uint256))) public userOwed; /*  TODO; FIX, think its too deep so its not working*/
    mapping (address => mapping(uint256 => mapping(uint256 => bool))) public userOwedBool;


    mapping (uint256 => address) public periodContracts;  // Period of locking contract key, associated with the address of said locking contract period
    mapping (address => uint256) public contractPeriods;
    uint256 public numContracts;  // Total number of contracts active
    mapping (uint256 => uint256) public periodContractTokensLockedWithMultiplier;   // Period total amount of tokens locked with multiplier attached


    /*
    @param _myBitTokenAddr; The address of the MyBitToken contract.
    @variable myBitFoundationAddr; The address of the MyBit Foundation.
    @desc Previously was called by the MyBitHub, but after discussion it is better
        for this to be called independently.  Most likely by the MyBit foundation,
        meaning the myBitFoundationAddr will be attached to the MyBitFoundation address;
    TODO; Make sure that this doesn't get called again and cant manipulate the prexisting token locks
    */
    function TokenHub(address _myBitTokenAddr) public{
      myBitFoundationAddr = msg.sender;
      myBitTokenAddr = 0x0; //for testing purposes -- truffle being a bitch!!!!
      //myBitTokenAddr = _myBitTokenAddr;
    }


    /*
      @param _period;     The desired period type for the new contract.
      @param _days;       How many days this new token locking contract should be active for.
      @param _minFund;    Minimum amount of MyBit tokens required to lock each time.(NOT USED)
      @param _multiplier; First day multiplier of the locking period.(NOT USED CAN BE REMOVED)
      @modifier isThisOrOwner; Only callable by the MyBit Foundation and this contract.
      @return Boolean whether or not the new locking contract was created.
      @desc Called intiailly by the MyBitFoundation, then will only be called by this
          contract once a period has been terminated.
      TODO; validate that the contract has been deleted
      TODO; Pass in creation itme or just do it in the block that the tokenlock contract gets mined
    */
    function createTokenLockContract(uint256 _period, uint256 _days,
       uint256 _minFund, uint256 _multiplier)
       public isThisOrOwner returns(bool){ //
      require(numContracts <= 3);
      require(_period == 0 || _period == 1 || _period == 2 || _period == 3);

      TokenLock tokenLock = new TokenLock(
        _period, _days, _minFund, block.timestamp, _multiplier,
        myBitTokenAddr, this);

      periodContracts[_period] = address(tokenLock);
      contractPeriods[address(tokenLock)] = _period;
      numContracts +=1;
      NewTokenContractCreatedLog(address(tokenLock), _period);
      NumOfContractsEventLog(numContracts);
    }


    /*
      @param _period; The contract period type of the locking contract to be deleted.
      @param _days; The locking contracts max amount of days.
      @param _maxMultiplier;  Max multiplier of the locking contract(CAN BE REMOVED!).
      @modifier isTokenLock; Only callable by the address of the specified locking period contract.
      @return Boolean whether or not the specified locking contract has been deleted, and
                that a new locking contract has been created.
      @desc Called by unlockToken in TokenLock once all tokens and funds have exited
          the contract.  This deleted the locking contract, and then creates a new
          locking contract for the deleted period.
      TODO; empty all the remaining funds in the contract(transactionFEEs)
      TODO; empty current userOwed once deleted ???
    */
    function deleteLockingTokenContract(uint256 _period, uint256 _days, uint256 _maxMultiplier,
      address _oldContractAddress) isTokenLock(_period) external returns(bool){
        require(periodContracts[_period] == msg.sender);
        numContracts -= 1;
        TokenContractBeingDeletedLog(msg.sender);
        TokenLock destroyThisContract = TokenLock(_oldContractAddress);
        periodContracts[_period] = address(0);
        require(destroyThisContract.destroyContract());
        periodContractTokensLockedWithMultiplier[_period] = 0;
        createTokenLockContract(_period, _days, 0, _maxMultiplier);
        return true;
      }


      /*
        @param _period; The contract period type of the locking contract that the transaction fee should be withdrawn from.
        @param _lock; The index of lock for the _period that the user wants to withdraw their portion of transaction fee.
        @return Boolean if the transaction has been successfully sent.
        @desc Available to be called by the user every 15 days.  Calculated the users
            pool share, of the applicable transaciton fee to their amount of
            tokens locked applied with the relevant period rate. Updates their owed
            amount then call withdrawTransactionFeeTransfer to withdraw funds.  - https://consensys.github.io/smart-contract-best-practices/recommendations/#favor-pull-over-push-for-external-calls
        TODO; Problem with transfer, doesn't send funds?
      */
    function withdrawTransactionFee(uint256 _period, uint256 _lock) public payable returns(bool){
      TokenLock tokenLock = TokenLock(periodContracts[_period]);
      require(tokenLock.userHasLock(msg.sender, _lock));

      uint256 currentDays = tokenLock.getCurrentDays();
      require(currentDays % 15 != 0);

      uint256 transactionFeeOwed = getUsersShareOfPool(msg.sender, _period, _lock) / 10000;
      userOwedBool[msg.sender][_period][_lock] = true;
      userOwed[msg.sender][_period][_lock] += transactionFeeOwed;

      tokenLock.updateUsersTransactionFeeWhenLocked(_period, msg.sender, _lock, totalTransactionFee);
    }

    /*
      @param _period; The contract period type of the locking contract that the transaction fee should be withdrawn from.
      @param _lock; The index of lock for the _period that the user wants to withdraw their portion of transaction fee.
      @return Boolean if the transaction has been successfully sent.
      @desc User can call this to withdraw their funds.  Order of updating userOwed and transfer;
        https://consensys.github.io/smart-contract-best-practices/known_attacks/#reentrancy
    */
    function withdrawTransactionFeeTransfer(uint256 _period, uint256 _lock) public payable returns(bool){
      require(userOwedBool[msg.sender][_period][_lock]);

      TokenLock tokenLock = TokenLock(periodContracts[_period]);
      require(tokenLock.userHasLock(msg.sender, _lock));

      uint256 currentDays = tokenLock.getCurrentDays();
      require(currentDays % 15 != 0);

      uint256 amountToWithdraw = userOwed[msg.sender][_period][_lock];
      userOwedBool[msg.sender][_period][_lock] = false;
      userOwed[msg.sender][_period][_lock] = 0;


      msg.sender.transfer(amountToWithdraw);
      WithdrawTransactionFeeLog(msg.sender, _period, amountToWithdraw, userOwed[msg.sender][_period][_lock]);
      return true;
    }


    /*
      @param _userAddr; Address of user to determine share of total tokens.
      @param _period; Period type of locking contract to grab amount of locked contracts.
      @param _lock; Lock of specified period to find amount of MyBit locked.
      @modifier isThis; Validiation that only this contract can call this function.
      @return uint256 value of users percentage of total locked tokens, returned to withdrawTransactionFee function.
      @desc; Calculates how much the users % of the total applicable transaction fee.
      Variables;
        amountLockedMultiplier; Total tokens the user has locked with the applied rate for period+day when locked.
        transactionFeeWhenLocked; The transaction fee at the time when the user locked.
        currentTransactionFee; The current transaction fee at this moment in time.
        applicableTransactionFee; The transaction fee that the user can obtain a portion of.(transactionFeeWhenLocked - currentTransactionFee);
        totalTokensLockedWithMultiplier;  Total amount of tokens including the rate throughout the 4 different periods added up together.
        poolOwnership;  How much % the users amountLockedMultiplier is of the totalTokensLockedWithMultiplier.
        transactionFeeOwed; Take the poolOwnership % and multiply it by the applicableTransactionFee.

      Example;
        AmountLockedMultipler = 100; transactionFeeWhenLocked = 1000; totalTransactionFee = 1500; totalTokensLockedWithMultiplier = 1000;

        applicableTransactionFee; 1500 - 1000   = 500
        poolOwnership; (100*1000000000)         = 100000000000  / 1000        = 100000000 (10%)
        transactionFeeOwed; (500 * 100000000)   = 50000000000   / 1000000000  = 50
    */
    function getUsersShareOfPool(address _userAddr, uint256 _period, uint256 _lock) internal isThis returns(uint256){
      TokenLock tokenLock = TokenLock(periodContracts[_period]);
      uint256 transactionFeeOwed;
      uint256 applicableTransactionFee;
      uint256 amountLockedMultiplier = tokenLock.getUsersAmountLockedIncludingMultipler(_userAddr, _period, _lock);
      uint256 transactionFeeWhenLocked = tokenLock.getTransactionFeeWhenLocked(_userAddr, _period, _lock);

      require(amountLockedMultiplier != 0);
      totalTransactionFee = 1500000000000000000; //FOR TESTING purposes
      require(totalTransactionFee > transactionFeeWhenLocked);

      applicableTransactionFee = totalTransactionFee - transactionFeeWhenLocked;

      uint256 poolOwnership = (amountLockedMultiplier*1000000000) / totalTokensLockedWithMultiplier; //Times by 1000000000 to deal with small percentages
      transactionFeeOwed = (applicableTransactionFee * poolOwnership) / 1000000000 ;

      testEvent1(_userAddr, totalTokensLockedWithMultiplier, amountLockedMultiplier, poolOwnership, transactionFeeOwed);
      return transactionFeeOwed;
    }


    /*
      @return Bolean successful transaction fee recieved
      @desc Accepts transaction fee from assets, but for now anyone can send ether to this.
      @modifier requiresEther; make sure that msg.value is greater than 0.
      TODO; maybe validate that the person sending the transaction is an asset, or could just accept it from anyone.
    */
    function receiveTransactionFee() public payable requiresEther returns(bool){ //isAcceptedAsset
      totalTransactionFee += msg.value;
      TransactionFeeRecievedLog(msg.sender, msg.value, totalTransactionFee);
      return true;
    }

    /*
      @param _amount; Amount to update total tokens locked with multiplier with
      @param _period; Period that the amount is coming from
      @return Bolean successfully updated
      @desc Updates total tokens locked with multiplier.
    */
    function updateTotalTokensLockedWithMultiplier(uint256 _amount, uint256 _period)
    isTokenLock(_period) external returns(bool){
      totalTokensLockedWithMultiplier += _amount;
      periodContractTokensLockedWithMultiplier[_period] += _amount;
      return true;
    }


    // --------------------------Getters-------------------------- //
    function getCurrentTransactionFee() external constant returns(uint256){
      return totalTransactionFee;
    }

    function getMyBitTokenAddress() public constant returns(address){
      return myBitTokenAddr;
    }

    function getNumberOfContracts() public constant returns(uint256){
      return numContracts;
    }



    /*
      @modifier isThis; Only usable by this contract.
      @return uint256 of the total value of tokens locked with multiplier throughout the 4 different locking period contracts.
      @desc Returns the total value of locked mybit tokens with the multiplier for all 4 locking period contracts.
      TODO; whenever a new person locks in locking contract just call a function here to update totalTokensLockedWithMultiplier
    */
  /*function getTotalTokensLockedWithMultiplier() internal isThis returns(uint256){
    uint256 totalThisInstance;
    for(uint256 _period =0; _period < numContracts; _period++){
      TokenLock tokenLock = TokenLock(periodContracts[_period]);
      totalThisInstance += tokenLock.getTotalTokensLockedWithMultiplier();
    }
    totalTokensLockedWithMultiplier = totalThisInstance;
    return totalTokensLockedWithMultiplier;
  }*/

    /*function killConrtact() public isOwner returns(bool){
      require(selfdestruct(this));
      return true;
    }*/
  }
