import { searchWeather } from './models/Search'
import { createStore } from './models/Saved'
import { 
    elements, 
    renderUI, 
    closeTab
} from './views/base'

// rendering the whole UI
elements.body.onload = () => searchWeather()

elements.addButton.addEventListener('click', createStore)
elements.closeTab.addEventListener('click', closeTab)
elements.addItem.addEventListener('click', renderUI)
