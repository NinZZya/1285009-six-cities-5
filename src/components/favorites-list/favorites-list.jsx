import React from 'react';
import FavoritesItem from './components/favorites-item/favorites-item';

const FavoritesList = () => {
  return (
    <ul className="favorites__list">
      {new Array(2).fill(``).map((_, index) => <FavoritesItem key={`favorite-item-${index}`} />)}
    </ul>
  );
};

export default FavoritesList;
