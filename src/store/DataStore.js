import { decorate, observable, action } from 'mobx';

class DataStore {
  gamelobby = '';
  namesId = [];
  lobbyfound = false;
  otherPlayer = '';

  gamelobbyname = data => {
    this.gamelobby = data;
  };

  names = data => {
    this.namesId.clear();
    this.namesId.push(data);
  };

  otherPlayerAdd = data => {
    this.otherPlayer = data;
  };
}

decorate(DataStore, {
  namesId: observable.shallow,
  gamelobby: observable,
  lobbyfound: observable,
  otherPlayer: observable,
  gamelobbyname: action,
  names: action,
  otherPlayerAdd: action
});

export default DataStore;
