var searchHistory = document.querySelector("#search-history");
var searches = [];


$(".search-btn").click(function (e) {

    e.preventDefault();
    var cityname = $("#cityName").val();

    var date = new Date();

    var today = date.getUTCDate();

    var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&APPID=" + "81d8ef96afa57d12a8d97affba137461";


    $.ajax({
        url: urlCurrent,
        method: "GET"

    }).then(function (dataCurr) {

        console.log(dataCurr);

        var city = dataCurr.name;
        var tempToday = dataCurr.main.temp;
        var humidityToday = dataCurr.main.humidity;
        var windToday = dataCurr.wind.speed;


        $("#city-header").text(city + " " + today);
        $("#temp").text("Temperature: " + tempToday);
        $("#humidity").text("Humidity: " + humidityToday);
        $("#wind-speed").text("Wind Speed: " + windToday);


        var long = dataCurr.coord.lon;
        var lat = dataCurr.coord.lat;

        var uvCurr = "https://api.openweathermap.org/data/2.5/uvi?appid=" + "81d8ef96afa57d12a8d97affba137461&lat=" + lat + "&lon=" + long;

        $.ajax({
            url: uvCurr,
            method: "GET"

        }).then(function (uvCurr) {

            console.log(uvCurr);

            var uvRate = uvCurr.value;

            //$("#uv-index").text(uvRate);
            var uvVal = $("#uv-index");

            //changing the colors of UV 
            console.log(uvRate);
            uvVal.text(uvRate);
            if (uvRate <= 4) {
                uvVal.attr("class", "bg-success");
            } else if (4 < uvRate && uvRate <= 7) {
                uvVal.attr("class", "bg-warning");
            } else if (7 < uvRate) {
                uvVal.attr("class", "bg-danger");
            }

        })

    })

    var urlSearch = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&APPID=" + "81d8ef96afa57d12a8d97affba137461";


    $.ajax({
        url: urlSearch,
        method: "GET"

    }).then(function (response) {

        console.log(response);

        var temp1 = response.list[0].main.temp;
        var humidity1 = response.list[0].main.humidity;
        var wind1 = response.list[0].wind.speed;

        var temp2 = response.list[6].main.temp;
        var humidity2 = response.list[6].main.humidity;
        var wind2 = response.list[6].wind.speed;

        var temp3 = response.list[13].main.temp;
        var humidity3 = response.list[13].main.humidity;
        var wind3 = response.list[13].wind.speed;


        var temp4 = response.list[22].main.temp;
        var humidity4 = response.list[22].main.humidity;
        var wind4 = response.list[22].wind.speed;


        var temp5 = response.list[30].main.temp;
        var humidity5 = response.list[30].main.humidity;
        var wind5 = response.list[30].wind.speed;

        // getting the html variables and setting them to the values i have taken from future weather api

        $("#temp-1").text("Temperature: " + temp1);
        $("#humidity-1").text("Humidity: " + humidity1);
        $("#wind-speed-1").text("Wind Speed: " + wind1);

        $("#temp-2").text("Temperature: " + temp2);
        $("#humidity-2").text("Humidity: " + humidity2);
        $("#wind-speed-2").text("Wind Speed: " + wind2);

        $("#temp-3").text("Temperature: " + temp3);
        $("#humidity-3").text("Humidity: " + humidity3);
        $("#wind-speed-3").text("Wind Speed: " + wind3);

        $("#temp-4").text("Temperature: " + temp4);
        $("#humidity-4").text("Humidity: " + humidity4);
        $("#wind-speed-4").text("Wind Speed: " + wind4);

        $("#temp-5").text("Temperature: " + temp5);
        $("#humidity-5").text("Humidity: " + humidity5);
        $("#wind-speed-5").text("Wind Speed: " + wind5);

        // saving the search history on the browser 
    }).then(function createHistory() {


        var button = document.createElement("button");

        button.className = "hisBtn";
        button.id = searches.length;
        button.textContent = cityname;
        button.style.width = "400px";
        button.style.height = "50px";
        button.style.color = "gray";

        searchHistory.appendChild(button);

        searches.push(cityname);



    })

})

$("#" + searches.length + ".hisBtn").click(function (b) {
    histroyBtn = $(".hisBtn");
    id = histroyBtn.id
    city = searches[id];
    b.preventDefault();
    cityname = city;

})