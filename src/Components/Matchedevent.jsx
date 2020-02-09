import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase.js';

let db = firebase.database();

const Matchedevent = ({ dataStore, history }) => {
  const itemsRef = db.ref(
    'GamesLobby/' + dataStore.gamelobby + '/players/' + dataStore.otherpid
  );

  itemsRef.on('value', snapshot => {
    let items = snapshot.val();
    console.log(items.points);
    let allePunten = items.points + dataStore.totalPoints;
    dataStore.completeScore(allePunten);
  });

  if (dataStore.volledigePunten <= 10) {
    return <h1>Dit is evenement 1</h1>;
  } else if (
    dataStore.volledigePunten >= 11 &&
    dataStore.volledigePunten <= 20
  ) {
    return <h1>Dit is evenement 2</h1>;
  } else if (
    dataStore.volledigePunten >= 21 &&
    dataStore.volledigePunten <= 30
  ) {
    return <h1>Dit is evenement 3</h1>;
  }

  return (
    <>
      <div>
        <h1>Matched Event is tadaa</h1>
      </div>
    </>
  );
};
Matchedevent.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Matchedevent)));
