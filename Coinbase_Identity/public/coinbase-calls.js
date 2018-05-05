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
    redirect: 'https://www.coinbase.com/oauth/authorize?'
    }

    /*TODO; Just remove this and update url field */
  const authParams = {
    client_id: '64baf1880c51e3e1782c0035028930efe2cca4653f49374f504071ac82e7919b&',
    response_type: 'code&',
    redirect_uri: 'http%3A%2F%2F127.0.0.1%3A3000%2F&',
    scope:'wallet:user:read,wallet:user:email,wallet:payment-methods:read,wallet:transactions:read,wallet:withdrawals:read,wallet:transactions:send,wallet:accounts:read',//wallet:user:read wallet:user:email wallet:payment-methods:read wallet:transactions:read wallet:withdrawals:read wallet:transactions:send wallet:accounts:read
    state:'thisIsAStateTest',
    send_limit_amount:'1&',
    send_limit_currency:'USD&',
    send_limit_period: 'month&'
  }

  /* make shift way of doing it*/
  $("#coinbase-initiateVerification").on('click', function() {
    url = urls.redirect+'response_type='+authParams.response_type+'client_id='+authParams.client_id+'redirect_uri='+authParams.redirect_uri+'response_type='+authParams.response_type+'meta[send_limit_amount]='+authParams.send_limit_amount+'meta[send_limit_currency]='+authParams.send_limit_currency+'meta[send_limit_period]='+authParams.send_limit_period+'scope='+authParams.scope;
    window.location.href = url;
  });


  if(document.URL != 'http://127.0.0.1:3000/'){
    var tempCode = document.URL.split('?code=').pop();
    alert(tempCode);
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/coinbase/initiateVerification",
      data: {
        tempCode: tempCode,
        metamask : web3.eth.coinbase
      },
      success: function(data) {
          jsonViewer(data);
        }
    });
  };


  $("#coinbase-payment").on('click', function() {
    var valueToPay = $('#coinbaseValue').val();
    var addressToPay = $('#desiredAddress').val();
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/coinbase/payment",
      data:{
        valueToPay: valueToPay,
        addressToPay: addressToPay
      },
      success: function(data) {
          jsonViewer(data);
        }
      });
    });

});
