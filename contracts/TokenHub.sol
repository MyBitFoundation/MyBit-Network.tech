pragma solidity ^0.4.15;
import './SafeMath.sol';
import './DateTime.sol';
import './MyBitHub.sol';
import './Owned.sol';
import './LockingToken.sol';


contract TokenHub is Owned{
using SafeMath for *;

  function () public {
    revert();
  }

  address public owner;
  address public myBitHub;
  LockingToken public lockingToken;


  modifier isMyBitHub(){
    require(msg.sender == myBitHub);
    _;
  }

  modifier requiresEther() {
		require(msg.value > 0);
		_;
	}

  function periodContractNotActive(uint256 _period) public returns(bool){
      if(periodContracts[_period] != address(0)){return true;}
      return false;
    }

  //--Contract related--//
  mapping (uint256 => address) public periodContracts;
  mapping (address => uint256) public contractCreationDate;
  mapping (uint256 => uint256) public transactionFeePerPeriodContracts;
  mapping (uint256 => uint256) public periodMultiplier;
  uint256[] public contractsStored;
  uint256 public numContracts;

  //----Transaction Related----//
  mapping (address => uint256[]) public userTotalOwedPerContract;
  uint256 public totalOwed;
  uint256 public paymentReward;

  //--Transaction fee related---//
  uint256[] public multipliers;
  uint256 public creationHubDate;

  event lockingTokenCreated(uint256 period, uint256 _days, uint256 minFund,
     uint256 maxFund, uint256 maxMultipler, uint256 _creationTime, address tokenContractAddress);

  event contractPaymentCycleSettled(address _contractAddress, uint256 _totalOwed,
                                    uint256 _totalUsersOwed, uint256 _daysTotalContract,
                                    uint256 _creationTime, uint256 _unlockTime);

  event withdrawlSuccessful(address _addrWithdrawl, uint256 _amount);

  function TokenHub() isMyBitHub public{
      myBitHub = MyBitHub(msg.sender);
      creationHubDate = block.timestamp;
      numContracts = 0;
  }

  // Should be called after UnlockTokens LockingToken.sol contractTimeMetE event is called(tempramental right now)
  function createLockingTokenContract(uint256 _period, uint256 _days, uint256 _minFund,
    uint256 _maxFund, uint256 _maxMultiplier) public returns(bool){
      require(numContracts <= 3);
      require(_period == 0 || _period == 1 || _period == 2 || _period == 3);
      require(periodContractNotActive(_period));
      LockingToken newLockingToken = new LockingToken(
        _period, _days, _minFund, _maxFund, _maxMultiplier, block.timestamp,
        address(0), this);

      periodMultiplier[_period] = _maxMultiplier;
      periodContracts[_period] = address(newLockingToken);
      contractCreationDate[address(newLockingToken)] = block.timestamp;
      numContracts.add(1);
  }

  function deleteLockingTokenContract(uint256 _period, uint256 _days, uint256 _maxMultiplier,
    address _oldContractAddress){
      require(periodContracts[_period] == msg.sender);
      LockingToken destroyThisContract = LockingToken(_oldContractAddress);
      require(destroyThisContract.destroyContract());
      createLockingTokenContract(_period, _days, 0, 0, _maxMultiplier);
    }

    /*Called by Asset when fullFunded */
  function receiveTransactionFee(uint256 _amount) public payable returns(bool){
    require(msg.value > 0 && numContracts == 4 && _amount > 0);
    paymentReward = msg.value.div(50);
    totalOwed = msg.value - paymentReward;
    }

  //Needs updating to work with receiveTransactionFee 
  function individualSettleTransactionFee() public returns(bool){
    require(totalOwed > 0 && numContracts == 4);
    for(uint256 _period = 0; _period < numContracts; _period++){
      LockingToken instanceOfLockToken = LockingToken(periodContracts[_period]);
      address _currentUserAddr = instanceOfLockToken.allAddresses(_addrIndex);
      for(uint256 _lock=0; _lock < instanceOfLockToken.userCountOfLocks(_currentUserAddr); _lock++){
        uint256 _amountOfLock = instanceOfLockToken.getUserAmountOfLock(_currentUserAddr, _lock);
        uint256 _multiplierOfLock = instanceOfLockToken.getUserMultiplerOfLock(_currentUserAddr, _lock);
        uint256 _fractionalAmount = totalOwed.getFractionalAmount(_multiplierOfLock);

        uint256 _owed = instanceOfLockToken.totalContractBalance().calculateOwed(
          _amountOfLock, _fractionalAmount);
        userTotalOwedPerContract[_currentUserAddr][_period].add(_owed);
        totalOwed -= _owed;
      }
    }
  }

  /* Works out each individual fractional amount per locked balance for all contracts*/
  function settleTransactionFee() public returns(bool){
    require(totalOwed > 0 && numContracts == 4);
    for(uint256 _period = 0; _period < numContracts; _period++){
      LockingToken instanceOfLockToken = LockingToken(periodContracts[_period]);
      for(uint256 _addrIndex=0; _addrIndex < instanceOfLockToken.totalUsersLocked(); _addrIndex++){
        address _currentUserAddr = instanceOfLockToken.allAddresses(_addrIndex);
        for(uint256 _lock=0; _lock < instanceOfLockToken.userCountOfLocks(_currentUserAddr); _lock++){
          uint256 _amountOfLock = instanceOfLockToken.getUserAmountOfLock(_currentUserAddr, _lock);
          uint256 _multiplierOfLock = instanceOfLockToken.getUserMultiplerOfLock(_currentUserAddr, _lock);
          uint256 _fractionalAmount = totalOwed.getFractionalAmount(_multiplierOfLock);

          uint256 _owed = instanceOfLockToken.totalContractBalance().calculateOwed(
            _amountOfLock, _fractionalAmount);
          userTotalOwedPerContract[_currentUserAddr][_period].add(_owed);
        }

      if(_addrIndex == instanceOfLockToken.totalUsersLocked()){
        contractPaymentCycleSettled(address(instanceOfLockToken),
                                    transactionFeePerPeriodContracts[_period],
                                    instanceOfLockToken.totalUsersLocked(),
                                    instanceOfLockToken.daysToLast(),
                                    instanceOfLockToken.creationTime(),
                                    instanceOfLockToken.unlockTime());
      }
    }
  }
  msg.sender.transfer(paymentReward); // Or split into their balanceOf in each contract
  paymentReward = 0;
  totalOwed = 0;
}


  // This function only does the whole contract multiplier per each user, regardless of what day they put in
  /*function settleTransactionFee() public returns(bool){
    require(totalOwed > 0 && numContracts == 4); //validation that they are owed money
    for(uint256 _period = 0; _period < numContracts; _period++){
      LockingToken instanceOfLockToken = LockingToken(periodContracts[_period]);
        for(uint256 _addrIndex=0; _addrIndex < instanceOfLockToken.totalUsersLocked(); _addrIndex++){
          address _currentUserAddr = instanceOfLockToken.allAddresses(_addrIndex);
          uint256 _balanceOf = instanceOfLockToken.balanceOf(_currentUserAddr);
          uint256 _owed = instanceOfLockToken.totalContractBalance().calculateOwed(
                                        _balanceOf, transactionFeePerPeriodContracts[_period]);
          userTotalOwedPerContract[_currentUserAddr][_period].add(_owed);
            if(_addrIndex == instanceOfLockToken.totalUsersLocked()){
              contractPaymentCycleSettled(address(instanceOfLockToken),
                                          transactionFeePerPeriodContracts[_period],
                                          instanceOfLockToken.totalUsersLocked(),
                                          instanceOfLockToken.daysToLast(),
                                          instanceOfLockToken.creationTime(),
                                          instanceOfLockToken.unlockTime());
                                        }
                                      }
                                    }
    msg.sender.transfer(paymentReward); // Or split into their balanceOf in each contract
    paymentReward = 0;
    totalOwed = 0;
 }
 */


  function withdrawFees(uint256 _period, uint256 _amount) public returns(bool){
      require(userTotalOwedPerContract[msg.sender][_period] >= _amount);
      msg.sender.transfer(_amount);
      withdrawlSuccessful(msg.sender, _amount);
      return true;
    }

  }
