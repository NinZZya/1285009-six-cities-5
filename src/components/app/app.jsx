import React from 'react';
import Main from '../../pages/main';
import {TCityId} from '../../types';

const App = ({activeCityId}) => {

  return (
    <Main activeCityId={activeCityId} />
  );
};

App.propTypes = {
  activeCityId: TCityId,
};

export default App;
