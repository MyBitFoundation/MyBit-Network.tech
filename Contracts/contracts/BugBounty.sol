pragma solidity ^0.4.18;

import './SafeMath.sol';
import './TokenStake.sol';
import './BugEscrow.sol';
import './Database.sol';

contract BugBounty { 
  
Database public database; 

struct Bug { 
  int votes; 
  
}

mapping (address => uint) public level; 

function BugBounty(address _database)
public { 
  database = Database(_database);
}


function submitBug()
external { 

}


}
