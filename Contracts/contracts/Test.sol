pragma solidity ^0.4.19;

import './Database.sol';
import './Asset.sol';
import './AssetCreation.sol';
import './ContractManager.sol';
import './FunderControls.sol';
import './InitialVariables.sol';
import './MarketPlace.sol';
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


  function Test() 
  public { 

  }

  function setPrices(address _oracleHub) 
  external { 
    OracleHub oracleHub = OracleHub(_oracleHub);
    oracleHub.ethUSDQuery.value(40000000);
    oracleHub.mybUSDQuery.value(40000000); 
  }

  function burnAccessTokens(address _myBitToken, address _tokenBurn, uint _accessLevel, uint _amount)
  external { 
    MyBitToken(_myBitToken).approve(_tokenBurn, _amount);
    TokenBurn(_myBitToken).burnTokens(_accessLevel); 
  }

  function getBalance()
  view 
  returns (uint) { 
    return this.balance; 
  }


  function()
  public
  payable { 
    logpayment(msg.sender, msg.value, block.timestamp); 
  }


  event logpayment(address _sender, uint _amount, uint _timestamp); 
}
