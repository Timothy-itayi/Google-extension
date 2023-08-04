// fetchWeather.js

async function fetchWeatherData() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your API key from open-meteo.com
  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true';

  try {
    const response = await fetch(apiUrl);
    const weatherData = await response.json();

    // Extract time and temperature data from the API response
    const timeArray = weatherData.hourly.time;
    const temperatureArray = weatherData.hourly.temperature_2m;

    // Log the data for debugging (you can remove this in production)
    console.log('Time Array:', timeArray);
    console.log('Temperature Array:', temperatureArray);

    // You can process the data here and update your Chrome extension UI
    // For example, update the DOM elements to display the time and temperature

    // For simplicity, let's just use the first hour's data as an example
    const firstHourTime = timeArray[0];
    const firstHourTemperature = temperatureArray[0];

    // Log the first hour's time and temperature (you can remove this in production)
    console.log('First Hour Time:', firstHourTime);
    console.log('First Hour Temperature:', firstHourTemperature);

    // Update the DOM elements to display the time and temperature (replace with your logic)
    // const timeElement = document.getElementById('time');
    // const temperatureElement = document.getElementById('temperature');
    // timeElement.textContent = firstHourTime;
    // temperatureElement.textContent = `${firstHourTemperature} °C`;

  } catch (error) {
    console.error('Error fetching weather data:', error);
    // Handle errors, update UI to show an error message, etc.
  }
}

// Call the function to fetch weather data
fetchWeatherData();
