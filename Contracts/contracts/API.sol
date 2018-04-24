pragma solidity 0.4.19;
import './Database.sol';

//-----------------------------------------------------------------------------------------------------------------------
// Standard getters for common variables stored in Database.                                                  
//-----------------------------------------------------------------------------------------------------------------------
contract API { 

  Database public database; 

  function API(address _database)
  public { 
    database = Database(_database); 
  }


  //-----------------------------------------------------------------------------------------------------------------------
  //                                                 Initial Variables  
  //-----------------------------------------------------------------------------------------------------------------------

  function MyBitFoundation()
  public 
  view
  returns (address) { 
    return database.addressStorage(keccak256("MyBitFoundation"));
  }

  function InstallerEscrow()
  public 
  view
  returns (address) { 
    return database.addressStorage(keccak256("InstallerEscrow")); 
  }

  function myBitFoundationPercentage()
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("myBitFoundationPercentage"));
  }

  function installerPercentage()
  public 
  view 
  returns (uint) { 
    return database.uintStorage(keccak256("installerPercentage"));
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                               Contract State 
  //-----------------------------------------------------------------------------------------------------------------------
  function isPaused(address _contractAddress) 
  public
  view
  returns (bool) { 
    return database.boolStorage(keccak256("pause", _contractAddress)); 
  }


  function deployFinished()
  public 
  view 
  returns (bool) { 
    return database.boolStorage(keccak256("deployFinished")); 
  }

  function contractAddress(string _name)
  public 
  view
  returns (address) { 
    return database.addressStorage(keccak256("contract", _name)); 
  }



  //-----------------------------------------------------------------------------------------------------------------------
  //                                                  User Permissions Information 
  //-----------------------------------------------------------------------------------------------------------------------
  function userAccess(address _user)
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("userAccess", msg.sender)); 
  }

  function isOwner(address _user)
  public 
  view
  returns (bool) { 
    return database.boolStorage(keccak256("owner", _user)); 
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                                  Asset Revenue Information 
  //-----------------------------------------------------------------------------------------------------------------------
  function totalReceived(bytes32 _assetID)
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("totalReceived", _assetID));
  }

  function totalPaidToFunders(bytes32 _assetID)
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("totalPaidToFunders", _assetID)); 
  }

  function totalPaidToFunder(address _funder, bytes32 _assetID) 
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("totalPaidToFunder", _assetID, msg.sender));
  }

  //-----------------------------------------------------------------------------------------------------------------------
  // Funding Information 
  //-----------------------------------------------------------------------------------------------------------------------
  function ownershipUnits(address _owner, bytes32 _assetID)
  public 
  view
  returns (uint) { 
    database.uintStorage(keccak256("ownershipUnits", _assetID, _owner)); 
  }

  function amountRaised(bytes32 _assetID)
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("amountRaised", _assetID)); 
  }

  function fundingStage(bytes32 _assetID)
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("fundingStage", _assetID));
  }

  function amountToBeRaised(bytes32 _assetID)
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("amountToBeRaised", _assetID)); 
  }

  function fundingDeadline(bytes32 _assetID)
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("fundingDeadline", _assetID)); 
  }

  //-----------------------------------------------------------------------------------------------------------------------
  // Operator Information 
  //-----------------------------------------------------------------------------------------------------------------------
  function assetOperator(bytes32 _assetID)
  public 
  view
  returns (address) { 
    return database.addressStorage(keccak256("assetOperator", _assetID));
  }

  function operatorPercentage(bytes32 _assetID)
  public
  view 
  returns (uint) { 
    return database.uintStorage(keccak256("operatorPercentage", _assetID)); 
  }

  function lockedForAsset(bytes32 _assetID)
  public
  view 
  returns (uint) { 
    return database.uintStorage(keccak256("lockedForAsset", _assetID));
  }

  function operatorAmountEscrowed(address _operator)
  public
  view 
  returns (uint) { 
    return database.uintStorage(keccak256("operatorAmountEscrowed", msg.sender)); 
  }

  function operatorAmountDeposited(address _operator)
  public
  view 
  returns (uint) { 
    return database.uintStorage(keccak256("operatorAmountDeposited", msg.sender)); 
  }


  //-----------------------------------------------------------------------------------------------------------------------
  //                                                 OracleHub 
  //-----------------------------------------------------------------------------------------------------------------------

  function ethUSDPrice()
  public 
  view 
  returns (uint) { 
    return database.uintStorage(keccak256("ethUSDPrice")); 
  }

  function mybUSDPrice()
  public 
  view 
  returns (uint) { 
    return database.uintStorage(keccak256("mybUSDPrice")); 
  }

  function ethUSDPriceExpiration()
  public 
  view 
  returns (uint) { 
    uint expiration = database.uintStorage(keccak256("ethUSDPriceExpiration")); 
    if (now > expiration) return 0;
    return (expiration - now);
  }

  function mybUSDPriceExpiration()
  public 
  view 
  returns (uint) { 
    uint expiration = database.uintStorage(keccak256("mybUSDPriceExpiration")); 
    if (now > expiration) return 0;
    return (expiration - now);
  }

function ()
public {
  revert();
}





}
