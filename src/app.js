import Current from './models/Current'
import Search from './models/Search'
import Saved from './models/Saved'
import Dark from './models/Dark'

// import { elements, renderLoader, clearLoader } from './views/base'
import * as base from './views/base'
import * as homeView from './views/homeView'
import * as searchView from './views/searchView'
// global App state
const state = {};

// Controllers 
const currentController = async () => {

  const parent = document.querySelector('.current_weather')

  base.renderLoader(parent)

  if (!state.current) state.current = new Current();

  if (state.current.coordAvailable() < 2) {
    await state.current.getCoords();
  }

  if (state.current.coordAvailable() === 2) {
    await state.current.getWeather();

    base.clearLoader(parent)

    homeView.renderWeather(state.current, parent)
  }
}

// Darkmode Controller 
const darkmodeController = () => {
  const checkbox = document.querySelector('input[name=checkbox]')

  if(state.theme.dark === 0) {
    base.elements.body.classList.remove('dark');
    base.elements.body.removeAttribute('data-theme')
    checkbox.checked = false
  } else if(state.theme.dark === 1) {
    base.elements.body.classList.add('dark');
    base.elements.body.setAttribute('data-theme', 'dark')
    checkbox.checked = true
  }
}

// SearchController 
async function searchController(e)  {
  e.preventDefault();

  if (!this.value) return;
  state.search = new Search(this.value);

  // Get results
  await state.search.getResults();

  renderBackHome()

  const parent = document.querySelector('.search__weather');

  searchView.renderResults(state.search, parent)
}

// -- EVENT LISTENER --
base.elements.body.addEventListener('click', e => {

  const addCityBtn = e.target.closest('.add__city')
  const closePopup = e.target.closest('.closeup')
  const checkbox = e.target.closest('input[name=checkbox]')

  if (checkbox) {
    if (checkbox.checked) {
      state.theme.dark = 1;
      state.theme.saveLocal();
      base.elements.body.classList.add('dark');
      base.elements.body.setAttribute('data-theme', 'dark')
    } else {
      state.theme.dark = 0;
      state.theme.saveLocal();
      base.elements.body.classList.remove('dark');
      base.elements.body.removeAttribute('data-theme')
    }
  }

  if(closePopup) {
    //render Home
    homeView.renderHome()
    darkmodeController()
    currentController()
  }

  if(addCityBtn) {
    searchView.renderSearch()

    const form = document.querySelector('.search__form');
    const input = document.querySelector('.search__form__input');
    form.addEventListener('submit', searchController);
    input.addEventListener('change', searchController);
  }


})

const renderBackHome = () => {
  homeView.renderHome()

  state.theme = new Dark();
  state.theme.readLocal()
  darkmodeController()

  currentController()
}


window.addEventListener('load', () => {

  homeView.renderHome()

  state.theme = new Dark();
  state.theme.readLocal()
  darkmodeController()


  currentController()

})