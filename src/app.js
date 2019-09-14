import Current from './models/Current'

import * as homeView from './views/homeView'

// global App state
const state = {};

const currentController = async () => {
  if (!state.current) state.current = new Current();
  console.log(state.current)
  // Get current coords if they are not on state already
  if (state.current.coordAvailable() < 2) {
    await state.current.getCoords();
  }

  // Get weather for current location
  if (state.current.coordAvailable() === 2) {
    await state.current.getWeather();


    

    // Render weather
  }
  homeView.renderHome()

}


window.addEventListener('load', () => {
  currentController()
})