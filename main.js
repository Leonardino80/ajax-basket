$(document).ready(function(){

  // CREO IL TEMPLATE CON Handlebars
  var source = $('#basket-Handlebars').html();
  var template = Handlebars.compile(source);




  // appendo i quadratini nel container
  // for (var i = 0; i < 36; i++) {
    $.ajax({
      'url' : "https://www.boolean.careers/api/array/basket",
      'data' :  {
        'n' : 1,
      },
      'success' : function (data) {
      // FISSO I CAMPI COMPILABILI DI HANDLEBARS
      var context = {
        // IL TEMPLATE GENERA LO STESSO NUMERO RANDOM 36 VOLTE
        'playerCode' : data.response[0].playerCode ,
        'rebounds' : data.response[0].rebounds ,
        'fouls' : data.response[0].fouls ,
        'points' : data.response[0].points ,
        'twoPoints' : data.response[0].twoPoints ,
        'threePoints' : data.response[0].threePoints ,
        'number' : 7
      };
      var html = template(context);

      $('.container').append(html);


      console.log(data.response[0]);



      },
      'error' : function (richiesta) {
        alert("E' avvenuto un errore. "+errore);
      }
    });
  // }
})
