//Button on click function

$(".search-btn").click(function (e) {

    e.preventDefault();
    var cityname = $("#cityName").val();

    var date = new Date();
    var today = date.getDate();

    var limit = 5;

    var urlSearch = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&APPID=" + "81d8ef96afa57d12a8d97affba137461";


    $.ajax({
        url: urlSearch,
        method: "GET"

    }).then(function(response){

        console.log(response);

        var city = response.city.name;
        var temp = response.main.temp;
        var condition = response.weather;







        $("#city-header").text(city + " " + today + " " + condition);

        $("#temp").text("Temperature: " + temp);



    })

    /*

   $.getJSON(urlSearch, function(data) {

        console.log(data);

        city_name = data["name"];
        country_name = data["sys"]["country"];
        weather_description = data["weather"][0]["description"];
        temp = data["main"]["temp"];
        pressure = data["main"]["pressure"];
        wind_speed = data["wind"]["speed"];

       // $("#cityname").html(city_name + " &#40;" + country_name + "&#41; " + "has " + weather_description);
        $("#temp").text(temp);
       // $(".pressure").html(pressure + " mBar");
        //$(".wind-spd").html(wind_speed + " m/s");

      })
    */
})