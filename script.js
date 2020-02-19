
var searchHistory = document.querySelector("#search-history");



$(".search-btn").click(function (e) {

    e.preventDefault();
    var cityname = $("#cityName").val();

    var date = new Date();

    var today = date.getUTCDate();

    var limit = 5;

    var urlSearch = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&APPID=" + "81d8ef96afa57d12a8d97affba137461";


    $.ajax({
        url: urlSearch,
        method: "GET"

    }).then(function (response) {

        console.log(response);

        var city = response.city.name;
        var tempToday = response.list[0].main.temp;
        var humidityToday = response.list[0].main.humidity;
        var windToday = response.list[0].wind.speed;
        //var temp = response.main.temp;

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


        $("#city-header").text(city + " " + today);

        //$("#condition-img").attr('src', conditionT);

        $("#temp").text("Temperature: " + tempToday);
        $("#humidity").text("Humidity: " + humidityToday);
        $("#wind-speed").text("Wind Speed: " + windToday);

        $("#temp-1").text("Temperature: " + tempToday);
        $("#humidity-1").text("Humidity: " + humidityToday);
        $("#wind-speed-1").text("Wind Speed: " + windToday);

        $("#temp-2").text("Temperature: " + tempToday);
        $("#humidity-2").text("Humidity: " + humidityToday);
        $("#wind-speed-2").text("Wind Speed: " + windToday);

        $("#temp-3").text("Temperature: " + tempToday);
        $("#humidity-3").text("Humidity: " + humidityToday);
        $("#wind-speed-3").text("Wind Speed: " + windToday);

        $("#temp-4").text("Temperature: " + tempToday);
        $("#humidity-4").text("Humidity: " + humidityToday);
        $("#wind-speed-4").text("Wind Speed: " + windToday);

        $("#temp-5").text("Temperature: " + tempToday);
        $("#humidity-5").text("Humidity: " + humidityToday);
        $("#wind-speed-5").text("Wind Speed: " + windToday);

    }).then(function createHistory() {
        var searches = [];

        var li = document.createElement("li");
        li.textContent = cityname;
        searchHistory.appendChild(li);

        searches.push(cityname);


    })

})