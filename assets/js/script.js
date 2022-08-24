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
let array = [];
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

                        renderDailyEl(data);

                        //code
                    })
            });
        
    })
    

    function renderDailyEl(data){
        $("#city-temp").text("Temp : " + data.current.temp + ' Deg')
        $("#city-wind").text("Wind Speed : " + data.current.wind_speed + ' MPH')
        $("#city-humid").text("Humidity : " + data.current.humidity + '%')
        $("#city-uv").text("UV Index : " +data.current.uvi)
            if ('#city-uv' > 7) {
                $('#city-uv').addClass('bg-danger text-white');
            } else if ('#city-uv' > 5) {
                $('#city-uv').addClass('bg-warning text-dark');
            } else {
                $('#city-uv').addClass('bg-success text-white');
            }

        for (let i = 1; i < data.daily.length; i++) {
            const loopData = array[i];
            if (i === 6) {break; }
            let rollingDay = moment().add(i, 'd').format('MMMM Do YYYY');
            let card = $('<div>').addClass('card p-10 col-md-2 m-3 align-items-center text-center bg-light border border-dark-shadow')
            let cardBody = $('<div>').addClass('card-body');
            let cardDate = $('<h5>').addClass('card-subtitle').text(rollingDay);
            let cardText = $('<p>')
            .addClass('card-text')
            .text("High Temp : " + data.daily[i].temp.max);
            let cardText2 = $('<p>')
            .addClass('card-text')
            .text('Humidity : ' + data.daily[i].humidity);
            let cardText3 = $('<p>')
            .addClass('card-text')
            .text('Wind : ' + data.daily[i].wind_speed + " MPH");
            let cardText4 = $('<p>')
            .addClass('card-text')
            .text('UV Index : ' + data.daily[i].uvi);
            if (data.daily[i].uvi > 7) {
                cardText4.addClass('bg-danger text-white');
            } else if (data.daily[i] > 5) {
                cardText4.addClass('bg-warning text-dark');
            } else {
                $(cardText4).addClass('bg-success text-white');
            }

            cardBody.append(
                cardDate,
                cardText,
                cardText2,
                cardText3,
                cardText4,
            );

            card.append(cardBody);
            $('#five-day-cont').append(card);
        }
    }

    // function renderForecastEl(data) {
    //     for (let i = 1; i < data.daily.length; i++) {
    //         const loopData = array[i];
    //         if (i === 6) {break; }
    //         let card = $('<div>').addClass('card p-10 row-md-2 m-3 align-items-center text-center bg-light border border-dark-shadow')
    //         let cardBody = $('<div>').addClass('card-body');
    //         let cardTitle = $('<h4>').addClass('card-title').text(data.city);
    //         let cardDate = $('<h5>').addClass('card-subtitle').text(data.time);
    //         let cardText = $('<p>').addClass('card-text').text("Temp : " + data.daily.temp);
    //         let cardText2 = $('<p>').addClass('card-text').text('Humidity : ' + data.daily.humidity);
    //         let cardText3 = $('<p>').addClass('card-text').text('Wind : ' + data.daily.wind_speed + " MPH");
    //         let cardText4 = $('<p>').addClass('card-text').text('UV Index : ' + data.daily.uvi);

    //         cardBody.append(
    //             cardTitle,
    //             cardDate,
    //             cardText,
    //             cardText2,
    //             cardText3,
    //             cardText4,
    //         );

    //         card.append(cardBody);
            
    //         $('#five-day-cont').append(card);
    //     }
    // }

    // Local Storage


// use city info to move into lat, lon data



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
