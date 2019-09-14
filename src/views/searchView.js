import { elements } from './base'

export const renderSearch = () => {
  const markup = `
    <div class="container search__city">
      <div class="row">
        <div class="col-10 text-center">
          <h4> <i class="fas fa-map-marker-alt"></i> Other Locations </h4>
        </div>
        <div class="col-2">
          <button class="btn btn-default closeup">X</button>
        </div>
      </div>
     
      <div class="search__city__panel">
        <form>
          <input type="text" class="form-control" />
          <br />
          <button class="btn btn-outline-info"> Add City </button>
        </form>
      </div>
     
    </div>
  `;

  elements.container.innerHTML = markup
}