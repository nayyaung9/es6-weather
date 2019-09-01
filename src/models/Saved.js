import { elements, clearUI } from '../views/base'
import { SavedLocation } from './weather-resources'
import { API_KEY, Http } from './Api'

export const addNewLocation = newRecord => {
  const savedItems = localStorage.getItem('weathers');

  // elements.showItems.innerHTML = JSON.parse(savedItems).toString()
};

export const createStore = () => {
  const CITY_NAME = elements.addNewRecord.value.trim()
  if (CITY_NAME.length === 0) return alert('Please enter a city name')
  
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${API_KEY}`;
  
  Http.fetchData(URL)
  .then(response => {
    const WEATHER_DATA = new SavedLocation(CITY_NAME);
    addNewLocation(WEATHER_DATA)
    //saved data in local storage
    localStorage.setItem('weathers', JSON.stringify(WEATHER_DATA))
  })
  .then(clearUI)
  .catch(err => console.log(err))
}
