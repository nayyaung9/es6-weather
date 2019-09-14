import axios from 'axios';
import { API_KEY } from './Api'

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
    this.coords = [];
  }

  async getCoords() {
    try {
      const data = await getCurrentLocation({
        enableHighAccuracy: true,
        maximumAge: 0,
      });
      this.coords = [ data.coords.latitude, data.coords.longitude ];
    } catch(err) {

    }
  }

  coordAvailable() {
    return this.coords.length
  }

  async getWeather() {
    try {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${
          this.coords[0]
        }&lon=${this.coords[1]}&units=metric&appid=${API_KEY}`
      )
     
      this.name = res.data.name;
      this.country = res.data.sys.country;
      this.weather = {
        temp: Math.round(res.data.main.temp),
        description: res.data.weather[0].main,
        icon: res.data.weather[0].icon
      }

      console.log(res)

    } catch(err) {

    }
  }


}