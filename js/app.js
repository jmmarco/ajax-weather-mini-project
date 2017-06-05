$("#weather-form").on("submit", function(event) {

  // Prevenimos el comportamiento "por defecto" del formulario (que la página recargue)
  event.preventDefault();

  // Defino un par de variables
  var city, apiKey, apiUrl, units;

  // Tomo el valor de la ciudad
  city = $("#city").val();


  // Uso la API Key que me dio OpenWeatherMap (tenes que registrarte para que te asignen una)
  apiKey = "TU-API-KEY-VA-ACA";

  // Configurar el tipo de unidad a usar (metric/imperial) == (Celsius / Farenheit)
  units = "&units=metric";

  /*
  Armo la URL con lo que necesito (ver los API DOCS de OpenWeather MAP):
  Documentación: http://openweathermap.org/current
  */

  apiUrl = "http://api.openweathermap.org/data/2.5/weather?" + "q=" + city + "&APPID=" + apiKey + units;

  /*
  Crear la llamada AJAX para que podamos acceder a la API
  Documentación: http://api.jquery.com/jquery.ajax/
  */

  $.ajax({

    // uso la URL que defini anteriormente y uso el método "GET"
    url: apiUrl,
    method: "GET",


    /*
    Si todo sale bien (todo lo que esta adentro de ".done" es lo que sucede cuando
    llegamos con exito a la API)
    */

  }).done(function(response) {

    // Guardo la respuesta de la API en una variable
    var climate = response.main;

    // Tiro el resultado a la consola (investiga y fijate como se ve)
    console.log(climate);

    // Guardo lo que necesito en cada variable
    var temp = climate.temp;
    var minTemp = climate.temp_min;
    var maxTemp = climate.temp_max;
    var humidity = climate.humidity;

    // Limpio el DOM (util para buscar otra ciudad)
    $("#location").empty();
    $("span").empty();

    // Agrego el resultado al DOM
    $("#c-temp").append(temp).append("°");
    $("#c-hum").append(humidity).append("%");
    $("#min-temp").append(minTemp).append("°");
    $("#max-temp").append(maxTemp).append("°");

    // Agrego la ciudad para que el usuario la vea
    $("#location").append(city);

  }).fail(function(response) {

    // Creo un mensaje de error amigable para mostrarle al usuario
    var error = '<span class="error">Sorry, something went wrong. Check the JS console for details.';
    $(".weather").append(error);

    // Tiro el output de error que me da la API a la consola asi veo que pasó (investigar)
    console.log(response);

  }); // Fin de .ajax

});
