import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';

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
        <h1>ik dan in de Ageslider component</h1>
        <h2>{dataStore.age} zo oud ben je</h2>
        <form onSubmit={handleSubmit}>
          <input type="range" min="1" max="100" onChange={handleChange} />
          <button>Leeftijd bevestigen</button>
        </form>
      </div>
    </>
  );
};
Ageslider.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Ageslider)));
