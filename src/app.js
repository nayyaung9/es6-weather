import { searchWeather } from './models/Current'
import { createStore } from './models/Saved'
import { 
    elements, 
    renderUI, 
    closeTab
} from './views/base'

// rendering the whole UI
elements.body.onload = () => searchWeather()

elements.addButton.addEventListener('click', createStore)
elements.addItem.addEventListener('click', renderUI)
elements.closeTab.addEventListener('click', closeTab)

