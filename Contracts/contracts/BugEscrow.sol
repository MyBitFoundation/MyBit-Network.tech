pragma solidity ^0.4.18;

import './SafeMath.sol';
import './TokenStake.sol';
import './Database.sol';
import './BugBounty.sol'; 

// This contract holds Ether in escrow until the BugBounty or TokenStake contract calls for a payment
contract BugEscrow { 
using SafeMath for *;

  Database public database; 
  uint public balance;


  function BugEscrow(address _database) 
  public { 
    database = Database(_database); 
  }



  // Asset contracts send fee here 
  function receiveTransactionFee() 
  external 
  payable
  requiresEther { 
    balance = balance.add(msg.value);
    LogFeeReceived(msg.sender, msg.value, block.number); 
  }



  modifier whenNotPaused { 
    require(!database.boolStorage(keccak256("pause", this)));
    _; 
  }

  modifier requiresEther {
    require(msg.value > 0);
    _;
  }

  event LogFeeReceived(address indexed _sender, uint indexed _amount, uint indexed _blockNumber); 


}
