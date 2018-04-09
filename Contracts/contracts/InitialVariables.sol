pragma solidity ^0.4.19;

import './Database.sol';

// This contract is involved in setting default variables. These will be set before the contracts are deployed, since contracts cannot write to database before the database approves their address
// tODO: add controls for these variables
contract InitialVariables { 

Database public database; 

function InitialVariables(address _database)
public { 
  database = Database(_database);
}

function startDapp(address _myBitFoundation, address _installerEscrow)
external  {
  require(_myBitFoundation != address(0) && _installerEscrow != address(0)); 
  // --------------------Set Local Wallets-------------------------
  database.setAddress(keccak256("MyBitFoundation"), _myBitFoundation);
  database.setAddress(keccak256("InstallerEscrow"), _installerEscrow); 
  // --------------------Asset Creation Variables-----------------
  database.setUint(keccak256("myBitFoundationPercentage"), uint(1));
  database.setUint(keccak256("stakedTokenPercentage"), uint(2));
  database.setUint(keccak256("installerPercentage"), uint(97));
  // ---------------------Access Price in USD--------------------------
  database.setUint(keccak256("accessTokenFee", uint(2)), uint(25));
  database.setUint(keccak256("accessTokenFee", uint(3)), uint(75)); 
  database.setUint(keccak256("accessTokenFee", uint(4)), uint(100)); 


  // --------------------Operator Cost-----------------------
  database.setUint(keccak256("operatorEscrowPercentage"), uint(10)); 

  // -------------Oracle Variables-------------------------
  database.setUint(keccak256("priceUpdateTimeline"), uint(1000));     // TODO: testing number. This is the length of time an Oracle price is valid for
  
  LogInitialized(msg.sender, address(database), block.number);
}

event LogInitialized(address _sender, address _database, uint _blockNumber); 

}
