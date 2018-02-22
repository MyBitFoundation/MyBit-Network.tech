window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3js = new Web3(web3.currentProvider);
    console.log(web3.eth.coinbase);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
});


$(document).ready(function() {
  const options = {
    url: '',
    data: '',
  };

  const header = {
      'Authorization': ''
  };

  const urls  = {
    redirect: 'https://sandbox.uphold.com/authorize/'
    }


  /* make shift way of doing it*/
  $("#uphold-authenticate").on('click', function() {
    let stateUnique = web3.eth.coinbase;
    url = 'https://sandbox.uphold.com/authorize/5b1a2b50e0b21e5094046b2009bbeecb4e7d48fb?scope=transactions:read%20transactions:deposit%20user:read%20accounts:read%20cards:read&state='+stateUnique;
    window.location.href = url;
  });


  if(document.URL != 'http://127.0.0.1:3000/'){
    var stateUnique = document.URL.split('state=').pop();
    if(stateUnique == web3.eth.coinbase){
      var tempCode = document.URL.split('?code=').pop();
      $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3000/uphold/getAccessToken",
        data: {
          tempCode: tempCode
        },
        success: function(data) {
            jsonViewer(data);
          }
      });
    };
  };

  $("#uphold-getUserDetails").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/uphold/getUserDetails",
      success: function(data) {
          jsonViewer(data);
        }
      });
    });


  $("#uphold-getUserVerified").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/uphold/getUserVerified",
      success: function(data) {
          jsonViewer(data);
        }
      });
    });


  $("#uphold-getCurrencyTicker").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/uphold/getCurrencyTicker",
      success: function(data) {
          jsonViewer(data);
        }
      });
    });

  $("#uphold-getAccounts").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/uphold/getAccounts",
      success: function(data) {
          jsonViewer(data);
        }
      });
    });

    $("#uphold-getCards").on('click', function() {
      $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3000/uphold/getCards",
        success: function(data) {
            jsonViewer(data);
          }
        });
      });

    $("#uphold-getSpecificCardEthAddress").on('click', function() {
      var cardLabel = $('#uphold-cardLabel :selected').val();
      $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3000/uphold/getSpecificCardEthAddress",
        data: {
          cardLabel : cardLabel
        },
        success: function(data) {
            jsonViewer(data);
          }
        });
      });



    $("#uphold-getCardID").on('click', function() {
      var cardID = $('#uphold-cardID :selected').val();
      $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3000/uphold/getCardID",
        data: {
          cardID : cardID
        },
        success: function(data) {
            jsonViewer(data);
          }
        });
      });

    $("#uphold-getCardTransactions").on('click', function() {
      var cardTransactionsLabel = $('#uphold-cardTransactions :selected').val();
      $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3000/uphold/getCardTransactions",
        data: {
          cardTransactionsLabel : cardTransactionsLabel
        },
        success: function(data) {
            jsonViewer(data);
          }
        });
      });

});
