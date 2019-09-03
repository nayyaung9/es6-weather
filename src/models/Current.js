export default class Current {
  constructor() {
    this.weather = [],
    this.coords = []
  }

  async getCoords() {
    window.navigator.geolocation.getCurrentPosition(getposition)

    getposition = position => {
      this.coords = [position.coords.latitude, position.coords.longitude]
    }
  }

}