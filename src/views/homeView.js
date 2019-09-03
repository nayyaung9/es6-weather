import { elements } from './base'

// Render Initial View
export const renderHome = () => {
  const markup = `
    <h5 class="text-center header-text"> <i class="fas fa-map-marker-alt"></i> Current Location </h5>
    <div class="container app"></div>
  `;
  elements.currentWeather.innerHTML = markup
}

export const renderWeather = (result, container, place) => {
  let markup;

  if(place == 'main') {
    markup = `
    <div id="weather">
      <div class="row">
        <div class="col-6">
          <h3 id="weatherCity">${result.name}</h3>
        </div>
        <div class="col-6">
          <div id="weatherDescription">${result.country}</div>
          <div id="weatherTemperature">Temperature</div>
        </div>
      </div>
    </div>
    `;
  container.insertAdjacentHTML('afterbegin', markup);
  }
  
 
  

}