const request = require('request');

/*   ----  Globals  ----- */

const api_key = '7f878074f09f4f673554f30be51b6a0d';
const coin_address = 'mwCwTceJvYV27KXBc3NJZys6CjsgsoeHmf';

const currencies = {
  btc: 'BTC',
  eth: 'ETH',
  ltc: 'LTC',
  xrp: 'XRP',
  bch: 'BCH',
  dash: 'DASH',
  etc: 'ETC',
  xmr: 'XMR',
  zec: 'ZEC',
  btg: 'BTG',
  doge: 'DOGE',
  qtum: 'QTUM',
  zen: 'zen',
  dgb: 'dgb',
  gnt: 'gnt',
  omg: 'OMG',
  rep: 'REP',
  bat: 'BAT'
}


const options = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'EVERCOIN-API-KEY': api_key
  },
  body: ''
};

const urls  = {
  limit:  'https://test.evercoin.com/v1/limit/',
  validate_address: 'https://test.evercoin.com/v1/validate/',
  get_coins: 'https://test.evercoin.com/v1/coins/',
  get_price: 'https://test.evercoin.com/v1/price/',
  get_price_array: 'https://test.evercoin.com/v1/price/',
  create_order: 'https://test.evercoin.com/v1/order',
  get_status_order: 'https://test.evercoin.com/v1/status/'
}


module.exports = {
  limit: function (req, res) {
    /*
    This service returns the current deposit min. and max. limits for given exchange pair.
    If more than the maximum is received, the deposit will be automatically refunded;
    it will be sent to the refund address.   If less than minimum is received, the
    order will be terminated because it is too small even for refunding.
    */
    options.url = urls.limit + currencies.btc + '-' + currencies.eth;

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })
  },
  validate_address: function (req, res) {
    /*
    This service checks if an address for a given coin type is valid. Invalid
    coin address should not be used in an exchange. Validate the addresses before c
    reating a new exchange order.
    */
    options.url = urls.validate_address + currencies.btc + "/" + coin_address;
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })

  },
  get_coins: function (req, res) {
    /*
    This service returns available coins to exchange. Each coin has from and to
    availability. For example, if the exchange is from BTC to ETH, make sure BTC
    has 'from' availability and ETH has 'to' availability.
    */
    options.url = urls.get_coins;
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    })
  },
  get_price: function (req, res) {
    /*
    This service returns the price and its signature for a given exchange pair
    and amount. The given price will be valid for 1 minute to make an order.
    The response of this call has to be used with exact values to create a new
    order. Do not forget to include the 'signature' value when making an order
    as it is used to validate the price.
    */
    const body = {
      depositCoin : currencies.ltc,
      destinationCoin : currencies.eth,
      depositAmount : "1",
    };

    options.url =  urls.get_price;
    options.method = 'POST';
    options.body = JSON.stringify(body);


    request(options, function (error, response, body) {
      console.log("------------------");
      console.log(body);
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    });

  },
  get_price_array: function (req, res) {
    /*This service is same as the "Get Price" service above, except this one
    accepts coin pairs as an array in the request body and returns the prices
    for the requested coin pairs */
    const body = [
        {
        "depositCoin" : "LTC",
        "destinationCoin" : "ETH",
        "depositAmount" : "1"
        },
        {
        "depositCoin" : "BTC",
        "destinationCoin" : "DASH",
        "destinationAmount" : "1"
        }
      ];

      options.url =  urls.get_price_array;
      options.method = 'POST';
      options.body = JSON.stringify(body);


      request(options, function (error, response, body) {
        console.log("------------------");
        console.log(body);
          if (!error && response.statusCode == 200) {
              res.send(body);
           }
      });

  },
  create_order: function (req, res) {
    /*This service allows to you to create a new exchange order. Make sure to
     call the price service (https://test.evercoin.com/v1/price) first and use
     all its response values including signature to create a new order. */
    const body =   {
        "depositCoin" :"LTC",
        "depositAmount" :"1",
        "refundAddress" :{
          "mainAddress" :"mu5a17UQDh2hsRk9ZJzFkTfCbzZhMVBHY3",
          "tagValue" : ''
        },
        "destinationCoin" : "ETH",
        "destinationAmount" : "0.27682597",
        "destinationAddress" :{
          "mainAddress" :"0xb306e1D76E4C4bd6462F370d4551F842eB4fFcad",
          "tagValue" : ''
        },
        "signature" : "1d22ec79107c694"
      };

    options.url =  urls.create_order;
    options.method = 'POST';
    options.body = JSON.stringify(body);

    request(options, function (error, response, body) {
      console.log("------------------");
      console.log(body);
        if (!error && response.statusCode == 200) {
            res.send(body);
         }
    });

  },
  get_status_order: function () {

  },
  dirty_approach: function (res, req) {
    /*var res = method1();
      if( make res checks here and validate data){
          var res2 = method2()
          if( make res2 checks and validate data){
            var res3 = method3()
          }
      }

  }*/

  }
}
