import "./style/general.css";
import "./style/header.css";
import "./style/main.css";
import { displayWeatherData, displayDateTime } from "./scripts/dom.js";
import { weatherSvg } from "./scripts/svg.js";

const apiKey = 'c10d5fa98716e518a276928d5ebd97a0'; 

async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

async function processWeatherData(city) {
    const rawData = await getWeatherData(city);
    if (rawData && rawData.main && rawData.weather && rawData.wind && rawData.sys) {
        const iconCode = rawData.weather[0].icon;
        const iconMap = {
            '01d': weatherSvg.sun,
            '01n': weatherSvg.nightClear,
            '02d': weatherSvg.partlyCloudy,
            '02n': weatherSvg.nightPartlyCloudy,
            '03d': weatherSvg.cloudy,
            '03n': weatherSvg.cloudy,
            '04d': weatherSvg.overcast,
            '04n': weatherSvg.overcast,
            '09d': weatherSvg.drizzle,
            '09n': weatherSvg.drizzle,
            '10d': weatherSvg.rain,
            '10n': weatherSvg.rain,
            '11d': weatherSvg.thunderstorm,
            '11n': weatherSvg.thunderstorm,
            '13d': weatherSvg.snow,
            '13n': weatherSvg.snow,
            '50d': weatherSvg.mist,
            '50n': weatherSvg.mist
        };
        const processedData = {
            temperature: rawData.main.temp,
            description: rawData.weather[0].description,
            humidity: rawData.main.humidity,
            windSpeed: rawData.wind.speed,
            cityName: rawData.name,
            country: rawData.sys.country,
            sunrise: rawData.sys.sunrise,
            sunset: rawData.sys.sunset,
            icon: iconMap[iconCode] || weatherSvg.sun,
            visibility: rawData.visibility
        };
        return processedData;
    }
    return null;
}

async function search() {
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const city = cityInput.value;
    if (city) {
        searchButton.classList.add('loading');
        searchButton.disabled = true;
        try {
            const weatherData = await processWeatherData(city);
            if (weatherData) {
                displayWeatherData(weatherData);
                displayDateTime();
            } else {
                alert('City not found');
            }
        } finally {
            searchButton.classList.remove('loading');
            searchButton.disabled = false;
            cityInput.value = '';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayDateTime();
    const searchButton = document.getElementById('search-button');
    const cityInput = document.getElementById('city-input');

    searchButton.addEventListener('click', search);
    cityInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            search();
        }
    });

    (async () => {
        const weatherData = await processWeatherData("Manila");
        if (weatherData) {
            displayWeatherData(weatherData);
            displayDateTime();
        } else {
            alert('City not found');
        }
    })();
});

const rawData = await getWeatherData("Manila");
console.log(rawData);
const processedData = await processWeatherData("Manila");
console.log(processedData);