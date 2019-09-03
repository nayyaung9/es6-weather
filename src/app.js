import { searchWeather } from './models/Current'
import { createStore } from './models/Saved'
import { 
    elements, 
    renderUI,
    themeUI
} from './views/base'

const currentController = () => {

}


// rendering the whole UI
// elements.body.onload = () => searchWeather()
// elements.location.reload(true) = () => reloadUI()
elements.addButton.addEventListener('click', createStore)
elements.addItem.addEventListener('click', renderUI)
elements.theme.addEventListener('click', themeUI)


window.addEventListener('load', () => {
  elements.body
});
