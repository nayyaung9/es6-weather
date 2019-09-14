export default class Dark {
  constructor() {
    this.dark = '';
  }

  saveLocal() {
    localStorage.setItem('dark', JSON.stringify(this.dark));
  }

  readLocal() {
    const theme = JSON.parse(localStorage.getItem('dark'))

    if(theme) this.dark = theme
  }

}
