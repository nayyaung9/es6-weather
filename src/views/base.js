export const elements = {
  body: document.querySelector('body'),
  inputForm: document.querySelector('.input-form'),
  searchButton: document.querySelector('button'),
  loadingText: document.querySelector('#loading'),
  weatherBox: document.querySelector('#weather'),
  weatherCity: weather.firstElementChild,
  weatherDocs: document.querySelector('#weatherDescription'),
  weatherTemp: weather.lastElementChild,
  
  showItems: document.querySelector('#show_record'),
  addNewRecord: document.querySelector('#new_record'),
  addButton: document.querySelector('.add_btn')
}

export const renderUI = () => {
  document.body.innerHTML = ''
}