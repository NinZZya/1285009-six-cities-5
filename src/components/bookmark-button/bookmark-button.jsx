import React from 'react';
import * as Type from '../../types';


const BookmarkButtonType = {
  OFFER: `OFFER`,
  OFFER_ITEM: `OFFER_ITEM`,
};

const Prefix = {
  [BookmarkButtonType.OFFER]: `property`,
  [BookmarkButtonType.OFFER_ITEM]: `place-card`,
};


const getImageSize = (type) => {
  switch (type) {
    case BookmarkButtonType.OFFER:
      return {width: 31, height: 33};
    case BookmarkButtonType.OFFER_ITEM:
      return {width: 18, height: 19};
    default:
      return {width: 18, height: 19};
  }
};

const BookmarkButton = (props) => {
  const {type, mark} = props;

  const prefix = Prefix[type];
  const imageSize = getImageSize(type);

  return (
    <button
      className={`${prefix}__bookmark-button button ${mark ?
        `${prefix}__bookmark-button--active` :
        ``}`
      }
      type="button"
    >
      <svg className={`${prefix}__bookmark-icon`} width={imageSize.width} height={imageSize.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButton.propTypes = {
  type: Type.TYPE_NAME,
  mark: Type.FLAG,
};

export {BookmarkButtonType};
export default BookmarkButton;
