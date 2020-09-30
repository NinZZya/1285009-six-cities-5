import React from 'react';
import {CITIES} from '../../const';
import {TCityId} from '../../types';

const NoOffers = ({activeCityId}) => {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">
          {`We could not find any property available at the moment in ${CITIES[activeCityId].name}`}
        </p>
      </div>
    </section>
  );
};

NoOffers.propTypes = {
  activeCityId: TCityId
};

export default NoOffers;
