import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import firebase from '../firebase.js';
import { withRouter } from 'react-router-dom';
let db = firebase.database();
let name;
let totalPlayers = false;

//
const Waiting = ({ dataStore, history }) => {
  if (dataStore.namesId.length > 0) {
    name = dataStore.namesId[0].username;
    const itemsRef = db.ref('AantalPlayer/playerAmount');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();
      //totalPlayers = items;

      if (items === 2) {
        totalPlayers = true;
      }

      if (totalPlayers === true) {
        history.push('/Questions');
      }
    });
  }

  return (
    <>
      <div>
        <h1>{name}, we wachten even op je medespeler</h1>
      </div>
    </>
  );
};

Waiting.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Waiting)));
