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

  //---Transaction fee Modifiers---//
  modifier requiresEther(){}
  modifier settleTransactionRewards(){}

  //------Locking modifiers-------//
  modifier lockingPeriodHadEnded(){}
  modifier hasContractGotBalance(){}
  modifier contractLocked(){}


  //--Locking and transaction modifiers--//
  modifier hasLocked(){}
  modifier limitTokenContracts(){}
  modifier isMyBitHub(){
    require(msg.sender == myBitHub);
    _;
  }

  modifier requiresEther() {
		require(msg.value > 0);
		_;
	}


  function periodContractActive(uint256 _period){
      if(periodContracts[_period] != address(0)){return true;}
      return false;
    }

  //--Contract related--//
  mapping (uint256 => address) public periodContracts;
  mapping (address => uint256) public contractCreationDate;
  mapping (uint256 => uint256) public transactionFeePerPeriodContracts;
  mapping (uint256 => uint256) public periodMultiplier;

  mapping (uint256 => bool) public paymentCycleCompleted;

  uint256[] public contractsStored;

  uint256 public numContracts;

  //----Transaction Related----//
  mapping (address => uint256[]) public userTotalOwedPerContract;
  uint256 public totalOwed;



  //--Transaction fee related---//
  uint256[] public multipliers;
  uint256 public creationHubDate;


  event lockingTokenCreated(uint256 period, uint256 days, uint256 minFund,
     uint256 maxFund, uint256 maxMultipler, _creationTime, tokenContractAddress);

  event contractPaymentCycleSettled();
  event withdrawlSuccessful();



  function TokenHub() isMyBitHub external{
      myBitHub = MyBitHub(msg.sender);
      creationHubDate = block.timestamp;
      numContracts = 0;
  }


  // Should be called after UnlockTokens LockingToken.sol contractTimeMetE event is called(tempramental right now)
  function createLockingTokenContract(uint256 _period, uint256 _days, uint256 _minFund,
    uint256 _maxFund, uint256 _maxMultiplier) isMyBitHub public returns(bool){
      require(numContracts <= 3);
      require(_period == 0 || _period == 1 || _period == 2 || _period == 3);
      require(!periodContractActive(_period));
      LockingToken newLockingToken = new LockingToken(
        _period, _days, _minFund, _maxFund, _maxMultiplier, _creationTime,
        address(0));

      periodMultiplier[_period] = _maxMultiplier;
      periodContracts[_period].push(newLockingToken);
      contractCreationDate[address(newLockingToken)] = block.timestamp;
      numContracts.add(1);
  }
  /*todo;
    -Automatic transfer of myb once the contract has completed,
    -create new token contract one it has been closed,

    -fee withdrawls,
    -getters
  */
  function settleTransactionFee(uint256 _amount) isMyBitHub public returns(bool) {
      require(_amount > 0 && numContracts == 4); // TODO; more validation needed
      for(uint256 _period=0; _period < numContracts; _period++){
        transactionFeePerPeriodContracts[_period] = getFractionalAmount(msg.value,periodMultiplier[_period]);
        totalOwed.add(transactionFeePerPeriodContracts[period]);
        for(uint256 _addrIndex=0; _addrIndex < periodContracts[_period].totalUsersLocked; _addr ++;){
          //go in get the address
          address _currentUserAddr = periodContracts[_period].allAddresses[_addrIndex];
          uint256 _balanceOf = periodContracts[_period].balanceOf[_currentUserAddr];
          uint256 _owed = calculateOwed(periodContracts[_period].totalContractBalance,
                                        balanceOf, transactionFeePerPeriodContracts[_period]);
          totalOwed.add(_owed);
          userTotalOwedPerContract[_currentUserAddr][_period] = _owed;
          if(_addrIndex == periodContracts[_period].totalUsersLocked){
            paymentCycleCompleted[_addrIndex] = true;
            contractPaymentCycleSettled(periodContracts[_period],
                                        transactionFeePerPeriodContracts[_period],
                                        periodContracts[_period].totalUsersLocked,
                                        periodContracts[_period].days,
                                        periodContracts[_period].creationTime,
                                        periodContracts[_period].unlockTime);
          }
        }
      }
    }

  function withdrawFees(uint256 _period, uint256 _amount) public returns(bool){
      require(paymentCycleCompleted(_period));
      require(userTotalOwedPerContract[msg.sender][_period] >= _amount);
      require(userTotalOwedPerContract[msg.sender][_period] <= totalOwed);
      msg.sender.transfer(_amount);
      return true;

    }



  function TokenHub() public {
		myBitHub = MyBitHub(msg.sender);

	}




}
