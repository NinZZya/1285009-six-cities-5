import React from 'react';
import MainPage from '../../pages/main';
import {TCityId} from '../../types';

const App = ({activeCityId}) => {
  return (
    <MainPage activeCityId={activeCityId} />
  );
};

App.propTypes = {
  activeCityId: TCityId,
};

export default App;
