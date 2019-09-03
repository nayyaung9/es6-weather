import { elements } from './views/base'

import * as homeView from './views/homeView'
import Current from './models/Current';

// global App State
const state = {};

const currentController = () => {
  
  if(!state.current) state.current = new Current()

  
}





window.addEventListener('load', () => {
  homeView.renderHome()
});
