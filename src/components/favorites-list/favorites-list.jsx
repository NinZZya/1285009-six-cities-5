import React from 'react';
import FavoritesItem from './components/favorites-item/favorites-item';
import * as Type from '../../types';

const FavoritesList = (props) => {
  const {favorites, activeCityId} = props;
  const cityIds = Object.keys(favorites);

  return (
    <ul className="favorites__list">
      {cityIds.map((cityId, index) => (
        <FavoritesItem
          key={`favorite-${cityId}-${index}`}
          offers={favorites[cityId]}
          activeCityId={activeCityId}
        />
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  favorites: Type.FAVORITES_OFFERS,
  activeCityId: Type.ID,
};

export default FavoritesList;
