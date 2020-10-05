import React from 'react';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import Sort from '../../components/sort/sort';
import OffersList from '../../components/offers-list/offers-list';
import NoOffers from '../../components/no-offers/no-offers';
import Map from '../../components/map/map';
import {CITIES, SortType} from '../../const';
import * as Type from '../../types';


const OFFERS = new Array(5).fill(``);
const DEFAULT_SORT = SortType.POPULAR;
const SORTS = Object.values(SortType);

const ClassName = {
  PAGE_EMPTY: `page__main--index-empty`,
  CONTAINER_EMPTY: `cities__places-container--empty`,
  OFFERS_LIST: `cities__places-list tabs__content`,
};

const renderOffers = (offers, city) => {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {`${offers.length} places to stay in ${city.name}`}
        </b>
        <Sort activeSort={DEFAULT_SORT} sorts={SORTS} />
        <OffersList
          offers={OFFERS}
          className={ClassName.OFFERS_LIST}
        />
      </section>
      <div className="cities__right-section">
        <Map />
      </div>
    </div>
  );
};

const Main = ({activeCityId}) => {
  const activeCity = CITIES[activeCityId];

  return (
    <main
      className={`page__main page__main--index ${
        !OFFERS.length ? ClassName.PAGE_EMPTY : ``
      }`}
    >
      <h1 className="visually-hidden">Cities</h1>
      <CitiesTabs
        activeCityId={activeCityId}
      />
      <div className="cities">
        <div
          className={`cities__places-container container ${
            !OFFERS.length ? ClassName.CONTAINER_EMPTY : ``
          }`}
        >
          {OFFERS.length ?
            renderOffers(OFFERS, activeCity) :
            <NoOffers city={activeCity} />}
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  activeCityId: Type.ID,
};


export default Main;
