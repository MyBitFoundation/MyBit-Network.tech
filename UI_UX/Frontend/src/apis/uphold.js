import req from 'axios'

const URLS  = {
  codeForAccess: 'https://api-sandbox.uphold.com/oauth2/token',
  currencyTicker:  'https://api-sandbox.uphold.com/v0/ticker',
  account: 'https://api-sandbox.uphold.com/v0/me/accounts',
  cards: 'https://api-sandbox.uphold.com/v0/me/cards',
  transaction: '/transactions',
  userDetails: 'https://api-sandbox.uphold.com/v0/me'
};

/*const POST_HEADER = {
    'Content-Type': 'application/x-www-form-urlencoded'
};*/

// The Bearer code will be stored in bigchainDB
var AUTH_HEADER = {
    'Authorization' : ''
};

export const UpholdApi = {
    async userDetails(_accessToken) {
      AUTH_HEADER = 'Bearer ' + _accessToken;
        const userDetails = await req.request({
            method: 'get',
            url: URLS.userDetails,
            headers: AUTH_HEADER
        })
        console.log('User Details', userDetails);
        return userDetails;
    },


    async userVerified(_accessToken) {
      AUTH_HEADER = 'Bearer ' + _accessToken;
      const userVerified = await req.request({
        method: 'get',
        url: URLS.userDetails,
        header: AUTH_HEADER
      })
      console.log('User Verified: ', userVerified);
      return userVerified;
    },


    async accessToken(_tempToken){
      const acessToken = await req.request({
        method: 'get',
        url: URLS.codeForAccess,
        header: AUTH_HEADER,
      })
      console.log('Access Token: ', acessToken);
      return acessToken;
    },

    async currencyTicker(){
      const currencyResult = await req.request({
        method: 'get',
        url: URLS.currencyTicker,
        header: AUTH_HEADER
      })
      console.log('Currency result:', currencyResult);
      return currencyResult;
    },

    async accounts(_accessToken){
      AUTH_HEADER = 'Bearer ' + _accessToken;
      const accounts = await req.request({
        method:'get',
        url: URLS.accounts,
        header: AUTH_HEADER
      })
      console.log('Account results', accounts);
      return accounts;
    },

    async cards(_accessToken){
      AUTH_HEADER = 'Bearer ' + _accessToken;
      const cards = await req.request({
        method: 'get',
        url: URLS.cards,
        header: AUTH_HEADER
      })
      console.log('Cards: ', cards);
      return cards;
    },

    async specificCardEthAddress(_accessToken, _cardLabel){
      AUTH_HEADER = 'Bearer ' + _accessToken;
      let ethAddr ='0x0';
      const results = await req.request({
        method: 'get',
        url: URLS.cards,
        header: AUTH_HEADER
      })
      var resultJson = JSON.parse(results);
      resultJson.forEach(function(card){
        if(card.label === _cardLabel){
          ethAddr = card.address.ethereum;
        }
      });
      return ethAddr;
    },

    async cardID(_accessToken, _cardLabel){
      AUTH_HEADER = 'Bearer ' + _accessToken;
      let cardId = '';
      const results = await req.request({
        method: 'get',
        url: URLS.cards,
        header: AUTH_HEADER
      })
      var resultJson = JSON.parse(results);
      resultJson.forEach(function(card){
        if(card.label === _cardLabel){
          cardId = card.id;
        }
      })
      return cardId;
    },

    async cardTransactions(_accessToken, _cardLabel){
      AUTH_HEADER = 'Bearer ' + _accessToken;
      let cardId = '';
      const results = await req.request({
        method: 'get',
        url: URLS.cards,
        header: AUTH_HEADER
      })
      var resultJson = JSON.parse(results);
      resultJson.forEach(async function(card){
        if(card.label === _cardLabel){
          cardId = card.id;
          const transactions = await req.request({
            method: 'get',
            url: URLS.cards,
            header: AUTH_HEADER
          });
          return JSON.parse(transactions);
        }
      })
    },

  }
