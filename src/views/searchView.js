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
    <div class="weather_list" data-id=${result.results.id}>
      <div class="weather_cityName text-center">
        <h3>${result.query}, ${result.results.sys.country}</h3>
      </div>
      <div class="d-flex justify-content-around align-items-center">
        <div id="cityWeather_icon">
          <img src="http://openweathermap.org/img/wn/${result.results.weather[0].icon}.png" width="100px"/>
          <h4 style="display: inline;">${result.results.weather[0].main}</h4>
          </div>
        <div id="cityWeather_temp">
          <h2 class="text-success">${result.results.main.temp}°C</h2>
        </div>
      </div>
    </div>
    <h4 class="text-center text-danger">
      If you want to save item, click on what you want to save.
    </h4>
  `;

  container.insertAdjacentHTML('afterbegin', markup);
}