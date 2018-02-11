$(document).ready(function() {

  $("#evercoin-limit").on('click', function() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:3000/evercoin/limit",
      datatype: "json",
           success: function(data) {
              jsonViewer(data);
           }
       });
     });


   $("#evercoin-validate").on('click', function() {
     $.ajax({
       type: "GET",
       url: "http://127.0.0.1:3000/evercoin/validate",
       datatype: "json",
            success: function(data) {
               jsonViewer(data);
            }
        });
      });


    $("#evercoin-get-coins").on('click', function() {
      $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3000/evercoin/get_coins",
        datatype: "json",
             success: function(data) {
                jsonViewer(data);
             }
         });
       });


   $("#evercoin-get-price").on('click', function() {
     $.ajax({
       type: "GET",
       url: "http://127.0.0.1:3000/evercoin/get_price",
       datatype: "json",
            success: function(data) {
               jsonViewer(data);
            }
        });
      });



     $("#evercoin-get-price-array").on('click', function() {
       $.ajax({
         type: "GET",
         url: "http://127.0.0.1:3000/evercoin/get_price_array",
         datatype: "json",
              success: function(data) {
                 jsonViewer(data);
              }
          });
        });



      $("#evercoin-create-order").on('click', function() {
        $.ajax({
          type: "GET",
          url: "http://127.0.0.1:3000/evercoin/create_order",
          datatype: "json",
               success: function(data) {
                  jsonViewer(data);
               }
           });
         });

});
