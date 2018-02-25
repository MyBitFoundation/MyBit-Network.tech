pragma solidity ^0.4.18;

import './SafeMath.sol';
import './Database.sol';
import './StakingBank.sol';


// TODO: what to do with escrow for submitting bug 
contract BugBank { 
  using SafeMath for *; 
  
  Database public database; 



  function BugBank(address _database)
  public { 
    database = Database(_database);

  }



  function withdraw()
  external { 

  }


  function calculateOwed()
  public { 

  }

  function addReviewer(address _user, bool _expert)
  external
  onlyOwner { 
    if (_expert) { 
      require (!certifiedReviewer[msg.sender]);
      expertReviewer[msg.sender] = true; 
    }
    else { 
      require (!expertReviewer[msg.sender]); 
      certifiedReviewer[msg.sender] = true; 
    }
  }

  function removeReviewer(address _user, bool _expert)
  external
  onlyOwner { 

  }

function() { 
  revert(); 
}

}
