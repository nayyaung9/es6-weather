import { elements } from '../views/base'
import { API_KEY, Http } from './Api'
import { axios } from 'axios'

// const updateWeather = weatherData => {
//   elements.weatherCity.textContent = weatherData.cityName + ', ' + weatherData.country;
//   elements.weatherDocs.textContent = weatherData.description;
//   elements.weatherTemp.textContent = weatherData.temperature;
//   elements.weatherBox.style.display = 'block';
// };

// Turn navigator.getCurrentPosition in a Promise
function getCurrentLocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      ({ code, message }) =>
        reject(
          Object.assign(new Error(message), { name: 'PositionError', code })
        ),
      options
    );
  });
}

export default class Current {
  constructor() {
    this.coords = []
  }

  async getCoords() {
    try {
      const data = await getCurrentLocation({
        enableHighAccuracy: true,
        maximumAge: 0,
      });
      this.coords = [data.coords.latitude, data.coords.longitude];
    } catch(err) {
      // you have to enable to
    
    }
  }

    // Check if coords are on the object
    coordAvailable() {
      return this.coords.length;
    }

    async getWeather() {
      try {
        const res = await axios.get(
          `${process.env.PROXY}api.openweathermap.org/data/2.5/weather?lat=${
            this.coords[0]
          }&lon=${this.coords[1]}&units=metric&appid=${process.env.APIKEY}`
        );
        // Save the data on the object
        this.name = res.data.name;
        this.country = res.data.sys.country;
        this.weather = {
          temp: Math.round(res.data.main.temp),
          temp_max: Math.round(res.data.main.temp_max),
          temp_min: Math.round(res.data.main.temp_min),
          name: res.data.weather[0].main,
          icon: res.data.weather[0].icon,
        };
      } catch (err) {
        // Div of main weather
        // const parent = document.querySelector('.main__weather');
  
        // // Clear loader
        // clearLoader(parent);
  
        // // Render error
        // renderError(parent, 'There was some problem getting the weather');
      }
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