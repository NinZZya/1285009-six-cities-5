import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import {AppPath, IdName} from '../../const';


const AppRoute = () => {
  const mainPath = [
    AppPath.ROOT,
    `${AppPath.CITY}/:${IdName.CITY}?`,
  ];

  const offerPath = `${AppPath.OFFER}/:${IdName.OFFER}`;

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={mainPath} component={Main} />
        <Route exact path={AppPath.LOGIN} component={Login} />
        <Route exact path={offerPath} component={Offer} />
        <Route exact path={AppPath.FAVORITES}>
          <Favorites />
          <Footer />
        </Route>
        <Route exact path={AppPath.NOT_FOUND} component={PageNotFound} />
        <Redirect to={AppPath.NOT_FOUND} />
      </Switch>
    </>
  );
};


export default AppRoute;
