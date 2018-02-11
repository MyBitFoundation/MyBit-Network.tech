$(document).ready(function () {

  $("#changelly-get-currencies").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/changelly/get_currencies",
      datatype: "json",
           success: function(data) {
              jsonViewer(data);
           }
       });
     });


 $("#changelly-create-transaction").on('click', function() {
   $.ajax({
     type: "GET",
     url: "http://127.0.0.1:3000/changelly/create_transaction",
     datatype: "json",
          success: function(data) {
             jsonViewer(data);
          }
      });
    });


  $("#changelly-get-min-amount").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/changelly/get_min_amount",
      datatype: "json",
           success: function(data) {
              jsonViewer(data);
           }
       });
     });



  $("#changelly-get-exchange-amount").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/changelly/get_exchange_amount",
      datatype: "json",
           success: function(data) {
              jsonViewer(data);
           }
       });
     });



   $("#changelly-get-transactions").on('click', function() {
     $.ajax({
       type: "GET",
       url: "http://127.0.0.1:3000/changelly/get_transactions",
       datatype: "json",
            success: function(data) {
               jsonViewer(data);
            }
        });
      });


    $("#changelly-get-status").on('click', function() {
      $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3000/changelly/get_status",
        datatype: "json",
             success: function(data) {
                jsonViewer(data);
             }
         });
       });

});
