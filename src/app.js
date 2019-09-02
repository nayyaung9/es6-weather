import { searchWeather } from './models/Current'
import { createStore } from './models/Saved'
import { 
    elements, 
    renderUI,
    reloadUI,
    renderPage,
    themeUI
} from './views/base'

import * as homeView from './views/homeView'


// rendering the whole UI
// elements.body.onload = () => searchWeather()
// elements.body.onload = () => homeView.renderHome()

elements.addButton.addEventListener('click', createStore)
elements.addItem.addEventListener('click', renderUI)
elements.theme.addEventListener('click', themeUI)


// On page load
window.addEventListener('load', () => {
    homeView.renderHome()
})
