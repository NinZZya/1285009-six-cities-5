import React from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import {AppRoute} from '../../const';
import * as Type from '../../types';


const LocationToClassName = {
  [AppRoute.ROOT]: `page--gray page--main`,
  [AppRoute.LOGIN]: `page--gray page--login`,
  [AppRoute.FAVORITES]: ``,
  [AppRoute.OFFER]: ``,
};

const getPage = (path) => {
  const pathArgs = path.split(`/`);

  return pathArgs.length > 2 ? `/${pathArgs[1]}/` : `/`;
};

const App = ({activeCityId}) => {
  const location = useLocation();
  const page = getPage(location.pathname);

  return (
    <div
      className={`page ${LocationToClassName[page]}`}
    >
      <Header />
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main activeCityId={activeCityId} />
        </Route>
        <Route exact path={AppRoute.LOGIN} component={Login} />
        <Route exact path={`${AppRoute.OFFER}:id?`} component={Offer} />
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
          <Footer />
        </Route>
        <Redirect to={AppRoute.ROOT} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  activeCityId: Type.id,
};

export default App;
