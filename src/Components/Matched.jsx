import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase.js';

let db = firebase.database();

const Matched = ({ dataStore, history }) => {
  console.log(dataStore);
  const itemsRef = db.ref('GamesLobby/' + dataStore.gamelobby + '/players');

  itemsRef.on('value', snapshot => {
    let items = snapshot.val();

    if (Object.values(items)[0].userId === dataStore.namesId[0].userId) {
      let otherPlayer = Object.values(items)[1].username;
      dataStore.otherPlayerAdd(otherPlayer);
      dataStore.otherPlayerId(Object.values(items)[1].userId);
    } else if (Object.values(items)[1].userId === dataStore.namesId[0].userId) {
      let otherPlayer2 = Object.values(items)[0].username;
      dataStore.otherPlayerAdd(otherPlayer2);
      dataStore.otherPlayerId(Object.values(items)[0].userId);
    }
  });

  setTimeout(() => {
    console.log('time done');
    history.push('/Ageslider');
  }, 3000);

  return (
    <>
      <div>
        <h1>
          {dataStore.namesId[0].username}, je ben gematched met{' '}
          {dataStore.otherPlayer}
        </h1>
      </div>
    </>
  );
};
Matched.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Matched)));
