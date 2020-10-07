import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import * as Type from '../../types';
import {AppPath, IdName} from '../../const';


const AppRoute = (props) => {
  const {userStatus, user} = props;
  const mainPath = [
    AppPath.ROOT,
    `${AppPath.CITY}/:${IdName.CITY}?`,
  ];

  const offerPath = `${AppPath.OFFER}/:${IdName.OFFER}`;

  return (
    <>
      <Header userStatus={userStatus} user={user} />
      <Switch>
        <Route exact path={mainPath} component={Main} />
        <PrivateRoute
          exact
          path={AppPath.LOGIN}
          userStatus={userStatus}
        >
          <Login />
        </PrivateRoute>
        <Route exact path={offerPath} component={Offer} />
        <PrivateRoute
          exact
          path={AppPath.FAVORITES}
          userStatus={userStatus}
        >
          <Favorites />
          <Footer />
        </PrivateRoute>
        <Route exact path={AppPath.NOT_FOUND} component={PageNotFound} />
        <Redirect to={AppPath.NOT_FOUND} />
      </Switch>
    </>
  );
};

AppRoute.propTypes = {
  userStatus: Type.USER_STATUS,
  user: Type.USER,
};


export default AppRoute;
