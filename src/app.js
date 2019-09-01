import { elements, renderUI, renderHome } from './views/base'
import { searchWeather } from './models/Search'
import { createStore } from './models/Saved'

// rendering the whole UI
window.onload = () => renderHome()

elements.searchButton.addEventListener('click', searchWeather)
elements.addButton.addEventListener('click', createStore)

elements.addItem.addEventListener('click', renderUI)
