import { elements } from './views/base'
import { searchWeather } from './models/Search'

// Global App State
const state = {};

const darkmodeController = () => {
  const checkbox = elements.theme;
  if(state.darkMode.dark === 0) {
    elements.theme.classList.remove('dark');
    checkbox.checked == false;
  } else if (state.darkMode.dark === 1) {
    elements.theme.classList.add('dark')
    checkbox.checked == true;
  }
}

elements.searchButton.addEventListener('click', searchWeather)
elements.theme.addEventListener('checked', darkmodeController)