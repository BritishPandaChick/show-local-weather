$(document).ready(function(){
  var lat;
  var long;

  $.getJSON("http://ip-api.com/json", function(data2){
    lat=data2.lat;
    long=data2.lon;
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=41ad958fc5f517ab4a12f91823768c9';

    $.getJSON(api, function(data){
      var fTemp;
      var cTemp;
      var kTemp;
      var tempSwap=true;

      //JSON call for Open Weather API
      var weatherType = data.weather[0].description;
      kTemp = data.main.temp;
      var windSpeed = data.wind.speed;
      var city = data.name;

      //temperature in Kelvin
      fTemp = (kTemp*(9/5)-459.67).toFixed(1);
      //Temp in F

      //City name
      cTemp = (kTemp-273).toFixed(1);
      console.log(city);

      $("#city").html(city);
      $("#weatherType").html(weatherType);
      $("#fTemp").html(fTemp + " &#8457;");

      $("#fTemp").click(function(){
        if(tempSwap===false){
          $("#fTemp").html(fTemp + " &#8457;");
          tempSwap = true;
        } else {
          $("#fTemp").html(cTemp + " &#8457;");
          tempSwap = false;
        }
      });

      windSpeed = (2.237*(windspeed)).toFixed(1);
      $("#windSpeed").html(windSpeed + " mph");

      if(fTemp > 80){
        $('body').css('background-image', 'url(https://pixabay.com/static/uploads/photo/2015/03/26/11/48/gobi-692640_960_720.jpg)');
       } else if(fTemp > 70){
         $('body').css('background-image', 'url(https://images.unsplash.com/photo-1432059964050-d4eba2ef368a?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.08ixlib=rb-0.3.5&q=8082=1925)');
       } else if(fTemp > 60){
         $('body').css('background-image', 'url(https://pixabay.com/static/uploads/photo/2015/11/02/18/32/water-1018808_960_720.jpg)');
       } else if(fTemp > 50){
         $('body').css('background-image', 'url(https://pixabay.com/static/uploads/photo/2012/10/26/09/41/forest-63279_960_720.jpg)');
       } else if (fTemp> 40){
         $('body').css('background-image', 'url(https://pixabay.com/static/uploads/photo/2013/11/03/17/23/frosted-204921_960_720.jpg)');
       } else {
         $('body').css('background-image', 'url(https://pixabay.com/static/uploads/photo/2013/12/28/13/23/winter-234721_960_720.jpg)');
        }
      });
    });
  });
