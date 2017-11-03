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

  uint256[] public contractsStored;

  uint256 public numContracts;


  //--Transaction fee related---//
  uint256[] public multipliers;
  uint256 public creationHubDate;


  event lockingTokenCreated(uint256 period, uint256 days, uint256 minFund,
     uint256 maxFund, uint256 maxMultipler, _creationTime, tokenContractAddress);


  function TokenHub() isMyBitHub external{
      myBitHub = MyBitHub(msg.sender);
      creationHubDate = block.timestamp;
      numContracts = 0;
  }


  //Accessible if anything wrong with deployed contracts.
  function createLockingTokenContract(uint256 _period, uint256 _days, uint256 _minFund,
    uint256 _maxFund, uint256 _maxMultiplier) isMyBitHub public returns(bool){
      require(numContracts <= 3);
      require(_period == 0 || _period == 1 || _period == 2 || _period == 3);
      require(!periodContractActive(_period));
      LockingToken newLockingToken = new LockingToken(
        _period, _days, _minFund, _maxFund, _maxMultiplier, _creationTime,
        address(0));
      periodMultiplier[_period] = _maxMultiplier;
      periodContracts[_period] = address(newLockingToken);
      contractCreationDate[address(newLockingToken)] = block.timestamp;

      numContracts.add(1);
  }

  function approve(){}

  function changeMultipliers(){}

  function lockTokens(){}
  function withdrawLockedTokens(){}
  function withdrawTransactionFee(){}
  function receieveTransactionFee(){}
  function settleTransactionFee(){}

  function retrieveTransactionFee(uint256 _amount) isMyBitHub {
      require(_amount > 0 && numContracts == 4); // TODO; more validation needed
      // Get multiplier for contract then send correct amount
      for(uint256 period; period <3; period++){
        transactionFeePerPeriodContracts[period].add(
          msg.value.mul((1+periodMultiplier[period]));
        }
    }

  function withdrawTransactionFee(){

  }




  function TokenHub() public {
		myBitHub = MyBitHub(msg.sender);

	}




}
