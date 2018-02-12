const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon.stellar.org');
const request = require('request');
var sleep = require('sleep');
StellarSdk.Network.usePublicNetwork();

var user1Secret = '////';
var user1Public = 'GCWQASCJUEC3EINTESFNFHK27HPTTZD35G5GIC3LIFOX6XTXG6FDW535';
var user1KeyPair = StellarSdk.Keypair.fromSecret(user1Secret);

var user2Secret = '////';
var user2Public = 'GB5RN6IG46E4XFANPXDQZL7HXWYWAEY4LB54EQO665Z2HMPIBOLWMAYP';
var user2KeyPair = StellarSdk.Keypair.fromSecret(user2Secret);

var newAsset;
var assetName = 'bose';

createNewAsset(assetName,user1Public);

// Creates a new asset
function createNewAsset(_newAssetName, _issuerPublic){
  console.log('Creating ' + _newAssetName + ' asset.... ');

  newAsset = new StellarSdk.Asset(_newAssetName.toString(), _issuerPublic);
  getAssetType(newAsset);
  getAssetIssuer(newAsset);
  validateTrust(newAsset, '100', user2Public, user2KeyPair);
}


/* ------------------ Transaction Methods------------------ */
/* Once a custom asset has been created, trust has to be validated between
      both the issuer and the receiving party.
*/
function validateTrust(_newAsset, _limit, _publicKey, _keyPair){
  server.loadAccount(_publicKey)
    .then(function(receiver) {
      var transaction = new StellarSdk.TransactionBuilder(receiver)
        .addOperation(StellarSdk.Operation.changeTrust({
          asset: _newAsset,
          limit: _limit.toString()
        }))
        .build();
      transaction.sign(_keyPair);
      console.log('Validating trust between ' + _newAsset.code + ' asset, with ' + _publicKey + '....');
      server.submitTransaction(transaction);
    }).then(function(result){
      sendAsset('15', _newAsset);
    })
};

/* Send an asset from your account to another person. */
function sendAsset(_amountToSend, _assetToSend){
  server.loadAccount(user1Public)
  .then(function(issuer){
    var transaction = new StellarSdk.TransactionBuilder(issuer)
      .addOperation(StellarSdk.Operation.payment({
        destination: user2Public,
        asset: _assetToSend,
        amount: _amountToSend.toString()
      }))
      .build();
    transaction.sign(user1KeyPair);
    console.log('Sending ' + _amountToSend + ' of ' + _assetToSend.code + ' to ' + user2Public + '....');
    server.submitTransaction(transaction);
  })
  .then(function(){
    manageOffer(StellarSdk.Asset.native(), 2, _assetToSend, 2, true);
  })
  .catch(function(error) {
    console.error('Error!', error);
  });
}

function manageOffer(_assetToSell, _qntyToSell, _assetToBuy, _qntyToBuy, _userID){
  var userPublic;
  var userKeyPair;
  if(_userID){userPublic = user2Public;userKeyPair = user2KeyPair;}
  else{userPublic = user1Public;userKeyPair = user1KeyPair;}
  sleep.msleep(7000);
  server.loadAccount(userPublic)
  .then(function(issuer){
    var transaction = new StellarSdk.TransactionBuilder(issuer)
    .addOperation(StellarSdk.Operation.manageOffer({
      selling : _assetToSell,
      buying  : _assetToBuy,
      amount: _qntyToSell.toString(),
      price: {n:_qntyToSell, d:_qntyToBuy},
      offerId: '0'
    }))
    .build();
    transaction.sign(userKeyPair);
    console.log('Creating offer of ' + _qntyToSell + ' ' + _assetToSell.code +
    ' for ' + _qntyToBuy + ' ' + _assetToBuy.code  + ', from address ' + userPublic);
    server.submitTransaction(transaction);
  })
  .then(function(){
    if(_userID){
      manageOffer(_assetToBuy, _qntyToBuy, _assetToSell, _qntyToSell, false);
    }
    else{
      sleep.msleep(6000);
      getAssetBalance(user2Public, assetName);
    }
  })
  .catch(function(error){
    console.log('Error!', error);
  });
}



/* ------------------ PathCallBuilder ------------------ */
/*The Stellar Network allows payments to be made across assets through path payments.
  A path payment specifies a series of assets to route a payment through, from source asset
    (the asset debited from the payer) to destination asset (the asset credited to the payee).

  E.g. Alice wants to give Bob 2 BTC, but does not have the full amount for 2BTC
        in one asset, this accumulates all assets together and sends the 2BTC
        by using all assets in Alices account.
*/
function sendPathCallBuilder(_sourcePublicID, _destination, _destinationAsset, _destinationAmount){
  server.paths(_sourcePublicID, _destination, _destinationAsset, _destinationAmount)
  .call()
  .then(function(r){
    console.log(r);
  })
}

/* ------------------Account Getters------------------ */
// get all the account details
function getAccountDetails(_accountPublicID){
  server.loadAccount(_accountPublicID).then(function(account) {
  var accountID = account.id;
  var accountSeq = account.sequence;
  var accountSubCount = account.subentry_count;
  console.log('Account ID: ' + accountID);
  console.log('Account Sequence #: ' + accountSeq);
  console.log('Account Subentry Count: ' + accountSubCount);
  });
};

//getAllAccountAssetBalances(user2Public);
// get balances of all assets for one account
function getAllAccountAssetBalances(_accountPublicID){
  server.loadAccount(_accountPublicID).then(function(account){
    account.balances.forEach(function(balance) {
      console.log('Name:' + balance.asset_code  + ' Balance:' + balance.balance + ', Asset issuer:' + balance.asset_issuer);
    });
  });
};

// get balance of one specific asset for one account
function getAssetBalance(_accountPublicID, _assetCode){
  server.loadAccount(_accountPublicID).then(function(account){
    account.balances.forEach(function(balance){
      if(balance.asset_code == _assetCode){
        var assetTypeBalance = balance.balance;
        console.log('Name:' + balance.asset_code  + ' Balance:' + balance.balance + ', Asset issuer:' + balance.asset_issuer);
      };
    });
  });
};

/* ------------------Offer Getters------------------ */
/* Returns all offers that an account has made.  e.g. looking up Tempos
    XLM to EURT assets for conversion to euro.
*/
function getAccountOffers(_accountPublicID){
  server.offers('accounts', _accountPublicID)
  .call()
  .then(function(offers){
    console.log(offers);
  });
}

/*
  Get current public offers for one asset for another.
  This requires you to have an instance of the asset, not just the asset code.
*/
function getOrderBook(sellingAsset, buyingAsset){
  server.orderbook(sellingAsset, buyingAsset)
  .call()
  .then(function(r){
    console.log(r);

  });
}



/* ------------------Server Effect Getters------------------ */
/* @param _limit = total results to retrieve
   @param _order = 'desc'(descending) | 'asc' accending
*/
/* This endpoint represents all effects that changed a given account._accountPublicID
  It will return relevant effects from the creation of the account to the current ledger. */
function getEffectsForAccount(_accountPublicID, _limit, _order){
  server.effects()
  .forAccount(_accountPublicID)
  .limit(_limit)
  .order(_limit.toString())
  .call()
  .then(function(r){
    console.log(r);
  });
}
/*Effects are the specific ways that the ledger was changed by any operation.
  This endpoint represents all effects that occurred in the given ledger. */
function getEffectsForLedger(_sequence, _limit, _order){
  server.effects()
  .forAccount(_sequence)
  .limit(_limit)
  .order(_order.toString())
  .call()
  .then(function(r){
    console.log(r);
  });
}
// This endpoint represents all effects that occurred as a result of a given operation.
function getEffectsForOperation(_operationID, _limit, _order){
  server.effects()
  .forOperation(_operationID)
  .limit(_limit)
  .order(_order.toString())
  .call()
  .then(function(r){
    console.log(r);
  });
}

/* ------------------Server Asset Getters------------------ */
// This endpoint filters all assets by the asset issuer.
function getAssetsIssuedByUser(_accountPublicID, _limit, _order){
  server.assets()
  .forIssuer(_accountPublicID)
  .limit(_limit)
  .order(_order.toString())
  .call()
  .then(function(r){
    console.log(r);
  });
}
// This endpoint filters all assets by the asset code.
function getAssetByCode(_assetCode, _limit, _order){
  server.assets()
  .forCode(_assetCode)
  .limit(_limit)
  .order(_order.toString())
  .call()
  .then(function(r){
    console.log(r);
  });
}

/* ------------------Server ledger Getters------------------ */
// Provides information on a single ledger.
function getInfoOnLedger(_sequence, _limit, _order){
  server.ledgers()
  .ledger(_sequence)
  .limit(_limit)
  .order(_order.toString())
  .call()
  .then(function(r){
    console.log(r);
  })
}

// Server load account
function serverLoadAccount(_accountID){
  server.loadAccount(_accountID);
}


/* ------------------Server Transaction Getters------------------ */
function getTransactionsforLedger(_transactionID, _limit, _order){
  server.transactions()
  .forLedger(_transactionID)
  .limit(_limit)
  .order(_order.toString())
  .call()
  .then(function(r){
    console.log(r);
  });
}

function getTransactionsForAccount(_accountPublicID, _limit, _order){
  server.loadAccount(_accountPublicID);
  server.transactions()
  .forAccount(_accountPublicID)
  .limit(_limit)
  .order(_order.toString())
  .call()
  .then(function(r){
    console.log(r);
  });
}


/*  Asset Getters  */
function getAssetCode(_asset){
  return _asset.getCode();
}

function getAssetEquals(_asset){
  var returnFalse = _asset.equals(StellarSdk.Asset.native());
  var returnTrue = _asset.equals(_asset);
}

function getAssetType(_asset){
  return _asset.getAssetType();
}

function getAssetType(_asset){
  console.log(_asset.code + ' is of type ' + _asset.getAssetType());
}

function getAssetIssuer(_asset){
  console.log(_asset.code + ' was issued by ' + _asset.getIssuer());
}

function getXDROfAsset(_asset){
  return _asset.toXDRObject();
}
