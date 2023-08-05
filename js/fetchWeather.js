async function fetchWeatherData() {
  const apiUrl =
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true&timezone=Pacific%2FAuckland&models=best_match'

  try {
    const response = await fetch(apiUrl)
    const weatherData = await response.json()

    // Extract time, temperature, and weather code data from the API response
    const timeArray = weatherData.hourly.time
    const temperatureArray = weatherData.hourly.temperature_2m
    const weatherCodeArray = weatherData.hourly.weathercode

    // Log the data for debugging (you can remove this in production)
    console.log('Time Array:', timeArray)
    console.log('Temperature Array:', temperatureArray)
    console.log('Weather Code Array:', weatherCodeArray)

    // You can process the data here and update your Chrome extension UI
    // For example, update the DOM elements to display the time, temperature, and weather code

    // For simplicity, let's just use the first hour's data as an example
    const firstHourTime = timeArray[0]
    const firstHourTemperature = temperatureArray[0]
    const firstHourWeatherCode = weatherCodeArray[0]

    // Log the first hour's time, temperature, and weather code (you can remove this in production)
    console.log('First Hour Time:', firstHourTime)
    console.log('First Hour Temperature:', firstHourTemperature)
    console.log('First Hour Weather Code:', firstHourWeatherCode)

    // Update the DOM elements to display the time, temperature, and weather code (replace with your logic)
    // const timeElement = document.getElementById('time');
    // const temperatureElement = document.getElementById('temperature');
    // const weatherCodeElement = document.getElementById('weather-code');
    // timeElement.textContent = firstHourTime;
    // temperatureElement.textContent = `${firstHourTemperature} °C`;
    // weatherCodeElement.textContent = `Weather Code: ${firstHourWeatherCode}`;
  } catch (error) {
    console.error('Error fetching weather data:', error)
    // Handle errors, update UI to show an error message, etc.
  }
}

// Call the function to fetch weather data
fetchWeatherData()
