import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase.js';
import { withRouter } from 'react-router-dom';
import { inject, observer, PropTypes } from 'mobx-react';
let db = firebase.database();
const Home = ({ dataStore, history }) => {
  console.log(dataStore);
  const handleSubmit = e => {
    history.push('/Nameform');
  };
  return (
    <>
      <div>
        <h1>Hallo</h1>
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Start" />
        </form>
      </div>
    </>
  );
};

Home.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Home)));
