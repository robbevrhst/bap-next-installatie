import React from 'react';

import { withRouter } from 'react-router-dom';
import { inject, observer, PropTypes } from 'mobx-react';
import HomeStyles from './Home.module.css';
import logo from './assets/next-logo.png';
import imgone from './assets/imgone.png';
import imgtwo from './assets/imgtwo.png';

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
        <h1 className={HomeStyles.title}>
          Welkom bij de <br />
          nextperience
        </h1>
        <div className={HomeStyles.buttoncontainer}>
          <img className={HomeStyles.imgone} src={imgone} alt="" />
          <img className={HomeStyles.imgtwo} src={imgtwo} alt="" />
          <div className={HomeStyles.formcontainer}>
            <form onSubmit={handleSubmit}>
              <input
                type="submit"
                value="Vind de perfecte match samen"
                className={HomeStyles.startbutton}
              />
            </form>
          </div>
          <span className={HomeStyles.of}>of</span>
          <a className={HomeStyles.alone} href="">
            ontdek alleen
          </a>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Home)));
