const express = require('express')
const https = require('https')
const http = require('http')
const path = require('path')
const app = express()

const coinbase = require('./apis/coinbase')



app.use(express.static(path.join(__dirname + '/public')));
app.get('/', (req, res) => res.sendFile('index.html', {root:path.join(__dirname,'./files')}))


/* ----- CoinBase ---- */
app.get('/coinbase/initiateVerification', (req, res) => {
  coinbase.initiateVerification(req, res);
})

app.get('/coinbase/payment', (req, res) => {
  coinbase.payment(req, res);
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
