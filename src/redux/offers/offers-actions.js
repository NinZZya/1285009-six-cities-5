import * as OffersType from './offers-types';
import {makeActionCreator} from '../../utils/utils';


export const changeOffersStatus = makeActionCreator(OffersType.CHANGE_OFFERS_STATUS);
export const setOffers = makeActionCreator(OffersType.SET_OFFERS);
export const changeOffersSortType = makeActionCreator(OffersType.CHANGE_OFFERS_SORT_TYPE);
export const changeActiveCityId = makeActionCreator(OffersType.CHANGE_ACTIVE_CITY_ID);
export const changeOfferReviewsStatus = makeActionCreator(OffersType.CHANGE_OFFER_REVIEWS_STATUS);
export const setOfferReviews = makeActionCreator(OffersType.SET_OFFER_REVIEWS);
