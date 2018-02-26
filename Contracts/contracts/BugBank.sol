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
  nonReentrant
  external { 
    uint payment = calculateOwed(msg.sender);
    assert (payment > 0); 
    totalPaidToBugReviewer = database.uintStorage(keccak256("totalPaidToBugReviewer", msg.sender));
    database.setUint(keccak256("totalPaidToBugReviewer", msg.sender), totalPaidToBugReviewer.add(payment));
    msg.sender.transfer(payment); 
  }


  function calculateOwed(address _user)
  public { 
    require(database.boolStorage(keccak256("expertBugReviewer", _user)) || database.boolStorage(keccak256("regularBugReviewer", _user)));
    uint totalVotes = database.uintStorage(keccak256("totalNumberOfBugVotes")); 
    uint totalBugFeeReceived = database.uintStorage(keccak256("bugBountyRewardReceived"));
    uint totalBugVotesUser = database.uintStorage(keccak256("totalBugVotesUser", _user));
    uint totalPaidToBugReviewer = database.uintStorage(keccak256("totalPaidToBugReviewer", _user));
    return totalBugFeeReceived.mul(totalBugVotesUser).div(totalVotes).sub(totalPaidToBugReviewer);
  }

  function addReviewer(address _user, bool _expert)
  external
  anyOwner { 
    if (_expert) { 
      require(!database.boolStorage(keccak256("expertBugReviewer", _user)));
      database.setBool(keccak256("expertBugReviewer", _user)); 
    }
    else { 
      require(!database.boolStorage(keccak256("regularBugReviewer", _user)));
      database.setBool(keccak256("regularBugReviewer", _user)); 
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
      require(database.boolStorage(keccak256("regularBugReviewer", _user)));
      database.deleteBool(keccak256("regularBugReviewer", _user)); 
    }
  }

    function() { 
      revert(); 
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
