export class Location {
  constructor(latitude, longitude) {
    this.latitude = latitude,
    this.longitude = longitude
  }
}


export class CurrentWeather {
  constructor(cityName, description, temperature) {
    this.cityName = cityName,
    this.description = description,
    this.temperature = temperature
  }
}

export class SavedLocation {
  constructor(location) {
    this.location = location
  }
}