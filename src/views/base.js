export const elements = {
  body: document.querySelector('body'),
  container: document.querySelector('.ui-container'),
}

export const renderLoader = parent => {
  const markup = `
    <div class="loader text-center">
      <div class="spinner-grow text-info"></div>
    </div>
  `
  parent.insertAdjacentHTML('afterbegin', markup);
}

export const clearLoader = parent => {
  const loader = parent.querySelector('.loader');
  parent.removeChild(loader);
};

export const renderError = (parent, msg) => {
  const markup = `
    <div class="error_message">
      <p>${msg}</p>
    </div>
  `
  parent.insertAdjacentHTML('afterbegin', markup);
}


