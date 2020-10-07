import React from 'react';
import {Link} from 'react-router-dom';
import {AppPath} from '../../../../const';
import * as Type from '../../../../types';
import {calcRatePercent} from '../../../../utils/utils';


const renderPremium = () => (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
);

const OffersItem = ({offer}) => {
  const {
    id,
    price,
    title,
    type,
    images,
    rate,
    isPremium,
    isFavorite,
  } = offer;
  const offerRoute = `${AppPath.OFFER}`;

  return (
    <article className="cities__place-card place-card">
      {isPremium ? renderPremium() : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerRoute}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image"></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ?
              `place-card__bookmark-button--active` :
              ``}`
            }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${calcRatePercent(rate)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${offerRoute}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OffersItem.propTypes = {
  offer: Type.OFFER,
};


export default OffersItem;
