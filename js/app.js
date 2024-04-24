const apiKey = "e351201311b6c9b5105da9e8012e963e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputValue = document.querySelector(".input-container input");
const searchBtn = document.querySelector(".input-container button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".humi").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "icons/cloudy.png";
        document.querySelector(".bgimg").style.backgroundImage = "url('images/cloudy.jpg')";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "icons/clear.png";
        document.querySelector(".bgimg").style.backgroundImage = "url('images/clear.jpg')";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "icons/rain.png";
        document.querySelector(".bgimg").style.backgroundImage = "url('images/rain.jpg')";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "icons/drizzle.png";
        document.querySelector(".bgimg").style.backgroundImage = "url('images/drizzle.jpg')";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "icons/mist.png"; 
        document.querySelector(".bgimg").style.backgroundImage = "url('images/mist.jpg')";
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "icons/snowy.png";
        document.querySelector(".bgimg").style.backgroundImage = "url('images/snow.jpg')";
    }

    console.log(data);



}


searchBtn.addEventListener("click", ()=>{
    checkWeather(inputValue.value);
})