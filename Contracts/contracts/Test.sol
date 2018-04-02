pragma solidity ^0.4.19;

import './Database.sol';
import './Asset.sol';
import './AssetCreation.sol';
import './ContractManager.sol';
import './FunderControls.sol';
import './InitialVariables.sol';
import './AssetExchange.sol';
import './MyBitToken.sol';
import './OperatorEscrow.sol';
import './OracleHub.sol';
import './Owned.sol';
import './StakingBank.sol';
import './TokenBurn.sol';
import './TokenFaucet.sol';
import './UserAccess.sol';
import './WithdrawalManager.sol';

contract  Test { 

  Database public database;

  function Test(address _database) 
  public { 
    database = Database(_database);
  }

  function setPrices(address _oracleHub) 
  public { 
    OracleHub oracleHub = OracleHub(_oracleHub);
    oracleHub.ethUSDQuery.value(40000000)();
    oracleHub.mybUSDQuery.value(40000000)(); 
  }


  function burnAccessTokens(uint _accessLevel, uint _amount)
  external { 
    TokenFaucet(getAddress("TokenFaucet")).withdraw(_amount);
    MyBitToken(getAddress("MyBitToken")).approve(getAddress("TokenBurn"), _amount);
    setPrices(getAddress("OracleHub"));
    TokenBurn(getAddress("TokenBurn")).burnTokens(_accessLevel); 
  }

  function deposit()
  payable
  public { 
    logpayment(msg.sender, msg.value, block.timestamp);
  }

  function getBalance()
  view 
  returns (uint) { 
    return this.balance; 
  }

  function getAddress(string _name)
  public 
  view 
  returns (address) { 
    return database.addressStorage(keccak256("contract", _name)); 
  }

  function()
  public
  payable { 
    logpayment(msg.sender, msg.value, block.timestamp); 
  }


  event logpayment(address _sender, uint _amount, uint _timestamp); 
}
