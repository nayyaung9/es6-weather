
export class CurrentWeather {
  constructor(cityName, country, description, temperature) {
    this.cityName = cityName,
    this.country = country,
    this.description = description,
    this.temperature = temperature
  }
}

export class SavedLocation {
  constructor(cityName, description, temperature) {
    this.cityName = cityName
    this.description = description,
    this.temperature = temperature
  }
}