import { elements } from '../views/base'
import { API_KEY, Http } from './Api'
import { CurrentWeather } from './weather-resources'
import { renderHome } from '../views/base'

const updateWeather = weatherData => {
  elements.weatherCity.textContent = weatherData.cityName;
  elements.weatherDocs.textContent = weatherData.description;
  elements.weatherTemp.textContent = weatherData.temperature;
  elements.weatherBox.style.display = 'block';
  elements.loadingText.style.display = 'none';

};

export const searchWeather = () => {

  window.navigator.geolocation.getCurrentPosition(getPosition)
  // console.log(position)
  function getPosition(position) {
    localStorage.setItem('latitude', position.coords.latitude)
    localStorage.setItem('longitude', position.coords.longitude)
  }

  const location = {
    lat: localStorage.getItem('latitude'),
    lon: localStorage.getItem('longitude')
  }

  const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`

  console.log(URL)
  Http.fetchData(URL)
  .then(response => {
    const WEATHER_DATA = new CurrentWeather(response.name, response.weather[0].description.toUpperCase(), response.main.temp);
    updateWeather(WEATHER_DATA)
    console.log(response)
  })
  .then(renderHome())
  .catch(err => console.log(err))

  
}