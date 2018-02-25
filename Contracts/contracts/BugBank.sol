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


  function calculateOwed(bool _expert)
  public { 
    if (_expert) {
      require(database.boolStorage(keccak256("expertBugReviewer", _user)));
      uint totalVotes = getNumberOfVotes(_expert);
    }
    else { 
      require (database.boolStorage(keccak256("certifiedBugReviewer", _user)));
      uint totalVotes = getNumberOfVotes(_expert);
    }
    uint totalBugFeeReceived = database.uintStorage(keccak256("bugBountyRewardReceived"));
    


  }

  function addReviewer(address _user, bool _expert)
  external
  anyOwner { 
    if (_expert) { 
      require(!database.boolStorage(keccak256("expertBugReviewer", _user)));
      database.setBool(keccak256("expertBugReviewer", _user)); 
    }
    else { 
      require(!database.boolStorage(keccak256("certifiedBugReviewer", _user)));
      database.setBool(keccak256("certifiedBugReviewer", _user)); 
    }
  }

  function removeReviewer(address _user, bool _expert)
  external
  anyOwner { 
      if (_expert) { 
      require(database.boolStorage(keccak256("expertBugReviewer", _user)));
      database.deleteBool(keccak256("expertBugReviewer", _user)); 
    }
    else { 
      require(database.boolStorage(keccak256("certifiedBugReviewer", _user)));
      database.deleteBool(keccak256("certifiedBugReviewer", _user)); 
    }
  }

    function() { 
      revert(); 
    }

    // ---------------------------View Only-------------------------------
    function getNumberOfVotes(address _user)
    public 
    view { 
      if (database.boolStorage(keccak256("expertBugReviewer", _user))) { 
        return database.uintStorage(keccak256("totalNumberOfBugVotes", "expert"));
      }
      else { 
        return database.uintStorage(keccak256("totalNumberOfBugVotes"));
      }
    }

    modifier nonReentrant() {
      require(!rentrancy_lock);
      rentrancy_lock = true;
      _;
      rentrancy_lock = false;
    }

    modifier whenNotPaused { 
      require(!database.boolStorage(keccak256("pause", this)));
      _; 
    }

    modifier anyOwner { 
      require(database.boolStorage(keccak256("owner", msg.sender)));
      _;
    }

}
