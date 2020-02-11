import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
const Testmobx = ({ dataStore }) => {
  console.log(dataStore.todos[0]);
  return (
    <>
      <div>
        <h1>Test</h1>
        <h2>{dataStore.todos[0]}</h2>
      </div>
    </>
  );
};
Testmobx.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(observer(Testmobx));
