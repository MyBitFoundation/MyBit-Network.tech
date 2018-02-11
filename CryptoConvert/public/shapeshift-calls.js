$(document).ready(function() {

  $("#shapeshift-rate").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/shapeshift/rate",
      datatype: "json",
           success: function(data) {
              jsonViewer(data);
           }
       });
     });

  $("#shapeshift-limit").on('click', function() {
   $.ajax({
     type: "GET",
     url: "http://127.0.0.1:3000/shapeshift/limit",
     datatype: "json",
          success: function(data) {
             jsonViewer(data);
          }
      });
    });


  $("#shapeshift-market-info").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/shapeshift/market_info",
      datatype: "json",
           success: function(data) {
              jsonViewer(data);
           }
       });
     });

  $("#shapeshift-recent-tx").on('click', function() {
   $.ajax({
     type: "GET",
     url: "http://127.0.0.1:3000/shapeshift/recent_tx",
     datatype: "json",
          success: function(data) {
             jsonViewer(data);
          }
      });
    });

  $("#shapeshift-deposit-status").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/shapeshift/deposit_status",
      datatype: "json",
           success: function(data) {
              jsonViewer(data);
           }
       });
     });

  $("#shapeshift-time-remaining").on('click', function() {
   $.ajax({
     type: "GET",
     url: "http://127.0.0.1:3000/shapeshift/time_remaining",
     datatype: "json",
          success: function(data) {
             jsonViewer(data);
          }
      });
    });

  $("#shapeshift-supported-coins").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/shapeshift/supported_coins",
      datatype: "json",
           success: function(data) {
              jsonViewer(data);
           }
       });
     });


  $("#shapeshift-apikey-transaction-list").on('click', function() {
   $.ajax({
     type: "GET",
     url: "http://127.0.0.1:3000/shapeshift/apikey_transactions",
     datatype: "json",
          success: function(data) {
             jsonViewer(data);
          }
      });
    });

  $("#shapeshift-transactions-specific-address").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/shapeshift/transactions_specific_address",
      datatype: "json",
           success: function(data) {
              jsonViewer(data);
           }
       });
     });

  $("#shapeshift-validate-address").on('click', function() {
   $.ajax({
     type: "GET",
     url: "http://127.0.0.1:3000/shapeshift/validate_address",
     datatype: "json",
          success: function(data) {
             jsonViewer(data);
          }
      });
    });

  $("#shapeshift-normal-transaction").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/shapeshift/normal_transaction",
      datatype: "json",
           success: function(data) {
              jsonViewer(data);
           }
       });
     });

});
