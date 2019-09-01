import { elements } from './base'

export const renderHome = () => {
  const markup = `
    <div class="row">
      <h1>Add new location</h1>
    </div>
  `;

  elements.container.innerHTML = markup
}