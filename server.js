// server.js
const express = require('express');
const app = express();
const fetch = require('node-fetch');


const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true';

async function fetchWeatherData() {
  try {
    const response = await fetch(apiUrl);
    const weatherData = await response.json();

    // Extract time and temperature data from the API response
    const timeArray = weatherData.hourly.time;
    const temperatureArray = weatherData.hourly.temperature_2m;

    // Log the data for debugging (you can remove this in production)
    console.log('Time Array:', timeArray);
    console.log('Temperature Array:', temperatureArray);

    // You can send the data to the Chrome extension here
    // For simplicity, let's just send the first hour's data as an example
    const firstHourTime = timeArray[0];
    const firstHourTemperature = temperatureArray[0];

    // Log the first hour's time and temperature (you can remove this in production)
    console.log('First Hour Time:', firstHourTime);
    console.log('First Hour Temperature:', firstHourTemperature);

    // Send the data to the Chrome extension (replace this with your logic)
    // res.send({ time: firstHourTime, temperature: firstHourTemperature });

  } catch (error) {
    console.error('Error fetching weather data:', error);
    // res.status(500).send('Error fetching weather data');
  }
}

// Route to fetch weather data
app.get('/getWeatherData', async (req, res) => {
  await fetchWeatherData();
  res.send('Weather data fetched. Check the server console for details.');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
