import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Waitingstyles from './Waiting.module.css';
import logo from './assets/next-logo.png';
//import firebase from '../firebase.js';

//let db = firebase.database();

const Waitingotherplayerdone = ({ dataStore, history }) => {
  if (dataStore.otherPlayerQuestion === 4) {
    history.push('/Matchedevent');
  }
  return (
    <>
      <div>
        <header className={Waitingstyles.header}>
          <img className={Waitingstyles.logo} src={logo} alt="logo" />
          <div className={Waitingstyles.navcontainer}>
            <a className={Waitingstyles.active} href="/">
              NL
            </a>
            <a className={Waitingstyles.langlink} href="/">
              FR
            </a>
            <a className={Waitingstyles.langlink} href="/">
              EN
            </a>
          </div>
        </header>
        <h1 className={Waitingstyles.title}>
          We wachten even tot {dataStore.otherPlayer} klaar is
        </h1>
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
