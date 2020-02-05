import DataStore from './DataStore';

class Store {
  constructor() {
    this.dataStore = new DataStore(this);
  }
}

export default new Store();
