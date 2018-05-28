pragma solidity 0.4.23;

import './Database.sol';

//------------------------------------------------------------------------------------------
// This contract is involved in setting default variables. 
// Must be deployed before platform can be run
//------------------------------------------------------------------------------------------
contract InitialVariables { 

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
  require(database.boolStorage(keccak256("owner", msg.sender)));
  require(_myBitFoundation != address(0) && _installerEscrow != address(0)); 
  // --------------------Set Local Wallets-------------------------
  database.setAddress(keccak256("MyBitFoundation"), _myBitFoundation);
  database.setAddress(keccak256("InstallerEscrow"), _installerEscrow); 
  // --------------------Asset Creation Variables-----------------
  database.setUint(keccak256("myBitFoundationPercentage"), uint(1));
  database.setUint(keccak256("installerPercentage"), uint(99));
  // ---------------------Access Price in USD--------------------------
  database.setUint(keccak256("accessTokenFee", uint(1)), uint(25));
  database.setUint(keccak256("accessTokenFee", uint(2)), uint(75)); 
  database.setUint(keccak256("accessTokenFee", uint(3)), uint(100)); 
  // -------------Oracle Variables-------------------------
  database.setUint(keccak256("priceUpdateTimeline"), uint(86400));     // 24hrs  TODO: lower this for alpha This is the length of time an Oracle price is valid for
  emit LogInitialized(msg.sender, address(database), block.number);
}

// ------------------------------------------------------------------------------------------------  
//  Change MyBitFoundation address
// ------------------------------------------------------------------------------------------------ 
function changeFoundationAddress(address _signer, string _functionName, address _newAddress)
external 
noEmptyAddress(_newAddress) 
anyOwner
multiSigRequired(_signer, _functionName, keccak256(_newAddress)) { 
  database.setAddress(keccak256("MyBitFoundation"), _newAddress); 
}


  
// ------------------------------------------------------------------------------------------------  
//                                                Modifiers 
// ------------------------------------------------------------------------------------------------  

// ------------------------------------------------------------------------------------------------  
//  Verify that sender is an owner  
// ------------------------------------------------------------------------------------------------ 
modifier anyOwner {
  require(database.boolStorage(keccak256("owner", msg.sender)));
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
  require(database.boolStorage(keccak256(this, _signer, _functionName, _keyParam)));
  database.setBool(keccak256(this, _signer, _functionName, _keyParam), false);
  _;
}


//------------------------------------------------------------------------------------------
//                                  Events 
//------------------------------------------------------------------------------------------
event LogInitialized(address _sender, address _database, uint _blockNumber); 

}
