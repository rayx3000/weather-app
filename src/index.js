import "./style/general.css";
import "./style/header.css";
import "./style/main.css";
import { displayWeatherData, displayDateTime } from "./scripts/dom.js";

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
        const processedData = {
            temperature: rawData.main.temp,
            description: rawData.weather[0].description,
            humidity: rawData.main.humidity,
            windSpeed: rawData.wind.speed,
            cityName: rawData.name,
            country: rawData.sys.country,
            sunrise: rawData.sys.sunrise,
            sunset: rawData.sys.sunset
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