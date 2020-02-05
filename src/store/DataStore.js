import { decorate, observable, action } from 'mobx';

class DataStore {
  gamelobby = '';
  names = [];

  gamelobbyname = data => {
    this.gamelobby = data;
  };
}

decorate(DataStore, {
  gamelobby: observable,
  gamelobbyname: action
});

export default DataStore;
