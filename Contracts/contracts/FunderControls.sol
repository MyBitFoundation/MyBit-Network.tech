pragma solidity ^0.4.19;

import './Database.sol';
import './SafeMath.sol';


contract FunderControls { 

Database public database;



function FunderControls(address _database)
public { 
  database = Database(_database); 
}

function NewOperator(bytes32 _assetID) 
public { 

}

}

