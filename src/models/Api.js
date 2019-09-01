export const API_KEY = '1101c777c19f28cb85b1d7b77d88e6a6'

export class Http {
  static fetchData (url) {
    return new Promise((resolve, reject) => {
      const HTTP = new XMLHttpRequest();

      HTTP.responseType = 'json';
      HTTP.open('GET', url);
      HTTP.send();

      HTTP.onload = function () {
        resolve(this.response);
      }

      HTTP.onerror = function () {
        reject('Something went wrong...');
      }
    });
  }
}