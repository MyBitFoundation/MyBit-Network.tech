const api_key = "379204bb770949c489653f3be2c0fb17";
const secret = "79cd26ea0bb727a01dc41b1a90d23ac05ab31f6661f9d06fca30f463d5ad514c";


module.exports = (function() {
  var URL = 'https://api.changelly.com';
  var io = require('socket.io-client');
  var jayson = require('jayson');
  var crypto = require('crypto');
  var client = jayson.client.https(URL);

  function changelly(apiKey, apiSecret) {
    this._id = function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };

    this._sign = function(message) {
      return crypto
        .createHmac('sha512', apiSecret)
        .update(JSON.stringify(message))
        .digest('hex');
    };

    this._request = function(method, options, callback) {
      var id = this._id();
      var message = jayson.utils.request(method, options, id);
      client.options.headers = {
        'api-key': apiKey,
        'sign': this._sign(message)
      };

      client.request(method, options, id, function(err, response) {
        callback(err, response);
      });
    };

    var self = this;

    this._socket = io.connect(URL, {
      'reconnection': true,
      'reconnectionDelay': 1000,
      'reconnectionDelayMax': 5000,
      'reconnectionAttempts': 'Infinity'
    });

    this._socket.on('connect', function() {
      var message = {
        "Login": {}
      };

      self._socket.emit('subscribe',
        {
          apiKey: apiKey,
          sign: self._sign(message),
          message: message
        }
      );
    });
  }

  changelly.prototype = {
    getCurrencies: function(callback) {
      return this._request('getCurrencies', {}, callback);
    },
    createTransaction: function(from, to, address, amount, extraId, callback) {
      var params = {
        from: from,
        to: to,
        address: address,
        amount: amount,
        extraId: extraId
      };

      return this._request('createTransaction', params, callback);
    },
    getMinAmount: function(from, to, callback) {
      var params = {
        from: from,
        to: to
      };

      return this._request('getMinAmount', params, callback);
    },
    getExchangeAmount: function(from, to, amount, callback) {
      var params = {
        from: from,
        to: to,
        amount: amount
      };

      return this._request('getExchangeAmount', params, callback);
    },
    getTransactions: function(limit, offset, currency, address, extraId, callback) {
      var params = {
        limit: limit,
        offset: offset,
        currency: currency,
        address: address,
        extraId: extraId
      };

      return this._request('getTransactions', params, callback);
    },
    getStatus: function(id, callback) {
      var params = {
        id: id
      };

      return this._request('getStatus', params, callback);
    },
    on: function(channel, callback) {
      this._socket.on(channel, callback);
    }
  };

  return changelly;
})();
