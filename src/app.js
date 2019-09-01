import { elements } from './views/base'
import { searchWeather } from './models/Search'


elements.searchButton.addEventListener('click', searchWeather)
