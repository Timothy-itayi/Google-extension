// index.js

// Function to fetch weather data from your backend server
async function fetchWeatherData() {
  try {
    const response = await fetch('http://localhost:3000/getWeatherData')
    const data = await response.json()

    // Process the weather data if needed and update the DOM
    const weatherInfoDiv = document.getElementById('weatherInfo')
    weatherInfoDiv.innerHTML = '<h2>Weather Information</h2>'

    // Example: Display the first hour's time and temperature
    const time = data.time
    const temperature = data.temperature
    weatherInfoDiv.innerHTML += `
      <p>Time: ${time}</p>
      <p>Temperature: ${temperature} °C</p>
    `
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

// Call the fetchWeatherData function to get weather data when the popup is loaded
document.addEventListener('DOMContentLoaded', fetchWeatherData)
