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
let currentDate = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDate);

// get info from city-search from submit button

const handleForm = function() {
    const city = $("#city-search").val().trim();
}

// use city info to move into lat, lon data

let getLatLon = function(city) {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?id=city&appid=${apiKey}';

}

// use lat, lon, city to generate weather

// use lat, lon, city, weather info to generate results on html

// generate daily results in 



// search cities for weather using API call
// let getCityInfo = function(lat, lon) {
//     var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=38.6270&lon=90.1994&appid=9231802aec25fba81f6ca09766ddefe6";
    
//     if (Response.ok) {
//         console.log(lat, lon)
//     }
// }

// https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&contd=&appid=${9231802aec25fba81f6ca09766ddefe6}



// getCityInfo();

// api key: 
