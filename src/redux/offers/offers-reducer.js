import * as OffersType from './offers-types';
import {LoadStatus, SortType, DEFAULT_CITY_ID} from '../../const';


const initialState = {
  status: LoadStatus.LOADING,
  offers: {},
  sortType: SortType.POPULAR,
  activeCityId: DEFAULT_CITY_ID,
  reviewStatus: LoadStatus.LOADING,
  reviews: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OffersType.CHANGE_OFFERS_STATUS:
      return Object.assign({}, state, {
        status: action.payload,
      });
    case OffersType.SET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case OffersType.CHANGE_OFFERS_SORT_TYPE:
      return Object.assign({}, state, {
        sortType: action.payload,
      });
    case OffersType.CHANGE_ACTIVE_CITY_ID:
      return Object.assign({}, state, {
        activeCityId: action.payload,
      });
    case OffersType.CHANGE_OFFER_REVIEWS_STATUS:
      return Object.assign({}, state, {
        reviewStatus: action.payload,
      });
    case OffersType.SET_OFFER_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
    default:
      return state;
  }
};

