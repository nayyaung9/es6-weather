import { getCurrentWeather } from './models/Current'
import { createStore } from './models/Saved'
import { 
    elements, 
    renderUI,
    themeUI
} from './views/base'

import * as homeView from './views/homeView'

//global state
const state = {};

elements.addButton.addEventListener('click', createStore)
elements.addItem.addEventListener('click', renderUI)
elements.theme.addEventListener('click', themeUI)

// Current Location Controller
const currentController = async () => {
  const parent = elements.body

  if (!state.current) state.current = new Current();

  state.current = getCurrentWeather()
  homeView.renderWeather(state.current, parent)
}

// On page load
window.addEventListener('load', () => {
    homeView.renderHome()

    currentController()
})
