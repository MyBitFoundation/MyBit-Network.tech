const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon.stellar.org');
const request = require('request');
var sleep = require('sleep');
StellarSdk.Network.usePublicNetwork();

var user2Public = 'GB5RN6IG46E4XFANPXDQZL7HXWYWAEY4LB54EQO665Z2HMPIBOLWMAYP';

var newAsset;

getAssetBalance(user2Public, 'bose');


function getAssetBalance(_accountPublicID, _assetCode){
  server.loadAccount(_accountPublicID).then(function(account){
    account.balances.forEach(function(balance){
      if(balance.asset_code == _assetCode){
        var assetTypeBalance = balance.balance;
        console.log('Public ID: ' + _accountPublicID + ' Name:' + balance.asset_code  + ' Balance:' + balance.balance + ', Asset issuer:' + balance.asset_issuer);
      };
    });
  });
};
