import * as OfferType from './offer-types';
import {makeActionCreator} from '../../utils/utils';


export const changeOfferReviewsStatus = makeActionCreator(OfferType.CHANGE_OFFER_REVIEWS_STATUS);
export const setOfferReviews = makeActionCreator(OfferType.SET_OFFER_REVIEWS);
export const changeNearOffersStatus = makeActionCreator(OfferType.CHANGE_NEAR_OFFERS_STATUS);
export const setNearOffers = makeActionCreator(OfferType.SET_NEAR_OFFERS);
