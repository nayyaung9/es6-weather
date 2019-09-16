import { elements } from './base'

export const renderHome = () => {

  const markup = `
    <div class="main-app-section">
      <h5 class="text-center"> 
        <i class="fas fa-map-marker-alt"></i> 
        Current Location 
      </h5>
      <div class="container">
      <div class="current_weather">
      
      </div></div>

      <div class="container weatherApp-label text-center">
        <h3><i class="fas fa-map-marker-alt"></i> Other Location</h3>
        <i class="fas fa-plus add__city"></i>
      </div>

      <div class="search__weather container">
        
      </div>
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
          <h2 class="text-success">${result.weather.temp}°C</h2>
        </div>
      </div>
      <div class="cityWeather_description text-center">
        <h4>${result.weather.description}</h4>
      </div>
  `;

  container.insertAdjacentHTML('afterbegin', markup);
}