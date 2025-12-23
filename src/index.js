import "./style/general.css";
import "./style/header.css";
import "./style/main.css";
import "./style/dialog.css";
import { displayWeatherData, displayDateTime, displayHourlyForecast, displayDailyForecast } from "./scripts/dom.js";
import { weatherSvg } from "./scripts/svg.js";

const apiKey = 'c10d5fa98716e518a276928d5ebd97a0';

const state = {
    city: "Manila",
    units: "metric"
};

const unitSymbols = {
    metric: "°C",
    imperial: "°F",
    standard: "K"
};

async function getWeatherData(city, units) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`);
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

async function getForecastData(city, units) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching forecast data:', error);
        return null;
    }
}

async function processWeatherData(city, units) {
    const rawData = await getWeatherData(city, units);
    const forecastData = await getForecastData(city, units);
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
            feels_like: rawData.main.feels_like,
            description: rawData.weather[0].description,
            humidity: rawData.main.humidity,
            windSpeed: rawData.wind.speed,
            cityName: rawData.name,
            country: rawData.sys.country,
            sunrise: rawData.sys.sunrise,
            sunset: rawData.sys.sunset,
            icon: iconMap[iconCode] || weatherSvg.sun,
            visibility: rawData.visibility,
        };
        const hourlyForecast = processHourlyForecast(forecastData);
        const dailyForecast = processDailyForecast(forecastData);
        return { processedData, hourlyForecast, dailyForecast, units };
    }
    return null;
}

function processHourlyForecast(forecastData) {
    if (!forecastData || !forecastData.list) {
        return null;
    }

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

    return forecastData.list.slice(0, 7).map(item => {
        const date = new Date(item.dt_txt);
        const time = date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
        const iconCode = item.weather[0].icon;
        return {
            time: time,
            icon: iconMap[iconCode] || weatherSvg.sun,
            temperature: Math.round(item.main.temp)
        };
    });
}

function processDailyForecast(forecastData) {
    if (!forecastData || !forecastData.list) {
        return null;
    }

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

    const dailyData = {};

    forecastData.list.forEach(item => {
        const date = new Date(item.dt_txt);
        const day = date.toISOString().split('T')[0];

        if (!dailyData[day]) {
            dailyData[day] = {
                temps: [],
                icons: []
            };
        }

        dailyData[day].temps.push(item.main.temp);
        dailyData[day].icons.push(item.weather[0].icon);
    });

    return Object.keys(dailyData).slice(0, 5).map(day => {
        const dayTemps = dailyData[day].temps;
        const dayIcons = dailyData[day].icons;
        const highTemp = Math.round(Math.max(...dayTemps));
        const lowTemp = Math.round(Math.min(...dayTemps));
        const iconCode = dayIcons[Math.floor(dayIcons.length / 2)];
        const date = new Date(day);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const monthDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        return {
            day: dayName,
            date: monthDate,
            highTemp: highTemp,
            lowTemp: lowTemp,
            icon: iconMap[iconCode] || weatherSvg.sun
        };
    });
}

async function search() {
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const city = cityInput.value;
    if (city) {
        state.city = city;
        searchButton.classList.add('loading');
        searchButton.disabled = true;
        try {
            const weatherData = await processWeatherData(state.city, state.units);
            if (weatherData) {
                const { processedData, hourlyForecast, dailyForecast, units } = weatherData;
                displayWeatherData(processedData, unitSymbols[units]);
                displayHourlyForecast(hourlyForecast, unitSymbols[units]);
                displayDailyForecast(dailyForecast, unitSymbols[units]);
                displayDateTime();
            } else {
                showDialog('Sorry! City Not Found');
            }
        } finally {
            searchButton.classList.remove('loading');
            searchButton.disabled = false;
            cityInput.value = '';
        }
    }
}

async function fetchAndDisplayWeather(city, units) {
    const weatherData = await processWeatherData(city, units);
    if (weatherData) {
        const { processedData, hourlyForecast, dailyForecast } = weatherData;
        displayWeatherData(processedData, unitSymbols[units]);
        displayHourlyForecast(hourlyForecast, unitSymbols[units]);
        displayDailyForecast(dailyForecast, unitSymbols[units]);
        displayDateTime();
    } else {
        showDialog('City not found');
    }
}

function showDialog(message) {
    const dialog = document.getElementById('error-dialog');
    const messageElement = document.getElementById('error-message');
    messageElement.textContent = message;
    dialog.style.display = 'flex';
}

function closeDialog() {
    const dialog = document.getElementById('error-dialog');
    dialog.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    displayDateTime();
    const searchButton = document.getElementById('search-button');
    const cityInput = document.getElementById('city-input');
    const unitSelect = document.getElementById('unit-select');
    const closeButton = document.getElementById('close-dialog');

    closeButton.addEventListener('click', closeDialog);
    searchButton.addEventListener('click', search);
    cityInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            search();
        }
    });

    unitSelect.addEventListener('change', async () => {
        state.units = unitSelect.value;
        await fetchAndDisplayWeather(state.city, state.units);
    });

    fetchAndDisplayWeather(state.city, state.units);
});

function updateOptionLabels() {
  const select = document.getElementById("unit-select");
  if (!select) return;

  const isSmallScreen = window.innerWidth <= 375;

  Array.from(select.options).forEach(option => {
    option.text = isSmallScreen ? option.dataset.short : option.dataset.long;
  });
}
updateOptionLabels();

window.addEventListener("resize", updateOptionLabels);
window.addEventListener("load", updateOptionLabels);
window.addEventListener("orientationchange", updateOptionLabels);