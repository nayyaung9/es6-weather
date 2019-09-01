// Models
import Search from './models/Search'

import { elements } from './views/base'

import * as homeView from './views/homeView';

//global state 
const state = {};
// search controller
async function searchController(e) {
    e.preventDefault();

    if(!this.value) return;
    state.search = new Search(this.value)
}