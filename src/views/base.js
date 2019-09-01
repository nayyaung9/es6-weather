export const elements = {

  body: document.querySelector('body'),

  // current-weather section
  currentWeather: document.querySelector('.current_weather'),
  inputForm: document.querySelector('.input-form'),
  searchButton: document.querySelector('button'),
  loadingText: document.querySelector('#loading'),
  weatherBox: document.querySelector('#weather'),
  weatherCity: weather.firstElementChild,
  weatherDocs: document.querySelector('#weatherDescription'),
  weatherTemp: weather.lastElementChild,

  // plus sing to add new data
  addItem: document.querySelector('.add_location'),

  // read local storage data render
  // parent is renderContainer 
  renderContainer: document.querySelector('.read_storage_data'), 
  showItems: document.querySelector('#show_record'),
  addNewRecord: document.querySelector('#new_record'),
  addButton: document.querySelector('.add_btn')
}

export const renderUI = () => {
   //when adding new record, i want to clean out of whole UI
   elements.currentWeather.style.display = 'none'
   elements.renderContainer.style.display = 'none'
   elements.addItem.style.display = 'none'
}