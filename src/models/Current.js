import { elements } from '../views/base'
import { API_KEY, Http } from './Api'
import { resolve } from 'url';

// const updateWeather = weatherData => {
//   elements.weatherCity.textContent = weatherData.cityName + ', ' + weatherData.country;
//   elements.weatherDocs.textContent = weatherData.description;
//   elements.weatherTemp.textContent = weatherData.temperature;
//   elements.weatherBox.style.display = 'block';
// };

// Turn navigator.getCurrentPosition in a Promise
function getCurrentLocation(options) {
  return new Promise((resolve, reject) => {
    window.navigator.getCurrentPosition(
      resolve,
      ({ error, message }) => 
      reject (
        Object.assign(new Error(message), {name: 'Position error', code })
      ),
      options
    );
  });
}

export class Current {
  constructor() {
    this.coords = []
  }



}


// async getCurrentWeather() {
    
//   // get user physical location
//   window.navigator.geolocation.getCurrentPosition(getPosition)

//   function getPosition(position) {
//     // store user location in localStorage
//     localStorage.setItem('latitude', position.coords.latitude)
//     localStorage.setItem('longitude', position.coords.longitude)
//   }

//   // store data in location object
//   const location = {
//     //get user location from localStorage
//     lat: localStorage.getItem('latitude'),
//     lon: localStorage.getItem('longitude')
//   }

//   const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`

//   Http.fetchData(URL)
//   .then(response => {
//     // const WEATHER_DATA = new CurrentWeather(response.name,  response.sys.country, response.weather[0].description.toUpperCase(), response.main.temp);
//     this.name = response.name,
//     this.country = response.sys.country,
//     this.description = response.weather[0].description.toUpperCase()
//     this.temperature = response.main.temp
//     console.log(this.name)
//   })
//   .catch(err => console.log(err))
// }