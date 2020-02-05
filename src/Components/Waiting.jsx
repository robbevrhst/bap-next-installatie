import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
const Waiting = ({ dataStore }) => {
  return (
    <>
      <div>
        <h1>Waiting</h1>
        <h2>Name</h2>
      </div>
    </>
  );
};
Waiting.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(observer(Waiting));
