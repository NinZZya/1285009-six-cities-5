import React from 'react';
import FavoriteOfferCard from '../favorite-offer-card';

const FavoritesItem = () => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {new Array(3).fill(``).map((_, index) => <FavoriteOfferCard key={`favorite-offer-${index}`} />)}
      </div>
    </li>
  );
};

export default FavoritesItem;
