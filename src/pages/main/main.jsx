import React from 'react';
import Header from '../../components/header';
import Tabs from '../../components/tabs';
import Sort from '../../components/sort';
import OffersList from '../../components/offers-list';
import Map from '../../components/map';
import {CITIES} from '../../const';
import {TCityId} from '../../types';

const Main = ({activeCityId}) => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs activeCityId={activeCityId} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {`312 places to stay in ${CITIES[activeCityId].name}`}
              </b>
              <Sort />
              <OffersList />
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  activeCityId: TCityId,
};

export default Main;
