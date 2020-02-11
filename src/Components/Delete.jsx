import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';

import { withRouter } from 'react-router-dom';

//
const Waiting = ({ dataStore, history }) => {
  setTimeout(() => {
    history.push('/');
  }, 1000);
  return (
    <>
      <div></div>
    </>
  );
};

Waiting.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Waiting)));
