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


    $('#search-btn').on('click', function() {
        const city = $("#city").val().trim();
        // console.log(city);

        const apiUrl1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9231802aec25fba81f6ca09766ddefe6`;

        fetch(apiUrl1)
            .then(function(response){ return response.json()})
            .then(function(data){
                // console.log(data)

                $('#detail-head').text(data.name)
                $('#current-date').text(currentDate)

                let lat = data.coord.lat;
                let lon = data.coord.lon;


                const apiUrl2 = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=9231802aec25fba81f6ca09766ddefe6&units=imperial`

                fetch(apiUrl2)
                    .then(function(response) { return response.json()})
                    .then(function(data){
                        console.log(data);

                        //code

                        renderEl(data);

                        //code
                    })
            });
        
    })
    

    function renderEl(data){
        $("#city-temp").text("Temp : " + data.current.temp + ' Deg')
        $("#city-wind").text("Wind Speed : " + data.current.wind_speed + ' MPH')
        $("#city-humid").text("Humidity : " + data.current.humidity + '%')
        $("#city-uv").text("UV Index : " +data.current.uvi)

        for (let i = 1; i < data.daily.length; i++) {
            if (i === 5) {break; }
        }

        $('#five-day-cont').append('<div id=ind-days></div>')
        $('#five-day-cont').addClass('card-body')
        $("#ind-days").text(data.daily.temp)
        $("#ind-days").text(data.daily.wind_speed)
        $("#ind-days").text(data.daily.humidity) 
    }

    // Local Storage

// for (let i = 1; i < data.daily.length; i++) {
//     const element = array[i];
    
// }


// use city info to move into lat, lon data

// let getLatLon = function() {

//     // function to call cities that I can't get to work
//     const apiUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=austin&appid=9231802aec25fba81f6ca09766ddefe6";

// }

// use lat, lon, city to generate weather

// use lat, lon, city, weather info to generate results on html

// generate daily results in appropriate containers


// API Key for Lat Lon data:
// https://api.openweathermap.org/data/2.5/weather?q=austin&appid=9231802aec25fba81f6ca09766ddefe6


// API Key for weather data
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}&units=imperial











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
