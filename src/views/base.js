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
  renderCityName: document.querySelector('#render_CityName'),
  renderCityDescription: document.querySelector('#render_CityDescription'),
  renderCityTemperature: document.querySelector('#render_CityTemperature'),

  //add new section
  // parent is addNewContainer
  addNewContainer: document.querySelector('.add_new_item'),
  addNewRecord: document.querySelector('#new_record'),
  addButton: document.querySelector('.add_btn'),
  closeTab: document.querySelector('.close-up'),

  // label-text
  labelText: document.querySelector('.label_text'),
  clearText: document.querySelector('.no_text'),

  // Dark mode,
  theme: document.querySelector('input[type=checkbox]'),

  page: document.querySelector('.render-page')
}

// initial render
export const renderHome = () => {
  // hide after onload page
  elements.renderContainer.style.display = 'none'
  elements.addNewContainer.style.display = 'none'
}

export const renderUI = () => {
  //when adding new record, i want to clean out of whole UI
  // elements.currentWeather.style.display = 'none'
  // elements.renderContainer.style.display = 'none'
  // elements.addItem.style.display = 'none'
  // elements.renderContainer.style.display = 'none'
  // elements.labelText.style.display = 'none'
  // elements.addNewContainer.style.display = 'block'

  const markup = `
  <div class="container app">
        <div id="show_record" style="display: block">
          <div class="row">
            <div class="col-6">
              <h2 id="render_CityName"></h2>
            </div>
            <div class="col-6">
              <div id="render_CityDescription">Weather Description</div>
              <div id="render_CityTemperature">Temperature</div>
            </div>
          </div>
        </div>
      </div>
  `
  elements.renderContainer.innerHTML = markup
}

export const clearUI = () => {
  elements.addNewContainer.style.display = 'none'
  elements.renderContainer.style.display = ''
  elements.currentWeather.style.display = ''
  elements.addItem.style.display = ''
  elements.labelText.style.display = ''
  elements.clearText.style.display = 'none'
  elements.addNewRecord.value = ''
}


export const reloadUI = () => {
  elements.currentWeather.style.display = ''
  elements.renderContainer.style.display = ''
  elements.addNewContainer.style.display = 'none'
}

export const themeUI = () => {
  localStorage.setItem('mode', (localStorage.getItem('mode') || 'light') === 'dark' ? 'light' : 'dark');
  localStorage.getItem('mode') === 'dark' ? document.querySelector('body').setAttribute('data-theme', 'dark') : document.querySelector('body').setAttribute('data-theme', 'light')
}

export const renderPage = () => {
  const markup = `
    <div class="render-page">
      <h1>Hello x</h1>
    </div>
  `

  elements.page.innerHTML = markup
}