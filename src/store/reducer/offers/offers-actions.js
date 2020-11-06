import * as OffersType from './offers-types';
import {makeActionCreator} from '../../../utils/utils';


export const changeOffersStatus = makeActionCreator(OffersType.CHANGE_OFFERS_STATUS);
export const setOffers = makeActionCreator(OffersType.SET_OFFERS);
export const changeOffersSortType = makeActionCreator(OffersType.CHANGE_OFFERS_SORT_TYPE);

export const changeOfferStatus = makeActionCreator(OffersType.CHANGE_OFFER_STATUS);

export const changeOfferReviewsStatus = makeActionCreator(OffersType.CHANGE_OFFER_REVIEWS_STATUS);
export const setOfferReviews = makeActionCreator(OffersType.SET_OFFER_REVIEWS);

export const changeNearOffersStatus = makeActionCreator(OffersType.CHANGE_NEAR_OFFERS_STATUS);
export const setNearOffers = makeActionCreator(OffersType.SET_NEAR_OFFERS);

export const setFavoritesOffers = makeActionCreator(OffersType.SET_FAVORITES_OFFERS);
