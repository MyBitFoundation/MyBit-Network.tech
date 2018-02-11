const request = require('request');

/*   ----  Globals  -----



*/

const testEthAddress ='0x58140360D311afb1DedA36320D0928A1bE1d4109';
const testApiKey ='xxx';

const currencies = {
  btc: 'BTC',
  eth: 'ETH',
  ppc: 'PPC',
  drk: 'DRK',
  doge: 'DOGE',
  nmc: 'NMC',
  ftc: 'FTC',
  blk: 'BLK',
  nxt: 'NXT',
  btcd: 'BTCD',
  qrk: 'RDD',
  nbt: 'NBT',
  bts: 'BTS',
  bitusd:'BITUSD',
  xmr: 'XMR'
}


const options = {
  url: '',
  method: '',
  data: '',
  withdrawal:''
};

const urls  = {
  rate:  'https://shapeshift.io/rate/',
  limit: 'https://shapeshift.io/limit/',
  market_info: 'https://shapeshift.io/marketinfo/',
  recent_tx: 'https://shapeshift.io/recenttx/',
  deposit_status: 'https://shapeshift.io/txStat/',
  time_remaining: 'https://shapeshift.io/timeremaining/',
  supported_coins: 'https://shapeshift.io/getcoins',
  apikey_transactions: 'https://shapeshift.io/txbyapikey/',
  transactions_specific_address: 'https://shapeshift.io/txbyaddress/',
  validate_address: 'https://shapeshift.io/validateAddress/',
  normal_transaction: 'https://shapeshift.io/shift'
  }


module.exports = {

  rate: function (req,res) {
    options.url = urls.rate + currencies.xmr + '_' + currencies.eth;
    options.method = 'GET';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })
  },

  limit: function (req,res) {
    options.url = urls.limit + currencies.xmr + '_' + currencies.eth;
    options.method = 'GET';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })

  },

  market_info: function (req,res) {
      options.url = urls.market_info + currencies.xmr + '_' + currencies.eth;
      options.method = 'GET';
      request(options, function (error, response, body) {
          if (!error && response.statusCode == 200) {
              res.send(body);
           }
      })

  },

  recent_tx: function (req,res) {
    options.url = urls.recent_tx + '1';
    options.method = 'GET';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })

  },

  deposit_status: function (req,res) {
    options.url = urls.deposit_status + testEthAddress;
    options.method = 'GET';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })
  },

  create_order: function (req,res) {
    options.url = urls.deposit_status + testEthAddress;
    options.method = 'GET';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })
  },

  time_remaining: function (req,res) {
    options.url = urls.time_remaining + testEthAddress;
    options.method = 'GET';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })
  },

  supported_coins: function (req,res) {
    options.url = urls.supported_coins;
    options.method = 'GET';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })
  },

  apikey_transactions: function (req,res) {
    options.url = urls.apikey_transactions + testApiKey;
    options.method = 'GET';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })
  },

  transactions_specific_address: function (req,res) {
    options.url = urls.transactions_specific_address + testEthAddress + '/' + testApiKey;
    options.method = 'GET';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })
  },

  validate_address: function (req,res) {
    options.url = urls.validate_address + testEthAddress + '/' + currencies.eth;
    options.method = 'GET';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })
  },

  normal_transaction: function (req,res) {
    options.url = urls.normal_transaction;
    options.method = 'POST';
    options.data = {
      'withdrawal': '0x58140360D311afb1DedA36320D0928A1bE1d4109',
      'pair': 'eth_btc',
      'returnAddress': 'BBBBB'};
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })
  },
};
