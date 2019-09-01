import { elements, renderUI } from './views/base'
import { searchWeather } from './models/Search'
import { createStore } from './models/Saved'

elements.searchButton.addEventListener('click', searchWeather)
elements.addButton.addEventListener('click', createStore)

elements.addItem.addEventListener('click', renderUI)
