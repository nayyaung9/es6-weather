import { elements, renderUI } from '../views/base'
import { Record } from './Record'
import { API_KEY, Http } from './Api'

export const addNewLocation = newRecord => {
    elements.showItems.textContent = newRecord.location
};

export const createStore = () => {
    const CITY_NAME = elements.addNewRecord.value.trim()
    if (CITY_NAME.length === 0) return alert('Please enter a city name')
  
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${API_KEY}`;
  
    Http.fetchData(URL)
    .then(response => {
      const WEATHER_DATA = new Record(CITY_NAME);
      addNewLocation(WEATHER_DATA)
      console.log(response);
    })
    .catch(err => console.log(err))
}
