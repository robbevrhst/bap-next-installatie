import React from 'react';

import { withRouter } from 'react-router-dom';
import { inject, observer, PropTypes } from 'mobx-react';
import HomeStyles from './Home.module.css';
import logo from './assets/next-logo.png';

const Home = ({ dataStore, history }) => {
  console.log(dataStore);
  const handleSubmit = e => {
    history.push('/Nameform');
  };
  return (
    <>
      <div>
        <header className={HomeStyles.header}>
          <img className={HomeStyles.logo} src={logo} alt="logo" />
          <div className={HomeStyles.navcontainer}>
            <a className={HomeStyles.active} href="/">
              NL
            </a>
            <a className={HomeStyles.langlink} href="/">
              FR
            </a>
            <a className={HomeStyles.langlink} href="/">
              EN
            </a>
          </div>
        </header>
        <div className={HomeStyles.formcontainer}>
          <h1 className={HomeStyles.title}>Welkom</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="submit"
              value="Start"
              className={HomeStyles.startbutton}
            />
          </form>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Home)));
