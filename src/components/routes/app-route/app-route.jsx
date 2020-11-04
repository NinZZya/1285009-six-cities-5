import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';
import MainPage from '@pages/main-page/main-page';
import LoginPage from '@pages/login-page/login-page';
import OfferPage from '@pages/offer-page/offer-page';
import FavoritesPage from '@pages/favorites-page/favorites-page';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import PrivateRoute from '@routes/private-route/private-route';
import * as Type from '@/constants/types';
import {AppPath, IdName} from '@/constants/const';


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
        <Route exact path={mainPath} component={MainPage} />
        <PrivateRoute exact path={AppPath.LOGIN}>
          <LoginPage />
        </PrivateRoute>
        <Route exact path={offerPath} component={OfferPage} />
        <PrivateRoute exact path={AppPath.FAVORITES}>
          <FavoritesPage />
          <Footer />
        </PrivateRoute>
        <Route exact path={AppPath.NOT_FOUND} component={NotFoundPage} />
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
