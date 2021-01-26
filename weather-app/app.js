const request = require('request')

const url =
  'http://api.weatherstack.com/current?access_key=9327bfb3c7bb9eed31af187b3902683b&query=36.169941,-115.139832&units=f'

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to service')
  } else if (response.body.error) {
    console.log('Unable to find location')
  } else {
    console.log(
      `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees`
    )
  }
})

const mapboxUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Las%20Vegas.json?access_token=pk.eyJ1Ijoiam9ud2lsbG1pbGxlciIsImEiOiJja2thYnNwMGQwZWtnMm9yMWU3OG90eTV6In0.IUUZI9fzAGXXIzi9ZLZb7A&limit=1'

request({ url: mapboxUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to server')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location')
  } else {
    console.log('Place: ', response.body.features[0].place_name)
    console.log(
      `Latitude: ${response.body.features[0].geometry.coordinates[1]} Longitude: ${response.body.features[0].geometry.coordinates[0]}`
    )
  }
})
