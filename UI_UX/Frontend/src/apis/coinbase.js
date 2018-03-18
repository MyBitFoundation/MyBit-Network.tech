import req from 'axios'

const HEADER = {
    'Authorization': '',
};

const TRANSACTIONHEADER ={
  'Content-Type': 'application/json',
  'Authorization': '',
  'CB-2FA-Token': ''//2FA AUTH
}

const TRANSACTIONSEND = {
  type : 'send',
  to : '',
  amount: '0.001',
  currency: 'ETH',
  description: ''
}

const URLS  = {
  getCodeForAccess: 'https://api.coinbase.com/oauth/token',
  user:  'https://api.coinbase.com/v2/user',
  valid_bank: 'https://api.coinbase.com/v2/payment-methods',
  accounts_for_Transaction: 'https://api.coinbase.com/v2/accounts/',
  transaction: '/transactions',
  revoke_access: 'https://api.coinbase.com/oauth/revoke'
};


export const CoinbaseApi = {
  async initiateVerification(_tempCode){
  },

  async validBank(_accessToken){
    HEADER.Authorization = 'Bearer ' + _accessToken;
    const response = await req.request({
        method: 'get',
        url: URLS.valid_bank,
        headers: HEADER
    });
    var responseData = JSON.parse(response.body).data;
    for(let index = 0; index < responseData.length; index++){
      if(responseData[index].allow_withdraw){
        console.log('Valid Bank' + responseData[index].allow_withdraw);
        return responseData[index].allow_withdraw;
        }
      }
  },

  async getAccountID(_accessToken){
    HEADER.Authorization = 'Bearer ' + _accessToken;
    const response = await req.request({
        method: 'get',
        url: URLS.user,
        headers: HEADER
    });
    var responseData = JSON.parse(response.body).data;
    console.log('accountID' + responseData.id);
    return responseData.id;
  },

  async getEthWalletID(_accessToken){
    HEADER.Authorization = 'Bearer ' + _accessToken;
    const response = await req.request({
        method: 'get',
        url: URLS.accounts_for_Transaction,
        headers: HEADER
    });
    var responseData = JSON.parse(response.body).data;
    for(let index = 0; index < responseData.length; index++){
      if(responseData[index].name === 'ETH Wallet'){
        console.log('ethwallet: ' + responseData[index].id);
        return responseData[index].id;
      }
    };
  },

  async postTransaction(_accessToken, _ethWalletId, _amountToSend, _addressToSend, _verification){
    TRANSACTIONHEADER.Authorization = 'Bearer ' + _accessToken;
    TRANSACTIONSEND.to = _addressToSend;
    TRANSACTIONSEND.amount = _amountToSend;
    TRANSACTIONSEND.description = 'Transaction from coinbase account to metamask addr: ' + _addressToSend + ' for the amount of: ' + TRANSACTIONSEND.amount + 'USD.  Done by MyBit foundation to validate coinbase account';
    const response = await req.request({
        method: 'POST',
        url: URLS.accounts_for_Transaction + _ethWalletId + URLS.transaction,
        headers: TRANSACTIONHEADER,
        body: TRANSACTIONSEND
    });
    var responseData = JSON.parse(response.body).data;
    console.log('verificationTxID; ' + responseData);
    return responseData;
  },


  async transactionHashAfterPosted(_accessToken, _ethWalletId, _verificationTxID){
    HEADER.Authorization = 'Bearer ' + _accessToken;
    const response = await req.request({
        method: 'get',
        url: URLS.accounts_for_Transaction + _ethWalletId + URLS.transaction + '/' + _verificationTxID,
        HEADER: HEADER
    });
    var responseData = JSON.parse(response.body).network.hash;
    console.log('Transaction hash; ' + responseData);
    return responseData;
  },

  async getAllUserDetails(_accessToken){
    HEADER.Authorization = 'Bearer ' + _accessToken;
    const response = await req.request({
        method: 'get',
        url: URLS.user,
        HEADER: HEADER
    });
    var responseData = JSON.parse(response.body).data;
    var responseDict = {
      'name': responseData.name,
      'profileLocation': responseData.profile_location,
      'email': responseData.email,
      'timeZone': responseData.time_zone,
      'nativeCurrency' : responseData.native_currency,
      'countryCode': responseData.country.code,
      'countryName': responseData.country.name
    }
    console.log('User Details; ' + responseDict);
    return responseDict;
  },

  async revokeAccess(_accessToken){
    HEADER.Authorization = 'Bearer ' + _accessToken;
    const response = await req.request({
        method: 'POST',
        url: URLS.revoke_access,
        HEADER: HEADER,
        data: 'token=' + _accessToken
    });
    return response;
  },

};
