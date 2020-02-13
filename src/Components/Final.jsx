import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import firebase from '../firebase.js';
import { withRouter } from 'react-router-dom';
import styles from './Final.module.css';
import logo from './assets/next-logo.png';

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

        <div className={styles.container}>
          <h1 className={styles.yourcode}>Jouw unieke code</h1>
          <h2 className={styles.code}>{dataStore.randomnumber}</h2>
          <div className={styles.opsomming}>
            <div className={styles.container1}>
              <div className={styles.number1}>
                <span className={styles.numberone}>1.</span>
                <p className={styles.numbertext}>
                  Bestel tickets voor je gematchte evenement via de link
                  bovenaan.
                </p>
              </div>

              <div className={styles.number2}>
                <span className={styles.numberone}>2.</span>
                <p className={styles.numbertext2}>
                  Print dit ticket uit. Daarop staat een symbool.
                </p>
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.number3}>
                <span className={styles.numberthree}>3.</span>
                <p className={styles.numbertext1}>
                  Aan de ingang van het evenement krijg je een houder, plaats
                  daarin je gevouwen ticket met het symbool naar voor.
                </p>
              </div>

              <div className={styles.number4}>
                <span className={styles.numberone}>4.</span>
                <p className={styles.numbertext4}>
                  Print dit ticket uit. Daarop staat een symbool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Final.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Final)));
