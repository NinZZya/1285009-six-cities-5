import React from 'react';
import Tabs from '../../components/tabs/tabs';
import Sort from '../../components/sort/sort';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import {CITIES} from '../../const';
import * as Type from '../../types';

const Main = ({activeCityId}) => {
  return (
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
  );
};

Main.propTypes = {
  activeCityId: Type.id,
};

export default Main;
