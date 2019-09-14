import Current from './models/Current'
import Dark from './models/Dark'

import { elements } from './views/base'
import * as homeView from './views/homeView'

// global App state
const state = {};

const currentController = async () => {

  const parent = document.querySelector('.current_weather')

  if (!state.current) state.current = new Current();

  console.log(state.current)

  // Get current coords if they are not on state already
  if (state.current.coordAvailable() < 2) {
    await state.current.getCoords();
  }

  // Get weather for current location
  if (state.current.coordAvailable() === 2) {
    await state.current.getWeather();

    homeView.renderWeather(state.current, parent)

  }
}

const darkmodeController = () => {

  console.log(state.theme)
  const checkbox = document.querySelector('input[name=checkbox]')

  if(state.theme.dark === 0) {
    elements.body.classList.remove('dark');
    checkbox.checked = false
  } else if(state.theme.dark === 1) {
    elements.body.classList.add('dark');
    checkbox.checked = true
  }

}


// -- EVENT LISTENER --
elements.body.addEventListener('click', e => {
  const checkbox = e.target.closest('input[name=checkbox]')
  if (checkbox) {
    if (checkbox.checked) {
      state.theme.dark = 1;
      state.theme.saveLocal();
      elements.body.classList.add('dark');
    } else {
      state.theme.dark = 0;
      state.theme.saveLocal();
      elements.body.classList.remove('dark');
    }
  }
})



window.addEventListener('load', () => {

  homeView.renderHome()

  state.theme = new Dark();
  state.theme.readLocal()
  darkmodeController()


  currentController()

})