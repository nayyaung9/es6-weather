import Current from './models/Current'
import { createStore } from './models/Saved'
import { 
    elements, 
    renderUI,
    themeUI
} from './views/base'

import * as homeView from './views/homeView'

//global state
const state = {};

// elements.addButton.addEventListener('click', createStore)
// elements.addItem.addEventListener('click', renderUI)
// elements.theme.addEventListener('click', themeUI)

// Current Location Controller
const currentController = async () => {
  // Render Loader
  const parent = elements.currentWeather
  // base.renderLoader(parent);

  // Create state if its not created
  if (!state.current) state.current = new Current();

  // Get current coords if they are not on state already
  if (state.current.coordAvailable() < 2) {
    await state.current.getCoords();
  }

  // Get weather for current location
  if (state.current.coordAvailable() === 2) {
    await state.current.getWeather();

    // Render weather
    homeView.renderWeather(state.current, parent, 'main');
  }
};


// On page load
window.addEventListener('load', () => {
    homeView.renderHome()

    currentController();
})
