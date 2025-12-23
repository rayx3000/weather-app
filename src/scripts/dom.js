const displayWeatherData = (data, unitSymbol) => {
    if (!data) {
        return;
    }

    const { temperature, feels_like, description, humidity, windSpeed, cityName, country, sunrise, sunset, icon, visibility } = data;

    document.querySelector('.location-name').textContent = `${cityName}, ${country}`;
    document.querySelector('#temperature').innerHTML = `${Math.round(temperature)}${unitSymbol}`;
    document.querySelector('.weather-condition').textContent = description.length > 20 ? `${description.slice(0, 20)}...` : description;

    const iconContainer = document.querySelector('#weather-icon');
    if (iconContainer.tagName === 'IMG') {
        const div = document.createElement('div');
        div.id = 'weather-icon';
        div.className = iconContainer.className;
        div.innerHTML = icon;
        iconContainer.replaceWith(div);
    } else {
        iconContainer.innerHTML = icon;
    }

    const svg = document.querySelector('#weather-icon svg');
    if (svg && !svg.hasAttribute('width')) svg.setAttribute('width', '64');
    if (svg && !svg.hasAttribute('height')) svg.setAttribute('height', '64');

    const highlightCards = document.querySelectorAll('.highlight-card');
    highlightCards[0].querySelector('.card-value').textContent = `${Math.round(feels_like)}${unitSymbol}`;
    highlightCards[1].querySelector('.card-value').textContent = `${windSpeed} km/h`;
    highlightCards[2].querySelector('.card-value').textContent = `${humidity}%`;
    highlightCards[3].querySelector('.card-value').textContent = `${visibility / 1000} km`;

    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    document.getElementById('sunrise-text').textContent = new Date(sunrise * 1000).toLocaleTimeString('en-US', timeOptions);
    document.getElementById('sunset-text').textContent = new Date(sunset * 1000).toLocaleTimeString('en-US', timeOptions);
};

const displayDateTime = () => {
    const now = new Date();
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    const dateOptions = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };

    document.querySelector('.local-time').textContent = now.toLocaleTimeString('en-US', timeOptions);
    document.querySelector('.date').textContent = now.toLocaleDateString('en-US', dateOptions);
};

const displayHourlyForecast = (forecastData, unitSymbol) => {
    const hourlyForcastCards = document.querySelector('.hourly-forecast-cards');
    hourlyForcastCards.innerHTML = '';

    let forecastCard = '';
    
    forecastData.slice(0, 7).forEach((forecast) => {
        const { temperature, icon, time } = forecast;
        forecastCard += `<div class="hourly-forecast-card">
                                    <span class="forecast-time">${time}</span>
                                    <span class="forecast-icon">${icon}</span>
                                    <span class="forecast-temp">${temperature}${unitSymbol}</span>
                            </div>`
    });

    hourlyForcastCards.innerHTML = forecastCard;
            
};

const displayDailyForecast = (forecastData, unitSymbol) => {
    const dailyForecastCards = document.querySelector('.daily-forecast-cards');
    dailyForecastCards.innerHTML = '';

    let forecastCard = '';

    forecastData.forEach((forecast) => {
        const { day, date, highTemp, lowTemp, icon } = forecast;
        forecastCard += `<div class="daily-forecast-card">
                                    <span class="day-name">${day}, ${date}</span>
                                    ${icon}
                                    <div class="temp-range">
                                        <span class="temp-high">${highTemp}${unitSymbol}</span>
                                        <span class="temp-low">${lowTemp}${unitSymbol}</span>
                                    </div>
                                </div>`
    });

    dailyForecastCards.innerHTML = forecastCard;
}

export { displayWeatherData, displayDateTime, displayHourlyForecast, displayDailyForecast };