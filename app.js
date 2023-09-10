const apiKey = "02833a2ffe6e1f34c14087ad1cf65e57";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather img")

async function checkWeather(city){
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".temperature").style.display = "none";
    } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature-degree").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".temperature-description").innerHTML = data.weather[0].main;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"; 
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"; 
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"; 
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"; 
    } 

    document.querySelector(".weather").style.display ="flex";
    document.querySelector(".temperature").style.display ="flex";
    document.querySelector(".error").style.display ="none";
}
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})
