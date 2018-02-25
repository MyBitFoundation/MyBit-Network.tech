pragma solidity ^0.4.18;
import './SafeMath.sol';
import './MyBitToken.sol';
import './StakingBank.sol'; 
import './Database.sol'; 



// TODO: prevent users from accidentally transferring in tokens 
// TODO: store previous stakeID as well?? 
contract TokenStaking { 
using SafeMath for *; 


  Database public database; 
  MyBitToken public myBitToken;

  bool internal rentrancy_lock = false; 

  function TokenStaking(address _database, address _myBitToken)
  public { 
    database = Database(_database);
    myBitToken = MyBitToken(_myBitToken);

  }

  // Once users approve TokenStaking contract to transfer tokens, they can stake tokens here/ 
  // User will be added to the end of a linkedlist
  // TODO: Log staking 
  function stakeTokens(uint _amount)
  external
  onlyApproved
  whenNotPaused
  returns (bool) { 
    require (_amount >= database.uintStorage(keccak256("minimumStakeAmount")));
    require (myBitToken.transferFrom(msg.sender, this, _amount));
    uint totalMyBitStaked = database.uintStorage(keccak256("totalMyBitStaked"));
    database.setUint(keccak256("totalMyBitStaked"), totalMyBitStaked.add(_amount));
    uint blockAtWithdraw = database.uintStorage(keccak256("minimumStakeTime")).add(block.number);
    bytes32 ID = keccak256(msg.sender, block.timestamp, _amount);
    database.setAddress(keccak256("staker", ID), msg.sender);
    database.setUint(keccak256("amountStaked", ID), _amount);
    database.setUint(keccak256("blockAtWithdraw", ID), blockAtWithdraw); 
    database.setBytes32(keccak256("nextStaker"), database.bytes32Storage(keccak256("headStaker")));
    database.setBytes32(keccak256("headStaker"), ID);
    return true;  
}



  // Once the minimum staking time has been fulfilled user can withdraw tokens here
  function removeStake(bytes32 _stakeID, bytes32 _previousStakeID) 
  external
  nonReentrant
  onlyApproved
  whenNotPaused
  ownerOfLock(_stakeID, msg.sender)
  stakingFinished(_stakeID)
  returns (bool) {
    require(database.bytes32Storage(keccak256("nextStaker", _previousStakeID)) == _stakeID || _previousStakeID == bytes32(0));    // Make sure the previous stakeID is pointing to this one
    uint thisStakeAmount = database.uintStorage(keccak256("amountStaked", _stakeID));
    bytes32 head = database.bytes32Storage(keccak256("headStaker"));
    myBitToken.transfer(msg.sender, thisStakeAmount);   // If transfer() fails the call will bubble up
    if (_stakeID == head) { head = database.bytes32Storage(keccak256("nextStaker", _stakeID)); }         // If this staker is last in list, make next person the last
    else { database.setBytes32(keccak256("nextStaker", _previousStakeID), database.bytes32Storage(keccak256("nextStaker", _stakeID));  }   // Point previous stakeID ahead one place
    deleteStake(_stakeID);
    LogTokenWithdraw(msg.sender, block.number, _stakeID);    
  }



  // TODO: only be called by bugbounty contract
  function payBugBounty(uint _amount, address _bugFinder)
  nonReentrant
  whenNotPaused
  external { 
    require(msg.sender == database.addressStorage(keccak256("contract", "BugBank"))); 
    uint paidAmount = 0;
    while (paidAmount < _amount) { 
      bytes32 thisID = database.bytes32Storage(keccak256("headStaker")); 
      database.setBytes32(keccak256("headStaker"), database.bytes32Storage(keccak256("nextStaker"), thisID));
      uint thisStakeAmount = database.uintStorage(keccak256("amountStaked", thisID));
      settleLedger(thisStake.staker, thisID);
      if (thisStakeAmount <= _amount.sub(paidAmount)) { 
        paidAmount = paidAmount.add(thisStakeAmount); 
        deleteStake(thisID); 
      }
      else {
        database.setUint(keccak256("amountStaked", thisID), thisStakeAmount.sub(_amount.sub(paidAmount))); 
        paidAmount = _amount; 
      }
    }
    myBitToken.transfer(_bugFinder, _amount); 
  }

  function deleteStake(bytes32 _stakeID)
  internal { 
    database.deleteUint(keccak256("amountStaked", _stakeID));
    database.deleteUint(keccak256("blockAtWithdraw", _stakeID));
    database.deleteAddress(keccak256("staker", _stakeID)); 
    database.deleteBytes32(keccak256("nextStaker", _stakeID)); 
  }


  modifier nonReentrant() {
    require(!rentrancy_lock);
    rentrancy_lock = true;
    _;
    rentrancy_lock = false;
  }

  modifier ownerOfLock(bytes32 _ID, address _owner) { 
    require(database.addressStorage(keccak256("staker", _ID)) == _owner); 
    _;
  }

  modifier stakingFinished(bytes32 _ID) {
    require(database.uintStorage(keccak256("blockAtWithdraw")) >= block.number);
    _;
  }


  modifier anyOwner { 
    require(database.boolStorage(keccak256("owner", msg.sender)));
    _;
  }

  modifier onlyApproved { 
    require(database.uintStorage(keccak256("userAccess", msg.sender)) >= 3);
    _; 
  }
  
  modifier whenNotPaused { 
    require(!database.boolStorage(keccak256("pause", this)));
    _; 
  }

}
