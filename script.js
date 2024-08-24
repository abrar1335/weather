const apikey = "0819af798e730aacab9a780105498f31";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinp = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon");

async function weather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    if (response.ok) {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)} °c `;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity} % `;
        document.querySelector('.wind').innerHTML = `${(data.wind.speed * 3.6).toFixed(2)} km/h`; // Convert m/s to km/h
        
        if (data.weather[0].main == "Clouds") {
            weather_icon.src = "./p1_image/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weather_icon.src = "./p1_image/clear.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weather_icon.src = "./p1_image/drizzle.png"
        }
        else if (data.weather[0].main == "Rain") {
            weather_icon.src = "./p1_image/rain.png"
        }
        else if (data.weather[0].main == "Mist") {
            weather_icon.src = "./p1_image/mist.png"
        }

        else if (data.weather[0].main == "Snow") {
            weather_icon.src = "./p1_image/snow.png"
        }
    } else {
        alert("City not found!");
    }

    document.querySelector(".weather").style.display ='unset';

}
searchbtn.addEventListener('click', () => {
    weather(searchinp.value.trim()); // Use .value and .trim() to remove extra spaces
});