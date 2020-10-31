import * as OffersType from './offers-types';
import {extend} from '../../utils/utils';
import {DataStatus, SortType} from '../../const';


const initialState = {
  status: DataStatus.LOADING,
  offers: {},
  favorites: {},
  sortType: SortType.POPULAR,
  offerStatus: DataStatus.LOADING,
  reviewsStatus: DataStatus.LOADING,
  reviews: [],
  nearOffersStatus: DataStatus.LOADING,
  nearOffers: [],
};


export default (state = initialState, action) => {
  switch (action.type) {
    case OffersType.CHANGE_OFFERS_STATUS:
      return extend(state, {
        status: action.payload,
      });
    case OffersType.SET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case OffersType.CHANGE_OFFERS_SORT_TYPE:
      return extend(state, {
        sortType: action.payload,
      });
    case OffersType.CHANGE_OFFER_STATUS:
      return extend(state, {
        offerStatus: action.payload,
      });
    case OffersType.CHANGE_OFFER_REVIEWS_STATUS:
      return extend(state, {
        reviewsStatus: action.payload,
      });
    case OffersType.SET_OFFER_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case OffersType.CHANGE_NEAR_OFFERS_STATUS:
      return extend(state, {
        nearOffersStatus: action.payload,
      });
    case OffersType.SET_NEAR_OFFERS:
      return extend(state, {
        nearOffers: action.payload,
      });
    case OffersType.SET_FAVORITES_OFFERS:
      return extend(state, {
        favorites: action.payload,
      });
    default:
      return state;
  }
};
