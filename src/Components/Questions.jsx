import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';
//import firebase from '../firebase.js';

//let db = firebase.database();

const Questions = ({ dataStore, history }) => {
  return (
    <>
      <div>
        <h1>
          {dataStore.namesId[0].username}, ik dan in de Questions component
        </h1>
      </div>
    </>
  );
};
Questions.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Questions)));
