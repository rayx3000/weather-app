const displayWeatherData = (data) => {
    if (!data) {
        return;
    }

    const { temperature, description, humidity, windSpeed, cityName, country, sunrise, sunset } = data;

    document.querySelector('.location-name').textContent = `${cityName}, ${country}`;
    document.querySelector('.temperature span').innerHTML = `${Math.round(temperature - 273.15)}&#8451;`;
    document.querySelector('.weather-condition').textContent = description.length > 20 ? `${description.slice(0, 20)}...` : description;
    
    const highlightCards = document.querySelectorAll('.highlight-card');
    highlightCards[0].querySelector('.card-value').textContent = `${Math.round(temperature - 273.15)}℃`;
    highlightCards[1].querySelector('.card-value').textContent = `${windSpeed} km/h`;
    highlightCards[2].querySelector('.card-value').textContent = `${humidity}%`;

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

export { displayWeatherData, displayDateTime };
