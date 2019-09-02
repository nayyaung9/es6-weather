import { elements } from '../views/base'
import { API_KEY, Http } from './Api'
import { CurrentWeather } from './weather-resources'
import { renderHome, renderPage } from '../views/base'

const updateWeather = weatherData => {
  elements.weatherCity.textContent = weatherData.cityName + ', ' + weatherData.country;
  elements.weatherDocs.textContent = weatherData.description;
  elements.weatherTemp.textContent = weatherData.temperature;
  elements.weatherBox.style.display = 'block';
};

export const searchWeather = () => {
  
  // get user physical location
  window.navigator.geolocation.getCurrentPosition(getPosition)

  function getPosition(position) {
    // store user location in localStorage
    localStorage.setItem('latitude', position.coords.latitude)
    localStorage.setItem('longitude', position.coords.longitude)
  }

  // store data in location object
  const location = {
    //get user location from localStorage
    lat: localStorage.getItem('latitude'),
    lon: localStorage.getItem('longitude')
  }

  const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`

  console.log(URL)
  Http.fetchData(URL)
  .then(response => {
    const WEATHER_DATA = new CurrentWeather(response.name,  response.sys.country, response.weather[0].description.toUpperCase(), response.main.temp);
    updateWeather(WEATHER_DATA)
    console.log(response)
  })
  .then(renderHome()) // callback as a renderHome from view/base.js
  .catch(err => console.log(err))
}