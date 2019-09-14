import Current from './models/Current'
import Dark from './models/Dark'

import { elements } from './views/base'
import * as homeView from './views/homeView'
import * as searchView from './views/searchView'

// global App state
const state = {};

// Controllers 
const currentController = async () => {
  const parent = document.querySelector('.current_weather')

  if (!state.current) state.current = new Current();

  if (state.current.coordAvailable() < 2) {
    await state.current.getCoords();
  }

  if (state.current.coordAvailable() === 2) {
    await state.current.getWeather();

    homeView.renderWeather(state.current, parent)
  }
}

// Darkmode Controller 
const darkmodeController = () => {
  const checkbox = document.querySelector('input[name=checkbox]')

  if(state.theme.dark === 0) {
    elements.body.classList.remove('dark');
    elements.body.removeAttribute('data-theme')
    checkbox.checked = false
  } else if(state.theme.dark === 1) {
    elements.body.classList.add('dark');
    elements.body.setAttribute('data-theme', 'dark')
    checkbox.checked = true
  }
}


// -- EVENT LISTENER --
elements.body.addEventListener('click', e => {

  const addCityBtn = e.target.closest('.add__city')
  const closePopup = e.target.closest('.closeup')
  const checkbox = e.target.closest('input[name=checkbox]')

  if (checkbox) {
    if (checkbox.checked) {
      state.theme.dark = 1;
      state.theme.saveLocal();
      elements.body.classList.add('dark');
      elements.body.setAttribute('data-theme', 'dark')
    } else {
      state.theme.dark = 0;
      state.theme.saveLocal();
      elements.body.classList.remove('dark');
      elements.body.removeAttribute('data-theme')
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
  }
})



window.addEventListener('load', () => {

  homeView.renderHome()

  state.theme = new Dark();
  state.theme.readLocal()
  darkmodeController()


  currentController()

})