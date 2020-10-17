import * as ReviewsType from './reviews-types';
import {DataStatus} from '../../const';


const initialState = {
  status: DataStatus.LOADING,
  reviews: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ReviewsType.CHANGE_REVIEWS_STATUS:
      return Object.assign({}, state, {
        status: action.payload,
      });
    case ReviewsType.SET_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
    default:
      return state;
  }
};

