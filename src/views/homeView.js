import { elements } from './base'

export const renderHome = () => {

  const markup = `
    <div class="main-app-section">
      <nav class="navbar navbar-expand-sm bg-white navbar-light">
        <a href="#" class="navbar-brand">
          <b>Darkmode</b>
        </a>
        <label class="switch"> 
          <input type="checkbox" name="checkbox">
          <span class="slider round"></span>
        </label>
      </nav>

      <h5 class="text-center header-text"> <i class="fas fa-map-marker-alt"></i> Current Location </h5>
      <div class="current_weather">
      
      </div>
    </div>
  `;

  elements.container.innerHTML = markup
}


export const renderWeather = (result, container) => {
  
  const markup = `

    <div class="container">        
      <div id="weather">
        <div class="row">
          <div class="col-6">
            <h3 id="weatherCity">${result.name}, ${result.country}</h3>
          </div>
          <div class="col-6">
            <div id="weatherDescription">Weather Description</div>
            <div id="weatherTemperature">${result.weather.temp}</div>
          </div>
        </div>
        </div>
    </div>
  `;

  container.insertAdjacentHTML('afterbegin', markup);
}