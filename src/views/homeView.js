import { elements } from './base'

// Render Initial View
export const renderHome = () => {
  const markup = `
    <h5 class="text-center header-text"> <i class="fas fa-map-marker-alt"></i> Current Location </h5>
    <div class="container app"></div>
  `;
  elements.currentWeather.innerHTML = markup
}

export const renderWeather = (current, parent) => {

  const makeup = `
    <div id="weather">
      <div class="row">
        <div class="col-6">
          <h3 id="weatherCity">${current.name}</h3>
        </div>
        <div class="col-6">
          <div id="weatherDescription">Weather Description</div>
          <div id="weatherTemperature">Temperature</div>
        </div>
      </div>
    </div>
  `;

}