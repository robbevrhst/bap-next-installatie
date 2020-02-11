import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Agesliderstyles from './Age.module.css';
import logo from './assets/next-logo.png';

const Ageslider = ({ dataStore, history }) => {
  const handleChange = input => {
    dataStore.ageInput(input.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Finalage:' + dataStore.age);
    console.log('age confirmed');
    history.push('/Questions');
  };

  return (
    <>
      <div>
        <header className={Agesliderstyles.header}>
          <img className={Agesliderstyles.logo} src={logo} alt="logo" />
          <div className={Agesliderstyles.navcontainer}>
            <a className={Agesliderstyles.active} href="/">
              NL
            </a>
            <a className={Agesliderstyles.langlink} href="/">
              FR
            </a>
            <a className={Agesliderstyles.langlink} href="/">
              EN
            </a>
          </div>
        </header>
        <div className={Agesliderstyles.contentcontainer}>
          <form
            onSubmit={handleSubmit}
            className={Agesliderstyles.formcontainer}
          >
            <h1 className={Agesliderstyles.title}>wat is uw leeftijd?</h1>
            <input
              className={Agesliderstyles.slider}
              type="range"
              min="1"
              max="100"
              onChange={handleChange}
            />
            <button className={Agesliderstyles.confirmbutton}>
              Leeftijd bevestigen
            </button>
          </form>
          <p className={Agesliderstyles.age}>
            {dataStore.age}
            <span className={Agesliderstyles.year}>jaar</span>
          </p>
        </div>
      </div>
    </>
  );
};
Ageslider.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Ageslider)));
