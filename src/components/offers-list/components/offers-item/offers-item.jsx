import React from 'react';
import {Link} from 'react-router-dom';
import {AppPath, OffersListType} from '../../../../const';
import * as Type from '../../../../types';
import {calcRatePercent} from '../../../../utils/utils';


const getCardClassName = (type) => {
  switch (type) {
    case OffersListType.MAIN:
      return `cities__place-card`;
    case OffersListType.NEAR:
      return `near-places__card`;
    case OffersListType.FAVORITES:
      return `favorites__card`;
    default:
      return ``;
  }
};

const getImageWrapperClassName = (type) => {
  switch (type) {
    case OffersListType.MAIN:
      return `cities__image-wrapper`;
    case OffersListType.NEAR:
      return `near-places__image-wrapper`;
    case OffersListType.FAVORITES:
      return `favorites__image-wrapper`;
    default:
      return ``;
  }
};

const getImageSize = (type) => {
  switch (type) {
    case OffersListType.FAVORITES:
      return {width: 150, height: 110};
    default:
      return {width: 260, height: 200};
  }
};

const renderPremium = () => (
  <div className="place-card__mark">
    <span>Premium</span>
  </div>
);

const OffersItem = (props) => {
  const {
    id,
    price,
    title,
    type,
    images,
    rate,
    isPremium,
    isFavorite,
  } = props.offer;

  const offerRoute = `${AppPath.OFFER}/${id}`;

  const cardClassName = getCardClassName(props.type);
  const imageWrapperClassName = getImageWrapperClassName(props.type);
  const imageSize = getImageSize(props.type);

  return (
    <article className={`place-card ${cardClassName}`}>
      {isPremium && renderPremium()}
      <div className={`place-card__image-wrapper ${imageWrapperClassName}`}>
        <Link to={offerRoute}>
          <img
            className="place-card__image"
            src={images[0]}
            width={imageSize.width}
            height={imageSize.height}
            alt={`Image of ${type}. ${name}`}
          >
          </img>
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
          <Link to={`${offerRoute}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OffersItem.propTypes = {
  type: Type.TYPE_NAME,
  offer: Type.OFFER,
};


export default OffersItem;
