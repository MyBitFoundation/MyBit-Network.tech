var request = require('request');

const options = {
  url: '',
  method: '',
  body: '',
  headers: ''
};

const currency = {
  usd: '/?convert=USD',
  eur: '/?convert=EUR',
  gbp: '/?convert=GBP'
}


const urls  = {
  eth: 'https://api.coinmarketcap.com/v1/ticker/Ethereum'
};


function getUSDETH(){
  options.url = urls.eth + currency.usd;
  options.method = 'GET';
  request(options, function (error, response) {
    var jsonResponse = JSON.parse(response.body)
    console.log(jsonResponse[0].price_usd);
  });
};

function getEURETH(){
  options.url = urls.eth + currency.eur;
  options.method = 'GET';
  request(options, function (error, response) {
    var jsonResponse = JSON.parse(response.body)
    console.log(jsonResponse[0].price_eur);
  });
};

function getGBPETH(){
  options.url = urls.eth + currency.gbp;
  options.method = 'GET';
  request(options, function (error, response) {
    var jsonResponse = JSON.parse(response.body)
    console.log(jsonResponse[0].price_gbp);
  });
};
