import { elements } from './base'

export const renderHome = () => {

  const markup = `
    <nav class="navbar navbar-expand-sm bg-white navbar-light">
      <a href="#" class="navbar-brand">
        <b>Darkmode</b>
      </a>
      <label class="switch"> 
        <input type="checkbox" name="checkbox">
        <span class="slider round"></span>
      </label>
    </nav>
  `;

  elements.header.innerHTML = markup
}


export const renderWeather = result => {
  
  const markup = `
    <h5 class="text-center header-text"> <i class="fas fa-map-marker-alt"></i> Current Location </h5>
    <div class="container app">        
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
  
  elements.container.innerHTML = markup;
}