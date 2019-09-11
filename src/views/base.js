export const elements = {

  body: document.querySelector('body'),

  // current-weather section
  container: document.querySelector('.current_weather'),

  addLocation: document.querySelector('.add-cityWeather'),
  // loadingText: document.querySelector('#loading'),
  // weatherBox: document.querySelector('#weather'),
  // weatherCity: document.querySelector('#weatherCity'),
  // weatherDocs: document.querySelector('#weatherDescription'),
  // weatherTemp: document.querySelector('#weatherTemperature'),


  addNewContainer: document.querySelector('.add_new_item'),
  // addNewRecord: document.querySelector('#new_record'),
  addButton: document.querySelector('.add_btn'),
  // closeTab: document.querySelector('.close-up'),

  // // label-text
  labelText: document.querySelector('.weather_statusText'),

  // // Dark mode
  theme: document.querySelector('input[type=checkbox]')
}


export const themeUI = () => {
  localStorage.setItem('mode', (localStorage.getItem('mode') || 'light') === 'dark' ? 'light' : 'dark');
  localStorage.getItem('mode') === 'dark' ? document.querySelector('body').setAttribute('data-theme', 'dark') : document.querySelector('body').setAttribute('data-theme', 'light')

}

