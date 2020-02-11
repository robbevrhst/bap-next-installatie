import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';
//import firebase from '../firebase.js';

//let db = firebase.database();

const Waitingotherplayerdone = ({ dataStore, history }) => {
  if (dataStore.otherPlayerQuestion === 4) {
    history.push('/Matchedevent');
  }
  return (
    <>
      <div>
        <h1>We wachten even tot {dataStore.otherPlayer} klaar is</h1>
      </div>
    </>
  );
};
Waitingotherplayerdone.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(
  withRouter(observer(Waitingotherplayerdone))
);
