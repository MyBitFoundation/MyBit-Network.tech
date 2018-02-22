const express = require('express')
const https = require('https')
const http = require('http')
const path = require('path')
const app = express()

const uphold = require('./apis/uphold')



app.use(express.static(path.join(__dirname + '/public')));
app.get('/', (req, res) => res.sendFile('index.html', {root:path.join(__dirname,'./files')}))


/* ----- Uphold ---- */
app.get('/uphold/getAccessToken', (req, res) => {
  uphold.getAccessToken(req, res);
})

app.get('/uphold/getUserDetails', (req, res) => {
  uphold.getUserDetails(req, res);
})

app.get('/uphold/getUserVerified', (req, res) => {
  uphold.getUserVerified(req, res);
})

app.get('/uphold/getCurrencyTicker', (req, res) => {
  uphold.getCurrencyTicker(req, res);
})

app.get('/uphold/getAccounts', (req, res) => {
  uphold.getAccounts(req, res);
})

app.get('/uphold/getCards', (req, res) => {
  uphold.getCards(req, res);
})

app.get('/uphold/getSpecificCardEthAddress', (req, res) => {
  uphold.getSpecificCardEthAddress(req, res);
})

app.get('/uphold/getCardID', (req, res) => {
  uphold.getCardID(req, res);
})

app.get('/uphold/getCardTransactions', (req, res) => {
  uphold.getCardTransactions(req, res);
})




app.listen(3000, () => console.log('Example app listening on port 3000!'))
