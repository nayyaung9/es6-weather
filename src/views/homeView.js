import { elements } from './base'
import { searchWeather } from '../models/Current'

// Render Initial View
export const renderHome = () => {
  const markup = `
    <h5 class="text-center header-text"> <i class="fas fa-map-marker-alt"></i> Current Location </h5>
    <div class="container app">        
      <div id="weather">
        <div class="row">
          <div class="col-6">
            <h3 id="weatherCity">City Name</h3>
          </div>
          <div class="col-6">
            <div id="weatherDescription">Weather Description</div>
            <div id="weatherTemperature">Temperature</div>
          </div>
        </div>
      </div>
    </div>
  `;
  elements.currentWeather.innerHTML = markup
}