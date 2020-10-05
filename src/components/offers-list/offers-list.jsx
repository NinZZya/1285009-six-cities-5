import React from 'react';
import OffersItem from '../offers-item/offers-item';

const OFFERS_COUNT = 5;

const OffersList = () => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        new Array(OFFERS_COUNT)
          .fill(``)
          .map((_, index) => <OffersItem key={`offer-${index}`} />)
      }
    </div>
  );
};

export default OffersList;
