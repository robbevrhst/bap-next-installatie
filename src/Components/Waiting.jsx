import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import firebase from '../firebase.js';
import { withRouter } from 'react-router-dom';
import Waitingstyles from './Waiting.module.css';
import logo from './assets/next-logo.png';
let db = firebase.database();
let name;

//
const Waiting = ({ dataStore, history }) => {
  if (dataStore.namesId.length > 0) {
    name = dataStore.namesId[0].username;
    const itemsRef = db.ref('AantalPlayer/playerAmount');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();

      if (items === 2) {
        setTimeout(() => {
          console.log('time done');
          history.push('/Matched');
        }, 1000);
        // history.push('/Matched');
      }
    });
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
          Hallo {name}, we wachten even tot je partner klaar is
        </h1>
      </div>
    </>
  );
};

Waiting.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Waiting)));
