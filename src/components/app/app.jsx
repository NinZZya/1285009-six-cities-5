import React from 'react';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {AppRoute} from '../../const';
import {TCityId} from '../../types';


const App = ({activeCityId}) => {
  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main activeCityId={activeCityId} />
        </Route>
        <Route exact path={AppRoute.LOGIN} component={Login} />
        <Route exact path={AppRoute.OFFER} component={Offer} />
        <Route exact path={AppRoute.FAVORITES} component={Favorites} />
        <Redirect to={AppRoute.ROOT} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  activeCityId: TCityId,
};

export default App;
