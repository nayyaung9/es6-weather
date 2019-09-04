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
  // addButton: document.querySelector('.add_btn'),
  // closeTab: document.querySelector('.close-up'),

  // // label-text
  labelText: document.querySelector('.weather_statusText'),
  // clearText: document.querySelector('.no_text'),

  // // Dark mode
  // theme: document.querySelector('input[type=checkbox]')
}

// initial render
// export const renderHome = () => {
//   // hide after onload page
//   elements.renderContainer.style.display = 'none'
//   elements.addNewContainer.style.display = 'none'
// }

// export const renderUI = () => {
//   //when adding new record, i want to clean out of whole UI
//   elements.currentWeather.style.display = 'none'
//   elements.renderContainer.style.display = 'none'
//   elements.addItem.style.display = 'none'
//   elements.renderContainer.style.display = 'none'
//   elements.labelText.style.display = 'none'
//   elements.addNewContainer.style.display = 'block'
// }

// export const clearUI = () => {
//   elements.addNewContainer.style.display = 'none'
//   elements.renderContainer.style.display = ''
//   elements.currentWeather.style.display = ''
//   elements.addItem.style.display = ''
//   elements.labelText.style.display = ''
//   elements.clearText.style.display = 'none'
//   elements.addNewRecord.value = ''
// }


// export const reloadUI = () => {
//   elements.currentWeather.style.display = ''
//   elements.renderContainer.style.display = ''
//   elements.addNewContainer.style.display = 'none'
// }

export const themeUI = () => {
  localStorage.setItem('mode', (localStorage.getItem('mode') || 'light') === 'dark' ? 'light' : 'dark');
  localStorage.getItem('mode') === 'dark' ? document.querySelector('body').setAttribute('data-theme', 'dark') : document.querySelector('body').setAttribute('data-theme', 'light')

}

export const clearUI = () => {
  // elements.currentWeather.style.display = 'none'
  elements.labelText.style.display = 'none'
  const markup = `
  <div class="container app" style="margin-top: 20px">
  <div class="add_item">
    <div class="input-group mb-3">
      <input type="text" id="new_record" class="form-control input-form" placeholder="Add City..."/>
      <div class="input-group-append">
        <button class="btn btn-success add_btn" type="button">Search</button> 
      </div>
    </div>
  </div>
</div>
  `;
  elements.container.innerHTML = markup;
}