async function identifyCarInImage(imageUrl) {
  const apiKey = '47gs2rinj_cai667zpl_ey2o4qbsv'
  const apiUrl = 'http://api.carsxe.com/whatcaristhat'

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: imageUrl,
  }

  try {
    const response = await fetch(`${apiUrl}?key=${apiKey}`, requestOptions)
    const data = await response.json()

    if (data.success) {
      // Vehicle information found
      const vehicleInfo = data.results[0]
      console.log('Vehicle Information:', vehicleInfo)
    } else {
      console.error('Could not make out the vehicle in the image.')
    }
  } catch (error) {
    console.error('Error identifying the vehicle:', error)
  }
}

// Example usage:
identifyCarInImage(
  'https://upload.wikimedia.org/wikipedia/commons/4/44/2019_Acura_RDX_A-Spec_front_red_4.2.18.jpg'
)
