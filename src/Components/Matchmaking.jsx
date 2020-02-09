import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';

const Matchmaking = ({ dataStore, history }) => {
  return (
    <>
      <div>
        <h1>Vraag 1 wat staat er zeker nog op je bucketlist</h1>
        <h2>{dataStore.age} zo oud ben je</h2>
        <form action=""></form>
      </div>
    </>
  );
};
Matchmaking.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Matchmaking)));
