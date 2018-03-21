
pragma solidity ^0.4.18;

import './Database.sol';
import './MyBitToken.sol';


contract Escrow { 
  MyBitToken public myBitToken;
  Database public database; 

  function Escrow(address _database, address _tokenAddress)
  public { 
    database = Database(_database); 
    myBitToken = MyBitToken(_tokenAddress);
  }

  function calculateTrust()
  external { 
    
  }

  function depositAssetEscrow(uint _amount, bytes32 _assetID)
  external 
  payable { 
    require(myBitToken.transferFrom(msg.sender, this, _amount)); 
    uint depositedAmount = database.uintStorage(keccak256("operatorEscrowAmount", _assetID, msg.sender));
    database.setUint(keccak256("operatorEscrowAmount", _assetID, msg.sender), depositedAmount.add(_amount));
  }

  function receiveIncome(bytes32 _assetID)
  external
  payable { 
    uint operatorIncome = database.uintStorage(keccak256("operatorIncome", msg.sender));
    database.setUint(keccak256("operatorIncome", msg.sender), operatorIncome.add(msg.value)); 
  }


  function() 
  external { 
    revert();
  }

}

