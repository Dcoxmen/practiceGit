var cities = [];
var selectedCityForm=document.querySelector("#search-city-form");
var cityInput=document.querySelector("#city");
var currentWeatherContainer=document.querySelector("#current-weather-display");
var searchCityInput = document.querySelector("#city-searched");
var forecastTitle = document.querySelector("#forecast");
var forecastWeatherDisplay = document.querySelector("#fiveday-weather-display");

var submitTheForm = function(event){
    event.preventDefault();
    var city = cityInput.value.trim();
    if(city){
        getCityWeather(city);
        get5Day(city);
        cities.unshift({city});
        cityInput.value = "";
    } else{
        alert("Please enter a City");
    }
    // searchSaved();
 
}

// var searchSaved = function(){
//     localStorage.setItem("cities", JSON.stringify(cities));
// };

var getCityWeather = function(city){
    var apiKey = "05adf19bd1809fb95f63f7226bd12fb2"
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayWeather(data, city);
           
        });
    });
};

var displayWeather = function(weather, searchCity){
   //clear old content
   currentWeatherContainer.textContent= "";  
   searchCityInput.textContent=searchCity;

   //console.log(weather);

   //create a span element to hold temperature data
   var tempatureData = document.createElement("span");
   tempatureData.textContent = "Temperature: " + weather.main.temp + " °F";
   tempatureData.classList = "list-group-item"
  

   //append to container
   currentWeatherContainer.appendChild(tempatureData);

};


var get5Day = function(city){
    var apiKey = "05adf19bd1809fb95f63f7226bd12fb2"
    var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
           display5Day(data);
           
        });
    });
};

var display5Day = function(weather){
    forecastWeatherDisplay.textContent = ""
    forecastTitle.textContent = "5-Day Forecast:";

    var forecast = weather.list;
        for(var i=5; i < forecast.length; i=i+8){
       var dailyForecast = forecast[i];
        
       
       var forecastDiv=document.createElement("div");
       forecastDiv.classList = "card bg-primary text-light m-2";

       console.log(dailyForecast)

       //create date element
       var forecastDate = document.createElement("h5")
       forecastDate.textContent= moment.unix(dailyForecast.dt).format("MMM D, YYYY");
       forecastDate.classList = "card-header text-center"
       forecastDiv.appendChild(forecastDate);

       
       //create an image element
       var weatherIcon = document.createElement("img")
       weatherIcon.classList = "card-body text-center";
       weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`);  

       //append to forecast card
       forecastDiv.appendChild(weatherIcon);
       
       //create temperature span
       var forecastTemperature=document.createElement("span");
       forecastTemperature.classList = "card-body text-center";
       forecastTemperature.textContent = dailyForecast.main.temp + " °F";

        //append to forecast card
        forecastDiv.appendChild(forecastTemperature);

        forecastWeatherDisplay.appendChild(forecastDiv);
        
    }
    
}



selectedCityForm.addEventListener("submit", submitTheForm);
