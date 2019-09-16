import { elements } from './base'

export const renderSearch = () => {
  const markup = `
    <div class="container search__city">
      <div class="text-center">
        <h4> <i class="fas fa-map-marker-alt"></i> Other Locations </h4>
      </div>
     
      <div class="search__city__panel">
        <form class="search__form">
          <input type="text" class="form-control search__form__input"/>
          <br />
        </form>
        <button class="btn btn-outline-warning closeup"> Cancel </button>
      </div>
    </div>
  `;

  elements.container.innerHTML = markup
}

export const renderResults = (result, container) => {
  const markup = `
    <div class="weather_list">
      <div class="weather_cityName">
        ${result.query}, ${result.results.weather[0].main}
      </div>
      
    </div>
  `;

  container.insertAdjacentHTML('afterbegin', markup);
}