import React from 'react';
import {useLocation} from 'react-router-dom';
import AppRoute from '../routes/app-route/app-route';
import {AppPath} from '../const';


const PathToClassName = {
  [AppPath.ROOT]: `page--gray page--main`,
  [AppPath.CITY]: `page--gray page--main`,
  [AppPath.LOGIN]: `page--gray page--login`,
  [AppPath.FAVORITES]: ``,
  [AppPath.OFFER]: ``,
  [AppPath.NOT_FOUND]: `page--gray page--login`,
};

const getPage = (path) => {
  const pathArgs = path.split(`/`);

  return pathArgs.length === 1 ? `/` : `/${pathArgs[1]}`;
};

const App = () => {
  const location = useLocation();
  const page = getPage(location.pathname);

  return (
    <div
      className={`page ${PathToClassName[page]}`}
    >
      <AppRoute />
    </div>
  );
};


export default App;
