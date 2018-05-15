pragma solidity 0.4.23;
import './Database.sol';

//-----------------------------------------------------------------------------------------------------------------------
// Standard getters for common variables stored in Database.                                                  
//-----------------------------------------------------------------------------------------------------------------------
contract API { 

  Database public database; 

  constructor(address _database)
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

  function contractExists(address _contractAddress)
  public 
  view 
  returns (bool) { 
    return database.boolStorage(keccak256("contract", _contractAddress));
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                                Permissions Information 
  //-----------------------------------------------------------------------------------------------------------------------
  function userAccess(address _user)
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("userAccess", _user)); 
  }

  function isOwner(address _user)
  public 
  view
  returns (bool) { 
    return database.boolStorage(keccak256("owner", _user)); 
  }

  function getFunctionAuthorized(address _contractAddress, address _signer, string _functionName, bytes32 _agreedParameter)
  public 
  view 
  returns (bytes32) { 
    return keccak256(_contractAddress, _signer, _functionName, _agreedParameter); 
  }

  function isFunctionAuthorized(bytes32 _functionAuthorizationHash)
  public 
  view 
  returns (bool) { 
    return database.boolStorage(_functionAuthorizationHash); 
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //                                                  Asset Revenue Information 
  //-----------------------------------------------------------------------------------------------------------------------

  // Total amount of income earned by the asset
  function assetIncome(bytes32 _assetID)
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("assetIncome", _assetID));
  }

  // Amount of income paid to funders
  function totalPaidToFunders(bytes32 _assetID)
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("totalPaidToFunders", _assetID)); 
  }

  // Amount of income already paid to the funder 
  function totalPaidToFunder(bytes32 _assetID, address _funder) 
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("totalPaidToFunder", _assetID, _funder));
  }

  // Returns the amount of WEI owed to asset owner  AmountOwed = (userIncome - userIncomeAlreadyPaid)
  function getAmountOwed(bytes32 _assetID, address _user)
  public
  view
  returns (uint){
    if (ownershipUnits(_assetID, _user) == 0) { return 0; }
    return ((assetIncome(_assetID) * ownershipUnits(_assetID, _user)) / amountRaised(_assetID)) - totalPaidToFunder(_assetID, _user);
  }
  
  //-----------------------------------------------------------------------------------------------------------------------
  //                                             Funding Information 
  //-----------------------------------------------------------------------------------------------------------------------
  function ownershipUnits(bytes32 _assetID, address _owner)
  public 
  view
  returns (uint) { 
    return database.uintStorage(keccak256("ownershipUnits", _assetID, _owner)); 
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
    return database.uintStorage(keccak256("operatorAmountEscrowed", _operator)); 
  }

  function operatorAmountDeposited(address _operator)
  public
  view 
  returns (uint) { 
    return database.uintStorage(keccak256("operatorAmountDeposited", _operator)); 
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
    return database.uintStorage(keccak256("ethUSDPriceExpiration")); 
  }

  function mybUSDPriceExpiration()
  public 
  view 
  returns (uint) { 
    return database.uintStorage(keccak256("mybUSDPriceExpiration")); 
  }

  function ethUSDSecondsRemaining()
  public 
  view 
  returns (uint) { 
    uint expiration = database.uintStorage(keccak256("ethUSDPriceExpiration")); 
    if (now > expiration) return 0;
    return (expiration - now);
  }

  function mybUSDSecondsRemaining()
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
