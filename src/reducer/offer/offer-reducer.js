import * as OfferType from './offer-types';
import {extend} from '../../utils/utils';
import {DataStatus} from '../../const';


const initialState = {
  reviewsStatus: DataStatus.LOADING,
  reviews: [],
  nearOffersStatus: DataStatus.LOADING,
  nearOffers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OfferType.CHANGE_OFFER_REVIEWS_STATUS:
      return extend(state, {
        reviewsStatus: action.payload,
      });
    case OfferType.SET_OFFER_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case OfferType.CHANGE_NEAR_OFFERS_STATUS:
      return extend(state, {
        nearOffersStatus: action.payload,
      });
    case OfferType.SET_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload,
      });
    default:
      return state;
  }
};

