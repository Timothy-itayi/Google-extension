// fetchcar.js
async function fetchCarModule() {
  const fetch = await import('node-fetch').then((module) => module.default);
  return fetch;
}

async function identifyCarInImage(imageUrl) {
  const apiKey = '47gs2rinj_cai667zpl_ey2o4qbsv';
  const apiUrl = 'http://api.carsxe.com/images';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: imageUrl,
  };

  try {
    const response = await fetch(`${apiUrl}?key=${apiKey}`, requestOptions);
    const textResponse = await response.text(); // Get the response as text

    console.log('API Response:', textResponse); // Log the response as text

    const data = JSON.parse(textResponse);

    if (data.success) {
      // Vehicle information found
      const vehicleInfo = data.results[0];
      console.log('Vehicle Information:', vehicleInfo);
      return vehicleInfo;
    } else {
      console.error('Could not make out the vehicle in the image.');
    }
  } catch (error) {
    console.error('Error identifying the vehicle:', error);
  }
}

module.exports = {
  fetchCarModule,
  identifyCarInImage,
};
