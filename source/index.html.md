---
title: Smart Contract Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - javascript
  - json

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>

includes:

search: true
---

# Introduction

Welcome to the MyBit Smart Contracts documentation. You can use this documentation to learn more about our awesome Smart Contracts!

# InitialVariables Contract

```javascript
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
  database.setUint(keccak256("priceUpdateTimeline"), uint(1000));

  LogInitialized(msg.sender, address(database), block.number);
}

event LogInitialized(address _sender, address _database, uint _blockNumber);

}
```

```json
[
  {
    "constant": true,
    "inputs": [],
    "name": "database",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "startDapp",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_database",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
]
```

This contract stores values needed for the DaPP to function within the database Smart Contract.

### Address
`0x3B75b5a47668d28949062Bb439Da40a760F3Caaa`

### ABI
`Can be seen within the JSON tab.`


## Initialization

```javascript
function InitialVariables(address _database)
public {
  database = Database(_database);
}
```

This function initializes the contract and initializes the database contract with the passed in database address.

### Calling
`const initializeVariablesInstance = await InitializeVariables.new(databaseInstance.address);`

### Function Parameters

Parameter | Type | Description
--------- | ------- | -----------
database | address | Pass in database address to initialize database contract.

<aside class="success">
Remember — this needs to be called after the database contract has been published!
</aside>

## Function - startDapp

```javascript
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
```

This function stores the required values needed by the DaPP in the database instance.

### Calling
`await initializeVariablesInstance.startDapp(<myBitFoundationAddress>, <installerEscrowAddress>)`


### Function Parameters

Parameter | Type | Description
--------- | ------- | -----------
_myBitFoundation | address | Address of the myBitFoundation, used to send 2% of total funded assets.
_installerEscrow | address | Address of the installerEscrow, used to send 97% of the funds of a fully funded asset.


## Event - LogInitialized

```javascript
event LogInitialized(address _sender, address _database, uint _blockNumber);
```

This event is triggered when startDapp() is called.

### Event Callbacks

Parameter | Type | Description
--------- | ------- | -----------
_sender | address | Address of sender who called startDapp().
_database | address | Address of database instantiation.
_blockNumber | uint | Block number of the Ethereum Blockchain when triggered.
