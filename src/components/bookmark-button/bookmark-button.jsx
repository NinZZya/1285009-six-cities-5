import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import * as UserSelector from '../../store/reducer/user/user-selectors';
import * as OffersOperation from '../../store/reducer/offers/offers-operations';
import history from '../../constants/history';
import * as Type from '../../constants/types';
import {UserStatus, AppPath} from '../../constants/const';

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
  const {
    type,
    mark,
    offer,
    userStatus = UserStatus.NO_AUTH,
    onChangeFavoriteOffer,
  } = props;

  const prefix = Prefix[type];
  const imageSize = getImageSize(type);

  const handleBookmarkButtonClik = useCallback(() => {
    if (userStatus === UserStatus.NO_AUTH) {
      history.push(AppPath.LOGIN);
    }

    const id = offer.id;
    const state = Number(!offer.isFavorite);
    onChangeFavoriteOffer(id, state);
  }, [userStatus, offer]);

  return (
    <button
      className={`${prefix}__bookmark-button button ${mark ?
        `${prefix}__bookmark-button--active` :
        ``}`
      }
      type="button"
      onClick={handleBookmarkButtonClik}
    >
      <svg className="place-card__bookmark-icon" width={imageSize.width} height={imageSize.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButton.propTypes = {
  type: Type.TYPE_NAME,
  mark: Type.FLAG,
  offer: Type.OFFER,
  userStatus: Type.USER_STATUS,
  onChangeFavoriteOffer: Type.FUNCTION,
};

const mapStateToProps = (state) => ({
  userStatus: UserSelector.getUserStatus(state),
});

const mapDispatchToPorps = (dispatch) => ({
  onChangeFavoriteOffer: (id, state) => {
    dispatch(OffersOperation.changeFavoriteOfferAsync(id, state));
  },
});


export {BookmarkButtonType};
export {BookmarkButton};
export default connect(mapStateToProps, mapDispatchToPorps)(BookmarkButton);
