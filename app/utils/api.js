import axios from 'axios'

const baseUrl = 'http://api.openweathermap.org/data/2.5/'
const APIKEY = 'APIKEY'

const prepRouteParams = (queryStringData) => {
  return Object.keys(queryStringData)
    .map((key) => {
      return key + '=' + encodeURIComponent(queryStringData[key])
    }).join('&')
}

const prepUrl = (type, queryStringData) => {
  return baseUrl + type + '?' + prepRouteParams(queryStringData)
}

const getQueryStringData = (city) => {
  return {
    q: city,
    type: 'accurate',
    APPID: APIKEY,
    cnt: 5
  }
}

const getCurrentWeather = (city) => {
  let queryStringData = getQueryStringData(city)
  let url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then((currentWeatherData) => {
      return currentWeatherData.data
    })
}

const getForeCast = (city) => {
  let queryStringData = getQueryStringData(city)
  let url = prepUrl('forecast/daily', queryStringData)

  return axios.get(url)
    .then((forecastData) => {
      return forecastData.data
    })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForeCast: getForeCast
}
