// popup.js

// Function to fetch car images from your backend server
async function fetchCarImg() {
  try {
    const response = await fetch('http://localhost:3000/getCarImages')
    const data = await response.json()

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
