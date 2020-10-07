import React from 'react';
import * as Type from '../../types';


const OfferHeader = ({title, isFavorite}) => {
  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {title}
      </h1>
      <button
        className={`button property__bookmark-button ${isFavorite ?
          `property__bookmark-button--active` :
          ``}`
        }
        type="button"
      >
        <svg className="place-card__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
};

OfferHeader.propTypes = {
  title: Type.OFFER_TITLE,
  isFavorite: Type.OFFER_IS_FAVORITE,
};


export default OfferHeader;
