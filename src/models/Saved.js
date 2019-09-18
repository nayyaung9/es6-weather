export default class Saved {
  constructor() {
    this.saved = [];
  }

  addLocation(id) {
    this.saved.push(id)

    this.saveLocal()

    return id;
  }

  checkifSaved(id) {
    return this.saved.findIndex(el => el === id) !== -1;
  }

  saveLocal() {
    localStorage.setItem('savedlocations', JSON.stringify(this.saved))
  }

  readLocal() {
    const saved = JSON.parse(localStorage.getItem('savedlocations'));

    if(saved) this.saved = saved;
  }
}