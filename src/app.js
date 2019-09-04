import { elements, clearUI, themeUI } from './views/base'

import * as homeView from './views/homeView'
import Current from './models/Current';

// global App State
const state = {};

const currentController = async () => {
  
  if(!state.current) state.current = new Current()

  if(state.current) {
    await state.current.getCoords()
  }

  console.log(state.current)
}


elements.addLocation.addEventListener('click', () => {
  clearUI()
})


// dark 
elements.theme.addEventListener('click', () => themeUI())
window.addEventListener('load', () => {
  homeView.renderHome()

  currentController()
});
