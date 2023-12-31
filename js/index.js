async function fetchWeatherData() {
  const apiUrl =
    'https://api.open-meteo.com/v1/forecast?latitude=-36.8485&longitude=174.7633&hourly=temperature_2m&current_weather=true&timezone=Pacific%2FAuckland&models=best_match'

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    // Process the weather data if needed and update the DOM
    const weatherInfoDiv = document.getElementById('weatherInfo')
    weatherInfoDiv.innerHTML = '<h2>Weather Information</h2>'

    // Check if the data contains the current_weather key
    if (data.hasOwnProperty('current_weather')) {
      // ... your existing code to get current time and temperature ...
      const currentTimeISO = data.current_weather.time // Get the current time in ISO8601 format
      const currentTimezone = data.timezone_abbreviation // Get the time zone abbreviation

      // Define a mapping of time zone abbreviations to their full names
      const timezoneMapping = {
        NZST: 'New Zealand Standard Time',
        // Add more mappings as needed
      }

      // Get the full time zone name from the mapping
      const timezoneFullName =
        timezoneMapping[currentTimezone] || currentTimezone

      // Convert the ISO8601 time string to the local time zone time
      const currentTime = new Date(currentTimeISO).toLocaleTimeString(
        undefined,
        { timeZoneName: 'long', hour12: false }
      )

      // Display the current time and temperature
      const currentTemperature = data.current_weather.temperature
      weatherInfoDiv.innerHTML += `
        <p>Time: ${currentTime} (${timezoneFullName})</p>
        <p>Temperature: ${currentTemperature.toFixed(
          1
        )} &deg;C</p> <!-- Using &deg; for the degree symbol -->
      `

      // Get the weather code from the API response
      const weatherCode = data.current_weather.weathercode

      // Create a Skycons instance
      const icons = new Skycons()

      // Define a mapping of weather code to corresponding Skycons icon constants
      const weatherIconMapping = {
        1: Skycons.CLEAR_DAY,
        // Add more mappings for other weather codes
      }

      // Set the appropriate Skycons icon based on the weather code
      if (weatherIconMapping[weatherCode]) {
        const canvasElement = document.createElement('canvas')
        canvasElement.width = 64
        canvasElement.height = 64
        canvasElement.id = 'weatherIcon'
        weatherInfoDiv.appendChild(canvasElement)
        icons.set('weatherIcon', weatherIconMapping[weatherCode])
        icons.play()
      } else {
        console.error('Invalid weather code:', weatherCode)
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
