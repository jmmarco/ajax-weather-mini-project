$("#weather-form").on("submit", function(event) {

  // Prevent the default behavior of the form (reload page)
  event.preventDefault();

  // Define a couple of variables
  var city, apiKey, apiUrl, units;

  // Get the current value for the city
  city = $("#city").val();


  // Set the API Key (this should be private)
  apiKey = "0e9a952df087f4f3582c374303cf7e7e";

  // Set the default units for the API (metric/imperial)
  units = "&units=metric";

  // Set the API URL
  apiUrl = "http://api.openweathermap.org/data/2.5/weather?" + "q=" + city + "&APPID=" + apiKey + units;


  // Debugging tip: Comment out one of variables above and test the app to see what happens

  // Make the AJAX call to the API using jQuery
  $.ajax({

      url: apiUrl,
      method: "GET",

    })
    // If all goes well
    .done(function(response) {

      var climate = response.main;

      // Take a look at the console to see how the API response looks like
      console.log(climate);

      // Store each item from the API into a variable
      var temp = climate.temp;
      var minTemp = climate.temp_min;
      var maxTemp = climate.temp_max;
      var humidity = climate.humidity;

      // Clear the DOM first
      $("#location").empty();
      $("span").empty();

      // Append the stuff to the DOM
      $("#c-temp").append(temp).append("°");
      $("#c-hum").append(humidity).append("%");
      $("#min-temp").append(minTemp).append("°");
      $("#max-temp").append(maxTemp).append("°");

      // Apend the city name to the section title
      $("#location").append(city);
    })
    // If something goes wrong
    .fail(function(response) {

      // Create a human readable error message and display it on the page
      var error = '<span class="error">Sorry, something went wrong. Check the JS console for details.</span>';
      $(".weather").append(error);

      // Output specific error to the JS console
      var errorDetails = JSON.parse(response.responseText);
      console.log(errorDetails.message);

    });

});
