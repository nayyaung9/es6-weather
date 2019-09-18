// Models
import Current from './models/Current'
import Search from './models/Search'
import Saved from './models/Saved'
import Others from './models/Others'
// Darkmode
import Dark from './models/Dark'

// Views
import * as base from './views/base'
import * as homeView from './views/homeView'
import * as searchView from './views/searchView'

// global App state
const state = {};

// -- Controllers collections --
// Get Current Weather by Geolocation API coords
const currentController = async () => {

  const parent = document.querySelector('.current_weather')
  // this one

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

  console.log(state.search)
}

const otherController = () => {

  if(!state.others) state.others = new Others()

  const parent = document.querySelector('.search__weather')

  if(state.saved.checkSaved() === 0) {
    base.renderError(
      parent, 
      'You have no saved cities, click the button to add them.'
    )
    return;
  }

}

const savedController = id => {
  if (!state.saved) state.saved = new Saved();
  
  // if location isn't saved already, save it
  if (!state.saved.checkifSaved(id)) {
    // add the location
    state.saved.addLocation(id);
    
    // save to local storage
    state.saved.saveLocal();
    // render home when added
    homeView.renderHome();
    darkmodeController();
    currentController();
    otherController();
  } else {
    
  }
}
 
// -- EVENT LISTENER --
base.elements.body.addEventListener('click', e => {

  const addCityBtn = e.target.closest('.add__city')
  const closePopup = e.target.closest('.closeup')
  const checkbox = e.target.closest('input[name=checkbox]')
  const savedItem = e.target.closest('.weather_list')

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

  if(savedItem) {
    const id = parseInt(savedItem.dataset.id, 10)
    savedController(id)
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

  state.saved = new Saved()

  state.theme = new Dark();
  state.theme.readLocal()
  darkmodeController()

  currentController()
  otherController()
});