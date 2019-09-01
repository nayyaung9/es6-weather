export const elements = {

  body: document.querySelector('body'),

  // current-weather section
  currentWeather: document.querySelector('.current_weather'),
  loadingText: document.querySelector('#loading'),
  weatherBox: document.querySelector('#weather'),
  weatherCity: document.querySelector('#weatherCity'),
  weatherDocs: document.querySelector('#weatherDescription'),
  weatherTemp: document.querySelector('#weatherTemperature'),

  // plus sing to add new data
  addItem: document.querySelector('.add_location'),

  // read local storage data render
  // parent is renderContainer 
  renderContainer: document.querySelector('.read_storage_data'), 
  showItems: document.querySelector('#show_record'),

  //add new section
  // parent is addNewContainer
  addNewContainer: document.querySelector('.add_new_item'),
  addNewRecord: document.querySelector('#new_record'),
  addButton: document.querySelector('.add_btn'),
  closeTab: document.querySelector('.close-up'),

  // label-text
  labelText: document.querySelector('.label-text')
}

// initial render
export const renderHome = () => {
  // hide after onload page
  elements.renderContainer.style.display = 'none'
  elements.addNewContainer.style.display = 'none'
}

export const renderUI = () => {
  //when adding new record, i want to clean out of whole UI
  elements.currentWeather.style.display = 'none'
  elements.renderContainer.style.display = 'none'
  elements.addItem.style.display = 'none'
  elements.renderContainer.style.display = 'none'
  elements.labelText.style.display = 'none'
  elements.addNewContainer.style.display = 'block'
}

export const clearUI = () => {
  elements.renderContainer.style.display = 'none'
  elements.addNewContainer.style.display = 'none'
  elements.currentWeather.style.display = ''
  elements.addItem.style.display = ''

  elements.addNewRecord.value = ''
}


export const closeTab = () => {
  elements.renderContainer.style.display = 'none'
  elements.addNewContainer.style.display = 'none'
  elements.currentWeather.style.display = ''
  elements.addItem.style.display = ''
}

