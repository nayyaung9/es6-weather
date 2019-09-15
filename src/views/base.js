export const elements = {

  body: document.querySelector('body'),
  container: document.querySelector('.ui-container'),
}

export const renderError = (parent, msg) => {
  const markup = `
    <div class="error_message">
      <p>${msg}</p>
    </div>
  `
  parent.insertAdjacentHTML('afterbegin', markup);
}
