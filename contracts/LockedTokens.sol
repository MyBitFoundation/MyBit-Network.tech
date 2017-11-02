pragma solidity ^0.4.11;
import './MyBitHub.sol'; 
import './SafeMath.sol';

// Users will lock their tokens here
contract LockedTokens is Owned{ 
using SafeMath for *; 



struct Lock { 
  uint256 amountLocked; 
  uint256 dateLocked; 
  uint256 dateUnlocked; 
  uint256 multiplier;
  uint256 index;   // indicates its index within all of the users lockedTokens
}


// Can we delete particular structs? 
// TODO: Could we save gas storing these as bytes32
mapping (address => Lock[]) public userLocks; 
address[] public allLockedUsers; 


mapping (address => uint256) public amountOwed; 
uint256 public totalNumberLockedTokens; 

uint256 public balance; 
mapping (uint256 => uint256) public multipliers;
uint256 public lastPaymentCycle; 


address public myBitToken;
address public myBitHub;  

// constructor
function LockedTokens(address _myBitToken) public { 
	myBitHub = msg.sender; 
	myBitToken = _myBitToken; 
  multipliers[45] = 667;
  multipliers[90] = 1334;
  multipliers[180] = 2668; 
  multipliers[360] = 5336;
}

// TODO: User must approve this contract to transfer tokens for them
function lockTokens(uint256 _numDays, uint256 _amount) public returns (bool) { 
  require(multipliers[_numDays] != 0); 
  require(depositTokens(msg.sender, _amount)); // TODO: should this be done before this function is called?? 

  Lock toks = userLocks[msg.sender];   // TODO: initializing array of structs
  toks.amountLocked = _amount; 
  toks.dateLocked = block.timestamp;
  toks.dateUnlocked = block.timestamp; // TODO: convert days to seconds, or input it as seconds originally 
  toks.multiplier = multipliers[_numDays]; 

}


// TODO: If it can be settled on any day, ideally don't want to pay locked tokens that have passed lock date, but need to pay them what they are owed, so
// would need to keep track of the balance every payment received which will cost too much ether in storage costs. 
// TODO: Could just pay people past their expired lock date, as the effect is the same, and the multiplier bonus is capped at one year. Only difference is they can 
// pull out the locked tokens once they are passed expired date, which they will no longer receive payment for. 
// TODO: If payment is settled on pre-determined day, then we have to make sure that it is indeed settled on that day, which is hard to enforce aside from signalling
// for the settlement ourselves
function settlePayments() public returns (bool) { 

}

function receiveTransactionFee() public returns (bool) { 

}

// TODO: Add mybit token interface
function depositTokens(address _sender, uint256 _amount) internal 
    returns (bool) {
      return ERC20Interface(myBitToken).transferFrom(_sender, this, amount);
}

event feeReceived(address _assetFunded, uint256 _amount, uint256 _timestamp);

}
