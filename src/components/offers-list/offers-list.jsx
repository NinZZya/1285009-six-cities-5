import React from 'react';
import OffersItem from './components/offers-item/offers-item';
import * as Type from '../../constants/types';


const BASE_CLASS = `places__list`;
const OffersListType = {
  MAIN: `MAIN`,
  NEAR: `NEAR`,
  FAVORITES: `FAVORITES`,
};

const getClassName = (type) => {
  switch (type) {
    case OffersListType.MAIN:
      return `${BASE_CLASS} cities__places-list tabs__content`;
    case OffersListType.NEAR:
      return `${BASE_CLASS} near-places__list`;
    case OffersListType.FAVORITES:
      return `favorites__places`;
    default:
      return BASE_CLASS;
  }
};

const OffersList = (props) => {
  const {
    type,
    offers = [],
    onOfferHover = () => {},
  } = props;

  return (
    <div className={getClassName(type)}>
      {offers.map((offer) => {
        return (
          <OffersItem
            key={`offer-item-${offer.id}`}
            type={type}
            offer={offer}
            onOfferHover={onOfferHover}
          />
        );
      })}
    </div>
  );
};

OffersList.propTypes = {
  type: Type.TYPE_NAME,
  offers: Type.LIST_OFFERS,
  onOfferHover: Type.FUNCTION,
};


export {OffersListType};
export default OffersList;
