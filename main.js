// Utilizzare l’API: https://www.boolean.careers/api/array/basket?n=numberPlayers
// Chiedere all’utente quanti giocatori vuole generare. Chiedere all’API i giocatori e stampare a schermo una card per ogni giocatore attraverso handlebars.
//
// Inizialmente chiamate l'API con un numero fisso stabilito da voi, in modo da interrogare l'API nel modo corretto e stilare le card. Poi aggiungete la richiesta del numero dei giocatori all'utente

// dichiaro la variabile di quanti giocatori voglio generare
var volte

// CREO IL TEMPLATE CON Handlebars
var source = $('#basket-Handlebars').html();
var template = Handlebars.compile(source);

$(document).ready(function(){
  $('button').click( function () {
    // alla variabile volte assegno il valore di input
    volte = $('input').val()
    // parte la funzione ajax con n = volte
    $.ajax({
      'url' : "https://www.boolean.careers/api/array/basket",
      // argomenti del data per non scriverli sulla stringa
      'data' :  {
        'n' : volte,
      },
      'success' : function (data) {
        for (var i = 0; i < volte; i++)
        {
          // dentro success (che avviene n VOLTE) compilo la scheda giocatore
          var context = {
            // parametri ottenuti con console.log del data.response
            'playerCode' : data.response[i].playerCode ,
            'rebounds' : data.response[i].rebounds ,
            'fouls' : data.response[i].fouls ,
            'points' : data.response[i].points ,
            'twoPoints' : data.response[i].twoPoints ,
            'threePoints' : data.response[i].threePoints ,
            'number' : i
          };
          var html = template(context);
          // INSERISCO LA SCHEDA NELL'ALBUM
          $('.album_figurine_basket').append(html);
        }
      },
      'error' : function (richiesta) {
        alert("E' avvenuto un errore. "+errore);
      }

    });

    $('input').val('')

  })

})
