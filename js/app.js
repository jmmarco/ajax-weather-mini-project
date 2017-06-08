var form = document.getElementById("weather-form");

form.addEventListener("submit", function (event) {

  // Prevent the default behavior of the form (reload page)
  event.preventDefault();

  // Define a couple of variables
  var city, apiKey, apiUrl, units;

  // Get the current value for the city
  city = document.getElementById("city").value

  // Set the API Key (this should be private)
  apiKey = "0e9a952df087f4f3582c374303cf7e7e";

  // Set the default units for the API (metric/imperial)
  units = "&units=metric";

  // Set the API URL
  apiUrl = "http://api.openweathermap.org/data/2.5/weather?" + "q=" + city + "&APPID=" + apiKey + units;


  // Debugging tip: Comment out one of variables above and test the app to see what happens

  // Make the AJAX call to the API using vanilla JS
  var xhr = new XMLHttpRequest;

  xhr.onreadystatechange = function () {

    console.log(xhr.readyState);
    if (xhr.readyState == XMLHttpRequest.DONE || xhr.readyState == 4 ) {
      if (xhr.status == 200) {

        // First parse the response so we can traverse it
        var climate = JSON.parse(xhr.responseText);
        climate = climate.main;
        // Take a look at the console to see how the API response looks like
        console.log(climate);

        // Store each item from the API into a variable
        var temp = climate.temp;
        var minTemp = climate.temp_min;
        var maxTemp = climate.temp_max;
        var humidity = climate.humidity;

        // Get the location from the DOM
        var location = document.getElementById("location");
        
        // Empty the location from the DOM
        location.innerHTML = "";
        document.getElementsByTagName("span").innerHTML = "";

        // Set the forecast
        document.getElementById("c-temp").innerHTML= temp + "°";
        document.getElementById("c-hum").innerHTML= humidity + "%";
        document.getElementById("min-temp").innerHTML= minTemp + "°";
        document.getElementById("max-temp").innerHTML= maxTemp + "°";

        // Set the city
        location.innerHTML = city;

      } else {
        // console.log(xhr.responseText);
        var errorDetails = JSON.parse(xhr.responseText);
        console.log(errorDetails.message);
        var error = '<span class="error">Sorry, something went wrong. Check the JS console for details.</span>';
        document.getElementsByClassName("error").innerHTML = error;
      }
    }
  }

  xhr.open("GET", apiUrl, true);
  xhr.send();
});
