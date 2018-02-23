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
/*
auth: {
  user : '',//
  pass : ''//
}
*/

const headerRequest = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

const headerEstablished = {
    'Authorization' : 'Bearer 6df35e2533a05b6c3221a15b03bb83931d026633'
};


var accessToken = '';
var refreshToken = '';

// https://api.uphold.com
const urls  = {
  codeForAccess: 'https://api-sandbox.uphold.com/oauth2/token',
  currencyTicker:  'https://api-sandbox.uphold.com/v0/ticker',
  account: 'https://api-sandbox.uphold.com/v0/me/accounts',
  cards: 'https://api-sandbox.uphold.com/v0/me/cards',
  transaction: '/transactions',
  userDetails: 'https://api-sandbox.uphold.com/v0/me'
};

//TODO user details
module.exports = {
    getUserDetails: function (req, res){
      options.url = urls.userDetails;
      options.method = 'GET';
      options.headers = headerEstablished;
      request(options, function(error, response, body){
        if(!error && response.statusCode == 200){
          var resultJson = JSON.parse(body);
          res.send(body);
        }
      })
    },

    getUserVerified: function (req, res){
      options.url = urls.userDetails;
      options.method = 'GET';
      options.headers = headerEstablished;
      request(options, function(error, response, body){
        if(!error && response.statusCode == 200){
          var resultJson = JSON.parse(body);
          res.send(resultJson.verifications);
        }
      })
    },

    getAccessToken: function (req, res){
      options.url = urls.codeForAccess;
      var dataStringForAuthToken = 'code='+res.req.query.tempCode+'&grant_type=authorization_code';
      options.method = 'POST';
      options.headers = headerRequest;
      options.body = dataStringForAuthToken;
      request(options, function(error, response, body){
            if (!error && response.statusCode == 200) {
                var resultJson = JSON.parse(body);
                console.log(resultJson);
                accessToken = resultJson.access_token;
                refreshToken = resultJson.refresh_token;
             }
        }
      );
    },

    getCurrencyTicker: function (req, res){
      options.url = urls.currencyTicker;
      options.method = 'GET';
      request(options, function(error, response, body){
        if(!error && response.statusCode == 200){
          var resultJson = JSON.parse(body);
          res.send(body);
        }
      })
    },

    getAccounts: function (req, res){
      options.url = urls.account;
      options.method = 'GET';
      options.headers = headerEstablished;
      request(options, function(error, response, body){
        if(!error && response.statusCode == 200){
          var resultJson = JSON.parse(body);
          res.send(body);
        }
    })
  },

    getCards: function (req, res){
      options.url = urls.cards;
      options.method = 'GET';
      options.headers = headerEstablished;
      request(options, function(error, response, body){
        if(!error && response.statusCode == 200){
          var resultJson = JSON.parse(body);
          res.send(body);
        }
    })
  },

  getSpecificCardEthAddress: function (req, res){
    options.url = urls.cards;
    options.method = 'GET';
    options.headers = headerEstablished;
    let cardLabel = res.req.query.cardLabel;
    console.log(cardLabel);
    request(options, function(error, response, body){
      if(!error && response.statusCode == 200){
        var resultJson = JSON.parse(body);
        resultJson.forEach(function(card){
          if(card.label == cardLabel){
            res.send(card.address.ethereum);
          }
        })
      }
    })
  },

  getCardID: function (req, res){
    options.url = urls.cards;
    options.method = 'GET';
    options.headers = headerEstablished;
    let cardLabel = res.req.query.cardID;
    request(options, function(error, response, body){
      if(!error && response.statusCode == 200){
        var resultJson = JSON.parse(body);
        resultJson.forEach(function(card){
          if(card.label == cardLabel){
            res.send(card.id);
          }
        })
      }
    })
  },

  getCardTransactions: function (req, res){
    options.url = urls.cards;
    options.method = 'GET';
    options.headers = headerEstablished;
    let cardLabel = res.req.query.cardTransactionsLabel;
    request(options, function(error, response, body){
      if(!error && response.statusCode == 200){
        var resultJson = JSON.parse(body);
        resultJson.forEach(function(card){
          console.log('inside');
          if(card.label == cardLabel){
            options.url = urls.cards + '/'+card.id + urls.transaction;
            console.log(options);
            request(options, function(error, response, body){
              if(!error && response.statusCode == 200){
                var resultJson = JSON.parse(body);
                res.send(body);
                  }
                })
              }
            })
           }
         })
    },
};

/* debug
console.log('Error: ' + error);
console.log('Response: ' + response);
console.log('Body: ' + body);
*/
