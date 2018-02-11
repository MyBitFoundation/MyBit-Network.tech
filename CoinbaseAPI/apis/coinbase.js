var Client = require('coinbase').Client;
var request = require('request');
const express = require('express');
const https = require('https');
const http = require('http');
const path = require('path');
const app = express();

//const coinbaseCalls = require('../public/coinbase-calls');

const options = {
  url: '',
  method: '',
  body: '',
  headers: ''
};

const header = {
    'Authorization': '',
};

const transactionHeader ={
  'Content-Type': 'application/json',
  'Authorization': '',
  'CB-2FA-Token': ''//2FA AUTH
}

const metaMaskSend = {
  type : 'send',
  to : '',
  amount: '0.001',
  currency: 'ETH',
  description: ''
}

const urls  = {
  getCodeForAccess: 'https://api.coinbase.com/oauth/token',
  user:  'https://api.coinbase.com/v2/user',
  valid_bank: 'https://api.coinbase.com/v2/payment-methods',
  accounts_for_Transaction: 'https://api.coinbase.com/v2/accounts/',
  transaction: '/transactions',
  revoke_access: 'https://api.coinbase.com/oauth/revoke'
};

var idAddrToken = {accountID:'',accessToken: '', ethWalletId:'', metamaskAddr:'',verificationTxID:'',verificationTxHash:'',name:'',profileLocation:'',email:'',timeZone:'',nativeCurrency:'',countryCode:'',countryName:''};

module.exports = {
  initiateVerification: function (req, res){
    options.url = urls.getCodeForAccess;
    metamaskAddr = res.req.query.metamask;
    var dataStringForAuthToken ='grant_type=authorization_code&code=' + res.req.query.tempCode + '&client_id=X&client_secret=X&redirect_uri=http://127.0.0.1:3000/'    //STRING
    options.method = 'POST';
    options.body = dataStringForAuthToken;
      request(options, function(error, response, body){
          if (!error && response.statusCode == 200) {
                res.send(body);
                var resultJson = JSON.parse(body);
                idAddrToken['_accessToken'] = resultJson.access_token;
                console.log('initiateVerification' + resultJson.access_token);
                getValidBank(resultJson.access_token);
             }
        }
      );
    },
};

function getValidBank(_accessToken){
  options.url = urls.valid_bank;
  header.Authorization = 'Bearer ' + _accessToken;
  options.headers = header;
  options.method = 'GET';

  request(options, function (error, response) {
    var jsonResponse = JSON.parse(response.body)
    var responseData = jsonResponse.data;
    var responseDataLength = responseData.length;
    var index;

    for(index=0; index < responseDataLength; index++){
      if(responseData[index].allow_withdraw){
        console.log('validBank' + responseData[index].allow_withdraw);
        getAccountID(_accessToken);
        }
      }
    });
};


function getAccountID(_accessToken){
  options.url = urls.user;
  header.Authorization = 'Bearer ' + _accessToken;
  options.headers = header;
  options.method = 'GET';
    request(options, function (error, response) {
      var jsonResponse = JSON.parse(response.body);
      var responseData = jsonResponse.data;
      idAddrToken['accountID'] = responseData.id;
      console.log('accountID' + responseData.id);
      getEthWalletID(_accessToken);
    });
};


function getEthWalletID(_accessToken){
 header.Authorization = 'Bearer ' + _accessToken;
 options.headers = header;
 options.method = 'GET';
 options.url = urls.accounts_for_Transaction;
 request(options, function(error,response){
     var jsonResponse = JSON.parse(response.body)
     var responseData = jsonResponse.data;
     var responseDataLength = responseData.length;
     var index;
     for(index=0; index < responseDataLength; index++){
       if(responseData[index].name == 'ETH Wallet'){
         idAddrToken['ethWalletId'] = responseData[index].id;
         console.log('ethwallet' + responseData[index].id);
         postTransactionToMetamask(_accessToken, responseData[index].id);
       }
     };
   });
};


function postTransactionToMetamask(_accessToken, _ethWalletId){
  transactionHeader.Authorization = 'Bearer ' + _accessToken;
  options.headers = transactionHeader;
  options.url = urls.accounts_for_Transaction + _ethWalletId + urls.transaction;
  options.method = 'POST';
  metaMaskSend.description = 'Transaction from coinbase account to metamask addr: ' + metamaskAddr + ' for the amount of: ' + metaMaskSend.amount + 'USD.  Done by MyBit foundation to validate coinbase account';
  metaMaskSend.to = metamaskAddr;
  options.body = JSON.stringify(metaMaskSend);
  request(options, function(error, response){
      var jsonResponse = JSON.parse(response.body)
      var responseData = jsonResponse.data;
      idAddrToken['metamaskAddr'] = metamaskAddr;
      idAddrToken['verificationTxID'] = responseData.id;
      console.log('transactionToMetamask'+ responseData.id);
      getTransactionHashAfterPosted(_accessToken, _ethWalletId, responseData.id); //requires time delay of 10 seconds
    });
  }


function getTransactionHashAfterPosted(_accessToken, _ethWalletId, _verificationTxID){
 options.url = urls.accounts_for_Transaction + _ethWalletId + urls.transaction + '/' + _verificationTxID;
 header.Authorization = 'Bearer ' + _accessToken;
 options.headers = header;
 options.method = 'GET';

 request(options, function (error, response) {
   var jsonResponse = JSON.parse(response.body)
   var responseData = jsonResponse.data;
   idAddrToken['verificationTxHash'] = jsonResponse.network.hash;
   console.log('transactionHash'+jsonResponse.network.hash);
   getAllUserDetails(_accessToken);
 });
};

function getAllUserDetails(_accessToken){
  options.url = urls.user;
  header.Authorization = 'Bearer ' + _accessToken;
  options.headers = header;
  options.method = 'GET';

  request(options, function (error, response) {
      var jsonResponse = JSON.parse(response.body);
      var responseData = jsonResponse.data;
      idAddrToken['name'] = responseData.name;
      idAddrToken['profileLocation'] = responseData.profile_location;
      idAddrToken['email'] = responseData.email;
      idAddrToken['timeZone'] = responseData.time_zone;
      idAddrToken['nativeCurrency'] = responseData.native_currency;
      idAddrToken['countryCode'] = responseData.country.code;
      idAddrToken['countryName'] = responseData.country.name;
      console.log('getAllUserDetails'+responseData.country.name);
      revokeAccess(_accessToken);
    });
  };


function revokeAccess(_accessToken){
 options.url = urls.revoke_access;
 header.Authorization = 'Bearer ' + _accessToken;
 options.headers = header;
 options.method = 'POST';
 options.data = 'token='+ _accessToken;

 request(options, function (error, response, body) {
   console.log('Revoked access');
 });
};
