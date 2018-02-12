const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon.stellar.org');
const request = require('request');
var sleep = require('sleep');
StellarSdk.Network.usePublicNetwork();

var user1Secret = '--';
var user1Public = 'GCWQASCJUEC3EINTESFNFHK27HPTTZD35G5GIC3LIFOX6XTXG6FDW535';
var user1KeyPair = StellarSdk.Keypair.fromSecret(user1Secret);

var eurTAsset;
var eurIssuer = 'GAP5LETOV6YIE62YAM56STDANPRDO7ZFDBGSNHJQIYGGKSMOZAHOOS2S';

createAssetInstance('EURT', eurIssuer);

function createAssetInstance(_assetName, _issuerPublic){
  eurAsset = new StellarSdk.Asset(_assetName.toString(), _issuerPublic);
  validateTrust(eurAsset, '50', user1Public, user1KeyPair);
}

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
      return server.submitTransaction(transaction);
    })
    .then(function(result){
      getOrderBook(_newAsset, StellarSdk.Asset.native());

    })
};

//TODO; Discuss about sequence number fallbacks https://github.com/stellar/horizon/issues/330
function getOrderBook(sellingAsset, buyingAsset){
  server.orderbook(sellingAsset, buyingAsset)
  .limit(1)
  .call()
  .then(function(r){
    r.asks.forEach(function(asks) {
      var rPrice = asks.price;
      var rAmount = asks.amount;
      var initialAssetAmount = rAmount * rPrice;
      var assetPrice = rAmount / initialAssetAmount;
      console.log('BEST RATE;   XLM amount:' + initialAssetAmount + ', EURT:' + rAmount + ' EUR per XLM:' + assetPrice);
      var sellAmount = Number((5*assetPrice).toFixed(10));
      manageOffer(buyingAsset, 5, sellingAsset, sellAmount);
    });
  });
}

function manageOffer(_assetToSell, _qntyToSell, _assetToBuy, _qntyToBuy){
  server.loadAccount(user1Public)
  .then(function(issuer){
    var transaction = new StellarSdk.TransactionBuilder(issuer)
    .addOperation(StellarSdk.Operation.manageOffer({
      selling : _assetToSell,
      buying  : _assetToBuy,
      amount: _qntyToSell.toString(),
      price: {n:parseInt(_qntyToBuy), d:_qntyToSell},
      offerId: '0'
    }))
    .build();
    transaction.sign(user1KeyPair);
    console.log('Creating offer of ' + _qntyToSell + ' ' + _assetToSell.code +
    ' for ' + _qntyToBuy + ' ' + _assetToBuy.code  + ', from address ' + user1Public);
    server.submitTransaction(transaction);
  })
  .then(function(){
    //etBalance(user1Public, _assetToBuy.code);
  });
}


function etBalance(_accountPublicID, _assetCode){
  server.loadAccount(_accountPublicID).then(function(account){
    account.balances.forEach(function(balance){
      if(balance.asset_code == _assetCode){
        var assetTypeBalance = balance.balance;
        console.log('Name:' + balance.asset_code  + ' Balance:' + balance.balance + ', Asset issuer:' + balance.asset_issuer);
      };
    });
  });
};
