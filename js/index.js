// index.js

// Function to fetch weather data from the weather API
async function fetchWeatherData() {
  const apiUrl =
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true'

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    // Process the weather data if needed and update the DOM
    const weatherInfoDiv = document.getElementById('weatherInfo')
    weatherInfoDiv.innerHTML = '<h2>Weather Information</h2>'

    // Check if the data contains the hourly key and it is an object with time and temperature_2m properties
    if (
      data.hasOwnProperty('hourly') &&
      data.hourly.hasOwnProperty('time') &&
      data.hourly.hasOwnProperty('temperature_2m')
    ) {
      const hourlyTime = data.hourly.time
      const hourlyTemperature = data.hourly.temperature_2m

      // Display hourly time and temperature
      for (let i = 0; i < hourlyTime.length; i++) {
        const time = new Date(hourlyTime[i]).toLocaleTimeString()
        const temperature = hourlyTemperature[i]
        weatherInfoDiv.innerHTML += `
          <p>Time: ${time}</p>
          <p>Temperature: ${temperature} °C</p>
        `
      }
    } else {
      console.error('Invalid weather data format:', data)
    }
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

// Call the fetchWeatherData function to get weather data when the popup is loaded
document.addEventListener('DOMContentLoaded', fetchWeatherData)
