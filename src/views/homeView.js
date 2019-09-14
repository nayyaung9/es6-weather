import { elements } from './base'

export const renderHome = () => {

  const markup = `
    <div class="main-app-section">
      <h5 class="text-center"> 
        <i class="fas fa-map-marker-alt"></i> 
        Current Location 
      </h5>
      <div class="container current_weather">
      
      </div>

      <div class="container weatherApp-label">
      <i class="fas fa-map-marker-alt"></i> <h3>Other Location</h3>
      </div>

      <div class="container search_weather_list">
        // <div class="weather_list">
        //   Hello
        // </div>
      </div>

      <button class="add__city btn btn-info">Add</button>
    </div>
  `;

  elements.container.innerHTML = markup
}


export const renderWeather = (result, container) => {
  
  const markup = `
    <div class="currentCityName text-center">
      <h3>${result.name}, ${result.country}</h3>
    </div>
    <div class="d-flex justify-content-around align-items-center">
      <div id="cityWeather_icon">
        <img src="http://openweathermap.org/img/wn/${result.weather.icon}.png" width="100px"/>
      </div>
      <div id="cityWeather_temp">
        <h3 class="text-success">${result.weather.temp}°C</h3>
      </div>
    </div>
    <div class="cityWeather_description text-center">
      <h4>${result.weather.description}</h4>
    </div>
  `;

  container.insertAdjacentHTML('afterbegin', markup);
}