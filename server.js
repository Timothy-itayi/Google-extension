// server.js

const express = require('express')
let fetch
;(async () => {
  const nodeFetch = await import('node-fetch')
  fetch = nodeFetch.default

  app.listen(port, () => {
    console.log(`Server running on http://localhost;${port}`)
  })
})()
const app = express()
const port = 3000 // You can use any available port you prefer
const { identifyCarInImage } = require('./js/fetchcar.js')
// Middleware to parse JSON body of incoming requests
app.use(express.json())

// Endpoint to fetch car images from the CarsXE API
app.get('/', async (_req, res) => {
  const apiKey = '47gs2rinj_cai667zpl_ey2o4qbsv' // Replace with your CarsXE API key
  const query = 'car' // You can replace this with specific car details if needed

  try {
    const response = await fetch(
      `http://api.carsxe.com/images?apiKey=${apiKey}&query=${encodeURIComponent(
        query
      )}`
    )

    if (!response.ok) {
      throw new Error('Unable to fetch car images')
    }

    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error('Error fetching car images:', error)
    res
      .status(500)
      .json({ error: 'An error occurred while fetching car images' })
  }
}),
  app.post('/getCarImages', async (req, res) => {
    const imageUrl = req.body.imageUrl // Assuming the image URL is sent in the request body

    try {
      const vehicleInfo = awaitidentifyCarInImage(imageUrl).res.json(vehicleInfo)
    } catch (error) {
      console.error('Error identifying the vehicle:', error)
      res
        .status(500)
        .json({ error: 'An error occurred while identifying the vehicle' })
    }
  })
