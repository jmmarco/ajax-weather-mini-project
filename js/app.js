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

  var xmlhttp = new XMLHttpRequest;

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status == 200) {
        var climate = response.main;

        // Take a look at the console to see how the API response looks like
        console.log(climate);

        // Store each item from the API into a variable
        var temp = climate.temp;
        var minTemp = climate.temp_min;
        var maxTemp = climate.temp_max;
        var humidity = climate.humidity;

        var location = document.getElementById("location");
        
        location.innerHTML = "";
        document.getElementsByTagName("span").innerHTML = "";


        document.getElementById("c-temp").innerHTML(temp);
        document.getElementById("c-hum").innerHTML(humidity);
        document.getElementById("min-temp").innerHTML(minTemp);
        document.getElementById("max-temp").innerHTML(maxTemp);

        location.innerHTML(city);

      } else {
        var error = '<span class="error">Sorry, something went wrong. Check the JS console for details.';
        document.getElementsByClassName("error").innerHTML(error);
      }
    }
  }

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
});
