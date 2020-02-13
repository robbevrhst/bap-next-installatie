import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase.js';
import styles from './Matched.module.css';
import logo from './assets/next-logo.png';

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
        <header className={styles.header}>
          <img className={styles.logo} src={logo} alt="logo" />
          <div className={styles.navcontainer}>
            <a className={styles.active} href="/">
              NL
            </a>
            <a className={styles.langlink} href="/">
              FR
            </a>
            <a className={styles.langlink} href="/">
              EN
            </a>
          </div>
        </header>
        <h1 className={styles.title}>
          Hallo{' '}
          <span className={styles.red}>{dataStore.namesId[0].username}</span>,
          je nextperience met{' '}
          <span className={styles.red}>{dataStore.otherPlayer}</span> begint
          hier
        </h1>
      </div>
    </>
  );
};
Matched.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Matched)));
