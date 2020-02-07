import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import firebase from '../firebase.js';

let db = firebase.database();

//let player1;
//let player2;

const Questions = ({ dataStore }) => {
  const itemsRef = db.ref('GamesLobby/' + dataStore.gamelobby + '/players');
  console.log(dataStore);

  itemsRef.on('value', snapshot => {
    let items = snapshot.val();
    console.log(items);
    console.log(Object.values(items)[0].userId);

    if (Object.values(items)[0].userId === dataStore.namesId[0].userId) {
      let otherPlayer = Object.values(items)[1].username;
      dataStore.otherPlayerAdd(otherPlayer);
      console.log(Object.values(items)[1].username);
    } else if (Object.values(items)[1].userId === dataStore.namesId[0].userId) {
      let otherPlayer2 = Object.values(items)[0].username;
      dataStore.otherPlayerAdd(otherPlayer2);
      console.log(Object.values(items)[0].username);
    }
  });

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
Questions.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(observer(Questions));
