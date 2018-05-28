pragma solidity ^0.4.18;

import './Database.sol';
import './SafeMath.sol';


contract FunderControls { 

Database public database;


// Invariantes: Must always have an operator in place
function FunderControls(address _database)
public { 
  database = Database(_database); 
}


// This will remove current operator and his escrow will be used for new operator
// If successfull operator loses his escrowed tokens & voting period is initiated for new operator. 
function fireOperator(bytes32 _assetID)
external { 

}

function voteToFireOperator(bytes32 _assetID, bool _approve) 
public { 

}


// Vote for 
function voteForNewOperator(bytes32 _assetID, bool _approve)
public { 

}

// Propose new operator to be voted on. Replacement operator will need to escrow tokens.
// This option wouldn't fire the current operator (would get to keep his tokens).
// Initiates voting period for a new operator
function proposeReplacementOperator(bytes32 _assetID, address _newOperator) 
external { 

}

function() 
public { 
  revert(); 
}

}
