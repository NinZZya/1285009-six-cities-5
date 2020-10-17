import React from 'react';
import {Link} from 'react-router-dom';
import OffersList, {OffersListType} from '../../../offers-list/offers-list';
import * as Type from '../../../../types';
import {AppPath} from '../../../../const';


const FavoritesItem = (props) => {
  const {offers} = props;
  const city = offers[0].city;

  return (
    <li className="favorites__locations-items">
      <div
        className="favorites__locations locations locations--current"
      >
        <div className="locations__item">
          <Link className="locations__item-link" to={`${AppPath.CITY}/${city.id}`}>
            <span>{city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <OffersList type={OffersListType.FAVORITES} offers={offers} />
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  offers: Type.LIST_OFFERS,
};


export default FavoritesItem;
