import axios from 'axios'
import { API_KEY } from './Api'

export default class Search {
  constructor(query) {
    this.query = query; 
  }

  async getResults() {
    try {
      const res = await axios.get(`
      http://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&appid=${API_KEY}
      `);

      this.results = res.data;
    } catch(err) {
      console.log(err)
    } 
  }
}