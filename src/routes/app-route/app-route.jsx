import React from 'react';
import {Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import {AppPath} from '../../const';

const DEFAULT_CITY_ID = 1;
const IdName = {
  CITY: `cityId`,
  OFFER: `offerId`,
};

const getId = (match, param) => {
  return match ? match.params[param] : null;
};

const AppRoute = () => {
  const cityRoute = `${AppPath.CITY}/:${IdName.CITY}?`;
  const offerRoute = `${AppPath.OFFER}/:${IdName.OFFER}`;

  const matchCityId = useRouteMatch(cityRoute, IdName.CITY);
  const matchOfferId = useRouteMatch(offerRoute, IdName.OFFER);

  const cityId = Number(getId(matchCityId, IdName.CITY));
  const offerId = Number(getId(matchOfferId, IdName.OFFER));

  return (
    <>
      <Header />
      <Switch>
        <Route exact path={[AppPath.ROOT, cityRoute]}>
          <Main activeCityId={cityId || DEFAULT_CITY_ID} />
        </Route>
        <Route exact path={AppPath.LOGIN} component={Login} />
        <Route exact path={offerRoute}>
          <Offer activeOfferId={offerId} />
        </Route>
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
