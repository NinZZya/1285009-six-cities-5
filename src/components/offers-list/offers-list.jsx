import React from 'react';
import OffersItem from './components/offers-item/offers-item';
import * as Type from '../../types';


const OffersList = (props) => {
  const {
    offers = [],
    className = ``,
  } = props;

  return (
    <div className={`places__list ${className}`}>
      {offers.map((_, index) => <OffersItem key={`offer-item-${index}`} />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: Type.LIST_OFFERS,
  className: Type.CLASS_NAME,
};


export default OffersList;
