pragma solidity 0.4.24;

import './Database.sol';
import './SafeMath.sol'; 

//------------------------------------------------------------------------------------------
// This contract is involved in setting default variables.
// Must be deployed before platform can be run
//------------------------------------------------------------------------------------------
contract InitialVariables {
  using SafeMath for uint; 

Database public database;

//------------------------------------------------------------------------------------------
// Constructor: Initialize Database
//------------------------------------------------------------------------------------------
constructor(address _database)
public {
  database = Database(_database);
}
//------------------------------------------------------------------------------------------
// Initialized important variables
//------------------------------------------------------------------------------------------
function startDapp(address _myBitFoundation, address _installerEscrow)
external  {
  require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
  require(_myBitFoundation != address(0) && _installerEscrow != address(0));
  // --------------------Set Local Wallets-------------------------
  database.setAddress(keccak256(abi.encodePacked("MyBitFoundation")), _myBitFoundation);
  database.setAddress(keccak256(abi.encodePacked("InstallerEscrow")), _installerEscrow);
  // --------------------Asset Creation Variables-----------------
  database.setUint(keccak256(abi.encodePacked("myBitFoundationPercentage")), uint(1));
  database.setUint(keccak256(abi.encodePacked("installerPercentage")), uint(99));
  // ---------------------Access Price in USD--------------------------
  database.setUint(keccak256(abi.encodePacked("accessTokenFee", uint(1))), uint(25).mul(10**21));    // Add 18 decimals * 10^3 for MYB price 
  database.setUint(keccak256(abi.encodePacked("accessTokenFee", uint(2))), uint(75).mul(10**21));    // Add 18 decimals * 10^3 for MYB price 
  database.setUint(keccak256(abi.encodePacked("accessTokenFee", uint(3))), uint(100).mul(10**21));   // Add 18 decimals * 10^3 for MYB price 
  // -------------Oracle Variables-------------------------
  database.setUint(keccak256(abi.encodePacked("priceUpdateTimeline")), uint(86400));     // Market prices need to be updated every 24 hours
  emit LogInitialized(msg.sender, address(database));
}

// ------------------------------------------------------------------------------------------------
//  Change MyBitFoundation address
// ------------------------------------------------------------------------------------------------
function changeFoundationAddress(address _signer, string _functionName, address _newAddress)
external
noEmptyAddress(_newAddress)
anyOwner
multiSigRequired(_signer, _functionName, keccak256(abi.encodePacked(_newAddress))) 
returns (bool) {
  database.setAddress(keccak256(abi.encodePacked("MyBitFoundation")), _newAddress);
  return true; 
}

// ------------------------------------------------------------------------------------------------
//  Change InstallerEsrow address
// ------------------------------------------------------------------------------------------------
function changeInstallerEscrowAddress(address _signer, string _functionName, address _newAddress)
external
noEmptyAddress(_newAddress)
anyOwner
multiSigRequired(_signer, _functionName, keccak256(abi.encodePacked(_newAddress))) 
returns (bool) {
  database.setAddress(keccak256(abi.encodePacked("InstallerEscrow")), _newAddress);
  return true; 
}

// ------------------------------------------------------------------------------------------------
//  Change MyBitFoundation address
// ------------------------------------------------------------------------------------------------
function changeAccessTokenFee(address _signer, string _functionName, uint _accessLevel, uint _newPrice)
external
anyOwner 
multiSigRequired(_signer, _functionName, keccak256(abi.encodePacked(_accessLevel, _newPrice))) 
returns (bool) {
  database.setUint(keccak256(abi.encodePacked("accessTokenFee", _accessLevel)), _newPrice);
  return true;
}

// ------------------------------------------------------------------------------------------------
//  Set 24hr prices
// ------------------------------------------------------------------------------------------------
function setDailyPrices(uint _ethPrice, uint _mybPrice)
external 
anyOwner 
returns (bool) { 
    uint priceExpiration = database.uintStorage(keccak256(abi.encodePacked("priceUpdateTimeline"))).add(now);
    emit LogPriceUpdate(database.uintStorage(keccak256(abi.encodePacked("ethUSDPrice"))),database.uintStorage(keccak256(abi.encodePacked("mybUSDPrice")))); 
    database.setUint(keccak256(abi.encodePacked("ethUSDPrice")), _ethPrice);
    database.setUint(keccak256(abi.encodePacked("mybUSDPrice")), _mybPrice);
    database.setUint(keccak256(abi.encodePacked("priceExpiration")), priceExpiration);
    return true; 
}

function changePriceUpdateTimeline(uint _newPriceExpiration)
external
anyOwner
returns (bool) { 
    database.setUint(keccak256(abi.encodePacked("priceUpdateTimeline")), _newPriceExpiration);
    return true;

}


// ------------------------------------------------------------------------------------------------
//                                                Modifiers
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
//  Verify that sender is an owner
// ------------------------------------------------------------------------------------------------
modifier anyOwner {
  require(database.boolStorage(keccak256(abi.encodePacked("owner", msg.sender))));
  _;
}

// ------------------------------------------------------------------------------------------------
//  Verify address isn't null
// ------------------------------------------------------------------------------------------------
modifier noEmptyAddress(address _contract) {
  require(_contract != address(0));
  _;
}

// ------------------------------------------------------------------------------------------------
//  Verify that function has been signed off by another owner
// ------------------------------------------------------------------------------------------------
modifier multiSigRequired(address _signer, string _functionName, bytes32 _keyParam) {
  require(msg.sender != _signer);
  require(database.boolStorage(keccak256(abi.encodePacked(address(this), _signer, _functionName, _keyParam))));
  database.setBool(keccak256(abi.encodePacked(address(this), _signer, _functionName, _keyParam)), false);
  _;
}


//------------------------------------------------------------------------------------------
//                                  Events
//------------------------------------------------------------------------------------------
event LogInitialized(address _sender, address _database);
event LogPriceUpdate(uint _oldETHPrice, uint _oldMYBPrice); 

}
