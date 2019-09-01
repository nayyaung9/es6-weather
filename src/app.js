import { searchWeather } from './models/Search'
import { createStore } from './models/Saved'
import { 
    elements, 
    renderUI, 
    renderHome,
    closeTab
} from './views/base'

// rendering the whole UI
window.onload = () => renderHome()

elements.searchButton.addEventListener('click', searchWeather)
elements.addButton.addEventListener('click', createStore)
elements.closeTab.addEventListener('click', closeTab)
elements.addItem.addEventListener('click', renderUI)
