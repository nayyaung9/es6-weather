import { elements } from '../views/base'
import { API_KEY, Http } from './Api'
import { WeatherData } from './weather-data'

const updateWeather = weatherData => {
  elements.weatherCity.textContent = weatherData.cityName;
  elements.weatherDocs.textContent = weatherData.description;
  elements.weatherTemp.textContent = weatherData.temperature;
  elements.weatherBox.style.display = 'block';
  elements.loadingText.style.display = 'none';
};

export const searchWeather = () => {

  const CITY_NAME = elements.inputForm.value.trim()
  if (CITY_NAME.length === 0) return alert('Please enter a city name')

  elements.weatherBox.style.display = 'none';
  elements.loadingText.style.display = 'block';

  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${API_KEY}`;

  Http.fetchData(URL)
  .then(response => {
    const WEATHER_DATA = new WeatherData(CITY_NAME, response.weather[0].description.toUpperCase());
    updateWeather(WEATHER_DATA)
  })
  .catch(err => console.log(err))

  console.log(URL);
}