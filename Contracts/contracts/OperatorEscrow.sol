
pragma solidity ^0.4.18;

import './Database.sol';
import './MyBitToken.sol';
import './SafeMath.sol';



contract OperatorEscrow { 
  using SafeMath for *;
  MyBitToken public myBitToken;
  Database public database; 

  function OperatorEscrow(address _database, address _tokenAddress)
  public { 
    database = Database(_database); 
    myBitToken = MyBitToken(_tokenAddress);
  }

  function depositAssetEscrow(uint _amount)
  external 
  returns (bool) { 
    require(myBitToken.transferFrom(msg.sender, this, _amount)); 
    uint depositedAmount = database.uintStorage(keccak256("operatorEscrowDeposited", msg.sender));
    database.setUint(keccak256("operatorEscrowAmount", msg.sender), depositedAmount.add(_amount));
    return true; 
  }

  function receiveIncome(bytes32 _assetID)
  external
  payable { 
    uint operatorIncome = database.uintStorage(keccak256("operatorIncome", msg.sender));
    address assetOperator = database.addressStorage(keccak256("assetOperator", _assetID)); 
    database.setUint(keccak256("operatorIncome", assetOperator), operatorIncome.add(msg.value)); 
    LogPaymentReceived(_assetID, msg.value, assetOperator); 
  }

  // TODO: Withdraw tokens when no longer operator 
  // TODO: Withdraw WEI payments 


  function() 
  external { 
    revert();
  }

  modifier priceUpdated { 
    require (now < database.uintStorage(keccak256("mybUSDPriceExpiration")));
    _;
  }


  event LogPaymentReceived(bytes32 indexed _assetID, uint indexed _amount, address indexed _operator);
}

