import axios from 'axios'

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios.get(
        `api.openweathermap.org/data/2.5/weather?q=${this.query}`
      );

      this.results = res.data;
    } catch (err) {
      console.log(err);
    }
  }
}