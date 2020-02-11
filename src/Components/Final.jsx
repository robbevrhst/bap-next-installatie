import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import firebase from '../firebase.js';
import { withRouter } from 'react-router-dom';
let db = firebase.database();
//
const Final = ({ dataStore, history }) => {
  setTimeout(() => {
    console.log('time done');
    db.ref('AantalPlayer/playerAmount').transaction(function(currentData) {
      return (currentData = 0);
    });
    dataStore.createZero();
    history.push('/');
  }, 5000);
  console.log('finaal');

  /*
  });*/

  /* */
  return (
    <>
      <div>
        <h1>Ga naar "blablabla" met onderstaande nummer</h1>
        <h2>{dataStore.randomnumber}</h2>
      </div>
    </>
  );
};

Final.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Final)));
