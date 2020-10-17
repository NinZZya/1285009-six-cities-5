import React from 'react';
import {Link} from 'react-router-dom';
import RaitingStars from '../../../raiting-stars/raiting-stars';
import BookmarkButton, {BookmarkButtonType} from '../../../bookmark-button/bookmark-button';
import OfferMark from '../../../offer-mark/offer-mark';
import OfferPrice from '../../../offer-price/offer-price';
import {OffersListType} from '../../offers-list';
import {AppPath} from '../../../../const';
import * as Type from '../../../../types';


const TypeName = {
  OFFER_PRICE: `place-card`,
  RAITING_STARS: `place-card__stars`,
  MARK: `place-card`,
};

const getClassName = (type) => {
  switch (type) {
    case OffersListType.MAIN:
      return {
        card: `cities__place-card`,
        image: `cities__image-wrapper`,
      };
    case OffersListType.NEAR:
      return {
        card: `near-places__card`,
        image: `near-places__image-wrapper`,
      };
    case OffersListType.FAVORITES:
      return {
        card: `favorites__card`,
        image: `favorites__image-wrapper`,
      };
    default:
      return {
        card: ``,
        image: ``,
      };
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

  const {onOfferHover} = props;

  const offerRoute = `${AppPath.OFFER}/${id}`;

  const className = getClassName(props.type);
  const imageSize = getImageSize(props.type);

  const handleOfferMouseOver = () => {
    if (onOfferHover) {
      onOfferHover(id);
    }
  };

  const handleOfferMouseOut = () => {
    if (onOfferHover) {
      onOfferHover();
    }
  };

  return (
    <article className={`place-card ${className.card}`}>
      {isPremium && <OfferMark type={TypeName.MARK} />}
      <div className={`place-card__image-wrapper ${className.image}`}>
        <Link
          to={offerRoute}
          onMouseOver={handleOfferMouseOver}
          onMouseOut={handleOfferMouseOut}
        >
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
          <OfferPrice type={TypeName.OFFER_PRICE} price={price} />
          <BookmarkButton type={BookmarkButtonType.OFFER_ITEM} mark={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <RaitingStars type={TypeName.RAITING_STARS} rate={rate} />
        </div>
        <h2 className="place-card__name">
          <Link
            to={`${offerRoute}`}
            onMouseOver={handleOfferMouseOver}
            onMouseOut={handleOfferMouseOut}
          >
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
  onOfferHover: Type.FUNCTION,
};


export default OffersItem;
