// popup.js

// Function to fetch car images from the CarsXE API
async function fetchCarImg() {
  const apiKey = '47gs2rinj_cai667zpl_ey2o4qbsv'
  const query = 'car' // You can replace this with specific car details if needed

  try {
    const response = await fetch(
      `https://api.carsxe.com/images?apiKey=${apiKey}&query=${encodeURIComponent(
        query
      )}`,
      { mode: 'cors' } // Add the 'mode: cors' option to handle CORS issues
    )

    if (!response.ok) {
      throw new Error('Unable to fetch car images')
    }

    const data = await response.json()
    console.log('Fetched car images:', data)

    // Process the car images if needed and update the DOM
    const carImagesDiv = document.getElementById('carImages')
    carImagesDiv.innerHTML = '<h2>Car Images</h2>'

    // Example: Display the first three car images
    const carImages = data.images.slice(0, 3)
    carImages.forEach((image) => {
      carImagesDiv.innerHTML += `
        <img src="${image.url}" alt="${image.alt}" style="width: 200px; height: 150px;">
      `
    })
  } catch (error) {
    console.error('Error fetching car images:', error)
  }
}

// Call the fetchCarImg function to get car images when the popup is loaded
document.addEventListener('DOMContentLoaded', fetchCarImg)
