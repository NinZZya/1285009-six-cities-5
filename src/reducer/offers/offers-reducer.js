import * as OffersType from './offers-types';
import {extend} from '../../utils/utils';
import {DataStatus, SortType, DEFAULT_CITY_ID} from '../../const';


const initialState = {
  status: DataStatus.LOADING,
  offers: {},
  sortType: SortType.POPULAR,
  activeCityId: DEFAULT_CITY_ID,
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
    case OffersType.CHANGE_ACTIVE_CITY_ID:
      return extend(state, {
        activeCityId: action.payload,
      });
    default:
      return state;
  }
};

