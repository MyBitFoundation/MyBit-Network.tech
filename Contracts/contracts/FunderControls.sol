pragma solidity ^0.4.19;

import './Database.sol';
import './SafeMath.sol';


contract FunderControls { 

Database public database;



function FunderControls(address _database)
public { 
  database = Database(_database); 
}


function voteForNewOperator(bytes32 _assetID, bool _approve)
public { 

}

function voteToFireOperator(bytes32 _assetID, bool _approve) { 

}

// Propose new operator to be voted on. New operator will retain old operators escrow
function proposeNewOperator(bytes32 _assetID, address _newOperator) 
external { 

}

// Propose new operator to be voted on. Replacement operator will need to escrow tokens
function proposeReplacementOperator(bytes32 _assetID, address _newOperator) 
external { 

}

// This will remove current operator and his escrow will be used for new operator
function fireOperator(bytes32 _assetID)
external { 

}

}
