// variables
let cityInput = document.getElementById('form-input');
let submitBtn = document.getElementById('search-btn');
let cityBtn = document.getElementById('city-btn');
let cityDetail = document.getElementById('city-details');
let cityTemp = document.getElementById('city-temp');
let cityWind = document.getElementById('city-wind');
let cityHum = document.getElementById('city-humid');
let cityUv = document.getElementById('city-uv');
let foreHead = document.getElementById('forecast-head');
let fiveDay = document.getElementById('five-day-cont');
const apiKey = "9231802aec25fba81f6ca09766ddefe6";

// get current date

// co

// search cities for weather using API call
let getCityInfo = function(lat, lon) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=38.6270&lon=90.1994&appid=9231802aec25fba81f6ca09766ddefe6";
    
    if (Response.ok) {
        console.log(lat, lon)
    }
}

// https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&contd=&appid=${9231802aec25fba81f6ca09766ddefe6}



// display city, state, temp, wind, humid, uv
// display 5 day forecast
// save city search data

getCityInfo();

// api key: 
