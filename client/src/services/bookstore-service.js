export default class BookstoreService {

  _apiBase = '/api';

  getResource = async (url) => {
    let res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    return await res.json();
  };

  getBooks = async () => {
    return await this.getResource('/books');
  };
}