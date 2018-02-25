const express = require('express')
const https = require('https')
const http = require('http')
const path = require('path')
const app = express()

const evercoin = require('./apis/evercoin')
const Changelly = require('./apis/changelly')
const shapeshift = require('./apis/shapeshift')



app.use(express.static(path.join(__dirname + '/public')));
app.get('/', (req, res) => res.sendFile('index.html', {root:path.join(__dirname,'./files')}))


/* ---- Evercoin ----- */
app.get('/evercoin/limit', (req, res) => {
  evercoin.limit(req,res);
})

app.get('/evercoin/validate', (req, res) => {
  evercoin.validate_address(req, res);
})

app.get('/evercoin/get_coins', (req, res) => {
  evercoin.get_coins(req, res);
})

app.get('/evercoin/get_price', (req, res) => {
  evercoin.get_price(req, res);
})

app.get('/evercoin/get_price_array', (req, res) => {
  evercoin.get_price_array(req, res);
})

app.get('/evercoin/create_order', (req, res) => {
  evercoin.create_order(req, res);
})

/* ----- Shapeshift ---- */

app.get('/shapeshift/rate', (req, res) => {
  shapeshift.rate(req, res);
})

app.get('/shapeshift/limit', (req, res) => {
  shapeshift.limit(req, res);
})

app.get('/shapeshift/market_info', (req, res) => {
  shapeshift.market_info(req, res);
})

app.get('/shapeshift/recent_tx', (req, res) => {
  shapeshift.recent_tx(req, res);
})

app.get('/shapeshift/deposit_status', (req, res) => {
  shapeshift.deposit_status(req, res);
})

app.get('/shapeshift/time_remaining', (req, res) => {
  shapeshift.deposit_status(req, res);
})

app.get('/shapeshift/supported_coins', (req, res) => {
  shapeshift.supported_coins(req, res);
})

app.get('/shapeshift/apikey_transactions', (req, res) => {
  shapeshift.apikey_transactions(req, res);
})

app.get('/shapeshift/transactions_specific_address', (req, res) => {
  shapeshift.transactions_specific_address(req, res);
})

app.get('/shapeshift/validate_address', (req, res) => {
  shapeshift.validate_address(req, res);
})

app.get('/shapeshift/normal_transaction', (req, res) => {
  shapeshift.normal_transaction(req, res);
})


/* ----- changelly ----- */
const api_key = "137066e9fc83447c9f52cc0ac6673cda";
const secret = "0995e8c2d72c08315d1cbae0f2d778a1b05145aba46cced77c30938d436a61ea";

var changelly = new Changelly(
  '379204bb770949c489653f3be2c0fb17', // api_key
  '79cd26ea0bb727a01dc41b1a90d23ac05ab31f6661f9d06fca30f463d5ad514c' //secret
);

app.get('/changelly/get_currencies', (req, res) => {
  changelly.getCurrencies(function(err, data) {
    if (err){
      console.log('Error!', err);
    } else {
      res.send(data);
    }
  });
});


app.get('/changelly/create_transaction', (req, res) => {
  changelly.createTransaction('eth', 'btc', '1PKYrd9CC4RFB65wBrvaAsTWnp8fXePuj', 10, undefined, function(err, data) {
    if (err){
      console.log('Error!', err);
    } else {
      res.send(data);
    }
  })
});


app.get('/changelly/get_min_amount', (req, res) => {
  changelly.getMinAmount('eth', 'btc', function(err, data) {
    if (err){
      console.log('Error!', err);
    } else {
      console.log('getMinAmount', data);
      res.send(data);
    }
  })
});


app.get('/changelly/get_exchange_amount', (req, res) => {
  changelly.getExchangeAmount('btc', 'eth', 1, function(err, data) {
    if (err){
      console.log('Error!', err);
    } else {
      res.send(data);
    }
  })
});


app.get('/changelly/get_transactions', (req, res) => {
  changelly.getTransactions(10, 0, 'btc', undefined, undefined, function(err, data) {
    if (err){
      console.log('Error!', err);
    } else {
      res.send(data);
    }
  })
});


app.get('/changelly/get_status', (req, res) => {
  changelly.getStatus('1gy2g76', function(err, data) {
    if (err){
      console.log('Error!', err);
    } else {
      res.send(data);
    }
  });
});


/*
changelly.on('payin', function(data) {
  console.log('payin', data);
});

changelly.on('payout', function(data) {
  console.log('payout', data);
});
*/





app.listen(3000, () => console.log('Example app listening on port 3000!'))
