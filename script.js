var searchHistory = document.querySelector("#search-history");
var searches = [];


$(".search-btn").click(function (e) {

    e.preventDefault();
    var cityname = $("#cityName").val();

    var date = new Date();
    var d = date.getDate();
    var m =  date.getMonth();
    m += 1;  
    var y = date.getFullYear();

    var today = m + "/" + d + "/" + y;

    var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&APPID=" + "81d8ef96afa57d12a8d97affba137461";


    $.ajax({
        url: urlCurrent,
        method: "GET"

    }).then(function (dataCurr) {

        //getting current dates
        console.log(dataCurr);
        //var tempF;

        var city = dataCurr.name;
        var tempToday = dataCurr.main.temp;
        var humidityToday = dataCurr.main.humidity;
        var windToday = dataCurr.wind.speed;
        var icon = dataCurr.weather[0].icon;
        var iconLink =  "http://openweathermap.org/img/w/" + icon + ".png";


        //tempF = (((tempToday-213.15)+1.8)+32);
        $("#city-header").text(city + " " + today);
        console.log(icon);
        $("#condition").attr('src', iconLink);
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
        var icon1 = response.list[0].weather[0].icon;
        var humidity1 = response.list[0].main.humidity;
        var wind1 = response.list[0].wind.speed;
        var iconLink1 =  "http://openweathermap.org/img/w/" + icon1 + ".png";

        var temp2 = response.list[6].main.temp;
        var icon2 = response.list[6].weather[0].icon;
        var humidity2 = response.list[6].main.humidity;
        var wind2 = response.list[6].wind.speed;
        var iconLink2 =  "http://openweathermap.org/img/w/" + icon2 + ".png";

        var temp3 = response.list[13].main.temp;
        var icon3 = response.list[13].weather[0].icon;
        var humidity3 = response.list[13].main.humidity;
        var wind3 = response.list[13].wind.speed;
        var iconLink3 =  "http://openweathermap.org/img/w/" + icon3 + ".png";


        var temp4 = response.list[22].main.temp;
        var icon4 = response.list[22].weather[0].icon;
        var humidity4 = response.list[22].main.humidity;
        var wind4 = response.list[22].wind.speed;
        var iconLink4 =  "http://openweathermap.org/img/w/" + icon4 + ".png";

        var temp5 = response.list[30].main.temp;
        var icon5 = response.list[30].weather[0].icon;
        var humidity5 = response.list[30].main.humidity;
        var wind5 = response.list[30].wind.speed;
        var iconLink5 =  "http://openweathermap.org/img/w/" + icon5 + ".png";

        // getting the html variables and setting them to the values i have taken from future weather api
        d+=1;
        $("#date-1").text(m +"/"+ d + "/" + y);
        $("#temp-1").text("Temperature: " + temp1);
        $("#condition-1").attr('src', iconLink1);
        $("#humidity-1").text("Humidity: " + humidity1);
        $("#wind-speed-1").text("Wind Speed: " + wind1);

        d+=1;
        $("#date-2").text(m +"/"+ d + "/" + y);
        $("#temp-2").text("Temperature: " + temp2);
        $("#condition-2").attr('src', iconLink2);
        $("#humidity-2").text("Humidity: " + humidity2);
        $("#wind-speed-2").text("Wind Speed: " + wind2);

        d+=1;
        $("#date-3").text(m +"/"+ d + "/" + y);
        $("#temp-3").text("Temperature: " + temp3);
        $("#condition-3").attr('src', iconLink3);
        $("#humidity-3").text("Humidity: " + humidity3);
        $("#wind-speed-3").text("Wind Speed: " + wind3);

        d+=1;
        $("#date-4").text(m +"/"+ d + "/" + y);
        $("#temp-4").text("Temperature: " + temp4);
        $("#condition-4").attr('src', iconLink4);
        $("#humidity-4").text("Humidity: " + humidity4);
        $("#wind-speed-4").text("Wind Speed: " + wind4);

        d+=1;
        $("#date-5").text(m +"/"+ d + "/" + y);
        $("#temp-5").text("Temperature: " + temp5);
        $("#condition-5").attr('src', iconLink5);
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