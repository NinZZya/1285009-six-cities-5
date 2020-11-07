import React from 'react';
import FavoritesItem from './components/favorites-item/favorites-item';
import * as Type from '../../constants/types';

const FavoritesList = (props) => {
  const {favorites = {}} = props;
  const cityIds = Object.keys(favorites);

  return (
    <ul className="favorites__list">
      {cityIds.map((cityId, index) => (
        <FavoritesItem
          key={`favorite-${cityId}-${index}`}
          offers={favorites[cityId]}
        />
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  favorites: Type.FAVORITES_OFFERS,
};

export default FavoritesList;
